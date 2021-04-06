// Gutengerg magic for alignright and alignleft images
const figures = [
  ...document.querySelectorAll('figure'),
];
figures.forEach((figure) => {
  const img = figure.querySelector('img');
  if (typeof img === 'undefined' || !img) {
    return;
  }
  figure.style.setProperty('--width-child-img', `${img.clientWidth}px`);
});
