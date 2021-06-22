#!/bin/bash
# WordPress theme starting bash script for Air-light (WSL version)

# Script specific vars
SCRIPT_LABEL='with WSL support'
SCRIPT_VERSION='1.0.7'

# Vars needed for this file to function globally
CURRENTFILE=`basename $0`

# Determine scripts location to get imports right
if [ "$CURRENTFILE" = "newtheme-wsl.sh" ]; then
  SCRIPTS_LOCATION="$( pwd )"
  source ${SCRIPTS_LOCATION}/tasks/variables.sh
  source ${SCRIPTS_LOCATION}/tasks/header.sh
  exit
else
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
  ORIGINAL_FILE=$( readlink $DIR/$CURRENTFILE )
  SCRIPTS_LOCATION=$( dirname $ORIGINAL_FILE )
fi

# Import required variables
source ${SCRIPTS_LOCATION}/tasks/wsl-packages.sh

# Final note about server requirements
echo ""
echo "${WHITE}Using this start script requires you use the following:
https://github.com/digitoimistodude/windows-lemp-setup
https://github.com/digitoimistodude/air-light
${TXTRESET}"

# Import required tasks
source ${SCRIPTS_LOCATION}/tasks/imports.sh

# Replace Air-light with your theme name and other seds (WSL version)
source ${SCRIPTS_LOCATION}/tasks/replaces-wsl.sh

# The end
source ${SCRIPTS_LOCATION}/tasks/footer.sh
