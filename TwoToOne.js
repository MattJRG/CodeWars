// URL: https://www.codewars.com/kata/two-to-one/train/javascript

// Description

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// Code

// Solution 1

// function longest(s1, s2) {
//   s1 += s2;
//   return s1.split('').sort().filter(function(char, index, arr) {
//     return arr.indexOf(char) == index;
//   }).join('');
// }

// Solution 2

// function longest(s1, s2) {
//   s1 += s2;
//   let uniqueChars = [];
//   for (let i = 0; i < s1.length; i++){
//     let char = s1[i];
//     if (uniqueChars.indexOf(char) < 0) {
//       uniqueChars.push(char);
//     }
//   }
//   return uniqueChars.sort().join('')
// }

// Solution 3

// function longest(s1, s2) {
//   return (s1 += s2).split('').reduce((acc, char) => {
//     if (acc.indexOf(char) < 0) {
//       acc.push(char);
//     }
//     return acc;
//   }, []).sort().join('')
// }

// Solution 4

// function longest(s1, s2) {
//   const uniqueLetters = new Set(s1 + s2);
//   return [...uniqueLetters.values()].sort().join('');
// }

// console.log(longest('baraban', 'wanted'))
