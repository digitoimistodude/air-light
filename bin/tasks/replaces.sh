echo "${YELLOW}Generating theme files with theme name and textdomain called ${THEME_NAME}${TXTRESET}"
# THE magical sed command by rolle (goes through every single file in theme folder and searchs and replaces every air instance with THEME_NAME):
for i in `grep -rl air-light * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl Air-light * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air_light_;${THEME_NAME}_;" $i $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air_light_;${THEME_NAME}_;" $i $i; done
for i in `grep -rl airdev * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;airdev.test;${PROJECT_NAME}.test;" $i $i; done
for i in `grep -rl airwptheme * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;airwptheme.com;${PROJECT_NAME}.fi;" $i $i; done

# Remove demo content
echo "${YELLOW}Removing demo content...${TXTRESET}"
find ${PROJECT_THEME_PATH}/sass/ -name 'global.scss' -exec sed -i '' -e "s/@import 'layout\/wordpress';//g" {} +
find ${PROJECT_THEME_PATH}/ -maxdepth 2 -name 'front-page.php' -exec sed -i '' -e "s/<\?php get_template_part( \'template-parts\/header\/demo-content\' ); \?>//g" {} +
find ${PROJECT_THEME_PATH}/ -maxdepth 2 -name 'front-page.php' -exec sed -i '' -e "s/\/\/ Featured image for Theme Checker (it\'s a requirement for theme to pass in official Theme directory)//g" {} +
find ${PROJECT_THEME_PATH}/ -maxdepth 2 -name 'front-page.php' -exec sed -i '' -e "s/\/\/ NB\! Our dev version uses newtheme.sh build script which cleans ups things including this next line//g" {} +
find ${PROJECT_THEME_PATH}/ -maxdepth 2 -name 'front-page.php' -exec sed -i '' -e "s/\$thumbnail \= wp_get_attachment_url( get_post_thumbnail_id() ) \?\: THEME_SETTINGS\['default_featured_image'\];//g" {} +

read -p "${BOLDYELLOW}Do we use comments in this project? (y/n)${TXTRESET} " yn
  if [ "$yn" = "n" ]; then
    find ${PROJECT_THEME_PATH}/sass/ -name 'global.scss' -exec sed -i '' -e "s/@import 'views\/comments';//g" {} +
    rm ${PROJECT_THEME_PATH}/sass/views/_comments.scss
  else
    echo ' '
  fi

echo "${YELLOW}Running project gulp styles tasks once...${TXTRESET}"
cd ${PROJECT_PATH}
gulp devstyles
gulp prodstyles

echo "${YELLOW}Running project gulp scripts task once...${TXTRESET}"
cd ${PROJECT_PATH}
gulp js
