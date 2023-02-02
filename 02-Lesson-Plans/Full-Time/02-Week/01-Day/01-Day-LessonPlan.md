# 02.1 Full-Time Lesson Plan: JavaScript

## Overview 

This class introduces the fundamentals of JavaScript, including variables, primitive types, comparison operators, conditional statements, arrays, and iteration. Students will also gain experience writing console logs and using the developer console in Google Chrome. 

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Script-ConsoleLog` through `14-Stu_Iteration`.

* Take a few minutes before class to review the activities of the day and anticipate questions that a student new to JavaScript might ask.

* Today's lesson contains a lot of new information for students. If the students seem overwhelmed, point out that these topics are the building blocks of JavaScript and that each activity builds on the ones preceding it. They can look back at previous activities for guidance or reach out during office hours for help.

* At the beginning of today's class, students will learn how to link an external JavaScript file and use the developer console in Google Chrome. Remind yourself of the various ways to open [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/open) on both Mac and Windows so that you can help students navigate the process on their own computers. 

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Identify and declare variables containing primitive data types. 

* Explain and implement comparison and logical operators. 

* Write conditional statements using `if...else`.

* Create an array and access elements using the index.

* Iterate over an array using a `for` loop.

## Slide Deck

* [Module 03 Slide Deck](https://docs.google.com/presentation/d/1pC6pzJY2NfLEOuvM7Ms2p9cHaNFkshCEb5_QtylBdF8/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                             | Duration |
|---     |---  |---                                        |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity            | 0:10     |
| 10:10AM| 2   | Instructor Demo: Script & Console.log     | 0:05     |
| 10:15AM| 3   | Student Do: Script & Console.log          | 0:15     |
| 10:30AM| 4   | Instructor Review: Script & Console.log   | 0:10     |
| 10:40AM| 5   | Instructor Demo: Hello Variable           | 0:05     |
| 10:45AM| 6   | Student Do: Hello Variable                | 0:15     |
| 11:00AM| 7   | Instructor Review: Hello Variable         | 0:10     |
| 11:10AM| 8   | Instructor Demo: Primitive Type           | 0:05     |
| 11:15AM| 9   | Student Do: Primitive Type                | 0:15     |
| 11:30AM| 10  | Instructor Review: Primitive Type         | 0:10     |
| 11:40AM| 11  | Instructor Demo: Operators                | 0:05     |
| 11:45AM| 12  | Student Do: Operators                     | 0:15     |
| 12:00PM| 13  | BREAK                                     | 0:30     |
| 12:30PM| 14  | Instructor Review: Operators              | 0:10     |
| 12:40PM| 15  | Instructor Demo: Conditional Statements   | 0:05     |
| 12:45AM| 16  | Student Do: Conditional Statements        | 0:15     |
| 1:00PM | 17  | Instructor Review: Conditional Statements | 0:15     |
| 1:15PM | 18  | Instructor Do: Stoke Curiosity            | 0:10     |
| 1:25PM | 19  | Instructor Demo: Arrays                   | 0:05     |
| 1:30PM | 20  | Student Do: Arrays                        | 0:15     |
| 1:45PM | 21  | Instructor Review: Arrays                 | 0:10     |
| 1:55PM | 22  | Instructor Demo: Iteration                | 0:05     |
| 2:00PM | 23  | Student Do: Iteration                     | 0:15     |
| 2:15PM | 24  | Instructor Review: Iteration              | 0:15     |
| 2:30PM | 25  | END                                       | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1pC6pzJY2NfLEOuvM7Ms2p9cHaNFkshCEb5_QtylBdF8/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **JavaScript** 
  
    * This module is all about learning how to use JavaScript to apply logic and make applications feel more dynamic.

  * **What do we use HTML and CSS for?**

    * We use HTML to create and organize content on a page and CSS to apply styles, layout, and even animation to that content.

  * **What are some examples of how users interact with a webpage?**

    * We use HTML to create and organize content on a page and CSS to apply styles, layout, and even animation to that content.

  * **Can we achieve these types of interactions using only HTML and CSS?**

    * We interact with webpages in many ways on a daily basis. Typically the webpage will respond or react to these interactions, making the page feel more dynamic and alive.

    * These interactions include the following examples:
      
      * Submitting an HTML form to comment on an article.
      
      * Playing audio or video at the press of a button on the page.
      
      * Using the device’s camera or microphone to enable a conversation.
      
      * And so much more!

  * **Can we achieve these types of interactions using only HTML and CSS?**

    * While HTML and CSS offer some great built-in features that give users a sense of interaction or functionality on a site, they cannot handle the complex tasks that occur in response to these interactions. 

    * For that reason, web developers use another programming language specifically designed for these tasks.

  * **So what is this language that works with HTML and CSS?**

    * JavaScript is a programming language originally created to be run in the browser with the intention of enhancing a webpage’s capabilities. Today, nearly every page we visit on the internet depends heavily on JavaScript to work.

    * While HTML and CSS handle content and design, JavaScript handles the overall functionality of the application to make it feel more alive and dynamic. 

  * **In what ways do we use JavaScript?**

    * Front-end developers use JavaScript primarily to dynamically affect a web page to enhance the user’s experience. No other programming language can run in the browser, so JavaScript is a must-have skill for web developers.

    * JavaScript can be used for the following purposes:

      * Showing a user personal data only after they log into the application.

      * Fetching weather data to display and update on the page.

      * Informing users that they are missing information on a form.
      
      * Remembering a user’s preference between light and dark mode themes.

  * **How can we learn to use JavaScript?**

    * Unlike some other programming languages, JavaScript doesn’t force developers to write code in a specific way. As a result, JavaScript might seem a bit complicated at first, but it can make development work feel incredibly fun and creative as you get to use it more and more. 

    * Try some of the following techniques to learn JavaScript:

      * Read the docs and practice with the provided examples.

      * Reverse-engineer finished code to see how it was created.

      * Build something from scratch.
      
      * Debug a broken app using Chrome DevTools.

      * And most importantly, ask questions!

* Inform students that during today's class, they will take the first steps to build interactive websites with JavaScript. 

* Stress that JavaScript builds on the structure provided by HTML and the styling provided by CSS&mdash;both of which they have already learned about&mdash;to make webpages dynamic.

* Open `28-Stu_Mini-Project/Solved/index.html` in your browser and demonstrate the following:

  * Follow the prompts to press the R, P, or S key to demonstrate the functionality of the game. Explain that this is the game Rock, Paper, Scissors, in which a player can play against a computer.

  * Remind students of what this game is, how to play it, and what conditions are met to win, lose, or tie. 

  * 🔑 Point out how none of this in the game is happening through the HTML content but rather through a JavaScript file attached to `index.html`.

  * 🔑 Explain that JavaScript code is handling the following:

    * Prompting the browser dialog boxes that appear with various messages and prompts.

    * Reading the user-provided input from the prompt and comparing it to a randomly picked computer choice.

    * Determining who wins the round based on conditions defined by the developer.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to add interactivity and logic to JavaScript applications.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We've learned HTML and CSS to create and present content; now we'll make it interactive and dynamic.

  * ☝️ How does this project relate to your career goals?

  * 🙋 JavaScript is a crucial tool for developers to know and use because it powers most modern web applications. This project will help teach us how to use JavaScript to apply logic, rules, and interactivity to applications&mdash;without worrying about HTML and CSS, which we are already somewhat familiar with.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Script & Console.log (5 min) 

* Open `01-Ins_Script-ConsoleLog\index.html` in your IDE and demonstrate the following: 

  * 🔑 In this HTML file, HTML and CSS are working together to provide style and structure to the page, as you can see in the following code:

    ```html
    <h1 style="text-align:center;">Open the Console to See the Magic ✨! </h1>
    ```
    
  * 🔑 There is also something new: `<script>` tags for JavaScript.

  * 🔑 We use inline `<script>` tags to write scripts directly in an HTML file, as shown in the following example:

    ```html
    <script>
    console.log("This is the log for the 🔥INLINE🔥 JavaScript");
    </script> 
    ```

  * 🔑 We add an `src` attribute to the opening `<script>` tag to link to an external JavaScript file, as follows:

    ```html
    <script src="script.js"></script>
    ```

  * 🔑 We write `<script>` tags above the closing `</body>` tag to ensure that the HTML and CSS load first, as follows:
  
    ```html
    <body>
      <h1 style="text-align:center;">Open the Console to See the Magic ✨! </h1>
      <script>
      console.log("This is the log for the 🔥INLINE🔥 JavaScript");
      </script>
      <script src="script.js"></script>
    </body>    
    ```

  * We use the `console.log()` method to log, or display, messages or data to the console. We place the message inside a string between the parentheses of the function call, as shown in the following example:

    ```js
    console.log("This is the log for the 🔥INLINE🔥 JavaScript");
    ```

* Open `01-Ins_Script-ConsoleLog\script.js` in your IDE and note the following: 

  * JavaScript looks and performs the same whether it is written inline or in an external file. For example, the following snippet will log the message "This is the log for the 🔥EXTERNAL🔥JavaScript":

      ```js
      console.log("This is the log for the 🔥EXTERNAL🔥JavaScript");
      ```

* Open `01-Ins_Script-ConsoleLog\index.html` in the browser and demonstrate how to navigate to the console in Chrome DevTools. 

* Point out that both the console log from the inline JavaScript and the external file appear as messages in the console.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do you link an HTML file to an external JavaScript file?
  
  *  🙋 Use `<script>` tags and set the `src` attribute to the path of the external JavaScript file.
  
  * ☝️ What does the `console.log()` function do?
 
  *  🙋 It logs a message to the console. 

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Script-ConsoleLog\README.md`.

