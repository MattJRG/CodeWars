// URL: https://www.codewars.com/kata/5264d2b162488dc400000001

// Description: 

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// Code


// Solution 1
/* 
function spinWords(sentence){
  let wordArray = sentence.split(' ');
  let output = [];
  for (let i = 0; i < wordArray.length; i++) {
    let word = reverseLongWords(wordArray[i]);
    output.push(word);
  }
  return output.join(' ');
}

function reverseLongWords(word) {
  if (word.length < 5){
    return word;
  } else {
    return word.split('').reverse().join('')
  }
}
*/

// Solution 2 

/* 
function spinWords(sentence){
  return sentence.split(' ').map((word) => {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/
