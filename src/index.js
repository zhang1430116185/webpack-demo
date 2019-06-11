import "@babel/polyfill";

var root = document.getElementById('root');
var p = document.createElement('p');
p.innerHTML = 'p';
root.appendChild(p);

// css
import c3 from './c3.jpg';
import './index.css';

import createImg from './createImg'

createImg();
var img = new Image();
img.src = c3;
img.classList.add('avatar');
root.appendChild(img);

// 字体
var p1 = document.createElement('div');
p1.className = 'iconfont icon-danweixuanze';
root.appendChild(p1);

// source-map
// conslle.log('hello world');

// webpack-dev-server
console.log('hello world111sssssswww');

// HMR
import './style.css';
var btn = document.createElement('button');
btn.innerHTML = '点击';
document.body.appendChild(btn);
btn.onclick = function(){
    var div = document.createElement('div');
    div.innerHTML = 'item';
    document.body.appendChild(div);
}

import counter from './counter';
import number from './number';

counter();
number();

if(module.hot) {
	module.hot.accept('./number', () => {
		document.body.removeChild(document.getElementById('number'));
		number();
	})
}

// es6  babel
const arr = [
	new Promise(() => {}),
	new Promise(() => {})
]
arr.map((item) => {
	console.log(item);
})
// tree shaking