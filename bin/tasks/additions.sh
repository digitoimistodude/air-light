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

NEWEST_AIR_VERSION="9.2.7"
NEWEST_WORDPRESS_VERSION="6.1.1"
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

## Getting started

Your local server should be up and running. If you need help, ask your superviser or refer to **[Internal Development Docs](https://app.gitbook.com/o/PedExJWZmbCiZe4gDwKC/s/VVikkYgIZ9miBzwYDCYh/)** → **[Joining the project later on](https://app.gitbook.com/o/PedExJWZmbCiZe4gDwKC/s/VVikkYgIZ9miBzwYDCYh/project-stages/joining-the-project-later-on)**.

### Installation

In project root:

\`\`\`
composer install
nvm install
nvm use
npm install
\`\`\`

In theme directory:

\`\`\`
npm install
\`\`\`

Start development from project root:

\`\`\`
gulp
\`\`\`" > "${PROJECTS_HOME}/${PROJECT_NAME}/README.md"
