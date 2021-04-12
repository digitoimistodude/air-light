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
read -e PROJECTNAME
echo "${boldyellow}Theme name in lowercase (no spaces or special characters):${txtreset} "
read -e THEMENAME

PROJECTPATH="${PROJECTS_HOME}${PROJECTNAME}"
STARTERTHEMEPATH="${HOME}/air"
PROJECTTHEMEPATH="${PROJECTS_HOME}${PROJECTNAME}/content/themes/${THEMENAME}"

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
cd ${STARTERTHEMEPATH}
git stash
git pull
echo "${yellow}Copying starter theme to project folder ${PROJECTS_HOME}${PROJECTNAME}/content/themes/${THEMENAME}${txtreset}"
cp -R ${STARTERTHEMEPATH} ${PROJECTTHEMEPATH}
echo "${yellow}Generating theme files with theme name and textdomain called ${THEMENAME}${txtreset}"
cd $PROJECTTHEMEPATH && rm -rf .git

# THE magical sed command by rolle (goes through every single file in theme folder and searchs and replaces every air instance with THEMENAME):
for i in `grep -rl air-light * 2> /dev/null`; do LC_ALL=C sed -i -e "s;air-light;${THEMENAME};" $i; done
for i in `grep -rl Air-light * 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air-light;${THEMENAME};" $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;air-light;${THEMENAME};" $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;air_light_;${THEMENAME}_;" $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air_light_;${THEMENAME}_;" $i; done

echo "${yellow}Creating acf-json...${txtreset}"
mkdir -p ${PROJECTTHEMEPATH}/acf-json

echo "${yellow}Making sure the permissions are right for npm... (you should have nopasswd sudoers or temporarily password copied here if it asks for each time)${txtreset}"
sudo chmod -R 777 ${PROJECTTHEMEPATH}/acf-json
mkdir -p ${PROJECTPATH}/node_modules
mkdir -p ${PROJECTTHEMEPATH}/node_modules
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ${PROJECTPATH}/node_modules
sudo chmod -R 777 ${PROJECTPATH}/node_modules
sudo chown -R $(whoami) ${PROJECTTHEMEPATH}/node_modules
sudo chmod -R 777 ${PROJECTTHEMEPATH}/node_modules
sudo chown -R $(whoami) ${PROJECTPATH}/content/plugins
sudo chmod 777 ${PROJECTPATH}/content
sudo chmod -R 777 ${PROJECTPATH}/content/plugins

echo "${yellow}Installing dependencies...${txtreset}"
npm install

echo "${yellow}Getting devpackages${txtreset}"
cd ${PROJECTPATH}
git clone https://github.com/digitoimistodude/devpackages

echo "${yellow}Setting up package.json from devpackages github${txtreset}"
sed -e "s/\PROJECTNAME/$PROJECTNAME/" -e "s/\PROJECTNAME/$PROJECTNAME/" -e "s/\PROJECTNAME/$PROJECTNAME/" $PROJECTPATH/devpackages/package.json > "$PROJECTPATH/package.json"
echo "${yellow}Installing project node.js packages (may take a while)${txtreset}"
cd ${PROJECTPATH}
npm install

echo "${yellow}Generating gulp tasks and configuration from https://github.com/digitoimistodude/devpackages${txtreset}"
cp ${PROJECTTHEMEPATH}/.scss-lint.yml ${PROJECTPATH}/
cp ${PROJECTTHEMEPATH}/.browserslistrc ${PROJECTPATH}/
rm ${PROJECTTHEMEPATH}/.browserslistrc
cp ${PROJECTTHEMEPATH}/.hintrc ${PROJECTPATH}/
rm ${PROJECTTHEMEPATH}/.hintrc
cp ${PROJECTTHEMEPATH}/.svgo.yml ${PROJECTPATH}/
cd ${PROJECTPATH}/devpackages
sed -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" ${PROJECTPATH}/devpackages/.stylelintrc > ${PROJECTPATH}/devpackages/.stylelintrc2
cp ${PROJECTPATH}/devpackages/.stylelintrc2 ${PROJECTPATH}/.stylelintrc
sed -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" ${PROJECTPATH}/devpackages/.eslintrc.js > ${PROJECTPATH}/devpackages/.eslintrc2.js
cp ${PROJECTPATH}/devpackages/.eslintrc2.js ${PROJECTPATH}/.eslintrc.js
cp ${PROJECTPATH}/devpackages/gulpfile.js ${PROJECTPATH}/
cp -Rv ${PROJECTPATH}/devpackages/gulp ${PROJECTPATH}/
sed -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" ${PROJECTPATH}/devpackages/gulp/config.js > ${PROJECTPATH}/gulp/config2.js
rm ${PROJECTPATH}/gulp/config.js
sed -e "s/\PROJECTNAME/${PROJECTNAME}/" -e "s/\PROJECTNAME/${PROJECTNAME}/" -e "s/\PROJECTNAME/${PROJECTNAME}/" ${PROJECTPATH}/gulp/config2.js > ${PROJECTPATH}/gulp/config.js
rm ${PROJECTPATH}/gulp/config2.js

echo "${yellow}Cleaning up...${txtreset}"
# We already have .stylelintrc in project root
rm ${PROJECTTHEMEPATH}/.stylelintrc
rm -rf ${PROJECTPATH}/devpackages
rm -rf ${PROJECTTHEMEPATH}/bin
rm -rf ${PROJECTTHEMEPATH}/gulp
rm -f ${PROJECTTHEMEPATH}/gulpfile.js
rm -f ${PROJECTTHEMEPATH}/.gitignore
rm -f ${PROJECTTHEMEPATH}/.travis.yml
rm -f ${PROJECTTHEMEPATH}/readme.txt
rm -f ${PROJECTTHEMEPATH}/languages/*
rm ${PROJECTTHEMEPATH}/README.md
rm ${PROJECTTHEMEPATH}/LICENSE.md

echo "${yellow}Removing demo content...${txtreset}"

for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i -e "s;Air_light_;${THEMENAME}_;" $i; done

# Note: find + -exec sed doesn't work in WSL for some weird reason
LC_ALL=C sed -i -e "s;@import 'layout\/demo-content'\;;;" ${PROJECTTHEMEPATH}/sass/global.scss
LC_ALL=C sed -i -e "s;@import 'layout\/wordpress'\;;;" ${PROJECTTHEMEPATH}/sass/global.scss
rm ${PROJECTTHEMEPATH}/sass/layout/_demo-content.scss
rm ${PROJECTTHEMEPATH}/sass/layout/_wordpress.scss

read -p "${boldyellow}Do we use comments in this project? (y/n)${txtreset} " yn
  if [ "$yn" = "n" ]; then
    LC_ALL=C sed -i -e "s;@import 'views\/comments'\;;;" ${PROJECTTHEMEPATH}/sass/global.scss
    rm ${PROJECTTHEMEPATH}/sass/views/_comments.scss
  else
    echo ' '
  fi

echo "${yellow}Remove things we need to remove anyway in each start...${txtreset}"
rm ${PROJECTTHEMEPATH}/sass/layout/_site-footer.scss
touch ${PROJECTTHEMEPATH}/sass/layout/_site-footer.scss
rm ${PROJECTTHEMEPATH}/sass/layout/_site-footer.scss
touch ${PROJECTTHEMEPATH}/sass/layout/_site-footer.scss
rm ${PROJECTTHEMEPATH}/template-parts/header/demo-content.php
rm -rf ${PROJECTTHEMEPATH}/template-parts/footer

# Remove demo includes
# Note: find + -exec sed doesn't work in WSL for some weird reason
LC_ALL=C sed -i -e "s;<\?php get_template_part( \'template-parts\/header\/demo-content\' ); \?>;;" ${PROJECTTHEMEPATH}/front-page.php
LC_ALL=C sed -i -e "s;<\?php get_template_part( \'template-parts\/footer\/demo-content\' ); \?>;;" ${PROJECTTHEMEPATH}/footer.php

echo "${yellow}Adding media library folder...${txtreset}"
mkdir -p ${PROJECTPATH}/media
echo "" > ${PROJECTPATH}/media/index.php
chmod 777 ${PROJECTPATH}/media

echo "${yellow}Generating default README.md...${txtreset}"

newestair="7.0.6"
newestwordpress="5.5"
newestphp="7.2"
currentdate=$(LC_TIME=en_US date '+%d %b %Y' |tr ' ' '_');
echo "# ${PROJECTNAME}
![based_on_air_version ${newestair}_](https://img.shields.io/badge/based_on_air_version-${newestair}_-brightgreen.svg?style=flat-square) ![project_created ${currentdate}](https://img.shields.io/badge/project_created-${currentdate}-blue.svg?style=flat-square) ![Tested_up_to WordPress_${newestwordpress}](https://img.shields.io/badge/Tested_up_to-WordPress_${newestwordpress}-blue.svg?style=flat-square) ![Compatible_with PHP_${newestphp}](https://img.shields.io/badge/Compatible_with-PHP_${newestphp}-green.svg?style=flat-square)

This project is hand made for customer.
## Stack

This project is built on [digitoimistodude/dudestack](https://github.com/digitoimistodude/dudestack), [digitoimistodude/air-light](https://github.com/digitoimistodude/air-light), [digitoimistodude/marlin-vagrant](https://github.com/digitoimistodude/marlin-vagrant) or [digitoimistodude/macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup), [digitoimistodude/devpackages](https://github.com/digitoimistodude/devpackages) which are documented at their corresponding locations. This is a guide on:

- How to setup the project initially<br>
- How to update the project dependencies<br>
- Project settings and features

## Theme screenshot

![Screenshot](/content/themes/${THEMENAME}/screenshot.png?raw=true \"Screenshot\")

## Environments:

Green checkmarks show if the environment is already set up and running, red cross indicates if it's not yet there or disabled.

✅  Development: [${PROJECTNAME}.test](http://${PROJECTNAME}.test)<br>
❌  Staging: [${PROJECTNAME}.vaiheessa.fi](https://${PROJECTNAME}.vaiheessa.fi)<br>
❌  Production: [${PROJECTNAME}.fi](https://${PROJECTNAME}.fi/)

## Setting it up initially

According to our handbook, you should have run \`createproject\`, inital setup by now. Your Vagrant machine (or macOS LEMP) should be up and running. If not, go back to [dudestack-instructions](https://github.com/digitoimistodude/dudestack-instructions) or [Dude handbook](https://handbook.dude.fi/wordpress-kehitys/projektin-aloitus) and read what you have do.

If dev environment is indeed running, you're ready to version control the project.

There are npm packages in both project root and theme folder. If you come later to this project, please run:

1. \`composer install\` (in project folder)
2. \`npm install\` (in project folder)
2. \`npm install\` (in theme folder)

Run project with \`gulp\`." > "${PROJECTS_HOME}${PROJECTNAME}/README.md"

echo "${yellow}Installing theme npm packages...${txtreset}"
cd ${PROJECTTHEMEPATH}
npm install

echo "${yellow}Running project gulp js once...${txtreset}"
cd ${PROJECTPATH}
gulp js

echo "${yellow}Running project gulp styles once...${txtreset}"
cd ${PROJECTPATH}
gulp styles

echo "${boldgreen}All done! Theme generated. Go to https://$PROJECTNAME.test/wp/wp-admin/themes.php and activate your theme, then run gulp watch in project root and start coding! Your project can be found at $PROJECTPATH and your theme can be found at $PROJECTTHEMEPATH${txtreset}"
