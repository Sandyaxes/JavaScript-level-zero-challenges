//JavaScript Level-Zero-Coding-Challenges Task 0.7

function degreesToFahren(degrees){
  var fahrenheit =(degrees * 1.8) + 32;
  return fahrenheit;
}

function fahrenToDegrees(fahrenheit){
  var degrees = (fahrenheit - 32) / 1.8;
  return degrees;
}

console.log(degreesToFahren(0) + " Fahrenheit");
console.log(fahrenToDegrees(32) + " Degrees");
