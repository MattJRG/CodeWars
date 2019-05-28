// URL: https://www.codewars.com/kata/data-reverse/train/javascript

// Description: 

/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/

// Code

function dataReverse(data) {
  function arrayTo2DArray1(list, howMany) {
    var idx = 0
    var result = []
  
    while (idx < list.length) {
      if (idx % howMany === 0) result.push([])
      result[result.length - 1].push(list[idx++])
    }
    return result
  }
  let output = arrayTo2DArray1(data, 8).reverse().reduce(function(a, b){
    return a.concat(b);
  }, []);
  return output;
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
