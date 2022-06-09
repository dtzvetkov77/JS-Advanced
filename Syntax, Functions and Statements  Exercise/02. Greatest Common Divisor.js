function greatestCommonDivisor(x, y) {
  if (y) {
    return greatestCommonDivisor(y, x % y);
  } else {
    console.log(x);
  }
}
greatestCommonDivisor(2154, 458);
