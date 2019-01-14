'use strict';

function numberTriagulator(num) {
  if (num === 0) {
    return 0;
  }

  return num + numberTriagulator(num - 1);
}

console.log(numberTriagulator(12));
