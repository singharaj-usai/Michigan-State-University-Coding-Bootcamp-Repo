### Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience—but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following question on the board or send it out on Slack:

  ```js
  Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

  Ex:
  Input: '1'
  Output: -1

  Input: '4'
  Output: -4

  Input: 'cow'
  Error
  ```

* Depending on your students' comfort level with errors, you might want to allow them to use Google as a guide. 
 
* After 15 minutes, take 5 minutes to review the solution. You should start recording when going over the answer and send out the answer on Slack at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the following one if no student solution is provided):

    ```js
    var getNegative = function (numString){
      var negNum = numString * -1;

      if (isNaN(negNum)){
        throw 'input must be coercible to a number'
      }

      return negNum
    }
    ```

  * Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

  * Take a few minutes to discuss error throwing and catching. 

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
