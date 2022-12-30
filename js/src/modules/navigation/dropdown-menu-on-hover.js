/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:24:53
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 01:33:39
 */
// Dropdown menu function
function dropdownMenuOnHover(items) {
  // Optional timeout
  const hoverIntentTimeout = 0;

  items.forEach((li) => {
    // eslint-disable-next-line func-names
    li.addEventListener('mouseover', function () {
      // Get --width-max-mobile from CSS
      const widthMaxMobile = getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile');

      // Let's see if we are on mobile viewport
      const isMobile = window.matchMedia(`(max-width: ${widthMaxMobile})`).matches;

      // If rules don't apply, bail
      if (li.classList.contains('removing-hover') || isMobile) {
        return;
      }

      // Add hover classes
      this.classList.add('hover-intent');
      this.classList.add('hovering');
      this.parentNode.classList.add('hover-intent');
      this.parentNode.classList.add('hovering');

      // Remove hovering class after a while
      setTimeout(() => {
        this.classList.remove('hovering');
        this.parentNode.classList.remove('hovering');
      }, 500);

      document.addEventListener('keydown', (keydownMouseoverEvent) => {
        // If rules don't apply, bail
        if (this.classList.contains('removing-hover') || !this.classList.contains('hovering') || !this.parentNode.classList.contains('hovering')) {
          return;
        }

        // Close navigation on Escape while hovering the navigation
        if (keydownMouseoverEvent.key === 'Escape') {
          li.classList.remove('hover-intent');
          li.parentNode.classList.remove('hover-intent');
          li.parentNode.parentNode.classList.remove('hover-intent');

          // Add class removing-hover to prevent the menu from opening again when moving the mouse
          li.classList.add('removing-hover');
          li.parentNode.classList.add('removing-hover');

          // Remove removing-hover class after a while to re-initialize the menu
          setTimeout(() => {
            this.classList.remove('removing-hover');
            this.parentNode.classList.remove('removing-hover');
          }, 500);
        }
      });

      // Remove removing-hover class after a while to re-initialize the menu
      setTimeout(() => {
        this.classList.remove('removing-hover');
        this.parentNode.classList.remove('removing-hover');
      }, 500);
    });

    // eslint-disable-next-line func-names
    li.addEventListener('mouseleave', function () {
      setTimeout(() => {
        // Remove hover-intent class on mouse leave
        this.classList.remove('hover-intent');
        this.parentNode.classList.remove('hover-intent');

        const dropdownToggles = this.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach((dropdownToggle) => {
          // Set aria-expanded to false for all dropdown-toggle elements
          dropdownToggle.setAttribute('aria-expanded', 'false');

          if (dropdownToggle.parentNode.querySelector('.dropdown')) {
            const linkText = dropdownToggle.parentNode.querySelector('.dropdown').textContent;

            // Set aria-label to expand for all dropdown-toggle elements
            // eslint-disable-next-line camelcase, no-undef
            dropdownToggle.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
          }
        });
      }, hoverIntentTimeout);

      setTimeout(() => {
        // Remove removing-hover class after a while to re-initialize the menu
        this.classList.remove('removing-hover');
        this.parentNode.classList.remove('removing-hover');
      }, 500);
    });
  });
}

export default dropdownMenuOnHover;
