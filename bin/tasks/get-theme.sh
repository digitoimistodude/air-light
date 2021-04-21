echo "${YELLOW}Checking air updates...${TXTRESET}"
cd $HOME
git clone https://github.com/digitoimistodude/air
cd $STARTER_THEME_PATH_TEMP
git stash
git pull
echo "${YELLOW}Copying starter theme to project folder ${PROJECTS_HOME}/${PROJECT_NAME}/content/themes/${THEME_NAME}${TXTRESET}"
cp -R ${STARTER_THEME_PATH_TEMP} ${PROJECT_THEME_PATH}
echo "${YELLOW}Creating acf-json...${TXTRESET}"
mkdir -p ${PROJECT_THEME_PATH}/acf-json