### 3. Student Do: Script & Console.log (15 min) 

* Direct students to the activity instructions found in `02-Stu_Script-ConsoleLog\README.md`.

* Break your students into pairs that will work together on this activity.
 
  ```md
  # 📖 Link External JavaScript File to Existing HTML File

  Work with a partner to implement the following user story:

  * As a developer, I want to link an external JavaScript file to an existing `index.html` file to add JavaScript functionality to my static webpage. 

  ## Acceptance Criteria

  * It's done when I open the `index.html` file, navigate to the console, and see the message contained in the `script.js` file logged to the console. 

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on the script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

  [Google documentation on opening Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/open)

  ## 💡 Hints

  It is best practice to add a link to an external JavaScript file above what closing HTML tag? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Comments are a key part of a developer's toolbox. Why do you think it is so important to include comments in your code? How do you write single-line and multiline comments in Javascript?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 4. Instructor Review: Script & Console.log (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel linking an external JavaScript file to your HTML? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `<script>` tags 

  * ✔️ `console.log()` 

* Open`02-Stu_Script-ConsoleLog\Solved\index.html` in your IDE and explain the following:

  * 🔑 We use inline `<script>` tags to add JavaScript directly into the HTML file, as shown in the following example:

    ```html
    <script>
    console.log("This is inline JavaScript");
    </script>
    ```
  
  * 🔑 When we add an `src` attribute to a `<script>` tag, it links to an external JavaScript file, as shown in the following example:
  
    ```html
    <script src="script.js"></script>
    ```

  * 🔑 A console log is a JavaScript function. We write the message to the console between the parentheses`()`, as follows:

    ```js
    console.log("This is inline JavaScript");
    ```

* Open`02-Stu_Script-ConsoleLog\Solved\index.html` in your browser and explain the following:

  * Navigate to the console and show students that the message written between the `()`is the same as what appears in the console.
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are two ways that the `<script>` tag is used to add JavaScript to HTML files?

  * 🙋 You can use the `<script>` tag to create inline JavaScript by writing code between the opening and closing tags. When given an `src` attribute that equals the path to an external JavaScript file, the`<script>`tag links the HTML file to the external JavaScript page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on the script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Hello Variable (5 min) 

* Open `O3-Ins_Hello-Variable/script.js` in your IDE and demonstrate the following:

  * 🔑 We use the `var` keyword to declare a variable. After the `var`, the variable is given a unique name, or identifier, as shown in the following example:

    ```js
    var studentName;
    ```

  * 🔑 Declaring a variable only gives it a name. To assign a value, we use the assignment operator `=` preceding the value we want the variable to hold, as shown in the following example: 

    ```js
    var studentName = "Abdul";
    var studentAge = 32;
    ```

  * 🔑 We also use the `=` assignment operator to reassign a new value to a variable. To reassign a value, we use the variable's name followed by `=` and the new value we want the variable to hold. Because the variable has already been declared, there is no need to use `var` again, as shown in the following example:

    ```js
    studentName = "Tonya";
    studentAge = 52;
    ``` 

  * 🔑 Using the variable name is also useful in code when we want to access the value held in the variable and do something with it, like log it to the console. 

  * 🔑 In the previous activity, we put a value directly inside the `()` in a console log function to log a message. When the value was entered directly, that value appeared as the message in the console, as shown in the following code:

    ```js
    console.log("My name is ");
    ```

  * 🔑 When we want to access a value stored in a variable, we don't directly enter the value. Instead, we use the variable name&mdash;without quotes&mdash;to access the value stored in the variable. Because the value of `studentName` is currently `Tonya`, the following console log will log `Tonya`:

    ```js
    console.log(studentName);
    ```
 
  * 🔑 Sometimes we want to use a variable as part of a longer message logged to the console. To do that, we use the concatenation operator (`+`). In the following example, `"My name is "` is concatenated, or combined, with the value stored in the variable `studentName`, forming the longer message `"My name is Tonya"`:

    ```js
    console.log("My name is " + studentName);
    ```
  
* Open `O3-Ins_Hello-Variable/index.html` in your browser and navigate to the console to demonstrate the following:

  * When we combine the value `"My name is "` and the value stored in the `studentName` variable with a `+`, it logs a single message: `"My name is Tonya"`. Using the concatenation operator to combine variable values into more complex messages will be useful in creating the introductions in the next activity. 
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which keyword declares a variable? 

  * 🙋 The `var` keyword declares a variable. 

  * ☝️ Which operator assigns a value to a declared variable?  

  * 🙋 The `=` assignment operator assigns and reassigns a value to a variable that has already been declared. 

  * ☝️ How do you access the value assigned to a variable?  

  * 🙋 Use the variable's name. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Hello-Variable/README.md`.

