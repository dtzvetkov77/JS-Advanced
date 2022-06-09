function smallestOfTwoNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let index = 0; index < 2; index++) {
    newArr.push(sortedArr[index]);
  }
  console.log(newArr.join(" "));
}
smallestOfTwoNumbers([30, 15, 50, 5]);
