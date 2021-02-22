// Gutengerg magic for alignright and alignleft images
const figures = [
  ...document.querySelectorAll('figure'),
];
figures.forEach((figure) => {
  const img = figure.querySelector('img');
  if (typeof img === 'undefined' || !('clientWidth' in img)) {
    return;
  }
  figure.style.setProperty('--child-img-width', `${img.clientWidth}px`);
});
