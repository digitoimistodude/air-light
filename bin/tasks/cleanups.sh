echo "${YELLOW}Cleaning up...${TXTRESET}"
# We do not want Air-light to be in git any more since this a new theme
cd $PROJECT_THEME_PATH && rm -rf .git

# DEV-334: Theme keeps its own gulp/stylelint setup, remove bin since new theme doesn't need it
# Keep theme's own .stylelintrc, gulp, gulpfile.js
# Remove bin (new themes don't need the starter script)
rm -rf ${PROJECT_THEME_PATH}/bin
rm -f ${PROJECT_THEME_PATH}/.gitignore
rm -f ${PROJECT_THEME_PATH}/readme.txt
rm -f ${PROJECT_THEME_PATH}/languages/*
rm ${PROJECT_THEME_PATH}/README.md
rm ${PROJECT_THEME_PATH}/LICENSE.md

# Clean up air-light CHANGELOGs from theme and project root
rm -f ${PROJECT_THEME_PATH}/CHANGELOG.md
rm -f ${PROJECT_PATH}/CHANGELOG.md
CURRENT_DATE=$(date +%Y-%m-%d)
printf "### 1.0.0: ${CURRENT_DATE}\n\n* Init project\n" > ${PROJECT_THEME_PATH}/CHANGELOG.md
rm -f ${PROJECT_THEME_PATH}/phpcs.xml

# Remove demo content leftover files
rm ${PROJECT_THEME_PATH}/assets/src/sass/layout/_wordpress.scss

# Set up husky hooks after air-light .git is removed so it finds project root .git (DEV-885)
echo "${YELLOW}Configuring pre-commit hooks...${TXTRESET}"
cd ${PROJECT_THEME_PATH}
node node_modules/@digitoimistodude/code-quality-checks/bin/setup.js

echo "${YELLOW}Remove things we need to remove anyway in each start...${TXTRESET}"
rm ${PROJECT_THEME_PATH}/assets/src/sass/layout/_site-footer.scss
touch ${PROJECT_THEME_PATH}/assets/src/sass/layout/_site-footer.scss
rm -rf ${PROJECT_THEME_PATH}/template-parts/footer
