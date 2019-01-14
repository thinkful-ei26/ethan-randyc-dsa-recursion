'use strict';

function stringReverse(str) {
  if (!str.length) {
    return '';
  }

  return str[str.length - 1] + stringReverse(str.slice(0, str.length - 1));
}

console.log(stringReverse('food'));