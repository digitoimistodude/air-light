echo "${YELLOW}Generating theme files with theme name and textdomain called ${THEME_NAME}${TXTRESET}"
# THE magical sed command by rolle (goes through every single file in theme folder and searchs and replaces every air instance with THEME_NAME):
# WSL/Ubuntu version of sed binary, different format than on macOS
# Note: find + -exec sed doesn't work in WSL for some weird reason so we have to use "s;string;replacewith;" format
for i in `grep -rl air-light * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i -e "s;air-light;${THEME_NAME};" $i; done
for i in `grep -rl Air-light * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air-light;${THEME_NAME};" $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i -e "s;air-light;${THEME_NAME};" $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i -e "s;air_light_;${THEME_NAME}_;" $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air_light_;${THEME_NAME}_;" $i; done

# Remove demo content
echo "${YELLOW}Removing demo content...${TXTRESET}"
LC_ALL=C sed -i -e "s;@import 'layout\/wordpress'\;;;" ${PROJECT_THEME_PATH}/sass/global.scss

read -p "${BOLDYELLOW}Do we use comments in this project? (y/n)${TXTRESET} " yn
  if [ "$yn" = "n" ]; then
    LC_ALL=C sed -i -e "s;@import 'views\/comments'\;;;" ${PROJECT_THEME_PATH}/sass/global.scss
    rm ${PROJECT_THEME_PATH}/sass/views/_comments.scss
  else
    echo ' '
  fi

echo "${YELLOW}Running project gulp styles once...${TXTRESET}"
cd ${PROJECT_PATH}
gulp devstyles
gulp prodstyles

echo "${YELLOW}Running project gulp scripts task once...${TXTRESET}"
cd ${PROJECT_PATH}
gulp js
