function Algo() {}

Algo.prototype.reverse = function(str) {
  return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
  const reversed = str.split("").reverse().join("");
  return reversed === str;
};

Algo.prototype.capitalize = function(str) {
  //todo!
};

module.exports = Algo;
