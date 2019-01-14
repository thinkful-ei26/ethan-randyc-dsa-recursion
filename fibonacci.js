'use strict';

// function fibonaccify(num, counterArray) {
//   if (counterArray[counterArray.length - 1] === num) {
//     return 0;
//   }

//   // let array = [0, 1];

//   console.log(counterArray);
//   let fibValue = counterArray[(counterArray.length - 1)] + counterArray[(counterArray.length - 2)];
//   console.log(fibValue);
//   // console.log(counterArray[counterArray.length - 1]);
//   console.log(counterArray.length);
//   return fibValue + fibonaccify(num, [...counterArray, counterArray.length ]); 
// }

// console.log(fibonaccify(5, [0, 1]));

// function fibonaccify(num, value) {
//   if (value === num) {
//     return 0;
//   }

//   console.log(value);
//   // let fibValue = counterArray[(counterArray.length - 1)] + counterArray[(counterArray.length - 2)];
//   let fibValue = 
//   return fibValue + fibonaccify(num, value + 1); 
// }

// console.log(fibonaccify(5));

function fibonaccify(num) {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  // if (num === 2) {
  return fibonaccify(num - 2) + fibonaccify(num - 1);
  // }

  // if (num === 3) {
  //   return fibonaccify(num - 2) + fibonaccify(num -1);
  // }

  // return fibonaccify(n)
}

console.log(0, `${fibonaccify(0)}`);
console.log(1, `${fibonaccify(1)}`);
console.log(2, `${fibonaccify(2)}`);
console.log(3, `${fibonaccify(3)}`);

console.log(7, `${fibonaccify(7)}`);