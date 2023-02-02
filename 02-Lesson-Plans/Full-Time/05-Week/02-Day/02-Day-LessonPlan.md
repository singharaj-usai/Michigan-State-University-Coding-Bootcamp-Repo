# 05.2 Full-Time Lesson Plan: Node.js

## Overview

In this lesson, we will take a deeper dive into the world that is Node.js. We will explore how to take advantage of native modules that come built into Node.js itself. We will access the file system, pass command-line arguments into applications, get acquainted with Node Package Manager, and finally build CLI apps using a package called `inquirer`.

> **Important**: Ensure that all activities using the `inquirer` package is using version 8.2.4. The latest version of `inquirer` (version 9+) introduces breaking changes to activities. All activities have version 8.2.4 in their respective `package.json` files but should you or your students install `inquirer`, please use `npm i inquirer@8.2.4`.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Modularization` through `27-Evr_Git-Fork`.

* Explain to students that npm works much like embedding a CDN link for a framework directly in the HTML, only we will download it into the project and store it in a folder called `node_modules`.

* At this point students should have both Node.js and npm installed. To ensure that npm is installed properly, instruct students to visit the [Node.js installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).

* This lesson covers some concepts that you might want to review to prepare for student questions:

  * [MDN Web Docs on for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

  * [MDN Web Docs on spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

  * [MDN Web Docs on destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

## Learning Objectives

By the end of class, students will be able to:

* Initialize projects and install third-party modules like `inquirer` using npm.

* Use dependencies and investigate the content of `package.json`.

* Identify and implement how and when to use `for...of` loops.

* Identify and implement how and when to use the spread and rest operators.

* Use destructuring assignment syntax to unpack values from arrays, or properties from objects, into unique variables.

* Identify and implement how and when to fork a Git repository.

## Time Tracker

| Start   | #   | Activity Name                           | Duration |
| ------- | --- | --------------------------------------- | -------- |
| 10:00AM | 1   | Instructor Demo: Modularization         | 0:05     |
| 10:05AM | 2   | Student Do: Modularization              | 0:15     |
| 10:20AM | 3   | Instructor Review: Modularization       | 0:10     |
| 10:30AM | 4   | Instructor Demo: `npm`                  | 0:05     |
| 10:35AM | 5   | Student Do: Package.json and npm        | 0:15     |
| 10:50AM | 6   | Instructor Review: `npm`                | 0:10     |
| 11:00AM | 7   | Instructor Demo: Inquirer               | 0:05     |
| 11:05AM | 8   | Student Do: Inquirer users              | 0:15     |
| 11:20AM | 9   | Instructor Review: Inquirer users       | 0:10     |
| 11:30AM | 10  | FLEX                                    | 0:30     |
| 12:00PM | 11  | BREAK                                   | 0:30     |
| 12:30PM | 12  | Instructor Do: Stoke Curiosity          | 0:10     |
| 12:40PM | 13  | Instructor Demo: for...of               | 0:05     |
| 12:45PM | 14  | Student Do: for...of                    | 0:15     |
| 1:00PM  | 15  | Instructor Review: for...of             | 0:10     |
| 1:10PM  | 16  | Instructor Demo: Rest and Spread        | 0:05     |
| 1:15PM  | 17  | Student Do: Rest and Spread             | 0:15     |
| 1:30PM  | 18  | Instructor Review: Rest and Spread      | 0:10     |
| 1:40PM  | 19  | Instructor Demo: Object Destructuring   | 0:05     |
| 1:45PM  | 20  | Student Do: Object Destructuring        | 0:15     |
| 2:00PM  | 21  | Instructor Review: Object Destructuring | 0:10     |
| 2:10PM  | 22  | Everyone Do: Git                        | 0:20     |
| 2:30PM  | 23  | END                                     | 0:00     |

---

### 1. Instructor Demo: Modularization (5 min)

* Welcome students to class. Ask if anyone has any questions before starting the first activity.

* Open the `15-Ins_Modularization` directory in your IDE.

* Run `node index.js` from the command line and demonstrate the following:

  * 🔑 We see the following output of this file:

  ```sh
  apple
  1
  ```

* 🔑  We are importing a dependency, `badmath`, and logging the results of `badmath.pie` and `badmath.predictable`, as follows:

  ```js
  var badmath = require("./badmath.js");

  console.log(badmath.pie);

  console.log(badmath.predictable());
  ```

* Open the `15-Ins_Modularization/badmath.js` file and explain the following:

  * We declare a `pie` and `predictable` variables, as follows:

  ```js
  var pie = "apple";

  var predictable = function(){
    return 1;
  }
  ```

  * 🔑 We export the `pie` and `predictable` variables as an object stored in `module.exports`, as shown in the following example:

  ```js
  module.exports = {
    pie: pie,
    predictable: predictable
  };
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is referenced by the keyword `module`?

  * 🙋 The file `badmath.js`.

  * ☝️ Where can we look t o learn more about `module.exports`?

  * 🙋 To learn more, we can read the [Node.js documentation on module.exports](https://nodejs.org/api/modules.html#modules_module_exports).

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Maths/README.md`.

### 2. Student Do: Modularization (15 min)

* Direct students to the activity instructions found in `16-Stu_Maths/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 🐛 Implement Modules

Work with a partner to resolve the following issue(s):

* Users should be able to import and use the `maths.js` module to execute simple math operations.

## Expected Behavior

* When I run `node index.js sum 3 4` in the command line, it should print out `7`

* When I run `node index.js difference 3 4` in the command line, it should print out `-1`

* When I run `node index.js product 3 4` in the command line, it should print out `12`

* When I run `node index.js quotient 3 4` in the command line, it should print out `0.75`

## Actual Behavior

* Nothing happens when I run the commands because the `index.js` file is empty

## Steps to Reproduce the Problem

1. Navigate to the `Unsolved` folder in the command line.

2. Run `node index.js sum 3 4` in the command line.

## 💡 Hints

What will the `parseInt()` method allow us to do?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you export functions and objects directly?

Use [Google](https://www.google.com) or another search engine to research this.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Modularization (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with modularization? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `module.exports`

  * ✔️ `require(...)`

  * ✔️ `process.argv`

* Open `16-Stu_Maths/Solved/index.js` in your IDE and explain the following:

  * 🔑 This exercise combines the concepts of `process.argv` with the idea of `module.exports`.

  * 🔑 We exported an object containing all the math methods like `sum()`, `difference()`, `product()`, and `quotient()`.

  * We capture the exported object on the other side by using a `require` statement at the top of the file.

  * When we run the following commands, we can see the output of each math operation at the command prompt:

  ```sh
  node index.js sum 3 4
  node index.js difference 3 4
  node index.js product 3 4
  node index.js quotient 3 4
  ```

  * We import the `maths` module and declare three variables (`operation`, `numOne`, and `numTwo`) to store the values passed to `process.argv` from the command line, as follows:

  ```js
  const maths = require('./maths');

  const operation = process.argv[2];

  const numOne = parseInt(process.argv[3]);
  const numTwo = parseInt(process.argv[4]);
  ```

  * We use a `switch` statement to evaluate the `operation` case and call the corresponding method from the `maths` module, as shown in the following code:

  ```js
  switch (operation) {
    case 'sum':
      console.log(maths.sum(numOne, numTwo));
      break;
    case 'difference':
      console.log(maths.difference(numOne, numTwo));
      break;
    case 'product':
      console.log(maths.product(numOne, numTwo));
      break;
    case 'quotient':
      console.log(maths.quotient(numOne, numTwo));
      break;
    default:
      console.log('Check your maths!');
  }
  ```

  * 🔑  Open `16-Stu_Maths/Solved/maths.js` and show that we export the methods directly by declaring them inside of the `exports` object, as follows:

  ```js
  module.exports = {
    sum: (a, b) => a + b,
    difference: (a, b) => a - b,
    product: (a, b) => a * b,
    quotient: (a, b) => a / b,
  };
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we need to use `parseInt` when getting the numbers from the command line?

  * 🙋 To perform math operations in code, the data type for those numbers has to be a number.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Node Package Manager (npm) (5 min)

* Run `17-Ins-npm/npm/index.js` from the command line and demonstrate the following:

  * 🔑  When we run this JavaScript file with Node.js, we will see an error message of `MODULE_NOT_FOUND`.

  * 🔑  We will also see the error message `Error: Cannot find module 'badmath'`, referring to the module we are attempting to import on line one of `index.js`, shown in the following example:

    ```js
    const badmath = require('badmath');
    ```

  * To resolve this issue, we would need to initialize npm inside this repository. This will create a `package.json` file that will keep track of which packages are needed to use the project properly. We can do this by running the following commands :

    ```sh
    npm init -y
    npm i badmath
    ```

  * 🔑 The `-y` flag tells npm to answer "yes" to each question it normally asks during the init process, to save us some time.

  * The second command, `npm i`, is shorthand for `npm install`. These two commands can be used interchangeably. `npm i badmath` will reach out to npm's registry and install the latest version of the package you named after the command. In this case, you are installing `badmath`.

* Open the `17-Ins-npm/init` folder to examine the additional file.

  * 🔑  You will notice a difference immediately. This folder comes with a `package.json` file. This describes the repository itself as well as any scripts, dependencies, and licenses associated with the project.

  * 🔑  We can also see when we examine the content of the `package.json` file that one of the required dependencies is `badmath`, as shown in the following example:

    ```json
    "dependencies": {
        "badmath": "^1.0.1"
    },
    ```

  * Running `npm install` inside `17-Ins-npm/init` will instruct npm to examine the content of the `package.json` and install anything listed in the dependencies section.
  
  * 🔑 You will also notice a `package-lock.json` file that gets created. This keeps track of specific version numbers, but for the most part we don't need to interact with this file in any way.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we make our own `package.json` file?

  * 🙋 We would run `npm init`.
  
  * ☝️ What can we do if there is already a `package.json` in a project we have cloned?

  * 🙋 We can run `npm install` to get all the needed dependencies.
  
  * ☝️ Where can we find out what other npm commands are available?

  * 🙋 We can review the [npm documentation on CLI commands](https://docs.npmjs.com/cli-documentation/).

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu-Package-npm/README.md`.

### 5. Student Do: package.json and npm (15 min)

* Direct students to the activity instructions found in `18-Stu-Package-npm/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📖 Initialize Projects using Node Package Manager (npm)

Work with a partner to implement the following user story:

* As a developer, I want to be able to keep track of dependencies using `npm`. 

* As a developer, I want to initialize my project and create a `package.json` file.

* As a developer, I want to be able to save packages to my project.

## Acceptance Criteria

* It's done when I see the `package.json` file created in the [Unsolved](./Unsolved/) folder.

* It's done when I have installed the `inquirer` version 8.2.4 package successfully and see it listed in the `package.json` file.

* It's done when I see the `node_modules` folder and `package-lock.json` file in the [Unsolved](./Unsolved/) folder.

## 📝 Notes

Refer to the documentation: 

* [npm-init](https://docs.npmjs.com/cli/v6/commands/npm-init)

* [npm-install](https://docs.npmjs.com/cli/v6/commands/npm-install)

## 💡 Hints

It's possible that the `node_modules` folder is hidden in the `files.exclude` setting in VS Code, so don't let that throw you off if you don't see it.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How does the `-y` flag save us some time when running `npm init`? What does the `-g` flag do when running `npm install`?

* What is `npx` and how is it different from `npm install`?

Use [Google](https://www.google.com) or another search engine to research this.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 6. Instructor Review: Node Package Manager (npm) (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with npm? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `npm init`

  * ✔️ `npm install`

* Open `18-Stu-Package-npm/Solved/package.json` in your IDE and explain the following:

  * 🔑 We start by running `npm init -y`, which will generate the `package.json` file. Optionally, we can run the command without the `-y` flag to allow for more custom responses.

  ```sh
  npm init -y
  npm init
  ```

  * 🔑  In order to install the `inquirer` package, we run `npm install inquirer@8.2.4`, or just `npm i inquirer@8.2.4`.

  ```sh
  npm install inquirer@8.2.4
  ```

  * If we check our `package.json` file again, we will see `inquirer` listed under `dependencies`.

  ```json
  "dependencies": {
    "inquirer": "8.2.4"
  }
  ```

  * We will also see a `node_modules` folder and `package-lock.json` file. For some of us, it's possible that the `node_modules` folder is hidden in the `files.exclude` setting in VS Code.

  * Sometimes, the `package.json` file will be provided for us and we'll just need to install it by running `npm install` in the same directory as the `package.json` file.

  ```sh
  npm install
  ```

  * Running `npm install` is a great first step with any project or exercise that you cloned down from another user or organization.

  * Another tool that you will use often is `npx`, which stands for "node-package-execute". This is a tool that allows us to run a command from a specific package without having to install it. It doesn't make much sense for us to use `npx` in this activity, but being aware of it will help us understand its use case later in the course.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we install a specific package?

  * 🙋 We can run `npm install <package name>`.
  
  * ☝️ How do we create a `package.json` file and skip the questions?

  * 🙋 We can run `npm init -y`.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: inquirer (5 min)

* Run `19-Ins_Inquirer-Demo/index.js` from the command line and demonstrate the following:

  * 🔑 We can see a `package.json` that exists already, indicating that we should run the following command:

  ```sh
  npm install
  ```
  
  * 🔑 When we run `node index.js`, unlike previous Node.js applications that we have built, this one is not only outputting text to the terminal but is also asking us for some input, as shown in the following example:

  ```sh
  ? What is your user name?
  ? What is your password?
  ? Re-enter password to confirm:
  ```

  * 🔑 The application asks for a username, a password, and then a confirmation. If the passwords match, the application logs "Success!”

* Open `19-Ins_Inquirer-Demo/index.js` and examine the code:
  
  * At the top of the file, we import `inquirer`, as follows:

  ```js
  var inquirer = require("inquirer");
  ```

  * 🔑  We use the `prompt` method to ask the user for input, as shown in the following example:

  ```js
  inquirer
    .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
    ])
  ```

  * The prompts are an array of objects that have a `name`, `type`, and `message` property.
  
  * The input of each prompt will be stored in an `object` property that corresponds to the `name` value. The `type` values are built into `inquirer` and allow us to enter secure passwords.
  
  * The `message` property is the prompt that the user ends up seeing.

  * Once all of the prompts are answered, we can then work with the user `response`. Here, the `response` parameter in the `.then` callback corresponds with the user input, which `inquirer` stores in an object, as follows:

  ```js
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!'));
  ```

  * Here we are checking whether the confirmed password input is strictly equal to the password provided in the previous response. We then use a conditional (ternary) operator to check if the passwords match. If so, we log "success!"; otherwise, we let the user know they forgot their password.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Based on the name alone, what do you think the `inquirer` package allows us to do?

  * 🙋 It might be used to inquire, or ask for, information from someone&mdash;the user of the application.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Inquirer-Users/README.md`.

