function validityChecker(x1, y1, x2, y2) {
  //first step compare x1 and x2 to 0 and 0;
  let firstCheck = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
  let secondCheck = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
  let thirdCheck = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (Number.isInteger(firstCheck)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(secondCheck)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(thirdCheck)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
validityChecker(3, 0, 0, 4);
