## Air - A minimalist WordPress starter theme

Air is designed to be a minimal starting point for a WordPress project at [Digitoimisto Dude Oy](https://www.dude.fi), a Finnish boutique digital agency in the center of Jyväskylä. Theme is based on [_s]("https://github.com/automattic/_s").

- **Current CSS weight:** 68 KB
- **Current JS weight:** 12 KB

![](https://dl.dropboxusercontent.com/u/18447700/air-screenshot-2.png "Screenshot")

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
5. [Recommendations for development](#recommendations-for-development)
6. [Installation](#installation)
7. [Contributing](#contributing)
8. [Todo](#todo)

### Please note before using

Air is a **development theme**, so it has updates very often. By using this starter theme, you agree that the anything can change to a different direction without a warning.

Air is not meant to be "a theme for everyone", so it doesn't have many parts that are generally included (see [Disabled features](#disabled-features)).

If you for some reason happen to use this theme as base, please note the theme won't necessarily be that much fun or won't necessarily look any good. I recommend using [Sage](https://roots.io/sage/) if you need something more complete.

### License

Dudestarter is licensed with [The MIT License (MIT)](http://choosealicense.com/licenses/mit/) which means you can freely use this theme commercially or privately, modify it, or distribute it, but you are forbidden to hold Dude liable for anything, or claim that what you do with this is made by us.

### Features

#### Layout base & grid

* All good things from the latest [Underscores](https://github.com/Automattic/_s)
* [SASS](http://sass-lang.com/)-support (SCSS-syntax)
* CSS reset with a combination with Nicolas Gallagher's [normalize*css](https://github.com/necolas/normalize.css/)
* [Jeet](https://github.com/mojotech/jeet) Grid for SASS `@include col(1/100)`
* Container div inside site-main

#### Typography

* [Megatype](https://github.com/StudioThick/megatype) - A scalable and responsive typographic baseline (modular scale)
* Google Webfonts with Penman's [Sass-Web-Fonts](https://github.com/penman/Sass-Web-Fonts)
* Web fonts helper: [Sass Boilerplate's fontFace-mixin](https://github.com/magnetikonline/sassboilerplate/blob/master/fontface.scss)
* [Font-Awesome](https://github.com/FortAwesome/Font-Awesome) Glyph icons

#### Development

* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing (included in [devpackages](https://github.com/digitoimistodude/devpackages))
* [gulp](http://gulpjs.com/) build script that compiles both Less and Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files (see Dude's [devpackages](https://github.com/digitoimistodude/devpackages))
* [npm](https://www.npmjs.com) for front-end package management
* [bower](http://bower.io) - only for those packages that are not in npm. Will be deprecated when everything can be found!

#### Navigation

* Custom navigation walker based on Bootstrap 3
* Sassified version of [viljamis' responsive-nav](https://github.com/viljamis/responsive-nav.js), fully Accessible and responsive multi-level navigation

#### WordPress & functions
* Available for translation
* Automatic feed links
* WordPress managed title tag
* Support for Post Thumbnails on posts and pages
* HTML5 core markup for WordPress elements
* WP updates nag hidden
* All times and local units in Finnish
* Custom uploads folder `media/` instead of default `content/uploads/`

#### Disabled features

* Widgets
* Post formats
* Jetpack support
* Customizer
* RTL support
* Threaded comments
* Template tags (direct edit preferred)
* WordPress admin bar for logged in users
* No sidebar by default

### Recommendations for development

* Mac OS X
* [Devpackages](https://github.com/digitoimistodude/devpackages) - Npm, Gulp and Bower
* [Dudestack](https://github.com/digitoimistodude/dudestack) - A toolkit for creating a new professional WordPress project with deployments. Heavily based on Bedrock by Roots.

### Installation

1. Git clone or download zip
2. Run `npm install`
3. Run `bower install`
4. Run `gulp watch` and start coding

### Contributing

If you have ideas about the theme or spot an issue, please let us know. Before contributing ideas or reporting an issue about "missing" features or things regarding to the nature of that matter, please read [Please note](#please-note-before-using) section. Thank you very much.

### Todo

- [x] Include gulpfile.js in the repo
- [x] Add default navigation
- [x] Basic form styles
- [x] Theme starter bash script
