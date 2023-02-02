### Pre-class Drills

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in an array of numbers and outputs the maximum number.

Ex:
Input: [ 1, 2, 3 ]
Output: 3

Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6

Input: [ 3, 3, 3 ]
Output: 3

```

* Encourage students to pseudo code if they feel stuck.

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Remind students of the following:

  * It's okay if they aren't able to complete these problems. In interviews, they will often be confronted with problems that they won't know how to solve.

  * The important thing is that they are trying to think through them and are actively working to find a solution for the full 15 minutes. Start with what you know and don't give up!

* Some students likely struggled with this one. Take this opportunity to model starting with what you know. You can use the following script:

  * I'm trying to create a function, so I'll start with making a function expression:

  ```js
  var findMax = function (numArr) {

  }
  ```
  
  * My function needs to return some number, so let's add a return:

  ```js
  var findMax = function (numArr) {
    var maxNum;
    return maxNum;
  }
  ```

  * I need to find the maximum number in an array, so I need to check every number in the array. I'll use a for loop to iterate through the array.

  ```js
  var findMax = function (numArr) {
    var maxNum;
    for (var i = 0; i < numArr.length; i++){

    }
    return maxNum;
  }
  ```

* Continue to build the solution incrementally, explaining each step until you have the solution:

```js

  var maxNum = numArr[0];
  for (var i = 1; i < numArr.length; i++) {
    if (numArr[i] > maxNum) {
      maxNum = numArr[i];
    }
  }
  return maxNum;
}

```
