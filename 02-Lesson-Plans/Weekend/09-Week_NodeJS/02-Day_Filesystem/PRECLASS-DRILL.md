### Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is in some ways a separate skill from practical coding and that they need to work hard to hone their interviewing skills during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience&mdash;but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

  ```js
  Write a function that takes in an array of integers and the array with duplicates removed

  Ex:
  Input: [1,2,2,3]
  Output: [1,2,3]

  Input: [4,5,4,4,7,5]
  Output: [4,5,7]

  Input: [1,2,3,5]
  Output: [1,2,3,5]
  ```
 
* After 15 minutes, take 5 minutes to go over the solution.

* Ask students if they found a solution and go over their solution (or the ones below if no student solution is provided). 

* Be sure to praise students who provide a solution, even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Start recording when you review the following answer, and send it out on Slack at the end of office hours, before class starts:

  ```js

  var deduper = function (numArr){
    var newArr = [];
    for (var i = 0; i < numArr.length; i++){
      if(!newArr.includes(numArr[i])){
        newArr.push(numArr[i]);
      }
    }
  }

  ```

* Review the code carefully, reminding students how helpful array methods like `.includes()` can be. 

* On Slack, share the link to this [W3Schools article on array methods](https://www.w3schools.com/jsref/jsref_obj_array.asp), and encourage students to practice using these array methods.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
