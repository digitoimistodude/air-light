/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:23:22
 * @Last Modified by:   Tuomas Marttila
 * @Last Modified time: 2023-04-12 09:23:38
 */
// Add proper link labels for screen readers
function a11yAddDropdownToggleLabelsClick(items) {
  items.forEach((li) => {
    // If .dropdown-toggle does not exist then do nothing
    if (!li.querySelector('.dropdown-toggle')) {
      return;
    }

    // Get the dropdown-button
    const dropdownButton = li.querySelector('.dropdown-toggle');

    // Get the link text that is children of this item
    const linkText = dropdownButton.innerHTML;
    // Add the aria-label to the dropdown button
    // eslint-disable-next-line camelcase, no-undef
    dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
  });
}

export default a11yAddDropdownToggleLabelsClick;
