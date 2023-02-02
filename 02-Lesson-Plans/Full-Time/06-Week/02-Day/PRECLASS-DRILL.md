### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```js
Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
Without using any built in array methods, return true if the element is in the array or false otherwise. 
. 

Ex:
Input: [1,2,3]  1
Output: true

Input: [1,2,3]  4
Output: false

Input: ['code', 'dev', 'nerd']  'nerd'
Output: false

Input: ['code', 'dev', 'nerd']  'genius'
Output: false
 ```
 
* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided). 

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js
var includes = function(arr, elem){
  for (var i = 0; i < arr.length; i++){
    if(elem === arr[i]){
      return true;
    }
  }
  
  return false;
}
```

* Time permitting, take this opportunity to re-introduce students to the `.includes()` array method.
 
* Remind students of the usefulness of array methods and encourage them to familiarize themselves with as many as possible.  `https://www.w3schools.com/jsref/jsref_obj_array.asp`