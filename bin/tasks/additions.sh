#!/bin/bash
echo "${YELLOW}Adding media library folder...${TXTRESET}"
mkdir -p ${PROJECT_PATH}/media
echo "" > ${PROJECT_PATH}/media/index.php
chmod 777 ${PROJECT_PATH}/media

echo "${YELLOW}Generating default README.md...${TXTRESET}"

# Only facts that stay true, bin/readme.sh describes the project from its code later
cat > "${PROJECTS_HOME}/${PROJECT_NAME}/README.md" << README
# ${PROJECT_NAME}

WordPress site for ${PROJECT_NAME}, made by [Digitoimisto Dude Oy](https://www.dude.fi).

![${PROJECT_NAME} theme screenshot](content/themes/${THEME_NAME}/screenshot.png)

Built on [dudestack](https://github.com/digitoimistodude/dudestack) and [air-light](https://github.com/digitoimistodude/air-light). Versions and release notes are in [CHANGELOG.md](content/themes/${THEME_NAME}/CHANGELOG.md).

## Getting started

You need [macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup) running. The full walkthrough is in [Joining the project later on](https://docs.dude.fi/doc/joining-the-project-later-on-enczxoagEQ).

\`\`\`bash
git clone git@github.com:digitoimistodude/${PROJECT_NAME}.git && cd ${PROJECT_NAME}
composer install
cd content/themes/${THEME_NAME}
nvm use
npm install
npm run dev
\`\`\`

## Development

Run these in \`content/themes/${THEME_NAME}\`:

| Command | What it does |
|---|---|
| \`npm run dev\` | Watches styles and scripts, starts BrowserSync |
| \`npm run build\` | Production build |
| \`npm run lint\` | ESLint |
| \`npm run lint:styles\` | Stylelint |

Every change gets a line in CHANGELOG.md and a Linear issue reference at the end of the commit message.

## Deployment

Capistrano from \`master\`. Stage files in \`config/deploy/\` are not in the repo.

\`\`\`bash
cap staging deploy
cap production deploy
\`\`\`

See [Deploying to staging](https://docs.dude.fi/doc/deploying-to-staging-dPBT6qe7NA).
README
