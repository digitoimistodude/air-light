/**
 * Back to top button
 */

import MoveTo from 'moveto';
import debounce from './helpers';

export default class backToTop {
  constructor() {
    // Browser window scroll (in pixels) after which the 'back to top' link is shown
    this.offset = 300;
    this.offsetOpacity = 1200;
    this.backToTop = document.querySelector('.back-to-top');
    this.contentDivs = document.querySelectorAll('.block');
  }

  /**
   * Initialize moveto and backto top button listeners
   */
  init() {
    window.addEventListener('scroll', debounce(this.toggleBackToTop(), 100));
    window.addEventListener('scroll', debounce(this.changeBackToTopColor(), 100));
    document.addEventListener('DOMContentLoaded', debounce(this.registerMoveTo(), 100));
  }

  toggleBackToTop() {
    return () => {
      if (window.scrollY > this.offset) {
        this.backToTop.classList.add('is-visible');
      } else {
        this.backToTop.classList.remove('is-visible');
      }
      if (window.scrollY > this.offsetOpacity) {
        this.backToTop.classList.add('fade-out');
      } else {
        this.backToTop.classList.remove('fade-out');
      }
    };
  }

  // Accessibility: Ensure back to top is right color on right background
  // Note: Needs .has-light-bg or .has-dark-bg class on all blocks
  changeBackToTopColor() {
    return () => {
      const stickyOffset = this.backToTop.getBoundingClientRect().top;
      // eslint-disable-next-line consistent-return
      this.contentDivs.forEach((contentDiv) => {
        const thisOffset = parseInt(contentDiv.getBoundingClientRect().bottom, 10);
        const actPosition = parseInt(thisOffset - window.scrollY, 10);
        console.table({
          class: [...contentDiv.classList].join(','),
          thisOffset,
          scrollY: window.scrollY,
          actPosition,
          stickyOffset,
        });
        if (
          actPosition < stickyOffset.top
          && actPosition + contentDiv.offsetHeight > 0
        ) {
          backToTop
            .removeClass('has-light-bg has-dark-bg')
            .addClass(
              contentDiv.hasClass('has-light-bg') ? 'has-light-bg' : 'has-dark-bg',
            );
          return false;
        }
      });
    };
  }

  registerMoveTo() {
    return () => {
      const easeFunctions = {
        easeInQuad: (currentTime, startValue, changeInValue, duration) => {
          let time = currentTime;
          time /= duration;
          return changeInValue * time * time + startValue;
        },
        easeOutQuad: (currentTime, startValue, changeInValue, duration) => {
          let time = currentTime;
          time /= duration;
          return -changeInValue * time * (time - 2) + startValue;
        },
      };
      const moveTo = new MoveTo({
        ease: 'easeInQuad',
      },
      easeFunctions);
      moveTo.registerTrigger(this.moveTo);
    };
  }
}