### 6. Student Do: Hello Variable (15 min) 

* Direct students to the activity instructions found in `04-Stu_Hello-Variable/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Log Introduction Messages to Console Using Values Stored in Variables 

  Work with a partner to implement the following user story:

  * As a class member, I want to input data about my name, the number of pets I own, and a fun fact about myself and log that introduction to the console. Then I want to log a message to introduce my partner by reassigning the variables.

  ## Acceptance Criteria

  * It's done when I store a name in a variable called `personName` and this line is logged to the console: "My name is `VALUE_STORED_IN_VARIABLE_NAME`."

  * It's done when I store a number in a variable called `pets` and this line is logged to the console: "I have `VALUE_STORED_IN_VARIABLE_PETS` pet(s)."

  * It's done when I store a fun fact in a variable called `funFact` and this line is logged to the console: "Fun fact: `VALUE_STORED_IN_VARIABLE_FUNFACT`."

  * It's done when I reassign the values of `personName`, `pets`, and `funFact` with my new partner's information and the logs in the console reflect the new values.

  ## 💡 Hints

  How can we combine values using the concatenation operator (`+`) to log a single message to the console?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What happens when you concatenate two variables in a single console log using `+`? Is the result what you expected? Why or why not? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 7. Instructor Review: Hello Variable (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with JavaScript variables? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Variable declaration

  * ✔️ Value assignment

  * ✔️ Accessing stored values

  * ✔️ Value reassignment

* Open `04-Stu_Hello-Variable/Solved/script.js` in your IDE and explain the following: 

  * 🔑 We declare variables using `var` and assign a value using `=`. The variable `personName` is declared using `var` and assigned the value `"Sakura"`, as follows:

    ```js
    var personName = "Sakura";
    ```

  * 🔑 The variable's values are accessed using the variables' names. Because we have assigned the variables the values `"Sakura"`, `3` , and `"I like pineapple on my pizza."`, those values are used in the following console logs: 

    ```js
    console.log("My name is " + personName + ".");
    console.log("I have " + pets + " pet(s).");
    console.log("Fun fact: " + funFact);
    ```

  * 🔑 We reassign a variable's values using `=`. As shown in the following example, the `var` keyword is not used during reassignment because the variable has already been declared:

    ```js
    personName = "Mateo";
    pets = 5;
    funFact = "I was a yo-yo champ in third grade."
    ```

  * After the variables are reassigned, the variable names will access the new values `"Mateo"`, `5`, and `"I was a yo-yo champ in third grade."`. The console logs will use the new values, as shown in the following example:

    ```js
    console.log("My name is " + personName + ".");
    console.log("I have " + pets + " pet(s).");
    console.log("Fun fact: " + funFact);
    ```

* Open`04-Stu_Hello-Variable\Solved\index.html` in your browser and demonstrate the following:

    * Navigate to the console. Note that the logs created by using `+` appear as a single message in the console. 

    * In the first introduction, the console logs use the values stored in variables as originally assigned (`"Sakura"`, `3`, and `"I like pineapple on my pizza."`). 

    * Point out that in the second introduction, the console logs use the reassigned values (`"Mateo"`, `5`, and `"I was a yo-yo champ in third grade."`). 
    
    * Point out that the only difference in the two introductions is the values accessed by variables, because the code for the console logs has not changed. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do we reassign a new value to a variable?  

    * 🙋 We can reassign a variable's value by using the assignment operator `=`. We do not need to use `var`, because the variable is already declared.

    * ☝️ How do you think the ability to reassign values to a variable might be useful in your code? 

    * 🙋 Reassigning values to variables makes code more flexible and reusable. In the activity we just completed, we were able to log new messages to the console simply by reassigning the values stored in the variables. 

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to supplemental material, read the [MDN Web Docs on variables and storing the information you need](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Primitive Types (5 min) 

* In the previous activity, we learned to store values in variables. In this activity, we will dive deeper into the types of values that are stored in variables&mdash;namely, the primitive types (undefined, string, number, and Boolean).

* Open `05-Ins_Primitive-Types/script.js` in your IDE and point out the following: 

  * 🔑 A variable that has been declared using `var` but has not yet been assigned a value has the type of **undefined**. Undefined, as shown in the following snippet, simply means that no value has been assigned yet:

    ```js
    var myUndefined;
    ```

  * 🔑 **Strings** should already look familiar because we have already been using them in code. Values with the type of string are series of characters. They are commonly words but can also include other characters. Strings are always surrounded by quotes, like in the following example:

    ```js
    var myStringWelcome = "Hello World"; 
    var myStringPassword = "865Password!2020";
    ```

  * 🔑 **Numbers** should look familiar too! In JavaScript, a number can be either an integer (a whole number) or a decimal, as follows:

    ```js
    var myNumberInt = 100;
    var myNumberDecimal = 100.100;
    ```

  * 🔑 **Booleans** are unique because they hold only one of two values (`true` or `false`), as shown in the following example:

    ```js
    var isMyBooleanTrue = true;
    var isMyBooleanFalse = false;
    ```

  * 🔑 Sometimes we want to check what type of value is stored in a variable. To evaluate type, use the `typeof` operator preceding the variable name or value, as follows:

    ```js
    console.log(typeof myUndefined);

    console.log(typeof myNumber); 

    console.log(typeof true);

    console.log(typeof "Howdy");
    ```

  * 🔑 When a variable is reassigned, its type can change too. For example, `myVariable` originally has the value of `33`, making it a number. Then, when we use `=` to reassign it, as shown in the following example, it has the value of `false`, making it a Boolean:

    ```js
    var myVariable = 33;
    console.log(typeof myVariable);

    myVariable = false;
    console.log(typeof myVariable); 
    ```

* Open `05-Ins_Primitive-Types/index.html` in your browser, navigate to the console, and explain the following:

  * The `typeof` operator returns a string indicating the type: `undefined`, `number`, `boolean`, or `string`.

  * When we reassign a variable, the type can change as well. In this case, `myVariable` was first assigned as a number with a value of `33`. As a result, it logged `number`. Then, when `myVariable` is reassigned as a Boolean with a value of `false`, `boolean` is logged, indicating that the type has changed. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What primitive type has only two values? 

  * 🙋 A Boolean has only two values: `true` or `false`. 

  * ☝️ What is the only primitive type that must be surrounded by quotes?

  * 🙋 Strings.

  * ☝️ Which primitive type would we use if we wanted to store a decimal or an integer?

  * 🙋 Numbers.

  * ☝️ If we reassign a variable with a new value, does the type have to stay the same?

  * 🙋 No! JavaScript is loosely typed, meaning that when we declare a variable we don't have to specify a type that the variable will hold. It also means that when a variable is reassigned, the type can change too. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Primitive-Types/README.md`.

