const { stepCount } = require("../utils");

function binarySearch(arr, findItem) {
  let low = 0,
    high = arr.length - 1;

  return (function rec() {
    stepCount();
    
    let mid = Math.floor((low + high) / 2);
    let value = arr[mid];
console.log("mid", mid)
    if (value === findItem) {
      return mid;
    }

    if (low <= high) {
      if (value > findItem) {
        high = mid - 1;
        return rec();
      } else {
        low = mid + 1;
        return rec();
      }
    }

    return null;
  })();
}
const data = [1, 3, 5, 7, 9];

console.log("Finded index", binarySearch(data, 3));
console.log(stepCount.step);
console.log("Result", data[binarySearch(data, 3)]);
