#!/usr/bin/env node

/**
 * This script is used by Vercel to build only the frontend part of the application
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure we're only building the frontend
console.log('🚀 Building frontend for Vercel deployment...');

try {
  // Run the Vite build
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('✅ Frontend build completed successfully');
  
  // Create a _redirects file for SPA routing
  const redirectsPath = path.join(process.cwd(), 'dist', '_redirects');
  fs.writeFileSync(redirectsPath, '/* /index.html 200');
  console.log('✅ Created _redirects file for SPA routing');
  
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}