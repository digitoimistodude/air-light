#!/bin/bash
echo "${YELLOW}Installing theme npm packages (like JS/CSS dependencies) for the new theme...${TXTRESET}"
cd ${PROJECT_THEME_PATH}
rm -f package-lock.json
npm update
npm install
