#!/bin/bash
# Theme starting bash script by rolle (github.com/ronilaukkarinen & github.com/digitoimistodude)

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

echo "${boldwhite}Please note: This script is designed to work with dudestack and air. See https://github.com/digitoimistodude${txtreset} "
echo "${boldyellow}Project name in lowercase:${txtreset} "
read -e PROJECTNAME
echo "${boldyellow}Theme name in lowercase (no spaces or special characters):${txtreset} "
read -e THEMENAME

PROJECTPATH="${HOME}/Projects/${PROJECTNAME}"
STARTERTHEMEPATH="${HOME}/air"
PROJECTTHEMEPATH="${HOME}/Projects/${PROJECTNAME}/content/themes/${THEMENAME}"

echo "${yellow}Checking air updates...${txtreset}"
cd $HOME
git clone git@github.com:digitoimistodude/air.git
cd $STARTERTHEMEPATH
git pull
echo "${yellow}Copying starter theme to project folder ${HOME}/Projects/${PROJECTNAME}/content/themes/${THEMENAME}${txtreset}"
cp -R ${STARTERTHEMEPATH} ${PROJECTTHEMEPATH}
echo "${yellow}Generating theme files with theme name and texdomain called ${THEMENAME}${txtreset}"
cd $PROJECTTHEMEPATH && rm -rf .git

# THE magical sed command by rolle (goes through every single file in theme folder and searchs and replaces every air instance with THEMENAME):
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air;${THEMENAME};" $i $i; done
for i in `grep -rl Air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air;${THEMENAME};" $i $i; done

echo "${yellow}Installing and updating local node.js packages (may take a while)${txtreset}"
cd ${PROJECTTHEMEPATH}
npm-check-updates -u
npm install

echo "${yellow}Cleaning up...${txtreset}"
rm -f ${PROJECTTHEMEPATH}/newtheme.sh
rm -f ${PROJECTTHEMEPATH}/.gitignore
rm ${PROJECTTHEMEPATH}/README.md
echo "${yellow}Adding media library folder...${txtreset}"
mkdir -p ${PROJECTPATH}/media
chmod 777 ${PROJECTPATH}/media
echo "${yellow}Activating theme...${txtreset}"
cd ${PROJECTPATH}
ssh vagrant@10.1.2.4 "cd /var/www/$PROJECTNAME/;vendor/wp-cli/wp-cli/bin/wp theme activate $THEMENAME"
echo "${boldgreen}All done! Theme generated and activated. Your theme can be found at $PROJECTTHEMEPATH${txtreset}"
