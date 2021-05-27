
function commonChar(input1, input2){
  let array1 = input1.split("");
  let array2 = input2.split("");
  let common = "";

   for(let i = 0; i < array1.length; i++){
     if(array2.includes(array1[i])){
       common += array1[i] + ", ";
     }
   }

   console.log("Common letters: " + common.substring(0,common.length - 2));
}

commonChar("computers", "house");
