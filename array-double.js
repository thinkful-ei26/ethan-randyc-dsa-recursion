'use strict';

function arrayDoubler (arr) {

  // let newArr; 

  if(arr.length === 0){
    // console.log(newArr);
    return [];
  }

  // const newArr = [];

  // const doubledVal =  arr[0] * 2;
  // newArr.push(doubledVal);
  // console.log(newArr);
  // return [newArr + arrayDoubler(arr.slice(1))];


  return [(arr[0] * 2), ...arrayDoubler(arr.slice(1))];
}

console.log(arrayDoubler([1,2,3]));
