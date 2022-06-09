function increasingSubset(arr) {
  newArr = [];
  let biggestNum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= biggestNum) {
        newArr.push(arr[index]);
    }
    biggestNum = arr[index];
  }
  return newArr;
}
increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
