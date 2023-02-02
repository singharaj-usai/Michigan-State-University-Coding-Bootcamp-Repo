# 02.2 Full-Time Lesson Plan: JavaScript

## Overview

This class is a continuation of JavaScript fundamentals. The activities today focus on function expressions, function declarations, scope, objects, object methods, and the keyword `this`. Local Git branching, `checkout`, and merging will be introduced as well.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Functions` through `27-Evr_Git-Branch`.

* Be sure to review the activities and try to anticipate questions that students might ask.

* In `18-Stu_Scope`, students will work with a partner to debug some broken code and learn more about scope and shadowing. This is a challenging activity, especially for learners new to programming languages. Review the solution code before class and try to anticipate questions that might arise. If need be, review the [MDN Web Docs on scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) so that you can confidently answer students' questions.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

## Learning Objectives

* Write a function expression and a function declaration.

* Identify the difference between global and local scope.

* Implement array methods.

* Define and use JavaScript objects.

* Use JavaScript object methods.

* Explain and use the `this` keyword.

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 10:00AM| 1   | Instructor Demo: Functions          | 0:05     |
| 10:05AM| 2   | Student Do: Functions               | 0:15     |
| 10:20AM| 3   | Instructor Review: Functions        | 0:10     |
| 10:30AM| 4   | Instructor Demo: Scope              | 0:05     |
| 10:35AM| 5   | Student Do: Scope                   | 0:15     |
| 10:50AM| 6   | Instructor Review: Scope            | 0:10     |
| 11:00AM| 7   | Instructor Demo: Method             | 0:05     |
| 11:05AM| 8   | Student Do: Method                  | 0:15     |
| 11:20AM| 9   | Instructor Review: Method           | 0:10     |
| 11:30AM| 10  | FLEX                                | 0:30     |
| 12:00PM| 11  | BREAK                               | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:40PM| 13  | Instructor Demo: Objects            | 0:05     |
| 12:45PM| 14  | Student Do: Objects                 | 0:15     |
| 1:00PM | 15  | Instructor Review: Objects          | 0:10     |
| 1:10PM | 16  | Instructor Demo: Object Methods     | 0:05     |
| 1:15PM | 17  | Student Do: Object Methods          | 0:15     |
| 1:30PM | 18  | Instructor Review: Object Methods   | 0:10     |
| 1:40PM | 19  | Instructor Demo: this               | 0:05     |
| 1:45PM | 20  | Student Do: this                    | 0:15     |
| 2:00PM | 21  | Instructor Review: this             | 0:10     |
| 2:10PM | 22  | Everyone Do: Git Branching/Merging  | 0:20     |
| 2:30PM | 23  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Functions (5 min)

* Welcome students to class.

* Open `15-Ins_Functions/script.js` in your IDE and demonstrate the following:

  * 🔑 We create reusable blocks of code using functions.

  * 🔑 One way we can define a function is to use a **function declaration**. A function declaration starts with the keyword `function` preceding a name and parentheses `()`, like in the following code snippet:

    ```js
    function declareHello()
    ```

  * 🔑 The block of code we want to execute goes in curly brackets `{}`. Then, after the code we want to execute, we use `return`. The return statement stops the execution of the function, as shown in the following example:

    ```js
    function declareHello() {
    console.log("Hello, I am a function declaration.");
    console.log("-----------------------------------");
    return;
    }
    ```

  * 🔑 We can also use `var` to declare a function expression. After the assignment operator `=`, we use `function` followed by parentheses `()`. Just like before, in the following example, the code block goes inside curly brackets `{}` and `return` is used:

    ```js
    var expressHello = function() {
    console.log("Hello, I am a function expression.");
    console.log("-----------------------------------");
    return;
    };
    ```

  * 🔑 When we define a function expression or function declaration, we are simply giving a block of code a name. To execute the function, we call it using the function's name and parentheses `()`, as follows:

    ```js
    declareHello();
    expressHello();
    ```

  * 🔑 Functions can also take parameters! Parameters allow us to pass values into a function by giving the values a name. In the following example, the values we want to use in the code block are given the names `x`, `y`, and `z`:

    ```js
    function declareHelloAgain(x,y,z) {
    console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
    console.log("-----------------------------------");
    return;
    }
    ```

  * 🔑 Adding parameters inside the `()` only gives them names, not values! The values are assigned when the function is called. So in the following example, `x` has been assigned `7`, `y` has been assigned `"Hello"`, and `z` has been assigned `true`:

    ```js
    declareHelloAgain(7, "Hello", true);
    ```

* Open `15-Ins_Functions/index.html` in your browser and navigate to the console to demonstrate the following:

  * Calling a function executes the code block one time. To execute the block of code again, simply call the function again. This makes the code block easily reusable.

  * When we call `declareHelloAgain`, the values provided for `x`, `y`, and `z`can be accessed by the function. So the message `"Hello, my parameter's values are 7, Hello, and true"` is logged.

* Let students know that the code we just covered is found in the `sample.js` file and encourage them to look at it for guidance while completing the activity.
 
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are two ways that we can create a reusable block of code?

  * 🙋 We can create a function declaration or a function expression.

  * ☝️ How do we execute a function?

  * 🙋 Declaring a function only gives a block of code a name. To execute it, we have to call it every time we want the action performed.

* Answer any questions before proceeding to the next activity.

### 2. Student Do: Functions (15 min)

* Direct students to the activity instructions found in `16-Stu_Functions/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Write Function to Evaluate Equality of Two Values

  Work with a partner to implement the following user story:

  * As a developer, I want to know when two values are equal to one another.

  ## Acceptance Criteria

  * It's done when I provide two values in function arguments and the function evaluates the values' equality.

  * It's done if, when the values are strictly equal, the message "They are equal in type and value" is logged.

  * It's done if, when the two values are equal but not strictly equal, the message "They are equal in value" is logged.

  * It's done if, when the values are not equal or strictly equal, the message "The values are not equal" is logged.

  ## 💡 Hints

  How can we use parameters to give a name to the two values that we want to evaluate with the function?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is hoisting?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Functions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with functions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `function myFunc(){}`

  * ✔️ Parameters

  * ✔️ `return`

  * ✔️ `myFunc()`

  * ✔️ Function expressions

