### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in two numbers and outputs the max (the greater of the two numbers).

Ex: 
Input: 1, 2
Output: 2

Input: 6, -4
Output: 6

Input: 3.4, 2
Output: 3.4

``` 

* You may need to help students by starting the function expression for them so that they understand what's expected. Encourage them to write the function and test it out with the sample inputs and outputs provided: 

```js
  var max = function(num1, num2){

  }
```

* Give the students 15 minutes to work on the problem. 

* Encourage them to try this with pencil and paper, or at the very least to NOT use Google at all. Reassure them that we'll go over the answer and that it's very important to try to tackle this one on their own.

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the one below if no student-solution is provided). 
  
  * This will be an excellent opportunity to teach best practices and different ways of approaching a problem. 
  
  * As you code the solution, be sure to talk through each line and explain *why* you need that line of code. For example: "Here I want to return the first number only *if* it's larger than the second. Since I only want to run the return statement *if* something is true, I need a conditional."

```js
var max = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
```
