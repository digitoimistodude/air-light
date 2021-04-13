echo "${yellow}Getting devpackages${TXTRESET}"
cd ${PROJECT_PATH}
git clone https://github.com/digitoimistodude/devpackages

echo "${yellow}Setting up package.json from devpackages github${TXTRESET}"
sed -e "s/\PROJECT_NAME/$PROJECT_NAME/" -e "s/\PROJECT_NAME/$PROJECT_NAME/" -e "s/\PROJECT_NAME/$PROJECT_NAME/" $PROJECT_PATH/devpackages/package.json > "$PROJECT_PATH/package.json"
echo "${yellow}Installing project npm packages (mostly tools) in project root (may take a while)${TXTRESET}"
cd ${PROJECT_PATH}
npm install

echo "${yellow}Installing theme npm packages (like JS/CSS dependencies) for the new theme...${TXTRESET}"
cd ${PROJECT_THEME_PATH}
npm install

echo "${yellow}Running project gulp js once...${TXTRESET}"
cd ${PROJECT_PATH}
gulp js

echo "${yellow}Running project gulp styles once...${TXTRESET}"
cd ${PROJECT_PATH}
gulp styles
