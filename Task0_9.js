//JavaScript Level-Zero-Coding-Challenges Task 0.9


function printVowel(word){
  
  var wordLower = word.toLowerCase();
  var wordArr = wordLower.split("");
  var nam = "";
  
  for(var i = 0; i < wordArr.length; i++){
   var vowels = "aeiou";
   
   if(vowels.includes(wordArr[i])){
     if(nam.includes(wordArr[i])){
       continue;
     }else{
       nam += wordArr[i] + ", ";
     }
    
   }
    
  }
   console.log("Vowels: " + nam.substring(0,nam.length - 2));
}

printVowel("Umuzi");
