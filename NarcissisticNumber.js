// URL: https://www.codewars.com/kata/does-my-number-look-big-in-this

// Description

/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
*/

// Code 

function narcissistic(value) {
  return value === value.toString().split('').map(Number).reduce(function(sum, digit, index, arr) {
    return sum += Math.pow(digit, arr.length);
  }, 0);
}

// Code alternative using for loop
/*
function narcissistic(value) {
  // create a sum variable
  let sum = 0;
  // convert number to Array
  let arr = value.toString().split('').map(Number);
  // loop over array
  for (let i = 0; i < arr.length; i++) {
  // calculate each digit to the power of array length add to the sum
    sum += Math.pow(arr[i], arr.length);
  }
  // if sum = value then return true
  if (sum === value) {
    return true;
  // else return false
  } else {
    return false;
  }
}
*/
