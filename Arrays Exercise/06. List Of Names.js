function listOfNames(arr) {
  for (let index = 0; index < arr.length; index++) {
    arr = arr.sort((a, b) => a.localeCompare(b));
    console.log(`${index + 1}.${arr[index]}`);
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
