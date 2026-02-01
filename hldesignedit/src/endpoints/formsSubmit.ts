import { z } from "zod";
import type { AppContext } from "../types";

const MAX_FIELD_LENGTH = 10_000;

const FormSubmitSchema = z.object({
	formType: z.enum(["contact", "project"]),
	data: z.record(z.string(), z.any()).default({}),
	honeypot: z.string().optional().default(""),
	pageUrl: z.string().url().optional(),
});

function getAllowedOrigins(env: Env): string[] {
	const configured = (env.ALLOWED_ORIGINS || "")
		.split(",")
		.map((s) => s.trim())
		.filter(Boolean);

	const defaults = [
		"https://hldesignedit.com",
		"https://www.hldesignedit.com",
		"http://localhost:5173",
		"http://127.0.0.1:5173",
		"https://hligon35.github.io",
	];

	return Array.from(new Set([...configured, ...defaults]));
}

function corsHeaders(origin: string | null, env: Env): Record<string, string> {
	if (!origin) return {};
	const allowed = getAllowedOrigins(env);
	if (!allowed.includes(origin)) return {};

	return {
		"Access-Control-Allow-Origin": origin,
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Max-Age": "86400",
		Vary: "Origin",
	};
}

function normalizeString(value: unknown): string {
	if (value == null) return "";
	if (Array.isArray(value)) return value.map((v) => normalizeString(v)).join(", ");
	return String(value);
}

function sanitizeField(value: unknown): string {
	const text = normalizeString(value).replace(/\r\n/g, "\n");
	return text.length > MAX_FIELD_LENGTH ? `${text.slice(0, MAX_FIELD_LENGTH)}…` : text;
}

function pickReplyTo(data: Record<string, unknown>): string | undefined {
	const candidates = [data.email, data.contactEmail, data["emailAddress"]];
	for (const candidate of candidates) {
		const email = normalizeString(candidate).trim();
		if (email && /^\S+@\S+\.\S+$/.test(email)) return email;
	}
	return undefined;
}

async function sendViaResend(options: {
	apiKey: string;
	from: string;
	to: string;
	subject: string;
	text: string;
	replyTo?: string;
}) {
	const response = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${options.apiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from: options.from,
			to: [options.to],
			subject: options.subject,
			text: options.text,
			...(options.replyTo ? { reply_to: options.replyTo } : {}),
		}),
	});

	if (!response.ok) {
		const errorText = await response.text().catch(() => "");
		throw new Error(`Resend error (${response.status}): ${errorText || response.statusText}`);
	}
}

export async function FormsSubmit(c: AppContext) {
	const origin = c.req.header("Origin") || null;
	const cors = corsHeaders(origin, c.env);

	if (c.req.method === "OPTIONS") {
		return new Response(null, { status: 204, headers: cors });
	}

	let parsed: z.infer<typeof FormSubmitSchema>;
	try {
		const body = await c.req.json();
		parsed = FormSubmitSchema.parse(body);
	} catch {
		return c.json(
			{ ok: false, error: "Invalid JSON body." },
			400,
			{ ...cors, "Content-Type": "application/json" }
		);
	}

	// Basic spam trap
	if (parsed.honeypot && parsed.honeypot.trim().length > 0) {
		return c.json({ ok: true }, 200, { ...cors, "Content-Type": "application/json" });
	}

	const to = c.env.FORMS_TO_EMAIL || "info@hldesignedit.com";
	const from = c.env.FORMS_FROM_EMAIL || "onboarding@resend.dev";
	const apiKey = c.env.RESEND_API_KEY;

	if (!apiKey) {
		return c.json(
			{ ok: false, error: "Server not configured (missing RESEND_API_KEY)." },
			500,
			{ ...cors, "Content-Type": "application/json" }
		);
	}

	const data = parsed.data || {};
	const pageUrl = parsed.pageUrl || c.req.header("Referer") || "";
	const ua = c.req.header("User-Agent") || "";
	const ip = c.req.header("CF-Connecting-IP") || "";

	const subjectPrefix = parsed.formType === "project" ? "New Project Request" : "New Contact Message";
	const name = sanitizeField(data.fullName ?? data.name ?? "").trim();
	const email = sanitizeField(data.email ?? "").trim();
	const subject = `${subjectPrefix}${name ? ` — ${name}` : ""}`;

	const lines: string[] = [];
	lines.push(`${subjectPrefix}`);
	lines.push("");
	lines.push(`From: ${name || "(not provided)"}`);
	lines.push(`Email: ${email || "(not provided)"}`);
	lines.push("");

	const entries = Object.entries(data)
		.filter(([key, value]) => key && value != null && normalizeString(value).trim() !== "")
		.sort(([a], [b]) => a.localeCompare(b));

	for (const [key, value] of entries) {
		const label = key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").trim();
		lines.push(`${label}: ${sanitizeField(value)}`);
	}

	lines.push("");
	lines.push("--- Metadata ---");
	if (pageUrl) lines.push(`Page: ${pageUrl}`);
	if (ip) lines.push(`IP: ${ip}`);
	if (ua) lines.push(`User-Agent: ${ua}`);

	const replyTo = pickReplyTo(data);

	try {
		await sendViaResend({
			apiKey,
			from,
			to,
			subject,
			text: lines.join("\n"),
			replyTo,
		});
	} catch (error) {
		return c.json(
			{ ok: false, error: error instanceof Error ? error.message : "Failed to send." },
			502,
			{ ...cors, "Content-Type": "application/json" }
		);
	}

	return c.json({ ok: true }, 200, { ...cors, "Content-Type": "application/json" });
}
