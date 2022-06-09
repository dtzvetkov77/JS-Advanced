function evenPosition(arr) {
  let evenArr = [];
  for (let index = 0; index < arr.length; index += 2) {
    evenArr.push(arr[index]);
  }
  console.log(evenArr.join(" "));
}
evenPosition(["20", "30", "40", "50", "60"]);
