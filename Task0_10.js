//JavaScript Level-Zero-Coding-Challenges Task 0.10

function commonChar(input1, input2){
  var Array1 = input1.split("");
  var Array2 = input2.split("");
  var common = "";

   for(var i = 0; i < Array1.length; i++){
     if(Array2.includes(Array1[i])){
       common += Array1[i] + ", ";
       console.log(Array1[i])
     }
   }

   console.log("Common letters: " + common.substring(0,common.length - 2));
}

commonChar("computers", "house");