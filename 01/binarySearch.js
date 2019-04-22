const { stepCount, generateArray } = require("../utils");

function binarySearch(arr, findElem) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let value = arr[mid];
    stepCount();
    if (value === findElem) return mid;

    if (value > findElem) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}
const data = [1, 3, 5, 7, 9];
const bigData = generateArray(1000000);
console.log("Finded index", binarySearch(data, 3));
console.log("step", stepCount.step);
console.log("Result", bigData[binarySearch(data, 3)]);
