function cookingByNumbers(num, ...input) {
  let number = Number(num);
  for (let command of input) {
    if (command === "chop") {
      number = number / 2;
      console.log(number);
    } else if (command === "dice") {
      number = Math.sqrt(number);
      console.log(number);
    } else if (command === "spice") {
      ++number;
      console.log(number);
    } else if (command === "bake") {
      number *= 3;
      console.log(number);
    } else {
      number = number - number * 0.2;
      console.log(number);
    }
  }
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
