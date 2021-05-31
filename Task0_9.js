
function printVowels(word){
  
  let wordLower = word.toLowerCase();
  let wordArr = wordLower.split("");
  let nam = "";
  
  for(let i = 0; i < wordArr.length; i++){
   let vowels = "aeiou";
   
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

printVowels("Umuzi");
