import MoveTo from 'moveto';

export default function registerMoveTo() {
  return function () {
    const easeFunctions = {
      easeInQuad: (currentTime, startValue, changeInValue, duration) => {
        let time = currentTime;
        time /= duration;
        return changeInValue * time * time + startValue;
      },
      easeOutQuad: (currentTime, startValue, changeInValue, duration) => {
        let time = currentTime;
        time /= duration;
        return -changeInValue * time * (time - 2) + startValue;
      },
    };
    const moveTo = new MoveTo({
      ease: 'easeInQuad',
    },
    easeFunctions);
    const triggers = document.getElementsByClassName('js-trigger');
    for (let i = 0; i < triggers.length; i += 1) {
      moveTo.registerTrigger(triggers[i]);
    }
  }
}
