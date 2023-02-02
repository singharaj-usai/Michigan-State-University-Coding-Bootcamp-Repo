// This index.js file is our entry point file
// We import other modules and assets used in the app into this file

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
