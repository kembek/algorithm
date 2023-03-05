const createMatrix = (rows = 0, columns = 0) => {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix[i] = Array(columns).fill(0);
  }

  return matrix;
};

const longestSubString = (firstWord = "", secondWord = "") => {
  const matrix = JSON.parse(
    JSON.stringify(createMatrix(firstWord.length, secondWord.length))
  );
  let sizeSequence = 0;
  let indexSequence = 0;

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < secondWord.length; j++) {
      if (firstWord[i] === secondWord[j]) {
        matrix[i][j] = (i && j) > 0 ? matrix[i - 1][j - 1] + 1 : 1;

        if (matrix[i][j] >= sizeSequence) {
          sizeSequence = matrix[i][j];
          indexSequence = i + 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  return firstWord.slice(indexSequence - sizeSequence, indexSequence);
};

console.log(longestSubString("vista", "hish")); // "is"
console.log(longestSubString("fish", "hish")); // "ish"

const longestCommonSubSequence = (firstWord = "", secondWord = "") => {
  const matrix = JSON.parse(
    JSON.stringify(createMatrix(firstWord.length, secondWord.length))
  );

  if (matrix.length === 0 || matrix[0].length === 0) return 0;

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < secondWord.length; j++) {
      if (firstWord[i] === secondWord[j]) {
        matrix[i][j] = (i && j) > 0 ? matrix[i - 1][j - 1] + 1 : 1;
      } else {
        matrix[i][j] = Math.max(
          i > 0 ? matrix[i - 1][j] : 0,
          j > 0 ? matrix[i][j - 1] : 0
        );
      }
    }
  }

  return matrix[firstWord.length - 1][secondWord.length - 1];
};

console.log(longestCommonSubSequence("fish", "fosh")); // 3
console.log(longestCommonSubSequence("fort", "fosh")); // 2
