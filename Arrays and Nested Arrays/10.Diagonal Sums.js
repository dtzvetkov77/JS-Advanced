function diagonalSums(matrix) {
  let firstSum = 0;
  let secondSum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      firstSum = matrix[row] + matrix[col];
    }
  }
  console.log(firstSum);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
