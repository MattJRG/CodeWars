// URL: https://www.codewars.com/kata/530e15517bc88ac656000716

// Description

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. 

Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

// Code

function rot13(message){
  // create alphabet array that goes up to 13 chars higher than z
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];
  // create array from message
  let arr = message.split('');
  // create output string variable
  let output = '';
  
  // create function to check if character is a letter
  function isLetter(str) {
    return str.length === 1 && str.match(/[A-Z|a-z]/i);
  }

  // loop through arr using alphabet array add the rot13 letter to output String
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
  // check char is a letter
    if (isLetter(char)){
  // check if is upper case if so add an upper case letter to output
      if (char === char.toUpperCase()){
        char = char.toLowerCase();
        output += alphabet[alphabet.indexOf(char)+13].toUpperCase();
      } else {
  // if char is letter but not upper case add a lower case letter to output
        output += alphabet[alphabet.indexOf(char)+13];
      }
    } else {
  // if char isn't a letter just add the char to the output
      output += char;
    }
  }
  return output;
}
