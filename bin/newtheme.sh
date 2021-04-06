#!/bin/bash
# @Author: Roni Laukkarinen
# @Date:   2020-05-11 13:29:39
# @Last Modified by:   Roni Laukkarinen
# @Last Modified time: 2021-02-25 10:57:29
#!/bin/bash
# Theme starting bash script (github.com/digitoimistodude)

txtbold=$(tput bold)
boldyellow=${txtbold}$(tput setaf 3)
boldgreen=${txtbold}$(tput setaf 2)
boldwhite=${txtbold}$(tput setaf 7)
yellow=$(tput setaf 3)
green=$(tput setaf 2)
white=$(tput setaf 7)
txtreset=$(tput sgr0)

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

PROJECTPATH="${HOME}/Projects/${PROJECTNAME}"
STARTERTHEMEPATH="${HOME}/air"
PROJECTTHEMEPATH="${HOME}/Projects/${PROJECTNAME}/content/themes/${THEMENAME}"

echo "${yellow}Checking air updates...${txtreset}"
cd $HOME
git clone https://github.com/digitoimistodude/air
cd $STARTERTHEMEPATH
git pull
echo "${yellow}Copying starter theme to project folder ${HOME}/Projects/${PROJECTNAME}/content/themes/${THEMENAME}${txtreset}"
cp -R ${STARTERTHEMEPATH} ${PROJECTTHEMEPATH}
echo "${yellow}Generating theme files with theme name and texdomain called ${THEMENAME}${txtreset}"
cd $PROJECTTHEMEPATH && rm -rf .git

# THE magical sed command by rolle (goes through every single file in theme folder and searchs and replaces every air instance with THEMENAME):
for i in `grep -rl air-light * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEMENAME};" $i $i; done
for i in `grep -rl Air-light * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air-light;${THEMENAME};" $i $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEMENAME};" $i $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air_light_;${THEMENAME}_;" $i $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air_light_;${THEMENAME}_;" $i $i; done

#echo "${yellow}Installing and updating theme node.js packages (may take a while)${txtreset}"
#cd ${PROJECTTHEMEPATH}
#npm-check-updates -u
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
rm ${PROJECTTHEMEPATH}/.hintrc
cp ${PROJECTTHEMEPATH}/.hintrc ${PROJECTPATH}/
cp ${PROJECTTHEMEPATH}/.jscsrc ${PROJECTPATH}/
cp ${PROJECTTHEMEPATH}/.svgo.yml ${PROJECTPATH}/
cd ${PROJECTPATH}/devpackages
sed -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" ${PROJECTPATH}/devpackages/.stylelintrc > ${PROJECTPATH}/devpackages/.stylelintrc2
cp ${PROJECTPATH}/devpackages/.stylelintrc2 ${PROJECTPATH}/.stylelintrc
sed -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" -e "s/\THEMENAME/${THEMENAME}/" ${PROJECTPATH}/devpackages/.eslintrc.js > ${PROJECTPATH}/gulp/.eslintrc.js2
rm ${PROJECTTHEMEPATH}/.stylelintrc
cp ${PROJECTPATH}/devpackages/.eslintrc.js2 ${PROJECTPATH}/.eslintrc.js
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
find ${PROJECTTHEMEPATH}/sass/ -name 'global.scss' -exec sed -i '' -e "s/@import 'layout\/demo-content';//g" {} +
find ${PROJECTTHEMEPATH}/sass/ -name 'global.scss' -exec sed -i '' -e "s/@import 'layout\/wordpress';//g" {} +
rm ${PROJECTTHEMEPATH}/sass/layout/_demo-content.scss
rm ${PROJECTTHEMEPATH}/sass/layout/_wordpress.scss

read -p "${boldyellow}Do we use comments in this project? (y/n)${txtreset} " yn
  if [ "$yn" = "n" ]; then
    find ${PROJECTTHEMEPATH}/sass/ -name 'global.scss' -exec sed -i '' -e "s/@import 'views\/comments';//g" {} +
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
find ${PROJECTTHEMEPATH}/ -maxdepth 2 -name 'front-page.php' -exec sed -i '' -e "s/<\?php get_template_part( \'template-parts\/header\/demo-content\' ); \?>//g" {} +
find ${PROJECTTHEMEPATH}/ -maxdepth 2 -name 'footer.php' -exec sed -i '' -e "s/<\?php get_template_part( \'template-parts\/footer\/demo-content\' ); \?>//g" {} +

echo "${yellow}Adding media library folder...${txtreset}"
mkdir -p ${PROJECTPATH}/media
echo "" > ${PROJECTPATH}/media/index.php
chmod 777 ${PROJECTPATH}/media

echo "${yellow}Generating default README.md...${txtreset}"

newestair="7.0.3"
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

Run project with \`gulp\`." > "${HOME}/Projects/${PROJECTNAME}/README.md"

#echo "${yellow}Activating theme...${txtreset}"
#cd ${PROJECTPATH}
#ssh vagrant@10.1.2.4 "cd /var/www/$PROJECTNAME/;vendor/wp-cli/wp-cli/bin/wp theme activate $THEMENAME"

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
