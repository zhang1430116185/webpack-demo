
var root = document.getElementById('root');
var p = document.createElement('p');
p.innerHTML = 'p';
root.appendChild(p);

import c3 from './c3.jpg';
import './index.css';

// var c3 = require('./c3.jpg');
var img = new Image();
img.src = c3;
img.classList.add('avatar');
root.appendChild(img);