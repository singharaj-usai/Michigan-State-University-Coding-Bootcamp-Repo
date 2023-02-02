### Preclass Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudocoding. Remind them that many companies will judge them more on problem-solving skills than coding chops, so strong pseudocoding skills might just land them their dream job one day. Encourage some whiteboarding from students (when relevant) and explain why it's beneficial for them to practice it in the classroom rather than wait for interviews to be their first experience—but move on if there are no volunteers. Do not pressure students.

* 20 minutes before class starts, write the following question on the board or send it out on Slack:

  ```js
  Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
  Without using any built in array methods, return true if the element is in the array or false otherwise. 
  . 

  Ex:
  Input: [1,2,3]  1
  Output: true

  Input: [1,2,3]  4
  Output: false

  Input: ['code', 'dev', 'nerd']  'nerd'
  Output: true

  Input: ['code', 'dev', 'nerd']  'genius'
  Output: false
  ```
 
* After 15 minutes, take 5 minutes to review the solution. You should start recording when going over the answer and send out the answer on Slack at the end of office hours before class starts.

  * Ask students if they found a solution and go over their solution (or the following one if no student solution is provided):

    ```js
    var includes = function(arr, elem){
      for (var i = 0; i < arr.length; i++){
        if(elem === arr[i]){
          return true;
        }
      }
      
      return false;
    }
    ```

  * Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls. 

  * Time permitting, take this opportunity to reintroduce students to the `includes()` array method.
 
  * Remind students of the usefulness of array methods and encourage them to familiarize themselves with as many as possible. You can refer them to the [W3Schools page on JavaScript arrays](https://www.w3schools.com/jsref/jsref_obj_array.asp) for more information.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
