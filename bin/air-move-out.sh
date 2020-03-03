#!/bin/bash
# A script for moving all dev files out of the theme for testing with Theme Check plugin

mkdir -p ~/air-temp
sudo mv ~/Projects/airdev/content/themes/air-light/.DS_Store ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.accessibilityrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.git ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.gitignore ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.jshintignore ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.travis.yml ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/package.json ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/package-lock.json ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/phpcs.xml ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/node_modules ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.jscsrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/gulpfile.js ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/bin ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/content ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/__MACOSX ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.scss-lint.yml ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/front-page.php ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/README.md ~/air-temp/
sudo rm ~/Projects/airdev/content/themes/air-light/.DS_Store
sudo rm ~/Projects/airdev/content/themes/air-light/js/.DS_Store
sudo rm ~/Projects/airdev/content/themes/air-light/sass/.DS_Store
sudo rm ~/Projects/airdev/content/themes/air-light/css/.DS_Store
sudo rm ~/Projects/airdev/content/themes/air-light/fonts/.DS_Store
sudo rm ~/Projects/airdev/content/themes/air-light/images/.DS_Store
sudo mv ~/Projects/airdev/content/themes/air-light/.stylelintrc ~/air-temp/
sudo mv ~/Projects/airdev/content/themes/air-light/.editorconfig ~/air-temp/
mkdir -p ~/air-temp/template-parts
mkdir -p ~/air-temp/template-parts/header
mkdir -p ~/air-temp/template-parts/footer
sudo mv ~/Projects/airdev/content/themes/air-light/template-parts/header/demo-content.php ~/air-temp/template-parts/header/
sudo mv ~/Projects/airdev/content/themes/air-light/template-parts/footer/demo-content.php ~/air-temp/template-parts/footer/

# Remove custom stuff that are not part of an official WordPress theme in WP theme directory
rm ~/Projects/airdev/content/themes/air-light/inc/includes/taxonomy.php
rm ~/Projects/airdev/content/themes/air-light/inc/includes/post-type.php

# Moving to bin dir
cd ~/air-temp/bin
