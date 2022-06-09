function roadRadar(speed, area) {
  let allowedSpeed = 0;
  let driverSpeed = Number(speed);
  switch (area) {
    case "motorway":
      allowedSpeed = 130;
      break;
    case "interstate":
      allowedSpeed = 90;
      break;
    case "city":
      allowedSpeed = 50;
      break;
    case "residential":
      allowedSpeed = 20;
      break;
  }

  let diff = driverSpeed - allowedSpeed;
  let status = "";

  if (driverSpeed > allowedSpeed) {
    if (diff <= 20) {
      status = "speeding";
    } else if (diff <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`
    );
  } else {
    console.log(`Driving ${driverSpeed} km/h in a ${allowedSpeed} zone`);
  }
}
