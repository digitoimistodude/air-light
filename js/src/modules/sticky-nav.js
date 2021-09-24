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
}

window.addEventListener('scroll', stickyNav);
