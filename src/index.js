import _join from 'lodash/join';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());