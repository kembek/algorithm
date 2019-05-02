function maxNumber(numbers) {
  return numbers.reduce((max, current) => (max <= current ? current : max), 0);
}

console.log(maxNumber([1, 5, 3, 4]));
