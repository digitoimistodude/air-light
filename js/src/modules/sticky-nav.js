/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-04-22 08:06:03
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-12 15:09:18
 */
// If you use this module,
// remember to comment out window.scrollTo(0, 0); from navigation.js
function stickyNav() {
  const header = document.querySelector('.site-header');
  const navbar = document.querySelector('.nav-container');
  const headerHeight = getComputedStyle(header).height.split('px')[0];
  const scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add('is-fixed');
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove('is-fixed');
  }

  if (window.pageYOffset > headerHeight) {
    navbar.classList.add('is-fixed');
  }
}

window.addEventListener('scroll', stickyNav);
window.addEventListener('DOMContentLoaded', stickyNav);
