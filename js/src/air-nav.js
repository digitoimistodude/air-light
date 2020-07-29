export default class AirNav {

  constructor(target) {
    const args = {
      toggled: false, // Initial state
      classes: {
        toggledOn: 'toggled-on',
        toggledOff: 'toggled-off',
        animate: 'animate',
      },
      delay: 1000, // Animation delay in milliseconds, false/0 to disable animations
      toggleElements: [ // Additional selectors to set toggles on
        'body',
        '.main-navigation-wrapper',
      ],
    }
    debugger;
    this.navigation = target;
    this.args = args;
    this.state = this.args.toggled ? 'toggledOff' : 'toggledOn';

    // Find additional toggle elements and set initial
    this.toggleElements = document.querySelectorAll(this.args.toggleElements);
    this.toggleElements.forEach(element => element.classList.add(this.navigation.id + '-' + this.args.classes[this.state]));

    // If toggles are not defined in the instance, try to find them in DOM
    if ( ! args.hasOwnProperty('toggles') ) {
      args.toggles = document.querySelectorAll('[data-air-nav-toggle=' + target.id + ']');
    }

    args.toggles.forEach(toggle => this.initToggle(toggle));
    this.initNavigation();
  }

  // Set initial values to nav container
  initNavigation() {
    this.navigation.setAttribute('aria-expanded', this.args.toggled );
    this.navigation.classList.add( this.args.toggled ? this.args.classes.toggledOn : this.args.classes.toggledOff );
  }

  /**
   * Initialize a menu toggle
   */
  initToggle(menuToggle) {
    menuToggle.setAttribute('aria-expanded', this.args.toggled );
    menuToggle.classList.add(this.args.classes[this.state]);
    menuToggle.addEventListener('click', e => {
      // Let animation finish
      if (this.animating) {
        return;
      }
      this.toggleClick();
    });
  }

  /**
   * Event listener callback for an toggle click
   */
  toggleClick() {
    // Find out what was the current state about to change
    this.lastState = this.args.toggled ? 'toggledOn' : 'toggledOff';

    if ( this.args.delay ) {
      this.addClass(this.args.classes.animate)
      this.animating = true;

      window.setTimeout(e => {
        this.toggleEvent();
        this.animating = false;
        this.removeClass(this.args.classes.animate)

      }, this.args.delay);

    } else {
      this.toggleEvent();
    }
  }

  /**
   * Toggle event callback
   */
  toggleEvent() {
    // Toggle the state
    this.args.toggled = !this.args.toggled;
    this.state = this.args.toggled ? 'toggledOn' : 'toggledOff';

    this.setAttributes();

    this.addClass(this.args.classes[this.state]);
    this.removeClass(this.args.classes[this.lastState]);
  }

  addClass(className) {
    this.navigation.classList.add(className);

    this.args.toggles.forEach(toggle => {
      toggle.classList.add(className);
    });

    this.toggleElements.forEach(element => {
      element.classList.add(this.navigation.id + '-' + className);
    });
  }

  removeClass(className) {
    this.navigation.classList.remove(className);

    this.args.toggles.forEach(toggle => {
      toggle.classList.remove(className);
    });

    this.toggleElements.forEach(element => {
      element.classList.remove(this.navigation.id + '-' + className);
    });
  }

  setAttributes() {
    this.navigation.setAttribute('aria-expanded', this.args.toggled )

    // Set toggles attrs
    this.args.toggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', this.args.toggled )
    });
  }

}