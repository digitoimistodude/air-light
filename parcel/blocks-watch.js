#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const blocksDir = path.join(__dirname, '..', 'blocks');
const debounceTimers = {};

// Exit gracefully if no blocks directory exists yet
if (!fs.existsSync(blocksDir)) {
  console.log('[blocks-watch] No blocks/ directory found, nothing to watch');
  process.exit(0);
}

// Find all blocks that have src/index.js
const blocks = fs.readdirSync(blocksDir).filter((dir) => {
  const indexPath = path.join(blocksDir, dir, 'src', 'index.js');
  return fs.existsSync(indexPath);
});

if (blocks.length === 0) {
  console.log('[blocks-watch] No blocks found, nothing to watch');
  process.exit(0);
}

console.log(`Watching ${blocks.length} blocks: ${blocks.join(', ')}`);

// Build a single block
function buildBlock(blockName) {
  const srcRelative = `blocks/${blockName}/src`;
  const outRelative = `blocks/${blockName}/build`;

  // Check for view.js
  const viewJs = path.join(blocksDir, blockName, 'src', 'view.js');
  const entries = [`${srcRelative}/index.js`];
  if (fs.existsSync(viewJs)) {
    entries.push(`${srcRelative}/view.js`);
  }

  const cmd = `npx wp-scripts build ${entries.join(' ')} --output-path=${outRelative}`;
  console.log(`[blocks-watch] Building ${blockName}...`);

  try {
    execSync(cmd, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log(`[blocks-watch] Built ${blockName}`);
  } catch (err) {
    console.error(`[blocks-watch] Build failed for ${blockName}`);
  }
}

// Watch each block's src directory
blocks.forEach((blockName) => {
  const srcDir = path.join(blocksDir, blockName, 'src');

  fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;

    // Debounce: wait 200ms before building
    clearTimeout(debounceTimers[blockName]);
    debounceTimers[blockName] = setTimeout(() => {
      buildBlock(blockName);
    }, 200);
  });
});

// Keep process alive
process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));
