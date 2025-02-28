const { exec } = require('child_process');
const { watch } = require('gulp');
const fs = require('fs');
const path = require('path');

// Build all blocks using wp-scripts
function buildBlocks(done) {
  // Get all block directories
  const blocksDir = path.join(process.cwd(), 'blocks');
  const blockFolders = fs.readdirSync(blocksDir)
    .filter(file => fs.statSync(path.join(blocksDir, file)).isDirectory());

  // Build each block that has package.json
  const builds = blockFolders.map(blockName => {
    const blockPath = path.join(blocksDir, blockName);
    if (fs.existsSync(path.join(blockPath, 'package.json'))) {
      return new Promise((resolve, reject) => {
        exec('npm run build', { cwd: blockPath }, (err, stdout, stderr) => {
          if (err) {
            console.error(`Error building block ${blockName}:`, err);
            reject(err);
          }
          console.log(stdout);
          console.error(stderr);
          resolve();
        });
      });
    }
    return Promise.resolve();
  });

  Promise.all(builds)
    .then(() => done())
    .catch(err => done(err));
}

// Watch blocks
function watchBlocks() {
  watch([
    'blocks/*/src/**/*.js',
    'blocks/*/src/**/*.scss',
    'blocks/*/src/**/*.php',
    'blocks/*/src/**/*.json',
  ], buildBlocks);
}

exports.buildBlocks = buildBlocks;
exports.watchBlocks = watchBlocks;
