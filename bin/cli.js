#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define which directories/files to copy
const dirsToCopy = ['.agent', 'docs', 'memory'];
const sourceRoot = path.join(__dirname, '..');
const targetRoot = process.cwd();

console.log('\x1b[36m%s\x1b[0m', '🚀 Initializing Antigravity Atomic Swarms...');

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        // If it's a file, copy it (overwrite if exists, or maybe warn?)
        // For now, we overwrite to ensure latest version, but let's log major files
        fs.copyFileSync(src, dest);
    }
}

try {
    dirsToCopy.forEach(dirName => {
        const srcPath = path.join(sourceRoot, dirName);
        const destPath = path.join(targetRoot, dirName);

        if (fs.existsSync(srcPath)) {
            console.log(`📦 Installing ${dirName}...`);
            copyRecursiveSync(srcPath, destPath);
        } else {
            console.warn(`⚠️  Warning: Source directory ${dirName} not found in package.`);
        }
    });

    console.log('\x1b[32m%s\x1b[0m', '✅ Installation Complete!');
    console.log('👉 You can now use "@" in your agent chat to select the new rules.');
} catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Installation Failed:', error);
    process.exit(1);
}
