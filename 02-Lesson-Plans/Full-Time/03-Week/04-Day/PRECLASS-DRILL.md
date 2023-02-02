### Pre-Class Drill

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in an array of numbers and outputs the average of all the numbers.
Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
```

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the one below if no student-solution is provided).

```js
var average = function (numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++){
    sum += numArr[i];
  }
  return sum / numArr.length;
}
```