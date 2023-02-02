### Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience&mdash;but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

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

* You might need to help students by starting the function expression for them so that they understand what's expected. Encourage them to write the function and test it out with the sample inputs and outputs provided, as follows: 

  ```js
    var max = function(num1, num2){

    }
  ```

* Give the students 15 minutes to work on the problem. 

* Encourage them to try this with pencil and paper, or at the very least to NOT use Google at all. Reassure them that you'll review the answer and that it's very important to try to tackle this one on their own.

* After 15 minutes, take 5 minutes to review the solution. You should start recording when going over the answer and send out the answer on Slack at the end of office hours before class starts.

  * Ask students if they found a solution, and review their solution (or the one below if no student solution is provided). 
  
  * This is an excellent opportunity to teach best practices and different ways of approaching a problem. 
  
  * As you code the solution, be sure to talk through each line and explain why you need that line of code. For instance, for the following example, you might say, "Here I want to return the first number only if it's larger than the second. Because I only want to run the return statement if something is true, I need a conditional."

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

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.