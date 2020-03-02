#!/bin/bash
# A script that makes a package for WordPress Theme Directory

mkdir -p ~/Projects
mkdir -p ~/Projects/airdev
mkdir -p ~/Projects/airdev/content
mkdir -p ~/Projects/airdev/content/themes
rm ~/Projects/airdev/content/themes/air-light.zip
sh ~/Projects/airdev/content/themes/air-light/bin/air-move-out.sh
cd ~/Projects/airdev/content/themes/
zip -r air-light.zip air-light
sh ~/Projects/airdev/content/themes/air-light/bin/air-move-in.sh