### 9. Student Do: Primitive Types (15 min) 

* Direct students to the activity instructions found in `06-Stu_Primitive-Types/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of typeof to Evaluate Primitive Types

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](06-Stu_Primitive-Types/Unsolved/script.js).

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

  [MDN Web Docs on JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * There are two more primitive value types in JavaScript. Can you explain what `BigInt` and `Symbol` are?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 10. Instructor Review: Primitive Types (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with primitive types? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Numbers

  * ✔️ Strings

  * ✔️ Booleans

  * ✔️ `typeof` operator

  * ✔️ Type reassignment

  * ✔️ Undefined

* Open `06-Stu_Primitive-Types/script.js` in your IDE and explain the following:

  * 🔑 The variable `one` has the whole number value of `64`, making it a number, as follows:

    ```js
    var one = 64;
    ```

  * 🔑 Using the `typeof` operator, as follows, `number` is logged:

    ```js
    console.log(typeof one);
    ```

  * 🔑 The variable `two` has the value of `"656302"`. Because the value is surrounded by quotes, it is a string&mdash;even if the characters inside the strings are numbers! See the following example:

    ```
    var two = "656302";
    ```

  * When we use the `typeof` operator, `string` is logged, as shown in the following example:

    ```js
    console.log(typeof two);
    ```

  * 🔑 `True` and `false` values are Booleans, so the variable `three` with a value of `false` is a Boolean in the following example:

    ```js
    var three = false;
    ```

  * When we use the `typeof` operator, as follows, `boolean` is logged:

    ```js
    console.log(typeof three);
    ```

  * The variable `four` has a decimal value of `64.55`. Because both integers and decimals are considered numbers in JavaScript, the variable in the following example is a number:

    ```js
    var four = 64.55;
    ```

  * When we use the `typeof` operator, as follows, `number` is logged:

    ```js
    console.log(typeof four);
    ```

  * In the following code, the variable `five` has a value of `"Howdy"`, which is a string:

    ```js
    var five = "Howdy!";
    ```

  * When we use the `typeof` operator, as follows, `string` is logged:

    ```js
    console.log(typeof five);
    ```

  * 🔑 The variable `six` is declared but has not yet been assigned a value. So the type returns `undefined` in the following example:

    ```js
    var six;
    ```

  * When we use the `typeof` operator in the following example, `string` is logged:

    ```js
    console.log(typeof six);
    ```

  * 🔑 Reassigning a value, as follows, can change both value and type:

    ```js
    four = "Hello!";
    five = false;
    six = 23;
    ```

  * The variable `four` is now a string. So when we use `typeof` in the following example, `string` is logged:

    ```js
    console.log(typeof four);
    ```

  * Variable `five` is now a Boolean. So when we use `typeof`, as follows, `boolean` is logged:

    ```js
    console.log(typeof five);
    ```

  * 🔑 Because variable `six` now has been assigned a value using the `=` assignment operator, it is no longer undefined. Instead, when we use `typeof`, as follows, `number` is logged:

    ```js
    console.log(typeof four);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are four primitive types of values? 

  * 🙋 Undefined, strings, Booleans, and numbers.

  * ☝️ How can we test the type of a value? 

  * 🙋 Use the `typeof` operator.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on JavaScript data types and data structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Logical and Comparison Operators (5 min) 

