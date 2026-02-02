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

function displayOrNotProvided(value: string): string {
	const trimmed = value.trim();
	return trimmed ? trimmed : "(not provided)";
}

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function pickReplyTo(data: Record<string, unknown>): string | undefined {
	const candidates = [data.email, data.contactEmail, data["emailAddress"]];
	for (const candidate of candidates) {
		const email = normalizeString(candidate).trim();
		if (email && /^\S+@\S+\.\S+$/.test(email)) return email;
	}
	return undefined;
}

function pickFirstNonEmpty(data: Record<string, unknown>, keys: string[]): string {
	for (const key of keys) {
		const value = data[key];
		const text = normalizeString(value).trim();
		if (text) return text;
	}
	return "";
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
	const from = c.env.FORMS_FROM_EMAIL || "noreply@hldesignedit.com";

	if (!c.env.EMAIL) {
		return c.json(
			{ ok: false, error: "Email service not configured." },
			500,
			{ ...cors, "Content-Type": "application/json" }
		);
	}

	const data = parsed.data || {};
	// Note: We intentionally do not include request metadata in the email body.

	const isProject = parsed.formType === "project";
	const name = sanitizeField(pickFirstNonEmpty(data, ["fullName", "name"])).trim();
	const email = sanitizeField(
		pickFirstNonEmpty(data, ["email", "contactEmail", "emailAddress"])
	).trim();
	const phone = sanitizeField(
		pickFirstNonEmpty(data, ["phone", "phoneNumber", "contactPhone", "tel"])
	).trim();
	const company = sanitizeField(
		pickFirstNonEmpty(data, [
			"company",
			"companyName",
			"business",
			"businessName",
			"organization",
			"org",
		])
	).trim();
	const budget = sanitizeField(pickFirstNonEmpty(data, ["budget", "projectBudget"])).trim();
	const timeline = sanitizeField(
		pickFirstNonEmpty(data, ["timeline", "deadline", "timeframe", "desiredTimeline"])
	).trim();
	const contactSubject = sanitizeField(pickFirstNonEmpty(data, ["subject", "topic"])).trim();
	const message = sanitizeField(pickFirstNonEmpty(data, ["message"])).trim();
	const details = sanitizeField(
		pickFirstNonEmpty(data, ["details", "projectDetails", "description", "message"])
	).trim();

	const subject = isProject
		? "New Project Form - HLDesignedIt.com!"
		: "New Contact Form - HLDesignedIt.com!";

	const gridPairs: Array<[string, string]> = isProject
		? [
			["Name", displayOrNotProvided(name)],
			["Company", displayOrNotProvided(company)],
			["Email", displayOrNotProvided(email)],
			["Phone Number", displayOrNotProvided(phone)],
			["Budget", displayOrNotProvided(budget)],
			["Timeline", displayOrNotProvided(timeline)],
		]
		: [
			["Name", displayOrNotProvided(name)],
			["Email", displayOrNotProvided(email)],
			["Phone Number", displayOrNotProvided(phone)],
			["Subject", displayOrNotProvided(contactSubject)],
		];

	const longLabel = isProject ? "Details" : "Message";
	const longValue = isProject ? displayOrNotProvided(details) : displayOrNotProvided(message);

	const lines: string[] = [];
	lines.push(subject);
	lines.push("");
	for (const [label, value] of gridPairs) {
		lines.push(`${label}: ${value}`);
	}
	lines.push("");
	lines.push(`${longLabel}:`);
	lines.push(longValue);

	const replyTo = pickReplyTo(data);

	const htmlRows = gridPairs
		.map(([label, value]) => {
			const safeLabel = escapeHtml(label);
			const safeValue = escapeHtml(value).replaceAll("\n", "<br>");
			return `
				<tr>
					<th style="text-align:left;vertical-align:top;padding:10px;border:1px solid #e5e7eb;background:#f9fafb;width:30%;">${safeLabel}</th>
					<td style="padding:10px;border:1px solid #e5e7eb;width:70%;">${safeValue}</td>
				</tr>`;
		})
		.join("");

	const longValueHtml = escapeHtml(longValue).replaceAll("\n", "<br>");
	const longLabelHtml = escapeHtml(longLabel);

	const html = `
		<div style="font-family:Arial,Helvetica,sans-serif;color:#111827;line-height:1.4;">
			<div style="padding:16px 18px;border:1px solid #e5e7eb;border-radius:12px;">
				<h2 style="margin:0 0 6px 0;font-size:18px;">${escapeHtml(subject)}</h2>
				<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;font-size:14px;">
					${htmlRows || ""}
					<tr>
						<th colspan="2" style="text-align:left;vertical-align:top;padding:10px;border:1px solid #e5e7eb;background:#f9fafb;">${longLabelHtml}</th>
					</tr>
					<tr>
						<td colspan="2" style="padding:10px;border:1px solid #e5e7eb;">${longValueHtml}</td>
					</tr>
				</table>
			</div>
		</div>`;

	try {
		await c.env.EMAIL.send({
			from: from,
			to: to,
			subject: subject,
			text: lines.join("\n"),
			html,
			...(replyTo ? { reply_to: replyTo } : {}),
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
