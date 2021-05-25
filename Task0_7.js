
function degreesToFahren(degrees) {
  let fahrenheit = degrees * 1.8 + 32;
  return fahrenheit + " Fahrenheit";
}

function fahrenToDegrees(fahrenheit) {
  var degrees = (fahrenheit - 32) / 1.8;
  return degrees + " Degrees";
}

console.log(degreesToFahren(0));
console.log(fahrenToDegrees(32));
