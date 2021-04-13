echo "${yellow}Installing initial dependencies...${txtreset}"
npm install

echo "${yellow}Getting devpackages${txtreset}"
cd ${PROJECT_PATH}
git clone https://github.com/digitoimistodude/devpackages

echo "${yellow}Setting up package.json from devpackages github${txtreset}"
sed -e "s/\PROJECT_NAME/$PROJECT_NAME/" -e "s/\PROJECT_NAME/$PROJECT_NAME/" -e "s/\PROJECT_NAME/$PROJECT_NAME/" $PROJECT_PATH/devpackages/package.json > "$PROJECT_PATH/package.json"
echo "${yellow}Installing project node.js packages (may take a while)${txtreset}"
cd ${PROJECT_PATH}
npm install

echo "${yellow}Installing theme npm packages...${txtreset}"
cd ${PROJECT_THEME_PATH}
npm install

echo "${yellow}Running project gulp js once...${txtreset}"
cd ${PROJECT_PATH}
gulp js

echo "${yellow}Running project gulp styles once...${txtreset}"
cd ${PROJECT_PATH}
gulp styles
