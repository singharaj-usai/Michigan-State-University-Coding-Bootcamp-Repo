import One from '../images/one.png';
import Two from '../images/two.png';
import Three from '../images/three.png';
import Four from '../images/four.png';

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.src === One) {
    box.src = Two;
  } else if (box.src === Two) {
    box.src = Three;
  } else if (box.src === Three) {
    box.src = Four;
  } else {
    box.src = One;
  }
};
