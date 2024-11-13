#!/bin/bash
# WordPress theme starting bash script for Air-light, ported for Pop!_OS, might work on Ubuntu or even Debian, or other forks.

# Script specific vars
SCRIPT_LABEL='for Pop!_OS'
SCRIPT_VERSION='1.0.0 (2023-09-29)'

# Vars needed for this file to function globally
CURRENTFILE=`basename $0`

# Determine scripts location to get imports right
if [ "$CURRENTFILE" = "newtheme-popos.sh" ]; then
  SCRIPTS_LOCATION="$( pwd )"
  source ${SCRIPTS_LOCATION}/tasks/variables.sh
  source ${SCRIPTS_LOCATION}/tasks/header.sh
  exit
else
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
  ORIGINAL_FILE=$( readlink $DIR/$CURRENTFILE )
  # Check if ORIGINAL_FILE is empty before calling dirname
  if [ -n "$ORIGINAL_FILE" ]; then
    SCRIPTS_LOCATION=$( dirname "$ORIGINAL_FILE" )
  else
    echo "Error: Could not determine original file location"
    exit 1
  fi
fi

# Final note about server requirements
echo ""
echo "${WHITE}Using this start script requires you use the following:
https://github.com/raikasdev/pop-lemp-setup
https://github.com/digitoimistodude/air-light
${TXTRESET}"

# First, let's check updates to self
source ${SCRIPTS_LOCATION}/tasks/self-update.sh

# Import required tasks
source ${SCRIPTS_LOCATION}/tasks/imports.sh

# Replace Air-light with your theme name and other seds
source ${SCRIPTS_LOCATION}/tasks/replaces-wsl.sh

# The end
source ${SCRIPTS_LOCATION}/tasks/footer.sh
