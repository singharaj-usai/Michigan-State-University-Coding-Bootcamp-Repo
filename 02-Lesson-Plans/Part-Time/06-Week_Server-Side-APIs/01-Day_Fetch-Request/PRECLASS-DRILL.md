### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

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