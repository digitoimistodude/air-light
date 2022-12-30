/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:23:49
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-12-31 00:23:57
 */
// Event listener helper function
function addMultipleEventListeners(element, events, handler) {
  events.forEach((e) => element.addEventListener(e, handler));
}

export default addMultipleEventListeners;
