function pieceOfPie(arr, str1, str2) {
  let start = arr.indexOf(str1);
  let end = arr.indexOf(str2) + 1 ;
  let result = arr.splice(start, end);
  return result
}
pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
