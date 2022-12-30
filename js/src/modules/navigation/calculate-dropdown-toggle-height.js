/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:22:16
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 00:22:31
 */
// Calculate mobile nav-toggle height
function calculateDropdownToggleHeight() {
  // If .dropdown-toggle not found, bail
  if (!document.querySelectorAll('.dropdown-toggle')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No dropdown-toggles found.');

    return;
  }

  // Find all .dropdown-toggle elements on mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Loop through dropdown toggles
  dropdownToggles.forEach((dropdownToggle) => {
    // Get the height of previous element
    const previousElementHeight = dropdownToggle.previousElementSibling.offsetHeight;

    // Set the height of the dropdown toggle
    // eslint-disable-next-line no-param-reassign
    dropdownToggle.style.height = `${previousElementHeight}px`;
  });
}

export default calculateDropdownToggleHeight;
