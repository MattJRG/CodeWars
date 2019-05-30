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

function longest(s1, s2) {
  s1 += s2
  return s1.split('').sort().filter(function(char, pos, self) {
    return self.indexOf(char) == pos;
  }).join('')
}
