// URL: https://www.codewars.com/kata/546e2562b03326a88e000020

// Description

/* 
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

// Code 1

function squareDigits(num){
   const numArr = num.toString().split('');
  var output = [];
  
  for (let i = 0; i < numArr.length; i++) {
    let num = +numArr[i];
    output.push(num * num);
  }
  
  return +output.join('')
}

// Code 2

/*
function squareDigits2(num){
  return +Array.prototype.reduce.call(num.toString(), (squaredNumbers, digit) => {
    return squaredNumbers + Math.pow(digit, 2) ;
  }, '');
}
*/
