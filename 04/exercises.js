"use strict";

function arrSum(arr) {
  if (!arr.length) {
    return 0;
  }
  const last = arr.pop();

  return last + arrSum(arr);
}

function arrMultiple(arr) {
  if (!arr.length) {
    return 1;
  }

  const last = arr.pop();

  return last * arrMultiple(arr);
}

function arrCount(arr) {
  if (!arr.length) {
    return 0;
  }

  arr.pop();
  return 1 + arrCount(arr);
}

const data = [1, 2, 3, 4];
const secondData = [1, 2, 3, 4];

console.log(arrSum(data));
console.log(arrMultiple(secondData));
console.log(arrCount([1, 2, 3, 4]));
