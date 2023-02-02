# 09.2 Full-Time Lesson Plan: Functional Programming in JavaScript

## Overview

In today's class, students will take a dive deep into how JavaScript executes. They will start off with factory functions. Then they will learn about the difference between inheritance and a composition-based approach to designing an application. Students will be introduced to a new way to delegate events by using closures. Then the lesson diverges from the JavaScript-specific topics and introduces students to algorithms that they're likely to encounter during a technical interview.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Factory-Functions` through `27-Evr_Shell`.

* Be sure to review the activities before class and try to anticipate any questions that students might have.

* Today's activities are especially aimed at helping students gain practice experience in interviews and help move them from classroom learners to career-ready developers. Please allow time to share with the class your own experiences as a seasoned industry professional -- as you are comfortable -- in both interviews and on the job. In addition, the activities are built to allow time for conversations centered the key concepts to help the students gain confidence in both asking questions and explaining their ideas to others.

* Closures are a large part of the day's activities. If you are feeling a little unsure about them, take some time to become more familiar with them before class.

* The `17-Ins_Factory-Vs-Constructor` demo might take longer than five minutes, but the previous and subsequent activities should take less time. It's important to take the time to talk about the code while live-coding the demo for this particular activity.

* We will use jest in a couple of the activities, so make sure students use `npm test` when prompted.

* Because [Big O notation](https://www.bigocheatsheet.com/) is difficult to explain in an activity, spend some time after each algorithm review to help students visualize the differences in time complexities and performance.

* If students struggle with the `Everyone Do: Shell` activity, walk them through it using the talking points provided. Otherwise, support the students as they do the activity and briefly review it at the end. They might not be able to finish, and that's okay!

* **Important:** Remind students to have MongoDB installed before coming to the next class! Direct students to the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Explain the lexical environment.

* Identify encapsulated variables.

* Create a factory function.

* Distinguish the difference between inheritance and composition design.

* Implement a linear search algorithm.

* Use recursion to solve a Fibonacci sequence algorithm.

* Implement a binary search algorithm and know when to use it over a linear search algorithm.

* Write shell scripts to be executed from the command line.

## Time Tracker

| Start  | #   | Activity Name                                        | Duration |
|---     |---  |---                                                   |---       |
| 10:00AM| 1   | Instructor Demo: Factory Functions                   | 0:05     |
| 10:05AM| 2   | Student Do: Factory Functions                        | 0:15     |
| 10:20AM| 3   | Instructor Review: Factory Functions                 | 0:10     |
| 10:30AM| 4   | Instructor Demo: Constructor vs. Factory functions   | 0:05     |
| 10:35AM| 5   | Student Do: Constructor vs. Factory functions        | 0:15     |
| 10:50AM| 6   | Instructor Review: Constructor vs. Factory functions | 0:10     |
| 11:00AM| 7   | Instructor Demo: Event Delegation and Handling       | 0:05     |
| 11:05AM| 8   | Student Do: Event Delegation and Handling            | 0:15     |
| 11:20AM| 9   | Instructor Review: Event Delegation and Handling     | 0:10     |
| 11:30AM| 10  | FLEX                                                 | 0:30     |
| 12:00PM| 11  | BREAK                                                | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity                       | 0:10     |
| 12:40PM| 13  | Instructor Demo: Linear Search                       | 0:05     |
| 12:45PM| 14  | Student Do: Linear Search                            | 0:15     |
| 1:00PM | 15  | Instructor Review: Linear Search                     | 0:10     |
| 1:10PM | 16  | Instructor Demo: Recursion                           | 0:05     |
| 1:15PM | 17  | Student Do: Recursion                                | 0:15     |
| 1:30PM | 18  | Instructor Review: Recursion                         | 0:10     |
| 1:40PM | 19  | Instructor Demo: Binary Search                       | 0:05     |
| 1:45PM | 20  | Student Do: Binary Search                            | 0:15     |
| 2:00PM | 21  | Instructor Review: Binary Search                     | 0:10     |
| 2:10PM | 22  | Everyone Do: Shell Scripts                           | 0:20     |
| 2:30PM | 23  | END                                                  | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Factory Functions (5 min)

* Welcome students to class.

* Open `15-Ins_Factory-Functions/index.js` in your IDE and explain the following:

  * We create a function that accepts three arguments: `name`, `age`, and `city`.

    ```js
    function createUser(name, age, city) {
      // Code...
    }
    ```

  * Factory functions are similar to JavaScript classes.

  * 🔑 Instead of using a `constructor()` and binding the arguments to `this`, we create an object inside the function that holds our arguments.

  * 🔑 Because we don't have a `constructor()` function, `this` refers to the parent object.

    ```js
    function createUser(name, age, city) {
      let user = {
        name: name,
        age: age,
        city: city
      }
    }
    ```

  * 🔑 Factory functions use closures to encapsulate variables, making it difficult to mutate the data from outside of the function scope.

  * For us to leverage closures, we need to return an object with a method inside of it. We return two, `introduceSelf()` and `location()`.

    ```js
    function createUser(name, age, city) {
      let user = {
        name: name,
        age: age,
        city: city
      }
      return {
        introduceSelf: function() {
          // Code...
        },
        location: function() {
          // Code...
        }
      }
    }
    ```

  * Inside both of the methods, we `console.log` the user using the object we created with dot notation instead of `this`.

    ```js
    function createUser(name, age, city) {
      let user = {
        name: name,
        age: age,
        city: city
      }
      return {
        introduceSelf: function() {
          return console.log(`Hi my name is ${user.name} and I am currently ${user.age} years old!`)
        },
        location: function() {
          return console.log(`${user.name} is located in ${user.city}`)
        }
      }
    }
    ```

  * 🔑 This is similar to JavaScript classes except that we no longer need the `new` keyword; instead, we use the `createUser` factory function to create a user.

    ```js
    const userOne = createUser('Beverly', 58, 'Phoenix')
    ```

* Run `node index.js` from the command line and demonstrate the following:

  * As we can see, the new user we created works as expected, without using a JavaScript class.

  * 🔑 The new user has a reference to the `createUser` function which has the data we want encapsulated in it.

  * All of this is done using closures.

    ```
    Hi my name is Beverly and I am currently 58 years old!
    Beverly is located in Phoenix
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Inside a factory function, what does `this` refer to?

  * 🙋 The parent object.

  * ☝️ Do we need to use the `new` keyword with factory functions?

  * 🙋 No, we can forgo it entirely.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Factory-Functions/README.md`.

### 2. Student Do: Factory Functions (15 min)

* Direct students to the activity instructions found in `16-Stu_Factory-Functions/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Factory Function Returns Undefined Values When the Inner Function Is Called

  Work with a partner to resolve the following issue(s):

  * As a developer, I want the inner function of my factory function to correctly log the variables when called.

  ## Expected Behavior

  When a user calls the `greet` method on the `Student` function, the values should be correctly displayed in the console.

  ## Actual Behavior

  When a user calls the `greet` method on the `Student` function, they see undefined values instead of the `name` and `gradeYear`.

  ## Steps to Reproduce the Problem

  1. Create a new student variable and assign it to the `Student` function.

  2. Call the `greet` method on the newly created student variable.

  3. Check the console to see undefined values.

  4. Run `npm test` to check if all unit tests pass.

  ## 💡 Hints

  What is the context of `this` when inside a factory function?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Is the `new` keyword required when using a factory function?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Factory Functions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with factory functions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Factory functions

  * ✔️ `new`

  * ✔️ `this`

