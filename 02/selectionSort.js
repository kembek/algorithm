const { stepCount } = require("../utils");

// find small
function findSmall(arr) {
  let small = arr[0];
  let index = 0;

  for (let i = 0; i < arr.length; ++i) {
    stepCount();
    if (small >= arr[i]) {
      small = arr[i];
      index = i;
    }
  }

  return index;
}

const arr = [5, 3, 1, 5, 6, 7, -1, -9];

// console.log(findSmall(arr));

// delete small and push to begin in new array
function sort(arr) {
  const result = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; ++i) {
    stepCount();
    let smallIndex = findSmall(arr);

    result.push(arr.splice(smallIndex, 1)[0]);
  }

  return result;
}

console.log(sort(arr));
console.log("step", stepCount.step);

