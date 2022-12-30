/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:19:27
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 00:19:32
 */
// Check if an element is out of the viewport
// eslint-disable-next-line func-names
const isOutOfViewport = function (elem) {
  // Get element's bounding
  const bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  const out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;

  return out;
};

export default isOutOfViewport;
