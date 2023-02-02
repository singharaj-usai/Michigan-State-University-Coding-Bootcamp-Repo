# Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is in some ways a separate skill from practical coding and that they need to work hard to hone their interviewing skills during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience&mdash;but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

  ```md
  Write a function that takes in a number and returns the corresponding day of the week.

  Ex:
  Input: 1
  Output: 'Monday'

  Input: 5
  Output: 'Friday'

  Input: 8
  Output: undefined
  ```

* After 15 minutes, take 5 minutes to go over the solution.

* Ask students if they found a solution and go over their solution (or the ones below if no student solution is provided). 

* Be sure to praise students who provide a solution, even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Start recording when you review the following answer, and send it out on Slack at the end of office hours, before class starts:

  ```js
  var getDay = function (dayNum){
    switch(dayNum){
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return undefined;
    }
  }
  ```

* This one may seem trivial to students, but it's a great opportunity to discuss `switch` statements.

* Be sure to cover the `switch` syntax and point out how clean and readable it is compared to an `if-else` statement.

* Also discuss that `switch` statements are more efficient than `if-else` statements and that these performance advantages increase with the number of conditions.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
