# Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skill set during this course. The class is designed to make them great developers, and these preclass questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience—but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following problem on the board or send it out on Slack:

  ```js
  Write a function that takes an array of numbers and a function as parameters. The function parameter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array. 

  Ex:
  Input: [1,2,3]  function(num){return num * 2*}
  Output: [2,4,6]

  Input: [1,2,3]  function(num){return num + 1}
  Output: [2,3,4]

  Input: [1,2,3] function(num) {return num /2}
  Output: [.5, 1. 1.5]

  Input: [1,2,3] function(num) {return num - 2}
  Output: [-1, 0, 1]
  ```

* After 15 minutes, ask students if they have an answer.

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

* Start recording when you review the answer, and send it out on Slack at the end of office hours, before class starts.

  ```js
  var map = function(arr, cb){
    var newArr = [];

    for (var i = 0; i < arr.length; i++){
      var newNum = cb(arr[i]);
      newArr.push(newNum);
    }
    
    return newArr;
  }
  ```

* Point out how this function can be used to accomplish the same thing we accomplished last class (doubling array). Discuss how it's more versatile and reusable.

* Time permitting, take this opportunity to introduce students to the `map()` array method.

* Time permitting, discuss some use cases for the `map()` function.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
