#!/bin/bash
# WordPress theme starting bash script for Air-light (Laragon version)

# Script specific vars
SCRIPT_LABEL='with Laragon support'
SCRIPT_VERSION='1.0.7'

# Vars needed for this file to function globally
CURRENTFILE=`basename $0`

#Variables
PROJECTS_HOME="c:/laragon/www"
STARTER_THEME_PATH_TEMP="${HOME}/air"
DIR_TO_FILE=$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")
TXTBOLD=$(tput bold)
BOLDYELLOW=${TXTBOLD}$(tput setaf 3)
BOLDGREEN=${TXTBOLD}$(tput setaf 2)
BOLDWHITE=${TXTBOLD}$(tput setaf 7)
YELLOW=$(tput setaf 3)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
WHITE=$(tput setaf 7)
TXTRESET=$(tput sgr0)
YEAR=$(date +%y)
CURRENTFILE=`basename $0`

# Determine scripts location to get imports right
if [ "$CURRENTFILE" = "newtheme-laragon.sh" ]; then
  SCRIPTS_LOCATION="$( pwd )"
else
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
  ORIGINAL_FILE=$( readlink $DIR/$CURRENTFILE )
  SCRIPTS_LOCATION=$( dirname $ORIGINAL_FILE )
fi

echo "-----------------------------------------------------"
echo "newtheme start script ${SCRIPT_LABEL}, v${SCRIPT_VERSION}"
echo "-----------------------------------------------------"
echo ""

while true; do
read -p "${BOLDYELLOW}Project created? (y/n)${TXTRESET} " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer y or n.";;
    esac
done

# Final note about server requirements
echo ""
echo "${WHITE}Using this start script requires you use the following:
https://laragon.org/ Full Version
https://github.com/digitoimistodude/air-light
${TXTRESET}"

# Ask names and credentials
source ${SCRIPTS_LOCATION}/tasks/askvars.sh

# Get latest Air-light version with updates and copy it over to your project
source ${SCRIPTS_LOCATION}/tasks/get-theme.sh

# Get and install theme dependencies, npm and devpackages
source ${SCRIPTS_LOCATION}/tasks/dependencies.sh

# Create latest Air-light development packages for project root level (gulp paths etc.)
source ${SCRIPTS_LOCATION}/tasks/project.sh

# Clean up leftover development files from Air-light
source ${SCRIPTS_LOCATION}/tasks/cleanups.sh

# Replace Air-light with your theme name and other seds (WSL version)
source ${SCRIPTS_LOCATION}/tasks/replaces-wsl.sh

# Add media folder, generate README.md for project etc.
source ${SCRIPTS_LOCATION}/tasks/additions.sh

# The end
source ${SCRIPTS_LOCATION}/tasks/footer.sh
