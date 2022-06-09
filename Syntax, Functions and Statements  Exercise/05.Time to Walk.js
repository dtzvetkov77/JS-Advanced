function timeToWalk(steps, footprint, speed) {
  let distanceInMetres = steps * footprint;
  let metresInSecond = speed / 3.6;
  let timeInSeconds = distanceInMetres / metresInSecond;
  let rest = Math.floor(distanceInMetres / 500);
  let minutes = Math.floor(timeInSeconds / 60);
  let hours = Math.floor(minutes / 60);
  let seconds = Math.round(timeInSeconds - minutes * 60);
  console.log(
    (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes + rest < 10 ? "0" : "") +
      (minutes + rest) +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
  );
}
timeToWalk(2564, 0.7, 5.5);
