# Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skill set during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience—but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

  ```js
  Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should return true if the function parameter returns true for _any_ of the array elements in the array parameter or false otherwise. 

  Ex:

  Input: [1,2,3]  function(num){return num === 2}
  Output: true

  Input: [1,5,3]  function(num){return num === 2}
  Output: false

  Input: [1,2,3]  function(num){return num % 2 === 0}
  Output: true

  Input: [1,5,3]  function(num){return num % 2 === 0}
  Output: false
  ```

* After 15 minutes, ask students if they have an answer.

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Start recording when you review the answer, and send it out on Slack at the end of office hours, before class starts.

  ```js
  var any = function(arr, cb){
    var isTrue = false;

    for (var i = 0; i < arr.length; i++){
      var cbOutput = cb(arr[i]);
      if(cbOutput){
        isTrue = cbOutput;
      }
    }
    
    return isTrue;
  }
  ```

* Time permitting, take this opportunity to introduce students to the `some()` array method and the term **predicate function**.

* Remind students of the usefulness of array methods and encourage them to familiarize themselves with as many as possible. For more information, refer to the [W3Schools guide to array methods](https://www.w3schools.com/jsref/jsref_obj_array.asp).

* Time permitting, discuss some use cases for the `some()` function.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
