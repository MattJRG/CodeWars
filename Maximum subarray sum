// URL: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// Description

/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// Code

var maxSequence = function(arr) {
  // A place to keep track of the currentSum
    // initialise to 0 
    let currentSum = 0;
  // a place to keep track of maxSum
    // initialise to 0
    let maxSum = 0;
  // iterate over array 
    for (let i = 0; i < arr.length; i++) {
      currentNumber = arr[i];
      // set currentSum to max of currentSum + currentNumber and 0
      currentSum = Math.max(currentSum + currentNumber, 0);
      // set maxSum to max of currentSum and maxSum
      maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum
}
