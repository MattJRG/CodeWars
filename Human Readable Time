// URL: https://www.codewars.com/kata/52685f7382004e774f0001f7

// Description

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// Code

function humanReadable(seconds) {
  const hour = 3600, minute = 60;
  let hours = 0, minutes = 0;
  
  while (seconds >= hour){
    seconds -= hour;
    hours++;
  }
  
   while (seconds >= minute){
    seconds -= minute;
    minutes++;
  }
  
  if (hours < 10) {
    hours = '0' + hours.toString()
  }
  
   if (minutes < 10) {
    minutes = '0' + minutes.toString()
  }
  
   if (seconds < 10) {
    seconds = '0' + seconds.toString()
  }

  let output = `${hours}:${minutes}:${seconds}`;
  
  return output;

}
