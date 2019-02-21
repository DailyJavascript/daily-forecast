export function convertUnixTime(unixStamp) {
  const date = new Date(unixStamp * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return [hours, minutes, seconds];
}

export function mapTimeTo24(hour) {
  return ((hour + 24) % 12 || 12);
}

export function mapMinutes(minutes) {
  let newMinutes = minutes.toString();
  if (newMinutes.length === 1) { newMinutes =+ '0' + newMinutes }
  return newMinutes;
}

export function isDayTime(currentTime, sunriseTime, sunsetTime) {
  let ct = new Date(currentTime * 1000);
  let sunriseT = new Date(sunriseTime * 1000);
  let sunsetT = new Date(sunsetTime * 1000);
  return ct > sunriseT && ct < sunsetT
}

function mapTimeToAMOrPM(hour) {
  if (hour < 13) {
    return 'am';
  } else {
    return 'pm';
  }
}

export function displayHour(unixTime) {
  const hour = convertUnixTime(unixTime)[0];
  return mapTimeTo24(hour) + ' ' + mapTimeToAMOrPM(hour);
}

export function displayTime(unixTime) {
  const convertedTime = convertUnixTime(unixTime);
  return mapTimeTo24(convertedTime[0]).toString() + ':' + mapMinutes(convertedTime[1]) + ' ' + mapTimeToAMOrPM(convertedTime[0]);
}

export function roundTemp(num) {
  return Math.round(num);
}
