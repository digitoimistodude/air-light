/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:21:44
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 01:32:28
 */

function a11yFocusTrap(e) {
  // Init focusable elements
  let focusableElements = [];

  // Define container
  const container = document.getElementById('nav');

  // Define nav-toggle
  const navToggle = document.getElementById('nav-toggle');

  // Get --width-max-mobile from CSS
  const widthMaxMobile = getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile');

  // Let's see if we are on mobile viewport
  const isMobile = window.matchMedia(`(max-width: ${widthMaxMobile})`).matches;

  // If things are not okay, bail
  if (!container || !navToggle || !isMobile) {
    return;
  }

  // Set focusable elements inside main navigation.
  focusableElements = [...container.querySelectorAll(
    'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
  )];

  // Get first and last focusable element
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  // On key down on first element, if it's a Shift+Tab, redirect to last element
  if (firstFocusableElement === e.target && e.code === 'Tab' && e.shiftKey) {
    lastFocusableElement.focus();
  }

  // On key down on last element, if it's a Tab, redirect to first element
  if (lastFocusableElement === e.target && e.code === 'Tab' && !e.shiftKey) {
    firstFocusableElement.focus();
  }
}

export default a11yFocusTrap;
