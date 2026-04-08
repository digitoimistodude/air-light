echo "${YELLOW}Generating GitHub Actions workflows...${TXTRESET}"
mkdir -p ${PROJECT_PATH}/.github/workflows

cat > "${PROJECT_PATH}/.github/workflows/code-quality.yml" << 'WORKFLOW'
name: Code quality

on: [push, pull_request]

jobs:
  php:
    name: PHP
    runs-on: ubuntu-24.04
    steps:
    - name: Checkout
      uses: actions/checkout@v6

    - name: Setup PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '8.3'

    - name: Install Composer dependencies
      uses: php-actions/composer@v6
      env:
        COMPOSER: "composer.json"
      with:
        php_version: "8.3"
        version: "2.3.7"
        args: "--ignore-platform-reqs --optimize-autoloader"

    - name: Install theme Composer dependencies
      uses: php-actions/composer@v6
      env:
        COMPOSER: "composer.json"
      with:
        php_version: "8.3"
        version: "2.3.7"
        args: "--ignore-platform-reqs --optimize-autoloader"
        dev: yes
        working_dir: "content/themes/THEME_NAME"

    - name: Run PHPCS on theme
      run: |
        cd content/themes/THEME_NAME
        vendor/bin/phpcs -p . --extensions=php --ignore=vendor,node_modules,assets/dist --standard=phpcs.xml

    - name: Test PHP syntax
      run: find -L content/themes/THEME_NAME -name '*.php' -not -path '*/vendor/*' -not -path '*/node_modules/*' -print0 | xargs -0 -n 1 -P 4 php -l

  php-compatibility:
    name: PHP 8.3 compatibility
    runs-on: ubuntu-24.04
    steps:
    - name: Checkout
      uses: actions/checkout@v6

    - name: Setup PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '8.3'

    - name: Install theme Composer dependencies
      uses: php-actions/composer@v6
      env:
        COMPOSER: "composer.json"
      with:
        php_version: "8.3"
        version: "2.3.7"
        args: "--ignore-platform-reqs --optimize-autoloader"
        dev: yes
        working_dir: "content/themes/THEME_NAME"

    - name: Run PHPCompatibility
      run: |
        cd content/themes/THEME_NAME
        vendor/bin/phpcs -p . --extensions=php --ignore=vendor,node_modules,assets/dist --standard=PHPCompatibility --runtime-set testVersion 8.3

  styles:
    name: Styles
    runs-on: ubuntu-24.04
    defaults:
      run:
        working-directory: content/themes/THEME_NAME
    steps:
    - name: Checkout
      uses: actions/checkout@v6

    - name: Read .nvmrc
      run: echo "NVMRC=$(cat .nvmrc)" >> $GITHUB_OUTPUT
      id: nvm

    - name: Setup node
      uses: actions/setup-node@v6
      with:
        node-version: '${{ steps.nvm.outputs.NVMRC }}'

    - name: Install packages
      run: npm install

    - name: Build styles
      run: npm run dev:styles

    - name: Run stylelint
      run: npm run lint:styles -- --max-warnings 0

  js:
    name: JavaScript
    runs-on: ubuntu-24.04
    defaults:
      run:
        working-directory: content/themes/THEME_NAME
    steps:
    - name: Checkout
      uses: actions/checkout@v6

    - name: Read .nvmrc
      run: echo "NVMRC=$(cat .nvmrc)" >> $GITHUB_OUTPUT
      id: nvm

    - name: Setup node
      uses: actions/setup-node@v6
      with:
        node-version: '${{ steps.nvm.outputs.NVMRC }}'

    - name: Install packages
      run: npm install

    - name: Lint JS
      run: npm run lint

    - name: Build JS
      run: npm run dev:js
WORKFLOW

# Replace THEME_NAME placeholder with actual theme name
LC_ALL=C sed -i '' "s/THEME_NAME/${THEME_NAME}/g" "${PROJECT_PATH}/.github/workflows/code-quality.yml"