### 8. Student Do: inquirer Users (15 min)

* Direct students to the activity instructions found in `20-Stu_Inquirer-Users/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Build CLI App with Inquirer

  Work with a partner to implement the following user story:

  * As a developer, I want to create a command-line application that takes in input from the user and does something with it.

  ## Acceptance Criteria

  * It's done when I have initialized my repository with a `package.json` file by running `npm init -y`.

  * It's done when I have installed inquirer and added it to my list of dependencies by running `npm i inquirer@8.2.4`.

  * It's done when the application asks the user, "What is your name?"
    
  * It's done when the application asks the user, "What languages do you know?"

  * It's done when the application asks the user, “What is your preferred method of communication?"

  * It's done after I have written those responses to a file.

  ## 💡 Hints

  Why do we need to use `JSON.stringify`? How can we use the npm page for `inquirer` to see how to use checkboxes and lists? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would you format your JSON? Can you generate the name of your user file from the user input?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 9. Instructor Review: inquirer Users (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `inquirer`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `inquirer.prompt()`

  * ✔️ `JSON.stringify()`

  * ✔️ `.then(answers =>`

* Open `20-Stu_Inquirer-Users/Solved/index.js` in your IDE and explain the following:

  * 🔑 The application requires two dependencies, one third-party (`inquirer`) and the other standard library (`fs`), as shown in the following example:

  ```js
  const inquirer = require('inquirer');
  const fs = require('fs');
  ```

  * 🔑 We use two new `type` properties to prompt the user for a `"checkbox"` and a `"list"`, both of which require a `choices` property and a corresponding array of options, as shown in the following example:

  ```js
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "MySQL"
      ]
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: [
        "email",
        "phone",
        "telekinesis"
      ]
    }
  ])
  ```
  
  * We pass the output of the `prompt` method to the Promise callback as `data`, as follows:

  ```js
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  ```

  * We are creating a file name by removing the spaces and setting all letters to lowercase. We then concat the file name using the `.join` method. Finally, we add `.json` to the file name.
  
  * 🔑 We use the `fs.writeFile` method to create a new file using the `filename` variable. We use the `JSON.stringify` optional `replacer` (`null`) and `space` (`\t`) parameters to format the `data` object with pretty-print appearance.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we need to use `JSON.stringify` when passing in the data?

  * 🙋 The data needs to be converted to a string because, as is, `data` is not of type `string`. To learn more, read the [MDN Web Docs on JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
  
  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [inquirer documentation](https://www.npmjs.com/package/inquirer/v/8.2.4), and stick around for office hours to ask for help.
  
* Answer any questions before moving to flex time.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class and congratulate them on learning some of the most used ES6 syntax rules.

* Reassure students that learning new syntax can be time-consuming and difficult, but it won't always feel like that. Using these rules more will allow you to commit them to memory and use less mental bandwidth going forward.

* Explain that one of the best ways to learn these new rules is to use the newer syntax whenever possible. The old syntax is still perfectly valid, and students can always fall back on it.

* These newer syntax rules are not born in a vacuum. They are the result of years of revision by a standards organization called ECMA. It is important to have standards in web development to ensure maximum compatibility across a wide spectrum of web browsers.

* The ES in ES6 stands for **ECMAScript**. ECMAScript itself is a programming language, but as far as we are concerned, it is just a language from which syntax rules are inherited. We can find a more detailed history in the [Wikipedia article on ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

### 13. Instructor Demo: for...of (5 min)

* Open `21-Ins_for-of/index.js` in your browser and demonstrate the following:

* Run `node index.js` after commenting out the multidimensional array example.

  * 🔑 Notice when we run the code that we see each value in the songs array, as follows:

    ```js
    const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

    for (const value of songs) console.log(value);
    ```

  * 🔑 We see in the second example, we use a `for...of` loop to iterate over a multidimensional array.
  
  * 🔑 A multidimensional array is an array of elements where each element is another array. In other words, a multidimensional array is an array of arrays.

    ```js
    const moreSongs = [
      ['Bad Guy', 1],
      ['The Wheels on the Bus', 2],
      ['Friday', 3],
    ];

    for (const song of moreSongs) {
      console.log(song);
    }
    ```

  * 🔑 Explain that the `for...of` statement creates a loop iterating over objects, including `Array`, `Map`, `Set`, `String`, `TypedArray`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does the `for...of` seem to differ from a `forEach`?

  * 🙋 The `forEach` method only applies to arrays, while the `for...of` is much more flexible.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_for-of/README.md`.

