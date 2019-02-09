//URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Description

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

// Code 1

function isIsogram(str){
  const arr = str.toLowerCase().split('')
  
  const usedLetters = [];
  
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    if (usedLetters.indexOf(letter) == -1){
      usedLetters.push(letter)
    } else {
      return false
    }
  }
  return true;
}

// Code alternative
/*
function isIsogram(str) {
  
  const counts = {};
  
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (!counts[letter]) {
      counts[letter] = 1;
    } else {
      return false
    }
  }
  return true;
}
*/