* Open `16-Stu_Factory-Functions/Solved/index.js` in your IDE and explain the following:

  * We create a new function and store its two arguments `name` and `gradeYear` inside a newly created object named `studentInfo`.

    ```js
    function student(name, gradeYear) {
      let studentInfo = {
        name: name,
        gradeYear: gradeYear,
      };
    }
    ```

  * Remember, `this` is being bound to the parent object instead of the new one being created.

  * 🔑 If we want to access the `name` and `gradeYear`, we must use the `studentInfo` object we stored it in.

    ```js
    function student(name, gradeYear) {
      let studentInfo = {
        name: name,
        gradeYear: gradeYear,
      };
      return {
        greet: function () {
          console.log(
            `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
          );
        },
      };
    }
    ```

  * 🔑 Now we create a new student with the `student` factory function without using the `new` keyword.

    ```js
    const newStudent = student('Dominique', '11th');
    ```

  * If we type `npm test` in the command line, we should see the following:

    ```bash
    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        1.924 s
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Do we use a `constructor()` function inside a factory function?

  * 🙋 No, we can't.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Factory vs. Constructor (5 min)

* Open `17-Ins_Factory-Vs-Constructor/constructor/constructor.js` in your IDE and explain the following:

  * Now we'll step back and look at how we've been creating classes in JavaScript so far.

  * This application will have a simple `Device` class and a `Phone` class that `extends` from it.

    ```js
    class Device {
      constructor(name){
        this.name = name
      }
      takePicture() {
        console.log(`Taking picture with ${this.name}`)
      }
    }

    class Phone extends Device {
      constructor(name, ringTone) {
        super(name)
        this.ringTone = ringTone
      }
      call() {
        console.log(`Phone: ${this.ringTone}`)
      }
    }
    ```

  * Now we have a basic class tree. The `Phone` can `call`, and it inherits the `takePicture` method from the `Device` class.

    ```js
    const nokia = new Phone('Nokia', 'ring')
    nokia.call()
    nokia.takePicture()
    console.log(nokia)
    ```

