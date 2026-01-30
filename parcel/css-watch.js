#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const entryFiles = [
  'assets/src/sass/front-end.scss',
  'assets/src/sass/editor.scss',
];

let hasError = false;

// Start Parcel watch
const parcel = spawn(
  'npx',
  [
    'parcel',
    'watch',
    ...entryFiles,
    '--dist-dir',
    'assets/dist/css',
    '--no-source-maps',
    '--no-hmr',
    '--no-cache',
    '--log-level',
    'verbose',
  ],
  {
    env: {
      ...process.env,
      PARCEL_CONFIG: '.parcelrc.watch',
    },
    stdio: ['inherit', 'pipe', 'pipe'],
  }
);

parcel.stdout.on('data', (data) => {
  const output = data.toString();
  process.stdout.write(output);

  // Detect build failure
  if (output.includes('Build failed')) {
    hasError = true;
  }

  // Detect file change after error - touch entry files to force rebuild
  // While waiting for PR to get merged: https://github.com/parcel-bundler/parcel/pull/9315
  if (hasError && output.includes('File watch event')) {
    hasError = false;
    console.log('[css-watch] Touching entry files to recover from error...');
    entryFiles.forEach((file) => {
      const fullPath = path.join(process.cwd(), file);
      const now = new Date();
      fs.utimesSync(fullPath, now, now);
    });
  }

  // Reset error flag on successful build
  if (output.includes('Built in')) {
    hasError = false;
  }
});

parcel.stderr.on('data', (data) => {
  process.stderr.write(data);
});

parcel.on('close', (code) => {
  process.exit(code);
});
