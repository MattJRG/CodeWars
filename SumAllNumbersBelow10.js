// Description
/*
Given an list of numbers as a string e.g. "19,0,2,4,8,6,11,6,9,4,3" output the sum of all the numbers less than 10 as a number. In this example the output would be 42.
*/

// Code

function calc(arr){
  
  let sum = 0;
  
  return arr.split(',').map(Number).filter(num => num <= 9).reduce((sum, digit) => {
    return sum += digit
  }, 0);
  
}