* Open `17-Ins_Factory-Vs-Constructor/constructor/index.html` in your browser and navigate to Chrome DevTools to explain the following:

  * We see the following output in the console:

    ```
    Phone: ring
    Taking picture with Nokia
    ```

  * Next, we'll have a quick refresher on how the prototype chain works with classes by inspecting the `Nokia` variable we created.

  * 🔑 By looking at the `__proto__` object, we can see the reference to the `Device`, which holds the `takePicture` method that the `Phone` class inherits.

    ```
    Phone {name: "Nokia", ringTone: "ring"}
      name: "Nokia"
      ringTone: "ring"
      __proto__: Device
        call: ƒ call()
        constructor: class Phone
        __proto__:
          constructor: class Device
          takePicture: ƒ takePicture()
          __proto__: Object
    ```

  * In this application, we create two more classes: `Appliance` and `Dryer`, which extends from `Appliance`.

  * Like earlier, they each have a method and some type of data stored.

    ```js
    class Appliance {
      constructor(noise){
        this.noise = noise
      }
      makeNoise() {
        console.log(this.noise)
      }
    }

    class Dryer extends Appliance {
      constructor(noise) {
        super(noise)
      }
      dry() {
        console.log(`Dryer is on: ${this.noise}`);
      }
    }
    ```

  * The `Phone` class inherits from the `Device` class, and the `Dryer` class inherits from the `Appliance` class.

  * With the current class hierarchy, it would be difficult to create an `Appliance` that could make a `call` without rewriting the `call` method.

  * 🔑 Having to rewrite logic violates the DRY (Don't Repeat Yourself) principle of programming.

  * 🔑 This can quickly get out of control if we decide to make additional changes similar to this one.

* Open `17-Ins_Factory-Vs-Constructor/factory-function/factory-functions.js` in your IDE and explain the following:

  * Let's look at how we can take a composition-based approach with factory functions.

  * 🔑 We create factory functions that accept `state` as an argument and return a method that uses the information provided through the `state`.

  * We can think of state as an object that stores information that the function needs.

    ```js
    const phoneCall = (state) => ({
      call: () => console.log(`${state.name}'s Phone: ${state.ringTone}`),
    });

    const makeNoise = (state) => ({
      noise: () => console.log(state.noise),
    });

    const drying = (state) => ({
      dry: () =>
        console.log(`Finish drying in ${state.timer} minutes. ${state.noise}`),
    });
    ```

  * 🔑 Create a function named `Phone` which receives the `name` and `ringTone` that we will store in an object named `state`.

    ```js
    const Phone = (name, ringTone) => {
      const state = {
        name,
        ringTone
      };
    };
    ```

  * 🔑 Let's return an object, using the `...` operator and the action function, passing in the `state` to it.

    ```js
    const Phone = (name, ringTone) => {
      const state = {
        name,
        ringTone
      };
      return { ...phoneCall(state) };
    };
    ```

  * Using the same logic, let's create `Dryer` and `Washer` factory functions.

    ```js
    const Dryer = (noise, timer) => {
      const state = {
        noise,
        timer
      };
      return { ...makeNoise(state), ...drying(state) };
    };

    const Washer = (name, noise, ringTone) => {
      const state = {
        name,
        noise,
        ringTone
      };
      return { ...makeNoise(state), ...phoneCall(state) };
    };
    ```

  * We will test out the new factory functions to see if they work as expected.

    ```js
    // No need to add the `new` keyword because we are using a factory function.
    const nokia = Phone('Nokia', 'ring');
    const decker = Dryer('brshhuhsh', 35);
    const wPool = Washer('Whirlpool', 'brshhh', 'ring ring from the washer');
    // Test if the action functions work correctly with the newly created phone.
    nokia.call();
    decker.noise();
    decker.dry();
    wPool.call();
    wPool.noise();
    ```

* Open `17-Ins_Factory-Vs-Constructor/factory-function/index.html` in your browser and navigate to Chrome DevTools to explain the following:

  * 🔑 With **inheritance**, we design types based on what they are. With **composition**, we design types based on what they do.

    ```
    Nokia's Phone: ring
    brshhuhsh
    Finish drying in 35 minutes. brshhuhsh
    Whirlpool's Phone: ring ring from the washer
    brshhh
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens if we want to create an appliance that can make a phone call?

  * 🙋 We would have to make a new `call` method on the `Appliance`.

  * ☝️ What is the difference between inheritance and composition design?

  * 🙋 Inheritance is based on what types are. Composition is based on what types do.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Factory-Vs-Constructor/README.md`.

### 5. Student Do: Factory vs. Constructor (15 min)

* Direct students to the activity instructions found in `18-Stu_Factory-Vs-Constructor/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Refactor the Lesson Class to a Factory Function

  Work with a partner to implement the following user story:

  * As a developer, I want to move away from an inheritance-based approach and start using a composition-based approach so that my application's tree hierarchy is less rigid.

  * As a teacher, I want to be able to add a new lesson with a title and description to the collection of lessons I can teach.

  ## Acceptance Criteria

  * It's done when the `Lesson` class is a factory function, making the application less rigid in case we decide to add new features.

  * It's done when I can call the `information` method on the `Lesson` function and it correctly logs the private variable.

  ## 💡 Hints

  What scope does your inner function have access to?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the three paradigms of JavaScript?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: Factory vs. Constructor (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with factory functions vs. constructor functions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Inheritance

  * ✔️ Composition

* Open `18-Stu_Factory-Vs-Constructor/Solved/index.js` in your IDE and explain the following:

  * Create a function named `lesson` and two variables named `title` and `description`inside an object labeled `state`.

    ```js
    const lesson = function () {
      const state = {
        title: 'Module 17 - Computer Science',
        description: 'CS for JS',
      };
    };
    ```

  * 🔑 Instead of creating a method, we will create a function named `getInformation` that accepts the `state` as an argument.

  * We will return an inner function that logs the `title` and `description`.

    ```js
    const getInformation = (state) => ({
      information: () => console.log(state.title, state.description),
    });
    ```

  * Inside the `lesson` function, we must return the action function `getInformation`, passing in the `state` object.

    ```js
    const lesson = function () {
      const state = {
        title: 'Module 17 - Computer Science',
        description: 'CS for JS',
      };
      return { ...getInformation(state) };
    };
    ```

  * 🔑 There is no need to use the `new` keyword with a factory function.

    ```js
    const csForJS = lesson();
    csForJS.information();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Do factory functions use the `extends` keyword?

  * 🙋 No, they don't rely on inheritance.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Wikipedia article on composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Event Delegation and Handling (5 min)

* Open `19-Ins_Event-Delegation-Handling/index.html` in your browser and demonstrate the following:

  *  We should see five buttons, each having the label `clicks` followed by a number keeping track of how many times we click.

  *  If we click a button, we should see its respected value increase.

  *  Each button should track its own value.

* Open `19-Ins_Event-Delegation-Handling/index.html` in your IDE and explain the following:

  * 🔑 Inside the HTML file, we can see five `<button>` elements inside a `<div>` element with the `id="container"`.

  * Each button has its own `data-count` attribute.

    ```html
    <body>
      <div id="container" style="margin: 5px;">
        <button class="btn btn-lg" data-count="0">Clicks: 0</button>
        <button class="btn btn-lg" data-count="0">Clicks: 0</button>
        <button class="btn btn-lg" data-count="0">Clicks: 0</button>
        <button class="btn btn-lg" data-count="0">Clicks: 0</button>
        <button class="btn btn-lg" data-count="0">Clicks: 0</button>
      </div>
    <script src="assets/js/script.js"></script>
    </body>
    ```

* Open `19-Ins_Event-Delegation-Handling/assets/js/script.js` in your IDE and explain the following:

  * First we want to select the `container` in which the five buttons are housed.

  * 🔑 Remember that in event delegation, the event listener is attached to the parent element.

  * When a child element is clicked, the event will bubble up the DOM until it reaches the event listener.

    ```js
    const containerEl = document.getElementById('container');
    ```

  *  Let's create a function that accepts an `event` for an argument.

  *  Next we parse the `data-count` attribute into a number and store it in a `count` variable.

    ```js
    const clickHandler = function(event) {
      let count = parseInt(event.target.getAttribute('data-count'));
    }
    ```

  *  We create an `if...` statement that increases the `count` variable by 1 if the `button` element has been clicked.

  *  Finally, we update the `data-count` attribute and the display so that the correct value is being shown.

    ```js
    const clickHandler = function(event) {
      let count = parseInt(event.target.getAttribute('data-count'));
      if (event.target.matches('button')) {
        count++;
        event.target.setAttribute('data-count', count);
        event.target.textContent = `Clicks: ${count}`;
      }
    }
    ```

  * 🔑 The last task is to add an event listener to the container that holds the buttons.

    ```js
    containerEl.addEventListener('click', clickHandler);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we implement a closure to this event handler?

  * 🙋 We could encapsulate the `count` variable.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Event-Delegation-Handling/README.md`.

### 8. Student Do: Event Delegation and Handling (15 min)

* Direct students to the activity instructions found in `20-Stu_Event-Delegation-Handling/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Using Closures for Event Delegation

  Work with a partner to add comments that describe the functionality of the code found in [script.js](./Unsolved/assets/js/script.js).

  ## 📝 Notes

  Refer to the documentation:

  [MDN Web Docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

  * What is a practical use for closures?

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Why is it important to minimize the number of variables in the global namespace?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: Event Delegation and Handling (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with event handling and delegation using closures? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Event delegation

  * ✔️ Closures

* Open `20-Stu_Event-Delegation-Handling/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 Create a variable that holds the `button` element.

  * Instead of selecting the container that holds the buttons, we will select each button individually.

    ```js
    const buttons = document.getElementsByTagName('button');
    ```

  * Let's create a function with a `count` variable set to zero.

    ```js
    const clickHandler = function () {
      let count = 0;
    ```

  * Next, we leverage closures by returning a function that increments the `count` variable by one.

  * The `this` keyword is referring to the `button` element that is being clicked.

    ```js
    const clickHandler = function () {
      let count = 0;
      return function () {
        count++;
        this.textContent = `Clicks: ${count}`;
      };
    };
    ```

  * We are using a `for...loop` to attach an event listener to each `button` element.

  * 🔑 Now each button has its own reference to `count` instead of a reference to a global variable or attribute.

  * 🔑 Instead of doing a costly read on the DOM, we now only read and mutate the private `count` variable.

    ```js
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', clickHandler());
    }
    ```

* If we open `20-Stu_Event-Delegation-Handling/Solved/index.html` in the browser, we should see the following:

  * The buttons still work, but now each button leverages closures.

  * 🔑 We no longer need to rely on the event to bubble up the DOM until it reaches a listener, which avoids costly reads on the DOM.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Do the buttons need to be inside a container to work with closures?

  * 🙋 No, we attach the event listener to each button, avoiding event bubbling.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), and stay for office hours to ask for help.

* Answer any questions before proceeding.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or completing the **OPTIONAL** activity below.

* The module so far has been very abstract so check with the students to see if they have any questions about anything we've covered so far.

* Open [Leetcode](https://leetcode.com/) in your browser and explain the following:

  * Leetcode is a popular platform that allows developers to practice algorithms similar to those they may face in an interview setting.

  * To use Leetcode, we must first create an account. Leetcode offers both a paid and free version. For most developers, the free version is a great place to start.

  * After logging in to Leetcode, we click on `Problems` to see a range of practice algorithms. Each algorithm is ranked from `Easy` to `Hard`. When starting out, it is a good idea to start with the `Easy` algorithms to practice the steps needed to solve algorithms and gain confidence. We will be working together on the Square Root Algorithm, an `Easy` problem.

* Open [Leetcode Square Root Algorithm](https://leetcode.com/problems/sqrtx/) in your browser and explain the following:

  * Leetcode offers multiple program languages to code your solution. We select `JavaScript` from the drop down menu at the top.

  * When solving any algorithm -- either in Leetcode or an interview setting, it is important to first read and understand the directions, especially the `Input` and `Output` expected. Leetcode provides the instructions on the left side of the screen.

  * For this algorithm, the input will always be a non-negative integer defined as `x`.

  * The output is the square root of `x`. However, the result must be truncated, meaning if the result is 2.8, the algorithm should be returned as a whole integer, or 2. Understanding exactly the output required often provides a clue about how to solve the algorithm.

  * Once we understand the required input and output, we are ready to pseudocode our algorithm. In an interview, it is important to talk through your solution as you code and not work in silence! Pseudocode is a great way to help organize your thoughts and provide quick talking points.

    ```js
    // Find the square root of a positive integer `x`

    // Truncate number so that it is a whole number (always round down)
    ```

  * Next, let's expand the pseudocode by thinking about how we might find the square root of the integer. There are multiple ways to mathematically find the square root of an integer, but in this case we are going to look for perfect squares and return its square root. Otherwise, we can find nearest smaller perfect square of the integer and return the square root of that value.

    ```js
    // The square root of 0 is always zero, so if x === 0, we can return x.
    // The square root of 1 is always 1, so if x === 1, we can return x.
    // Perfect squares are always whole integers and the product of multiplying an integer by itself ie. 2 * 2 = 4
    // If an integer is not a perfect square, the result should be rounded down to the square root of the nearest smaller perfect square ie, if input === 5, return 2.
    ```

  * Now that we have thought through the process with psuedocode, we can start to think of the JavaScript needed to make our algorithm work. The first line is simple, we can return x if the value of x is 0 or 1.

    ```js
    if(x === 1 || x=== 0) return x;
    ```

  * Next, let's add some variables we can use to find our solution. We use `squared` to hold our perfect square and `i` as a counter.

    ```js
    let squared = 0;
    let i = 0;
    ```

  * Since we want to test for perfect squares, we use a `while` loop that will find the perfect square of an increasing number, in our case `i`.  If we find a match, we can return `i`, since that will be the square root. If not, we keep going until the perfect square or `squared` is larger than the value of `x`. When that happens, we know the value we want to return is `i - 1`, since that will be the square root of the nearest, smaller perfect square.

    ```js
    while (squared < x ) {
      i++;
      squared = i * i;
      if (squared === x) return i;
    }
    return (i-1)
    ```

  * We run our completed code to see the input and output. If our code passes the tests, it is accepted.

    ```js
    var mySqrt = function(x) {
      if(x === 1 || x=== 0) return x;
      let squared = 0;
      let i = 0;

      while (squared < x ) {
        i++;
        squared = i * i;
        if (squared === x) return i;
      }
      return (i-1)
    }
    ```

  * In an interview setting, talking through your process as you code is as important as getting the right answer, so make sure to practice thinking through each step to explaining your solution to others.

* If time remains, have students work in pairs to solve a Leetcode algorithm of their choice or have them practice explaining the solution above to their partner.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Explain that even though most of us will apply for JavaScript-related jobs, technical interviews typically also assess our knowledge of a few general computer science topics.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ In computing, what is an algorithm?

  * 🙋 An algorithm is a self-contained series of steps that describes a way to solve a problem for a human or machine.

  * ☝️ Are algorithms the same thing as functions?

  * 🙋 No, an algorithm is an abstracted idea of how to solve a problem, whereas a function is a means of implementing the steps outlined by the algorithm.

  * ☝️ Why is it important for a full-stack JavaScript developer to understand and articulate how to implement popular computer science algorithms?

  * 🙋 Understanding algorithms helps developers think about a problem in a conceptual and abstracted way, allowing them to come to a better and more efficient solution&mdash;ultimately making them better developers!

  * ☝️ Do we think some algorithms can solve problems more quickly than others?

  * 🙋 Yes, and it usually depends on the type of problem being solved. That's why it's important for us to know how different types of algorithms work in different situations.

* Open [the Big-O Cheat Sheet](https://www.bigocheatsheet.com/) and explain the following while walking through the chart:

  * 🔑 In computer science, we measure an algorithm's efficiency by finding the potential amount of steps it will take to solve a problem in a worst-case scenario in relation to the size of the data it's being performed on.

  * 🔑 This is what's known as the **Big-O complexity** of an algorithm. It's how we can identify which algorithms will work better given a specific problem that needs solving.

* Explain that today we will learn about popular algorithms, how to implement them, and how to go about solving questions about them in a technical interview.

* Answer any questions before proceeding to the next activity.

## 13. Instructor Demo: Linear Search (5 min)

* Open the [Searching Sorted List Visualizer](https://www.cs.usfca.edu/~galles/visualization/Search.html) in your browser, perform a linear search function, and demonstrate the following:

  * 🔑 We can search for where an element appears in an array by checking each value one at a time.

  * 🔑 When we find that element, we return the index of where it appeared and then stop the function.

  * 🔑 If we don't find the element we're looking for, we receive a `-1` back because there is no `-1` index in a JavaScript array.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we approach this?

  * 🙋 We need to pseudocode it!

* Open `21-Ins_Linear-Search/linear-search.md` in your IDE and explain the following:

  * 🔑 During a technical interview, it's always a good idea to spend some time pseudocoding and laying out your thought process before writing code.

  * 🔑 For a linear search algorithm implementation using JavaScript, this is what those steps might look like, but they may vary depending on the person implementing it.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What assumptions can we make about this algorithm's implementation?

  * 🙋 We can assume that the input array will be an array of numbers and that it has at least one element in it.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Linear-Search/README.md`.

### 14. Student Do: Linear Search (15 min)

* Direct students to the activity instructions found in `22-Stu_Linear-Search/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement a Linear Search Algorithm

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to find the position of a value in a set of data.

  ## Acceptance Criteria

  * It's done when the search algorithm function can accept an input array and value to find.

  * It's done when the search algorithm returns the position of the value we are searching for.

  * It's done when the search algorithm returns `-1` to indicate that the value is not in the data set.

  ---

  ## 💡 Hints

  How can we run the unit tests to test our algorithm?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a more efficient search algorithm?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Linear Search (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the linear search algorithm? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Array and element inputs

  * ✔️ Return the index

  * ✔️ Big O(n) complexity

* Open `22-Stu_Linear-Search/Solved/index.js` in your IDE and explain the following:

  * 🔑 We create a function that accepts the array we're searching in and the element we're searching the array for:

    ```js
    const linearSearch = (array, element) => {};
    ```

  * 🔑 We iterate through the array and check every single element if it matches the one we're searching for and return the index of the matched element:

    ```js
    // Loop the given array.
    for (let index = 0; index < array.length; index++) {
      // Check to see if the index of the given array is equal to the element we are searching for.
      if (array[index] === element) {
        // Exit the search by returning the index of the element.
        return index;
      }
    }
    ```

  * If we don't find a match, the `for` loop ends and we return `-1` to indicate it isn't in this array.

  * 🔑 Because the worse case scenario of this algorithm is that the loop takes us all the way through the array, its complexity grows at a 1:1 rate with how big the input array is, giving it a Big O complexity of `O(n)`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some good features of this algorithm?

  * 🙋 It will work on unsorted arrays and has a predictable level of complexity.

  * ☝️ What may be a drawback of this algorithm?

  * 🙋 If we have a very large array to search through, the Big O complexity `O(n)` can become inefficient.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read more about search algorithms, and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 16. Instructor Demo: Recursion (5 min)

* Navigate to `23-Ins_Recursion` from the command line, run `node index.js` and demonstrate the following:

  * 🔑 When we run this file, we get a number countdown printed on the page.

  * 🔑 We could do this with a loop, but we didn't.

* Navigate to `23-Ins_Recursion/index.js` in your IDE and explain the following

  * 🔑 Instead of a loop, we use a recursive function to call itself over and over again until we meet the exit condition we've defined ourselves.

  * 🔑 If we didn't have this condition in place, known as a "base" or "exit" condition, our program would loop indefinitely and cause our program to crash.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some use cases for using recursion over loops?

  * 🙋 Recursion allows us to control when the next iteration happens and is very useful for when we don't exactly know how many times we need the functionality to run.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Recursion/README.md`.

### 17. Student Do: Recursion (15 min)

* Direct students to the activity instructions found in `24-Stu_Recursion/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of a Fibonacci Sequence Algorithm

  Work with a partner to add comments that describe the functionality of the code found in [Unsolved](./Unsolved).

  ## 📝 Notes

  Refer to the documentation:

  [Math Is Fun: The Fibonacci Sequence](https://www.mathsisfun.com/numbers/Fibonacci-sequence.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * In programming, what is a stack overflow?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Recursion (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with recursion? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ We search by position

  * ✔️ No recursion for 0 or 1 positions

  * ✔️ Value is the sum of previous values

* Open `24-Stu_Recursion/Solved/index.js` in your IDE and explain the following:

  * 🔑 The function returns the value of a given position in the Fibonacci sequence:

    ```js
    const Fibonacci = (position) => {}
    ```

  * 🔑 If the input position is less than `2`, we can assume that the position will be `0` or `1`, which are the actual values of the Fibonacci sequence at that position:

    ```js
    if (position < 2) {
      return position;
    }
    ```

  * 🔑 We get a value of the Fibonacci sequence by adding the previous two position values in the sequence, so we need to calculate their values with the same function, which will call it again and again until `position` is under `2`:

    ```js
    return Fibonacci(position - 1) + Fibonacci(position - 2);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we visualize this algorithm? Is there a specific data structure we can use to model it?

  * 🙋 We can visualize it as a binary tree data structure, with each node spawning two nodes below it, which then spawn two nodes below them, and so on.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read about the [Fibonacci sequence](https://www.mathsisfun.com/numbers/Fibonacci-sequence.html) and the [MDN docs on recursive functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 19. Instructor Demo: Binary Search (5 min)

* Open the [Searching Sorted List visualizer](https://www.cs.usfca.edu/~galles/visualization/Search.html) in your browser, perform a binary search, and demonstrate the following:

  * 🔑 Unlike the linear search, a binary search works by checking one value at a time starting in the middle of the data set.

  * 🔑 We identify if the value we're searching for is greater or less than the middle value and cut out half of the data set when we know the value is in the other half.

  * 🔑 If we don't find the element we're looking for, we receive a `-1` back, because there is no `-1` index in a JavaScript array.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We need to pseudocode it!

* Open `25-Ins_Binary-Search/binary-search.md` in your IDE and explain the following:

  * 🔑 During a technical interview, it's always a good idea to spend some time pseudocoding and laying out your thought process before writing code.

  * 🔑 For a binary search algorithm implementation using JavaScript, this is what those steps might look like, but may have more or less depending on the person implementing it.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What assumptions can we make about this algorithm's implementation?

  * 🙋 We can assume that the input array must be sorted for it to work.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Binary-Search/README.md`.

### 20. Student Do: Binary Search (15 min)

* Direct students to the activity instructions found in `26-Stu_Binary-Search/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Binary Search Algorithm Not Passing Tests

  Work with a partner to resolve the following issue:

  * As a developer, I want to be able to find the position of a value in a data set by using a binary search function.

  ## Expected Behavior

  When we run unit tests to test the binary search function, the defined tests pass.

  ## Actual Behavior

  When we run unit tests to test the binary search function, the defined tests do not pass.

  ## Steps to Reproduce the Problem

  1. In the command line, from the [Unsolved](./Unsolved) directory, run `npm install`.

  2. Run `npm run test` to run the unit tests.

  3. The tests defined in the `__tests__` directory do not pass.

  ---

  ## 💡 Hints

  How can the unit test descriptions help us determine what the function is or is not doing?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is worst possible Big-O complexity that an algorithm can have? What is the best?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Binary Search (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with a binary search algorithm? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Adjust start and end positions

  * ✔️ The `while` loop

  * ✔️ Exit conditions

* Open `26-Stu_Binary-Search` in your IDE and explain the following:

  * 🔑 We start by getting the start and end positions, which we will update when we determine what half our value lies in:

    ```js
    let start = 0;
    let end = array.length - 1;
    ```

  * 🔑 We use a `while` loop to continuously run the functionality of getting a middle value, checking if the searched value is greater than, less than, or equal to it, and adjusting the start and end points if we need to:

    ```js
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (array[mid] === element) {
        // We must return true once we have found the element being searched for.
        return true;
      } else if (array[mid] < element) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    ```

  * 🔑 We are done running this function when either the middle value is the value we're searching for or we've cut the search array down so much that the end value becomes less than the start value and the `while` loop ends to return `false`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the Big O complexity of this algorithm?

  * 🙋 It has a Big O complexity of `O(log n)` because it effectively cuts its input in half every pass.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Wikipedia entry on binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Shell/README.md`.

## 22. Everyone Do: Shell Scripts (20 min)

* Open your command line environment and demonstrate the following:

  * We've been using this environment throughout the class to perform a number of functions for our computer, Node.js applications, and Git repositories.

  * This is because our command line is powered by what's known as a "shell," which has a programming language of its own that we can use to help perform complex tasks and provide automation in our workflow.

* Direct students to the activity instructions found in `27-Evr_Shell/README.md`.

* While everyone is working on the activity, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* Open `27-Evr_Shell/Solved/git-file-cleanup.sh` in your IDE and demonstrate the following:

  * 🔑 In order to write our own commands to be executed as programs across our computers, we must begin the file with a shebang interpreter directive:

    ```sh
    #!/bin/bash
    ```

  * 🔑 We can store commands in variables and recall them whenever we want, such as a Git command to be executed from our program:

    ```sh
    TO_REMOVE=`git clean -f -d -n`;
    ```

  * A lot of Git commands that affect the repository have what's known as a "dry run" `-n` option to show what would happen without actually doing it.

  * 🔑 These commands can be set up for execution anywhere in our `.bashrc` or `.zshrc` files as "aliases":

    ```sh
    # in a run command file...
    alias gfc="~/git-file-cleanup.sh"
    ```

* Congratulate students on taking a moment to quickly learn a new programming language!

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
