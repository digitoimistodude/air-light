echo "${YELLOW}Checking air updates...${TXTRESET}"
cd $HOME
git clone https://github.com/digitoimistodude/air
cd $STARTER_THEME_PATH_TEMP
git stash
git pull
echo "${yellow}Copying starter theme to project folder ${PROJECTS_HOME}/${PROJECT_NAME}/content/themes/${THEME_NAME}${txtreset}"
cp -R ${STARTER_THEME_PATH_TEMP} ${PROJECT_THEME_PATH}
echo "${yellow}Creating acf-json...${txtreset}"
mkdir -p ${PROJECT_THEME_PATH}/acf-json
