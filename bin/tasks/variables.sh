export PROJECTS_HOME="/var/www"
# Handle flag arguments properly - don't try to get directory from flags
if [ -n "$1" ] && [[ "$1" != --* ]]; then
  export DIR_TO_FILE=$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")
else
  export DIR_TO_FILE=$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd -P)/$(basename "${BASH_SOURCE[0]}")
fi
export CURRENTFILE=`basename $0`
export TXTBOLD=$(tput bold)
export BOLDYELLOW=${TXTBOLD}$(tput setaf 3)
export BOLDGREEN=${TXTBOLD}$(tput setaf 2)
export BOLDWHITE=${TXTBOLD}$(tput setaf 7)
export YELLOW=$(tput setaf 3)
export RED=$(tput setaf 1)
export GREEN=$(tput setaf 2)
export WHITE=$(tput setaf 7)
export TXTRESET=$(tput sgr0)
export LOCAL_IP=$(ifconfig | grep -Eo "inet (addr:)?([0-9]*\.){3}[0-9]*" | grep -Eo "([0-9]*\.){3}[0-9]*" | grep -v "127.0.0.1")
export YEAR=$(date +%y)
export CURRENTFILE=`basename $0`
export STARTER_THEME_PATH_TEMP="${HOME}/air"
