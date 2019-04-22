const { stepCount } = require("../utils");
let somed = [5, 3, 1, 5, 6, 7, -1, -9];

// 1. Method
somed.sort((a, b) => {
  stepCount();
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});

// 2. Method
somed.sort((a, b) => {
  return a - b;
});

console.log("step", stepCount.step);
