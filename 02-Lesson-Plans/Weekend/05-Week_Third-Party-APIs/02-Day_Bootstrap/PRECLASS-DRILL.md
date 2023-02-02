### Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is in some ways a separate skill from practical coding and that they need to work hard to hone their interviewing skills during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience&mdash;but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

	```
	Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

	Ex:
	Input: "noon"
	Output: true

	Input: "horse"
	Output: false

	Input: "racecar"
	Output: true

	```

* Let students know that this is a difficult problem, and encourage them to start with what they know. 

* Remind students that learning often feels like frustration, and it's important that they stick with it and keep trying rather than rely on Google. 

* Tell students to start by writing out the steps necessary to solve the problem, before they code anything. 

* After 15 minutes, write out the following steps before coding a solution:

	```
	1. Make a function expression.

	2. Loop through the string.

	3. Compare the first and last letters and return false if not equal.

	4. Compare the second and second from last letters and return false if not equal.

	5. Continue in this manner until all letters are checked. 

	6. After all letters are checked, return true.
	```

* Then code the following solution, mapping each line to one of the preceding steps:

	```js
	var isPalindrome = function (str) {
		for (var i = 0; i < str.length; i++) {
			if (str[i] !== str[str.length - (i + 1)]) {
				return false;
			}
		}
		return true;
	}
	```

* _Only_ if you have time after covering the previous solution, and if the class seems up for it, demonstrate the following solution:

  ```js
  var isPalindrome = function (str) {
	  return str.split("").reverse().join("") === str;
  }
  ```

  Explain the following points:

  * This solution is technically less efficient, because under the hood it is iterating through all the characters in the string four times&mdash;but it is faster to write and easier to read, which is often more important than performance.

   * By learning array methods and string methods, students can make their code much cleaner and easier to read.

 