### Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is in some ways a separate skill from practical coding and that they need to work hard to hone their interviewing skills during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience&mdash;but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

	```
	Write a function that takes in a string and outputs the number of vowels (not counting y).

	Ex:
	Input: "hello"
	Output: 2

	Input: "you are great!"
	Output: 6

	Input: "why?"
	Output: 0

	```

* With 5 minutes left before class, show the students two different solutions. 

  * Emphasize that as developers, there will always be multiple ways to accomplish the same task. Some might be faster or easier to read or require less memory, but ultimately it's not about right or wrong&mdash;it's about finding a way to accomplish the task at hand.

  * The following example shows one possible solution:

	```js
	var countVowels = function(str){
		var count = 0;
		var input = str.toLowerCase();
		for (var i = 0; i < input.length; i++){
		if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
			count++;
		}
		}
	}

	```
  * Alternatively, the following solution would also work:

	```js
	var countVowels = function(str){
		var count = 0;
		var input = str.toLowerCase();
		var vowelArr = [“a”, “e”, “i”, “o”, “u”];
		for (var i = 0; i < input.length; i++){
		if(vowelArr.includes(input[i])){
			count++;
		}
		}
		return count;
	}

	```