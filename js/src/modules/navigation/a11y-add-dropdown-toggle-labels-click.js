/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:23:22
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-05-18 17:06:12
 */
// Add proper link labels for screen readers
function a11yAddDropdownToggleLabelsClick(items) {
  items.forEach((li) => {
    // If .dropdown-toggle does not exist then do nothing
    if (!li.querySelector('.dropdown-toggle')) {
      return;
    }

    // Add helper class to dropdown-toggle
    li.querySelector('.dropdown-toggle').classList.add('menu-item-clickable');

    // Remove .dropdown-toggle class
    li.querySelector('.dropdown-toggle').classList.remove('dropdown-toggle');

    // Get the dropdown-button
    const dropdownButton = li.querySelector('.menu-item-clickable');

    // Get the link text that is children of this item
    const linkText = dropdownButton.innerHTML;
    // Add the aria-label to the dropdown button
    // eslint-disable-next-line camelcase, no-undef
    dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
  });
}

export default a11yAddDropdownToggleLabelsClick;
