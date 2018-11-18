import _join from 'lodash/join';
import printMe from './print';
import './style.css';
import Icon from './mario.jpeg';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.classList.add('hello')

  element.appendChild(btn);
  // add the image to our existing div.
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());