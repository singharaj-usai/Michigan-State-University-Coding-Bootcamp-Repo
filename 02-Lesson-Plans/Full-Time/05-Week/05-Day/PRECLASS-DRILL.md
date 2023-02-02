### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```js
Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints:

1. It must be at least 8 characters long
2. It must contain at least 1 capital letter
3. It must contain at least 1 lower case letter

Output true if the string is a valid password or false otherwise.

Ex:
Input: RexTheDog
Output: true

Input: rexthedog
Output: false

Input: REXTHEDOG
Output: false

Input: Dog
Output: false
```

* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided).

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js

var isValidPass = function (password){
  var hasLower = false;
  var hasUpper = false;

  if (password.length < 8){
    return false;
  }

  for (var i = 0; i < password.length; i++){
    if (password[i].toLowerCase() === password[i]){
      hasLower = true;
    }
    if (password[i].toUpperCase() === password[i]){
      hasUpper = true;
    }
  }

  return hasLower && hasUpper;
}
```

* Feel free to code the solution in your own way or show students multiple solutions. It's important that students start to understand that there is no one correct way to tackle a problem.