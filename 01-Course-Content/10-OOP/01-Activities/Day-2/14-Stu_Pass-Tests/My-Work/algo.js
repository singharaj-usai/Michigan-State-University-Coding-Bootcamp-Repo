function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
    return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return normalizedStr === this.reverse(normalizedStr);
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here
    return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};

module.exports = Algo;
