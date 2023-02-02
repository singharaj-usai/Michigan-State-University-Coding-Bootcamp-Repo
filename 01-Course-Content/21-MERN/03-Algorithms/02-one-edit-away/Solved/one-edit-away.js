const oneEditAway = function(str1, str2) {

  // If difference in string lengths is greater than 1 OR strings exactly equal, return false
  if (str1 === str2 || Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  // Initial index for each string is 0
  let index1 = 0;
  let index2 = 0;
  // Set edit count to zero
  let editCount = 0;

  while (index1 < str1.length && index2 < str2.length) {
    // If characters in string are not a match
    if (str1[index1] !== str2[index2]) {
      // Check edit count. If editCount is 1, return false.
      if (editCount === 1) {
        return false;
      }
      // If one string is longer then can only add a character
      if (str1.length > str2.length) {
        index1++;
      } else if (str2.length < str1.length) {
        index2++;
      // If one string is not longer, strings must be equal length
      } else {
        index1++;
        index2++;
      }
      editCount++;
    // If current characters are equal
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};
