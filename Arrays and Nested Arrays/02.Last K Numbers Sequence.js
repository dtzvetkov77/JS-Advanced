function solve(length, previousNumbers) {
  let resultArr = [1];
  for (let index = 1; index < length; index++) {
    let sum = 0;
    let currIndex = index - 1;
    for (let i = 1; i <= previousNumbers; i++) {
      let number = resultArr[currIndex] == undefined ? 0 : resultArr[currIndex];
      currIndex--;
      sum += number;
    }
    resultArr.push(sum);
  }
  console.log(resultArr);
}
solve(6, 3);
