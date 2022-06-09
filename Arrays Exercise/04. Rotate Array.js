function rotateArray(arr, rotation) {
  for (let index = 0; index < rotation; index++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  console.log(arr.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
