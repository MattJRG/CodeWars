// URL: https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Description

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// Code

function pigIt(str) {
// split string into an array of words and punctuation
  strArr = str.split(' ');
 
// Loop through array
  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];
    
    // Ignore element if it is punctuation
    if (!element.match(/[.,:!?]/)) {
    // If it is a word then add the first character to the end of the word and remove first character
      strArr[i] += element[0];
      strArr[i] = strArr[i].substring(1);
      // add 'ay' on the end of the word
      strArr[i] += 'ay';
    }
    // join the array back into a string
  }
  output = strArr.join(' ')
  return output;
}
