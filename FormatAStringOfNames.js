// URL: https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

// Description:

/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

// Code

function list(names) {

  let sentence = '';

  for (let i = 0; i < names.length; i++) {
    const { name } = names[i];
    if (i == names.length - 1) {
      sentence += name;
    } else if (i == names.length - 2) {
      sentence += name + ' & ';
    } else {
      sentence += name + ', ';
    }
  }

  return sentence;
}
