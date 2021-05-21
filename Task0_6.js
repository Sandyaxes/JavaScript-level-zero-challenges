//JavaScript Level-Zero-Coding-Challenges Task 0.6

function max(...num){
  var max = 0;
  for(var i in num){
    if(max < num[i]){
      max = num[i];
    }
  }
  return max;
}

console.log("Maximum number is " + max(33, 89, 60));
