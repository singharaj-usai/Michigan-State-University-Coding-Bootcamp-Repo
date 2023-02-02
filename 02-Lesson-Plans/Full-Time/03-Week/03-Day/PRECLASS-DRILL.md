### Pre-Class Drill

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string.


Ex:
Input: “the quick brown fox jumps over the calm kitten quietly”
Output: "b"

Input: “this hat is the greatest!”
Output: "g"

Input: “what a wonderful day it has been!”
Output: "o"


```

* Encourage students to try and solve this a simpler or faster way if they finish early.

* After 15 minutes, code the following solution:

```js

function firstNonRepeatChar(str){
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
        charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }
    for (var j in charCount) {
        if (charCount[j]==1) {
            return j;
        }
    }
}  

```

* This solution does the following:

* We create a new object and then create a key corresponding to each different character in our string. The value will be set to be the total number of times that character appears in our string.

* As we iterate through our input string, every time we encounter an additional occurrence of a string, we increment its value in the charCount object by one. 

* Once the string has been iterated through, we loop through each key in our charCount object, returning the first time we encounter a value of 1.

Time permitting (and if the class seems up for it), code this solution as an alternative:

```js

function firstNonRepeatChar(str) {
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (str.indexOf(c) === i && str.indexOf(c, i + 1) === -1) {
            return c;
        }
    }
}

```


* The details of the implementation aren't super important. What is important is for students to understand that both solutions are correct, but that the second one is more efficient because it only loops through an array once.

* This is a good opportunity to remind students the importance of becoming familiar with built-in array methods and looping through object keys.

* Reassure students that we will spend a full day at the end of the course focusing on this kind of efficiency.
