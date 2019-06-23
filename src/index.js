// import "@babel/polyfill";

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
import {square} from './math.js';
console.log(square(2));

// lodash
// 同步
// import _ from 'lodash';
// console.log(_.join(['a','b','c'],'*'));

// 异步

function getComponent(){
	// 魔法注释，加上后，打包出来的js会是你注释的值，否则为一个id(如0)值
	return import(/*webpackChunkName:'lodash'*/'lodash').then(({ default: _ }) =>{
		var element = document.createElement('div');
		element.innerHTML = _.join(['zhang', 'yn'], '-');
		return element;
	})
}
document.addEventListener('click',() => {
	getComponent().then(element => {
		document.body.appendChild(element);
	});
});

// es7语法省去promise语法
// async function getComponent(){
// 	const { default: _ } = await import(/*webpackChunkName:'lodash'*/'lodash');
// 	const element = document.createElement('div');
//     element.innerHTML = _.join(['z', 'b'], '-');
//     return element;
// }

// prefetch

// document.addEventListener('click',() => {
// 	import(/* webpackPrefetch: true */ './click.js').then(({default:func}) => {
// 		func();
// 	})
// });

// 浏览器缓存
import _ from 'lodash';
import $ from 'jquery';
const dom = $('<div>');
dom.html(_.join(['z','y'],'-----'));
// $(body).append(dom);

// service work  PWA
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js')
//         .then(registration => {
//             console.log('service-worker registed');
//         }).catch(error => {
//             console.log('service-worker register error');
//         })
//     })
// }
import axios from 'axios';
axios.get('/react/api/header.json').then(function(res){
	console.log(res);
})