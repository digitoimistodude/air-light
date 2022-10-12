#!/bin/bash
# @Author: Roni Laukkarinen
# @Date:   2021-05-21 14:40:29
# @Last Modified by:   Elias Kautto
# @Last Modified time: 2022-05-27 10:37:34
echo "${YELLOW}Adding media library folder...${TXTRESET}"
mkdir -p ${PROJECT_PATH}/media
echo "" > ${PROJECT_PATH}/media/index.php
chmod 777 ${PROJECT_PATH}/media

echo "${YELLOW}Generating default README.md...${TXTRESET}"

NEWEST_AIR_VERSION="9.2.0"
NEWEST_WORDPRESS_VERSION="6.0.2"
NEWEST_PHP_VERSION="7.4"
CURRENT_DATE=$(LC_TIME=en_US date '+%d %b %Y' |tr ' ' '_');
echo "# ${PROJECT_NAME}
![based_on_air_version ${NEWEST_AIR_VERSION}_](https://img.shields.io/badge/based_on_air_version-${NEWEST_AIR_VERSION}_-brightgreen.svg?style=flat-square) ![project_created ${CURRENT_DATE}](https://img.shields.io/badge/project_created-${CURRENT_DATE}-blue.svg?style=flat-square) ![Tested_up_to WordPress_${NEWEST_WORDPRESS_VERSION}](https://img.shields.io/badge/Tested_up_to-WordPress_${NEWEST_WORDPRESS_VERSION}-blue.svg?style=flat-square) ![Compatible_with PHP_${NEWEST_PHP_VERSION}](https://img.shields.io/badge/Compatible_with-PHP_${NEWEST_PHP_VERSION}-green.svg?style=flat-square)

This project is hand made for customer by Dude.

------8<----------<br>
**Disclaimer:** Please remove this disclaimer after you have edited the README.md, style.css version information and details and screenshot.png. If you see this text in place after the project has been deployed to production, \`git blame\` is in place ;)<br>
------8<----------

## Stack

### Project is based on

* [digitoimistodude/dudestack](https://github.com/digitoimistodude/dudestack)
* [digitoimistodude/air-light](https://github.com/digitoimistodude/air-light)
* [digitoimistodude/devpackages](https://github.com/digitoimistodude/devpackages)

### Recommended development environment

* [digitoimistodude/macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup)

## Theme screenshot

![Screenshot](/content/themes/${THEME_NAME}/screenshot.png?raw=true \"Screenshot\")

## Environments

Green checkmarks show if the environment is already set up and running, red cross indicates if it's not yet there or disabled.

✅  Development: [${PROJECT_NAME}.test](http://${PROJECT_NAME}.test)<br>
❌  Staging: [${PROJECT_NAME}.vaiheessa.fi](https://${PROJECT_NAME}.vaiheessa.fi)<br>
❌  Production: [${PROJECT_NAME}.fi](https://${PROJECT_NAME}.fi/)

## Setting it up initially

According to our handbook, you should have run \`createproject\`, inital setup by now. Your local server should be up and running.

If you need help, ask your superviser or go back to [dudestack-instructions](https://github.com/digitoimistodude/dudestack-instructions) / [Dude handbook](https://handbook.dude.fi/wordpress-kehitys/projektin-aloitus) and read what you have do.

If local development environment is indeed running, you're ready to version control the project.

There are npm packages in both project root and theme folder. If you come later to this project, please go through [handbook](https://handbook.dude.fi/wordpress-kehitys/projektin-aloitus#myohemmin-projektiin-mukana-tulevan-devaajan-tehtavat) and run:

1. \`composer install\` (in project folder)
2. \`npm install\` (in project folder)
2. \`npm install\` (in theme folder)

Run watcher task with \`gulp\` and start developing. Most of all, have fun working!" > "${PROJECTS_HOME}/${PROJECT_NAME}/README.md"
