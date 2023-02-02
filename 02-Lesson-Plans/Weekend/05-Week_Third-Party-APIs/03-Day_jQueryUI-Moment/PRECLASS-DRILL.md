### Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is in some ways a separate skill from practical coding and that they need to work hard to hone their interviewing skills during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience&mdash;but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

	```
	Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

	Ex:
	Input: “the quick brown fox jumps over the calm kitten quietly”
	Output: "b"

	Input: “this hat is the greatest!”
	Output: "g"

	Input: “what a wonderful day it has been!”
	Output: "o"

	```

* Encourage students to try and solve this challenge in a simpler or faster way if they finish early.

* After 15 minutes, code the following solution:

	```js

	function firstNonRepeatChar(str) {
		for (var i = 0; i < str.length; i++) {
			var char = str[i];
			var count = 0;
			
			for (var j = 0; j < str.length; j++) {
				if (str[j] === char) {
					count++;
				}
			}

			if (count === 1) {
				return char;
			}
		}
	}

	```

* Break down this solution as follows:

	* We loop through each character in the string, initializing a `count` variable at 0. 

	* We assign a the variable `char` to its corresponding character in the string.

	* We loop through the array, incrementing the `count` variable every time we see the same character from the first `for` loop.

	* We check to see if the count for each character is 1 and return the character if that is the case.

* Time permitting (and if the class seems up for it), code the following solution as an alternative:

	```js

	function firstNonRepeatChar(str){
		var charCount = {};
		for (var i = 0; i < str.length; i++) {
			var char = str[i];
			if (charCount[char]) {
				charCount[char]++;
			}
			else {
				charCount[char] = 1;
			}
		}
		for (var j in charCount) {
			if (charCount[j]===1) {
				return j;
			}
		}
	}  

	```

* Break down this solution as follows:

	* We create a new object and then create a key corresponding to each different character in the string. The value will be set to be the total number of times that character appears in the string.

	* As we iterate through the input string, every time we encounter an additional occurrence of a string, we increment its value in the `charCount` object by one. 

	* Once the string has been iterated through, we loop through each key in the `charCount` object, returning the first time we encounter a value of 1.

* It is important for students to understand that both solutions are correct, but the first one involves a worse time complexity. This is because it takes longer to iterate through a loop inside a loop (`O(n^2)`) than it does to iterate through that same loop twice (`O(2n)`).

* Reassure students that we will spend a full day at the end of the course focusing on this kind of efficiency.