* Open `16-Stu_Functions/Solved/script.js` in your IDE and explain the following:

  * 🔑 To create a function declaration, we start with the keyword `function` and give it a name, `isEqual`. Then, inside the parentheses`()`, we provide two parameters, `x` and `y`, to provide a name for the two values we want the function to evaluate. See the following example:

    ```js
    function isEqual(x,y)
    ```

  * We use an `if` statement to evaluate whether the values are strictly equal. If so, the message `"They are equal in type and value"` will log, as shown in the following statement:

    ```js
    if (x === y) {
      console.log("They are equal in type and value");
    }
    ```

  * If the two values are not strictly equal, we check whether they are equal in value only with `==`. So we add an `else if` statement that will log `"They are equal in value"` if `x == y` evaluates to `true`, as shown in the following example:

    ```js
    } else if (x == y) {
      console.log("They are equal in value");
    }
    ```

  * 🔑 We use an `else` statement to log a message if the two values are not strictly equal or equal. We also add a `return` to stop the execution of the function, as follows:

    ```js
    } else {
      console.log("They are not equal");
    }
      return;
    ```

  * 🔑 We execute the block of code by calling it with its name. Inside the parentheses, we put the two values we want to assign to `x` and `y` when the function runs, as follows:

    ```js
    isEqual(10, 10);
    ```

  * 🔑 We can also use a function expression to execute the same block of code. A function expression starts with `var`. Both functions in the following example will do the same thing:

    ```js
    var isEqualTakeTwo = function (x,y) {
        if (x === y) {
          console.log("They are equal in type and value");
        } else if (x == y) {
          console.log("They are equal in value");
        } else {
          console.log("They are not equal");
        }
        return;
    };
    ```

* Open `16-Stu_Functions/Solved/index.html` in your browser and navigate to the console to demonstrate the following:

  * When a function is called, the values assigned inside the parentheses `()` are used to execute the code.

  * So when we assign the values `10` and `10`, the message `"They are equal in type and value"` logs to the console.

  * When we assign the values `10` and `true`, the message `"They are not equal"` logs.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can using functions improve code?

  * 🙋 Functions are reusable blocks of code that we can execute again and again. Using functions makes code cleaner and more modular.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Scope (5 min)

