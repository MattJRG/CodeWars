// URL: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// Description
/*
Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
isSquare(-1) returns  false
isSquare(0) returns   true
isSquare(3) returns   false
isSquare(4) returns   true
isSquare(25) returns  true  
isSquare(26) returns  false
*/

// Solution 1

/*
var isSquare = function(n){
  let sqrt = Math.sqrt(n)
  return ((sqrt - Math.floor(sqrt)) === 0) ? true : false;
}
*/

// Solution 2

/*
var isSquare = function(n){
  let sqrt = Math.sqrt(n)
  return ((sqrt - Math.floor(sqrt)) === 0) ? true : false;
}
*/
