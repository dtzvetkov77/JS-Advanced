function previousDay(year, month, day) {
  let date = new Date(year, month, day);
  let dayBefore = date.getDate() - 1;
  let monthBefore = date.getMonth();
  if (dayBefore == 0) {
    monthBefore = monthBefore - 1;
    let date2 = new Date(year, monthBefore, dayBefore);
    console.log(date2.getMonth());
  }
}
previousDay(2016, 10, 1);
