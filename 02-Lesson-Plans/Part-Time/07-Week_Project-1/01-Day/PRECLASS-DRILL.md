### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5

Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1

Input: [ 2, 4, 5 ]
Output: undefined

```

* Remind students to write out the steps necessary to solve this in plain English first and then to start with what they know how to implement.

* Students will likely struggle with this one. Let them know that this is a tough one and that it's okay if they can't solve it immediately. 

* Remind them that in interviews they will often be presented with problems that they don't know how to solve. It's imperative that they practice continually working towards a solution to tough problems. 

  * You may want to add a personal anecdote like:
    "I've been hired for jobs where I wasn't able to solve all the interview questions. What was important was that I approached them logically, broke them down into accomplishable sub-problems, and kept coding for the duration of the interview."

* After 15 minutes, ask for student solutions or code the following:

```js
var findDup = function (arr) {
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < i; j++){
			if(arr[i] === arr[j]){
				return arr[i];
            }
        } 
    }
}
```

* Time permitting (and if the class seems up for it), code this solution as an alternative:

```js
var firstDup = function(arr){
	var dups = {};
	for (var i = 0; i < arr.length; i++) {
		var val = arr[i]
		if (dups[val]) {
			return val;
		}
		else{
			dups[val] = true;
		}
	}
}
```

* This solution does the following:

  * We create a new object and then update the value to true at the key corresponding to each integer in the input array. 

  * As we iterate through the input array, if we find that the corresponding key in the `dups` object is true, we know we have a duplicate and return the value. 

* The details of the implementation aren't super important. What is important is for students to understand that both solutions are correct, but that the second one is more efficient because it only loops through the values once. Nested for loops loop through all the elements one time *for each element* in the array.

* Reassure students that we will spend a full day at the end of the course focusing on this kind of efficiency.