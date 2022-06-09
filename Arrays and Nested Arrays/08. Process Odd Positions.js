function processOddPositions(arr) {
  let newArr = arr.filter((x,i) => i % 2 !== 0).map(x => x * 2).reverse();
  console.log(newArr.join(' '));
}
processOddPositions([3, 0, 10, 4, 7, 3]);
