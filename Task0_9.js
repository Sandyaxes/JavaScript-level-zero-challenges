//JavaScript Level-Zero-Coding-Challenges Task 0.9


function printVowel(word){
  
  var wordArr = word.split("");
  var nam = "";
  
  for(var i = 0; i < wordArr.length; i++){
   var vowels = "aeiouAEIOU";
   
   if(vowels.includes(wordArr[i])){
    
     nam += wordArr[i] + ", ";
   }
    
  }
   console.log(nam.substring(0,nam.length - 2))
}

printVowel("SandilE")