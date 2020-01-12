// URL: https://www.codewars.com/kata/anagram-detection/train/javascript

// Description: 

/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// Code:

/*
function isAnagram(first, second) {

  if (first.length !== second.length) return false;

  first = first.toLowerCase()
  second = second.toLowerCase()

  if (first === second) return true;

  const firstCounts = countLetters(first)
  const secondCounts = countLetters(second)

  const firstCountKeys = Object.keys(firstCounts)
  const secondCountKeys = Object.keys(secondCounts)

  if (firstCountKeys.length !== secondCountKeys.length) {
    return false;
  }

  firstCountKeys.every(letter => {
    return firstCounts[letter] !== secondCounts[letter];
  });

  return true;
}

function countLetters(input) {
  return [...input].reduce((counts, letter) => {
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});
}

console.log(isAnagram2('ttset', 'tesrt'))
*/
