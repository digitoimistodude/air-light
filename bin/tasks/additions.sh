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

Run project with \`gulp\`." > "${PROJECTS_HOME}/${PROJECT_NAME}/README.md"
