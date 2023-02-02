### Pre-Class Drill

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
```

* After 15 minutes, take 5 minutes to show the students two different solutions.

  * Emphasize that as developers, there will always be multiple ways to accomplish the same task. Some may be faster or require less memory or be easier to read, but ultimately it's not about right or wrong, it's about finding a way to accomplish the task at hand.

```js
var countVowels = function(str){
  var count = 0;
  var input = str.toLowerCase();
  for (var i = 0; i < input.length; i++){
    if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
      count++;
    }
  }
}
```

```js
var countVowels = function(str){
  var count = 0;
  var input = str.toLowerCase();
  var vowelArr = [“a”, “e”, “i”, “o”, “u”];
  for (var i = 0; i < input.length; i++){
    if(vowelArr.includes(input[i])){
      count++;
    }
  }
  return count;
}
```