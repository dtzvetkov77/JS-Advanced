function printNElement(arr, step) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % step === 0) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
printNElement(["5", "20", "31", "4", "20"], 2);
