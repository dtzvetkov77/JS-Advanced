function sameNumbers(number) {
  let num = String(number);
  let isSame = true;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
    if (num[0] !== num[i]) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}
sameNumbers(1234);
