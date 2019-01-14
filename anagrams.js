'use strict';

function anagramize(word) {
  if (!word.length) {
    return '';
  }

  if (word.length === 1){
    console.log(word[0]);
  }

  if (word.length === 2){
    console.log(word[0] + word[1]);
    console.log(word[1] + word[0]);
  }

  if (word.length === 3){
    console.log(word[0] + word[1] + word[2]);
    console.log(word[0] + word[2] + word[1]);
    console.log(word[1] + word[0] + word[2]);
    console.log(word[1] + word[2] + word[0]);
    console.log(word[2] + word[0] + word[1]);
    console.log(word[2] + word[1] + word[0]);
  }

  // if(word === 'do') {
  //   console.log('do');
  //   console.log('od');
  // }

  // if (word === 'dog') {
  //   console.log('dog');
  //   console.log('dgo');
  //   console.log('odg');
  //   console.log('ogd');
  //   console.log('gdo');
  //   console.log('god');
  // }
}

anagramize('dog');