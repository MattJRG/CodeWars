// URL: https://www.codewars.com/kata/54da5a58ea159efa38000836

// Description

/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// Code

function findOdd(array) {
  // a place to store the count
  let count = 0;
  
  // a place to store the current number
  let curr;
  
  // a place to store used numbers
  let checked = [];
  
  // loop through array to count the number of occurrences of each number
  for (let i = 0; i < array.length; i++) {
    
  // if number hasn't been checked before we count it
    if (checked.indexOf(array[i]) > -1) {
    } else {
      curr = array[i];
      count = 1;
      checked.push(curr);
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === curr) {
          count++
        }
      }
      // if count is odd at the end of the array return the current number
      if (count % 2 !== 0){
        return curr;
      } else {
        count = 0;
      }
    }
  }
}
