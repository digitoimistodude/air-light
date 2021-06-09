#!/bin/bash
# A script for moving all dev files out of the theme for testing with Theme Check plugin
txtbold=$(tput bold)
boldyellow=${txtbold}$(tput setaf 3)
boldgreen=${txtbold}$(tput setaf 2)
boldwhite=${txtbold}$(tput setaf 7)
yellow=$(tput setaf 3)
green=$(tput setaf 2)
white=$(tput setaf 7)
txtreset=$(tput sgr0)

echo "${YELLOW}Moving dev files out...${TXTRESET}"
mkdir -p ~/air-temp
find . -name '.DS_Store' -type f -delete
find ../ -name '.DS_Store' -type f -delete
sudo rm ~/Projects/airdev/content/themes/air-light/sass/components/.gitkeep ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/sass/modules/.gitkeep ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.hintrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.stylelintignore ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.nvmrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.eslintrc.js ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.browserslistrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.vscode ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.svgo.yml ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.accessibilityrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.git ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.gitignore ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.jshintignore ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.travis.yml ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/package.json ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/package-lock.json ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/phpcs.xml ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/node_modules ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/gulpfile.js ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/bin ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/content ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/__MACOSX ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.scss-lint.yml ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/front-page.php ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/README.md ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.stylelintrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.editorconfig ~/air-temp/
mkdir -p ~/air-temp/template-parts
mkdir -p ~/air-temp/template-parts/header
mkdir -p ~/air-temp/template-parts/footer

# Remove custom stuff that are not part of an official WordPress theme in WP theme directory,
# Because:
# REQUIRED: The theme uses the register_taxonomy() function, which is plugin-territory functionality.
# REQUIRED: The theme uses the register_post_type() function, which is plugin-territory functionality.
rm ~/Projects/airdev/content/themes/air-light/inc/includes/taxonomy.php
rm ~/Projects/airdev/content/themes/air-light/inc/includes/post-type.php

# Screenshot, related to: https://themes.trac.wordpress.org/ticket/100180#comment:2
mv ~/Projects/airdev/content/themes/air-light/screenshot.png ~/air-temp/
cd ~/Projects/airdev/content/themes/air-light/
wget https://i.imgur.com/Pwz9nc4.png
mv Pwz9nc4.png screenshot.png

# Moving to bin dir
cd ~/air-temp/bin

echo "
${boldgreen}Done! Next steps:${TXTRESET}"
echo "
${boldwhite}1. Click the Check it -button: http://airdev.test/wp/wp-admin/themes.php?page=themecheck
2. sh air-pack.sh
3. Upload: https://wordpress.org/themes/upload/
4. sh air-move-in.sh
${TXTRESET} "
