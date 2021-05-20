//JavaScript Level-Zero-Coding-Challenges Task 0.8

function numToHours(inputNum){
 
 var hours = Math.floor(inputNum /60);
  var minutes = Math.floor(inputNum % 60);

  if(hours === 1){
    if(minutes === 1){
      console.log(hours +" hour ," + minutes + " minute");
    }else{
      console.log(hours +" hour ," + minutes + " minutes");
    }
    
  }else{
    if(hours === 1){
      console.log(hours +" hours ," + minutes + " minute");
    }else{
      console.log(hours +" hours ," + minutes + " minutes");
    }
  }
  
}

numToHours(133)