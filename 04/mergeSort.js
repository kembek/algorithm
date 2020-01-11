// Функция слияния
const merge = (arrFirst, arrSecond) => {
  console.log("\nmerge\n");

  // массив с результатом
  const arr = [];
  let i = 0,
    j = 0;

  while (i < arrFirst.length && j < arrSecond.length) {
    arr.push(arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]);
  }

  console.log(arrFirst, arrSecond);
  console.log(arrFirst.slice(i), arrSecond.slice(j));
  return [...arr, ...arrFirst.slice(i), ...arrSecond.slice(j)];
};

// Функция для сортировки слиянием
const mergeSort = (arr, side) => {
  console.log(side);
  // если массив пуст или имеет один элемент
  if (!arr || arr.length < 2) {
    return arr;
  }

  // находим середину для разделения массива
  const middle = Math.floor(arr.length / 2);

  // левый и правый массив
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);

  // вызываем функция слияния
  const s = merge(mergeSort(arrLeft, "left"), mergeSort(arrRight, "right"));
  console.log("Merge Result", s);
  return s;
};

console.log(mergeSort([2, 3, 1, 8, 5, 6]));
