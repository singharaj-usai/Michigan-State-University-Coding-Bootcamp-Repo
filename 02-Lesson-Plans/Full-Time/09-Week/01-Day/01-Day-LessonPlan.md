# 09.1 Full-Time Lesson Plan: How Does JavaScript Execute?

## Overview

In this class, students will be re-introduced to JavaScript within the context of some general computer-science concepts. They will learn about how JavaScript executes an application, including global and functional execution context, in order to understand how the various components work together to run a program. Along the way, they'll review various data structures, including stacks, queues, and callback queues. Students will also use the browser to understand the role of Web APIs and asynchronous behavior. Next, they'll learn about higher-order functions and how to implement them. Finally, they'll explore closures, including how to leverage them using factory functions.

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Global-Execution-Context` through `14-Stu_Closures`.

* Be sure to review the activities before class and try to anticipate any questions that students might have.

* The first activity, `01-Ins_Global-Execution-Context`, steps through the process of how JavaScript executes in the browser. This allows students to "peek behind the curtain" to observe which JavaScript components execute the different parts of a program.

* Students might get stuck on the difference between scope and context. **Scope** refers to the accessibility of variables, whereas **context** refers to the object to which the function belongs. For more information, refer to this [blog post on Scope vs. Context](https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/).

* You will use Jest to test some of the activities. Before class, be sure to familiarize yourself with the unit tests and their descriptions.

* Activities `04-Stu_Functional-Execution-Context` through `08-Stu_Queues` have test suites. Most of the instructions on how to pass the tests are described in each unit test. Please do not modify the tests. These are Node.js activities, so you will need to run `npm install` before running the tests. A `jest --watch` script is used to simplify re-running tests.

* The last activity of the class, `10-Stu_Callback-Queues`, uses a `while` loop to create a blocking process that makes the page unresponsive and slow to load. Students may need to refresh their browsers or select the Block button to demonstrate the blocking effect. The activity's objective is to **delay** the blocking process in order to allow the page to render quickly, thus improving the UX and webpage performance.

* Closures are a large part of the day's activities. If you are feeling a little unsure about them, take some time to become more familiar with them before class.

* In `13-Ins_Closures`, we use `console.dir`. Encourage students to learn about it on their own time, as we will only be using it for demonstration purposes.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Explain the differences between a global execution context and a function execution context.

* Identify when a function execution context is created and what is stored in it.

* Describe the functions of the call stack and the callback queue.

* Compare and contrast a stack vs. a queue in terms of LIFO and FIFO.

* Summarize asynchronous behavior and the role of the event loop.

* Construct their own higher-order functions.

## Slide Deck

* [Module 17 Slide Deck](https://docs.google.com/presentation/d/16vSjLoHs48HwxdQIc5V67tvhW9f-VZBxElEY2nltVgA/edit?usp=sharing)

## Time Tracker

| Start   | #   | Activity Name                                   | Duration |
| ------- | --- | ----------------------------------------------- | -------- |
| 10:00AM | 1   | Instructor Do: Stoke Curiosity                  | 0:10     |
| 10:10AM | 2   | Instructor Demo: Global Execution Context       | 0:05     |
| 10:15AM | 3   | Student Do: Global Execution Context            | 0:15     |
| 10:30AM | 4   | Instructor Review: Global Execution Context     | 0:10     |
| 10:40AM | 5   | Instructor Demo: Functional Execution Context   | 0:05     |
| 10:45AM | 6   | Student Do: Functional Execution Context        | 0:15     |
| 11:00AM | 7   | Instructor Review: Functional Execution Context | 0:10     |
| 11:10AM | 8   | Instructor Demo: Stacks                         | 0:05     |
| 11:15AM | 9   | Student Do: Stacks                              | 0:15     |
| 11:30AM | 10  | Instructor Review: Stacks                       | 0:10     |
| 11:40AM | 11  | Instructor Demo: Queues                         | 0:05     |
| 11:45AM | 12  | Student Do: Queues                              | 0:15     |
| 12:00PM | 13  | BREAK                                           | 0:30     |
| 12:30PM | 14  | Instructor Review: Queues                       | 0:10     |
| 12:40PM | 15  | Instructor Demo: Callback Queue                 | 0:05     |
| 12:45AM | 16  | Student Do: Callback Queue                      | 0:15     |
| 1:00PM  | 17  | Instructor Review: Callback Queue               | 0:15     |
| 1:15PM  | 18  | Instructor Do: Stoke Curiosity                  | 0:10     |
| 1:25PM  | 19  | Instructor Demo: Higher-Order Functions         | 0:05     |
| 1:30PM  | 20  | Student Do: Higher-Order Functions              | 0:15     |
| 1:45PM  | 21  | Instructor Review: Higher-Order Functions       | 0:10     |
| 1:55PM  | 22  | Instructor Demo: Closures                       | 0:05     |
| 2:00PM  | 23  | Student Do: Closures                            | 0:15     |
| 2:15PM  | 24  | Instructor Review: Closures                     | 0:15     |
| 2:30PM  | 25  | END                                             | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/16vSjLoHs48HwxdQIc5V67tvhW9f-VZBxElEY2nltVgA/edit?usp=sharing) and follow these prompts on the corresponding slides:

  * **What is computer science?**

    * Formally known as "the study of computers and computational systems."

    * The study of the design, development, and analysis of software systems.

    * The art of telling a computer what to do through a set of instructions.

  * **How will understanding computer science make us better programmers?**

    * These concepts often appear during technical interviews.

    * When inheriting large codebases, you might be asked to optimize code efficiency.

    * Understanding what makes up a program will help us design software more efficiently.

    * Discovering how a program executes can tell us how to avoid performance issues.

    * Computational thinking refers to the formulation of a solution using logic, patterns, and problem solving methods.

  * **Which computer science concepts will we learn?**

    * We will learn about algorithms and how to gauge their performance.

    * We will learn about data structures and how they are implemented in JavaScript.

  * **What is Big O notation?**

    * Big O notation helps us describe how runtime will scale when we increase input size (n).

    * It is denoted with a capital O alongside the growth factor (in parentheses).

      * Example: The time complexity of simple search is O(n)

  * **What is a data structure?**

    * A way of storing data so that it can be used efficiently by the computer or browser.

    * They are built upon simpler primitive data types (like variables).

    * It is non-opinionated, in the sense that it is only responsible for holding the data.

  * **Why is computer science a common category for technical interview questions?**

    * Understanding computer science fundamentals shows that you know how a program functions and how to make it faster and more efficient.

    * Many job candidates are also computer science graduates.

    * Comprehending use cases of data structures and the algorithms that manipulate them will help you create more performant applications.

  * **Mini-Project**

    * A mock interview to practice technical communication and problem-solving in a live setting.

* Navigate to `28-Stu_Mini-Project/README.md` in your IDE and demonstrate the following:

  * Although we may know how to write code, we also need to learn how to explain our code verbally in an interview.

  * This will demonstrate to an interviewer how we solve problems in a logical and iterative manner.

  * This will also showcase our ability to communicate technical concepts clearly and concisely.

  * In this mini-project, you'll practice interviewing with one another while learning how to implement sorting algorithms.

  * Each of the students will take turns as the candidate and interviewer to help prepare for a technical interview.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 How to communicate technical concepts in a clear and concise manner.

  * ☝️ How does interview practice build off or extend previously learned material?

  * 🙋 Just knowing the material isn't enough for technical interviews. By practicing technical communication, we will improve our ability to show off what we have learned.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Just knowing how to code is not enough to pass most technical interviews. Learning soft skills such as communication is a key factor in most hires.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Global Execution Context (5 min)

* Open `01-Ins_Global-Execution-Context/index.html` in your browser and demonstrate the following:

  * 🔑 When the program runs, the `main()` function is placed onto the call stack and a global execution context is created.

  * The `main()` function is a reference to the program that is running. `main()` is removed off the call stack when the program has concluded its execution.

  * 🔑 Follow the comment prompts, following the thread of execution in sequence, describing how each statement is processed.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a Web API?

  * 🙋 A library of methods and properties located on the `window` object, which is associated with the browser.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Global-Execution-Context/README.md`.

