echo "${BOLDYELLOW}Project name in lowercase:${TXTRESET} "
read -e PROJECT_NAME
echo "${BOLDYELLOW}Theme name in lowercase (no spaces or special characters):${TXTRESET} "
read -e THEME_NAME

# Add these variables based on asked vars
export PROJECT_PATH="${PROJECTS_HOME}/${PROJECT_NAME}"
export PROJECT_THEME_PATH="${PROJECTS_HOME}/${PROJECT_NAME}/content/themes/${THEME_NAME}"
