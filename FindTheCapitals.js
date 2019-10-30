// URL: https://www.codewars.com/kata/find-the-capitals-1/javascript

// Description

/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example:
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

// Code

/*

Solution 1: 

function capitals(word) {
	return word.split('').reduce((output, el, i) => {
    if (el.match(/[A-Z]/)) {
      output.push(i)
    }
    return output
  }, [])
}

Soultion 2: 

var capitals = function (word) {
  let output = []
	let arr = word.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      output.push(i)
    }
  }
  return output
};

Solution 3: 

var capitals = function (word) {
  let output = []
	let arr = word.split('').forEach((el, i) => {
    if (el === el.toUpperCase()) {
      output.push(i)
    }
  })
  return output
}
*/
