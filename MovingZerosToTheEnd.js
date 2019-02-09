// URL: https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Description

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// Code

var moveZeros = function (arr) {
  // A place to store the notZero array
  let notZeros = [];
  
  // A place to count the zeros
  let zeroCount = 0;
  
  // Loop through the array removing the non-zeros and adding them to non-zeros array
  for (let i = 0; i < arr.length; i++){
    const el = arr[i];
    if (el !== 0){
      notZeros.push(el);
    } else {
      
      // counting the number of zeros
      zeroCount++;
    }
  }
  
  // Adding zeros to nonZero array
  for (let i = 0; i < zeroCount; i++) {
    notZeros.push(0);
  }
  
  // return nonZero array
  return notZeros
  
}
