# No longer copying from devpackages (DEV-334) - theme has built-in gulp setup
# Only copy .nvmrc to project root for consistency
echo "${YELLOW}Setting up project configuration...${TXTRESET}"
cp ${PROJECT_THEME_PATH}/.nvmrc ${PROJECT_PATH}/ 2>/dev/null || echo "No .nvmrc found in theme"
