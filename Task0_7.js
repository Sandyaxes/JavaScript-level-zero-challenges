
function celciusToFahrenheit(celcius) {
  let fahrenheit = celcius * 1.8 + 32;
  return fahrenheit + " Fahrenheit";
}

function fahrenheitToCelcius(fahrenheit) {
  let celcius = (fahrenheit - 32) / 1.8;
  return celcius + " Celcius";
}

console.log(celciusToFahrenheit(0));
console.log(fahrenheitToCelcius(32));
