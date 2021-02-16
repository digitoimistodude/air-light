// Gutengerg magic for alignright and alignleft images
const figures = [
  ...document.querySelectorAll('figure'),
];
figures.forEach((figure) => {
  const img = figure.querySelector('img');
  if (typeof img === 'undefined') {
    return;
  }
  figure.style.setProperty('--child-img-width', `${img.clientWidth}px`);
});
