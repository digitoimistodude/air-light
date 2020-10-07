/**
 * Back to top button
 */

import MoveTo from 'moveto';
import { debounce } from './helpers';

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
    window.addEventListener('scroll', debounce(this.toggleBackToTop(), 50));
    window.addEventListener('scroll', debounce(this.changeBackToTopColor(), 10));
    document.addEventListener('DOMContentLoaded', this.registerMoveTo());
  }

  toggleBackToTop() {
    return () => {
      this.backToTop.classList.toggle('is-visible', window.scrollY > this.offset);
      this.backToTop.classList.toggle('fade-out', window.scrollY > this.offsetOpacity);
    };
  }

  // Accessibility: Ensure back to top is right color on right background
  // Note: Needs .has-light-bg or .has-dark-bg class on all blocks
  changeBackToTopColor() {
    return () => {
      const stickyTop = this.backToTop.getBoundingClientRect().top;
      const stickyHeight = this.backToTop.offsetHeight;
      for (let index = 0; index < this.contentDivs.length; index += 1) {
        const contentDiv = this.contentDivs[index];
        const contentBottom = parseInt(contentDiv.getBoundingClientRect().bottom, 10);
        const contentTop = parseInt(contentDiv.getBoundingClientRect().top, 10);

        if (contentBottom > stickyTop + (stickyHeight / 3) && contentTop < stickyTop + (stickyHeight / 2)) {
          this.backToTop.classList.remove('has-light-bg', 'has-dark-bg');
          this.backToTop.classList.add(
            contentDiv.classList.contains('has-light-bg') ? 'has-light-bg' : 'has-dark-bg',
          );
          break;
        }
      }
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
      moveTo.registerTrigger(this.backToTop);
    };
  }
}