* Open `07-Ins_Logical-Comparison-Operators/script.js` in your IDE and demonstrate the following:

  * 🔑 We can use arithmetic operators to create simple math equations. We set the variable `a` to have a value of `100` and variable `b` to `10` . Both of these are numbers. When we run `a + b`, as follows, it will evaluate to `110`:

    ```js
    var a = 100;
    var b = 10;

    console.log(a + b);
    ```

  * 🔑 Arithmetic operators include addition (`+`), subtraction (`-`), division (`\`), and multiplication (`*`), as shown in the following example:

    ```js
    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a * b);
      ```

  * 🔑 The modulus `%` arithmetic operator returns the **remainder**, or what is left over after dividing one number by another. When we divide `100` by `10`, the remainder is `0` because `10` divides into `100` evenly. So `a % b` returns `0`, as shown in the following example:

    ```js
    var a = 100;
    var b = 10;

    console.log(a % b);
    ```

  * In addition to performing math equations, we can also use comparison operators to determine the equality or difference of values. 

  * 🔑 We can determine whether two values are equal using the equality operator (`==`). The values of `b` and `c` are both `10`. So `b == c`, in the following example, returns `true`:

    ```js
    var b = 10;
    var c = "10";

    console.log(b == c);
    ```

  * 🔑 We can also test for inequality using the inequality operator (`!=`). Because the values of `b` and `c` are both `10`, `b != c` returns `false` in the following example: 

    ```js
    console.log(b != c);
    ```

  * 🔑 When we use `==`, it only tests for equality of value. To test **strict equality**, we use `===`. The values of `b` and `c` are both `10`, but one is a string and the other is a number. Because they are not equal in both value and type, `b === c` returns `false` in the following example:

    ```js
    console.log(b === c);
    ```

  * 🔑 We can also test for inequality of value or type using `!==`. The variables `b` and `c` do not have the same type (one is a string, and the other is a number). So if either value or type is inequal, `b !== c` returns `true` in the following example:

    ```js
    console.log(b !== c);
    ```

  * 🔑 To evaluate greater than or less than, we use the greater than (`>`) or less than (`<`) operators. If `a` is greater than `b`, the first expression returns `true`. If `a` is less than `b`, the second expression returns `true` in the following example:

    ```js
    console.log(a > b);
    console.log(a < b);
    ```

  * 🔑 To evaluate greater than or equal to and less than or equal to, we use `>=` or `<=`. In this case, if `a` is greater than or equal to `b`, the first expression returns `true`. If `a` is less than or equal to `b`, the second expression returns `true` in the following example:

    ```js
    console.log(a <= b);
    console.log(a >= b);
    ```

  * It is also possible to determine logic between expressions using logical operators **and** (`&&`), **or** (`||`), and **not** (`!`).

  * 🔑 We use the logical operator `&&` to check whether both expressions evaluate to `true`. If both expressions evaluate to `true`, then `true` is returned. Otherwise, `false` is returned. See the following code snippet for an example:

    ```js
    console.log(expression1 && expression2);
    ``` 

  * 🔑 We use the logical operator `||` to check whether one expression OR the other evaluates to `true`. If one expression evaluates to `true`, then `true` is returned. Otherwise, `false` is returned. See the following code snippet for an example:

    ```js
    console.log(expression1 || expression2);
    ```

  * 🔑 The logical operator `!` adds `not` to an expression, negating it. If the expression evaluates to `true`, then we can add `!` to it, making it `not true`, or `false` (or vice-versa), as shown in the following example:

    ```js
    console.log(expression2);

    console.log(!expression2);
    ```
  
* Open `07-Ins_Logical-Comparison-Operators/index.html` in your browser and open the console to explain the following:

  * We can use arithmetic operators with numbers to create math equations. When we log these equations, they return a single number, as shown in the first five logs of the activity. 

  * Expressions using logical and comparison operators evaluate to `true` or `false`. As a result, we can see that the remainder of the logs are `true` or `false`.

  * As demonstrated in the final two console logs, when we use the `!` operator, it negates the expression, turning `true` to `false`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What can arithmetic operators do? 

  * 🙋 An arithmetic operator can perform simple math problems like adding, subtracting, multiplying, dividing, or even finding the remainder. 

  * ☝️ Which type of operators evaluate equality and difference? 

  * 🙋 Comparison operators.

  * ☝️ Which operators determine logic between expressions?  

  * 🙋 Logical operators.

  * ☝️ What does an expression using a logical or comparison operator evaluate to? 

  * 🙋 `true` or `false`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Logical-Comparison-Operators/README.md`.

### 12. Student Do: Logical and Comparison Operators (15 min) 

* Direct students to the activity instructions found in `08-Stu_Logical-Comparison-Operators/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Logs Using Logical and Conditional Operators Return False

  Work with a partner to resolve the following issue(s):

  * When I open the console, all the logs should read `true`, but right now they do not!

  ## Expected Behavior

  When an expression is logged to the console, it should return `true`.

  ## Actual Behavior

  When an expression is logged to the console, it returns `false`.

  ## 💡 Hints

  What is the difference between `=`, `==`, and `===`? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is `NaN`? What happens when you use `typeof` to evaluate `NaN`? Is the answer what you expected? Why or why not?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: Logical and Comparison Operators (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with logical and comparison operators? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Arithmetic operators

  * ✔️ Comparison operators

  * ✔️ Logical operators

* Open `08-Stu-Logical-Comparison-Operators/Solved/script.js` in your IDE and explain the following: 

  * Variables `d` and `e` use arithmetic operators to perform simple math. Because `c` has a value of `100` and `b` has a value of `50`, when we calcuate the remainder of `100` divided by `50` it is `0`. So the value of `d` is `0`. Likewise, the value of `e` is `100` divided by `2` or `50`. Both variables `d` and `e` have the type of `number` in the following example:

    ```js
    var b = 50;
    var c = 100;
    var d = c % b;
    var e = c / 2;
    ```

  * Both `b` and `e` have the value of `50`, making them both numbers. So `expression1` evaluates to `true` in the following example:

    ```js
    var expression1 = (b === e);
    ```

  * The variable `e` has a value of `50` and variable `d` has a value of `0`. Because `50` is not less than `0`, `expression2` evaluates to `false` in the following example:

    ```js
    var expression2 = (e < d);
    ```

  * Because `a` holds the value `50`, as a string, and `b` holds the value `50`, as a number, `===` returns `false`&mdash;because while the values are equal, the type is not. However, in the following example, when we use `==`, it returns `true` because `==` evaluates only value (not type!):

    ```js
    console.log(a == b);
    ```

  * The variables `b` and `e` both hold the value `50`, making them both numbers. Because they are equal in value and type, when we use `===` in the following example, it returns `true`:

    ```js
    console.log(b === e);
    ```

  * Because `c` is greater than `b`, when we use the comparison operator `>` in the following example, it returns true:

    ```js
    console.log(c > b);
    ```

  * Because `d` evaluates to `0`, it is less than `1`. So when we use the comparison operator `<`, as follows, it returns `true`:

    ```js
    console.log(d < 1);
    ```

  * Because the `||` operator requires only one expression or the other to evaluate to `true`, when we use `||` in the following example, it returns `true`:

    ```js
    console.log(expression1 || expression2);
    ```
  
  * Alternately, it is possible to negate `expression2` so that it returns `true`. Because both expressions now evaluate to `true` when we use the `!` operator, the following example returns `true`:

    ```js
    console.log(expression1 && !expression2);
    ```

  * When we remove `!` negation from the first expression, it returns `true`. Because one of the expressions now evaluates to `true`, the following example returns `true`: 

    ```js
    console.log( expression1 || expression2);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `==` and `===`? 

  * 🙋 The comparison `==` evaluates equality of value, while `===` evaluates whether value and type are equal. 

  * ☝️ What is the difference between `&&` and `||`? 

  * 🙋 The logical operator `&&` returns `true` if both expressions are `true`, while the logical operator `||` returns `true` if just one expression or the other returns `true`.

  * ☝️ How can we use a logical operator to negate an expression? 

  * 🙋 Using the `!` operator adds a `not`. So adding it causes an expression that returns `true` to return `not true`, or `false`, and vice-versa.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Conditional Statements (5 min) 

