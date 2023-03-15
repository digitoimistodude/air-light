/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:19:27
 * @Last Modified by:   Michael Bourne
 * @Last Modified time: 2023-03-09 12:19:32
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
  out.bottom = bounding.bottom
    >= (document.documentElement.clientHeight || document.body.clientHeight);
  out.right = bounding.right
    >= (document.documentElement.clientWidth || document.body.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;

  return out;
};

export default isOutOfViewport;
