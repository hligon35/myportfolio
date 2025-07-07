#!/bin/bash
# GitHub Pages Deployment Script for hldesignedit.com

echo "🚀 Deploying hldesignedit.com Portfolio to GitHub Pages"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📋 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial portfolio commit"
else
    echo "✅ Git repository already initialized"
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "📋 Please add your GitHub repository URL:"
    echo "Run: git remote add origin https://github.com/hligon35/YOUR-REPO-NAME.git"
    echo "Then run: git push -u origin main"
else
    echo "📋 Pushing to GitHub..."
    git add .
    git commit -m "Portfolio update - $(date)"
    git push origin main
fi

echo ""
echo "🌐 Next Steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Set source to 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Add custom domain: hldesignedit.com"
echo "6. Configure DNS in GoDaddy (see MULTI_PLATFORM_GUIDE.md)"
echo ""
echo "✅ Your portfolio will be live at: https://hldesignedit.com"
