/**
 * A typical debounce
 */
/* eslint-disable-next-line import/prefer-default-export */
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this; const
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * Get localized string
 */
export function ask(slug) {
  if (typeof window.air_light_screenReaderText === 'object' && Object.prototype.hasOwnProperty.call(window.air_light_screenReaderText, slug)) {
    return window.air_light_screenReaderText[slug];
  }
  return `Missing localized string: ${slug}`;
}
