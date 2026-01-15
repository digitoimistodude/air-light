// Calculate burger menu position
function calculateBurgerMenuPosition() {
  // If nav-toggle, site-header or main-menu not found, bail
  if (!document.getElementById('nav-toggle') || !document.querySelector('.site-header') || !document.getElementById('menu-items-wrapper')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No nav-toggle or site-header found.');

    return;
  }

  // Set viewport
  const viewportWidth = document.documentElement.clientWidth || document.body.clientWidth;

  // Get --breakpoint-nav from CSS
  const breakpointNav = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-nav'), 10);

  // Get the height of .site-header and #nav-toggle
  // Calculate the top position of the toggle to be exactly in the center vertically
  const siteHeaderHeight = document.querySelector('.site-header').offsetHeight;

  // Set navigation position from top if on mobile
  if (viewportWidth <= breakpointNav) {
    document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight}px`;
    document.getElementById('menu-items-wrapper').style.height = `calc(100vh - ${siteHeaderHeight}px)`;

    // If there is air-notification element(s), calculate top and height of menu-items-wrapper
    if (document.querySelector('.air-notification')) {
      // Get air-notification element(s)
      const airNotifications = document.querySelectorAll('.air-notification');

      // Get the height of air-notification(s)
      let airNotificationsHeight = 0;
      airNotifications.forEach((airNotification) => {
        airNotificationsHeight = airNotification.offsetHeight + airNotificationsHeight;
      });

      // Set the height and top of menu-items-wrapper
      document.getElementById('menu-items-wrapper').style.height = `calc(100vh - ${siteHeaderHeight + airNotificationsHeight}px)`;
      document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight + airNotificationsHeight}px`;

      // When air-notification is closed, recalculate the height of menu-items-wrapper
      airNotifications.forEach((airNotification) => {
        const button = airNotification.querySelector('button');
        const currentNotificationHeight = airNotification.offsetHeight;
        if (button) {
          button.addEventListener('click', () => {
            airNotificationsHeight -= currentNotificationHeight;
            document.getElementById('menu-items-wrapper').style.height = `calc(100vh - ${siteHeaderHeight + airNotificationsHeight}px)`;
            document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight + airNotificationsHeight}px`;
          });
        }
      });
    }
  } else {
    document.getElementById('menu-items-wrapper').style.top = '0';
    document.getElementById('menu-items-wrapper').style.height = 'auto';
  }
}

export default calculateBurgerMenuPosition;
