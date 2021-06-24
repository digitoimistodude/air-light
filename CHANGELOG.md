### 7.7.5: 2021-06-24

* Update to devpackages 2.2.5.

### 7.7.4: 2021-06-23

* Updates from [devpackages](https://github.com/digitoimistodude/devpackages) 2.2.4: Speed up styles tasks by adding a separate watch for prodstyles

### 7.7.3: 2021-06-22

* Fix order/order errors, fix build

### 7.7.2: 2021-06-22

* Attempt to fix build: Lint theme SCSS with new rules
* Fix stylelint syntax error in _nav-desktop.scss
* Update html-validator-cli for travis unit tests

### 7.7.1: 2021-06-22

* Update to devpackages 2.2.1

### 7.7.0: 2021-06-22

* Add editor-post-title styles for Gutenberg

### 7.6.9: 2021-06-22

* Remove plugin territory hooks in favor of [air-helper#42](https://github.com/digitoimistodude/air-helper/issues/42)

### 7.6.8: 2021-06-22

* Fix broken js after generating air as mentioned in #119
* Incorporate nu-html-checker to be part of travis unit tests

### 7.6.7: 2021-06-22

* Navigation accessibility: Remove incorrect attributes from dropdown link
* Navigation accessibility: Fix screen reader class
* Navigation accessibility: Fix invalid aria-expanded
* Navigation accessibility: Fix crucial landmark role issues, revert from 6.3.4 c93af48d5e793bc24b9932b72069da1b21c1af83
* Clean up <head> for valid HTML
* Fix gravity forms styles reset
* Disable printing Gravity Forms js straight after <head> (invalid HTML)

### 7.6.6: 2021-06-17

* Improve nav layout with in between breakpoints: Do not wrap main level menu items by default on desktop

### 7.6.5: 2021-06-15

* Allow list items to have external links
* Fix list widths in gutenberg, add default style for ::marker

### 7.6.4: 2021-06-09

* Show message if no search results found
* Add default localization for "No results for your search"

### 7.6.3: 2021-06-09

* Fix too quick transition-duration (.08, one zero too much, thx @Tumppex for stpotting this!)
* Add WCAG AAA+ compliant validation error colors for gravity forms 2.5

### 7.6.2: 2021-06-09

* Gravity Forms 2.5 base styles
* Fix main navigation link item having only hash instead of link

### 7.6.1: 2021-06-01

* Reset wp-admin list styles on metabox UI

### 7.6.0: 2021-05-31

* Update devpackages to [2.2.0](https://github.com/digitoimistodude/devpackages/releases/tag/2.2.0)

### 7.5.9: 2021-05-28

* Add --grid-gap for grid mixin defaults

### 7.5.8: 2021-05-28

* Add missing --padding-main-level-vertical-mobile, fix incorrect --padding-sub-menu-vertical-mobile
* Use git version of sanitize.css, fix navigation white space

### 7.5.7: 2021-05-28

* Fixes for gutenberg blocks on mobile, fix table block width
* Fix core gutenberg block widths/paddings on small mobile screens

### 7.5.6: 2021-05-28

* Add $container-macbook-air breakpoint and --padding-container-horizontal-large for better fit to smaller screens

### 7.5.5: 2021-05-26

* Bypass the file_get_contents restriction [#112](https://github.com/digitoimistodude/air-light/pull/112)

### 7.5.4: 2021-05-24

* Updates from [devpackages 2.1.8](https://github.com/digitoimistodude/devpackages/releases/tag/2.1.8)

### 7.5.3: 2021-05-24

* Updates from [devpackages 2.1.7](https://github.com/digitoimistodude/devpackages/releases/tag/2.1.7)

### 7.5.2: 2021-05-24

* Fix unexpected flexbox style bug with sub menu items

### 7.5.1: 2021-05-24

* Include sanitize.css 12.0.1 and reduce motion from repo
* Make possible to change active mobile nav bg color
* Change nav desktop font sizes as vars

### 7.5.0: 2021-05-21

#### Major update

* Add social media accounts to theme settings #109
* Add custom setting groups support #108
* Automate acf block icon from svg file #107
* Check if it's allowed to show this block in the context #106
* Add error block functionality #105
* Wrap theme settings to after_setup_theme action, fix filter name #104
* Update nav walker to 4.3.0: Accessibility, schema and security updates #103
* Remove deprecated blocks, Fixes #93 (thanks @LukaszJaro!)
* Fix too specific paragraph styles (moved from gutenberg/block/core-paragraph.scss to gutenberg/formatting/_paragraph.scss)
* Add cubic-brezier() mixin
* Bump tested WP version to 5.7.2

### 7.4.5: 2021-05-20

* Add example block icon SVG for ACF Gutenberg block init
* Wrap theme settings to after_setup_theme action, fix filter name #104

### 7.4.4: 2021-05-19

* Fix alignwide and alignfull variables in front end

### 7.4.3: 2021-05-19

* Add variables $width-full and $width-wide for default Gutenberg blocks styling
* Fix typo in code comment
* Fix preformatted text alignment in Gutenberg

### 7.4.2: 2021-05-19

* Improve block functionality #102

### 7.4.1: 2021-05-18

* Deprecate modules SCSS
* Example of your next ACF Gutenberg block

### 7.4.0: 2021-05-18

#### Major Gutenberg update

* This version adds ACF-Gutenberg blocks (PR: Moving on from modular content to ACF-Gutenberg blocks #100)
* Fixes for stylelint (most notably getting rid of vendor prefixes in styles)
* Fully working editor styles
* Editor JS and editor lazyload support
* Deprecate modular-content.php
* Remove demo content from the theme (from now on it's a separate WordPress plugin)
* Bunch of small fixes

### 7.3.1: 2021-05-12

* Fix: Add missing autoprefixer for dev styles gulp task

### 7.3.0: 2021-05-12

* Fix select dropdowns showing toggle icon twice (`appearance: none;` is well supported by Safari 14)

### 7.2.9: 2021-05-11

* Fix 404, Fixes #99

### 7.2.8: 2021-05-04

* Consistency in file headers
* Fix replaces by exporting the variables in the start script

### 7.2.7: 2021-05-04

* Fix NEWEST_AIR_VERSION variable in additions script

### 7.2.6: 2021-05-04

* Fix gulp command syntax for development and production environments in new theme starting script

### 7.2.5: 2021-04-29

* Make sure children don't have list bullets
* Accessibility: Make focus ring a little more engaging ([source](https://twitter.com/argyleink/status/1387072095159406596))

### 7.2.4: 2021-04-23

* Fix navigation #94 (huge thanks to @michaelbourne!)
* Fix focus trap problems in mobile navigation if last nav item is a dropdown #26
* Fix issue with setLazyLoadedFigureWidth not imported properly
* Contributing instructions up to date according to the latest version of dudestack

### 7.3.1: 2021-04-22

* Mobile nav overflow fix #95 (thanks @Tumppex and congrats for the first pull request!)
* Documenting code: Add comment about Gravity Forms with ajax
* Remove deprecated vagrant instructions from the Read me file
* Theme metadata in style.css: Add more clear instructions, update date format

### 7.2.2: 2021-04-21

* Include missing heading-hero component
* Add default core/table styles

### 7.2.1: 2021-04-21

* Refine heading levels
* Refine button components
* Add wide core/separator block
* Add function end comments and few minor PHP styling changes
* Truncate too long button texts
* Components more presentable way in demo, fix button styles and sizes

### 7.2.0: 2021-04-21

* Fix critical style bug with default button hover and ghost button colors
* Fix phpcs task src

### 7.1.9: 2021-04-20

* Change font-family attributes from SCSS variables to CSS variables

### 7.1.8: 2021-04-20

* Support for SCSS source maps [(devpackages 2.1.5)](https://github.com/digitoimistodude/devpackages/releases/tag/2.1.5)
* Fix error reporting on watch. Awaiting [Pull Request](https://github.com/wulechuan/wulechuan-js-printer-for-errors-of-gulp-plugins/pull/3). [(devpackages 2.1.5)](https://github.com/digitoimistodude/devpackages/releases/tag/2.1.5)
* Bump tested WP version to 5.7.1

### 7.1.7: 2021-04-20

* Get updates from [devpackages 2.1.3](https://github.com/digitoimistodude/devpackages/releases/tag/2.1.3)

### 7.1.6: 2021-04-20

* Styles related performance update for gulp from [devpackages 2.1.2](https://github.com/digitoimistodude/devpackages/releases/tag/2.1.2)

### 7.1.5: 2021-04-16

* More consistency in form variables
* Add --gap-between-dropdown-toggle as CSS variable
* Color links for AA and AAA
* Move theme documentation to Wiki

### 7.1.4: 2021-04-16

* Add Laragon support #92 (thank you @divn!)
* New theme script dependencies partial: Gulp styles to later stage
* Release version 1.0.5 of newtheme starting scripts

### 7.1.3: 2021-04-15

* Fix failing build with missing color variable

### 7.1.2: 2021-04-15

* Add more element color variables
* Remove unused magnific popup styles from the theme
* More sensible link variables
* Do not depend on brand color pool variables, use element variables instead in partials

### 7.1.1: 2021-04-15

* Remove auto-color function, transform all the rest of the color variables as CSS variables

### 7.1.0: 2021-04-15

* Font size variables to be more precise and fail-proof #91

### 7.0.9: 2021-04-15

* Fix conflicting duplicate CSS variable `var(--color-dropdown-toggle)`.

### 7.0.8: 2021-04-14

* Fix skip link color on focus
* Fix sub-navigation padding when toggled on keyboard
* CSS variablize nav-mobile
* Add CSS variables to desktop nav, add font-weights as vars
* Fix editor font paths
* More CPU friendly php watch
* Set figure widths for gutenberg
* Helper variables $font-sans and $font-serif
* Add _font-face for defining webfont files, clarify font-family

### 7.0.7: 2021-04-14

See [pull request #89](https://github.com/digitoimistodude/air-light/pull/89).

Project start scripts have been refactored completely same manner than in this [dudestack PR](https://github.com/digitoimistodude/dudestack/pull/11).

### Changes:

- Add working WSL support, linked also to [windows-lemp-setup](https://github.com/digitoimistodude/windows-lemp-setup)
- Modularize bash scripts, add files as partials. From now on we need to edit files under bin/tasks. Only couple of files are different, for example sed commands for debian and macOS vary, that's why
- Beautiful formatting and instructions for the start script (header.sh, footer.sh)
- Prevent running directly with bash or sh to prevent possible issues with them
- Variable all the things - no need to search and replace stuff
- Fix typos
- Add checks for missing packages (WSL mainly)
- Add extra notifications that these scripts need Air-light and dev servers to work

### 7.0.6: 2021-04-07

* Fix color variable inside conditional

### 7.0.5: 2021-04-07

* CSS variables #85
* Add default link within content styles
* Fix Gutenberg formatting

### 7.0.4: 2021-04-07

* Remove PHP 7.0 from unit tests
* Migrate from travis-ci.org to travis-ci.com
* Fix build, add escapes and missing npm package

### 7.0.3: 2021-04-06

* Merge PR #82: Gutenberg improvements
* Merge PR #84, Fixes #83
* Major Gutenberg updates as proposed in #82

### 7.0.2: 2021-04-06

* Add .hintrc for webhint
* Update .browserslistrc, deprecate Internet Explorer and Opera mobile browsers
* Update packages and scripts

### 7.0.1: 2021-04-05

* Fix Gutenberg editor styles not loading: #78: Remove dependencies from style enqueue fixes #77

### 7.0.0: 2021-04-01

* Prevent FOUT when loading webfonts
* Allow email notifications in Travis unit tests
* Fix stylelint error reporting in Travis unit tests

### 6.9.9: 2021-04-01

* Implement [devpackages 2.0.7](https://github.com/digitoimistodude/devpackages/releases/tag/2.0.7): Fix stylelint task not showing report
* Implement [devpackages 2.0.7](https://github.com/digitoimistodude/devpackages/releases/tag/2.0.7): Remove unused browsersync watch

### 6.9.8: 2021-03-30

* Improve documentation
* Fix navigation sub-menu hover animation: Hover padding should only emerge on sub-menu items, not to main menu items

### 6.9.7: 2021-03-30

* Add space after blockquote cite
* Update @font-face for Slightly Deeper Browser Support
* Remove excess amount of fonts

### 6.9.6: 2021-03-30

* Change default demo font to Inter
* Fix problem with blockquote overflow on desktop

### 6.9.5: 2021-03-29

* Disable sub-menu "out"-animation for slicker navigation experience (.hover-intent)

### 6.9.4: 2021-03-29

* Smooth and fast animation update for desktop sub-menus
* Use 20ms padding animation instead of opacity
* Add vars for $dropdown-toggle-size and $use-dropdown-toggle-animation

### 6.9.3: 2021-03-23

* Add reminder note about responsive navigation breakpoint width in JS
* Fix demo content navigation padding

### 6.9.2: 2021-03-18

* Fix nav toggle visibility on desktop
* Fix sub menu link hover color

### 6.9.1: 2021-03-18

* Fix gulp watch task causing CPU hogging

### 6.9.0: 2021-03-18

* Remove mqpacker that is causing problems with media queries
* Update packages (linters, postcss and browsersync)
* Bump tested WP version to 5.7

### 6.8.9: 2021-02-26

* Cleaner HTML markup for branding (thanks [@samikeijonen](https://github.com/samikeijonen))

### 6.8.8: 2021-02-26

* Add themeDir to all asset file paths/names to match devpackages #75

### 6.8.7: 2021-02-25

* Accessibility and best practices: Move skip link to right after body tag
* Add consistent arguments for default button style components
* Off-repository: Add ghost button to the examples

### 6.8.6: 2021-02-25

* Fix js task signal async completion

### 6.8.5: 2021-02-25

* Fix newtheme.sh theme generate script clean ups for new CSS structure
* Documentation updates for the release cycle

### 6.8.4: 2021-02-24

* No default_featured_image by default, improvements to hero #73, Fixes #72

### 6.8.3: 2021-02-24

* Fix burger margin that should be only present with label

### 6.8.2: 2021-02-23

* Update release cycle steps to documentation
* Update bash alias `release_new_air_version`
* Add packing and cleaning up files part of the same process

### 6.8.1: 2021-02-23

* Fix block class post type prefix #71

### 6.8.0: 2021-02-22

* Localize add a menu label, Fixes #64
* Change static breakpoints as variables
* Fix styles not injecting to the browser on save
* Fix issue with blockquote flowing out of viewport, Fixes #66
* Fix all relative paths due structure change
* Add missing default title for a blog post
* Fix get_asset_file calls on gutenberg script enqueues
* Check if img element has clientWidth before setting CSS variable

### 6.7.3: 2021-02-20

* Fix mistake in CSS class name

### 6.7.2: 2021-02-19

* Build production and development JS builds in gulp watch, [#63](https://github.com/digitoimistodude/air-light/pull/63)
* Make us of new wp_get_environment_type function in modular content, [#65](https://github.com/digitoimistodude/air-light/pull/65)

### 6.7.1: 2021-02-18

* Accessibility: Add required outline parameters for global links, [ab54efc](https://github.com/digitoimistodude/air-light/commit/ab54efc820bfd94a6a15ea492e143971c54ea684)
* Add button components, [#62](https://github.com/digitoimistodude/air-light/pull/62)

### 6.7.0: 2021-02-18

* Add correct protocol to newtheme script final output
### 6.6.9: 2021-02-16

* Update documentation about installing Air-light on any development environment
* Update clean up script bin/air-move-out.sh to clean up cpt files that are not allowed in theme directory because they are "plugin-territory functionality". Also documenting this in this point.
### 6.6.8: 2021-02-16

* Fix cpt files not included in official version
* Open changelog to be more consistent with the releases

### 6.6.8-alpha: 2021-02-16

* Open changelog to be more consistent with the releases
