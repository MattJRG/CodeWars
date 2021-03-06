// URL: https://www.codewars.com/kata/514b92a657cdc65150000006

// Description

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// Code

function solution(number){
 
 let sum = 0;
 let i = 0;
 let j = 0;
 
 while (i + 3 < number) {
   i += 3;
   if (i % 5 !== 0) {
     sum += i;
   }
 }
 while (j + 5 < number) {
   j += 5;
   sum += j;
 }

return sum;
}

// Code alternative

/*
function solution(number){
  
  let sum = 0
  
  for (let i = 3; i < number; i+=3) {
      sum += i;
    }
  
  for (let i = 5; i < number; i+=5) {
    if (i % 3 === 0) {
    } else {
      sum += i;
    }
  }
  
  return sum;

}
*/
