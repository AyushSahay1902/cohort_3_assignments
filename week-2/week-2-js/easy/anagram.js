function isAnagram(str1, str2) {
  // Convert both strings to lowercase for case-insensitive comparison
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Check if lengths are the same, return false if not
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to arrays, sort them and compare
  let str1Arr = str1.split('').sort();
  let str2Arr = str2.split('').sort();

  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== str2Arr[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
