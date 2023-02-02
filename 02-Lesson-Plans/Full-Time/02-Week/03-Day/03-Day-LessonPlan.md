# 02.3 Full-Time Lesson Plan: JavaScript and Web APIs

## Overview

In this class, we will work on the Module 03 Mini-Project and then move onto Module 04 on Web APIs. This will be the students' first introduction to the DOM. Students will gain experience using Web APIs to create, get, and append elements.

## Instructor Notes 

* In this lesson, students will complete activities `28-Stu_Mini-Project` in Module 03 through `08-Stu_Create-Append` in Module 04.

* Be sure to review the activities and try to anticipate questions that students might ask. 

* Module 04 introduces DOM traversal and manipulation. This is a difficult topic for learners new to programming. If students feel overwhelmed, encourage them to talk through the challenge&mdash;in plain language&mdash;with their partner before they begin to write their solutions. You could also encourage them to reference a [visual of the DOM tree](https://docs.google.com/presentation/d/1_cxfDKv12UkB_GWn357lh_2OmRIkrwwjshMFAylG3b0/edit#slide=id.gf37b17fcee_0_1908) like the one found in the slide deck. 

* Be prepared to switch between your browser, IDE, and console when demonstrating the activities in this lesson. It is important for students to see how manipulating the DOM with Web APIs affects what is displayed in the browser.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class students will be able to:

  * Inspect the `Window` object.

  * Traverse the DOM using various Web APIs.

  * Query the DOM for elements by their selector.

  * Add styles to specific elements using `setAttribute()`.

  * Create and append elements to the document.

## Slide Deck

* [Module 04 Slide Deck](https://docs.google.com/presentation/d/1_cxfDKv12UkB_GWn357lh_2OmRIkrwwjshMFAylG3b0/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                         | Duration |
|---     |---  |---                                    |---       |
| 10:00AM| 1   | Instructor Demo: Mini-Project         | 0:05     |
| 10:05AM| 2   | Student Do: Mini-Project              | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini-Project       | 0:10     |
| 11:15AM| 4   | Introduce Challenge                   | 0:05     |
| 11:20AM| 5   | FLEX                                  | 0:30     |
| 11:50PM| 6   | Instructor Do: Stoke Curiosity        | 0:10     |
| 12:00PM| 7   | BREAK                                 | 0:30     |
| 12:30PM| 8   | Instructor Demo: Window Object        | 0:05     |
| 12:35PM| 9   | Student Do: Window Object             | 0:15     |
| 12:50PM| 10  | Instructor Review: Window Object      | 0:10     |
| 1:00PM | 11  | Instructor Demo: Traverse DOM         | 0:05     |
| 1:05PM | 12  | Student Do: Traverse DOM              | 0:15     |
| 1:20PM | 13  | Instructor Review: Traverse DOM       | 0:10     |
| 1:30PM | 14  | Instructor Demo: Setting Attributes   | 0:05     |
| 1:35PM | 15  | Student Do: Setting Attributes        | 0:15     |
| 1:50PM | 16  | Instructor Review: Setting Attributes | 0:10     |
| 2:00PM | 17  | Instructor Demo: Create Append        | 0:05     |
| 2:05PM | 18  | Student Do: Create Append             | 0:15     |
| 2:20PM | 19  | Instructor Review: Create Append      | 0:10     |
| 2:30PM | 20  | END                                   | 0:00     |

- - -

## Class Instruction

### 1. Instructor Demo: Mini-Project (5 min) 

* Welcome students to class.

* Open `28-Stu_Mini-Project/index.html` in your browser and demonstrate the following:

  * 🔑 We will create a Rock, Paper, Scissors game that allows a user to play against the computer. 

  * 🔑 When we open the browser, we are prompted to enter a choice: R, P, or S.

  * 🔑 When we have entered the letter and pressed OK, we are alerted to the computer's choice. 

  * 🔑 After we press OK, we are alerted whether we won, tied, or lost. 

  * 🔑 When we press OK again, we are alerted to the stats.

  * 🔑 When we press OK a final time, we are presented with the prompt "Play Again?"
  
  * 🔑 If we press OK, the game starts again. If not, we exit the game. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 Start with a plan! Pseudocoding will help us figure out what the code will need to look like. Then, using the JavaScript skills learned in class and a bit of research, we will write the actual code. 

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Module 03 Mini-Project: Rock, Paper, Scissors

  In this activity, you will work with a group to build a game using only JavaScript.

  ## Instructions

  The completed application should meet the following criteria:

  * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

  * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

  * As a user, I expect the computer to choose R, P, or S in return.

  * As a user, I want the option to play again whether I win or lose.

  * As a user, I want to see my total wins, ties, and losses after each round.

  ### Specifications

  * Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

  * The computer's selection must be random to ensure a fair game.

  ## 💡 Notes

  Refer to the documentation:

  * [MDN Web Docs on window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

  * [MDN Web Docs on window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

  * [MDN Web Docs on window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

  * [MDN Web Docs on Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your group to further your knowledge:

  * How can you customize the appearance of the `alert()`, `confirm()`, and `prompt()` dialog boxes?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Mini-Project (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `window.prompt()`

  * ✔️ `Math.floor()` and `Math.random()`

  * ✔️ `window.alert()`

  * ✔️ Conditional statements

  * ✔️ `window.confirm()`

* Open `28-Stu_Mini-Project/Main/script.js` in your IDE and explain the following: 

  * We declare variables that will be used to count the wins, losses, and ties, as follows:

    ```js
    var wins = 0;
    var ties = 0;
    var losses = 0;
    ```
    
  * We also create an array to hold all the possible choices the computer can make, as shown in the following example:

    ```js
    var options = ["R", "P", "S"];
    ```

  * 🔑 To play the game, the user has to enter a choice. We use `window.prompt()` to grab the choice and store it in a variable, as follows:

    ```js
    var userChoice = window.prompt("Enter R, P, or S:");
    ```

  * To compare with the computer's pick, the `userChoice` must be capital letters. So we use a string method, shown in the following example, to ensure that all choices are uppercase:

    ```js
    userChoice = userChoice.toUpperCase();
    ```

  * 🔑 We use `Math.floor()` combined with `Math.Random()` to select a random index from the `options` array, as follows:

    ```js
    var index = Math.floor(Math.random() * options.length);
    ```

  * 🔑 The `index` is then used to assign the computer a choice, as follows:

    ```js
    var computerChoice = options[index];
    ```

  * 🔑 We use `window.alert()` to alert the user of the computer's pick in the browser, as shown in the following example:

    ```js
    window.alert("The computer chose " + computerChoice);
    ```

  * 🔑 We use conditional statements to determine whether the game is a tie, win, or loss.

  * If the `userChoice` and `computerChoice` are equal, then it is a tie. We increment `tie` and alert the user that `"It's a tie!"`, as follows:

    ```js
    if (userChoice === computerChoice) {
      ties++;
      window.alert("It's a tie!");
    }
    ```

  * If it is not a tie, we check whether the user has won, with the following code:

    ```js
    else if (
      (userChoice === "R" && computerChoice === "S") || 
      (userChoice === "P" && computerChoice === "R") || 
      (userChoice === "S" && computerChoice === "P")
    ) {
      wins++;
      window.alert("You win!");
    }
    ```

  * If it is not a tie or a win, then we alert the user that it is a loss and increment `losses`, as follows:

    ```js
    else {
      losses++;
      window.alert("You lost!");
    }
    ```

  * We use an alert to show the user the stats. In the following example, `\n` creates line breaks:

    ```js
    window.alert(
      "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );
    ```

  * We use `window.confirm()` to determine whether the user wants to play again, as follows:

    ```js
    var playAgain = window.confirm("Play again?");
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can users interact with the Rock, Paper, Scissors game? 

  * 🙋 Users interact through a series of pop-up boxes that prompt them to provide a choice, share a message, or confirm whether they want to play again. The `window` methods used to create these pop-up boxes are `window.alert()`, `window.confirm()`, and `window.prompt()`. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋We can refer to supplemental material, read the [MDN Web Docs on window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt), the [MDN Web Docs on window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm), and the [MDN Web Docs on window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Open `02-Challenge/Main/index.html` in your browser and demonstrate the following:

  * This password generator takes criteria selected by the user and uses it to generate a random string. 

  * This is a fully functioning app that integrates HTML, CSS, and JavaScript to create an interactive user experience. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning to create an interactive user experience using HTML, CSS, and JavaScript. 

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We will use the HTML and CSS we learned for structure and style but use JavaScript to add interactivity. 

  * ☝️ How does this project relate to your career goals?

  * 🙋 Creating interactive pages and apps is an essential skill in modern web development. This project will be a fantastic addition to your portfolio, to help you demonstrate your JavaScript skills to a future employer. 

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Ask if students have any questions about the Challenge.

* Ask the students if there is anything they would like to review from Module 03 before moving on to Module 04.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1_cxfDKv12UkB_GWn357lh_2OmRIkrwwjshMFAylG3b0/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Web APIs**: In this module, we will learn how to use JavaScript to manipulate HTML with the help of Web APIs. 

  * **What is the web browser?**: 

    * A **web browser**, or **browser**, is a program used to access information on the World Wide Web.

    * Every webpage, image, and video on the web can be accessed via a specific **Uniform Resource Locator (URL)**.

    * Browsers use the URL to retrieve resources from a web server and display them on a user's device.
  
  * **What is an API?**

    * An **API (Application Programming Interface)** is a set of methods, properties, events, and URLs that developers use to interact with components of a user's web browser.

    * APIs can also interact with data sets, hardware or software on a user’s computer, and third-party software and services.
    
  * **What is a Web API?**

    * **Web APIs** are built into the web browser and contain methods that allow us to manipulate a webpage using JavaScript.

    * We use Web APIs to create elements and add them to the browser or to add and remove styles and attributes&mdash;all via JavaScript.
    
  * **What is the DOM?**

    * When we open a webpage, the browser creates a tree of objects that represent the opened page. That tree of objects is the **DOM**, or **Document Object Model**.

    * Using the DOM, we can manipulate the HTML elements on the page via JavaScript. 
    
  * In this module, we will take the next step in building interactive webpages by learning how to harness the power of the DOM and Web APIs to access, create, and change HTML using JavaScript.
  
  * Let's take a quick look at the mini-project that we will do at the end of this module.

* Navigate to `28-Stu_Mini-Project/Main/index.html` in your browser and demonstrate the following:

  * When we open the browser, the user's previous win-loss history is displayed.

  * When we click the start button, blanks appear on the screen. Each blank represents a letter in the word to be guessed.

  * When we click the start button, the timer starts.

  * When the user guesses the word, the timer stops and a win message is displayed.

  * When time runs out and the user has not guessed the word, a lose message appears.

  * The user's wins and losses appear on the screen. 

  * While the app might look a bit daunting right now, it builds on web fundamentals that we already know: HTML, CSS, and JavaScript. The complex functionality is handled by Web APIs and can be implemented with just a few lines of code. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to create and manipulate HTML elements using Web APIs. This new skill will enable us to easily add complex functionality to projects and make apps more interactive. 

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We will create the project's framework with HTML, style with CSS, and functionality with JavaScript.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Web APIs are key to fully functional, interactive apps for the web. In addition, understanding the DOM is a key tool in any developer's toolbox, because it allows you to access and manipulate the content stored on a webpage.

* Answer any questions before proceeding.

### 7. BREAK (30 min)

### 8. Instructor Demo: Window Object (5 min) 

* Open `01-Ins_Window-Object/index.html` in your browser and navigate to the console to demonstrate the following:

  * 🔑 The `window` object represents an open window in a browser. When we log `this`, the `window` object is returned.

  * 🔑 When we open the `window` object, we can see the properties and methods that belong to the window. 

  * 🔑 The document is a property of the `window` object. We log `document.window` to return the document interface.

  * 🔑 The document is the entry point for the webpage's content. We log `document.body` to access the `<body>` element. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the `window` object?

  * 🙋 An open window in the browser. The `window` object also has a property called `document`, which represents an open webpage. 

  * ☝️ How do we access a webpage's content?

  * 🙋 We access a webpage's content through the document. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Window-Object/README.md`.

### 9. Student Do: Window Object (15 min) 

* Direct students to the activity instructions found in `02-Stu_Window-Object\README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Window Object

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./02-Stu_Window-Object/Unsolved/script.js).

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

  [MDN Web Docs on Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would you log the `length` property of the `window` object?  

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Window Object (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `window` object? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `window`

  * ✔️ `window.document`

  * ✔️ `document.documentElement`

  * ✔️ `document.head`

* Open `02-Stu_Window-Object/script.js` in your IDE and explain the following: 

  * 🔑 We log `window` to return the `window` object (the browser window), as shown in the following example:

    ```js
    console.log(window);
    ```

  * 🔑 Because the `document` is a property of the `window` object, we log `window.document` to return a reference to the entire document&mdash;like in the following example:

    ```js
    console.log(window.document);
    ```

  * 🔑 Because `document` serves as the entry point to a webpage's content, we use `document.documentElement` to log the document's root element or the `<HTML>`&mdash;as shown in the following example:

    ```js
    console.log(document.documentElement);
    ```

  * 🔑 We use `document.head` to log the document's `<head>` element, as follows: 

    ```js
    console.log(document.head);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use the window's `document` property to access a webpage's content? 

  * 🙋 We start by accessing the document and then work down the DOM tree to access an HTML element on a webpage.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) and the [MDN Web Docs on Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Traverse DOM (5 min) 

* Open `03-Ins_Traverse-DOM/script.js` in your browser and navigate to the console to demonstrate the following:

  * 🔑 Working your way down the DOM tree is called **DOM traversal**. First, we log `document.body` to access the `<body>` contained in the document.

  * 🔑 We can view all the elements nested inside the `<body>` by logging `document.body.children`.

  * 🔑 To access the first element in the body, we log `document.body.children[0]`.

  * 🔑 We use the terms **parent** and **child** to explain how elements in the DOM are related. A parent element is an element that holds one or more children. But child elements can also have children! To access an element nested in a child element, we log `document.body.children[1].children[0]`.

* Open `03-Ins_Traverse-DOM/index.html` in your IDE to demonstrate the following:

  * 🔑 DOM traversal allows us to access the DOM using parent-child relationships, as shown in the following example:

    ```js
    console.log(document.body.children[1].children[0]);
    ```
  
  * 🔑 We can also access an element directly by targeting the id of the element using the method `getElementbyId()`, like in the following example:

    ```js
    var firstChildUl = document.getElementById("first-child-ul")
    console.log(firstChildUl);
    ```

  * 🔑 We can set and change a selected element's style by accessing an element's `style` object and its properties and assigning a value, like in the following example:

    ```js
    firstChildUl.style.color = "green";
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can you use parent-child relationships to access a child element?

  * 🙋 First you access the parent and then pass through to reach the child element that you want to select. Working your way down the DOM tree is called DOM traversal. 

  * ☝️ How can we use an element's id to access that element?

  * 🙋 We can access elements directly by their id using the method `getElementbyId()`. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Traverse-DOM/Unsolved/README.md`.

### 12. Student Do: Traverse DOM (15 min) 

* Direct students to the activity instructions found in `04-Stu_Traverse-DOM/Unsolved/README.md`.

  ```md
  # 🐛 Style Changes on HTML Elements Not Rendering on Page

  Work with a partner to resolve the following issues:

  * Users should be able to see style changes implemented with JavaScript when the browser page loads.

  ## Expected Behavior

  * The article title has a font size of 50px.

  * The text in the headline "Welcome to World News" is white. 

  ## Actual Behavior

  * The article title is smaller than 50px.

  * The text in the headline "Welcome to World News" is blue. 

  ## Assets 

  The following image demonstrates the web application's appearance and functionality:

  ![On the World News webpage, "Welcome to World News" appears in white text, and the article title is larger than the webpage title.](./images/01-screenshot.png)

  ---

  ## 💡 Hints

  How would you use parent-child relationships to access the elements you want to style? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Using `getElementbyId()` is just one way to return an element. What are some other document methods that allow us to quickly access elements?  

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Traverse DOM (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with DOM traversal? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `getElementById()`

  * ✔️ `children[0]`

  * ✔️ `style.property`

* Open `04-Stu_Traverse-DOM/Solved/script.js` in your IDE and explain the following: 

  * 🔑 We use the method `getElementById()` to select the elements with an id of `main` and `articles`, and we store them in variables. See the following code for an example:

    ```js
    var articlesDiv = document.getElementById("articles");
    var headerDiv = document.getElementById("header");
    ```

  * 🔑 To access elements nested inside the `div` or `header` elements, we use `children[]`, which will return a list of all the child elements. To select the first child element of the article `<div>`, we use `children[0]`. This selects the article title and sets the font size. See the following code for an example:

    ```js
    articlesDiv.children[0].style.fontSize = "50px";
    ```

  * 🔑 The headline "Welcome to World News" is the first child of the `<header>` element. We access the element's `style` object to set the `color` of font to `white`, as follows: 

    ```js
    headerDiv.children[0].style.color = "white";
    ```
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we set an inline style for an element using the DOM? 

  * 🙋 We access the element's `style` object and change or set a style property using the `=` assignment operator.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on the style property](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Setting Attributes (5 min) 

* Open `05-Ins_Setting-Attributes/index.html` in your browser and demonstrate the following:

  * All of the elements on this page have been styled in JavaScript using Web API methods.

  * 🔑 We select multiple elements to style using the document method `querySelectorAll()`.

  * 🔑 We style those elements using the element method `setAttribute()`.

  * We can also use `setAttribute()` to set an image's source directly.

* Open `05-Ins_Setting-Attributes/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We select all the `<p>` and `<div>` elements using the `querySelectorAll()` method and store the lists in variables, as follows:

    ```js
    var divTags = document.querySelectorAll("div");
    var pTags = document.querySelectorAll("p");
    ```
  
  * 🔑 We access the first element of a selector using `querySelector()`. This method returns a single element. See the following code for an example:

    ```js
    var changeP = document.querySelector("#change2");
    ```

  * 🔑 We use `setAttribute()` to set an image's source. The method takes two parameters. The first parameter names the attribute we want to change, and the second is the value we want to assign to the attribute, as shown in the following example:

    ```js
    imgEl[0].setAttribute("src", "images/image_1.png");
    ```

  * 🔑 We can also use `setAttribute()` to set the style of the image, as follows:

    ```js
    imgEl[0].setAttribute("style", "width:500px; height:200px;");
    ```

  * 🔑 We iterate over a list of elements to apply the styling changes to all the elements in the list, as shown in the following example:

    ```js
    for (var i = 0; i < divTags.length; i++) {
      divTags[i].setAttribute("style", "color:blue; font-size: 30px");
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between the document methods `querySelector()` and `querySelectorAll()`?

  * 🙋 The method `querySelectorAll()` returns a list of all of the elements that match the selector. The method `querySelector()` returns only the first match of the selector, even if there are multiple matches.

  * ☝️ What two parameters does the method `setAttribute()` take? 

  * 🙋 The method `setAttribute()` takes two parameters: first, the name of the attribute that we want to set or change (like `src` or `style`), and second, the value you want to set. 

* Answer any questions before proceeding to the next activity.

### 15. Student Do: Setting Attributes (15 min) 

* Direct students to the activity instructions found in `06-Stu_Setting-Attributes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Use JavaScript to Set Attributes of HTML Element

  Work with a partner to implement the following user story:

  * As a web developer, I want all of my titles on a webpage to have the same styling. 

  ## Acceptance Criteria

  * It's done when all the `<h4>` elements are selected and stored in a single variable.

  * It's done when the text of each `<h4>` is set to `blue`, the font size is `30px`, and the text is `bold`.

  * It's done when the padding to the left of the title is set to `10px` and the margin is set to `0`.

  ---

  ## 💡 Hints

  How can you use a loop to iterate over a list of elements? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would using the `:scope` pseudo-class be useful when working with`querySelectorAll()`?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Setting Attributes (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with setting attributes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `querySelectorAll()`

  * ✔️ `setAttribute()`

* Open `06-Stu_Setting-Attributes/Solved/assets/js/script.js` in your IDE and explain the following: 

  * 🔑 We use `querySelectorAll()` to select all the `<h4>` elements in the document. We store the list in a variable, as shown in the following example:

    ```js
    var siteTitles = document.querySelectorAll("h4");
    ```

  * 🔑  We use `setAttribute()` to set the styles for the elements. We can set multiple styles at the same time, as shown in the following example:

    ```js
    siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
    ```

  * 🔑 We use a loop to iterate over all the `<h4>` elements in the list and apply the styles, as shown in the following example:

    ```js
    for (var i = 0; i < siteTitles.length; i++) {
      siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where have we seen loops before? 

  * 🙋 We previously used loops to iterate over a list of students' names. Now we are using a loop to iterate over a list of HTML elements. Loops are widely used in JavaScript when we want to perform the same task over and over again. Loops help us write DRY code!

  * ☝️ How can we set an element's attribute? 
  
  * 🙋 We use `setAttribute()` methods to set or change attributes, like `style` and `src`, all using JavaScript. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) and the [MDN Web Docs on setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Create Append (5 min) 

* Open `07-Ins_Create-Append/index.html` in your browser and demonstrate the following:

  * When we open the browser window, a prompt appears, asking the user to enter an HTML element. We can enter one or more elements, following the prompts. 

  * If valid elements are selected, a message indicates that a new element was created based on the user input.

  * 🔑 The element and the message it contains were all created dynamically using JavaScript.

* Open `07-Ins_Create-Append/script.js` in your IDE and demonstrate the following:

  * 🔑 We use the method `createElement()` to create new elements, as follows:

    ```js
    var tag = document.createElement(tagName);
    ```

  * We use the `textContent` property to add content to the element, as follows:

    ```js
    tag.textContent = "This was made via prompts. It's a " + tagName + ".";
    ```

  * When we create an element, it will not appear unless it is appended to another element in the HTML. We use `appendChild()` to attach the new element as a child of the `<body>`, as shown in the following example:

    ```js
    document.body.appendChild(tag);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ After an element is created, what additional step must we take to get the element to appear in the HTML?

  * 🙋 After we create an element, we must append or attach it to an existing HTML element so that the element shows up in the HTML.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Create-Append/README.md`.

### 18. Student Do: Create Append (15 min) 

* Direct students to the activity instructions found in `08-Stu_Create-Append/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create an Ordered List Using JavaScript

  Work with a partner to implement the following user story:

  * As a blogger, I want to use JavaScript to create an ordered list of my favorite foods on my webpage.

  ## Acceptance Criteria

  * It's done when an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"

  * It's done when the ordered list has a background color of `#333333` and padding of `20px`.

  * It's done when each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.

  * It's done when each list item has a different background color.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The text "Welcome to my page," appears above a centered kitten photo, above the text "My favorite foods are:" and a list of four foods.](./images/01-screenshot.png)

  ---

  ## 💡 Hints

  After creating an element in JavaScript, what additional step must you take to attach the element to the HTML document?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `append()` and `appendChild()`? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: Create Append (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with creating and appending elements? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `createElement()`

  * ✔️ `textContent`

  * ✔️ `appendChild()`

* Open `08-Stu_Create-Append/Solved/script.js` in your IDE and explain the following: 

  * 🔑 We create the ordered list element using `createElement()`, as follows:

    ```js
    var listEl = document.createElement("ol");
    ```

  * The ordered list has four child list elements. We use `createElement()` to create each list item and store the elements in a variable, as shown in the following example:

    ```js
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    ```

  * 🔑 We add text to the list elements using the `textContent` property, like in the following example:

    ```js
    li1.textContent = "Apples 🍎 ";
    li2.textContent = "Pizza 🍕 ";
    li3.textContent = "Dumplings 🥟 ";
    li4.textContent = "Cupcakes 🧁 ";
    ```

  * 🔑 We append the ordered list element as a child of the `<div>` that contains the text "My favorite foods are:" using `appendChild()`, as follows:

    ```js
    favoriteEl.appendChild(listEl);
    ```

  * 🔑 We then append the list items as a child of the ordered list element. This attaches the elements to the HTML document, as shown in the following example:

    ```js
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    ```

  * We add styling to the ordered list element and child list items using `setAttribute()`, like in the following example:

    ```js
    listEl.setAttribute("style", "background:#333333; padding:20px;");
    li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
    li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
    li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
    li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we append the list items to the ordered list element `<ol>` and not just the `<body>`?

  * 🙋 It is important to think about the parent-child relationships when appending elements to the DOM. An ordered list is made up of the ordered list element and its child list items. We maintain that relationship by attaching the list items as children of the ordered list. If we attached the list items to the `<body>`, the list items' parent would be the `<body>`, which is not what we want! 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and the [MDN Web Docs on appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
