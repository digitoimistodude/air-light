/**
 * Air theme JavaScript.
 */

// Set up the responsive and accessible navigation
var customToggle = document.getElementById('nav-toggle');
var customLabel = document.getElementById('nav-toggle-label');
var navigation = responsiveNav(".nav-collapse", {
  customToggle: ".nav-toggle",
  enableFocus: true,
  enableDropdown: true,
  openDropdown: '<span class="screen-reader-text">Open sub menu</span>',
  closeDropdown: '<span class="screen-reader-text">Close sub menu</span>',
  open: function() {
    customLabel.innerHTML = 'Close menu';
  },
  close: function() {
    customLabel.innerHTML = 'Open menu';
  },
  resizeMobile: function() {
    customToggle.setAttribute('aria-controls', 'nav');
  },
  resizeDesktop: function() {
    customToggle.removeAttribute('aria-controls');
  },
});