### 3. Student Do: Global Execution Context (15 min)

* Direct students to the activity instructions found in `02-Stu_Global-Execution-Context/README.md`.

* Break students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to the Code Execution Process

  Work with a partner to add comments that describe the functionality of the code found in [Unsolved](./Unsolved).

  ## 📝 Notes

  Refer to the documentation:

  [MDN Web Docs on the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

  * Due to the visual nature of this exercise, it might be helpful to sketch the execution context and allocation of variables.

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * What is the scope chain?

  Use [Google](https://www.google.com) or another search engine to research the above.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Global Execution Context (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with execution context? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Call stack and callback queue

  * ✔️ Web APIs

  * ✔️ Execution context

* Open `02-Stu_Global-Execution-Context/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 The variable `carNoise` is stored in the global execution context and is assigned the value `Honk`.

  * The function definition `goFast` is also stored in the global execution context and is assigned the function definition.

  * 🔑 A conditional statement evaluates the `confirm()` to execute `goFast()`. Because `confirm()` is a Web API, once it has resolved, the function `goFast()` is placed on the callback queue, then is allowed to get pushed onto the call stack to be executed by the event loop.

  * 🔑 When `goFast()` is invoked, the argument of the function is assigned to the parameter `speed` in the functional execution context of `goFast`.

  * `makeNoise` is stored in the function execution context of `goFast`.

  * 🔑 Invoking `makeNoise()` places the function on the call stack. Once executed, a new functional execution context is created for `makeNoise`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens to the functional execution context when a function has executed?

  * 🙋 When the function has completed execution, the functional execution context is removed from the program's memory during a memory clean-up process. The memory no longer stores the associated local variables or function definitions.

  * ☝️ What are some benefits of having variables that are locally scoped?

  * 🙋 Enables duplicate variable names without conflict in an application, privatization of variables, and abstraction of code; and reduces pollution of the global namespace.

  * ☝️ What can we do if we don't completely understand this?

  * We can refer to supplemental material, read the [MDN Web Docs on the this keyword, global context, and function context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Functional Execution Context (5 min)

* Open `03-Ins_Functional-Execution-Context/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 Keyword `this` in the global execution context refers to the `window` in the browser.

  * 🔑 In a functional execution context, the value of `this` depends on how the function was called.

* Open `03-Ins_Functional-Execution-Context/index.html` in your browser, open the console, and demonstrate the following:

  * When calling a method of an object, `this` refers to the object it was called from.

  * 🔑 Functional execution context includes a reference to how the function was called to assign `this`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens to `this` if we refactor `myFuncB` to use an arrow function?

  * 🙋 `this` retains the reference to `window`.

  * ☝️ Why is this important to know?

  * 🙋 Questions about `this` are popular technical interview questions.

  * ☝️ What happens to the value of `this` in `myFuncA` if we add `use strict`?

  * 🙋 `this` becomes `undefined` in the `myFuncA` because it was not assigned.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Functional-Execution-Context/README.md`.

### 6. Student Do: Functional Execution Context (15 min)

* Direct students to the activity instructions found in `04-Stu_Functional-Execution-Context/README.md`.

* Break students into pairs that will work together on this activity.

  ```md
  # 🐛 Unit Tests Fail Due to ReferenceError

  Work with a partner to resolve the following issue:

  * The unit tests for the function do not pass.

  ## Expected Behavior

  * When we run the unit test, the defined tests pass.

  ## Actual Behavior

  * When we run the unit tests, the defined tests do not pass.

  ## Steps to Reproduce the Problem

  1. In the command line, from the [Unsolved](./Unsolved) directory, run `npm install`.

  2. Run `npm test` to run the unit test.

  3. The tests defined in the `__tests__` directory do not pass.

  ---

  ## 💡 Hints

  * How can the unit test descriptions help us determine what the function is or is not doing?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * What does the keyword `this` reference in Node.js for the global context?

  Use [Google](https://www.google.com) or another search engine to research the above.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Functional Execution Context (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with functional execution context? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Functional execution context lifecycle

  * ✔️ Return statement

  * ✔️ Private variables

* Open `04-Stu_Functional-Execution-Context/Solved/index.js` in your IDE and explain the following:

  * 🔑 The variables `total` and `i` are declared in the inner function `sum()`. Therefore neither variable can be accessed in the scope of the outer function `arg()` and can be considered private variables.

  * This was the cause of the error which failed the tests.

    ```js
    function sum() {
      let total = 0;
      for(let i = 0; i < array.length; i++) {
        total += array[i];
      }
    }
    ```

  * 🔑 By adding the statement `return total` to the inner function `sum()`, we explicitly end the function's execution, remove the function execution context, pop `sum()` off the call stack, and assign the value of `total` to where `sum()` was called.

    ```js
    function sum() {
      let total = 0;
      for(let i = 0; i < array.length; i++) {
        total += array[i];
      }

      return total;
    }
    ```

  * Calling `sum()` in the outer function executes the inner function, which returns the sum of the numbers in the array.

    ```js
    function avg(array) {
      function sum() {
        let total = 0;
        for(let i = 0; i < array.length; i++) {
          total += array[i];
        }
        // total is accessible in the sum()'s execution context
        return total;
      }
      // value of total is returned to where sum() is invoked
      return sum()/array.length;
    }
    ```

  * Navigate to `04-Stu_Functional-Execution-Context/Solved` in the terminal and execute the following commands:

    ```bash
    npm install; npm test;
    ```

  * Demonstrate that all the tests are passing.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we want to have private variables?

  * 🙋 Allows variables to have duplicate names without conflicts in a program, eliminates accidental data modifications due to pollution of the global namespace, abstracts logic to single concerns, and adds security by eliminating availability to variables.

  * ☝️ What happens to the functional execution context of a function when that function has finished executing?

  * 🙋 The functional execution context of a function is destroyed when the function finishes executing.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on function context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Function_context), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Stacks (5 min)

**Important**: Only demonstrate the passing tests since students will be creating a stack on their own in the next activity.

* Navigate to `05-Ins_Stacks` in your terminal and execute the following command:

  ```bash
  npm install; npm test;
  ```

* Open `05-Ins_Stacks/__tests__/index.test.js` in your IDE to demonstrate the following:

  * The test descriptions give you clues on how to implement a stack, which is a type of data structure:

    * `container` is the name of the initialized variable. What is the data type?

    * The names and functionality are described for both methods.

  * The third test description tells us that we can add an item to the top of the stack (i.e., the end of the array).

  * The fourth test description tells us that we can remove an item from the top of the stack (i.e., the end of the array).

* Navigate to `05-Ins_Stacks` in the terminal and execute the following command:

  ```bash
  npm install; npm test;
  ```

  * The response in the console reveals that all four tests are passing.

  * Remind students not to change or modify any of the tests.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Does anyone know why a stack's operations are considered last-in-first-out or LIFO?

  * 🙋 The latest item to be added to a stack is also first one to be removed.

  * ☝️ In a JavaScript execution context, what is being added and removed from the stack?

  * 🙋 Function calls.

  * ☝️ Why are we learning about stacks?

  * 🙋 Data structures store data and are fundamental components in computer science. Data structures commonly appear on technical interview questions, so understanding basic ones such as a stack is important.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Stacks/README.md`.

### 9. Student Do: Stacks (15 min)

* Direct students to the activity instructions found in `06-Stu_Stacks/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement a Stack by using a Class

  Work with a partner to implement the following user story:

  * As a developer, I want to create a class that implements a stack data structure so that I can better understand how a JavaScript call stack works.

  ## Acceptance Criteria

  * It's done when we run the tests for the `Stack` class and the defined tests pass.

  ---

  ## 💡 Hints

  * Which array methods can be used to implement a stack?

  * What do the unit test descriptions tell us about which methods we need?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * What are some other data structures? Think about what their use cases might be.

  Use [Google](https://www.google.com) or another search engine to research the above.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Stacks (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with stacks? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ LIFO

  * ✔️ `push`/`pop` methods

* Open `06-Stu_Stacks/Solved/index.js` in your IDE and explain the following:

  * 🔑 We use a constructor to create a container to store the data. We assign the default value as an empty array.

    ```js
    class Stack {
    constructor(container = []) {
      this.container = container;
    }
    ```

  * 🔑 We use an array to simulate the concept of a stack, where the end of the array is the "top" of the stack.

  * 🔑 Add the method, `addToStack`, to add an element at the end of the array using the array method `push`. We use a parameter to add the element.

    ```js
    addToStack(el) {
      return this.container.push(el);
    }
    ```

  * 🔑 Add the method `removeFromStack` to remove an element from the end of the array using the array method `pop`.

    ```js
    removeFromStack()) {
      return this.container.pop();
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a real-world situation that replicates the operations in a stack?

  * 🙋 A stack of books, cafeteria trays, Pez dispensers, or lip balm.

  * ☝️ What is an example of a stack in programming?

  * 🙋 The JavaScript call stack! In a string or array, we can also use a stack to reverse order, check for symmetry, or check for equality.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Wikipedia documentation on data structures](https://en.wikipedia.org/wiki/Data_structure), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Queues (5 min)

**Important**: Only demonstrate the passing tests since students will be creating a queue on their own in the next activity.

* Navigate to `07-Ins_Queues` in your terminal and execute the following command:

  ```bash
  npm install; npm test;
  ```

* All four tests are currently passing.

* Open `07-Ins_Queues/__tests__/index.test.js` in your IDE to demonstrate the following:

  * The test descriptions give you clues on how to implement a queue, which is a type of data structure:

    * `container` is the name of the initialized variable.

    * The names and functionality are described for both methods.

  * The third test description tells us that we can add an item to the **back** of the queue (i.e., the array).

  * The fourth test description tells us that we can remove an item from the **front** of the queue (i.e., the array).

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How is this data structure different from a stack?

  * 🙋 Stacks only add and remove elements from the top of the structure, whereas queues add from one side and remove from the other.

  * ☝️ Why are a queue's operations considered first-in-first-out or FIFO?

  * 🙋 The first item to be added is the first item to be removed.

  * ☝️ How does this relate to JavaScript callbacks?

  * 🙋 The first callback added to the queue will be the first processed by the event loop.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Queues/README.md`.

### 12. Student Do: Queues (15 min)

* Direct students to the activity instructions found in `08-Stu_Queues/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement a Queue by using a Class

  Work with a partner to implement the following user story:

  * As a developer, I want to create a class that implements a queue data structure so that I can better understand how a JavaScript callback queue works.

  ## Acceptance Criteria

  * It's done when we run tests for the `Queue` class and the defined tests pass.

  ---

  ## 💡 Hints

  * Which array methods can be used to implement a queue?

  * What do the unit test descriptions tell us about which methods we need?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * What are some uses cases for a queue in programming?

  Use [Google](https://www.google.com) or another search engine to research the above.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: Queues (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with queues? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ FIFO

  * ✔️ `push`/`shift` methods

* Open `08-Stu_Queues/Unsolved/index.js` in your IDE and explain the following:

  * 🔑 We initialize the Stack class with a container to store the data. This was set at default value as an empty array.

    ```js
    class Queue {
    constructor(container = []) {
      this.container = container;
    }
    ```

  * 🔑 Add the method, `addToQueue`, to add an element at the back of the array using the array method `push`.

    ```js
    addToQueue(el) {
      return this.container.push(el);
    }
    ```

  * 🔑 Add the method, `removeFromQueue`, to remove an element from the front of the array using the array method `shift`.

    ```js
    removeFromQueue() {
      return this.container.shift();
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can someone name a real world situation that replicates the operations in a queue?

  * 🙋 Grocery store line, on-ramp for the freeway, or getting on/off public transportation

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [documentation on data structures in Wikipedia](https://en.wikipedia.org/wiki/Data_structure), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Callback Queue (5 min)

* Run `09-Ins_Callback-Queue/index.js` from the command line and demonstrate the following:

  * 🔑 The sequence of the logs is altered due to the `setTimeout`.

  * Even when a timer set to zero, the log sequence is still affected due to the event loop and callback queue.

  * 🔑 The timer only guarantees a minimum amount of accounted time, not when the callback will execute.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is causing the delay for the statement "Are you listening?" even though the timer is set to zero?

  * 🙋 Because `setTimeout` is a Web API, once the timer resolves, the callback function is first placed in the callback queue which must wait for the event loop to then check for an idle call stack before allowing the statement to get pushed onto the stack so it can be executed.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Callback-Queue/README.md`.

### 16. Student Do: Callback Queue (15 min)

* Direct students to the activity instructions found in `10-Stu_Callback-Queue/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 User Interaction with Application Is Blocked on Page Load

  Work with a partner to resolve the following issue:

  * User interactivity with the application is blocked on page load.

  ## Expected Behavior

  * When the page loads, a user can interact with the form elements.

  * A user must still wait 8 seconds before they can submit the form, though.

  ## Actual Behavior

  * When the page loads, a user is temporarily blocked from interacting with any elements on the page.

  ## Steps to Reproduce the Problem

  1. Open the `index.html` file in the browser.

  2. The page takes an extended length of time to load.

  ---

  ## 💡 Hints

  * What is a better user experience for delaying functionality?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are common blocking and non-blocking functions in JavaScript?

  Use [Google](https://www.google.com) or another search engine to research the above.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: Callback Queue (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with callback queues? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Node.js vs. the browser

  * ✔️ Asynchronous behavior

* Open `10-Stu_Callback-Queues/Solved/index.html` in your IDE and explain the following:

  * We add a class to initially hide the `<button>` element.

    ```html
    <button class="btn form-input display-none">Submit</button>
    ```

* Open `10-Stu_Callback-Queues/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We can leverage the asynchronous behavior of JavaScript by placing the delay in a `setTimeout()`.

    ```js
    setTimeout(() => {
      document.querySelector('form button')
        .classList.remove('display-none');
    }, 8000);
    ```

  * Delaying with a `setTimeout()` allows the page to render and time for the user to interact with the other elements.

  * 🔑 Best practice is to use timers when creating intentional delays instead of blocking the event loop with synchronous logic.

  * Node.js and the browser work similarly in the way they handle asynchronous behavior.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do synchronous processes block the call stack?

  * 🙋 JavaScript is single threaded, so synchronous network requests or large processing loads occupy the thread, not allowing any other code to execute.

  * ☝️ What is the role of the event loop in asynchronous behavior in JavaScript?

  * 🙋 The event loop pushes callback functions onto the call stack from the callback queue when the call stack is empty or idle.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Event_loop), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝ What is a paradigm in programming?

  * 🙋 A paradigm a style or philosophy that a programming language follows.

  * ☝️ What is object-oriented programming (OOP)?

  * 🙋 OOP is a programming paradigm that JavaScript uses. In OOP, we model the data around objects.

  * ☝️ What other paradigms does JavaScript use?

  * 🙋 Functional and procedural.

* Explain that we will be learning about the technical portion of the interview process, with a focus on the functional paradigm of JavaScript.

  * ☝️ In JavaScript, how else can we create objects?

  * 🙋 With classes and constructor functions.

  * ☝️ What are some problems that may occur when using class inheritance?

  * 🙋 The larger the app becomes, the more difficult it can be to restructure the class hierarchy.

* Explain to students that we will be learning an entirely new way to build objects by using factory functions.

* Let students know ahead of time that these topics can get abstract and encourage them to ask questions.

* JavaScript has many layers, and interviewers want to know how well a candidate understands them.

* In JavaScript, we have a design choice to make early on that will dictate if we use inheritance or composition.

* JavaScript uses three different paradigms and it is important as developers that we understand each one and how to leverage them to our benefit.

* Let students know that this knowledge comes with time and practice, and to not fall into that sinking feeling of imposter syndrome.They have been using these concepts all along and now we are just expanding on that knowledge.

### 19. Instructor Demo: Higher Order Functions (5 min)

* Open `11-Ins_Higher-Order-Functions/index.js` in your IDE and explain the following:

  * We first create a function that we will be using to pass into the JavaScript provided higher-order function, `.map()`.

  * We have access to the element and the index of the element which is provided to us through the `.map()` method.

    ```js
    function evenIndexMultiplier(number, index) {
      // Code...
    }
    ```

  * Next, we create the logic for the function that will be passed into the higher-order function, the `.map()` method.

    ```js
    function evenIndexMultiplier(number, index) {
      if (index % 2 === 0) {
        return number * 10;
      }
      return number;
    }
    ```

  * 🔑 Finally, we pass the newly created function into the `.map()` method and storing it into a variable named `evenIndexes`.

  * 🔑 Now we have a function which accepts another function as an argument, creating a higher-order function.

  * 🔑 We are not limited to only using `evenIndexMultiplier` inside the `.map()` method. We can use `evenIndexMultiplier` anywhere in the application or even in a custom higher-order function.

    ```js
    const evenIndexes = arrayIndex.map(evenIndexMultiplier);
    ```

* Run `node index.js` from the command line and demonstrate the following:

  * As we can see every even index is being multiplied by ten which is exactly what the function was meant to do.

  ```text
  [10, 52, 350, 6, 720, 7, 30, 19, 320, 54, 780, 95, 970]
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use higher-order functions to our benefit?

  * 🙋 It makes our code more reusable.

  * ☝️ Are we limited to using a higher-order function provided by JavaScript?

  * 🙋 No, we can create our own. The function just needs to be able to accept another function for an argument.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Higher-Order-Functions/README.md`.

### 20. Student Do: Higher-Order Functions (15 min)

* Direct students to the activity instructions found in `12-Stu_Higher-Order-Functions/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create a Function to Pass into the Reducer Method That Finds the Average of an Array of Numbers

  Work with a partner to implement the following user story:

  * As a teacher, I want to be able to find the average grade of my entire class.

  * As a developer, I want to be able to reuse my `findAverage` function in multiple filter method calls throughout my application so that my code is not being duplicated unnecessarily.

  ## Acceptance Criteria

  * It's done when the `findAverage` function correctly calculates the average of an array of numbers.

  * It's done when the `findAverage` function is being correctly passed through the `.reduce()` method.

  ## 💡 Hints

  How do you find out how many elements are in an array?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other built-in functions are also higher-order functions?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Higher-Order Functions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with higher-order functions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Accepting another function as an argument

  * ✔️ `.reduce()`

* Open `12-Stu_Higher-Order-Functions/Solved/index.js` in your IDE and explain the following:

  * We create a function named `findAverage` that has access to four arguments: `accumulator`, `currentValue`, `index`, and `array`.

  * 🔑 We have access to these arguments because they are provided to us through the `.reduce()` method.

    ```js
    function findAverage(accumulator, currentValue, index, array) {
      // Code...
    }
    ```

  * Check to see if we are at the final index of the given array.

  * If so, we return the total plus the current value and divide it by how many elements are in the array.

    ```js
    function findAverage(accumulator, currentValue, index, array) {
      if (index === array.length - 1) {
      return (accumulator + currentValue) / array.length;
      }
    }
    ```

  * If we have not reached the end of the array, add the total to the current value we are on.

    ```js
    function findAverage(accumulator, currentValue, index, array) {
      if (index === array.length - 1) {
        return (accumulator + currentValue) / array.length;
      }
      return accumulator + currentValue;
    }
    ```

  * 🔑 Pass the newly created `findAverage` function into the `.reduce()` method.

    ```js
    let gradeAverage = grades.reduce(findAverage);
    ```

* Run `node index.js` from the command line and demonstrate the following:

  * 🔑 Inside the `console`, we should see the correct average being displayed.

    ```text
    [79.5]
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some other JavaScript methods that are higher-order functions?

  * 🙋 `.filter()` `.forEach()`

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: Closures (5 min)

* Open `13-Ins_Closures/index.js` in your IDE and explain the following:

  * 🔑 We first create a function named `bankAccount`, which will be the outer function, and create a closure around the soon-to-exist inner function:

    ```js
    function bankAccount() {
      // Code...
    }
    ```

  * Next, we create two variables inside the outer function, which will be scoped to the inner function that we will be creating.

    ```js
    function bankAccount() {
      const checking = 400;
      const savings = 1000;
    }
    ```

  * 🔑 To use a closure, the function must return an object with some type functionality, whether it be one method or multiple.

    ```js
    function bankAccount() {
      const checking = 400;
      const savings = 1000;
      return {
        displayFunds: function () {
          // Code...
        },
      };
    }
    ```

  * Inside the object being returned, we create a `displayFunds` method that logs the `checking` and `savings` variables.

    ```js
    function bankAccount() {
      const checking = 400;
      const savings = 1000;
      return {
        displayFunds: function () {
          console.log(
            `You have $${checking} in your checking account and $${savings} in your savings account`
          );
        },
      };
    }
    ```

  * Let's store the `bankAccount` function inside a variable and test what happens when we call the `displayFunds()` method.

    ```js
    const myBank = bankAccount();

    myBank.displayFunds()
    ```

* Open `13-Ins_Closures/index.html` in your browser and navigate to Chrome DevTools to explain the following:

  * 🔑 In the console, we can see that the `displayFunds()` method has access to the `bankAccount()` function's lexical environment.

    ```text
    You have $400 in your checking account and $1000 in your savings account
    ```

  * The next statement we will see is from `console.dir`. Feel free to look up what `console.dir` does, but we are only using it for demonstration purposes.

    ```js
    console.dir(myBank)
    ```

  * 🔑 By doing this, we can inspect the scope of the `displayFunds()` method and see that it does have a closure with a reference to the two variables in the outer functions' lexical environment.

  * Another interesting thing to point out is that the function is also an object.

    ```text
    Object
      displayFunds: ƒ ()
        arguments: null
        caller: null
        length: 0
        name: "displayFunds"
        prototype: {constructor: ƒ}
        __proto__: ƒ ()
        [[FunctionLocation]]: Closures.js:24
        [[Scopes]]: Scopes[3]
          0: Closure (bankAccount)
            checking: 400
            savings: 1000
          1: Script {myBank: {…}}
          2: Global {window: Window, self: Window, document: document, name: "", location: Location, …}
      __proto__: Object
    ```

  * 🔑 For the final two statements, we can see that the variables inside the `bankAccount()` function are not accessible from outside the function's lexical environment.

    ```text
    undefined
    undefined
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can we access a function's variable from outside of its scope?

  * 🙋 No, we have to be inside its lexical environment.

  * ☝️ How do we use a closure?

  * 🙋 Returning an inner function that has access to the outer function's lexical environment.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Closures/README.md`.

### 23. Student Do: Closures (15 min)

* Direct students to the activity instructions found in `14-Stu_Closures/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create a Counter Function That Uses a Private Variable

  Work with a partner to implement the following user story:

  * As a teacher, I want a way to keep track of the number of students I see every day.

  * As a developer, I want to keep my `count` variable data private.

  ## Acceptance Criteria

  * It's done when the `Counter` function correctly increments by 1.

  * It's done when I can only access the `count` variable from within the `Counter` function.

  * It's done when all of the unit tests pass using `npm test`.

  ## 💡 Hints

  When is a closure created?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the lexical environment?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 24. Instructor Review: Closures (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with closures? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Closures

  * ✔️ Private variables

  * ✔️ Lexical environment

* Open `14-Stu_Closures/Solved/index.js` in your IDE and explain the following:

  * 🔑 By creating the function `counter`, we have also created a closure.

    ```js
    function counter() {
      // Code...
    }
    ```

  * 🔑 Inside the outer function, we create a private `count` variable that will hold the number of times the function is called.

    ```js
    function counter() {
      let count = 0;
    }
    ```

  * 🔑 Next, we use the closure by returning an object by using the `increment` method, which increases the `count` by one.

    ```js
    function counter() {
      let count = 0;
      return {
        increment: function () {
          return ++count;
        },
      };
    }
    ```

  * If we type `npm test` in the command line, we should see the following:

    ```bash
      PASS  __tests__/index.test.js
      √ counter is a defined function (2 ms)
      √ counter is returning as an object
      √ count should equal 0 (1 ms)
      √ count should equal 1
      √ count should equal 4

    Test Suites: 1 passed, 1 total
    Tests:       5 passed, 5 total
    Snapshots:   0 total
    Time:        1.974 s
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How else could we use closures?

  * 🙋 We could conceal sensitive variables that shouldn't be mutated outside of the function's scope.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
