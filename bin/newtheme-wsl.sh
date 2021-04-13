#!/bin/bash
# @Author: Roni Laukkarinen
# @Date:   2021-04-11 23:59:39
# @Last Modified by:   Roni Laukkarinen
# @Last Modified time: 2021-02-25 10:57:29
# Theme starting bash script (github.com/digitoimistodude)

txtbold=$(tput bold)
boldyellow=${txtbold}$(tput setaf 3)
boldgreen=${txtbold}$(tput setaf 2)
boldwhite=${txtbold}$(tput setaf 7)
yellow=$(tput setaf 3)
green=$(tput setaf 2)
white=$(tput setaf 7)
txtreset=$(tput sgr0)
PROJECTS_HOME='/var/www/'

# Note about running directly as we can't prevent people running this via sh or bash pre-cmd
echo ""
echo "${boldwhite}Note:${txtreset} Please do NOT prepend sh or bash to run this script (${white}sh $0${txtreset} or ${white}bash $0${txtreset}), just execute it directly instead like this: ${white}./$0${txtreset} (if no permissions, run sudo chmod +x $0 first)${txtreset}" 1>&2
echo ""

while true; do
read -p "${boldyellow}Project created? (y/n)${txtreset} " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer y or n.";;
    esac
done

echo "${boldwhite}Please note: This script is designed to work with dudestack and air-light. See https://github.com/digitoimistodude${txtreset} "
echo "${boldyellow}Project name in lowercase:${txtreset} "
read -e PROJECT_NAME
echo "${boldyellow}Theme name in lowercase (no spaces or special characters):${txtreset} "
read -e THEME_NAME

PROJECT_PATH="${PROJECTS_HOME}${PROJECT_NAME}"
STARTER_THEME_PATH_TEMP="${HOME}/air"
PROJECT_THEME_PATH="${PROJECTS_HOME}${PROJECT_NAME}/content/themes/${THEME_NAME}"

if [ ! -d .nvm/versions/node ]; then
  echo "${yellow}Installing/updating npm${txtreset}"
  sudo apt-get install curl -y
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  nvm install node
  nvm install --lts
fi

if [ ! -f /usr/bin/git ]; then
  echo "${yellow}Git is not installed. Installing git${txtreset}"
  sudo apt install git -y
fi

echo "${yellow}Checking air updates...${txtreset}"
cd ${HOME}
git clone https://github.com/digitoimistodude/air
cd ${STARTER_THEME_PATH_TEMP}
git stash
git pull
echo "${yellow}Copying starter theme to project folder ${PROJECTS_HOME}${PROJECT_NAME}/content/themes/${THEME_NAME}${txtreset}"
cp -R ${STARTER_THEME_PATH_TEMP} ${PROJECT_THEME_PATH}
echo "${yellow}Generating theme files with theme name and textdomain called ${THEME_NAME}${txtreset}"
cd $PROJECT_THEME_PATH && rm -rf .git

