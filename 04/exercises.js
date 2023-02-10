"use strict";

function getNumbersSum(nums) {
  if (!nums.length) {
    return 0;
  }
  const last = nums.pop();

  return last + getNumbersSum(nums);
}

function multipleNumbers(nums) {
  if (!nums.length) {
    return 1;
  }

  const last = nums.pop();

  return last * multipleNumbers(nums);
}

function getNumbersCount(nums) {
  if (!nums.length) {
    return 0;
  }

  nums.pop();
  return 1 + getNumbersCount(nums);
}

const numbers = [1, 2, 3, 4];

console.log(getNumbersSum(numbers));
console.log(multipleNumbers(numbers));
console.log(getNumbersCount(numbers));
