# normalize-scss

## Latest versions

For use with…                | normalize-scss version
-----------------------------|-----------------------
Sass 3.4 or libSass          | [4.0.3](https://github.com/JohnAlbin/normalize-scss/releases/tag/4.0.3)<br> combining normalize.css v3.0.3 with v1.1.3
Ruby Sass 3.3 + Compass 1.0  | [3.0.3](https://github.com/JohnAlbin/normalize-scss/releases/tag/3.0.3)<br> combining normalize.css v3.0.3 with v1.1.3
Ruby Sass 3.2 + Compass 0.12 | [2.2.0+normalize.2.1.3](https://github.com/JohnAlbin/normalize-scss/releases/tag/2.2.0%2Bnormalize.2.1.3)<br> combining normalize.css v2.1.3 with v1.1.3

## The Sass port of normalize.css

__This project is the Sass version of Normalize.css__, a collection of HTML element and attribute rulesets to normalize styles across all browsers. This port aims to use a light dusting of Sass to make Normalize even easier to integrate with your website. To learn about why Normalize.css is so amazing, skip to the "normalize.css" section below.

This Sass port currently utilizes:

* Browser support variables: Allowing you to easily add/drop support for any browser by modifying a single Sass variable.
* Vertical rhythm mixins: Allowing you to alter the font-size, line-height and margins in Normalize’s output without hacking the library.

In addition, Normalize.css has 2 major versions: version 3 (without “legacy browser” support) and version 1 (with support for IE 6/7, etc.) This Sass port combines the two versions into one file so that you can easily toggle between the two versions using its browser support variables.

Did a client wait until the last minute to mention their CEO uses IE 6? Simply update your `$support-for` variable and recompile your Sass files. Details can be found at https://github.com/JohnAlbin/normalize-scss/wiki

# normalize.css v3

Normalize.css is a customisable CSS file that makes browsers render all elements more consistently and in line with modern standards.

The project relies on researching the differences between default browser styles in order to precisely target only the styles that need or benefit from normalizing.

[View the test file](http://necolas.github.io/normalize.css/latest/test.html)

## What does it do?

* Preserves useful defaults, unlike many CSS resets.
* Normalizes styles for a wide range of elements.
* Corrects bugs and common browser inconsistencies.
* Improves usability with subtle improvements.
* Explains what code does using detailed comments.

## Install

Install using one of the following methods:

* Download directly from the [project page](https://github.com/JohnAlbin/normalize-scss/releases).
* Install with [npm](http://npmjs.org/): `npm install --save normalize-scss`
* Install with [Bower](http://bower.io/): `bower install --save normalize.scss`
* Install with [Ruby Gem](https://rubygems.org/gems/normalize-scss): `gem install normalize-scss`<br>
  and, if using Compass, add `require "normalize-scss"` to your config.rb file. Note: if you want to alter the _normalize.scss file after installation (see "how to use it" below), you can use the `gem list --details normalize-scss` command to show you where the normalize-scss files were installed.

## How to use it

There is a fantastic introduction to the project and brief instructions how to use it in the [About normalize.css article](http://nicolasgallagher.com/about-normalize-css/).

You can use the Sass port of Normalize in one of several methods, following the "About normalize.css" article's suggestions:

__Approach 1:__ Download and use normalize-scss as a starting point for your own project's base Sass, customising the values to match the design's requirements. (The best approach, _IMO_.)
  1. Copy the normalize-scss files to your sass directory so that you can alter it
    as you include it in your project. To aid with this method, normalize-scss
    includes several ready-made "fork" versions:
    * [fork-versions/default](fork-versions/default) - Fork for libSass or Ruby Sass
    * [fork-versions/ruby-sass-compass](fork-versions/ruby-sass-compass) - Fork for Ruby Sass with Compass
    * [fork-versions/typey](fork-versions/typey) - Fork with Typey
    * [fork-versions/typey-chroma-kss](fork-versions/typey-chroma-kss) - Fork with Typey, Chroma and KSS
  2. The normalize-scss code uses the `support-for` module, so add it

__Approach 2:__ Install and include normalize-scss untouched and then build upon it, overriding the defaults later in your Sass when necessary. Just import normalize-scss like any normal Sass module by:
  1. Set variables to override the default normalize-scss variables.
  2. Import with `@import "normalize";`
  3. Output the CSS rules with `@include normalize();`

Alternatively, you can import normalize-scss immediately into your main Sass file without needing to use the `normalize()` mixin by:

  1. (Optionally) set variables to override the default normalize-scss variables.
  2. Import with `@import "normalize/import-now";`

Note: if you use [wiredep](https://github.com/taptapship/wiredep), normalize-scss's bower.json points at the normalize/import-now Sass partial. If you don't wish to immediately output the CSS, you will need to override the Sass partial that wiredep grabs from normalize-scss.

## Browser support

* Google Chrome (latest)
* Mozilla Firefox (latest)
* Mozilla Firefox ESR
* Opera (latest)
* Apple Safari 6+
* Internet Explorer 6+

The exact browsers supported in your project is controlled by the browser
support variables. See https://github.com/JohnAlbin/normalize-scss/wiki

## Extended details

Additional detail and explanation of the esoteric parts of normalize.css.

#### `pre, code, kbd, samp`

The `font-family: monospace, monospace` hack fixes the inheritance and scaling
of font-size for preformated text. The duplication of `monospace` is
intentional.  [Source](http://en.wikipedia.org/wiki/User:Davidgothberg/Test59).

#### `sub, sup`

Normally, using `sub` or `sup` affects the line-box height of text in all
browsers. [Source](http://gist.github.com/413930).

#### `svg:not(:root)`

Adding `overflow: hidden` fixes IE9's SVG rendering. Earlier versions of IE
don't support SVG, so we can safely use the `:not()` and `:root` selectors that
modern browsers use in the default UA stylesheets to apply this style. [SVG
Mailing List discussion](http://lists.w3.org/Archives/Public/public-svg-wg/2008JulSep/0339.html)

#### `input[type="search"]`

The search input is not fully stylable by default. In Chrome and Safari on
OSX/iOS you can't control `font`, `padding`, `border`, or `background`. In
Chrome and Safari on Windows you can't control `border` properly. It will apply
`border-width` but will only show a border color (which cannot be controlled)
for the outer 1px of that border. Applying `-webkit-appearance: textfield`
addresses these issues without removing the benefits of search inputs (e.g.
showing past searches).

#### `legend`

Adding `border: 0` corrects an IE 8–11 bug where `color` (yes, `color`) is not
inherited by `legend`.

## Contributing
Please read Necolas' [contributing guidelines](https://github.com/necolas/normalize.css/blob/master/CONTRIBUTING.md).

Updates to most CSS rules should be reported to Necolas' upstream [Normalize.css project](http://necolas.github.com/normalize.css/). Updates to the Sass should be reported in the [Normalize-scss project](https://github.com/JohnAlbin/normalize-scss/).

## Acknowledgements

Normalize.css is a project by [Nicolas Gallagher](https://github.com/necolas),
co-created with [Jonathan Neal](https://github.com/jonathantneal).

This Sass port is a project by [John Albin Wilkins](http://john.albin.net).

## Other ports of Normalize.css

For the record, there are several other Sass ports as well. Including:

* https://github.com/waynegraham/compass-normalize-plugin
* https://github.com/ksmandersen/compass-normalize
* https://github.com/hail2u/normalize.scss
* https://github.com/kristerkari/normalize.scss
* https://github.com/krisbulman/normalize-libsass

[![Build Status](https://travis-ci.org/JohnAlbin/normalize-scss.png?branch=master)](https://travis-ci.org/JohnAlbin/normalize-scss)
