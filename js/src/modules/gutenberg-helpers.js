const setFigureWidth = (figure) => {
  const img = figure.querySelector('img');
  if (!img || typeof img !== 'object' || !('clientWidth' in img)) {
    return;
  }
  figure.style.setProperty('--child-img-width', `${img.clientWidth}px`);
};

const setFigureWidths = (figures) => {
  // Gutengerg magic for alignright and alignleft images
  figures.forEach((figure) => {
    setFigureWidth(figure);
  });
};

const setLazyLoadedFigureWidth = (image) => {
  if (image.parentElement.tagName === 'figure') {
    setFigureWidth(image.parentElement);
  }
};
export { setFigureWidths, setLazyLoadedFigureWidth };
