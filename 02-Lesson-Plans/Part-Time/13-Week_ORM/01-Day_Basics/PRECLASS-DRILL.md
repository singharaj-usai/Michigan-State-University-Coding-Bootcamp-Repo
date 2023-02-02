### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

Input: 1201
Output:1021

Input: 4
Output: 4
```

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided).

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js
var reverseDigit = function (num){
  var newNum = '';
  var numStr = num.toString();
  for (var i = numStr.length - 1 ; i >= 0; i--){
    newNum += numStr[i];
  }

  return parseInt(newNum);
}
```

```js
var reverseDigit = function (num){
  var newNum = 0;
  var lastDigit;
  while (num > 0){
    lastDigit = num % 10;
    newNum = (newNum * 10) + lastDigit;
    num = parseInt(num / 10);
  }

  return newNum;
}
```

* Time permitting, walk through both solutions above, emphasizing that there is no single right way to tackle a problem.
