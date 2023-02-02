import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
import Yellow from '../images/yellow-robot.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

document.getElementById('box').src = Yellow;

// TODO: Add logic to register service worker. The logic can be added as a new module and imported or added directly in this file.