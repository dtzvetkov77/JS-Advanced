function dayOfTgeWeek(day) {
  let dayNum = "";
  switch (day) {
    case "Monday":
      dayNum = 1;
      break;
    case "Tuesday":
      dayNum = 2;
      break;
    case "Wednesday":
      dayNum = 3;
      break;
    case "Thursday":
      dayNum = 4;
      break;
    case "Friday":
      dayNum = 5;
      break;
    case "Saturday":
      dayNum = 6;
      break;
    case "Sunday":
      dayNum = 7;
      break;
    default:
      dayNum = "error";
  }
  return dayNum;
}
console.log(dayOfTgeWeek("Invalid"));
