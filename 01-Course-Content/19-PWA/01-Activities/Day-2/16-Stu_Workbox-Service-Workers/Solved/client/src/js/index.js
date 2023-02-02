import { boxClick } from './box';
import { headerClick } from './header';
// Require registerSW method
import { registerSW } from './register-sw';
import '../css/style.css';
import Yellow from '../images/yellow-robot.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

document.getElementById('box').src = Yellow;

// Call registerSW method
registerSW();