* Open `17-Ins_Scope/index.html` in your IDE and demonstrate the following:

  * 🔑 We have been declaring variables outside of the functions. Variables declared outside of a function, like in the following example, are **globally scoped**:

    ```js
    var hello = "Hello";
    ```

  * A variable in the global scope can be used throughout your code in any function or script. Both of the following functions have access to the value stored in the variable `hello`:

    ```js
    function sayHello() {
      console.log(hello);
      return;
    }

    var sayHelloAgain = function () {
      console.log(hello);
      return;
    };
    ```

  * 🔑 Declaring a variable inside a function changes the scope of the variable. The variable can only be accessed inside that function. This is called **local scope**. See the following code for an example:

    ```js
    function sayGoodbye() {
      var goodbye = "Goodbye";
      console.log(goodbye);
      return;
    }
    ```

  * If we try to use a locally scoped variable in another function, like in the following example, we will get an error:

    ```js
    var sayGoodbyeAgain = function () {
      console.log(goodbye);
      return;
    };
    ```

  * 🔑 **Shadowing** happens when we use the same variable name in both the local and global scope, as shown in the following example:

    ```js
    var shadow = "Hello";
    console.log(shadow);

    function sayWhat() {
      console.log(shadow);
      return;
    }

    var sayWhatAgain = function () {
      var shadow = "Goodbye";
      console.log(shadow);
    };
    ```

  * We should avoid shadowing by giving the local and global variables unique names. Keeping the scope clean and organized makes it easier to develop and work in the codebase.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does it mean when a variable is globally scoped?

  * 🙋 A global variable is accessible to any function or script in the code.

  * ☝️ What does it mean if a variable is locally scoped?

  * 🙋 A local variable is only available inside its own function. It is not available to other functions or scripts.

* Answer any questions before proceeding to the next activity.

### 5. Student Do: Scope (15 min)

