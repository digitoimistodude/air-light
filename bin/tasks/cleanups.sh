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

# Remove demo content leftover files
rm ${PROJECT_THEME_PATH}/sass/layout/_wordpress.scss

echo "${YELLOW}Remove things we need to remove anyway in each start...${TXTRESET}"
rm ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
touch ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
rm -rf ${PROJECT_THEME_PATH}/template-parts/footer
