// URL: https://www.codewars.com/kata/517abf86da9663f1d2000003

// Description

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

// Code

function toCamelCase(str){
  
  let words = str.split(/-|_/g);
  
  return words.map(function(word,index){
    // If it is the first word don't change the first case.
    if(index == 0){
      return word;
    }
    // If it is not the first word only upper case the first char and lowercase the rest.
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
  
}
