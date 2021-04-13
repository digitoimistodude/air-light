read -p "${boldyellow}Do we use comments in this project? (y/n)${txtreset} " yn
  if [ "$yn" = "n" ]; then
    find ${PROJECT_THEME_PATH}/sass/ -name 'global.scss' -exec sed -i '' -e "s/@import 'views\/comments';//g" {} +
    rm ${PROJECT_THEME_PATH}/sass/views/_comments.scss
  else
    echo ' '
  fi
