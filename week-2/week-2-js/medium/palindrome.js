/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let revStr = "";
  for (let i = sanitizedStr.length - 1; i >= 0; i--) {
    revStr += sanitizedStr[i];
  }

  // Compare the sanitized original and reversed strings
  return sanitizedStr === revStr
}

module.exports = isPalindrome;
