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

    const previousElement = dropdownToggle.previousElementSibling;
    if (previousElement) {
      const previousElementHeight = previousElement.offsetHeight;
      // Set the height of the dropdown toggle
      // eslint-disable-next-line no-param-reassign
      dropdownToggle.style.height = `${previousElementHeight}px`;
    }
  });
}

export default calculateDropdownToggleHeight;
