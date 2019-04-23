function factorial(number) {
  return number === 1 ? 1 : number * factorial(--number);
}

const factorialEs6 = number =>
  number === 1 ? 1 : number * factorialEs6(--number);

console.log(factorial(5));

console.log(factorialEs6(5));
