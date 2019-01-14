'use strict';

function sheepJumper (num) {
  if (num === 0) {
    return;
  }

  console.log(`${num} - Another sheep jumps over the fence`);
  sheepJumper(num - 1);
}


sheepJumper(7);