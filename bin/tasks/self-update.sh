# Check for symlink
echo "${YELLOW}Running self-updater...${TXTRESET}"

if [ $0 != '/usr/local/bin/newtheme' ]; then
echo "${TXTRESET}${WHITE}Please do NOT run this script with ${RED}sh $CURRENTFILE${WHITE} or ${RED}bash $CURRENTFILE${WHITE} or ${RED}./$CURRENTFILE${WHITE}.
Run this script globally instead by simply typing: ${GREEN}newtheme${TXTRESET}. If this doesn't work, please run first setup from the bin folder first."
echo ""
exit
fi

# Check for updates
# Get symlink path from /usr/local/bin/newtheme
SYMLINKPATH=$(readlink /usr/local/bin/newtheme)

# Get theme bin folder directory from symlink path
THEMEBINFOLDER=$(dirname $SYMLINKPATH)

# Go one step back from bin to get theme root folder
THEMEROOTFOLDER=$(dirname $THEMEBINFOLDER)

# Go to the theme root folder
cd $THEMEROOTFOLDER

# Make sure no file mods are being committed
git config core.fileMode false

# Check for updates
git pull origin master

# If there is something preventing the update, show error message
if [ $? -ne 0 ]; then
echo "${TXTRESET}${WHITE}There was an error updating the start script. You have probably made changes to the air-light theme? Please commit those changes, send a PR or stash them. Please check the error message above and try again."

# If there are no errors, show success message
else
echo "${TXTRESET}${boldgreen}The start script newtheme.sh has been updated successfully to the latest version.${TXTRESET}"
fi
