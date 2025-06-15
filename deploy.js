#!/usr/bin/env node

/**
 * Script to deploy the portfolio to GitHub Pages
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

// Helper to run a command and print output
function runCommand(command, errorMessage) {
  try {
    console.log(`${colors.cyan}> ${command}${colors.reset}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    if (errorMessage) {
      console.error(`${colors.red}${colors.bright}ERROR: ${errorMessage}${colors.reset}`);
      console.error(`${colors.red}${error.message}${colors.reset}`);
    }
    return false;
  }
}

// Main deployment function
async function deploy() {
  console.log(`\n${colors.bright}${colors.green}=== Starting GitHub Pages Deployment ===${colors.reset}\n`);
  
  // Step 1: Build the project
  console.log(`\n${colors.yellow}Step 1: Building the project${colors.reset}`);
  if (!runCommand('npm run build', 'Failed to build the project')) {
    return;
  }
  
  // Step 2: Verify dist directory exists
  console.log(`\n${colors.yellow}Step 2: Verifying build output${colors.reset}`);
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    console.error(`${colors.red}${colors.bright}ERROR: The 'dist' directory does not exist. Build may have failed.${colors.reset}`);
    return;
  }
  
  console.log(`${colors.green}✓ Build output verified${colors.reset}`);
  
  // Step 3: Deploy to GitHub Pages
  console.log(`\n${colors.yellow}Step 3: Deploying to GitHub Pages${colors.reset}`);
  if (!runCommand('npx gh-pages -d dist', 'Failed to deploy to GitHub Pages')) {
    return;
  }
  
  console.log(`\n${colors.bright}${colors.green}=== Deployment Completed Successfully ===${colors.reset}\n`);
  console.log(`${colors.cyan}Your site should be available at: ${colors.bright}https://hligon35.github.io/myportfolio/${colors.reset}\n`);
  console.log(`${colors.yellow}Note: It may take a few minutes for changes to appear on GitHub Pages.${colors.reset}\n`);
}

// Run the deployment
deploy().catch(error => {
  console.error(`${colors.red}${colors.bright}Unhandled error during deployment:${colors.reset}`);
  console.error(error);
  process.exit(1);
});
