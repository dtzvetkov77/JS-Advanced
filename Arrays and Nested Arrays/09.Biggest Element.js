function biggestElement(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].sort((a, b) => a - b);
    newArr.push(sorted.pop());
  }
  newArr = newArr.sort((a, b) => a - b);
  console.log(newArr.pop());
}
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
