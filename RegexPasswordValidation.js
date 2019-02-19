// URL: https://www.codewars.com/kata/regex-password-validation

// Description

/*
You need to write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number

Valid passwords will only be alphanumeric characters.
*/

// Code 
function validate(password) {
  return /^(?=\w{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]*$/.test(password);
}
