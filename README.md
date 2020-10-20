## Air-light - A minimalist WordPress starter theme

[![Build Status](https://img.shields.io/travis/digitoimistodude/air-light.svg?style=flat-square)](https://travis-ci.org/digitoimistodude/air-light) [![GitHub release](https://img.shields.io/github/tag/digitoimistodude/air-light.svg?style=flat-square)](https://github.com/digitoimistodude/air-light/releases) ![GitHub contributors](https://img.shields.io/github/contributors/digitoimistodude/air-light.svg?style=flat-square)

Air-light (or simply *Air*) is designed to be a ultra minimal starting point for a WordPress project at [Digitoimisto Dude Oy](https://www.dude.fi), a Finnish boutique digital agency in the center of Jyväskylä. Theme is originally based on [\_s](https://github.com/automattic/_s). We welcome all happy contributors with open arms! [See roadmap](https://favro.com/organization/3b45e73eaf083f68fefef368/c1dd2d4a99d6723904d2e763).

## [Demo](https://dudetest.xyz/air)

* **CSS gzipped:** 12 KB *(113 KB original)*
* **JS gzipped:** 3.4 KB *(10.8 KB original)*
* **Front page HTML**: 7.4 KB *(29.4 KB original)*

## Top contributors

This theme is constantly kept up to date by the following persons and a bunch of [awesome contributors](https://github.com/digitoimistodude/air-light/graphs/contributors). Wanna join in development? Let us know!

| [![Roni Laukkarinen](https://avatars3.githubusercontent.com/u/1534150?v=4&s=70)](https://github.com/ronilaukkarinen) | [![Timi Wahalahti](https://avatars1.githubusercontent.com/u/415544?s=70&v=4)](https://github.com/timiwahalahti) | [![Niku Hietanen](https://avatars3.githubusercontent.com/u/16206361?v=4&s=70)](https://github.com/Niq1982) | [![Michael Bourne](https://avatars3.githubusercontent.com/u/22846422?v=4&s=70)](https://github.com/ronilaukkarinen) |
| --- | --- | --- | --- |
| [Roni Laukkarinen](https://github.com/ronilaukkarinen) | [Timi Wahalahti](https://github.com/timiwahalahti) | [Niku Hietanen](https://github.com/Niq1982) | [Michael Bourne](https://github.com/michaelbourne) | |

![](https://i.imgur.com/s7qAN6U.png)

### Mission & vision

Air-light is built to be very straightforward, backwards compatible, front-end developer friendly and modular by its structure. Following [Underscores](https://github.com/automattic/_s) and [WordPress Theme Coding Standards](https://codex.wordpress.org/Theme_Development#Theme_Development_Standards) best practices and most of the changes in \_s are implemented as soon as they are committed.

**Our mission and goal** is **minimalism** and **simplicity**. **Our vision** is to build a theme that will not implement its own wrappers or functions, will not use any templating languages that would take things further from traditional PHP or CSS, will contain nothing that people will not use or need. Air-light will be free of weird "app-like" folder structures or odd syntaxes that nobody else uses. We love WordPress as it was and as it is.

Air was renamed to air-light in version 3.7.8 (March 20th, 2018), because *air* was already taken in the official WordPress theme directory.

### Official, approved, accessibility-ready!

Air-light v. 4.2.2 was approved to [official WordPress theme directory](https://wordpress.org/themes/) on June 4, 2018. But please note, all changes you do to the theme without generating your own or changing textdomain will be overridden in theme updates - so if you use this theme as a starting point, please follow instructions and/or replace the textdomain with your own.

## Table of contents

1. [Please note before using](#please-note-before-using)
2. [License](#license)
3. [Features](#features)
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
4. [Extra building blocks](#extra-building-blocks)
    1. [Sticky navigation](#sticky-navigation)
    2. [Slick slider](#slick-slider)
    3. [WooCommerce support](#woocommerce-support)
5. [Requirements](#requirements)
6. [Recommendations for development](#recommendations-for-development)
7. [Our way of building new themes](#our-way-of-building-new-themes)
8. [Installation](#installation)
9. [Contributing](#contributing)
    1. [Air development](#air-development)
    2. [Debuggers](#debuggers)
        1. [For Gulp](#for-gulp)
        2. [For your editor](#for-your-editor)
    3. [Releasing a new version on git and tagging principles (staff only)](#releasing-a-new-version-on-git-and-tagging-principles-staff-only)
    4. [Releasing a new version on the demo site and WordPress.org (staff only)](#releasing-a-new-version-on-the-demo-site-and-wordpressorg-staff-only)
10. [Notes](#notes)

### Please note before using

Air is a **development theme**, so it has updates very often. By using this starter theme, you agree that the anything can change to a different direction without a warning when you look at this dev-git the next time. Please note this theme has no updates inside WordPress by design. Use this theme to hack it to pieces and create your new awesome theme based on Air! Please also see [Debuggers](#debuggers)!

Air is not meant to be "a theme for everyone", which means it doesn't have all the parts that are generally included in multi-purpose themes for non-technical people (please see [Disabled features](#disabled-features)).

If you want to use this theme as starter for your new theme, please note the theme won't necessarily be that much fun or won't look good by default and neads work from you. We recommend using [Sage](https://roots.io/sage/) if you need something more extended.

### License

Air is licensed with [The MIT License (MIT)](http://choosealicense.com/licenses/mit/) which means you can freely use this theme commercially or privately, modify it, or distribute it, but you are forbidden to hold Dude liable for anything, or claim that what you do with this is made by us.

## Theme structure

We try to achieve as classic WordPress theme structure as possible to make it possible for wider audience to use and understand and to go with official WordPress Theme Coding Standards.

``` shell
themes/your-theme-name/             # → Root of your air-light based theme
├── 404.php                         # → Default "not found" page
├── archive.php                     # → Default archive template
├── bin/                            # → Scripts
│   ├── air-move-in.sh              # → A script for moving all dev files back to the theme
│   ├── air-move-out.sh             # → A script for moving all dev files out of the theme for testing with Theme Check plugin
│   ├── air-pack.sh                 # → A script that makes a package for WordPress Theme Directory
│   ├── newtheme.sh                 # → The start script for creating YOUR own theme out of air-light
├── comments.php                    # → Default comments template (can be deleted if not needed)
├── css/                            # → CSS files for production (never edit)
│   ├── global.css                  # → Unminified, stylefmtd CSS file
│   └── global.min.css              # → Minified theme CSS, this file is called in scripts-styles.php
│   └── gutenberg.min.css           # → Minified Gutenberg CSS for editor, this file is called in gutenberg.php
├── fonts/                          # → Your webfont files
├── footer.php                      # → Site footer
├── front-page.php                  # → Demo front-page template (not included in wordpress.org version)
├── functions.php                   # → Set up your theme basic settings
├── gulpfile.js                     # → Gulpfile for air-light development
├── header.php                      # → Site header
├── images/                         # → Your theme images, for example default featured images and placeholders
├── inc/                            # → Theme core PHP
│   ├── hooks/                      # → Hook functions
│   ├── includes/                   # → Non-template features
│   ├── template-tags/              # → Template functions and helpers
│   ├── post-types/                 # → Custom Post Types
│   ├── taxonomies/                 # → Custom Taxonomies
│   ├── hooks.php                   # → All hooks the theme runs are here
│   ├── includes.php                # → Include non-template features
│   ├── template-tags.php           # → Include template functions and helpers
├── js/                             # → JavaScript files for production (never edit)
│   ├── all.js                      # → Obfuscated, concatted, minified file that contains all site JS
│   ├── src/                        # → JavaScript files for development
│   │   ├── lazyload.js             # → Script that lazyloads images to img or background (from 4.7.1)
│   │   ├── navigation.js           # → Accessible multi-level navigation (from 3.4.5)
│   │   ├── scripts.js              # → Theme core JavaScript file (from 1.0.0)
│   │   └── sticky-nav.js           # → Sticky nav functionality (optional)based themes
├── node_modules/                   # → Node.js packages (never edit)
├── package.json                    # → Node.js dependencies and scripts
├── page.php                        # → Default page template
├── phpcs.xml                       # → PHPCodeSniffer/WordPress Theme Coding Standards settings
├── sass/                           # → CSS files for development
│   ├── base/                       # → Theme base styles
│   │   ├── _accessibility.scss     # → Accessibility
│   │   ├── _normalize.scss         # → Browser reset
│   │   └── global.scss             # → Core CSS file that calls all the modular files
│   │   └── gutenberg.scss          # → Core CSS file for Gutenberg editor and blocks
│   ├── components/                 # → Add your style components to this folder
│   ├── features/                   # → Fuctionality styles
│   │   ├── _breadcrumbs.scss       # → Styles for hybrid breadcrumbs
│   │   ├── _gallery.scss           # → Default WordPress gallery feature styles
│   │   ├── _gravity-forms.scss     # → Defaults for Gravity Forms + WCAG 2.0 form fields for Gravity Forms
│   │   ├── _lazyload.scss          # → Styles for air-helper lazyload feature (lazyload.js needed)
│   │   ├── _magnific-popup.scss    # → Defaults for magnific popup
│   │   ├── _top.scss               # → Back to top styles
│   │   ├── _notices.scss           # → Default notices (not included by default)
│   │   ├── _pagination.scss        # → Numbered pagination styles
│   │   ├── _sticky-nav.scss        # → Sticky nav styles (not included by default)
│   │   └── _slick.scss             # → Styles for slick-carousel (not included by default)
│   ├── helpers/                    # → Helper mixins and functions
│   │   ├── _animations.scss        # → Animations and effects
│   │   ├── _aspect-ratio.scss      # → A mixin for aspect ratio
│   │   ├── _background.scss        # → Background related mixins
│   │   ├── _general.scss           # → Mixins for general use, or helpers of other mixins
│   │   ├── _grid.scss              # → CSS Grid helper mixin
│   │   └── _typography.scss        # → Typography style mixins
│   ├── layout/                     # → Fuctionality styles
│   │   ├── _demo-content.scss      # → Styles for demo, start script will delete this file
│   │   ├── _forms.scss             # → Styles for general forms and Gravity Forms
│   │   ├── _sidebar.scss           # → Sidebar (not included by default)
│   │   ├── _site-footer.scss       # → Footer styles
│   │   ├── _site-header.scss       # → Header styles
│   │   ├── _typography.scss        # → Defaults for typography and fonts
│   │   ├── _gutenberg.scss         # → Site-side styles for Gutenberg (pratically for single.php)
│   │   └── _woocommerce.scss       # → WooCommerce webshop styles (not included by default)
│   ├── navigation/                 # → Navigation styles
│   │   ├── _burger.scss            # → Burger styles and animations
│   │   ├── _nav-core.scss          # → Styles for both desktop and mobile navigation
│   │   ├── _nav-desktop.scss       # → Desktop navigation styles and dropdowns
│   │   └── _nav-mobile.scss        # → Navigation styles for mobile and touch devices
│   ├── variables/                  # → Configurations
│   │   ├── _breakpoints.scss       # → Widths from mobile to TV screens
│   │   ├── _colors.scss            # → All the colors of the theme
│   │   ├── _fonts.scss             # → Font settings
│   │   └── _spacings.scss          # → Margins and paddings
│   ├── views/                      # → Templates, archives, pages and views go here
│   │   ├── _blog.scss              # → General blog archive and post styles
│   │   ├── _comments.scss          # → Comment styles (optional)
│   │   ├── _front-page.scss        # → Front page styles (demo content, optional)
│   │   └── _page.scss              # → Default single page styles
├── screenshot.png                  # → Theme screenshot for WP admin
├── search.php                      # → Default search view
├── sidebar.php                     # → Default sidebar (optional)
├── single.php                      # → Default single article or CPT view
├── style.css                       # → Theme meta information
├── svg/                            # → Your theme SVG graphics and icons
├── template-parts/                 # → WordPress template parts. Modules go under this folder.
│   ├── header/                     # → Header modules
│   │   ├── branding.php            # → Site branding
│   │   ├── navigation.php          # → Site navigation
│   ├── content-modular.php         # → ACF flexible content
│   └── hero.php                    # → Default hero
```

### Features

Some features, WooCommerce support and personal preferences of Dude are moved to [Air helper](https://github.com/digitoimistodude/air-helper) plugin.

#### Layout base & grid

* All good things from the latest [Underscores](https://github.com/Automattic/_s)
* [SASS](http://sass-lang.com/)-support (SCSS-syntax)
* CSS reset with a combination with Nicolas Gallagher's [normalize\*css](https://github.com/necolas/normalize.css/)
* Flexbox-ready
* CSS Grid-ready
* Section blocks and containers
* Basic and minimal CSS framework for forms, commenting and typography
* Inline SVG-ready

#### Typography

* Responsive typography with viewport units with fallbacks, see more in [sass/layout/\_typography.scss](https://github.com/digitoimistodude/air/blob/master/sass/layout/_typography.scss) and [sass/base/\_helpers.scss](https://github.com/digitoimistodude/air/blob/master/sass/base/_helpers.scss#L91), default syntax is `@include responsive-font($font-size-min, $font-size-max);` (formerly [Megatype](https://github.com/StudioThick/megatype), still recommended with blogs or text-only based sites, but **not** included by default after 1.5.0)
* Web fonts file are preferred, helper included: [Sass Boilerplate's fontFace-mixin](https://github.com/magnetikonline/sassboilerplate/blob/master/fontface.scss). Put files in `fonts/` directory, you'll need .odt, .ttf, .woff, .woff2. Then just `@include fontFace('Proxima Nova', '../fonts/proximanova-regular-webfont', 400);` in \_typography.scss.

#### Development

* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing (included in [devpackages](https://github.com/digitoimistodude/devpackages))
* [gulp](http://gulpjs.com/) build script that compiles both Less and Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files (see Dude's [devpackages](https://github.com/digitoimistodude/devpackages))
* [npm](https://www.npmjs.com) for front-end package management

#### Navigation

* WCAG 2.0 accessible with keyboard and screen readeres, aria roles and labels included
* Custom navigation walker
* Support for multi-level drop down submenus
* Support for both absolute and relative navigation
* Improved version of the [accessible menu for WordPress themes](https://github.com/theme-smith/accessible-nav-wp), fully accessible and responsive multi-level navigation
* Support for animations
* Hover intent with minimal animations
* Accessible mobile menu
* Wide selection of [tasty hamburger](https://github.com/jonsuh/hamburgers) animations

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
  'your-post-type' => 'Your_Post_Type'
]
```

2. Add a file `inc/post-types/your-post-type.php`
3. Extend `Post_Type` class with `Your_Post_Type` and define your post type in a public function called `register()`. See the example: `inc/post-types/your-post-type.php`.

#### Custom Taxonomies

Air-light can register your Taxonomies automatically.

1. Add your taxonomy to theme settings under taxonomies, located in `functions.php` like this:

```
'your-taxonomy' => [
  'name' => 'Your_Taxonomy'
  'post_types' => 'post, page'
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

All .js files in `/js/src/*` is built to `/js/dist/` with the same name. The main scripts file loaded in front end is `/js/src/front-end.js`.

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

#### Slick slider

Air includes sassified version, clean SCSS file for slick carousel.

##### How to enable

To enable Slick carousel support,

1. Run `npm install slick-carousel --save` in theme directory
2. Run `npm update` in theme directory
3. Uncomment `// import slick from 'slick-carousel';` in scripts.js
4. Add slick init to document ready in scripts.js, like this, tweak to your needs:

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
<section class="block block-slider">
  <div class="container">
    <div class="cols slider">
      <div class="col item">
        <p><b>Slider item 1</b> Some other content. Lorem ipsum in proident deserunt nostrud. Lorem ipsum in proident deserunt nostrud.</p>
      </div><!-- .item -->

      <div class="col item">
        <p><b>Slider item 2</b> Something different to see the change. Lorem ipsum in proident deserunt nostrud culpa veniam sed esse aliqua ea velit aute.</p>
      </div><!-- .item -->
    </div>
  </div>
</section><!-- .block -->
````

Please note: If you want to change the background to lighter, you will need to edit the svg arrows accordingly.

#### WooCommerce support

Air had by default a basic WooCommerce support [from version 1.9.2](https://github.com/digitoimistodude/commit/55c539bb9cd2e35fdbfdf4f39a136c542b42b884), and for a while it was been separated to its own repository, [air-woocommerce](https://github.com/digitoimistodude/air-woocommerce) since v2.5.6.

##### How to enable

Starting from v2.6.0 WooCommerce support comes with [Air helper](https://github.com/digitoimistodude/air-helper) plugin and Air contains optional very basic WC styles. Air helper will add it's WC functionality when theme support for WooCommerce is added. To enable:

1. Get [Air helper](https://github.com/digitoimistodude/air-helper)
2. Activate the plugin
3. Uncomment woocommerce import in global.scss
4. Run gulp again and save files

### Requirements

* Requires at least: WordPress 4.7.1
* Tested up to WordPress 5.5.1

### Recommendations for development

* macOS
* [Devpackages](https://github.com/digitoimistodude/devpackages) \- Npm and Gulp \+ plugins
* [Dudestack](https://github.com/digitoimistodude/dudestack) \- A toolkit for creating a new professional WordPress project with deployments\. Heavily based on Bedrock by Roots\.

### Our way of building new themes

We use ACF and Gutenberg to build new websites on air-light. This is the default block structure we are used to have:

```` html
<section class="block block-something has-dark-bg">
  <div class="container">
    <div class="cols cols-two">
      <div class="col">
        <p><b>Column item 1</b> Some other content. Lorem ipsum in proident deserunt nostrud. Lorem ipsum in proident deserunt nostrud.</p>
      </div><!-- .col -->

      <div class="col">
        <p><b>Column item 2</b> Something different to see the change. Lorem ipsum in proident deserunt nostrud culpa veniam sed esse aliqua ea velit aute.</p>
      </div><!-- .col -->
    </div>
  </div>
</section><!-- .block -->
````

### Installation

Traditional way:

1. Git clone or download zip
2. Open Terminal and run `npm install`
3. Open project to [Visual Studio Code](https://github.com/ronilaukkarinen/vscode-settings) (or to your preferred editor) and run search and replace air-light => yourprojectname
4. Run `gulp watch` and start coding

If you are using [Dudestack](https://github.com/digitoimistodude/dudestack) and [Devpackages](https://github.com/digitoimistodude/devpackages), your project folder is located at `~/Projects`, your vagrant box is up and running at `10.1.2.4`, just

1. Open Terminal and cd to the bin directory under air-light theme
2. Run `sh newtheme.sh` \- the script takes care of the rest \(updates textdomain with your project name\, checks updates for air and npm packages\, runs npm install\, fetches devpackages\, sets up gulp\, cleans up the leftover files and activates the theme via wp\-cli\)

### Contributing

If you have ideas about the theme or spot an issue, please let us know. Before contributing ideas or reporting an issue about "missing" features or things regarding to the nature of that matter, please read [Please note](#please-note-before-using) section. Thank you very much.

### Air development

#### Installation

If you want to improve air, you have two options.

##### 1\. Use dudestack

Air is originally built on [dudestack](https://github.com/digitoimistodude/dudestack). Install our development environment with these steps (unix only, sorry Windows!):

1. `mkdir ~/Projects && git clone https://github.com/digitoimistodude/dudestack`
2. `cd ~/Projects/dudestack && sh setup.sh`
3. Run `createproject`, name project after *airdev* when asked
4. Wait for the project to be created (get a coffee, first time can take couple of minutes)
5. Create a fork of air-light (press fork button on GitHub)
6. Go to the theme folder of your WordPress instance via Terminal (`cd ~/Projects/airdev/content/themes`)
7. Clone your fork with `git clone git@github.com:yourusername/air-light.git` (replace yourusername with your actual username)
8. Cd to your new cloned repository `cd ~/Projects/airdev/content/themes/air-light`
9. Get the dependencides by running `npm install` inside the theme folder (if you don't have npm installed, see [here](https://www.npmjs.com/get-npm) or just use [homebrew](https://brew.sh))
10. Wait npm to get through files (get another cup of coffee)
11. Activate theme - if you are using the lightweight [macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup): `cd ~/Projects/airdev && vendor/wp-cli/wp-cli/bin/wp theme activate air-light` if [marlin-vagrant](https://github.com/digitoimistodude/marlin-vagrant): `ssh vagrant@10.1.2.4 "cd /var/www/$PROJECTNAME/;vendor/wp-cli/wp-cli/bin/wp theme activate air"` (replace $PROJECTNAME with actual project name)
12. Open whole project to your preferred coding editor, for example when using [Visual Studio Code](https://github.com/ronilaukkarinen/vscode-settings) that would be `code ~/Projects/airdev/content/themes/air-light`.
13. Go to back to air-light dir with `cd ~/Projects/airdev/content/themes/air-light` and then run `gulp` and start developing!

You may want to add `alias wp='./vendor/wp-cli/wp-cli/bin/wp'` for [macos-lemp-setup](https://github.com/digitoimistodude/macos-lemp-setup) or `alias wp='ssh vagrant@10.1.2.4 "cd /var/www/"$(basename "$PWD")"; /var/www/"$(basename "$PWD")"/vendor/wp-cli/wp-cli/bin/wp"'` for [marlin-vagrant](https://github.com/digitoimistodude/marlin-vagrant) to be able to use wp-cli with simply `wp`.

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

Air-light comes with [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) for PHP files, [stylelint](https://github.com/stylelint/stylelint) for SCSS/CSS files and [eslint](https://github.com/eslint/eslint) for JS files built inside gulpfile.js. **Please note, you need to configure global versions of these separately!** Here's how:

#### For gulp

PHP_CodeSniffer needs to be installed under `/usr/local/bin/phpcs` with [WordPress-Coding-Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) for php-debuggers to work properly in gulp. If you don't want to use phpcs with gulp, you can disable it by commenting out or deleting line `gulp.watch(phpSrc, ['phpcs']);`.

The golden rule here is to make sure the commands `stylelint`, `eslint` and `phpcs` work from command line.

#### How to install for Gulp

1. `mkdir -p ~/Projects && cd ~/Projects && git clone -b master --depth 1 https://github.com/wimg/PHPCompatibility.git phpcs`
2. `git clone https://github.com/PHPCompatibility/PHPCompatibility`
3. `git clone -b 2.2.1 --depth 1 https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git wpcs`
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

It's also best to have all `stylelint`, `eslint`, `phpcs`, `jscs`, `jshint` living inside your editor. We think [Visual Studio Code](https://github.com/ronilaukkarinen/vscode-settings) is best for this, check out the [plugins inside vscode-settings repository](https://github.com/ronilaukkarinen/vscode-settings) to make sure everything is installed.

### Releasing a new version on git and tagging principles (staff only)

Other than Dude staff should make pull requests, but the senior developers can push new versions directly. Whenever you have updates that are worthwile, commit them with clear commit messages and then do versioning. Every meaningful commit or bunch of commits that form a feature together make the version go up semantically 0.0.1.

The tag-release cycle:

1. Commit your changes
2. Search and replace version in style.css, functions.php, package.json, readme.txt. Remember update Tested up WordPress version as well.
3. Add a tag with `git tag -a x.x.x` commands
4. Add description for a feature or just name it by version name x.x.x if the changes are small
5. `git push -u origin HEAD && git push --tags` (or `p && git push --tags` if you use our term aliases)

That's it, you released a new version!

### Releasing a new version on the demo site and WordPress.org (staff only)

After tagging and releasing version on GitHub, you need to complete these steps:

1. Release the dev version to the server with this magical command (you need to have pubkey auth on for auto-login): `rsync -av -e ssh --exclude={"/node_modules/*","/bin/*","/sass/*"} ~/Projects/airdev/content/themes/* you@the_server:/var/www/dudetest.xyz/public_html/air/content/themes/` (consult your team's head developer for credentials)
2. `cd ~/Projects/airdev/content/themes/bin`
3. `sh air-move-out.sh`
4. Go to [Theme Check](http://airdev.test/wp/wp-admin/themes.php?page=themecheck) and click "Check it!" button. Fix possible errors.
5. `sh air-pack.sh`
6. Upload *\~/Projects/airdev/content/themes/air-light.zip* to [wordpress.org/themes/upload](https://wordpress.org/themes/upload/)

### Notes

Gzip file sizes tested with `wc -c css/global.css` and `gzip -c css/global.css | wc -c` commands.

**Theme developers please note:** if you use phpcs in [SublimeLinter as custom standard](https://github.com/ronilaukkarinen/sublime-settings/blob/master/Library/Application%20Support/Sublime%20Text%203/Packages/User/SublimeLinter.sublime-settings#L47) on [dudestack](https://github.com/digitoimistodude/dudestack), you will need extra content/themes/air-light subfolders inside theme directory for it to work on both global projects and with air-light.

### Known issues

See tool related issues in [devpackages](https://github.com/digitoimistodude/devpackages#known-issues) and [air-light issue tracker](https://github.com/digitoimistodude/issues).