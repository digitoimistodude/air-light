// Gutengerg magic for alignright and alignleft images
const figures = [
  ...document.querySelectorAll('figure.alignright'),
  ...document.querySelectorAll('figure.alignleft'),
];
figures.forEach((figure) => {
  const img = figure.querySelector('img');
  if ( typeof img === 'undefined' ) {
    return;
  }
  figure.style.width = `${img.clientWidth}px`;
});
