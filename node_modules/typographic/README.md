<p align="center">
  <img src="http://corysimmons.github.io/typographic/typographic-logo.svg">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/typographic.svg?style=flat-square">
  <img src="https://img.shields.io/bower/v/typographic.svg?style=flat-square">
  <img src="http://img.shields.io/npm/dm/typographic.svg?style=flat-square">
</p>

Typographic is responsive typography made easy. Pick a few font stacks, set a few settings, and you've got **beautiful** responsive typography - it's that easy.


## Installation
- `bower install typographic`
- `@import` Typographic somewhere in your stylesheet


## Usage
It's as easy as setting a few variables in a custom settings file (or letting the defaults do their thing) and then **calling the mixin** `typographic()` with no arguments.


## Settings
```stylus
$line-height-ratio  = 1.75
$header-ratio       = $golden
$body-font          = $helvetica
$body-font-weight   = 300
$body-color         = #666
$header-font        = $helvetica
$header-font-weight = 500
$header-color       = #111
$min-font           = 13px
$max-font           = 20px
$min-width          = 600px
$max-width          = 1000px
$vertical-rhythm    = true
```


## Ratios
The ratios are based off of the ratios used on [modular scale](http://www.modularscale.com/).

```stylus
$minor-second   = 1.067
$major-second   = 1.125
$minor-third    = 1.2
$major-third    = 1.25
$perfect-fourth = 1.333
$aug-fourth     = 1.414
$perfect-fifth  = 1.5
$minor-sixth    = 1.6
$golden         = 1.618
$major-sixth    = 1.667
$minor-seventh  = 1.778
$major-seventh  = 1.875
$octave         = 2
$major-tenth    = 2.5
$major-eleventh = 2.667
$major-twelfth  = 3
$double-octave  = 4
```


## Font Stacks
Stacks are picked from A Way Back's [Revised Font Stack](http://www.awayback.com/revised-font-stack/).

```stylus
// Sans-serif

$calibri       = 'Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', 'sans-serif'
$candara       = 'Candara', 'Calibri', 'Segoe', 'Segoe UI', 'Optima', 'Arial', 'sans-serif'
$courier       = 'Courier New', 'Courier', 'Lucida Sans Typewriter', 'Lucida Typewriter', 'monospace'
$franklin      = 'Franklin Gothic Medium', 'Arial', 'sans-serif'
$futura        = 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif'
$geneva        = 'Geneva', 'Tahoma', 'Verdana', 'sans-serif'
$gill-sans     = 'Gill Sans', 'Gill Sans MT', 'Calibri', 'sans-serif'
$helvetica     = 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'
$lucida-grande = 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Verdana', 'sans-serif'
$optima        = 'Optima', 'Segoe', 'Segoe UI', 'Candara', 'Calibri', 'Arial', 'sans-serif'
$segoe         = 'Segoe', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'
$tahoma        = 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'
$trebuchet     = 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Tahoma', 'sans-serif'
$verdana       = 'Verdana', 'Geneva', 'sans-serif'


// Serif

$antiqua       = 'Book Antiqua', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Georgia', 'serif'
$baskerville   = 'Baskerville', 'Baskerville old face', 'Hoefler Text', 'Garamond', 'Times New Roman', 'serif'
$bodoni        = 'Bodoni MT', 'Didot', 'Didot LT STD', 'Hoefler Text', 'Garamond', 'Times New Roman', 'serif'
$cambria       = 'Cambria', 'Georgia', 'serif'
$caslon        = 'Big Caslon', 'Book Antiqua', 'Palatino Linotype', 'Georgia', 'serif'
$constantia    = 'Constantia', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Georgia', 'serif'
$didot         = 'Didot', 'Didot LT STD', 'Hoefler Text', 'Garamond', 'Times New Roman', 'serif'
$garamond      = 'Garamond', 'Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', 'serif'
$goudy         = 'Goudy Old Style', 'Garamond', 'Big Caslon', 'Times New Roman', 'serif'
$hoefler       = 'Hoefler Text', 'Baskerville old face', 'Garamond', 'Times New Roman', 'serif'
$lucida-bright = 'Lucida Bright', 'Georgia', 'serif'
$palatino      = 'Palatino', 'Palatino Linotype', 'Palatino LT STD', "Book Antiqua", 'Georgia', 'serif'
```


## Helpers
Typographic comes equipped with 2 extremely handy helpers. One for previewing your vertical rhythm grid, and another for sizing and spacing elements so they adhere to your vertical rhythm.

The preview grid mixin is easy. It accepts a color and a positive or negative pixel offset parameter (for nudging your lines up to the bottom of text).

```stylus
grid-overlay(blue, 2)
```

> **Note** `grid-overlay()` behaves somewhat funny in smaller viewports when `$min-font` is set to an odd number. This is due to a floating issue. Just something to keep in mind if your vertical rhythm looks haywire on smaller devices. Fear not, it's fine.

The other helper is the `vr-block()` function, which returns sizes of your vertical rhythm. For instance, if you want to include an image that takes up `5.25` vertical units `height` and has a `margin-bottom` of `.25` vertical unit (as in [our demo](http://corysimmons.github.io/typographic/)), you could create it like this:

```stylus
img
  height: vr-block(5.25)
  margin-bottom: vr-block(.25)
```

`vr-block()` accepts a second parameter for pixel offsetting to help nudge your elements back onto the vertical rhythm in case they are off by a pixel or two.


## Usage with Node
```javascript
var fs = require('fs'),
    stylus = require('stylus'),
    typographic = require('typographic');

stylus(fs.readFileSync('./css/style.styl', 'utf8'))
  .use(typographic())
  .render(function(err, css){
    if (err) return console.error(err);
    console.log(css);
  });
```

```stylus
@import 'typographic'

$min-font: 14px

typographic()
```


## Browser Support
- Full support for IE9+
- IE8 doesn't support [calc](http://caniuse.com/#feat=calc) or [viewport units](http://caniuse.com/#feat=viewport-units) or media queries by default so you shouldn't support it (you will get `$min-font` for all viewport sizes), but if you have a stingy client, you can include these polyfills to at least have it swap between the `$max-font` and `$min-font` at your specified breakpoint.
  - [respond.js](https://github.com/scottjehl/Respond)
  - [calc-polyfill](https://github.com/closingtag/calc-polyfill)
  - [vminpoly](https://github.com/saabi/vminpoly)


### Caveats
- Slow in Sass because Sass doesn't support calculating decimals in exponents by default. Luckily you only have to change a few variables to get your compiled typography stylesheet then you can un-import Typographic. If lack of solid math in native Sass bothers you, please chime in on this [issue](https://github.com/sass/sass/issues/684).
- Vertical rhythm doesn't really work with headers. It looks fine on `h1`, `h2`, and `h3`, but the `line-height` gets out of control on smaller headers. I've added a `$vertical-rhythm` setting to fall back to decent looking typography that isn't focused on vertical rhythm for just this case.


### Credits
- [Mike Riethmuller](http://twitter.com/MikeRiethmuller) came up with the idea of using `calc` with `vw` to create scaling typography [here](http://madebymike.com.au/writing/precise-control-responsive-typography/).
- [Scott Kellum](https://twitter.com/scottkellum) and [Tim Brown](https://twitter.com/timbrown) for [Modular Scale](http://www.modularscale.com/).
- [David Khourshid](https://twitter.com/davidkpiano) for calculating [decimal exponents](https://gist.github.com/davidkpiano/ad6e6771df050ff3727f) in Sass.
- [Petri Pottonen](https://twitter.com/petripottonen) for the `grid-overlay()` helper.


### Other Projects
If you like this project then I encourage you to check out a few of my other projects that go well with Typographic.

- [Lost Grid](https://github.com/corysimmons/lost) - Quite simply the best grid out there in every comparison available. Simple yet incredibly powerful.
- [Boy](https://github.com/corysimmons/boy) - A super lightweight, old-browser-friendly, HTML5 boilerplate with tons of features that make it a great start to any project.
