'use strict';

//WORKS
//DRILL 1 

console.log('DRILL 1 >>> ');
 
let countSheep = (num) => {
 
  if(num === 0){
 
    return 0;

  }

  console.log('sheep ',num);
  
  countSheep(num - 1);

};

countSheep(6);
 

//DRILL 1 iterating version
// let countSheepI = (n) => {





// }

// console.log('DRILL 1 Iteration version >>> ',countSheepI(15));


//WORKS
//DRILL 2
let myArray = [5,8,9,1,3];
// let newArray = [];

let doubleValues = (array) => {

  //console.log(array.length);

  if(array.length === 0){

    return [];

  }
  
  return [(array[0] * 2), ...doubleValues(array.slice(1))];
      

};


console.log('DRILL 2 >>> ',doubleValues(myArray));



//WORKS
//DRILL 3 Reverse String:
 
let reverser = (aString) => {

  if(aString.length === 0){

    return '';

  } 

  return aString[aString.length - 1] + reverser(aString.slice(0,aString.length - 1));

};

console.log('DRILL 3 >>> ',reverser('OLLEH'));



//WORKS
//DRILL 4 nth Triangular Number:
let getTriangularNumber = (n) => {
 
  if(n === 0){

    return 0;
 
  }
 
  return n + getTriangularNumber(n - 1);
 
};
 
console.log('DRILL 4 >>> ',getTriangularNumber(3));
 


//WORKS
//DRILL 5 nth String Splitter:

let stringSplitter = (str, separator) => {

  let searchThis = str.search(separator);

  //console.log(searchThis);

  if(searchThis === -1){

    return str;  
 
  }

  let restOfString = str.slice(searchThis + 1, str.length);

  return str.slice(0,searchThis) + stringSplitter(restOfString,separator);

};
 
console.log('DRILL 5 >>> ',stringSplitter('the@is@so@much@fun','@'));




//DRILL 6 Binary Representation 

function decimalToBinary(input){
   
  if(input <=0){
 
    return 'The Binary version is ';
  }

  let binaryRep = Math.floor(input%2);
  
  return decimalToBinary(Math.floor(input/2)) + binaryRep;
 
}
 
console.log('DRILL 6 >>> ',decimalToBinary(5));



//DRILL 7 Factorial
let findFactorials = (num) => {

  if(num === 1){

    return num;

  }

  return num * findFactorials(num - 1);
 
};

console.log('DRILL 7 >>> ',findFactorials(3));



//DRILL 8 Fibonaci
let fibonaccilatorizor = (num) => {

  if(num === 0){
    return 0;
  }

  if(num === 1){
    return 1;
  }

  return fibonaccilatorizor(num - 2) + fibonaccilatorizor(num - 1);

};

console.log('DRILL 8 >>> ',fibonaccilatorizor(7));


//DRILL 9 Anagrams



//DRILL 10 Animal Hierarchy



//DRILL 11 Organization Chart