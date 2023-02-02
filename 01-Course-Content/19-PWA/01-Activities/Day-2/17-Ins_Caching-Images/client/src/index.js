import './css/style.css';

import header from './js/header';

import Three from './images/three.png';
import Four from './images/four.png';

document.getElementById("three").src= Three;
document.getElementById("four").src= Four;

// Register service worker
// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
