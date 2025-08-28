echo "${YELLOW}Checking air updates...${TXTRESET}"
cd $HOME

# Check if we're testing a specific branch
if [ "$1" = "--test-branch" ] && [ -n "$2" ]; then
  echo "${YELLOW}Testing with branch: $2${TXTRESET}"
  git clone -b $2 https://github.com/digitoimistodude/air
else
  git clone https://github.com/digitoimistodude/air
fi

cd $STARTER_THEME_PATH_TEMP
git stash
git pull
echo "${YELLOW}Copying starter theme to project folder ${PROJECTS_HOME}/${PROJECT_NAME}/content/themes/${THEME_NAME}${TXTRESET}"
cp -R ${STARTER_THEME_PATH_TEMP} ${PROJECT_THEME_PATH}
echo "${YELLOW}Creating acf-json...${TXTRESET}"
mkdir -p ${PROJECT_THEME_PATH}/acf-json
