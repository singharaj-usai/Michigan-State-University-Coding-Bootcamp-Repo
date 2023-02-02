### Pre-Class Drill

* 20 min before class starts remind students that we'll be doing a practice problem every day before class from now until the begining of first projects. Then write the following problem on the board or Slack it out:

```
Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

Ex:
Input: 2
Output: 3 (because 1 + 2 = 3)

Input: 4
Output: 10  (because 1 + 2 + 3 + 4 = 10)

Input: 10
Output: 55
```

* Give the students 15 minutes to work on the problem.

* Encourage them to try this with pencil and paper, or at the very least to NOT use Google at all. Reassure them that we'll go over the answer and that it's very important to try to tackle this one on their own.

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the one below if no student-solution is provided).
  
  * As you code the solution, be sure to talk through each line and explain *why* you need that line of code. For example: "Here I want to repeat the same task over and over a set number of times, so I need a for loop."

```js
  var totalSum = function (num) {
  var sum = 0;
    for (var i = 0; i <= num; i++) {
      sum += i;
    }
      return sum;
  }
```