### 14. Student Do: for...of (15 min)

* Direct students to the activity instructions found in `22-Stu_for-of/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement and Use for...of Loops

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to use `for...of` loops to iterate through data inside an array.

  ## Acceptance Criteria

  * It's done when I have iterated through the `songs` array with a `for...of` loop and logged each in a cyan color.

  ## 💡 Hints

  What is the iterable we will use in our `for...of` loop?

  How can we use the provided `outputCyanText()` method to console log text in a specific color?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could you iterate through deeply nested objects?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 15. Instructor Review: for...of (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `for...of` loop? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `for...of`
  
  * ✔️ Iterator

* Open `22-Stu_for-of/Solved/index.js` in your IDE and explain the following:

  * 🔑 The syntax for the `for...of` loop reads very similar to plain English, which helps conceptualize what is happening in the program.

  * 🔑 The syntax is relatively straightforward. The key takeaway is knowing when to use and what to use it for.
  
* Navigate to `22-Stu_for-of/Solved/` in your terminal and run `node index` from the command line to demonstrate the following:

  * When we run the `index.js` file, we notice that a song list containing Spotify's top 10 tracks in a cyan color:

    ```console
    Spotify top 10:

    1: MONTERO (Call Me By Your Name)
    2: Peaches (feat. Daniel Caesar & Giveon)
    3: Kiss Me More (feat. SZA)
    4: Astronaut In The Ocean
    5: Save Your Tears (with Ariana Grande) (Remix)
    6. RAPSTAR
    7. Levitating (feat. DaBaby)
    8. Leave The Door Open
    9. Botella Tras Botella
    10. Fiel
    ```
  
  * Provided to us is a helper function, `outputCyanText` that will uses ANSI escape codes to output text in a specific color to the terminal.

    > ANSI Escape codes indicate cursor location, color, font styling, and other options inside text-based terminals.

    ```js
    const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);
    ```
  
  * This is the result of using the `for...of` loop to iterate over each item in the `songs` array and invoke the provided `outputCyanText()` method with the song's title:

    ```js
    for (const song of songs) {
      outputCyanText(song);
    }
    ```

  * 🔑 If you forget the syntax, VS Code can help you create these types of loops by offering a snippet to work from. You can try it yourself by typing `forof` and simply pressing Enter, which will result in the following code:

    ```js
    for (const iterator of object) {
        
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do you know when to use a `for...of` loop?

  * 🙋 A `for of` loop is used to iterate over each element of an object. Arrays and strings are examples of iterable objects that are capable of returning each element one at a time.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Rest and Spread Operators (5 min)

* Navigate to `23-Ins_Rest-and-Spread/index.js` in your IDE and run `node index.js` from the command line to demonstrate the following:

  * 🔑 When we run the file, we get output for a few different operations: without the rest parameter, with the rest parameter, without spread operator, and with spread operator, as shown in the following example:

    ```js
    function add(x, y) {
      return x + y;
    }

    console.log(add(1, 2, 3, 4, 5)) // => 3
    ```

  * It is possible to call a function with any number of arguments, but only the first two will be counted.
  
  * Let's examine this function using rest parameters, as follows:

    ```js
    function add(...nums) {
      let sum = 0;
      for (let num of nums) sum += num;
      return sum;
    }

    add(1) // => 1
    add(3,3) // => 6
    add(1, 1, 4, 5) // => 11
    ```

  * In this example, we use rest parameters `(...nums)` to collect all of the arguments into a `nums` array, enabling us to pass in as many arguments as we want.

  * Now let's review the following example:

    ```js
    function howManyArgs(...args) {
      return `You passed ${args.length} arguments.`; // point out the template literal
    }

    console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
    console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.
    ```

  * 🔑  The takeaway here is that variables are now available inside the array of the function. We can also pass as many in as we want.

  * 🔑  The spread operator `...` allows iterables like arrays, objects, and strings to be expanded into single arguments or elements.
  
  * You can compare this to pouring items out of a cup. The only difference is that the items are variables and the cup is an iterable.

  * In the following example, we have expanded both arrays into a new array with all of the elements:

    ```js
    // Spread Operator

    let dragons = ['Drogon', 'Viserion', 'Rhaegal'];
    let weapons = ['dragonglass', ...dragons, 'wildfire']; // notice the spread operator ...dragons

    console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why does the first example of the `add()` function only output `3`?

  * 🙋 Because only the first and second parameter get counted without the use of the rest operator.
  
  * ☝️ The syntax for spread and rest are similar, but what is the difference between the two?

  * 🙋 The rest parameter allows us to pass in any number of arguments, while the spread operator allows us to spread out an iterable into unique variables.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Rest-and-Spread/README.md`.

### 17. Student Do: Rest and Spread Operators (15 min)

* Direct students to the activity instructions found in `24-Stu_Rest-and-Spread/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📐 Add Comments to Implementation and Use of Rest and Spread Operators

Work with a partner to add comments describing the functionality of the code found in [index.js](./Unsolved/index.js).

## 📝 Notes

Refer to the documentation: 

* [MDN Web Docs on spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

* [MDN Web Docs on rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

* [MDN Web Docs on reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What other data types can you use the spread operator or rest parameters on?

Use [Google](https://www.google.com) or another search engine to research this.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 18. Instructor Review: Rest and Spread Operators (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `rest parameters` and `spread operators`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Spread operator syntax (`...`)

  * ✔️ `reduce()` method

  * ✔️ Rest parameter syntax (`...`)

* Open `24-Stu_Rest-and-Spread/Solved/index.js` in your IDE and explain the following:

  * 🔑 In the first exercise, we are using the spread operator to copy the items in the `songs` array to the `new_songs` array. Much like we would be dumping out the contents of a cup, we are populating the `new_songs` array with the items in `songs`, as shown in the following code:

    ```js
    const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
    const new_songs = [...songs];

    console.log(new_songs); // => ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
    ```

  * 🔑 In the second exercise, we use the `reduce()` method to execute a reducer function on each element of the array. In our case, the reducer function was adding all the numbers up.

    ```js
    const addition = (x, y, z) => {
      const array = [x, y, z];
      return array.reduce((a, b) => a + b, 0);
    };
    ```
  
  * 🔑 Then we modified the `addition()` function to make use of the rest parameters. The `additionSpread()` function allows us to pass in as many arguments as we need. This is particularly useful in this case where we want to add as many numbers as necessary.

    ```js
    const additionSpread = (...array) => {
      return array.reduce((a, b) => a + b, 0);
    };
    ```

  * If we run `node index.js` in our command line, we will see the results of the console.logs.

    ```js
    console.log(addition(1, 2, 3)); // => 6
    console.log(additionSpread(1, 2, 3)); // => 6
    console.log(additionSpread(1, 2, 3, 4, 100)); // => 110
    ```

  * There is a good chance that students might be confused on where spread operators and rest parameters go, because they are very similar and can be used in similar situations. This is just an introduction; assure students that they will begin to pick up fluency as they get more practice.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `reduce()` method help us with in this exercise?

  * 🙋 The `reduce()` method reduces an array to a single value. It takes a callback function and runs that function for each value in the array starting from the left to the right.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and the [MDN Web Docs on rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Object Destructuring (5 min)

* Open `25-Ins_Obj-Destructuring/index.js` in your browser.

* Run `node index.js` from the command line and demonstrate the following:

  * 🔑 Notice that when we run the `index.js` file we see several variables logged to the terminal. Each of these are different ways of accessing variables inside an object.

  * 🔑 Also, in the file, we are using dot notation to access variables inside an object, as we have in the past. We are plucking off certain variables and setting them equal to the value of the object. This is done with curly braces on the left side of the equals sign, as shown in the following example:

    ```js
    const arya = {
      name: 'Arya Stark',
      parents: ['Eddard Stark', 'Catelyn Stark'],
    };

    const { name, parents } = arya;
    ```

  * You can now also use object destructuring as a way to pluck off certain variables from an object. Consider the following example:

    ```js
    const betterLogCharacter = ({ name, parents }) =>
    console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

    betterLogCharacter(jaime);
    ```

    * Destructuring assignment can also be used on arrays. Consider the following example:

    ```js
    const locations = ['Winterfell', 'Casterly Rock', 'Kings Landing'];
    const [winterfell, casterlyRock, kingLanding] = locations;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We could look up examples of object destructuring and get a feel for the logic before attempting the activity.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Obj-Destructuring/README.md`.

### 20. Student Do: Object Destructuring (15 min)

* Direct students to the activity instructions found in `26-Stu_Obj-Destructuring/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📖 Implement and Recognize Object Destructuring

Work with a partner to implement the following user story:

* As a developer, I want to be able to pull out data from objects and arrays into variables.

## Acceptance Criteria

* It's done when I have destructured the objects to pull out the data that is logged in the console.

* It's done when I have destructured the array to pull out the data that is logged in the console.

* It's done when I have run `node index.js` after destructuring to confirm the values logged in the console.

## 📝 Notes

Refer to the documentation: 

[MDN Web Docs on object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can we take a property from an object and assign it to a variable with a different name when we are destructuring it?

Use [Google](https://www.google.com) or another search engine to research this.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 21. Instructor Review: Object Destructuring (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with object destructuring? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Destructuring objects

  * ✔️ Destructuring arrays

* Open `26-Stu_Obj-Destructuring/Solved/index.js` in your IDE and explain the following:

  * This exercise highlights how we can pluck off multiple properties at once, saving us a few lines of code.

  * We can also destructure function parameters. This allows us to name them directly and again save a few steps.  

  * Now we can simply expect an object and pull the properties off without worrying about the order they're passed in or writing extra code to destructure them the old way.

  * In the past, if we wanted to cherry-pick an object's properties, we'd have to do something like the following example:

    ```js
    const nodejs = {
      pkgName: 'Node.js',
      type: 'JavaScript runtime environment',
    };

    const nodejsName = nodejs.name;
    const nodejsType = nodejs.type;

    console.log(nodejsName); // <= Node.js
    console.log(nodejsType); // <= JavaScript runtime environment
    ```

  * 🔑  With ES6 object destructuring syntax, we can destructure data based on their property key names:

    ```js
    const { name, type } = nodejs;

    console.log(name); // <= Node.js
    console.log(type); // <= JavaScript runtime environment
    ```

  * 🔑 For a nested object, we need to be more specific:

    ```js
    const { framework1, framework2 } = js.tools.frameworks;

    console.log(framework1); // <= AngularJS
    console.log(framework2); // <= Vue.js
    ```

  * 🔑 For arrays, we can destructure data by the index:

    ```js
    const languages = ['HTML', 'CSS', 'JavaScript'];

    const [markup, style, scripting] = languages;

    console.log(markup, style, scripting); // <= HTML CSS JavaScript
    console.log(markup); // <= HTML
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Does the order matter when passing destructured object properties into a function?

  * 🙋 No! Because we are referring to the properties in the object by name, the key names will align with the correct value every time.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋  We can refer to supplemental material, read the [MDN Web Docs on object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Fork/README.md`.

### 22. Everyone Do: Git Fork (20 min)

* Open [Git docs](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project) in your browser and explain the following:

* Forking allows you to contribute to a repository that you don't have push access to. When you fork a project, GitHub will make an exact copy of the project that will live on your account that you can push to.
  
* This workflow then allows you to create a pull request to the parent repository when you have finished your contributions. This is a very common workflow in many open source projects.

* Direct students to the activity instructions found in `27-Evr_Git-Fork/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

* Open your browser and choose a repository to fork. Click the green fork button.

* Open your command line and demonstrate the following:

  * After we clone the repository, we will want to visit our own fork on GitHub and copy the Git URL to clone it the local machine. After that, we change into the directory for our forked repository:

    ```sh
    git clone git@github.com:<YOUR_GITHUB_USERNAME>/forking-tutorial.git && cd forking-tutorial
    ```

  * 🔑 After you clone the local repository, run the following command to demonstrate that the remote is pointed to your namespace rather than the parent repository:

    ```sh
    git remote -v
    ```

* Answer any questions before ending class for the day

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

- - -

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
