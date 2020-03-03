#!/bin/bash
# A script for moving all dev files back to the theme

mkdir -p ~/air-temp
sudo mv ~/air-temp/.DS_Store ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.accessibilityrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.git ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.gitignore ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.jshintignore ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.travis.yml ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/package.json ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/package-lock.json ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/phpcs.xml ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/node_modules ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.jscsrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/gulpfile.js ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/bin ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/content ~/Projects/airdev/content/themes/air-light/content
sudo mv ~/air-temp/.scss-lint.yml ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/front-page.php ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/README.md ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.stylelintrc ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/.editorconfig ~/Projects/airdev/content/themes/air-light/
sudo mv ~/air-temp/template-parts/header/demo-content.php ~/Projects/airdev/content/themes/air-light/template-parts/header/
sudo mv ~/air-temp/template-parts/footer/demo-content.php ~/Projects/airdev/content/themes/air-light/template-parts/footer/

# Restore repository state before move
cd ~/Projects/airdev/content/themes/air-light/ && git stash
