## Air-light - A minimalist WordPress starter theme

[![Build Status](https://img.shields.io/travis/com/digitoimistodude/air-light.svg?style=flat-square)](https://travis-ci.com/digitoimistodude/air-light) [![GitHub release](https://img.shields.io/github/tag/digitoimistodude/air-light.svg?style=flat-square)](https://github.com/digitoimistodude/air-light/releases) ![GitHub contributors](https://img.shields.io/github/contributors/digitoimistodude/air-light.svg?style=flat-square)

Air-light (or simply *Air*) is designed to be an ultra minimal starting point for a WordPress project at [Digitoimisto Dude Oy](https://www.dude.fi), a Finnish boutique digital agency in the center of Jyväskylä. Theme is originally based on [\_s](https://github.com/automattic/_s). We welcome all happy contributors with open arms! [See roadmap](https://favro.com/organization/3b45e73eaf083f68fefef368/c1dd2d4a99d6723904d2e763).

## [Demo](https://airwptheme.com/demo) | [Documentation](https://github.com/digitoimistodude/air-light/wiki)

* **CSS gzipped:** 16.8 KB *(originally 124.4 KB)*
* **JS gzipped:** 8.6 KB *(28.6 KB original)*
* **Front page HTML**: 7.4 KB *(29.4 KB original)*

![air-light-readme-mockup-latest](https://user-images.githubusercontent.com/1534150/170326942-b7404051-7621-4df3-9294-0ccd5e6f59a7.png)

## Weekly updates!

This theme is constantly kept up to date by a bunch of [awesome contributors](https://github.com/digitoimistodude/air-light/graphs/contributors). Wanna join in development? Read [the instructions for contributing](#contributing) and let us know about your first PR!

![Alt](https://repobeats.axiom.co/api/embed/bd95f5747b41d3cf662e033044af08dee9a15f9f.svg "Repobeats analytics image")

### Mission & vision

Air-light is built to be very straightforward, backwards compatible, front-end developer friendly and modular by its structure. Following [Underscores](https://github.com/automattic/_s) and [WordPress Theme Coding Standards](https://codex.wordpress.org/Theme_Development#Theme_Development_Standards) best practices and most of the changes in \_s are implemented as soon as they are committed.

**Our mission and goal** is **minimalism** and **simplicity**. **Our vision** is to build a theme that will not implement its own wrappers or functions, will not use any templating languages that would take things further from traditional PHP or CSS, will contain nothing that people will not use or need. Air-light will be free of weird "app-like" folder structures or odd syntaxes that nobody else uses. We love WordPress as it was and as it is.

Air was renamed to air-light in version 3.7.8 (March 20th, 2018), because *air* was already taken in the official WordPress theme directory.

### Official, approved, accessibility-ready!

Air-light v. 4.2.2 was approved to [official WordPress theme directory](https://wordpress.org/themes/air-light/) on June 4, 2018. But please note, all changes you do to the theme without generating your own or changing textdomain will be overridden in theme updates - so if you use this theme as a starting point, please follow instructions and/or replace the textdomain with your own.

## Table of contents

1. [Usage](#usage)
2. [Please note before using](#please-note-before-using)
3. [License](#license)
4. [Features](#features)
    1. [Layout base & grid](#layout-base--grid)
    2. [Typography](#typography)
    3. [Development](#development)
    4. [Navigation](#navigation)
    5. [WordPress & functions](#wordpress--functions)
    6. [Custom Post Types](#custom-post-types)
    7. [Custom Taxonomies](#custom-taxonomies)
    8. [Namespaced PHP](#namespaced-php)
    9. [Accessibility](#accessibility)
    10. [Lazy load](#lazy-load)
    11. [Disabled features](#disabled-features)
5. [Extra building blocks](#extra-building-blocks)
    1. [Sticky navigation](#sticky-navigation)
    2. [WooCommerce support](#woocommerce-support)
6. [Requirements](#requirements)
7. [Recommendations for development](#recommendations-for-development)
8. [How to build a new theme](#how-to-build-a-new-theme)
9. [Contributing](#contributing)
    1. [Air development](#air-development)
    2. [Debuggers](#debuggers)
        1. [For Gulp](#for-gulp)
        2. [For your editor](#for-your-editor)
    3. [Releasing a new version (staff only)](#releasing-a-new-version-staff-only)
10. [Notes](#notes)

### Please note before using

Air is a **development theme**, so it has updates very often. By using this starter theme, you agree that anything can change to a different direction without a warning when you look at this dev-git the next time. Please note this theme has no updates inside WordPress by design. Use this theme to hack it to pieces and create your new awesome theme based on Air! Please also see [Debuggers](#debuggers)!

Air is not meant to be "a theme for everyone", which means it doesn't have all the parts that are generally included in multi-purpose themes for non-technical people (please see [Disabled features](#disabled-features)).

If you want to use this theme as starter for your new theme, please note the theme won't necessarily be that much fun or won't look good by default and needs work from you. We recommend using [Sage](https://roots.io/sage/) if you need something more extended.

### License

Air is licensed with [The MIT License (MIT)](http://choosealicense.com/licenses/mit/) which means you can freely use this theme commercially or privately, modify it, or distribute it, but you are forbidden to hold Dude liable for anything, or claim that what you do with this is made by us.

## Theme structure

We try to follow traditional WordPress [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy) as much as possible. This way we will provide a low threshold for junior developers and go hand in hand with official [WordPress Theme Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/).

Please see [Visual Overview](https://developer.wordpress.org/themes/basics/template-hierarchy/#visual-overview) if you are interested in how the WordPress theme structure works.

### Features

Some features, WooCommerce support and personal preferences of Dude are moved to [Air helper](https://github.com/digitoimistodude/air-helper) plugin.

#### Layout base & grid

* Gutenberg-ready
* Flexbox-ready
* CSS Grid-ready
* SVG-ready
* [SASS](http://sass-lang.com/)-support (SCSS-syntax)
* CSS reset from [sanitize.css](https://github.com/csstools/sanitize.css)
* Section blocks and containers
* Basic and minimal CSS framework for forms, commenting and typography

#### Typography

* Responsive typography with viewport units with fallbacks, see more in [sass/layout/\_typography.scss](https://github.com/digitoimistodude/air/blob/master/sass/layout/_typography.scss) and [sass/base/\_helpers.scss](https://github.com/digitoimistodude/air/blob/master/sass/base/_helpers.scss#L91), default syntax is `@include responsive-font($font-size-min, $font-size-max);` (formerly [Megatype](https://github.com/StudioThick/megatype), still recommended with blogs or text-only based sites, but **not** included by default after 1.5.0)
* Web fonts file are preferred, helper included: [Sass Boilerplate's fontFace-mixin](https://github.com/magnetikonline/sassboilerplate/blob/master/fontface.scss). Put files in `fonts/` directory, you'll need .odt, .ttf, .woff, .woff2. Then just `@include fontFace('Proxima Nova', '../../fonts/proximanova-regular-webfont', 400);` in \_typography.scss.

#### Development

* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing (included in [devpackages](https://github.com/digitoimistodude/devpackages))
* [gulp](http://gulpjs.com/) build script that compiles both Less and Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files (see Dude's [devpackages](https://github.com/digitoimistodude/devpackages))
* [npm](https://www.npmjs.com) for front-end package management

#### Navigation

* Dependency-free, all in Vanilla JS
* Custom navigation walker built accessibility in mind
* Fully accessible
* Full keyboard navigation support
* Arrow navigation support
* WCAG 2.0 AA compliant: Dropdowns close when pressing Esc while hovering
* Supports multi-level drop down submenus
* Supports animations
* Hover-intent support
* Focus trap for mobile navigation
* Accessible burger menu
* Easy to customize

#### WordPress & functions

* Available for translation, full Polylang Pro support
* Support for Post Thumbnails on posts and pages
* Gutenberg support
* HTML5 core markup for WordPress elements
* **Air specific:** Hero template, section *blocks*

#### Custom Post Types

Air-light can register your CPT:s automatically.

1. Add your custom post type to theme settings under post\_types, located in `functions.php` like this:

```
'post_types' => [
  'Your_Post_Type'
]
```

2. Add a file `inc/post-types/your-post-type.php`
3. Extend `Post_Type` class with `Your_Post_Type` and define your post type in a public function called `register()`. See the example: `inc/post-types/your-post-type.php`.

#### Custom Taxonomies

Air-light can register your Taxonomies automatically.

1. Add your taxonomy to theme settings under taxonomies, located in `functions.php` like this:

```
'taxonomies' => [
  'Your_Taxonomy' => [ 'post', 'page', 'your-post-type' ]
]
```

2. Add a file `inc/taxonomies/your-taxonomy.php`
3. Extend `Taxonomy` class with `Your_Taxonomy` and define your taxonomy in a public function called `register()`. See the example: `inc/taxonomies/your-taxonomy.php`.

### Namespaced PHP

Air-light uses namespaced PHP since 5.0.0. This means that we no longer need to prefix functions and hooks, because `namespace Air_Light;` takes care of that.

When old function format was:

``` php
// Pre_get_posts
add_action( 'pre_get_posts', 'dude_pre_get_posts' );
function dude_pre_get_posts( $query ) {
  // Do something
}
```

New format goes like this:

``` php
// Pre_get_posts
add_action( 'pre_get_posts', __NAMESPACE__ . '\pre_get_posts' );
function pre_get_posts( $query ) {
  // Do something
}
```

#### Accessibility

Creating accessible websites is really important and our goal is to make air as accessible-ready as possible. Theme fully supports navigating with keyboard and screen-readers. Other accessible features:

* [Navigation patterns](#navigation)
* Skip to content link
* Smart focus for keyboard users, [what-input](https://github.com/ten1seven/what-input) baked in
* Valid HTML
* Accessible SVG icons
* Screen reader class
* External link indicators
* Underlined links
* Content-aware back to top link
* WCAG 2.0 AAA Accessible-ready Gravity Forms styles (needs [WCAG 2.0 form fields for Gravity Forms](https://wordpress.org/plugins/gravity-forms-wcag-20-form-fields/), included in [dudestack](https://github.com/digitoimistodude/dudestack))

#### Lazy load

From 4.7.1 air-light has a lazy loading image features for background images and imgs. If you don't use this feature, remove it from [scripts](https://github.com/digitoimistodude/blob/d517688bb400ac68100dcbdcd4bc7dbce7739099/js/src/scripts.js#L10). This feature depends on [air-helper](https://github.com/digitoimistodude/air-helper), check out [the documentation in air-helper](https://github.com/digitoimistodude/air-helper#image-lazyloading-1) for further instructions.

#### Disabled features

* Widgets
* Post formats
* Jetpack support
* (Threaded) comments
* Underscores Template tags
* Sidebar

### Javascript

#### Structure

All .js files in `/js/src/*` is built to production bundles in `/js/prod/` folder and development bundles in `/js/dev/` folder with the same name and loaded corresponding to the WP_ENV environment variable. The production scripts can be loaded on development by using `?load_production_builds` URL parameter. The main scripts file loaded in front end is `/js/src/front-end.js`.

If you want to add a piece of custom JS, create a file under `/js/src/modules/` and import or require it in `/js/src/front-end.js`. If you need a admin-specific JS, add a `/js/src/admin.js` and then enqueue `/js/dist/admin.js` with `enqueue_admin_scripts`

#### Legacy support

Our build uses babel to translate scripts to ES2015 compatible JS, so you can use modern JS syntax without thinking about backwards compatibility. There is a `/js/src/legacy.js` file, which contains the needed polyfills for browsers not supporting the ES2015 syntax and is automatically loaded on the header when such browser is detected.

#### Linter

We use [Airbnb](https://github.com/airbnb/javascript) es-lint presets spiced up with our own flavors.

### Extra building blocks

#### Sticky navigation

Air has a sticky navigation baked in.

##### How to enable

You can enable the navigation by

1. Adding sticky-nav.js to your gulpfile (already included with [Devpackages](https://github.com/digitoimistodude/devpackages) and bin/newtheme.sh start script)
2. Uncommeting sticky-nav import in global.scss
3. Restart gulp and save scripts.js once to compile working combined javascript file

#### WooCommerce support

Air had by default a basic WooCommerce support [from version 1.9.2](https://github.com/digitoimistodude/commit/55c539bb9cd2e35fdbfdf4f39a136c542b42b884), and for a while it was been separated to its own repository, [air-woocommerce](https://github.com/digitoimistodude/air-woocommerce) since v2.5.6.

##### How to enable

Starting from v2.6.0 WooCommerce support comes with [Air helper](https://github.com/digitoimistodude/air-helper) plugin and Air contains optional very basic WC styles. Air helper will add it's WC functionality when theme support for WooCommerce is added. To enable:

1. Get [Air helper](https://github.com/digitoimistodude/air-helper)
2. Activate the plugin

### Requirements

* PHP >= 7.4
* Requires at least: WordPress 4.7.1
* Tested up to WordPress 6.1.1

### Recommendations for development

* macOS
* [Devpackages](https://github.com/digitoimistodude/devpackages) \- Npm and Gulp \+ plugins
* [Dudestack](https://github.com/digitoimistodude/dudestack) \- A toolkit for creating a new professional WordPress project with deployments\. Heavily based on Bedrock by Roots\.

### How to build a new theme

Please refer to Wiki section [Getting started in theming with Air-light](https://github.com/digitoimistodude/air-light/wiki#2-getting-started-in-theming-with-air-light).

### Usage

See [Documentation](https://github.com/digitoimistodude/air-light/wiki).

### Contributing

If you have ideas about the theme or spot an issue, please let us know. Before contributing ideas or reporting an issue about "missing" features or things regarding to the nature of that matter, please read [Please note](#please-note-before-using) section. Thank you very much.

If you want to contribute to the development, please follow these instructions:

1. Create a fork of this repository (or new branch if you have editor/maintainer permissions)
2. Make your changes
3. Create a pull request

### Air development

#### Installation

If you want to improve air, you have two options.

##### 1\. Use dudestack

Air is originally built on [dudestack](https://github.com/digitoimistodude/dudestack). Install our development environment with these steps (unix only, sorry Windows!):

1. `mkdir -p /var/www && cd /var/www/ && git clone https://github.com/digitoimistodude/dudestack`
2. Go to bin folder `cd /var/www/dudestack/bin` and run `bash wsl.sh` or `bash macos.sh` depending on your platform. Follow instructions.
3. Run `createproject`, name project after *airdev* when asked
4. Wait for the project to be created (get a coffee, first time can take couple of minutes)
5. Create a fork of air-light (press fork button on GitHub) (or if you are Dude staff, just create new branch for changes)
6. Go to the themes folder of your WordPress instance via Terminal (`cd /var/www/airdev/content/themes`)
7. Clone your fork with `git clone git@github.com:yourusername/air-light.git` (replace `yourusername` with your actual username)
8. Cd to your new cloned repository `cd /var/www/airdev/content/themes/air-light`
9. Add `devDependencies` to package.json from [here](https://github.com/digitoimistodude/devpackages/blob/master/package.json)
10. Install the dependencies by running `npm install` inside the theme folder (if you don't have npm installed, see [here](https://www.npmjs.com/get-npm) or just use [homebrew](https://brew.sh))
11. Wait npm to get through files (get another cup of coffee)
12. Activate theme - if you are using the lightweight [macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup): `cd /var/www/airdev && vendor/wp-cli/wp-cli/bin/wp theme activate air-light`
13. Open whole project to your preferred coding editor, for example when using [Visual Studio Code](https://github.com/ronilaukkarinen/vscode-settings) that would be `code /var/www/airdev/content/themes/air-light` or via GUI (Open folder).
14. Go to back to air-light dir with `cd /var/www/airdev/content/themes/air-light` and then run `gulp` and start developing! Please note, contributing to this theme is only possible when gulp is run from theme directory, NOT on project root.

You may want to add `alias wp='./vendor/wp-cli/wp-cli/bin/wp'` for [macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup) to be able to run WP-CLI with just `wp`.

##### 2\. Use your own stack

To install air-light to your own development environment, just clone your fork to your theme directory, activate the theme, and make changes. If you make changes to front-end (JS/SCSS), you'll need to use our gulpfile and npm dependencies, so make sure you go through steps 9-10 and 12 above.

When you make changes, commit them with clear describing commit messages and them make a pull request. We are happy to accept improvements!

##### Content and unit tests

Next you just need to add content and menu via [airdev.test/admin](http://airdev.test/), or you can use the ready-made content:

1. `cd ~/Projects/airdev`
2. `wp plugin install wordpress-importer --activate`
3. `wget https://wpcom-themes.svn.automattic.com/demo/theme-unit-test-data.xml`
4. `wp import theme-unit-test-data.xml --authors=create`

### Debuggers

Air-light comes with [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) for PHP files, [stylelint](https://github.com/stylelint/stylelint) for SCSS/CSS files and [eslint](https://github.com/eslint/eslint) for JS files built inside gulpfile.js. **Please note, you need to configure global versions of these separately!**

It's also recommended to use [Query Monitor](https://wordpress.org/plugins/query-monitor/) plugin, as some debugging messages goes straight to it's logger.

#### For gulp

PHP_CodeSniffer needs to be installed under `/usr/local/bin/phpcs` with [WordPress-Coding-Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) for php-debuggers to work properly in gulp. If you don't want to use phpcs with gulp, you can disable it by commenting out or deleting line `gulp.watch(phpSrc, ['phpcs']);`.

The golden rule here is to make sure the commands `stylelint`, `eslint` and `phpcs` work from command line.

#### How to install for Gulp

1. `mkdir -p ~/Projects && cd ~/Projects && git clone -b master --depth 1 https://github.com/squizlabs/PHP_CodeSniffer.git phpcs`
2. `git clone -b master https://github.com/PHPCompatibility/PHPCompatibility`
3. `git clone -b master --depth 1 https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git wpcs`
4. **Please note: Replace _yourusername_ name with your actual user name!** `sudo ln -s /Users/rolle/Projects/phpcs/bin/phpcs /usr/local/bin/phpcs`
5. `sudo chmod +x /usr/local/bin/phpcs`
6. **Please note: Replace _yourusername_ name with your actual user name!** `phpcs --config-set installed_paths "/Users/rolle/Projects/wpcs","/Users/rolle/Projects/PHPCompatibility"`
7. Test your standards with `phpcs -i`, it should display something like this:

```bash $ phpcs -i
The installed coding standards are PEAR, Zend, PSR2, MySource, Squiz, PSR1, PSR12, PHPCompatibility, WordPress, WordPress-Extra, WordPress-Docs and WordPress-Core
```

8. `npm i stylelint eslint -g`
9. Check that other linters work: `stylelint -v`, `eslint -v`

#### For your editor

It's also best to have all `stylelint`, `eslint`, `phpcs` living inside your editor. We think [Visual Studio Code](https://github.com/ronilaukkarinen/vscode-settings) is best for this, check out the [plugins inside vscode-settings repository](https://github.com/ronilaukkarinen/vscode-settings) to make sure everything is installed.

### Releasing a new version (staff only)

This release cycle will release a new version to:

- [GitHub](https://github.com/digitoimistodude/air-light)
- [WordPress.org](https://wordpress.org/themes/air-light/)
- [Demo site](https://dudetest.xyz/air/)

Whenever you have updates that are worthwhile, commit them with clear commit messages and then do versioning. Every meaningful commit or bunch of commits that form a feature together make the version go up semantically 0.0.1.

Use bash alias (replace YOURUSERNAME with your own):

``` bash
alias release_new_air_version='git push && git push --tags && rsync -av -e ssh --exclude={"/node_modules/*","/bin/*","/sass/*"} /var/www/airdev/content/themes/air-light/* YOURUSERNAME@YOURSERVER:/var/www/airwptheme.com/public_html/demo/content/themes/air-light/ && /var/www/airdev/content/themes/air-light/bin && sh air-move-out.sh && sh air-pack.sh'
```

The release cycle:

1. Commit your changes or merge a pull request
2. Search and replace version in style.css, functions.php, package.json, readme.txt, CHANGELOG.md. Remember update Tested up WordPress version as well.
3. Add a tag with `git tag -a x.x.x` commands, add the same description than in CHANGELOG.md
4. Run `release_new_air_version` (this will move dotfiles etc. out, take care of packing and will give the URL for uploading to WordPress.org)
5. Follow script instructions (do a theme check and upload the theme)
6. Run `sh air-move-in.sh`. This will move dev-version back and restore the git functionality.

That's it, you released a new version!

### Notes

Gzip file sizes tested with `wc -c css/prod/global.css` and `gzip -c css/prod/global.css | wc -c` commands.

**Theme developers please note:** if you use phpcs in [SublimeLinter as custom standard](https://github.com/ronilaukkarinen/sublime-settings/blob/master/Library/Application%20Support/Sublime%20Text%203/Packages/User/SublimeLinter.sublime-settings#L47) on [dudestack](https://github.com/digitoimistodude/dudestack), you will need extra content/themes/air-light subfolders inside the theme directory for it to work on both global projects and with air-light.

### Known issues

See tool related issues in [devpackages](https://github.com/digitoimistodude/devpackages#known-issues) and [air-light issue tracker](https://github.com/digitoimistodude/issues).
