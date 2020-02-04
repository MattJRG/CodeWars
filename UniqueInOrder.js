// Url: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Description
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// Code

// Solution with reduce
/*
uniqueInOrder = (iterable) => {
  if (iterable.constructor !== Array) iterable = iterable.split('');
  return iterable.reduce((acc, char, index, array) => {
    if (char !== array[index-1]) acc.push(char)
    return acc;
  },[]);
}
*/

// Solution with forEach
/*
uniqueInOrder = (iterable) => {
  if (iterable.constructor !== Array) iterable = iterable.split('');
  let output = [];
  iterable.forEach((char, index, array) => {
    if (char !== array[index-1]) output.push(char);
  });
  return output;
}
*/

// Solution with for loop
/*
uniqueInOrder = (iterable) => {
  if (iterable.constructor !== Array) iterable = iterable.split('');
  let output = [];
  let previousChar;
  for (let i = 0; i < iterable.length; i++) {
    let char = iterable[i];
    if (i === 0 || char !== previousChar) {
      output.push(char);
    }
    previousChar = char;
  }
  return output;
}
*/
