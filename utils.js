function generateArray(size) {
  const result = [];
  for (let i = 1; i <= size; ++i) {
    result.push(i);
  }
  return result;
}

function randomArray(size) {
  const arr = [];

  for (let i = 0; i <= size; ++i) {
    arr.push(Math.round(Math.random() * size));
  }

  return arr;
}

function stepCount() {
  return (function() {
    ++stepCount.step;
  })();
}
stepCount.step = 0;

module.exports = { stepCount, generateArray, randomArray };



