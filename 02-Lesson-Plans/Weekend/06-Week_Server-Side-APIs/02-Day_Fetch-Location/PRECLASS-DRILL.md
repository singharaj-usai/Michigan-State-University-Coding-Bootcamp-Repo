### Pre-class Drill

* Let students know that it's time for the preclass drill of the day. Remind them that interviewing is a skill that is in some ways separate from practical coding, and that they need to work hard to hone this skillset during this course. The class is designed to make them great developers, and these pre-class questions are designed to make them awesome interviewers.

* Encourage students to begin by pseudo-coding. Remind them that many companies are judging more on problem solving skills than coding chops, so having strong pseudo-coding skills to fall back on may just land them their dream job one day. You should encourage some white boarding from students (when relevant) and explain why it's beneficial for them to do it in the classroom rather than wait for their first time to be during interviews, but move on if there are no volunteers. Discourage heavy pressure for students.

* 20 min before class starts write the following problem on the board or Slack it out:

* Run the following code and explain the output:

```js
var sample = function(){
    var a = b = 3;
}
sample();
console.log("Is a defined?", typeof a !== "undefined");
console.log("Is b defined?", typeof b !== "undefined");

```

* Tell students that this is a bit different from the problems we've seen so far. Explain that:

  * There are a few different types of interview problems that they'll see as developers. 

  * Some focus on logic, like the ones we've seen so far, and some focus on measuring understanding of the language.

  * JavaScript has a lot of quirks that make it unique from other languages. Understanding those quirks will make them stronger JavaScript developers. 

* After 15 minutes explain the following points:

  * `var a = b = 3` is equivalent to writing:
  ```js
  b = 3;
  var a = b; 
  ```

  * This means that `b` is created globally (unless you use strict mode) because there is no `var` keyword in the variable definition.

  * After `b` is created globally, `b` is assigned the value 3. Then `a` is created locally inside the function and assigned the value of `b`, which is 3. 
  
  * Because `a` is created locally, it doesn’t exist outside the function. 

* Take a couple of student questions, if time permits, before moving on.
