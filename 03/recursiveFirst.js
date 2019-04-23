function recursive(number) {
  console.log(number);

  // базовый случай
  if (!number) return; 

  // рекурсивный случай
  return recursive(--number);
}

recursive(5);