# THE magical sed command by rolle (goes through every single file in theme folder and searchs and replaces every air instance with THEME_NAME):
for i in `grep -rl air-light * 2> /dev/null`; do LC_ALL=C sed -i -e "s;air-light;${THEME_NAME};" $i; done
for i in `grep -rl Air-light * 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air-light;${THEME_NAME};" $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;air-light;${THEME_NAME};" $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;air_light_;${THEME_NAME}_;" $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air_light_;${THEME_NAME}_;" $i; done

echo "${yellow}Creating acf-json...${txtreset}"
mkdir -p ${PROJECT_THEME_PATH}/acf-json

echo "${yellow}Making sure the permissions are right for npm... (you should have nopasswd sudoers or temporarily password copied here if it asks for each time)${txtreset}"
sudo chmod -R 777 ${PROJECT_THEME_PATH}/acf-json
mkdir -p ${PROJECT_PATH}/node_modules
mkdir -p ${PROJECT_THEME_PATH}/node_modules
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ${PROJECT_PATH}/node_modules
sudo chmod -R 777 ${PROJECT_PATH}/node_modules
sudo chown -R $(whoami) ${PROJECT_THEME_PATH}/node_modules
sudo chmod -R 777 ${PROJECT_THEME_PATH}/node_modules
sudo chown -R $(whoami) ${PROJECT_PATH}/content/plugins
sudo chmod 777 ${PROJECT_PATH}/content
sudo chmod -R 777 ${PROJECT_PATH}/content/plugins

echo "${yellow}Installing dependencies...${txtreset}"
npm install

echo "${yellow}Getting devpackages${txtreset}"
cd ${PROJECT_PATH}
git clone https://github.com/digitoimistodude/devpackages

echo "${yellow}Setting up package.json from devpackages github${txtreset}"
sed -e "s/\PROJECT_NAME/$PROJECT_NAME/" -e "s/\PROJECT_NAME/$PROJECT_NAME/" -e "s/\PROJECT_NAME/$PROJECT_NAME/" $PROJECT_PATH/devpackages/package.json > "$PROJECT_PATH/package.json"
echo "${yellow}Installing project node.js packages (may take a while)${txtreset}"
cd ${PROJECT_PATH}
npm install

echo "${yellow}Generating gulp tasks and configuration from https://github.com/digitoimistodude/devpackages${txtreset}"
cp ${PROJECT_THEME_PATH}/.scss-lint.yml ${PROJECT_PATH}/
cp ${PROJECT_THEME_PATH}/.browserslistrc ${PROJECT_PATH}/
rm ${PROJECT_THEME_PATH}/.browserslistrc
cp ${PROJECT_THEME_PATH}/.hintrc ${PROJECT_PATH}/
rm ${PROJECT_THEME_PATH}/.hintrc
cp ${PROJECT_THEME_PATH}/.svgo.yml ${PROJECT_PATH}/
cd ${PROJECT_PATH}/devpackages
sed -e "s/\THEME_NAME/${THEME_NAME}/" -e "s/\THEME_NAME/${THEME_NAME}/" -e "s/\THEME_NAME/${THEME_NAME}/" ${PROJECT_PATH}/devpackages/.stylelintrc > ${PROJECT_PATH}/devpackages/.stylelintrc2
cp ${PROJECT_PATH}/devpackages/.stylelintrc2 ${PROJECT_PATH}/.stylelintrc
sed -e "s/\THEME_NAME/${THEME_NAME}/" -e "s/\THEME_NAME/${THEME_NAME}/" -e "s/\THEME_NAME/${THEME_NAME}/" ${PROJECT_PATH}/devpackages/.eslintrc.js > ${PROJECT_PATH}/devpackages/.eslintrc2.js
cp ${PROJECT_PATH}/devpackages/.eslintrc2.js ${PROJECT_PATH}/.eslintrc.js
cp ${PROJECT_PATH}/devpackages/gulpfile.js ${PROJECT_PATH}/
cp -Rv ${PROJECT_PATH}/devpackages/gulp ${PROJECT_PATH}/
sed -e "s/\THEME_NAME/${THEME_NAME}/" -e "s/\THEME_NAME/${THEME_NAME}/" -e "s/\THEME_NAME/${THEME_NAME}/" ${PROJECT_PATH}/devpackages/gulp/config.js > ${PROJECT_PATH}/gulp/config2.js
rm ${PROJECT_PATH}/gulp/config.js
sed -e "s/\PROJECT_NAME/${PROJECT_NAME}/" -e "s/\PROJECT_NAME/${PROJECT_NAME}/" -e "s/\PROJECT_NAME/${PROJECT_NAME}/" ${PROJECT_PATH}/gulp/config2.js > ${PROJECT_PATH}/gulp/config.js
rm ${PROJECT_PATH}/gulp/config2.js

echo "${yellow}Cleaning up...${txtreset}"
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

echo "${yellow}Removing demo content...${txtreset}"

for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air_light_;${THEME_NAME}_;" $i; done

# Note: find + -exec sed doesn't work in WSL for some weird reason
LC_ALL=C sed -i -e "s;@import 'layout\/demo-content'\;;;" ${PROJECT_THEME_PATH}/sass/global.scss
LC_ALL=C sed -i -e "s;@import 'layout\/wordpress'\;;;" ${PROJECT_THEME_PATH}/sass/global.scss
rm ${PROJECT_THEME_PATH}/sass/layout/_demo-content.scss
rm ${PROJECT_THEME_PATH}/sass/layout/_wordpress.scss

read -p "${boldyellow}Do we use comments in this project? (y/n)${txtreset} " yn
  if [ "$yn" = "n" ]; then
    LC_ALL=C sed -i -e "s;@import 'views\/comments'\;;;" ${PROJECT_THEME_PATH}/sass/global.scss
    rm ${PROJECT_THEME_PATH}/sass/views/_comments.scss
  else
    echo ' '
  fi

echo "${yellow}Remove things we need to remove anyway in each start...${txtreset}"
rm ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
touch ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
rm ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
touch ${PROJECT_THEME_PATH}/sass/layout/_site-footer.scss
rm ${PROJECT_THEME_PATH}/template-parts/header/demo-content.php
rm -rf ${PROJECT_THEME_PATH}/template-parts/footer

# Remove demo includes
# Note: find + -exec sed doesn't work in WSL for some weird reason
LC_ALL=C sed -i -e "s;<\?php get_template_part( \'template-parts\/header\/demo-content\' ); \?>;;" ${PROJECT_THEME_PATH}/front-page.php
LC_ALL=C sed -i -e "s;<\?php get_template_part( \'template-parts\/footer\/demo-content\' ); \?>;;" ${PROJECT_THEME_PATH}/footer.php

echo "${yellow}Adding media library folder...${txtreset}"
mkdir -p ${PROJECT_PATH}/media
echo "" > ${PROJECT_PATH}/media/index.php
chmod 777 ${PROJECT_PATH}/media

echo "${yellow}Generating default README.md...${txtreset}"

newestair="7.0.6"
newestwordpress="5.5"
newestphp="7.2"
currentdate=$(LC_TIME=en_US date '+%d %b %Y' |tr ' ' '_');
echo "# ${PROJECT_NAME}
![based_on_air_version ${newestair}_](https://img.shields.io/badge/based_on_air_version-${newestair}_-brightgreen.svg?style=flat-square) ![project_created ${currentdate}](https://img.shields.io/badge/project_created-${currentdate}-blue.svg?style=flat-square) ![Tested_up_to WordPress_${newestwordpress}](https://img.shields.io/badge/Tested_up_to-WordPress_${newestwordpress}-blue.svg?style=flat-square) ![Compatible_with PHP_${newestphp}](https://img.shields.io/badge/Compatible_with-PHP_${newestphp}-green.svg?style=flat-square)

This project is hand made for customer.
## Stack

This project is built on [digitoimistodude/dudestack](https://github.com/digitoimistodude/dudestack), [digitoimistodude/air-light](https://github.com/digitoimistodude/air-light), [digitoimistodude/marlin-vagrant](https://github.com/digitoimistodude/marlin-vagrant) or [digitoimistodude/macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup), [digitoimistodude/devpackages](https://github.com/digitoimistodude/devpackages) which are documented at their corresponding locations. This is a guide on:

- How to setup the project initially<br>
- How to update the project dependencies<br>
- Project settings and features

## Theme screenshot

![Screenshot](/content/themes/${THEME_NAME}/screenshot.png?raw=true \"Screenshot\")

## Environments:

Green checkmarks show if the environment is already set up and running, red cross indicates if it's not yet there or disabled.

✅  Development: [${PROJECT_NAME}.test](http://${PROJECT_NAME}.test)<br>
❌  Staging: [${PROJECT_NAME}.vaiheessa.fi](https://${PROJECT_NAME}.vaiheessa.fi)<br>
❌  Production: [${PROJECT_NAME}.fi](https://${PROJECT_NAME}.fi/)

## Setting it up initially

According to our handbook, you should have run \`createproject\`, inital setup by now. Your Vagrant machine (or macOS LEMP) should be up and running. If not, go back to [dudestack-instructions](https://github.com/digitoimistodude/dudestack-instructions) or [Dude handbook](https://handbook.dude.fi/wordpress-kehitys/projektin-aloitus) and read what you have do.

If dev environment is indeed running, you're ready to version control the project.

There are npm packages in both project root and theme folder. If you come later to this project, please run:

1. \`composer install\` (in project folder)
2. \`npm install\` (in project folder)
2. \`npm install\` (in theme folder)

Run project with \`gulp\`." > "${PROJECTS_HOME}${PROJECT_NAME}/README.md"

echo "${yellow}Installing theme npm packages...${txtreset}"
cd ${PROJECT_THEME_PATH}
npm install

echo "${yellow}Running project gulp js once...${txtreset}"
cd ${PROJECT_PATH}
gulp js

echo "${yellow}Running project gulp styles once...${txtreset}"
cd ${PROJECT_PATH}
gulp styles

echo "${boldgreen}All done! Theme generated. Go to https://$PROJECT_NAME.test/wp/wp-admin/themes.php and activate your theme, then run gulp watch in project root and start coding! Your project can be found at $PROJECT_PATH and your theme can be found at $PROJECT_THEME_PATH${txtreset}"
