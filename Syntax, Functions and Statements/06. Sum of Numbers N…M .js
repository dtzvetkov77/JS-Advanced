function sumOfNumbers(n, m) {
  n = Number(n);
  m = Number(m);
  let sum = 0;
  for (let index = n; index <= m; index++) {
    sum += index;
  }
  return sum;
}
console.log(sumOfNumbers("-8", "20"));
