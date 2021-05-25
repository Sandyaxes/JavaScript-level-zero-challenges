function numToHours(inputNum) {
  let hours = Math.floor(inputNum / 60);
  let minutes = Math.floor(inputNum % 60);

  if (hours === 1 && minutes === 1) {
    console.log(hours + " hour ," + minutes + " minute");
  } else if (hours > 1 && minutes === 1) {
    console.log(hours + " hours ," + minutes + " minute");
  } else if (hours === 1 && minutes > 1) {
    console.log(hours + " hour ," + minutes + " minutes");
  } else if (hours === 0 && minutes === 1) {
    console.log(hours + " hours ," + minutes + " minute");
  } else if (hours === 0 && minutes === 1) {
    console.log(hours + " hours ," + minutes + " minute");
  } else {
    console.log(hours + " hours ," + minutes + " minutes");
  }
}

numToHours(133);
