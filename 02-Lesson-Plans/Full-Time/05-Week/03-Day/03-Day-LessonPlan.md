# 5.3 Full-Time Lesson Plan: Node.js and Object-Oriented Programming (OOP)

## Overview

In this class, we will start by doing the mini-project from Module 09 on Node.js. Then students will be introduced to object-oriented programming. They will learn about key OOP concepts like constructors, prototypes, polymorphism, and Promises.

> **Important**: Ensure that all activities using the `inquirer` package is using version 8.2.4. The latest version of `inquirer` (version 9+) introduces breaking changes to activities. All activities have version 8.2.4 in their respective `package.json` files but should you or your students install `inquirer`, please use `npm i inquirer@8.2.4`.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` from Module 09 through `08-Stu_Promises` in Module 10.

* **Important**: Trilogy as a company values transparency and data-driven change quite highly. We know that some areas will need improvement as we grow. It’s hard for us to know what these areas are unless we ask questions. Your candid input truly matters to us, as you are vital members of the Trilogy team. In addition to individual feedback at the end of each lesson plan, we would appreciate the feedback of all instructors and TAs in the [mid-course instructional staff survey](https://forms.gle/yPfrY4CjNeAqbVKD6).

* Be sure to review the activities before class. Try to anticipate any questions that students might have, especially on these core OOP topics!

* Constructors are extremely useful in creating objects of similar types and allow for the development of very interesting applications. Make sure your students have a firm understanding of how objects function.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* By the end of class students will be able to:

* Create new objects using constructor functions.

* Add methods to objects using prototypical inheritance.

* Explain polymorphism through method overloading.

## Slide Deck

* [Module 10 Slide Deck](https://docs.google.com/presentation/d/1DtkslDqhc1kio8D9d3N2jRUAKzJW3BXa6RWRQHzV7Nc/edit?usp=sharing)

## Time Tracker

| Start   |  #  | Activity Name                   | Duration |
|---------|-----|---------------------------------|----------|
| 10:00AM | 1   | Instructor Demo: Mini Project   | 0:05     |
| 10:05AM | 2   | Student Do: Mini Project        | 0:60     |
| 11:05AM | 3   | Instructor Review: Mini Project | 0:10     |
| 11:15AM | 4   | Introduce Challenge             | 0:05     |
| 11:20AM | 5   | FLEX                            | 0:30     |
| 11:50PM | 6   | Instructor Do: Stoke Curiosity  | 0:10     |
| 12:00PM | 7   | BREAK                           | 0:30     |
| 12:30PM | 8   | Instructor Demo: Constructors   | 0:05     |
| 12:35PM | 9   | Student Do: Constructors        | 0:15     |
| 12:50PM | 10  | Instructor Review: Constructors | 0:10     |
| 1:00PM  | 11  | Instructor Demo: Prototypes     | 0:05     |
| 1:05PM  | 12  | Student Do: Prototypes          | 0:15     |
| 1:20PM  | 13  | Instructor Review: Prototypes   | 0:10     |
| 1:30PM  | 14  | Instructor Demo: Polymorphism   | 0:05     |
| 1:35PM  | 15  | Student Do: Polymorphism        | 0:15     |
| 1:50PM  | 16  | Instructor Review:Polymorphism  | 0:10     |
| 2:00PM  | 17  | Instructor Demo: Promises       | 0:05     |
| 2:05PM  | 18  | Student Do: Promises            | 0:15     |
| 2:20PM  | 19  | Instructor Review: Promises     | 0:10     |
| 2:30PM  | 20  | END                             | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini-Project (5 min)

* Welcome students to class.

* Ask if anyone has questions before starting the mini-project.

* Open `28-Stu_Mini-Project/README.md` in your browser and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following:

  * 🔑 Notice that when we run the application, we are presented with a series of prompts by `inquirer`.

  * 🔑 After the inputs are entered, we are presented with a message that `index.html` has been written to.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would import `inquirer`, gather the required responses from the user and use those responses in conjunction with the `fs` module to write some html to a file. It will also require some creative string concatenation.

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project`.

