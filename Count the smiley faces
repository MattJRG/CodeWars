// URL: https://www.codewars.com/kata/583203e6eb35d7980400002a

// Description

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
*/

// Code

function countSmileys(arr) {
   const eyes = {
    ':': true,
    ';': true
  };
  
  const noses = {
    '-': true,
    '~': true
  };
  
  const mouths = {
    ')': true,
    'D': true
  };
 
  return arr.reduce((count, face) => {
      const firstChar = face[0];
      const secondChar = face[1];
      const thirdChar = face[2];
    
      if (face.length == 2){
        if (eyes[firstChar] && mouths[secondChar]){
          count++
        }
      } else if (face.length == 3){
        if (eyes[firstChar] && noses[secondChar] && mouths[thirdChar]){
          count++
        }
      }
      return count;
  }, 0);
}
