# Note about running directly as we can't prevent people running this via sh or bash pre-cmd
if [ "$1" = "--existing" ] || [[ "$1" == --* ]]; then
  # Skip dirname/basename for any flag arguments
  export DIR_TO_FILE=""
else
  # Only try to get directory for non-flag arguments
  if [ -n "$1" ] && [[ "$1" != --* ]]; then
    export DIR_TO_FILE=$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")
  else
    export DIR_TO_FILE=$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd -P)/$(basename "${BASH_SOURCE[0]}")
  fi
fi

# Get air-light version from CHANGELOG.md first line, format: "### 1.2.3: YYYY-MM-DD"
AIRLIGHT_VERSION=$(grep '^### ' "${SCRIPTS_LOCATION}/../CHANGELOG.md" 2>/dev/null | head -n 1 | cut -d' ' -f2 | tr -d ':' || echo "dev")

# Get version date from CHANGELOG.md in the air-light root directory
AIRLIGHT_DATE=$(grep '^### ' "${SCRIPTS_LOCATION}/../CHANGELOG.md" 2>/dev/null | head -n 1 | cut -d' ' -f3 || date +%Y-%m-%d)

# Source the logo
source "$SCRIPTS_LOCATION/tasks/logo.sh"

# Print the logo
print_logo

echo ""
echo "-----------------------------------------------------------------------"
echo "newtheme start script ${SCRIPT_LABEL}, v${SCRIPT_VERSION}"
echo "air-light v${AIRLIGHT_VERSION} (${AIRLIGHT_DATE})"
echo "-----------------------------------------------------------------------"
echo ""
if [ ! -f /usr/local/bin/newtheme ]; then
echo "${TXTRESET}${TXTBOLD}ACTION REQUIRED:${TXTRESET}${WHITE} Link this file to system level and start from there with this oneliner:${TXTRESET}"
echo ""
echo "${GREEN}sudo ln -s ${SCRIPTS_LOCATION}/newtheme.sh /usr/local/bin/newtheme && sudo chmod +x /usr/local/bin/newtheme && newtheme${TXTRESET}" 1>&2
echo ""
exit
fi
if [ $0 != '/usr/local/bin/newtheme' ]; then
echo "${TXTRESET}${WHITE}Please do NOT run this script with ${RED}sh $CURRENTFILE${WHITE} or ${RED}bash $CURRENTFILE${WHITE} or ${RED}./$CURRENTFILE${WHITE}.
Run this script globally instead by simply typing: ${GREEN}newtheme${TXTRESET}"
echo ""
exit
fi

while true; do
read -p "${BOLDYELLOW}Project created? (y/n)${TXTRESET} " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer y or n.";;
    esac
done
