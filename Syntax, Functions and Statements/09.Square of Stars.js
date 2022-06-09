function squareOfStars(input) {
  let square = "";
  if (input > 0) {
    for (let index = 1; index <= input; index++) {
      square += "* ";
    }
    for (let index = 1; index <= input; index++) {
      console.log(square);
    }
  } else {
    for (let index = 1; index <= 5; index++) {
      square += "*";
    }
    for (let index = 0; index <= 5; index++) {
      console.log(square);
    }
  }
}
squareOfStars(7);