* Open `09-Ins_Conditional-Statements\script.js` in your IDE and demonstrate the following:

  * 🔑 Earlier we talked about how JavaScript can add decision-making to your code. That decision-making can be achieved using conditional statements. 

  * Let's start by declaring variables with `var` and assigning them values with the assignment operator `=`, as shown in the following example:

      ```js
      var hungerLevel = 50;
      var isLunchTime = true;
      var lunchBill = 11;
      ```

  * 🔑 For the first `if` statement, we will also need an expression to evaluate. Using the value stored in the variable `hungerLevel` and the conditional operator `>=`, we can create the expression `hungerLevel >= 50`. This expression, shown in the following snippet, will return `true` because the value of `hungerLevel` is currently `50`:

    ```js
    hungerLevel >= 50
    ```

  * 🔑 Now we are ready to write the `if` statement. We start by writing `if` in lowercase letters. (This part is important; using `IF` can result in an error!) Then in parentheses `()`, we put the expression that we want evaluated. We are evaluating `hungerLevel >= 50` in the following example:

    ```js
    if (hungerLevel >= 50)
    ```

  * 🔑 Next, we want something to happen if the condition is met, or `hungerLevel >=50` evaluates to `true`. To do this, we add curly brackets `{}`, and inside the curly brackets, we add the desired action. In the following example, if the expression `hungerLevel >=50` evaluates to `true`, then we want the message `"Hungry`" logged to the console:

    ```js
    if (hungerLevel >= 50) {
    console.log("Hungry!");
    }
    ```

  * 🔑 The action will only be executed if the expression evaluates to `true`. Because `hungerLevel >= 50` evaluates to `true`, the message `"Hungry!"` will log to the console. However, if we change the expression to one that evaluates to `false`&mdash;like `hungerLevel < 50`, as follows&mdash;then nothing will log:

    ```js
    if (hungerLevel < 50) {
    console.log("Hungry!");
    }
    ```

  * 🔑 If we want one action to be performed if an expression evaluates to `true` and another action to be performed if the expression evaluates to `false`, then we can use an `else` statement. If `isLunchTime === true` evaluates to `true`, then `"Lunchtime"` will log. Else, `"Not Lunchtime"` will log, as follows:

    ```js
    if (isLunchTime === true) {
    console.log("Lunchtime");
    } else {
    console.log("Not Lunchtime");
    }
    ```

  * Or, instead of writing `isLunchTime === true`, we can simply write `isLunchTime`. Because `isLunchTime` has the value of `true`, in the following example, `"Lunchtime!!"` will log to the console:

      ```js
      if (isLunchTime) {
      console.log("Lunchtime!!");
      } else {
      console.log("Not Lunchtime!!");
      }
      ```

  * 🔑 The `!` logical operator can also negate the expression. Because `!Lunchtime` evaluates to `false` when we add`!`, in the following example `"It's Lunchtime Already !!` is logged:

    ```js
    if (!isLunchTime) {
    console.log("Not Lunchtime Already!!");
    } else {
    console.log("It's Lunchtime Already !!");
    }
    ```

  * 🔑 We can also use `else if` to test more than one condition. If the first condition evaluates to `true`, then the first action is executed. Otherwise, the second condition is tested, and so on. This process continues until a condition evaluates to `true` and the associated action is executed, as follows:

    ```js 
    if (lunchBill < 10) {
    console.log("Cost Rating: $");
    } else if (lunchBill >= 10 && lunchBill < 15) {
    console.log("Cost Rating: $$");
    ```

  * If none of the conditions evaluate to `true`, then the action after `else` is executed, as follows:

    ```js 
    } else {
    console.log("Cost Rating: $$$");
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens if an `if` statement evaluates to `true`?

  * 🙋 The action contained in the curly brackets is performed.

  * ☝️ What happens if an `if` statement evaluates to `false`?

  * 🙋 Nothing. The action in the curly brackets is not performed.

  * ☝️ What is the difference between an `if` statement and an `else` statement? 

  * 🙋 An `if` statement executes an action only if the expression evaluates to `true`. An `else` statement executes an action only if the condition evaluates to `false`. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Conditional-Statements/README.md`. 

### 16. Student Do: Conditional Statements (15 min) 

