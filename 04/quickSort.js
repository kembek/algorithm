const { randomArray } = require("../utils");

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const [pivot] = arr.splice(Math.floor(Math.random() * arr.length), 1);
  const less = [],
    greater = [];

  arr.forEach(element => {
    if (element <= pivot) {
      less.push(element);
    } else {
      greater.push(element);
    }
  });

  // const less = arr.filter(l => l <= pivot);
  // const greater = arr.filter(g => g > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const a = randomArray(10);
console.log(a);
console.log("Quick sort", quickSort(a));
