// Event listener helper function
function addMultipleEventListeners(element, events, handler) {
  events.forEach((e) => element.addEventListener(e, handler));
}

export default addMultipleEventListeners;
