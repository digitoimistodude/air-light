/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 * Modified by rolle
 *
 */

export default class LazyLoad {
  constructor(images, options) {
    this.settings = {
      src: 'data-src',
      srcmobile: 'data-src-mobile',
      srcset: 'data-srcset',
      selector: '.lazyload',
      root: null,
      rootMargin: '0px',
      threshold: 0,
      breakpoint: 600,
      ...options,
    };
    this.images = images || document.querySelectorAll(this.settings.selector);
    this.observer = null;
  }

  /**
   * Initialize lazyload
   */
  init() {
    /* Without observers load everything and bail out early.
         This affects some iOS and Windows Phones */
    if (!window.IntersectionObserver) {
      this.loadImages();
      return;
    }

    const self = this;
    const observerConfig = {
      root: this.settings.root,
      rootMargin: this.settings.rootMargin,
      threshold: [this.settings.threshold],
    };

    this.observer = new IntersectionObserver(((entries) => {
      Array.prototype.forEach.call(entries, (entry) => {
        /* If inside viewport */
        if (entry.isIntersecting) {
          /* Define image */
          const img = entry.target;

          /* Add animation class to full-image div */
          if (typeof (img.nextElementSibling) !== 'undefined' && img.nextElementSibling != null) {
            img.nextElementSibling.classList.add('reveal');
          }

          self.observer.unobserve(entry.target);
          const src = img.getAttribute(self.settings.src);
          const srcset = img.getAttribute(self.settings.srcset);
          const srcmobile = img.getAttribute(self.settings.srcmobile);

          /* Replace fully loaded original background image to the img src */
          if (img.tagName.toLowerCase() === 'img') {
            img.src = document.documentElement.clientWidth < this.settings.breakpoint
              ? srcmobile : src;
          } else {
            // Add fully loaded original background image to next div element
            img.nextElementSibling.style.backgroundImage = document.documentElement.clientWidth < this.settings.breakpoint ? `url(${srcmobile})` : `url(${src})`;
          }
        }
      });
    }), observerConfig);

    Array.prototype.forEach.call(this.images, (image) => {
      self.observer.observe(image);
    });
  }

  loadAndDestroy() {
    if (!this.settings) {
      return;
    }
    this.loadImages();
    this.destroy();
  }

  /**
   * Loads all images at once, used for fallbacks on some mobile browsers
   */
  loadImages() {
    if (!this.settings) {
      return;
    }

    this.images.forEach((image) => {
      const src = image.getAttribute(this.settings.src);
      const srcset = image.getAttribute(this.settings.srcset);
      const srcmobile = image.getAttribute(this.settings.srcmobile);

      if (image.tagName.toLowerCase() === 'img') {
        image.src = src !== image.src;
        image.srcset = srcset !== image.srcset;
        image.srcmobile = srcmobile !== image.srcmobile;
      } else {
        image.style.backgroundImage = document.documentElement.clientWidth < this.settings.breakpoint ? `url("${srcmobile}")` : `url("${src}")`;
      }
    });
  }

  destroy() {
    if (!this.settings) {
      return;
    }
    this.observer.disconnect();
    this.settings = null;
  }
}
