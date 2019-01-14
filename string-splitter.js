'use strict';

function stringSplitter(string, separator){
  if (!string.length) {
    // if (!string.length || (string.length === 1 && string[0] === separator)) {

    return '';
  }
  
  
  // let arr =

  if (string[0] !== separator) {
    return [string[0] + stringSplitter(string.slice(1), separator)];
  }

  if (string[0] === separator) {
    // const newArr = [];
    // newArr.push(string[1]);
    return [', ' + stringSplitter(string.slice(1), separator)];
    // return [string[1] + stringSplitter(string.slice(2))];
  }

}

console.log(stringSplitter('food.dog', '.'));