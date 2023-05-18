/**
 * @Author: Tuomas Marttila
 * @Date:   2023-02-28 10:38:36
 * @Last Modified by:   Tuomas Marttila
 * @Last Modified time: 2023-03-31 12:00:41
 */

function convertDropdownMenuItems(items) {
  items.forEach((li) => {
  // Get dropdown toggle button
    const dropdownToggle = li.querySelector('.dropdown-toggle');

    // Get dropdown menu item data
    const menuItemTitle = li.querySelector('a > span').innerHTML;
    const menuItemLinkElement = li.querySelector('a');
    const menuItemLink = menuItemLinkElement.href;

    // Remove dropdown menu item link
    menuItemLinkElement.remove();

    // Add dropdown menu item title to dropdown toggle button
    dropdownToggle.innerHTML = menuItemTitle;

    // Create new nav element
    const navElement = document.createElement('li');
    navElement.classList.add('menu-item');

    // Add dropdown menu item data to nav element
    // Create elements
    const navElementLink = document.createElement('a');
    const navElementLinkSpan = document.createElement('span');

    // Add data to elements
    // Span
    navElementLinkSpan.innerHTML = menuItemTitle;
    navElementLinkSpan.setAttribute('itemprop', 'name');
    // Link
    navElementLink.setAttribute('itemprop', 'url');
    navElementLink.href = menuItemLink;
    navElementLink.classList.add('dropdown-item');

    // Append elements
    navElementLink.appendChild(navElementLinkSpan);
    navElement.appendChild(navElementLink);

    // Get the sub menu first child and add the new nav element before it
    const subMenuFirstChild = li.querySelector('.sub-menu > li');
    const subMenu = li.querySelector('.sub-menu');
    subMenu.insertBefore(navElement, subMenuFirstChild);
  });
}

export default convertDropdownMenuItems;
