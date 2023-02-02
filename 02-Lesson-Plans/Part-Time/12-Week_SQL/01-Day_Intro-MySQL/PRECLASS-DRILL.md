# Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skill set during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience—but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

  ```js
  Write a function that takes an array of numbers and returns an array with each number doubled. 

  Ex:
  Input: [1,2,3]
  Output: [2,4,6]

  Input: [-1,-2,-3]
  Output: [-2, -4, -6]
  ```

* After 15 minutes, ask students if they have an answer.

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Start recording when you review the answer, and send it out on Slack at the end of office hours, before class starts.

    ```js
    var double = function(arr){
      var newArr = [];

      for (var i = 0; i < arr.length; i++){
        const newNum = arr[i] * 2;
        newArr.push(newNum);
      }

      return newArr;
    }
    ```

* Time permitting, take this opportunity to discuss pure functions and the benefit of returning a new array versus mutating the old array.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
