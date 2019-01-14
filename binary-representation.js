'use strict';

function representBinarily(num) {
  if (num <= 0) {
    return '';
  }

  let binary = Math.floor(num % 2);
  // console.log(binary);
  // console.log(Math.floor(num/2));

  return representBinarily(Math.floor(num/2)) + binary;

}

console.log(representBinarily(7));