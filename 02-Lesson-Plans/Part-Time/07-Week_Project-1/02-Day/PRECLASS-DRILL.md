### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

```
Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
Output: true

Input: “Five hexing wizard bots jump quickly”
Output: true

Input: “JavaScript is the best”
Output: false
```

* Remind students to write the steps first, then start with what they know.

* After 15 minutes, ask for solutions from students or code the one below, talking through each step as you code:

```js
var isPangram = function (str) {
  str = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < alphabet.length; i++) {
	  if (!str.includes(alphabet[i])){
		  return false;
	  }
  }
  return true;
}
```