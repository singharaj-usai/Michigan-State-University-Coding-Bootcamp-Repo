// Is Palindrome - Example Solution



// Solution
const palindromeCheck = (str) => {

  //iterate through the string up to the middle index
  for (let i=0; i<str.length/2; i++)
    //if the current index is not equal to the same index from the end, we will return false (i.e., in 'racecar,' we compare the first and last 'r's, and then the 'a's, etc. In 'friend,' we compare 'f' and the last 'd' and return false)
    if (str[i] !== str[str.length - 1 - i]) return false;

    //otherwise, return true, as in 'racecar'
  return true;
}


// Cheeky Solution
const palindromeCheck2 = str => str.split("").reverse().join("") === str;