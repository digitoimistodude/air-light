## Air-light - A minimalist WordPress starter theme

[![Build Status](https://img.shields.io/travis/digitoimistodude/air.svg?style=flat-square)](https://travis-ci.org/digitoimistodude/air) [![GitHub release](https://img.shields.io/github/tag/digitoimistodude/air.svg?style=flat-square)](https://github.com/digitoimistodude/air/releases) [![GitHub contributors](https://img.shields.io/github/contributors/digitoimistodude/air.svg?style=flat-square)]()

Air-light (or simply *Air*) is designed to be a minimal starting point for a WordPress project at [Digitoimisto Dude Oy](https://www.dude.fi), a Finnish boutique digital agency in the center of Jyväskylä. Theme is based on [_s](https://github.com/automattic/_s).

## [Demo](https://dudetest.xyz/air)

- **CSS gzipped:** 7 KB *(47.1 KB original)*
- **JS gzipped:** 3.5 KB *(10.8 KB original)*
- **Front page HTML**: 7.4 KB *(29.4 KB original)*

![](https://www.dude.fi/air-3.0.0-screenshot.png "Screenshot")

This theme is built to be very straightforward, backwards compatible, front end developer friendly and modular by its structure. Following [Underscores](https://github.com/automattic/_s) and [WordPress Theme Coding Standards](https://codex.wordpress.org/Theme_Development#Theme_Development_Standards) best practices and most of the changes in _s are implemented as soon as they are committed.

## Table of contents

1. [Please note before using](#please-note-before-using)
2. [License](#license)
3. [Features](#features)
    1. [Layout base & grid](#layout-base--grid)
    2. [Typography](#typography)
    3. [Development](#development)
    4. [Navigation](#navigation)
    5. [WordPress & functions](#wordpress--functions)
    6. [Accessibility](#accessibility)
    7. [Disabled features](#disabled-features)
4. [Extra building blocks](#extra-building-blocks)
    1. [Sticky navigation](#sticky-navigation)
    2. [Slick slider](#slick-slider)
    3. [WooCommerce support](#woocommerce-support)
5. [Requirements](#requirements)    
6. [Recommendations for development](#recommendations-for-development)
7. [Installation](#installation)
8. [Contributing](#contributing)
    1. [Air development](#air-development)
9. [Notes](#notes)

### Please note before using

Air is a **development theme**, so it has updates very often. By using this starter theme, you agree that the anything can change to a different direction without a warning.

Air is not meant to be "a theme for everyone", so it doesn't have many parts that are generally included (see [Disabled features](#disabled-features)).

If you for some reason happen to use this theme as base, please note the theme won't necessarily be that much fun or won't necessarily look any good. I recommend using [Sage](https://roots.io/sage/) if you need something more complete.

### License

Air is licensed with [The MIT License (MIT)](http://choosealicense.com/licenses/mit/) which means you can freely use this theme commercially or privately, modify it, or distribute it, but you are forbidden to hold Dude liable for anything, or claim that what you do with this is made by us.

### Features

Some features, WooCommerce support and personal preferences of Dude are moved to [Air helper](https://github.com/digitoimistodude/air-helper) plugin.

#### Layout base & grid

* All good things from the latest [Underscores](https://github.com/Automattic/_s)
* [SASS](http://sass-lang.com/)-support (SCSS-syntax)
* CSS reset with a combination with Nicolas Gallagher's [normalize*css](https://github.com/necolas/normalize.css/)
* [Jeet](https://github.com/mojotech/jeet) Grid for SASS `@include column(1/100)`
* Container div inside site-main
* Possible to choose between fluid (flexible 100%) and snappy grid style (snapping to breakpoint, more space around)
* Inline SVG-ready

#### Typography

* Responsive typography with viewport units with fallbacks, see more in [sass/layout/_typography.scss](https://github.com/digitoimistodude/air/blob/master/sass/layout/_typography.scss) and [sass/base/_helpers.scss](https://github.com/digitoimistodude/air/blob/master/sass/base/_helpers.scss#L91), default syntax is `@include responsive-font(3vw, $font-min-size, $font-max-size, $font-max-size);` (formerly [Megatype](https://github.com/StudioThick/megatype), still recommended with blogs or text-only based sites, but **not** included by default after 1.5.0)
* Web fonts file are preferred, helper included: [Sass Boilerplate's fontFace-mixin](https://github.com/magnetikonline/sassboilerplate/blob/master/fontface.scss). Put files in `fonts/` directory, you'll need .odt, .ttf, .woff, .woff2. Then just `@include fontFace('Proxima Nova', '../fonts/proximanova-regular-webfont', 400);` in _typography.scss.

#### Development

* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing (included in [devpackages](https://github.com/digitoimistodude/devpackages))
* [gulp](http://gulpjs.com/) build script that compiles both Less and Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files (see Dude's [devpackages](https://github.com/digitoimistodude/devpackages))
* [npm](https://www.npmjs.com) for front-end package management

#### Navigation

* Custom navigation walker
* Support for multi-level drop down submenus
* Improved version of the [accessible menu for WordPress themes](https://github.com/theme-smith/accessible-nav-wp), fully accessible and responsive multi-level navigation
* Support for animations
* Pure CSS hoverintent

#### WordPress & functions

* Available for translation
* Support for Post Thumbnails on posts and pages
* HTML5 core markup for WordPress elements
* **Air specific:** Templates for hero *blocks*

#### Accessibility

Creating accessible websites is really important and our goal is to make air as accessible-ready as possible. Theme fully supports navigating with keyboard and screen-readers. Other accessible features:

* [Navigation patterns](#navigation)
* Skip link
* Smart focus for keyboard users, [what-input](https://github.com/ten1seven/what-input) baked in
* Valid HTML
* Accessible SVG icons
* Screen reader class

#### Disabled features

* Widgets
* Post formats
* Jetpack support
* Customizer
* RTL support
* Threaded comments
* Template tags (direct edit preferred)
* No sidebar by default

### Extra building blocks

#### Sticky navigation

Air has sticky navigation baked in. 

##### How to enable

You can enable the navigation by 

1. Adding sticky-nav.js to your gulpfile (already included with [Devpackages](https://github.com/digitoimistodude/devpackages) and newtheme.sh start script)
2. Uncommeting sticky-nav import in global.scss
3. Restart gulp and save scripts.js once to compile working combined javascript file

#### Slick slider

Air includes sassified version, clean SCSS file for slick carousel. 

##### How to enable

To enable Slick carousel support, 

1. Run `npm install slick-carousel --save` in theme directory
2. Run `npm update` in theme directory
3. Uncomment `themeDir + '/node_modules/slick-carousel/slick/slick.js'` in gulpfile.js
4. Start gulp again, add slick init to document ready in scripts.js, like this, tweak to your needs (already uncommented):

```` javascript
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true
});
````

5. Construct your slider like this:

```` html
<div class="block block-slider">
  <div class="container slider">
    <div class="item">
      <p><b>Slider item 1</b> Some other content. Lorem ipsum in proident deserunt nostrud. Lorem ipsum in proident deserunt nostrud.</p>
    </div><!-- .item -->

    <div class="item">
      <p><b>Slider item 2</b> Something different to see the change. Lorem ipsum in proident deserunt nostrud culpa veniam sed esse aliqua ea velit aute.</p>
    </div><!-- .item -->
</div><!-- .block -->
````

Please note: If you want to change the background to lighter, you will need to edit the svg arrows accordingly.

#### WooCommerce support

Air had by default a basic WooCommerce support [from version 1.9.2](https://github.com/digitoimistodude/air-light/commit/55c539bb9cd2e35fdbfdf4f39a136c542b42b884), and for a while it was been separated to its own repository, [air-woocommerce](https://github.com/digitoimistodude/air-woocommerce) since v2.5.6.

##### How to enable

Starting from v2.6.0 WooCommerce support comes with [Air helper](https://github.com/digitoimistodude/air-helper) plugin and Air contains optional very basic WC styles. Air helper will add it's WC functionality when theme support for WooCommerce is added. To enable:

1. Get [Air helper](https://github.com/digitoimistodude/air-helper)
2. Activate the plugin
3. Uncomment woocommerce import in global.scss
4. Run gulp again and save files

### Requirements

* Requires at least: WordPress 4.7.0
* Tested up to WordPress 4.8

### Recommendations for development

* Mac OS X
* [Devpackages](https://github.com/digitoimistodude/devpackages) - Npm, Gulp and Bower
* [Dudestack](https://github.com/digitoimistodude/dudestack) - A toolkit for creating a new professional WordPress project with deployments. Heavily based on Bedrock by Roots.

### Installation

Traditional way:

1. Git clone or download zip
2. Open Terminal and run `npm install`
3. Open project to Atom (or your preferred editor) and run search and replace air-light => yourprojectname
4. Run `gulp watch` and start coding

If you are using [Dudestack](https://github.com/digitoimistodude/dudestack) and [Devpackages](https://github.com/digitoimistodude/devpackages), your project folder is located at `~/Projects`, your vagrant box is up and running at `10.1.2.4`, just

1. Open Terminal and cd to air directory
2. Run `sh newtheme.sh` - the script takes care of the rest (updates textdomain with your project name, checks updates for air and npm packages, runs npm install, fetches devpackages, sets up gulp, cleans up the leftover files and activates the theme via wp-cli)

### Contributing

If you have ideas about the theme or spot an issue, please let us know. Before contributing ideas or reporting an issue about "missing" features or things regarding to the nature of that matter, please read [Please note](#please-note-before-using) section. Thank you very much.

### Air development

#### Installation

If you want to improve air, you have two options. 

##### 1. Use dudestack

Air is originally built on [dudestack](https://github.com/digitoimistodude/dudestack). Install our development environment with these steps (unix only, sorry Windows!):

1. `mkdir ~/Projects && git clone https://github.com/digitoimistodude/dudestack`
2. `cd ~/Projects/dudestack && sh setup.sh`
3. Run `createproject`, name project after *airdev* when asked
4. Wait for the project to be created (get a coffee, first time can take couple of minutes)
5. Create a fork of air-light
6. `cd ~/Projects/airdev/content/themes`
7. Fetch your fork with `git clone git@github.com:yourusername/air-light.git` (remember to replace yourusername with your actual username)
8. `cd ~/Projects/airdev/content/themes/air-light`
9. Get air dependencides by running `npm install` (if you don't have npm installed, see [here](https://www.npmjs.com/get-npm) or just use [homebrew](https://brew.sh))
10. Wait npm to get through files (get a coffee)
11. Activate theme - if you are using os x lemp: `cd ~/Projects/airdev && vendor/wp-cli/wp-cli/bin/wp theme activate air-light` if [marlin-vagrant](https://github.com/digitoimistodude/marlin-vagrant): `ssh vagrant@10.1.2.4 "cd /var/www/$PROJECTNAME/;vendor/wp-cli/wp-cli/bin/wp theme activate air"`
12. Open whole project to sublime, for example with `subl -n ~/Projects/airdev/content/themes/air-light` if you have Sublime Text.
13. Go to back to air-light dir with `cd ~/Projects/airdev/content/themes/air-light` and then run `gulp watch` and start developing!

You may want to add `alias wp='./vendor/wp-cli/wp-cli/bin/wp'` for OS X lemp stack or `alias wp='ssh vagrant@10.1.2.4 "cd /var/www/"$(basename "$PWD")"; /var/www/"$(basename "$PWD")"/vendor/wp-cli/wp-cli/bin/wp"'` for marlin-vagrant to get to use wp-cli with simply `wp`.

##### 2. Use your own stack

To install air-light to your own development environment, just clone your fork to your theme directory, activate the theme, and make changes. If you make changes to front-end (JS/SCSS), you'll need to use our gulpfile and npm dependencies, so make sure you go through steps 9-10 and 12 above.

When you make changes, commit them with clear describing commit messages and them make a pull request. We are happy to accept improvements!

##### Content and unit tests

Next you just need to add content and menu via [airdev.test/admin](http://airdev.test/), or you can use the ready-made content:

1. `cd ~/Projects/airdev`
2. `wp plugin install wordpress-importer --activate`
3. `wget https://wpcom-themes.svn.automattic.com/demo/theme-unit-test-data.xml`
4. `wp import theme-unit-test-data.xml --authors=create`

### Notes

Gzip file sizes tested with `wc -c css/global.css` and `gzip -c css/global.css | wc -c` commands.
