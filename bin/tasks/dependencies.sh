#!/bin/bash
echo "${YELLOW}Installing theme npm packages (like JS/CSS dependencies) for the new theme...${TXTRESET}"
cd ${PROJECT_THEME_PATH}
rm -f package-lock.json
npm update
npm install

# Ensure husky hooks are configured (DEV-742)
echo "${YELLOW}Configuring pre-commit hooks...${TXTRESET}"
node node_modules/@digitoimistodude/code-quality-checks/bin/setup.js
