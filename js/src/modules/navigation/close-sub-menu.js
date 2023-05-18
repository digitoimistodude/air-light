/**
 * @Author: Tuomas Marttila
 * @Date:   2023-03-22 09:20:46
 * @Last Modified by:   Tuomas Marttila
 * @Last Modified time: 2023-04-12 10:32:04
 */
function closeSubMenu(li) {
  // If menu item is not a dropdown then do nothing
  if (!li.querySelector('.dropdown-toggle') && !li.querySelector('.sub-menu')) {
    return;
  }

  // Get the dropdown-button
  const dropdownButton = li.querySelector('.dropdown-toggle');

  // Get the submenu
  const subMenu = li.querySelector('.sub-menu');

  // If the dropdown-menu is not open, bail
  if (!subMenu.classList.contains('toggled-on')) {
    return;
  }

  // Remove the open class from the dropdown-menu
  subMenu.classList.remove('toggled-on');

  // Remove the open class from the dropdown-button
  dropdownButton.classList.remove('toggled-on');

  // Remove the aria-expanded attribute from the dropdown-button
  dropdownButton.setAttribute('aria-expanded', 'false');

  // Get the link text that is children of this item
  const linkText = dropdownButton.innerHTML;

  // Add the aria-label to the dropdown button
  // eslint-disable-next-line camelcase, no-undef
  dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
}

export default closeSubMenu;
