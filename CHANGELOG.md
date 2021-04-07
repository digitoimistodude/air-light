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
