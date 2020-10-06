/**
 * Localization for JS
 */

export default function ask(slug) {
  if (typeof window.air_light_screenReaderText === 'object' && Object.prototype.hasOwnProperty.call(window.air_light_screenReaderText, slug)) {
    return window.air_light_screenReaderText[slug];
  }
  return `Missing localized string: ${slug}`;
}
