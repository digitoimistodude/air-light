#!/bin/bash
# A script for moving all dev files back to the theme
txtbold=$(tput bold)
boldyellow=${txtbold}$(tput setaf 3)
boldgreen=${txtbold}$(tput setaf 2)
boldwhite=${txtbold}$(tput setaf 7)
yellow=$(tput setaf 3)
green=$(tput setaf 2)
white=$(tput setaf 7)
txtreset=$(tput sgr0)

mkdir -p ~/air-temp
sudo cp ~/air-temp/.gitkeep ~/Projects/airdev/content/themes/air-light/sass/components/
sudo cp ~/air-temp/.gitkeep ~/Projects/airdev/content/themes/air-light/sass/modules/
sudo mv ~/air-temp/.hintrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.stylelintignore ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.nvmrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.eslintrc.js ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.browserslistrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.vscode ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.svgo.yml ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.accessibilityrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.git ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.gitignore ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.jshintignore ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.travis.yml ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/package.json ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/package-lock.json ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/phpcs.xml ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/node_modules ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/gulpfile.js ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/bin ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/content ~/Projects/airdev/content/themes/air-light/content
sudo mv ~/air-temp/.scss-lint.yml ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/front-page.php ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/README.md ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.stylelintrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.editorconfig ~/Projects/airdev/content/themes/air-light/

# Move the original starter screenshot back in, related to: https://themes.trac.wordpress.org/ticket/100180#comment:2
rm ~/Projects/airdev/content/themes/air-light/screenshot.png
mv ~/air-temp/screenshot.png ~/Projects/airdev/content/themes/air-light/

# Restore repository state before move
cd ~/Projects/airdev/content/themes/air-light/ && git stash
git status

echo "
${boldgreen}Air files moved in and github repository restored, now just do the following:${TXTRESET}"
echo "
1. Upload (if you didn't already): https://wordpress.org/themes/upload/
2. Create new release: https://github.com/digitoimistodude/air-light/releases
3. Update version to https://airwptheme.com
4. All done!
${TXTRESET} "
