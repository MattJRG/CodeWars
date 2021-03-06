// URL: https://www.codewars.com/kata/552c028c030765286c00007d

// Description

/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

// Code

function iqTest(numbers){
  // Turn numbers into an array
  numbers = numbers.split(' ');
  // keep track of even count, and last index we saw of even
  const even = {
    count: 0,
    lastIndex: -1
  };
  // keep track of odd count, and last index we saw of odd
  const odd = {
    count: 0,
    lastIndex: -1
  };

  // Iterate over numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // If even, increment even & store index
    if (currentNumber % 2 == 0) {
      even.count++;
      even.lastIndex = i + 1;
    } else {
      // If odd, increment even & store index
      odd.count++;
      odd.lastIndex = i + 1;
    }
  }  
  // if even cound is 1 
  if (even.count == 1) {
    // return last even index we saw
    return even.lastIndex;
  }
  // if odd cound is 1 
  else {
    // return last odd index we saw
    return odd.lastIndex;
  }
}
