// URL: https://www.codewars.com/kata/51b66044bce5799a7f000003

// Description

/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
*/

// Code

const RomanNumerals = {
    toRoman: function(number){
        let roman = '';
  
        const keys = Object.keys(RomanNumerals);
        while (number > 0) {
          for (let i = keys.length - 1; i >= 0; i--) {
            let romanLetter = keys[i];
              if (number >= romanLetter) {
                while(number >= romanLetter) {
                  roman += RomanNumerals[romanLetter];
                  number -= romanLetter;
                }
              keys.pop();
              break;
              }
          }
        }
        
      return roman;
      },
      fromRoman: function(number){
        let roman = number.toString().split('');
        
        let num = 0;
        
        const numberLookUp = {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000
        }
  
        const numkeys = Object.keys(numberLookUp);
        
        for (let i = 0; i < roman.length; i++) {
          let curr = numberLookUp[roman[i]];
          let next = numberLookUp[roman[i+1]];
          
          if (i < roman.length - 1) {
            if (curr >= next) {
              num+= curr;
            } else {
              num += (next - curr)
              i++
            }
          } else {
            num += curr;
          }
        }
        return num;
      },
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
