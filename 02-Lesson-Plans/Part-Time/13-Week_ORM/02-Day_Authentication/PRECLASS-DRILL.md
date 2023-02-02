### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase . This is a common task when a variable, routeName, etc needs to be created from user input.

Ex:
Input: Tammer Galal
Output: tammergalal

Input:    favorite tree    ever
Output: favoritetreeever

Input: one word
Output: oneword
```
 
* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided). 

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js
var singleWord = function (str){

  var newStr = '';

  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' ' ){
      newStr += str[i];
    }
  }

  return newStr.toLowerCase();
}
```

* Time permitting, show both solutions. 

```js
var singleWord = function (str){

  var newStr = str.toLowerCase().replace(/\s/g,'')

  return newStr;
}
```

* Use this as an opportunity to introduce regular expressions and to remind students that there are multiple ways to solve every problem. 