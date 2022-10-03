// Problem:
// Create a function that will add one to a number that is represented as an array and return the new number represented as an array of numbers (0-9).
// Each element in the input array will be a number and will be between 0-9.
// E.g 1: [1,2,3,6] -> [1,2,3,7]
// E.g. 2: [1,2,4,9] -> [1,2,5,0]
// E.g 3: [9,9,9,9] -> [1,0,0,0,0]

// Solution
const addOneToArrayAgain = (arr) => {
  let carry = 1; let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let total = arr[i] + carry;

    // If total is now 10 (cannot be higher than 10 ie 9 + 1) push 0 to the array
    if (total === 10) {
      result.unshift(0);
      // If we are on the first element we need to add 1 to the start of the array
      if (i === 0) { // e.g. [9, X, X, X] we want [1, 0, X, X, X]
        result.unshift(1);
        carry = 0;
      }
    } else {
      carry = 0;
      result.unshift(total);
    }
  }
  return result;
}
