// URL: https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// Description

/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
 // a place to store counts
 const letterCounts = {};
 
 // iterate over str1
 for (let i = 0; i < str1.length; i++) {
   // set a property on the object that is the current letter
   // if the property didn't exist, set it to 1 
   // otherwise increment the value
   const currentLetter = str1[i];
   letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
   letterCounts[currentLetter]++;
  }
 
 // iterate over str2
 for (let i = 0; i < str2.length; i++) {
   const currentLetter = str2[i];
   // if current letter is in the object and the count is greater than 0
   if (letterCounts[currentLetter] > 0) {
    // decrement the counts
    letterCounts[currentLetter]--;
   } else {
    // else break out of the loop
    return false
   }
 }
  return true
}
