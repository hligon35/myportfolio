MULTI-PLATFORM DEPLOYMENT GUIDE
===============================

🌟 OVERVIEW
-----------
Your domain: hldesignedit.com
We'll set up three deployment options:
1. GitHub Pages (Primary - Free)
2. x10 Hosting (Backup/Alternative)
3. GoDaddy DNS Configuration

===============================================
🚀 OPTION 1: GITHUB PAGES (RECOMMENDED)
===============================================

📋 STEP 1: GITHUB REPOSITORY SETUP
-----------------------------------
1. Create a new repository on GitHub named "hldesignedit" or "portfolio"
2. Push your code to GitHub:

git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/hligon35/your-repo-name.git
git push -u origin main

📋 STEP 2: GITHUB PAGES CONFIGURATION
--------------------------------------
1. Go to your GitHub repository
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source": Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Under "Custom domain": Enter "hldesignedit.com"
7. GitHub will automatically create/update the CNAME file
8. DO NOT check "Enforce HTTPS" yet (wait for DNS propagation)

📋 STEP 3: GODADDY DNS CONFIGURATION FOR GITHUB PAGES
------------------------------------------------------
Login to GoDaddy and go to DNS Management:

DELETE EXISTING RECORDS:
- Delete any existing A records pointing to @
- Delete any existing CNAME records for www

ADD NEW RECORDS:
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 600 seconds

Type: A  
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 600 seconds

Type: A
Name: @ (or leave blank) 
Value: 185.199.110.153
TTL: 600 seconds

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 600 seconds

Type: CNAME
Name: www
Value: hligon35.github.io
TTL: 600 seconds

📋 STEP 4: VERIFY GITHUB PAGES DEPLOYMENT
------------------------------------------
1. Wait 15-30 minutes for DNS propagation
2. Check https://hldesignedit.com and https://www.hldesignedit.com
3. Both should load your portfolio
4. Go back to GitHub Pages settings and check "Enforce HTTPS"

===============================================
🏢 OPTION 2: X10 HOSTING DEPLOYMENT
===============================================

📋 STEP 1: PREPARE FILES FOR X10 HOSTING
-----------------------------------------
1. Use files from your "hldesignedit" folder
2. You'll need these files:
   - index.html (main file)
   - assets/ folder (CSS and JS)
   - All image folders (graphicDesign, icons, projects, etc.)
   - DO NOT upload CNAME file to x10hosting

📋 STEP 2: X10 HOSTING FILE UPLOAD
-----------------------------------
1. Login to x10hosting control panel
2. Go to "File Manager" or use FTP client
3. Navigate to "public_html" directory
4. Upload ALL files from your "hldesignedit" folder
5. Make sure index.html is in the root of public_html

📋 STEP 3: X10 HOSTING DOMAIN CONFIGURATION
--------------------------------------------
1. In x10hosting control panel, go to "Subdomains" or "Addon Domains"
2. Add "hldesignedit.com" as an addon domain
3. Point it to your public_html directory
4. Note the nameservers x10hosting provides

📋 STEP 4: GODADDY DNS FOR X10 HOSTING
---------------------------------------
If using x10hosting instead of GitHub Pages:

Login to GoDaddy DNS Management and REPLACE GitHub records with:

Type: A
Name: @
Value: [x10hosting IP address - check your x10 control panel]

Type: CNAME  
Name: www
Value: hldesignedit.com

===============================================
🌐 GODADDY DOMAIN MANAGEMENT
===============================================

📋 ACCESSING GODADDY DNS
-------------------------
1. Login to GoDaddy.com
2. Go to "My Products"
3. Find your domain "hldesignedit.com"
4. Click "DNS" or "Manage DNS"

📋 DNS RECORD TYPES EXPLAINED
------------------------------
A Record: Points your domain to an IP address
CNAME Record: Points a subdomain to another domain
TTL: Time To Live (how long DNS servers cache the record)

📋 CURRENT RECOMMENDED SETUP (GitHub Pages)
--------------------------------------------
@ (apex) → GitHub's IP addresses (A records)
www → hligon35.github.io (CNAME record)

===============================================
🔧 TROUBLESHOOTING
===============================================

❌ COMMON ISSUES:

1. "Site not loading"
   - Check DNS propagation: https://www.whatsmydns.net/
   - Wait 24-48 hours for full propagation

2. "404 Error on GitHub Pages"
   - Make sure .nojekyll file exists in your repo
   - Check that index.html is in the root directory

3. "Images not loading"
   - Verify all image files are uploaded
   - Check file paths are correct (case-sensitive)

4. "CSS/JS not working"
   - Make sure assets folder is uploaded
   - Check browser console for errors

5. "HTTPS not working"
   - Wait for DNS propagation first
   - Then enable "Enforce HTTPS" in GitHub Pages

6. "Domain points to wrong site"
   - Clear browser cache
   - Check DNS records are correct
   - Wait for propagation

===============================================
🎯 RECOMMENDED DEPLOYMENT STRATEGY
===============================================

PRIMARY: GitHub Pages
- Faster deployment
- Free HTTPS certificate
- Automatic deployments
- Better for your portfolio type

BACKUP: x10 Hosting  
- Use if GitHub Pages has issues
- More control over server
- Can host PHP/database if needed later

The GitHub Pages option is recommended because:
✅ It's free and reliable
✅ Automatic HTTPS
✅ Integrates with your development workflow
✅ Better performance with global CDN
✅ Your site will be at hldesignedit.com

Need help with any specific step? Let me know!
