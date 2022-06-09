function sumFirstAndLast(arr) {
  arr = arr.map((x) => Number(x));
  let first = arr.shift();
  let last = arr.pop();
  console.log(first + last);
}
sumFirstAndLast(["5", "10"]);