* Direct students to the activity instructions found in `10-Stu_Conditional-Statements/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create an Algorithm Using Conditional Statements

  Work with a partner to implement the following user story:

  * As a developer, I want to write an algorithm that will take in two expressions and evaluate whether both expressions evaluate to `true`, only one expression evaluates to `true`, or both expressions evaluate to `false`.

  ## Acceptance Criteria

  * It's done when the message "True ✅ True ✅" is logged when both `expression1` and `expression2` are true.

  * It's done when the message "True ✅ False ❌" is logged when `expression1` is true. 

  * It's done when the message "False ❌ True ✅" is logged when `expression2` is true. 

  * It's done when the message "False ❌ False ❌" is logged when both `expression1` and `expression2` are false. 

  ## 💡 Hints

  Before you start writing your algorithm, do you have a plan documented in plain language that describes how you will use JavaScript to get it done?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a switch case? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 17. Instructor Review: Conditional Statements (15 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with conditional statements? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `if` statement

  * ✔️ `else if` statement

  * ✔️ `else` statement

* Open `10-Stu_Conditional-Statements/Solved/script.js` in your IDE and explain the following: 

  * We can evaluate whether both expressions are `true` using the logical `&&` operator, as follows:

    ```js
    expression1 && expression2
    ```
  
  * 🔑 To create the conditional statement, we start with `if` and place `expression1 && expression2` in parentheses `()`. The action we want to be performed if the condition evaluates to `true` is written inside curly brackets `{}`. In this case we want to log `True ✅ True ✅` to the console, as follows:

    ```js
    if(expression1 && expression2) {
    console.log("True ✅ True ✅");
    ```

  * 🔑 If `expression1 && expression2` evaluates to `true`, then `True ✅ True ✅` is logged and no other conditions are evaluated. If not, then the second condition is tested.

  * 🔑 The second condition tests whether `expression1` is true. So we place `expression1` in the parentheses, as follows: 

    ```js
    } else if (expression1) {
    ```

  * If `expression1` evaluates to `true`, then `True ✅ False ❌` is logged and no other conditions are evaluated. If `expression1` does not evaluate to `true`, the next condition is tested, as shown in the following example:

    ```js
    } else if (expression1) {
      console.log("True ✅ False ❌");
    ```

  * The process repeats again for the remaining `else if` condition. If `expression2` evaluates to `true`, then `False ❌ True ✅` is logged, as follows:

    ```js
    } else if (expression2) {
      console.log("False ❌ True ✅");
    ```

  * 🔑 At this point, all the conditions have been tested. If none of the conditions evaluate to `true` after all have been tested, then the action following `else` will execute. In this case, `False ❌ False ❌` will log to the console, as follows: 

    ```js
    } else {
      console.log("False ❌ False ❌");
    ```

  * 🔑 The action performed depends on the values inputted for the variables `x`, `expression1`, and `expression2`. Because `x` has a value of `50`, both `expression1` and`expression2` currently evaluate to `false`. So because none of the conditions are `true`, in the following example, the expected action is that `False ❌ False ❌` is logged: 

    ```js
    var x = 50;
    var expression1 = (x < 25);
    var expression2 = (x > 50);
    ```

* Open `10-Stu_Conditional-Statements/Solved/index.html` in your browser and navigate to the console to explain the following: 

  * Because both `expression1` and `expression2` evaluate to `false`, `False ❌ False ❌` logs to the console. However, if the inputs change, the action performed might change.

* Encourage students to experiment with changing the values of `x`, `expression1`, and `expression2` on their own to learn more about how changing the input will change the action performed. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do you think conditional statements might allow decision-making in code? 

  * 🙋 Conditional statements allow you to carry out different actions based on conditions. Only if the condition evaluates to `true` is the action performed.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Display the number 4,294,967,295. Do not provide further context at this point&mdash;the goal is to pique students' curiosity. 

* Ask the class the following question (☝️) and call on students for the answers (🙋):

  * ☝️ What do you think the number 4,294,967,295 represents in JavaScript? 

  * 🙋 4,294,967,295 is the maximum number of values that can be stored in a single variable in JavaScript. 

* Explain that so far, we have been using variables to store a single value&mdash;like `"Hello, World"`, `5`, or `true`&mdash;and writing blocks of code that execute once. But that is not very efficient, especially when working with big data. 

* Stress that during this module, we will think bigger! JavaScript can handle billions of values. So, building on the JavaScript skills we've acquired so far, we will learn how to store multiple values in a single array, perform an action on all the values stored in a variable with just a few lines of code, and even write code blocks that we can reuse again and again. 

### 19. Instructor Demo: Arrays (5 min) 

* Open `11-Ins_Array/script.js` in your IDE and demonstrate the following:

  * 🔑 Previously, we learned how to use `var` and the assignment operator `=` to store a single value in a variable, as follows:

    ```js
    var name = "Andre";
    var pets = 3; 
    var isStudent = true;
    ```

  * 🔑 We also use `var` and `=` to store multiple values in a variable. To do this, we put the values in brackets `[]`, separated by commas, like in the following example: 

    ```js
    var names = ["Andre", "Karl", "Rashida", "Olivia"];
    ```

  * 🔑 To access the entire array, we use the array's name, as shown in the following example:

    ```js
    console.log(names);
    ```

  * 🔑 To access a single element in an array, we use the array's name plus the item's **index** (or place in the array) in brackets `[]`. Arrays are **zero-indexed**. So the first element in an array has an index of `0`, not `1`. Thus, the element with the index of `1` in the following example is `"Karl"`:

    ```js
    console.log(names[1]);
    ```

  * 🔑 And using `0` in the following example will log `Andre`:

    ```js
    console.log(names[0]); 
    ```

  * 🔑 We can also use an element's index to replace a value in the array.

  * 🔑 In the `names` array, in the following example, the string `"Olivia"` has an index of `3`:

    ```js
    console.log(names[3]);
    ```

  * 🔑 We reassign `names[3]` to a new string `"Carter"` using the assignment operator `=`. In the following example, after reassignment, the new value `"Carter"` is logged: 

    ```js
    names[3] = "Carter"; 

    console.log(names[3])
    ```

  * 🔑 Arrays also have properties. We find the total number of elements in the array using the `length` property. Because the `names` array has four elements, the following statement will return `4`:

    ```js
    console.log(names.length)
    ```

* Open `11-Ins_Array/index.html` in your browser and navigate to the console to demonstrate the following:

  * When we log an array to the console using its name, the entire array is returned.

  * When we click on the arrow to the left of the data, the indexes of each element in the array are shown. This is a handy way to inspect an array and find the index of an element that we want to work with.

  * When we log an array's length, a number is returned. That number equals the total number of elements in the array.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we store multiple values in a variable?

  * 🙋 We would use an array. 

  * ☝️ How can we access an element in the array? 

  * 🙋 We use the array name and the index. 

* Answer any questions before proceeding to the next activity.

### 20. Student Do: Arrays (15 min) 

* Direct students to the activity instructions found in `12-Stu_Arrays/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗 Log Welcome Messages to Console Using an Array

  Work with a partner to implement the following user story:

  * As an instructor, I want to create a list of student names and be able to add and rename names.

  ## Acceptance Criteria 

  * It's done when the total number of elements in the array is logged to the console.  

  * It's done when the message "Welcome to the class STUDENT_NAME" is logged using each element in the array. 

  * It's done when the first element in the array is replaced with the name of a new student.

  * It's done when, after an `if` statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.

  ## 💡 Hints

  What is the first index in an array: `0` or `1`? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could you use the array's `length` property to access the last element in an array of any length?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 21. Instructor Review: Arrays (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with arrays? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `var students = ["name1"]`

  * ✔️ `students.length`

  * ✔️ `students[0]`

  * ✔️ `students[0] = "newName"`

* Open `12-Stu_Arrays/Solved/script.js` in your IDE and explain the following: 

  * 🔑 When we create an array, the elements are placed in brackets `[]`. Each element is separated by a comma, as follows:

    ```js
    var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];
    ```

  * 🔑 We use the array name `students`, followed by `length`, to return a count of the total number of elements in the array. See the following example:

    ```js
    console.log(students.length);
    ```

  * 🔑 We access an element in the array using the element's index. The first element's index is `0`&mdash;as in the following example&mdash;the second element's index is `1`, and so on. 

    ```js
    console.log("Welcome to the class " + students[0]);
    ```

  * 🔑 We replace an element in the array by using the element's index and the assignment operator `=` followed by the new value. The following code replaces the first element in the `student` array with the string `"Bob"`:

    ```js
    students[0] = "Bob";
    ```

  * We check that the first value has been replaced using an `if` statement that evaluates whether `students[0]` equals `"Bob"`. If the condition evaluates to `true`, then in the following example, `"Bob is in class!"` logs to the console: 

    ```js
    if (students[0] === "Bob") {
      console.log(students[0] + " is in class!");
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does it mean that arrays are zero-indexed? 

  * 🙋 The first element of the array has an index of `0`, not `1`.

  * ☝️ What property can we use to determine the total number of elements in an array? 

  * 🙋 The array's `length` property.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: Iteration (5 min) 

* Open `13-Ins_Iteration/script.js` in your IDE and demonstrate the following:

  * 🔑 We use `for` loops to execute a block of code more than once. The complete `for` loop expression dictates how many times the code will be executed, as shown in the following example:

    ```js
    for (var i = 0; i < 5; i++) {
    
    }
    * The first expression declares a variable. We will use this variable as the counter for the loop. We give `i` the value of `0`.

    ```js
    var i = 0;
    ```

  * The second expression is a condition that determines whether the loop will execute. If the following expression evaluates to `true`, we execute the code, and if it's false, the loop is complete:

    ```js
    i < 5;
    ```

  * After the loop executes the code block, we increment the counter, as follows:

    ```js
    i++
    ```

  * 🔑 Next, in curly brackets, we place the block of code that we want to execute each time the loop runs, as follows:

    ```js
    {
      console.log("This is the current value of i: " + i + ".");
    }
    ```

  * 🔑 When iterating over an array, we use the array's `length` property to determine when the loop should stop. In the following example, as long as `i` is less than the length of `zooAnimals`, the loop will execute the code:
  
    ```js
    for (var i = 0; i < zooAnimals.length; i++) 
    ```

  * 🔑 We can also use `i` to access the elements of the array. We can do this using something called **bracket notation**. By placing the counter inside square brackets `[]`, as follows, we can access the elements:

    ```js
    {
      console.log("I am going to zoo to see " + zooAnimals[i] + ".");
    }
    ```

* Open `13-Ins_Iteration/index.html` in your browser and navigate to the console to demonstrate the following:

  * In the first loop, the counter variable `i` is initially assigned the value `0`. So the first log shows that the value of `i` is `0`. Then, after the code is executed, `i` is incremented. Thus, when it runs again, `i` is `1`, and so on until the condition `i < 5` is no longer `true`. 

  * In the next loop, instead of just console logging `i`, the variable `i` is used to determine the index of the element. So the first time it is run, `zooAnimals[i]` is read as `zooAnimals[0]`, and `"Bears"` is logged. When the loop runs again, `i` is equal to `1`, so `"Giraffes"` is logged. In this way, we can use a `for` loop to quickly iterate over an entire array&mdash;even a huge one&mdash;with just a few lines of code. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we want to use a loop in the code? 

  * 🙋 We can execute a block of code over and over again. 

  * ☝️ How do we stop a loop from executing? 

  * 🙋 A loop will stop executing when the condition is `false`. 

* Answer any questions before proceeding to the next activity.

### 23. Student Do: Iteration (15 min) 

* Direct students to the activity instructions found in `14-Stu_Iteration/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Iterate Over an Array to Log Messages to Console

  Work with a partner to implement the following user story:

  * As a member of the class, I want to store a list of my classmates and use that list to create a greeting for each student on the list. 

  ## Acceptance Criteria

  * It's done when the names of five classmates are stored in a single variable named `students`.

  * It's done when the total number of elements in the `students` array is logged to the console. 

  * It's done when, using a `for` loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the `students` array. 

  ## 💡 Hints

  How can you access each element using the element's index and the array name? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What’s a `while` loop?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 24. Instructor Review: Iteration (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel creating a `for` loop and iterating over an array? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `for` statement 

  * ✔️ Array iteration

* Open `14-Stu_Iteration/Solved/script.js` in your IDE and explain the following: 

  * We start by creating a `students` array that holds five names, as follows:

    ```js
    var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];
    ```

  * We then use the `length` property to find the total number of elements in the `students` array. This `length` property will come in handy when we set the condition for the loop. See the following code for an example: 

    ```js
    var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];
    ```

  * 🔑 We write the `for` loop. We set the counter to `0` and dictate that the loop will run till the counter equals the length of the array, as shown in the following example:
  
    ```js
    for(var i=0; i < students.length; i++)
    ```
  
  * We set the counter `i` to `0`, as follows:

    ```js
    var i = 0;
    ```

  * 🔑 We set the conditions under which the loop will run. Because we want to loop over the entire array, we set the condition such that the loop will stop when the counter equals the length of the array, as follows:

    ```js
    i < students.length;
    ```

  * Finally, after the block of code is executed, we increment the counter by `1`, as shown in the following example:

      ```js
      i++
      ```

  * 🔑 Finally, we console log each statement in the array using bracket notation, as follows:

    ```js
    console.log("Great to see you, " + students[i]);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would iterating over an array be useful?

  * 🙋 By iterating over an array, you can perform an action on each element of the array quickly and with just a few lines of code. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋We can refer to supplemental material, read the [MDN Web Docs on for statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.