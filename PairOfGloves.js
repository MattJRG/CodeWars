// URL: https://www.codewars.com/kata/58235a167a8cb37e1a0000db/solutions/javascript

// Description: 

/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

A pair of gloves is constituted of two gloves of the same color.

You are given an array containing the color of each glove.

You must return the number of pair you can constitute.

You must not change the input array.

Examples :

const myGloves = ["red","green","red","blue","blue"];
numberOfPairs(myGloves) == 2; // red and blue

const redGloves = ["red","red","red","red","red","red"];
numberOfPairs(redGloves) == 3; // 3 red pairs

*/

// Solution:
/*
function numberOfPairs(gloves) {
  let pairs = 0;
  const colorCountObj = gloves.reduce((obj, el) => {
    obj[el]? obj[el]++ : obj[el] = 1;
    return obj;
  }, {});

  Object.values(colorCountObj).forEach((value) => {
    pairs += Math.floor(value / 2);
  });

return pairs;
}
*/