* Break your students into groups that will work together on this activity.

```md
# Mini-Project

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## Instructions

* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

* An HTML document containing the information collected from the prompts should be constructed and written to the file system. Be sure to add some CSS styling to the document.

* You’ll need the following tools and technologies to accomplish this:

  * `fs` for writing to the file system

  * `inquirer` for collecting user input

  * String template literals for generating a string version of the HTML document before it is written to the file system

## 💡 Hints

It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.

## 🏆 Bonus

* Instead of using callback functions, what are some other tools in JavaScript we can use to handle asynchronous functionality?
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Mini-Project (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Template literal syntax

  * ✔️ `inquirer.prompt()`

  * ✔️ `fs.writeFile()`

* Open `28-Stu_Mini-Project/Main/index.js` in your IDE and explain the following: 

  * We import the required packages first, as follows:

    ```js
    const inquirer = require("inquirer");
    const fs = require("fs");
    ```

  * 🔑 We destructure our `answers` object to retrieve the values we desire to fill in our template.

  * 🔑 We can construct an HTML string using string template literals in the function `generateHTML()`:

    ```js
    function generateHTML({ name, location, github, linkedin }) {
      return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${name}</h1>
        <p class="lead">I am from ${location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${github}</li>
          <li class="list-group-item">LinkedIn: ${linkedin}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;
    }
    ```

  * 🔑  `inquirer.prompt({})` will collect the needed responses from the user and assign them to an object for us. We called the object `answers`, as shown in the following example:

    ```js
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
    ```

  * 🔑  We then use `fs.writeFile()` inside of the Promise returned by `inquirer.prompt()` to generate the HTML file with our answers:

    ```js
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can asynchronous code help developers write better code?

  * 🙋 Asynchronous programming allows the code to execute logic without blocking the rest of the application’s functionality.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main` and run `npm i` in your command line.

* Run `node index.js` from your command line and demonstrate the following:

  * We will build a command-line application that will generate REAMDEs for us. 

  * You might actually want to use this application for all your Challenges in the future. It will also help keep each of your projects looking professional when you are applying for jobs.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to use `inquirer` to gather responses from the user, how to use `fs` to write the content to a markdown file, and also how to use the responses to inject data into the template strings.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 Much like the mini-project, we will be using the `inquirer` responses to write to a file.

  * ☝️ How does this project relate to your career goals?

  * 🙋 It will help us learn how to use Node's `fs` module. It also carries an added benefit of helping keep readme files looking fresh. Employers often view job seekers' pinned projects on GitHub, and a sleek readme can be the difference between piquing their interest or seeing them move on to the next candidate.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

* Answer any questions before ending the class.

### 5. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1DtkslDqhc1kio8D9d3N2jRUAKzJW3BXa6RWRQHzV7Nc/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Object-Oriented Programming**
  
    * This module will be an introduction to object-oriented programming (OOP). In today's class, we will cover objects and constructors.

  * **What is programming?** 
  
    * **Programming** refers to designing and building an executable program that will accomplish a specific computing task. Essentially, programming is problem-solving.

  * **What problems do we solve?**

    * Programming enables us to solve almost any task or problem on a computer, usually in one of two primary categories: algorithms or automation.

  * **What is DRY?**
  
    * **DRY**, or **Don’t Repeat Yourself**, is a fundamental programming principle.  Duplicate code wastes time and memory and can confuse readers or contributors to your project.

  * **What is an object?**
  
    * **Objects** in JavaScript are unordered collections of related data built on a key-value structure in which values can be any data type, including functions. 

  * **Why are objects important in Javascript?**

    * Because everything in JavaScript is an object! Well, except for primitive data types. Everything else is an object&mdash;essentially a list of key-value pairs.

    * Data types that are objects:
    
      * Arrays

      * Dates

      * Math

      * Functions

      * And more!

    * Primitive data types (NOT objects):

      * `null`

      * `undefined`

      * Strings

      * Numbers

      * Symbols

      * Booleans
  
  * **How do we create objects?**
  
    * We can use **object** literals, which define and create an object in one statement.

    * We can use the `new` keyword, which defines and creates a single object.

    * Or we can use **constructors**, which create objects from a blueprint.

  * **What is object-oriented programming?**
    
    * **OOP** is a programming paradigm, or pattern, centered around objects. In object-oriented programming, we solve problems by employing collections of objects that work together. Their ability to communicate with each other makes objects particularly well-suited to address large, complex problems. 
    
    * OOP offers the following benefits:

      * **Encapsulation**&mdash;object data (and often functions) can be neatly stored (i.e., encapsulated). 

      * **Inheritance**&mdash;new classes can be created based on other classes (i.e., the `Person` class is parent to the `Student` and `Teacher` classes).

      * **Abstraction**&mdash;creating a simple model of something complex.

      * **Polymorphism**&mdash;multiple object types can implement the same functionality. 

  * **How can we learn to use OOP?**
  
    * OOP is a broad concept that is best learned through real-life examples. We begin to see the value of OOP when we use objects to model real-world things in code and provide functionality that would otherwise be hard or impossible to achieve.

    * Try some of the following techniques to learn OOP:

      * Read the docs and practice with the provided examples.
    
      * Reverse-engineer finished code to see how it was created.
    
      * Build something from scratch.
    
      * Debug a broken app using Chrome DevTools.
    
      * And most importantly, ask questions!

  * **Mini-Project**

    * For this module's mini-project, you will build a word-guessing CLI game!

* Navigate to `01-Class-Content/10-OOP/01-Activities/28-Stu_Mini-Project/Main` and run `npm install` in your command line.

* Run `npm start` to start the word-guessing CLI game and demonstrate the following:

  * In this assignment, we will use object-oriented programming to build a word-guessing command-line game.

  * This will be a fun chance to use classes in conjunction with Inquirer and Node.js.

  * We are given 10 chances to guess letters to complete a word.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to implement object-oriented programming, ES6 classes, and constructor functions to build a command-line application.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This project will build on your knowledge of Node.js and newer ES6 syntax.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Building an app like this is an exercise in using JavaScript outside of the browser&mdash;a fundamental characteristic of back-end development. We are just starting to scratch the surface!

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: Constructors (5 min) 

* Navigate to `01-Ins_Constructors` and run `node index.js` from the command line to demonstrate the following: 

  * 🔑 When we run the program, we see the following output in the console:

    ```
    Woof!
    ```

* Open `01-Ins_Constructors/index.js` in your IDE and explain the following:

  * 🔑 We create a constructor function called `Animal()` that takes in two parameters, `raining` and `noise`, as follows:

    ```js
    function Animal(raining, noise) {
    ```

  * 🔑 We pass the `raining` and `noise` parameters into the object's keys as their value, as shown in the following example:

    ```js
    this.raining = raining;
    this.noise = noise;
    ```

  * 🔑 The third key is a function called `makeNoise()` that checks if the value of `raining` is `true`. If it is, it will log the value of `noise` in the console. See the following code for an example:

    ```js
    this.makeNoise = function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
    ```

  * When we run `node catsDogs.js` in the console, the `dog` and `cat` objects are created and the `makeNoise()` method is called on them, as shown in the following example:

    ```js
    let dog = new Animal(true, "Woof!");
    let cat = new Animal(false, "Meow!");

    dog.makeNoise();
    cat.makeNoise();
    ```

  * Only the `dog` object's `"Woof!"` will be logged in the console, because its `raining` value is set to `true`.

  * However, if we set the `raining` value of `cat` to `true` and call the `makeNoise()` method, as follows, then `"Meow!"` will be logged in the console:

    ```js
    cat.raining = true;
    cat.makeNoise();
    ```

  * Because both `dogs.raining` and `cats.raining` are now set to `true`, the `massHysteria()` method will also print out its message in the console. 

* Run `node index.js` from the command line again to demonstrate the following:

  * Now we see `"Meow!"` as well as `"DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!"` in the console, as follows:

    ```
    Woof!
    Meow!
    DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the purpose of the constructor function?

  * 🙋 **Constructor functions** act as a kind of blueprint for creating many objects of the same type. They indicate the necessary criteria for creating an object and allow instances of that object to be **instantiated** (or created) by using the `new` keyword.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Constructors/README.md`.

### 9. Student Do: Constructors (15 min) 

* Direct students to the activity instructions found in `02-Stu_Constructors/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create Objects Using a Constructor Function

  Work with a partner to implement the following user story:

  * As a developer, I want to create new objects using a constructor function.

  ## Acceptance Criteria

  * It's done when the constructor function is named `Developer()` and it takes in two parameters, `name` and `tech`.

  * It's done when the parameters are passed into the object's keys as their values.

  * It's done when the object's third key is a method called `introduction()` that prints a message in the console, introducing a developer's `name` and what `tech` they like.

  * It's done when I create a new object using the `Developer()` constructor with a `name` and `tech` of my choice.

  * It's done when the introduction of my new object is printed in the console.

  ---

  ## 💡 Hints

  How can we use template literals to print an introduction like "Hi, my name is Rita and I love JavaScript"?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some built-in JavaScript constructors for native objects?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 10. Instructor Review: Constructors (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with constructors? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `Developer()` constructor function

  * ✔️ `introduction()` method

* Open `02-Stu_Constructors/Solved/index.js` in your IDE and explain the following: 

  * 🔑 We create a constructor function named `Developer()` that takes in two parameters, `name` and `tech`, as shown in the following example:

    ```js
    function Developer(name, tech) {

    }
    ```

  * We pass the `name` and `tech` parameters into the object's keys as their values, as shown in the following example:

    ```js
    this.name = name;
    this.tech = tech;
    ```

  * 🔑 The third key is a method called `introduction()`. We use template literals to print the message in the console, as shown in the following example:

    ```js
    this.introduction = () => {
      console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
    };
    ```

  * We create a new object to test the `Developer` constructor. We can use any name and technology, but in the following example, we will use `Rita`:

    ```js
    const rita = new Developer('Rita', 'JavaScript');
    ```

  * We call the `introduction()` method on `Rita` to print the message in the console, as follows:

    ```js
    rita.introduction()
    ```

* Run `node index.js` from your command line and demonstrate the following:

  * We see Rita's introduction in the console, as follows:

    ```
    Hi, my name is Rita and I love JavaScript!
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we add a method to a constructor?

  * 🙋 We can add methods to an object constructor inside the constructor function, or we can use the `prototype` property to add methods to existing constructors.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Prototypes (5 min) 

* Open Chrome DevTools and demonstrate the following:

  * 🔑 Nearly everything in JavaScript is an object! Strings, dates, numbers, and arrays&mdash;they are all standard built-in objects in JavaScript. 
  
  * 🔑 Objects in JavaScript have prototype objects. A link is made between the object instance and its prototype (its `__proto__` property, which is derived from the `prototype` property on the constructor). Properties and methods are found by walking up the chain of prototypes.

  * 🔑 For example, in DevTools, let's create a new array, as follows:

    ```js
    myArray = [2, 4, 6, 8];
    ```

  * Next, type `myArray.`&mdash;once we type the period, we see a list of properties and methods defined on `myArray`'s prototype object, which is `Array.prototype`. If we click on `__proto__`, we can see the full list of inherited methods. Among them is the `forEach()` method.

  * Let's apply that method to `myArray`, as shown in the following example:

    ```js
    myArray.forEach((num) => console.log(num));
    ```

  * As a result, every number in the array will log in the console. We were able to use the `Array.prototype.forEach()` method because `myArray` was derived from the built-in `Array` object.
  
  * 🔑 Additionally, we can access methods and properties further up the prototype chain. In DevTools, let's create a `person` object with the occupation of `Full-Stack Web Developer`, which is a string. See the following code for an example:

    ```js
    const person = {
      name: 'Eric',
      age: 28,
      occupation: 'Full-Stack Web Developer',
    };
    ```
  
  * `person` is an object, but when we type `person.occupation.__proto__` in the console, it returns `String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}`, which we can expand. Because `occupation` is a string, it has access to the `String` prototype. Of the many methods available, let's try `toLowerCase()` to convert the `occupation` into all lowercase. Referencing methods via the prototype chain is also an efficient use of memory. Rather than creating multiple copies of the same method in memory, we can create one and point to it, as shown in the following example:

    ```js
    person.occupation.toLowerCase();
    ```

  * But these are all built-in methods of JavaScript. What if you wanted to make your own prototype methods?

  * In DevTools, let's create a constructor function named `Movie()`, which will take in two arguments, `title` and `releaseYear`, as shown in the following example:

    ```js
    function Movie(title, releaseYear) {
      this.title = title;
      this.releaseYear = releaseYear;
    }
    ```

  * Create a movie using the constructor function, as follows:

    ```js
    const superman = new Movie('Superman', 1978);
    ```

  * Let's say that we want to modify the `prototype` property of this constructor function by adding a method that will then be available on all object instances created from the constructor. This method, `logInfo()`, will log information about the movies in the console, as shown in the following example:

    ```js
    Movie.prototype.logInfo = function () {
      console.log(`${this.title} was released in ${this.releaseYear}`);
    };
    ```

  * To test it, call the method on the `superman` object, as shown in the following example:

    ```js
    superman.logInfo(); // => Superman was released in 1978
    ```

  * This new method is now available on all object instances derived from the `Movie()` constructor!
  
  * We can check whether or not a property was inherited by using the `hasOwnProperty()` method. This will return `true` if it does have the specified property. See the following code for an example:

      ```js
      superman.hasOwnProperty('logInfo')
      ```
  
  * And although we added this new method to the constructor's prototype AFTER we created the `superman` object instance from the constructor, the method was still available on the `superman` object instance!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use the `hasOwnProperty()` method to check whether an object's property is its own or was inherited?

  * 🙋 The `hasOwnProperty()` method will return `false` if it is not a direct method.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Prototypes/README.md`.

### 12. Student Do: Prototypes (15 min)

* Direct students to the activity instructions found in `04-Stu_Prototypes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Prototypes

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/index.js).

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between adding a method inside the constructor and adding it to the prototype?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Prototypes (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with prototypes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `prototype`

* Open `04-Stu_Prototypes/Solved/index.js` in your IDE and explain the following: 

  * This function is a constructor called `Character()` that will take in five arguments. We assign those arguments to keys in the `constructor`, as follows:

    ```js
    function Character(name, type, age, strength, hitpoints) {
      this.name = name;
      this.type = type;
      this.age = age;
      this.strength = strength;
      this.hitpoints = hitpoints;
    }
    ```

  * 🔑 We add an method called `printStats()` to the prototype of `Character()`, to avoid redeclaring the method in memory each time we create an instance of `Character()`. We can define the method once on the prototype and simply point each instance to it, as follows:

    ```js
    Character.prototype.printStats = function () {
      console.log(
        `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
      );
      console.log('\n-------------\n');
    };
    ```

  * We add an `isAlive()` prototype method that determines whether the value of `hitpoints` is greater than zero and returns a Boolean that informs us whether the character is alive, as shown in the following example:

    ```js
    Character.prototype.isAlive = function () {
      if (this.hitpoints > 0) {
        console.log(`${this.name} is still alive!`);
        console.log('\n-------------\n');
        return true;
      }
      console.log(`${this.name} has died!`);
      return false;
    };
    ```

  * We also add two other functions to the prototype. The `attack()` method takes in a second object (another character) and decreases the `hitpoints` by that character's `strength`. The `levelUp()` method increases `this` character's stats when called. See the following code for an example:

    ```js
    Character.prototype.attack = function(character2) {
      character2.hitpoints -= this.strength;
    };

    Character.prototype.levelUp = function() {
      this.age += 1;
      this.strength += 5;
      this.hitpoints += 25;
    };
    ```

  * Finally we can create two characters by using the constructor function and make them fight in the console by calling their prototype methods, as shown in the following example:

    ```js
    const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
    const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

    warrior.printStats();
    rogue.printStats();

    rogue.attack(warrior);

    warrior.printStats(); // => Crusher HitPoints: 55
    warrior.isAlive(); // => Crusher is still alive!

    rogue.levelUp();
    rogue.printStats(); // => Dodger HitPoints: 75
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why don't we just declare the methods in the constructor?

  * 🙋 When we bind a function using the `this` keyword, the method only exists on that instance of the object. For any method bound to `this`, it will be redeclared with each new instance of an object.

  * ☝️ How does the prototype help us solve this problem?

  * 🙋 The prototype allows us to declare methods that will be attached to all instances of an object of that prototype. Because the method is applied to the prototype, it is only stored in memory once for all instances.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Polymorphism (5 min)

* Open `05-Ins_Polymorphism/index.js` in your IDE and explain the following:

  * In OOP, **polymorphism** refers to the ability to create a variable, a function, or an object that has more than one form. 
  
  * 🔑 One example of polymorphism is **method overloading**, which allows a constructor to have a single method that behaves differently based on the kind of data provided to that method as an argument.

  * In the following example, the `area()` method will return the area of a rectangle based on how many arguments are passed into it:

    ```js
    const OverloadDemo = function () {
      this.area = function (x, y) {
        console.log('x = ', x);
      }
    ```

  * We use a conditional statement to check whether `y` is passed in. If there is no `y` argument, then we log `y is not provided`&mdash;along with the area of the square&mdash;into the console, as shown in the following example:

    ```js
    if (!y) {
      console.log('y is not provided');
      return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
    }
    ```

  * Otherwise, we log the value of `y` along with the area of the rectangle, as follows:

    ```js
    console.log('y = ', y);
    return `\nThe area of the rectangle is ${x * y} sq units`;
    ```
  
  * Note that the data in this example is being passed directly to the method instead of relying on data inside the constructor.

* Navigate to `05-Ins_Polymorphism/` and run `node index.js` from the command line to demonstrate the following: 

  * 🔑 We see that `x = 5` and `y = 7`, so the area of the rectangle is calculated to be 35 sq units.

  * 🔑 But then we see that `x = 5` and `y is not provided`. That implies that this is a square, so the area of the square is 25 sq units.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we implement method overloading in the application?

  * 🙋 We will need to use either an `if` statement or a `switch` statement to determine what is returned by the method.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Polymorphism/README.md`.

### 15. Student Do: Polymorphism (15 min)

* Direct students to the activity instructions found in `06-Stu_Polymorphism/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Grading App Returns Undefined

  Work with a partner to resolve the following issues:

  * As a developer, I want to understand the concept of polymorphism by writing code that uses method overloading.

  ## Expected Behavior

  * When the user passes a number grade, like `95`, into the `displayGrade()` method, the method should return a string indicating the letter grade, like `A`.

  * When the user passes a letter grade, like `B`, into the `displayGrade()` method, the method should return a string indicating the range of the grade percentage, like `80-89`. 

  ## Actual Behavior

  When the user passes in a number grade or letter grade, the method returns `undefined`.

  ## Steps to Reproduce the Problem

  1. Run `node index.js` from the command line.

  ---

  ## 💡 Hints

  How might the `inRange()` helper function and `switch` statements come in handy?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Think of another method you could implement that would use the parameters of the method to behave a certain way. How could you check the number of arguments that were passed to a method?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 16. Instructor Review: Polymorphism (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with polymorphism and method overloading? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Method overloading

* Open `06-Stu-Polymorphism/Solved/index.js` in your IDE and explain the following: 

  * At the top of the file, we see the `inRange()` helper function and a constructor called `Student()`, as follows:

    ```js
    const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

    function Student(first, last, age) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
    ```

  * We also see a method on the `Student()` constructor called `displayGrade()`. We have been tasked with building out this method by checking the data type for the value of `grade`. 
  
  * We check that there is no `input` for `grade`, and if so, we immediately throw an error, as follows:

    ```js
    this.displayGrade = function (grade) {
      const input = grade;
      if (!input) {
        throw new Error('no grade provided');
      }
    ```

  * Then we declare the variable `response` to be used in the conditional statements, as shown in the following example:

    ```js
    let response;
    ```
  
  * 🔑 We respond differently depending on whether or not `input` is a string or a number. So first we will check whether `input` is a number. If it is, then we will use a series of `if` statements and the helper function `inRange()` to set the `response` variable to the letter grade and return it. See the following code for an example:

    ```js
    if (typeof input === 'number') {
      if (inRange(input, 90, 100)) {
        response = 'A';
      }
      if (inRange(input, 80, 89)) {
        response = 'B';
      }
      if (inRange(input, 70, 79)) {
        response = 'C';
      }
      if (inRange(input, 60, 69)) {
        response = 'D';
      }
      if (input < 60) {
        response = 'F';
      }
      return response;
    }
    ```
  
  * 🔑 If `input` is a string, we set up a `switch` statement to handle different cases of letter grades, set the `response` variable to the range of grades, and return it&mdash;as shown in the following example:

    ```js
    if (typeof input === 'string') {
      switch (input) {
        case 'A':
          response = '90 - 100';
          break;
        case 'B':
          response = '80 - 89';
          break;
        case 'C':
          response = '70 - 79';
          break;
        case 'D':
          response = '60 - 69';
          break;
        case 'F':
          response = '0 - 59';
          break;
        default:
          response = '0';
          break;
      }
      return response;
    }
    ```

  * Finally, we create an instance of the `Student` and test the `displayGrade()` method by passing it a grade of first `95` and then `'B'`. When we run `node index.js`, we see the grades logged in the console, as shown in the following example:

    ```sh
    John.displayGrade(): A
    John.displayGrade(): 80 - 89
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the core concept behind method overloading?

  * 🙋 Method overloading allows a method to behave differently depending on the parameters that are passed to it.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Promises (5 min)

* Open `07-Ins-Promises/index.js` in your IDE and explain the following:

  * The `Promise` object represents the completion or failure of an asynchronous operation and its result. 

  * 🔑 Let's say that parents promised their child a Nintendo Switch if the child finished all their chores. If `choresDone` is `true`, the Promise will be resolved. But if not, there will be an error and the Promise will be rejected. See the following code for an example:

    ```js
    const choresDone = false;

    // Promise
    const willGetSwitch = new Promise((resolve, reject) => {
      // Check for a desireable outcome, if so resolve the promise
      if (choresDone) {
        const reward = {
          name: 'Nintendo Switch',
          desired: true,
        };
        resolve(reward);

        // Otherwise reject the promise
      } else {
        const issue = new Error('Child did not finish chores as promised');
        reject(issue);
      }
    });
    ```

  * A **Promise** is a returned object to which you attach callbacks, instead of passing callbacks into a function. Callbacks added using `then()` will be called AFTER the success or failure of the asynchronous operation. 

  * In this case, we have a callback `playGames` that will be called only if the first Promise is resolved, as shown in the following example:

    ```js
    const playGames = (reward) => {
      const message = `I am playing games on my new ${reward.name}`;
      return Promise.resolve(message);
    };
    ```

  * We can add multiple callbacks by calling `then()` several times. The callbacks are exectured one by one in the order in which they were inserted, as follows:

    ```js
    willGetSwitch
      .then(playGames)
      .then((resolved) => console.log(resolved))
      .catch((err) => console.error(err));
    ```

  * The `catch()` is short for `then(null, failureCallback)` and will catch any errors that happened.

* Run `node index.js` in the command line to demonstrate the following:

  * If we try to run `index.js` with `choresDone` set to `false`, we get an error in the console, as follows:

    ```
    Error: Child did not finish chores as promised
    ```

  * If we change `choresDone` to `true` and run `node index.js` again, we see that the Promise resolved successfully and the child is playing games on his new Nintendo Switch&mdash;as shown in the following example:

    ```
    I am playing games on my new Nintendo Switch
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we write asynchronous functions in a clean, readable way?

  * 🙋 We can use Promises to avoid chaining multiple callbacks together. Chaining callbacks can cause confusion and make the code difficult to read.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Promises/README.md`.

### 18. Student Do: Promises (15 min)

* Direct students to the activity instructions found in `08-Stu_Promises/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Refactor Function to use Promises

  Work with a partner to resolve the following issues:

  * Refactor the `practiceCoding()` function to use promises instead of callbacks.

  ## Expected Behavior

  * When the user enters `node index.js coding`, the following should be logged in the console:

    Current user activity: coding
    We are coding in promises!

  * When the user enters `node index.js nothing`, the following should be logged in the console:

    Current user activity: nothing
    Promise rejected: Error: Coding stopped - Student is distracted

  ## Actual Behavior

  * When the user enters `node index.js coding`, the following is logged in the console:

    Current user activity: coding
    We are coding!

  * When the user enters `node index.js nothing`, the following is logged in the console.

    Current user activity: nothing
    { issue: 'Distracted', message: 'Coding stopped' }

  ## Steps to Reproduce the Problem

  1. Run `node index.js coding` to see the message logged in the console.

  2. Run `node index.js nothing` to see the error message logged in the console.

  ---

  ## 💡 Hints

  How can we use the `resolve()` method to handle the fulfillment of a Promise and the `reject()` method to handle the failure of a Promise?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could we resolve multiple Promises at once?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 19. Instructor Review: Promises (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Promises? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `reject()`

  * ✔️ `resolve()`

  * ✔️ `then()`

  * ✔️ `catch()`

* Open `08-Stu_Promises/Solved/index.js` in your IDE and explain the following: 

  * We capture the user's input by setting it to a variable at the top of the application, as shown in the following example:

    ```js
    const userInput = process.argv[2];
    console.log('Current user activity:', userInput);
    ```

  * If the user doesn't enter anything, we return an error message and include instruction on how to use the application. `process.exit()` will end execution of the program when called, as shown in the following example:

    ```js
    if (!userInput) {
      console.error(
        '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
      );
      process.exit();
    }
    ```

  * The application relies on checking whether the student is coding. We check whether the current student action is anything other than `coding` and store the Boolean result in a variable called `studentDistracted`, as shown in the following example:

    ```js
    const studentDistracted = userInput !== 'coding';
    ```

  * We refactor the `practiceCoding()` function from using callbacks to using Promises, as follows:

    ```js
    const practiceCoding = () =>
      new Promise((resolve, reject) => {

      }
    ```

  * 🔑 By the same logic as the original `practiceCoding()` function, the Promise calls the `reject()` method if `studentDistracted` is set to `true`, as shown in the following example:

    ```js
    if (studentDistracted) {
      reject(new Error('Coding stopped - Student is distracted'));
    }
    ```
  
  * 🔑 Otherwise, we resolve the Promise&mdash;as shown in the following example&mdash;because the student is coding, which is the desired outcome:

    ```js
    resolve('We are coding!');
    ```

  * 🔑 We call the `practiceCoding()` function and chain a `then()` to define the code that ought to run after the Promise has been resolved. Lastly, we chain a `catch()` to log any errors in the console, as shown in the following example:

    ```js
    practiceCoding()
      .then(() => console.log('We are coding in Promises!'))
      .catch((err) => console.error('Promise rejected:', err));
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why might we want to use Promises over callbacks?

  * 🙋 Promises offer many advantages. For one thing, they allow you to avoid excessive indentation in your code&mdash;sometimes referred to as "callback hell." Promises are easier to read and manage.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), and stick around for office hours to ask for help.

* After all questions have been answered you can end class for the day.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.