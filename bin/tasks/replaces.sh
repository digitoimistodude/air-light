echo "${yellow}Generating theme files with theme name and textdomain called ${THEME_NAME}${txtreset}"
# THE magical sed command by rolle (goes through every single file in theme folder and searchs and replaces every air instance with THEME_NAME):
for i in `grep -rl air-light * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl Air-light * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air_light_;${THEME_NAME}_;" $i $i; done
for i in `grep -rl air * 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air_light_;${THEME_NAME}_;" $i $i; done
