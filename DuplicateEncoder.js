// URL: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript

// Description

/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// Code

// Solution 1
/*
function duplicateEncode(word){
  let mem = [];
  let duplicates = [];
  let arr = word.toLowerCase().split('');
  let output = '';
  
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (mem.indexOf(char) < 0) {
      mem.push(char);
    } else {
      duplicates.push(char);
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (duplicates.indexOf(char) > -1) {
      output += ')'
    } else {
      output += '('
    }
  }
  return output
}
*/


// Solution 2
/*
function duplicateEncode(word){
  
  const isDuplicate = Array.prototype.reduce.call(word, (isDuplicate, letter) => {
    letter = letter.toLowerCase();
    return (letter in isDuplicate ? isDuplicate[letter] = true : isDuplicate[letter] = false, isDuplicate);
  }, {});
  
  return Array.prototype.reduce.call(word, (output, letter) => {
    letter = letter.toLowerCase();
    return isDuplicate[letter] ? output + ')' : output + '(';
  }, '');
}
*/
