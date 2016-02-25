/**
 * Air theme JavaScript.
 */

// Set up the responsive and accessible navigation
var customToggle = document.getElementById('nav-toggle');
var customLabel = document.getElementById('nav-toggle-label');
var navigation = responsiveNav(".nav-collapse", {
  animate: true,
  transition: 284,
  customToggle: ".nav-toggle",
  navClass: "nav-collapse",
  menuItems: "menu-items",
  subMenu: "sub-menu",
  enableFocus: true,
  enableDropdown: true,
  openDropdown: screenReaderTexts.expandSubMenu,
  closeDropdown: screenReaderTexts.collapseSubMenu,
  open: function() {
    customLabel.innerHTML = screenReaderTexts.collapseMenu;
  },
  close: function() {
    customLabel.innerHTML = screenReaderTexts.expandMenu;
  },
  resizeMobile: function() {
    customToggle.setAttribute('aria-controls', 'nav');
  },
  resizeDesktop: function() {
    customToggle.removeAttribute('aria-controls');
  },
});
