function generateArray(size) {
  const result = [];
  for (let i = 1; i <= size; ++i) {
    result.push(i);
  }
  return result;
}

function stepCount() {
  return (function() {
    ++stepCount.step;
  })();
}
stepCount.step = 0;

module.exports = { stepCount,generateArray };