* Direct students to the activity instructions found in `18-Stu_Scope/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Messages Not Logging to Console Due to Undefined Variables

  Work with a partner to resolve the following issue(s):

  * As a developer, I want to log messages to the console using variables declared in both global and local scope.

  ## Expected Behavior

  When the console is opened, a series of messages should log to the console.

  ## Actual Behavior

  When the console is opened, an error message indicates that at least one variable is undefined, and messages do not log.

  ## 💡 Hints

  Think about how the variable is being used. Is it being made available to all functions, or is it only being used by one function?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is lexical scope?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 6. Instructor Review: Scope (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with scope? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Global scope

  * ✔️ Local scope

  * ✔️ Shadowing

* Open `18-Stu_Scope/Solved/script.js` in your IDE and explain the following:

  * 🔑 We declare the variable `shout` in the global scope so that it is available to all functions, including `justShout` and `shoutItAllOut`, as shown in the following example:

    ```js
    var shout = "Shout";

    function justShout() {
      console.log(shout + ", " + shout);
      return;
    }

    function shoutItAllOut() {
      console.log(shout + " it all out! ");
      return;
    }
    ```

  * 🔑 In the following example, the variable `animals` has been declared locally inside the `sayLions` function, so it is only available in that function:

    ```js
    function sayLions() {
      var animal = "Lions";
      console.log(animal);
      return;
    }
    ```

  * 🔑 We declare the variable `animals` locally inside the `sayTigers` function. Since a locally scoped variable is only accessed in the function where it is declared, it doesn't change the value of the `animal` variable declared in `sayLions`. In the following example, the `sayLions` function will use the value `Lions`, and the `sayTigers` function will use the value `Tigers`:

    ```js
    function sayTigers() {
      var animal = "Tigers";
      console.log("and " + animal + " and ");
      return;
    }
    ```

  * 🔑 To avoid shadowing, or declaring a variable with the same name in the global and local scope, we remove the `bears` variable in the local scope so that the `sayBears` function will log `"Bears! OH MY!"`, as follows:

    ```js
    var bears = "Bears";

    function sayBears() {
      console.log(bears + "! OH MY!");
      return;
    }

    ```

  * We declare the variable `sing` inside the outer function so that the value of `sing` is available to everything inside the outer function, including the inner function. Shown in the following example, this is called a **nested function**:

    ```js
    function singAlong() {
      var sing = "Sing";
      console.log(sing + ",");
      var singASong = function () {
        console.log(sing + " a Song.");
      };
      singASong();
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to know if the variables are defined in the local or global scope?

  * 🙋 Scope tells us where the variables are accessible to use in our code. If we define the variables in the wrong scope, we will get errors!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Methods (5 min)

* Open `19-Ins_Methods/index.html` in your browser and demonstrate the following:

  * 🔑 Arrays have access to built-in methods that allow us to manipulate arrays and the elements they hold.

  * 🔑 Array methods are easy to use. We simply use the name of the array, followed by a dot `.`, and the name of the method with parentheses `()`. The `sort()` method, shown in the following example, sorts the elements in an array in alphabetical and ascending order:

    ```js
    comparisonOperators.sort();
    ```

  * 🔑 Some array methods take arguments. We put the argument value in the parentheses `()`. The `push()` method attaches the value placed in the parentheses `()` at the end of an array, as shown in the following example:

    ```js
    arithmeticOperators.push("%");
    ```

  * 🔑 Array methods can also return a new array. The `slice()` method returns a slice of an array as a new array. The arguments determine which indexes to use to start and end the slice. You can see the following statement for an example:

    ```js
    var logicalOperatorsSliced = logicalOperators.slice(0,2);
    ```

  * 🔑 Strings also have methods. The `replace()` method will return a new string. In that new string, `"String"` is replaced with `"World"`. You can see this at work in the following example:

    ```js
    var myNewString = myString.replace("String", "World");
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are array methods useful for?

  * 🙋 They give us access to a wide range of functionality when writing code.

  * ☝️ What is an array method?

  * 🙋 An array method is a built-in method that we can use to manipulate arrays and the elements stored in them.

* Answer any questions before proceeding to the next activity.

### 8. Student Do: Methods (15 min)

* Direct students to the activity instructions found in`20-Stu_Methods/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Array and String Methods

  Work with a partner to implement the following user stories:

  * As a developer, I want to use array methods to add and remove elements from an array and join two arrays.

  * As a developer, I want to use a string method to return a new string that contains only capital letters.

  ## Acceptance Criteria

  * It's done when the string `"Canis Major"` is added as the first element of the `constellations` array and no elements are removed.

  * It's done when `"Venus"` is removed from the `planets` array.

  * It's done when the arrays `constellations` and `planets` are joined to form a new array named `galaxy`. The arrays `constellations` and `planets` should not be altered.

  * It's done when the string `"polaris"` is converted into all capital letters and the new string is stored in a variable.

  ## 📝 Notes

  Refer to the documentation:

  [MDN Web Docs on array instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods)

  [MDN Web Docs on string instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What happens when you use `typeof` on an array? What is returned? Is that what you expected? Why or why not?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 9. Instructor Review: Methods (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with array and string methods? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `unshift()`

  * ✔️ `pop()`

  * ✔️ `concat()`

  * ✔️ `toUpperCase()`

* Open `20-Stu_Methods/Solved/script.js` in your IDE and explain the following:

  * 🔑 We use the `unshift()` array method to add an element to the beginning of the `constellation` array. The value added to the array goes inside the parentheses `()`, like in the following example:

    ```js
    constellations.unshift("Canis Major");
    ```

  * 🔑 We use the `pop()` method to remove the last element in the planets array, as follows:

    ```js
    planets.pop();
    ```

  * 🔑 To join two arrays, we use the `concat()` method. This method, shown in the following example, returns a new array named `galaxy`:

    ```js
    var galaxy = constellations.concat(planets);
    ```

  * 🔑 We use the string method `toUpperCase()`, shown in the following example, to return the new string `"POLARIS"`:

    ```js
    var upperCaseStar = star.toUpperCase();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use array and string methods to supercharge code?

  * 🙋 Array methods are a quick and easy way to add elements, remove elements, join two arrays, and do much, much more. String methods are also a powerful way to manipulate strings. With both array and string methods, we can implement powerful functionality in just a single line of code.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on array instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods) and the [MDN Web Docs on string instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods), and stick around for office hours to ask for help.

* Answer any questions before proceeding.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module.

* Ask the students if there is anything they would like to review.

* Since the `18-Stu_Scope` activity was challenging, utilize this time to review the solution code more in detail. If need be, review the [MDN Web Docs on scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) together.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Inform students that in the next class, they will work together to build an interactive game with JavaScript.

* Tell the students that coding games can help them hone their skills as developers. However, writing code for games was not always as simple as it is today!

* Open [SpaceWars!](https://spacewar.oversigma.com/) in your browser and explain the following:

  * SpaceWars! is a simple game that allows two users to input information to interact. The goal is to destroy the other user's spaceship.

  * Back in the early '60s, it took Stephen Russell, Peter Samson, Dan Edwards, and Martin Graetz over 200 hours and 40 pages of code to create SpaceWars!&mdash;credited as the first interactive computer game.

  * We can still see the game run&mdash;as originally coded&mdash;using this emulator written in JavaScript.

* Open [Play SpaceWars!](https://www.masswerk.at/spacewar/) in your browser and demonstrate the following:

  * We can also play this remake of the game online.

  * The game uses letters to input users' choices. The W, A, S, and D keys control one of the spaceships. The I, J, K, and L keys control the other.

  * Different actions are performed based on the user input. If the user enters W, the ship spins one way. If A is entered, the ship spins the other way.

  * The game is ended when a specific condition is met&mdash;when one of the ships is destroyed.

* Inform the students that while technologies have certainly changed, the logic pioneered by MIT scientists is much the same as the logic we will use to build the interactive Rock, Paper, Scissors game in the next class.

## 13. Instructor Demo: Objects (5 min)

* Open `21-Ins_Objects/script.js` in your IDE and demonstrate the following:

  * 🔑 JavaScript **objects** are a lot like objects in real life. They are things that have distinct characteristics or properties. For this first JavaScript object, the thing we will create is a planet.

  * 🔑 We use object literal notation to create the `planet` object, and we use curly brackets `{}` to hold the values, as follows:

    ```js
    var planet = {};
    ```

  * 🔑 We use key-value pairs to give the properties a name and a value, as shown in the following example:

    ```js
    name: "Earth"
    ```

  * 🔑 Objects usually have many related properties that help to define the object, as shown in the following example:

    ```js
    var planet = {
      name: "Earth",
      age: "4.543 billion years",
      moons: 1,
      isPopulated: true,
      population: "7.594 billion"
    };
    ```

  * 🔑 To access the value stored in a property, we use dot notation, as follows:

    ```js
    console.log(planet.name);
    ```

  * 🔑 We can also use bracket notation to access a value. When we use bracket notation, the key goes in quotes, as shown in the following example:

    ```js
    console.log(planet["name"]);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When would we want to use an object in JavaScript?

  * 🙋 When we want to create an unordered collection of properties that describe a particular thing.

  * ☝️ How do we access a value stored in an object?

  * 🙋 We use dot notation and bracket notation. Both use the object's name and the associated key.

  * ☝️ Where have we used bracket notation before?

  * 🙋 We used bracket notation with arrays.

* Answer any questions before proceeding to the next activity.

### 14. Student Do: Objects (15 min)

* Direct students to the activity instructions found in `22-Stu_Objects/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Log Customer's Drink Order Using an Object

  Work with a partner to implement the following user story:

  * As a coffee shop owner, I want to store data about my customer's drink order in an object and log a message indicating whether the drink is ready or still in the queue.

  ## Acceptance Criteria

  * It's done when the `customerOrder` object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready.

  * It's done when the drink name and the number of sugars is logged to the console.

  * It's done when, if the order is ready, the message `"Ready for pick-up"` logs.

  * It's done when, if the order is not ready, the message `"Still in order queue"` logs.

  ## 💡 Hints

  How can we use dot notation or bracket notation to access an object's values?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a `for...in` statement? How can you use it to iterate over an object’s properties?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 15. Instructor Review: Objects (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using objects? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Object literal

  * ✔️ Key-value pairs

  * ✔️ Dot notation

  * ✔️ Bracket notation

* Open `22-Objects/Solved/script.js` in your IDE and explain the following:

  * 🔑 We declare a `customerDrink` object using object literal notation. We give the object three properties, as follows:

    ```js
    var customerDrink = {
      name: "coffee",
      sugars: 3,
      isReady: true
    };
    ```

  * 🔑 We use key-value pairs to define each property, like in the following example:

    ```js
    name: "coffee"
    ```

  * To access the whole object, we use the object's name, as follows:

    ```js
    console.log(customerDrink);
    ```

  * 🔑 We use dot notation to access a value stored in a key-value pair, as shown in the following example:

    ```js
    if (customerDrink.isReady) {
      console.log("Ready for pick-up: " + customerDrink.name + " with " + customerDrink.sugars + " sugars.");
    }
    ```

  * 🔑 We can also use bracket notation to access a value, as follows:

    ```js
    else {
      console.log("Still in order queue: " + customerDrink["name"] + " with " + customerDrink["sugars"] + " sugars.");
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How are key-value pairs used in objects?

  * 🙋 The key is a unique identifier used to access the value. In objects, key-value pairs define the properties of an object.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 16. Instructor Demo: Object Methods (5 min)

* Open `23-Ins_Object-Methods/script.js` in your IDE and demonstrate the following:

  * 🔑 An object's properties can also hold lists of values or even functions, as shown in the following code:

    ```js
    var planet = {
      name: "Earth",
      age: "4.543 billion years",
      moons: 1,
      isPopulated: true,
      population: "7.594 billion",
      neighboringPlanets: ["Mars", "Venus"],
      tellFunFact: function () {
        console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
      },
      showWarning: function () {
        console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
      }
    };
    ```

  * 🔑 We use arrays to store lists of values in key-value pairs, as follows:

    ```js
    neighboringPlanets: ["Mars", "Venus"]
    ```

  * 🔑 To access an element in an array contained in an object, we can use the object's name and key, plus the index of the element&mdash;as shown in the following example:

    ```js
    console.log(planet.neighboringPlanets[0]);
    console.log(planet["neighboringPlanets"][0]);
    ```

  * 🔑 To declare a method, we assign a key. A **method** is simply a function associated with an object. See the following code for an example:

    ```js
    tellFunFact: function () {
      console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
    },
    showWarning: function () {
      console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
    }
    ```

  * 🔑 To call or invoke an object's method, we use the object's name followed by the assigned key. Don't forget the `()`, shown in the following example:

    ```js
    planet.tellFunFact();
    planet.showWarning();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a method?

  * 🙋 A method is a function associated with an object. It is also a property of the object.

* Answer any questions before proceeding to the next activity.

### 17. Student Do: Object Methods (15 min)

* Direct students to the activity instructions found in `24-Stu_Objects-Methods/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Messages Not Logging to Console

  Work with a partner to resolve the following issue(s):

  * Users should see a message log to the console indicating whether the shelter dog or cat is available.

  ## Expected Behavior

  When a name is stored in the `chosenPet` variable, a message should log to the console indicating whether the pet is available and whether it is a dog or a cat. If the pet is not available, a message should indicate that and suggest the shelter's featured cat and dog. No errors should be returned.

  ## Actual Behavior

  No message is logged to the console, and an error message indicating an `Uncaught ReferenceError` is returned.

  ## 💡 Hints

  Look at each console log. What is the intended input? How can you use the object name and key to access the values and methods you need to make the code work?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you convert an object into an array using `Object.values()`?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 18. Instructor Review: Object Methods (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with object methods? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `shelter.dogMessage();`

  * ✔️ `shelter.dogs`

  * ✔️ `shelter.dogs[0]`

* Open `24-Stu_Object-Methods/Solved/script.js` in your IDE and explain the following:

  * The `chosenPet` variable holds the name of the chosen pet, as follows:

    ```js
    var chosenPet = "Lulu";
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use keys to access an object's properties?

  * 🙋 We first use the object's name. Then we use the key to identify the data we want to access.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 19. Instructor Demo: this (5 min)

* Open `25-Ins_Object-This/index.html` in your browser and navigate to the console and demonstrate the following:

  * 🔑 When we log the keyword `this`, the `window` object is logged.

  * 🔑 The `window` object represents the browser's open window and has many properties, including methods.

* Open `25-Ins_Object-This/script.js` in your IDE and demonstrate the following:

  * The `this` keyword refers an object. The global object is the open browser window. You can see `this` at work in the following example:

    ```js
    console.log(this);
    ```

  * When we use `this` inside an object like `planet`, the keyword `this` belongs to that object and is used to refer to the object's properties, as shown in the following example:

    ```js
    logFacts: function () {
      console.log("This planet's name is " + this.name);
      console.log("This planet's age is " + this.age);
    }
    ```

  * When we call an object's method, `this` refers to the object that the method belongs to. Because `logPopulation` belongs to the `planet` object in the following example, `this` refers to `planet`:

    ```js
    logPopulation: function () {
      if (this.isPopulated) {
        console.log("This planet's population is " + this.population);
      } else {
        console.log("The planet is unpopulated");
      }
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the keyword `this` refer to?

  * 🙋 The keyword `this` refers to the object it belongs to. If `this` is not inside another object, it refers to the global object, or `window`.

* Answer any questions before proceeding to the next activity.

### 20. Student Do: this (15 min)

* Direct students to the activity instructions found in `26_Stu_Object-This/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of this

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/script.js).

  ## Notes

  Refer to the documentation:

  [MDN Web Docs on this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * JavaScript has its own built-in `Math` object with mathematical functions we can use. How can we combine `Math.floor()` and `Math.random()` to randomly select an element from an array? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 21. Instructor Review: this (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the keyword `this`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `this` in global context

  * ✔️ `this` in local context

  * ✔️ `this` in object method

* Open `26-Stu_Object_This/Solved/script.js` in your IDE and explain the following:

  * 🔑 When we log the keyword `this` alone&mdash;like in the following example&mdash;the global object, or `window`, is logged:

    ```js
    console.log(this);
    ```

  * When we use `this` inside a function, `this` refers to the global object, as follows:

    ```js
    function helloThis() {
      console.log("Inside this function, this is " + this);
    }
    ```

  * 🔑 When we use `this` inside an object, `this` is local and belongs to that object, as shown in the following example:

    ```js
    var child = {
      age: 10,
      ageTenYears: function() {
        console.log(this.age + 10);
      }
    };
    ```

  * 🔑 When we use `this` in a nested object, `this` refers to the object where it is used even if it is inside another object, like in the following example:

    ```js
    var investor = {
      name: "Cash Saver",
      investment: {
      initialInvestment: 5000,
      investmentGrowth: function() {
        console.log(this.initialInvestment * 1.15)
        }
      }
    };
    ```

  * 🔑 When we call an object's method, `this` still refers to the object the method belongs to&mdash;even when it is called outside the object, like in the following code:

    ```js
    child.ageTenYears();
    investor.investment.investmentGrowth();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the global object?

  * 🙋 The global object is the object that exists in the global scope. The `window` object is the global object.

  * ☝️ What does the keyword `this` refer to inside an object?

  * 🙋 The keyword `this` refers to the object.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Branch/README.md`.

## 22. Everyone Do: Git Branching and Merging (20 min)

* Open the [Atlassian guide to using branches](https://www.atlassian.com/git/tutorials/using-branches) in your browser and explain the following:

  * When we work on new features or bug fixes, or when we work in a collaborative environment, it is not a good idea to work directly in the `main` branch.

  * Using Git, we can create a copy of the `main` branch and then work in a different branch. Doing so enables us to work in isolation, without messing up the codebase.

  * In this activity, we'll explore the `git branch`, `git checkout`, and `git merge` commands and how we can use them to work in different branches and merge branches locally.

* Direct students to the activity instructions found in `27-Evr_Git-Branch/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

* Open your command line and demonstrate the following:

  * 🔑 We can create a new branch to work in, as shown in the following code, but it doesn't immediately take us to that new branch:

    ```bash
    git branch <name-of-branch>
    ```

  * 🔑 If we want to move into that branch to work, we use the `checkout` command, as follows:

    ```bash
    git checkout <name-of-branch>
    ```

  * 🔑 Alternatively, we can create a branch and `checkout` into it simultaneously, as follows:

    ```bash
    git checkout -b <name-of-branch>
    ```

  * 🔑 When we finish making changes in the branch, we commit the work to it and `checkout` back to the branch we want this new code to be merged to, then we merge it with the following command:

    ```bash
    git add -A
    git commit -m 'commit message'

    git checkout main
    git merge <name-of-branch>
    ```

  * When we're done, we can keep the feature branch or delete it, as follows:

    ```bash
    git branch -d <name-of-branch>
    ```

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
