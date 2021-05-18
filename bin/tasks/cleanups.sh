echo "${YELLOW}Cleaning up...${TXTRESET}"
# We do not want Air-light to be in git any more since this a new theme
cd $PROJECT_THEME_PATH && rm -rf .git

# We already have .stylelintrc in project root
rm ${PROJECT_THEME_PATH}/.stylelintrc
rm -rf ${PROJECT_PATH}/devpackages
rm -rf ${PROJECT_THEME_PATH}/bin
rm -rf ${PROJECT_THEME_PATH}/gulp
rm -f ${PROJECT_THEME_PATH}/gulpfile.js
rm -f ${PROJECT_THEME_PATH}/.gitignore
rm -f ${PROJECT_THEME_PATH}/.travis.yml
rm -f ${PROJECT_THEME_PATH}/readme.txt
rm -f ${PROJECT_THEME_PATH}/languages/*
rm ${PROJECT_THEME_PATH}/README.md
rm ${PROJECT_THEME_PATH}/LICENSE.md

# Remove demo content leftover files
rm ${PROJECT_THEME_PATH}/sass/layout/_wordpress.scss

echo "${YELLOW}Remove things we need to remove anyway in each start...${TXTRESET}"
rm ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
touch ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
rm ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
touch ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
rm ${PROJECT_THEME_PATH}/template-parts/header/demo-content.php
rm -rf ${PROJECT_THEME_PATH}/template-parts/footer
