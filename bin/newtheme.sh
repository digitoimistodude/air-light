#!/bin/bash
# WordPress theme starting bash script for Air-light

# Script specific vars
SCRIPT_LABEL='for macOS'
SCRIPT_VERSION='1.1.5 (2025-08-28)'

# Vars needed for this file to function globally
CURRENTFILE=`basename $0`

# Determine scripts location to get imports right
if [ "$CURRENTFILE" = "newtheme.sh" ]; then
  SCRIPTS_LOCATION="$( pwd )"
  source ${SCRIPTS_LOCATION}/tasks/variables.sh
  source ${SCRIPTS_LOCATION}/tasks/header.sh
  exit
else
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
  ORIGINAL_FILE=$( readlink "$DIR/$CURRENTFILE" )
  if [ -n "$ORIGINAL_FILE" ]; then
    SCRIPTS_LOCATION=$( dirname "$ORIGINAL_FILE" )
  else
    # Fallback if readlink fails
    SCRIPTS_LOCATION="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
  fi
fi

# Final note about server requirements
echo ""
echo "${WHITE}Using this start script requires you use the following:
https://github.com/digitoimistodude/macos-lemp-setup
https://github.com/digitoimistodude/air-light
${TXTRESET}"

# First, let's check updates to self
source ${SCRIPTS_LOCATION}/tasks/self-update.sh

# Import required tasks
source ${SCRIPTS_LOCATION}/tasks/imports.sh $@

# Replace Air-light with your theme name and other seds
source ${SCRIPTS_LOCATION}/tasks/replaces.sh

# The end
source ${SCRIPTS_LOCATION}/tasks/footer.sh
