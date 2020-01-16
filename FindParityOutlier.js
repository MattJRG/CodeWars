// URL: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

// Description

/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// Code

/*
function findOutlier(integers){
  let firstNum = integers[0]
  let secondNum = integers[1]
  let thirdNum = integers[2]
  let desiredType
  let index

  let countEven = (num1, num2, num3) => {
  let output = 0;
  if (num1 % 2 ==0) {
    output++
  }
  if (num2 % 2 ==0) {
    output++
  }
  if (num3 % 2 ==0) {
    output++
  }
  return output
}

  let evenCount = countEven(firstNum, secondNum, thirdNum)
  let oddCount = 3 - evenCount
  if (evenCount > oddCount) {
    // looking for odd
    desiredType = 'odd'
  } else {
    // looking for even
    desiredType = 'even'
  }

  for ( i = 0; i < integers.length; i++) {
    let type = integers[i] % 2 == 0 ? 'even' : 'odd';
    if (type == desiredType) {
      return integers[i]
    }
  }
}
*/
