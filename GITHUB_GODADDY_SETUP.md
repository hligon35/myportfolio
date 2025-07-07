GITHUB PAGES + GODADDY DOMAIN SETUP
===================================

🎯 YOUR SETUP: hldesignedit.com → GitHub Pages
This will make your portfolio available at https://hldesignedit.com

===============================================
🚀 STEP 1: PUSH TO GITHUB
===============================================

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it "hldesignedit" or "portfolio" 
   - Make it PUBLIC (required for free GitHub Pages)
   - Don't initialize with README

2. **Push your code from this directory:**
   ```
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/hligon35/hldesignedit.git
   git push -u origin main
   ```

===============================================
🔧 STEP 2: CONFIGURE GITHUB PAGES
===============================================

1. **Go to your GitHub repository**
2. **Click "Settings" tab**
3. **Scroll down to "Pages" section**
4. **Under "Source":** Select "Deploy from a branch"
5. **Branch:** Select "main" 
6. **Folder:** Select "/ (root)"
7. **Custom domain:** Enter "hldesignedit.com"
8. **Click "Save"**
9. **DO NOT check "Enforce HTTPS" yet** (wait for DNS first)

GitHub will automatically update your CNAME file.

===============================================
🌐 STEP 3: CONFIGURE GODADDY DNS
===============================================

**Login to GoDaddy:**
1. Go to GoDaddy.com and login
2. Go to "My Products" 
3. Find "hldesignedit.com"
4. Click "DNS" or "Manage DNS"

**DELETE existing records:**
- Delete any A records pointing to "@" 
- Delete any CNAME records for "www"

**ADD these NEW records:**

**A Records (for hldesignedit.com):**
```
Type: A
Name: @ 
Value: 185.199.108.153
TTL: 600

Type: A
Name: @ 
Value: 185.199.109.153
TTL: 600

Type: A
Name: @ 
Value: 185.199.110.153
TTL: 600

Type: A
Name: @ 
Value: 185.199.111.153
TTL: 600
```

**CNAME Record (for www.hldesignedit.com):**
```
Type: CNAME
Name: www
Value: hligon35.github.io
TTL: 600
```

**Click "Save" after adding all records**

===============================================
⏰ STEP 4: WAIT & VERIFY
===============================================

1. **Wait 15-30 minutes** for DNS propagation
2. **Test your site:**
   - Try: https://hldesignedit.com
   - Try: https://www.hldesignedit.com
   - Both should load your portfolio

3. **Check DNS propagation:** https://www.whatsmydns.net/
   - Enter "hldesignedit.com"
   - Select "A" record type
   - Should show GitHub's IP addresses globally

4. **Enable HTTPS:**
   - Go back to GitHub Pages settings
   - Check "Enforce HTTPS" 
   - Wait for SSL certificate (can take up to 24 hours)

===============================================
🎉 YOU'RE DONE!
===============================================

Your portfolio will be live at:
✅ https://hldesignedit.com
✅ https://www.hldesignedit.com

**Benefits of this setup:**
- Free hosting on GitHub Pages
- Free SSL certificate
- Automatic deployments when you update code
- Professional custom domain
- Fast global CDN

===============================================
🔧 TROUBLESHOOTING
===============================================

❌ **"Site not found"**
- Check DNS propagation (can take up to 48 hours)
- Verify DNS records are correct
- Make sure repository is PUBLIC

❌ **"404 Page Not Found"**  
- Make sure index.html is in the root of your repository
- Check that .nojekyll file exists
- Verify CNAME file contains only "hldesignedit.com"

❌ **"Not secure" warning**
- Wait for DNS propagation first
- Then enable "Enforce HTTPS" in GitHub Pages
- SSL certificate can take up to 24 hours

❌ **Images/CSS not loading**
- Check browser console for errors
- Verify all files are pushed to GitHub
- Check file paths are correct

**Need help?** Check your GitHub repository's Actions tab for any deployment errors.

🚀 **Your portfolio is ready to go live!**
