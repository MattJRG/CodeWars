// URL: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// Description

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// Code

// Solution 1
/*
let findUniq = (arr) => +arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e))
*/

// Solution 2
/*
function findUniq(arr) {
let mem = {}
  arr.forEach(el => {
    if (mem[el]) mem[el]++;
    else mem[el] = 1;
  });

let output
Object.entries(mem).forEach(el => { if (el[1] === 1) output = el[0] });
return +output
}
*/
