#!/bin/bash
# No longer using devpackages (DEV-334) - theme has built-in gulp setup

echo "${YELLOW}Installing theme npm packages (like JS/CSS dependencies) for the new theme...${TXTRESET}"
cd ${PROJECT_THEME_PATH}
rm -f package-lock.json
npm update
npm install
