## Air - A minimalist WordPress starter theme

[![Build Status](https://img.shields.io/travis/digitoimistodude/air.svg?style=flat-square)](https://travis-ci.org/digitoimistodude/air) [![GitHub release](https://img.shields.io/github/release/digitoimistodude/air.svg?style=flat-square)]()

Air is designed to be a minimal starting point for a WordPress project at [Digitoimisto Dude Oy](https://www.dude.fi), a Finnish boutique digital agency in the center of Jyväskylä. Theme is based on [_s]("https://github.com/automattic/_s").

## [Demo](https://dudetest.xyz/air)

- **CSS gzipped:** 7 KB *(47.1 KB original)*
- **JS gzipped:** 3.5 KB *(10.8 KB original)*
- **Front page HTML**: 7.4 KB *(29.4 KB original)*

![](https://dl.dropboxusercontent.com/u/18447700/air-2.2.2.png "Screenshot")

This theme is built to be very straightforward, front end developer friendly and only partly modular by its structure.

## Table of contents

1. [Please note before using](#please-note-before-using)
2. [License](#license)
3. [Features](#features)
    1. [Layout base & grid](#layout-base--grid)
    2. [Typography](#typography)
    3. [Development](#development)
    4. [Navigation](#navigation)
    5. [WordPress & functions](#wordpress--functions)
    6. [Disabled features](#disabled-features)
4. [Extra building blocks](#extra-building-blocks)
    1. [Sticky navigation](#sticky-navigation)
    2. [Slick slider](#slick-slider)
    3. [Polylang language switcher dropdown](#polylang-language-switcher-dropdown)
    4. [WooCommerce support](#woocommerce-support)
5. [Requirements](#requirements)    
6. [Recommendations for development](#recommendations-for-development)
7. [Installation](#installation)
8. [Contributing](#contributing)
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

* Responsive typography with viewport units with fallbacks (formerly [Megatype](https://github.com/StudioThick/megatype), still recommended with blogs or text-only based sites, but not included by default after 1.5.0)
* Google Webfonts with Penman's [Sass-Web-Fonts](https://github.com/penman/Sass-Web-Fonts)
* Web fonts helper: [Sass Boilerplate's fontFace-mixin](https://github.com/magnetikonline/sassboilerplate/blob/master/fontface.scss) (if you have .odt, .ttf, .woff, .woff2 in `fonts` directory, you can add them with `@include fontFace('Proxima Nova', '../fonts/proximanova-regular-webfont', 400);`)

#### Development

* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing (included in [devpackages](https://github.com/digitoimistodude/devpackages))
* [gulp](http://gulpjs.com/) build script that compiles both Less and Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files (see Dude's [devpackages](https://github.com/digitoimistodude/devpackages))
* [npm](https://www.npmjs.com) for front-end package management

#### Navigation

* Custom navigation walker based on Bootstrap 3
* Sassified version of [viljamis' responsive-nav](https://github.com/viljamis/responsive-nav.js), fully Accessible and responsive multi-level navigation

#### WordPress & functions

* Available for translation
* Support for Post Thumbnails on posts and pages
* HTML5 core markup for WordPress elements
* **Air specific:** Templates for hero *slides*

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
<div class="slide slide-slider">
  <div class="container slider">
    <div class="item">
      <p><b>Slider item 1</b> Some other content. Lorem ipsum in proident deserunt nostrud. Lorem ipsum in proident deserunt nostrud.</p>
    </div><!-- .item -->

    <div class="item">
      <p><b>Slider item 2</b> Something different to see the change. Lorem ipsum in proident deserunt nostrud culpa veniam sed esse aliqua ea velit aute.</p>
    </div><!-- .item -->
</div><!-- .slide-slider -->
````

Please note: If you want to change the background to lighter, you will need to edit the svg arrows accordingly.

#### Polylang language switcher dropdown

Polylang's language switcher is quite plain by default, so we have built a dropdown for `pll-parent-menu-item`. Not enabled by default. 

##### How to enable

To use, 

1. Uncomment entries in gulpfile and global.scss
2. Run gulp again
3. Save SCSS and JS to compile them all together

#### WooCommerce support

Air had by default a basic WooCommerce support [from version 1.9.2](https://github.com/digitoimistodude/air/commit/55c539bb9cd2e35fdbfdf4f39a136c542b42b884), and for a while it was been separated to its own repository, [air-woocommerce](https://github.com/digitoimistodude/air-woocommerce) since v2.5.6.

##### How to enable

Starting from v2.6.0 WooCommerce support comes with [Air helper](https://github.com/digitoimistodude/air-helper) plugin and Air contains optional very basic WC styles. Air helper will add it's WC functionality when theme support for WooCommerce is added. To enable:

1. Get [Air helper](https://github.com/digitoimistodude/air-helper)
2. Activate the plugin
3. Uncomment woocommerce import in global.scss
4. Run gulp again and save files

### Requirements

* Requires at least: WordPress 4.7.0
* Tested up to WordPress 4.7.3

### Recommendations for development

* Mac OS X
* [Devpackages](https://github.com/digitoimistodude/devpackages) - Npm, Gulp and Bower
* [Dudestack](https://github.com/digitoimistodude/dudestack) - A toolkit for creating a new professional WordPress project with deployments. Heavily based on Bedrock by Roots.

### Installation

Traditional way:

1. Git clone or download zip
2. Open Terminal and run `npm install`
3. Open project to Atom (or your preferred editor) and run search and replace air => yourprojectname
4. Run `gulp watch` and start coding

If you are using [Dudestack](https://github.com/digitoimistodude/dudestack) and [Devpackages](https://github.com/digitoimistodude/devpackages), your project folder is located at `~/Projects`, your vagrant box is up and running at `10.1.2.4`, just

1. Open Terminal and cd to air directory
2. Run `sh newtheme.sh` - the script takes care of the rest (updates textdomain with your project name, checks updates for air and npm packages, runs npm install, fetches devpackages, sets up gulp, cleans up the leftover files and activates the theme via wp-cli)

### Contributing

If you have ideas about the theme or spot an issue, please let us know. Before contributing ideas or reporting an issue about "missing" features or things regarding to the nature of that matter, please read [Please note](#please-note-before-using) section. Thank you very much.

### Notes

Gzip file sizes tested with `wc -c css/global.css` and `gzip -c css/global.css | wc -c` commands.
