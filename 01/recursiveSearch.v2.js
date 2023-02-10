function binarySearch(arr, item) {
  let low = 0,
    high = arr.length - 1;

  const middleIndex = Math.floor((high + low) / 2);

  const element = arr[middleIndex];
  if (element === item) {
    // TODO: should return the found element index
    return element;
  }

  if (element > item) {
    return binarySearch(arr.slice(low, middleIndex + 1), item);
  }

  return binarySearch(arr.slice(middleIndex + 1, high + 1), item);
}

console.log(binarySearch([1, 2, 3], 3));
console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55], 15)
);
