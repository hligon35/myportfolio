#!/usr/bin/env node

/**
 * Simplified GitHub Pages deployment script for Vite projects
 * This uses a direct approach known to work reliably
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`\n${colors.bright}${colors.green}=== GitHub Pages Deployment (Simple Method) ===${colors.reset}\n`);

// Create a clean deployment
try {
  // Step 1: Clean build
  console.log(`${colors.yellow}Step 1: Building project...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build complete${colors.reset}\n`);
  // Step 2: Prepare for deployment
  console.log(`${colors.yellow}Step 2: Preparing deployment files...${colors.reset}`);
  
  // Create a temporary deployment directory
  const tempDir = path.join(__dirname, 'gh-pages-deploy');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir);

  // Copy all files from dist to the temp directory
  execSync(`xcopy "${path.join(__dirname, 'dist')}" "${tempDir}" /E /I /H`, { stdio: 'inherit' });
  
  // Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
  fs.writeFileSync(path.join(tempDir, '.nojekyll'), '');
  
  // Fix MIME type issues by creating a _headers file
  fs.writeFileSync(path.join(tempDir, '_headers'), `
/*
  Access-Control-Allow-Origin: *
  Content-Type: text/javascript; charset=UTF-8
  X-Content-Type-Options: nosniff

/*.css
  Content-Type: text/css; charset=UTF-8

/*.js
  Content-Type: text/javascript; charset=UTF-8
  `);
  
  console.log(`${colors.green}✓ Deployment files ready${colors.reset}\n`);

  // Step 3: Deploy to GitHub Pages
  console.log(`${colors.yellow}Step 3: Deploying to GitHub Pages...${colors.reset}`);
  
  // Initialize git in the deployment directory
  process.chdir(tempDir);
  execSync('git init', { stdio: 'inherit' });
  execSync('git add -A', { stdio: 'inherit' });
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  
  // Push to the gh-pages branch
  execSync('git push -f https://github.com/hligon35/myportfolio.git master:gh-pages', { stdio: 'inherit' });
  
  // Clean up
  process.chdir(__dirname);
  fs.rmSync(tempDir, { recursive: true, force: true });
  
  console.log(`\n${colors.bright}${colors.green}=== Deployment Successful! ===${colors.reset}`);
  console.log(`${colors.cyan}Your site should be available at: ${colors.bright}https://hligon35.github.io/myportfolio/${colors.reset}`);
  console.log(`${colors.yellow}Note: It may take a few minutes for changes to appear.${colors.reset}\n`);

} catch (error) {
  console.error(`\n${colors.red}${colors.bright}ERROR:${colors.reset} ${error.message}`);
  process.exit(1);
}
