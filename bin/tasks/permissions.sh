echo "${YELLOW}Making sure the permissions are right for npm... (you should have nopasswd sudoers or temporarily password copied here if it asks for each time)${TXTRESET}"
sudo chmod -R 777 ${PROJECT_THEME_PATH}/acf-json
mkdir -p ${PROJECT_PATH}/node_modules
mkdir -p ${PROJECT_THEME_PATH}/node_modules
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ${PROJECT_PATH}/node_modules
sudo chmod -R 777 ${PROJECT_PATH}/node_modules
sudo chown -R $(whoami) ${PROJECT_THEME_PATH}/node_modules
sudo chmod -R 777 ${PROJECT_THEME_PATH}/node_modules
sudo chown -R $(whoami) ${PROJECT_PATH}/content/plugins
sudo chmod 777 ${PROJECT_PATH}/content
sudo chmod -R 777 ${PROJECT_PATH}/content/plugins
