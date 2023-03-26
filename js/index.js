// パララックス

//ES6 import
import simpleParallax from 'simple-parallax-js';

//CommonJS
const simpleParallax = require('simple-parallax-js');

const image = document.getElementsByClassName('kv__image--03');
new simpleParallax(image,{
    operation: 'up',
    scale: 1.5,
    delay: 2,
    transition: 'cubic-bezier(0,0,0,.1)',
    maxTransition: 40
});