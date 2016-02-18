# Rem

Sass mixin and function to use rem units with pixel fallback.  

Demo: [Sassmeister](http://sassmeister.com/gist/f75f0ffd0910a99eee77) / [Codepen](http://codepen.io/pierreburel/pen/ogGzgX)

Compatibility: Sass 3.2+ (3.3+ for maps) and LibSass

See also: https://github.com/pierreburel/sass-em

---

## Install

Download [`_rem.scss`](https://raw.githubusercontent.com/pierreburel/sass-rem/master/_rem.scss) or install with [Bower](http://bower.io/) or [npm](https://www.npmjs.com/):

### Bower

```
bower install sass-rem
```

### npm

```
npm install sass-rem
```

---

## Usage

Import `_rem.scss`, set the root font-size with `rem-baseline` mixin and use the `rem` mixin or function.

### SCSS

```scss
@import "rem";

html {
  @include rem-baseline;
}

h1 {
  @include rem(font-size, 24px); // Simple
  @include rem(border-bottom, 1px solid black); // Shorthand
  @include rem(box-shadow, 0 0 2px #ccc, inset 0 0 5px #eee); // Multiple values
  text-shadow: rem(1px 1px #eee, -1px -1px #eee); // Function and multiple values, warning: no fallback possible with rem function
  // Map support (Sass 3.3+)
  @include rem((
    margin: 20px 1rem,
    padding: 10px
  ));
}
```

### CSS

```css
html {
  font-size: 62.5%;
}

h1 {
  font-size: 24px;
  font-size: 2.4rem;
  border-bottom: 1px solid black;
  border-bottom: 0.1rem solid black;
  box-shadow: 0 0 2px #ccc, inset 0 0 5px #eee;
  box-shadow: 0 0 0.2rem #ccc, inset 0 0 0.5rem #eee;
  text-shadow: 0.1rem 0.1rem #eee, -0.1rem -0.1rem #eee; // No fallback
  margin: 20px 10px;
  margin: 2rem 1rem;
  padding: 10px;
  padding: 1rem;
}
```

---

You can disable pixel fallback by setting `$rem-fallback` to `false`.

### CSS

```css
h1 {
  font-size: 2.4rem;
  border-bottom: 0.1rem solid black;
  box-shadow: 0 0 0.2rem #ccc, inset 0 0 0.5rem #eee;
  text-shadow: 0.1rem 0.1rem #eee, -0.1rem -0.1rem #eee;
  margin: 2rem 1rem;
  padding: 1rem;
}
```

---

You can totally disable rem units by setting `$rem-px-only` to `true` (for a lt-ie9 only stylesheet for example).

### CSS

```css
h1 {
  font-size: 24px;
  border-bottom: 1px solid black;
  box-shadow: 0 0 2px #ccc, inset 0 0 5px #eee;
  text-shadow: 1px 1px #eee, -1px -1px #eee; // Fallback works here
  margin: 20px 10px;
  padding: 10px;
}
```

---

## Changing baseline

By default, sass-rem uses a 10px baseline (root font size to 62.5%) for readability reasons (10px = 1rem).
You can change this value using the `$rem-baseline` variable.
The `rem-baseline` mixin will adjust the root font size and `rem` function and mixin will calculate rem values and px fallbacks automatically.

### SCSS

```scss
@import "rem";

$rem-baseline: 16px;

html {
  @include rem-baseline; // Optional with 16px baseline
}

h1 {
  @include rem((
    font-size: 24px,
    margin: 10px 1rem
  ));
}
```

### CSS

```css
html {
  font-size: 100%;
}

h1 {
  font-size: 24px;
  font-size: 1.5rem;
  margin: 10px 16px;
  margin: 0.625rem 1rem;
}
```

---

You can also change the baseline zoom by passing the desired zoom to the `rem-baseline` mixin which will calculate it depending of `$rem-baseline`. Useful for creating responsive typography depending on viewport, especially with a different baseline than 16px.

### SCSS

```scss
@import "rem";

html {
  @include rem-baseline; // Default zoom to 100%

  @media (max-width: 400px) {
    @include rem-baseline(75%);
  }

  @media (min-width: 800px) {
    @include rem-baseline(125%);
  }
}
```

### CSS

```css
html {
  font-size: 62.5%;
}

@media (max-width: 400px) {
  html {
    font-size: 46.875%;
  }
}

@media (min-width: 800px) {
  html {
    font-size: 78.125%;
  }
}
```
