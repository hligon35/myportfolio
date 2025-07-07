CUSTOM DOMAIN DEPLOYMENT GUIDE
================================

🌐 STEP 1: PREPARE YOUR DOMAIN
------------------------------
1. Make sure you have access to your domain's DNS settings
2. Note your domain name (e.g., yourname.com)

🚀 STEP 2: UPDATE CNAME FILE
----------------------------
1. Open the CNAME file in your project root
2. Replace "yourname.com" with your actual domain
3. Remove the # symbol to uncomment the line
4. Save the file

Example CNAME file content:
```
www.yourdomainname.com
```

📁 STEP 3: PUSH TO GITHUB
--------------------------
1. Initialize git (if not done):
   git init
   git add .
   git commit -m "Initial commit"

2. Add your GitHub repository:
   git remote add origin https://github.com/yourusername/your-repo-name.git

3. Push to GitHub:
   git push -u origin main

🔧 STEP 4: CONFIGURE GITHUB PAGES
----------------------------------
1. Go to your GitHub repository
2. Click Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Under "Custom domain", enter your domain name
6. Check "Enforce HTTPS" (after DNS propagation)

🌍 STEP 5: CONFIGURE DNS AT YOUR DOMAIN REGISTRAR
--------------------------------------------------
Login to your domain registrar (GoDaddy, Namecheap, etc.) and add these DNS records:

FOR APEX DOMAIN (yourname.com):
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153

FOR WWW SUBDOMAIN:
Type: CNAME
Name: www
Value: yourusername.github.io

⏰ STEP 6: WAIT FOR DNS PROPAGATION
-----------------------------------
- DNS changes can take 24-48 hours to propagate
- You can check propagation status at: https://www.whatsmydns.net/

🔒 STEP 7: ENABLE HTTPS
-----------------------
1. After DNS propagation, go back to GitHub Pages settings
2. Check "Enforce HTTPS"
3. Wait for SSL certificate to provision (can take up to 24 hours)

✅ ALTERNATIVE: QUICK DEPLOYMENT WITH NETLIFY
=============================================
If you prefer faster deployment with better performance:

1. Create account at https://netlify.com
2. Connect your GitHub repository
3. Set build command: npm run build
4. Set publish directory: dist
5. Add your custom domain in Netlify dashboard
6. Netlify will handle DNS automatically

TROUBLESHOOTING
===============
❌ Site not loading: Check DNS propagation
❌ HTTPS not working: Wait 24-48 hours after DNS setup
❌ 404 errors: Make sure .nojekyll file exists
❌ Assets not loading: Check vite.config.js base path

Your portfolio is ready to go live! 🚀
