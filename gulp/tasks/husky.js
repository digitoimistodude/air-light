// Dependencies
const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const execAsync = promisify(exec);

function setupHusky() {
  const nodeModulesExists = fs.existsSync(path.join(process.cwd(), 'node_modules'));
  const huskyExists = fs.existsSync(path.join(process.cwd(), '.husky', '_', 'husky.sh'));
  
  let command = '';
  
  if (!nodeModulesExists) {
    console.log('node_modules not found, running npm install...');
    command = 'npm install && ';
  }
  
  if (!huskyExists) {
    console.log('Husky not installed, setting up...');
    command += 'husky && ';
  }
  
  command += 'chmod +x .husky/pre-commit .husky/commit-msg';
  
  return execAsync(command)
    .then(() => {
      console.log('Husky hooks setup completed');
    })
    .catch((error) => {
      console.error('Error setting up Husky hooks:', error);
      throw error;
    });
}

exports.husky = setupHusky;