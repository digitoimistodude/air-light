/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:21:23
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-02-20 14:58:42
 */
// Calculate burger menu position
function calculateBurgerMenuPosition() {
  // If nav-toggle, site-header or main-menu not found, bail
  if (!document.getElementById('nav-toggle') || !document.querySelector('.site-header') || !document.getElementById('menu-items-wrapper')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No nav-toggle or site-header found.');

    return;
  }

  // Set viewport
  let viewportWidth = window.innerWidth;

  // Reinit for resize function
  // eslint-disable-next-line max-len
  viewportWidth = viewportWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Get --width-max-mobile from CSS
  const widthMaxMobile = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile'), 10);

  // Get the height of .site-header and #nav-toggle
  // Calculate the top position of the toggle to be exactly in the center vertically
  const siteHeaderHeight = document.querySelector('.site-header').offsetHeight;
  const navToggleHeight = document.getElementById('nav-toggle').offsetHeight;

  // Set the top position of the toggle
  document.getElementById('nav-toggle').style.top = `${(siteHeaderHeight - navToggleHeight) / 2}px`;

  // Set navigation position from top if on mobile
  if (viewportWidth <= widthMaxMobile) {
    document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight}px`;

    // If there is a sticky .air-notification element, add its height to the top position
    if (document.querySelector('.air-notification')) {
      const airNotificationHeight = document.querySelector('.air-notification').offsetHeight;
      document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight + airNotificationHeight}px`;

      // Remove the notification height as soon as .air-notification-close is clicked
      document.querySelector('.air-notification-close').addEventListener('click', () => {
        document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight}px`;
      });
    }
  } else {
    document.getElementById('menu-items-wrapper').style.top = '0';
  }
}

export default calculateBurgerMenuPosition;
