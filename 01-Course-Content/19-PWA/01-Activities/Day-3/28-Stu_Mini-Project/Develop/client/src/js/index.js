import { Workbox } from 'workbox-window';
import '../css/styles.css';

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('./src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
