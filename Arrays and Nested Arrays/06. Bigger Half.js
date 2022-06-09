function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let newArr = [];
  for (
    let index = Math.floor(sorted.length / 2);
    index < sorted.length;
    index++
  ) {
    newArr.push(sorted[index]);
  }
  return newArr
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
