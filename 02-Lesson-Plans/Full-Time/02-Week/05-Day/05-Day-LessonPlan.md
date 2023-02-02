# 02.5 Full-Time Lesson Plan: Web APIs

## Overview

Today's lesson will delve further into storing data locally within the user's browser, using client-side storage. Students will also work together for the mini-project to build a timer that reinforces their new DOM manipulation and Web API skills. 

## Instructor Notes

* In this lesson, students will complete activities `21-Ins_Local-Storage` through `28-Stu_Mini-Project`.

* In the activities and the mini-project, students will be required to apply the DOM manipulation skills that they acquired this week. Encourage the students to look back on previous activities as needed, to refresh their memory and for help with syntax. 

* Be ready to view and edit `localStorage` key-value pairs in Chrome DevTools. If you need a quick refresher, refer to the [Google documentation on viewing and editing local storage with Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage).

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end. 

## Learning Objectives

By the end of class, students will be able to:

* Store data in the user's browser using `localStorage`.

* Convert an object to and from a JSON string by implementing JSON methods.

* Persist data using client-side storage. 

## Time Tracker

| Start  | #   | Activity Name                            | Duration |
|---     |---  |---                                       |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity           | 0:10     |
| 10:10AM| 2   | Instructor Demo: Local Storage           | 0:05     |
| 10:15AM| 3   | Student Do: Local Storage                | 0:15     |
| 10:30AM| 4   | Instructor Review: Local Storage         | 0:10     |
| 10:40AM| 5   | Instructor Demo: Local Storage Objects   | 0:05     |
| 10:45AM| 6   | Student Do: Local Storage Objects        | 0:15     |
| 11:00AM| 7   | Instructor Review: Local Storage Objects | 0:10     |
| 11:10AM| 8   | Instructor Demo: Local Storage Todo      | 0:05     |
| 11:15AM| 9   | Student Do: Local Storage Todo           | 0:15     |
| 11:30AM| 10  | Instructor Review: Local Storage Todo    | 0:10     |
| 11:40AM| 11  | Everyone Do: Git Pull Request            | 0:20     |
| 12:00PM| 12  | BREAK                                    | 0:30     |
| 12:30PM| 13  | Instructor Demo: Mini-Project            | 0:05     |
| 12:35PM| 14  | Student Do: Mini-Project                 | 0:60     |
| 1:35PM | 15  | Instructor Review: Mini-Project          | 0:10     |
| 1:45PM | 16  | Introduce Challenge                      | 0:05     |
| 1:50PM | 17  | FLEX                                     | 0:40     |
| 2:30PM | 18  | END                                      | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Remind the students that DOM manipulation and Web API skills are powerful tools for developers to build fully interactive web apps, but they can also be tricky for anyone new to programming.

* Reassure students that during today's class there will be plenty of time to develop and further hone their DOM manipulation skills.

* Inform the students that today they will also learn a useful DOM tool that will allow them to implement client-side storage for their webpages.

* Open `26-Stu_Local-Storage-Todos/Solved/index.html` in your browser and demonstrate the following:

  * When we enter a to-do into the text box, a new HTML element is created.

  * When we click on the button, the to-do disappears. 

  * When we close the browser tab and reopen it, the added to-do is still there.

  * Note that previously, when we closed a browser window, the data did not persist. That is because the data is not automatically saved between page loads.

  * To store data so that it persists, we use client-side storage. 
  
  * **Client-side storage** is a Web API that allows us to store information directly on the client (the user's browser).

  * Client-side storage enables us to recall bits of information, like a user's login information and preferences, to help make pages more personalized and interactive. 

  * The syntax to store data right in the user's browser is also simple to use. 

### 2. Instructor Demo: Local Storage (5 min) 

* Open `21-Ins_Local-Storage/index.html` in your browser and demonstrate the following:

  * We click the buttons to increase and decrease the number of hours coded.

  * 🔑 When we refresh the page, the number of hours does not reset. Instead, the data persists. This is client-side storage at work. 

* Open Chrome DevTools and open the Application tab to view local storage, then explain the following:

  * 🔑 Using `localStorage`, the count is stored as a key-value pair in the browser. When we increase or decrease the count by clicking the button, the stored value changes too.

* Open `21-Ins_Local-Storage/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 When we click on a button, we add the number of clicks to storage using the window's `localStorage` property and add a key-value pair to storage using the method `setItem()`, as follows: 

    ```js
    localStorage.setItem("count", count);
    ```

  * 🔑 To retrieve the count, we use the `getItem()` method. This will get the value saved in storage and save it to the variable `count`. See the following code for an example:

    ```js
    var  count = localStorage.getItem("count");
    ```

  * 🔑 We render the retrieved count in HTML using the `textContent` property, as follows: 

    ```js
    counter.textContent = count;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we save key-value pairs in the browser and retrieve them to use in code?

  * 🙋 We use the `localStorage` property. The method `setItem()` sets a key-value pair in storage, and `getItem()` retrieves it.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Local-Storage/README.md`.

### 3. Student Do: Local Storage (15 min) 

* Direct students to the activity instructions found in `22-Stu_Local-Storage/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Client-Side Storage for Sign-Up Form Using localStorage

  Work with a partner to implement the following user story:

  * As a developer, I want to save the user's email and password to client-side storage and render the last submission to the page.

  ## Acceptance Criteria

  * It's done when Last Registered User displays the last email and password saved using `localStorage`, if it exists.

  * It's done when, once the `signUpButton` is clicked, the email and password entered into the text boxes is saved using `localStorage`.

  * It's done when the information under Last Registered User is updated to reflect the data stored using `localStorage`.
  
  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![On the left side of the webpage, a Sign Up form allows users to register, while a card on the right shows the last registered user.](./images/01-screenshot.png) 

  ---

  ## 💡 Hints

  What methods do we use with `localStorage` to get and set items?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Does data stored using `localStorage` have an expiration date? What happens when the browser is closed?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Local Storage (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using `localStorage`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help! 

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `localStorage.getItem()`

  * ✔️ `localStorage.setItem()`

* Open `22-Stu_Local-Storage/Solved/assets/js/script.js` in your IDE and explain the following:

  * We use `querySelector()` to select the DOM elements and assign them to variables, as shown in the following example:

    ```js
    var  emailInput = document.querySelector("#email");
    var  passwordInput = document.querySelector("#password");
    var  signUpButton = document.querySelector("#sign-up");
    var  msgDiv = document.querySelector("#msg");
    var  userEmailSpan = document.querySelector("#user-email");
    var  userPasswordSpan = document.querySelector("#user-password");
    ```

  * 🔑 In the `renderLastRegistered()` function, we query `localStorage` using the `getItem()` method for both `email` and `password` strings, as shown in the following example:

    ```js
    function  renderLastRegistered() {
    var  email = localStorage.getItem('email');
    var  password = localStorage.getItem('password');
    ```

  * If either `email` or `password` is null, we exit the function with `return`. Otherwise, we render the values using the `textContent` property in the `userEmailSpan` and `userPasswordSpan` elements, respectively&mdash;as shown in the following example:

    ```js
    if (email === null || password === null) {
    return;
    }

    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
    ```

  * We use `addEventListener()` on the `signUpButton` and listen for a click event. We prevent the browser's default action using `event.preventDefault()`, as shown in the following example:

    ```js
    signUpButton.addEventListener('click', function(event) {
    event.preventDefault();
    ```

  * We use `querySelector()` and the `value` property to assign the values in the form fields to `email` and `password` variables, as shown in the following example:

    ```js
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    ```

  * 🔑 We store the values in `localStorage` using the `setItem()` method and call the `renderLastRegistered()` method. If the `email` or `password` strings are empty, we display an error message. Otherwise, we display a message indicating that the registration is successful. See the following code for an example:

    ```js
    if (email === "") {
      displayMessage("error", "Email cannot be blank");
      } else  if (password === "") {
        displayMessage("error", "Password cannot be blank");
      } else {
        displayMessage("success", "Registered successfully");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        renderLastRegistered();
      };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where is the data in `localStorage` stored?

  * 🙋 Values in `localStorage` are stored locally in the user's browser as key-value pairs.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Local Storage Objects (5 min) 

* Open `23-Ins_Local-Storage-Objects/index.html` in your browser and demonstrate the following:

  * 🔑 We often want to store related data together. 

  * When we select a student's name and grade and make a comment, the information is saved.

  * 🔑 To preserve the relationship between related data, we can use an object. 

* Open Chrome DevTools and select the Application panel to view local storage.

  * 🔑 When we open Chrome DevTools, we can see that the student's name, grade, and comment are stored together in a single key-value pair. 

* Open `23-Ins_Local-Storage-Objects/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 When the button is clicked, we store the current values together as an object, like in the following example:

    ```js
    var studentGrade = {
      student: student.value,
      grade: grade.value,
      comment: comment.value.trim()
    };
    ```

  * 🔑 We cannot store an object directly using `localStorage`. So we use the `JSON.stringify()` method to convert the object into a string, as shown in the following example:

    ```js
    JSON.stringify(studentGrade)
    ```

  * 🔑 The string can then be stored as a key-value pair in local storage using the `setItem()` method, as follows:

      ```js
      localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
      ```

  * Finally, we call a helper function, `renderMessage()`, as follows:

    ```js
    function renderMessage() {...}
    ```

  * 🔑 Inside the helper function, we retrieve the string and convert it back into an object with `JSON.parse()`. If `lastGrade` is not null, we display a message for the user. See the following code for an example:

    ```js
    function renderMessage() {
      var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
      if (lastGrade !== null) {
        document.querySelector(".message").textContent = lastGrade.student + 
        " received a/an " + lastGrade.grade
      }
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we store a group of related data using `localStorage`?

  * 🙋 We can use an object and then convert it to a string using `JSON.stringify()`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Local-Storage-Objects/README.md`.

### 6. Student Do: Local Storage Objects (15 min) 

* Direct students to the activity instructions found in `24-Stu_Local-Storage-Objects/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Save Object Using localStorage

  Work with a partner to implement the following user story:

  * As a developer, I want to save the information from a form as an object using `localStorage`.

  ## Acceptance Criteria

  * It's done when I click the Save button and the form's current values are stored in a object.

  * It's done when the object is saved as a string using `localStorage`.

  ## 📝 Notes
  
  Refer to the documentation: 

  [MDN Web Docs on Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

  [MDN Web Docs on JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

  ## 💡 Hints

  What JSON method can you use to return a string? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is JSON? How is it useful for sending and storing data?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Local Storage Objects (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with storing objects using `localStorage`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `JSON.stringify()`

  * ✔️ `setItem()`

* Open `24-Stu_Local-Storage-Objects/Solved/assets/js/script.js` in your IDE and explain the following: 

  * We add a click event to the `signUpButton` element and use `event.preventDefault()` to cancel the browser's default form action, as shown in the following example:

    ```js
    signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
    ```

  * When the button is clicked, we store the current values of the form in an object. We use the string method `trim()` to eliminate any whitespace and leave only the text, as shown in the following example:

    ```js
    var user = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };
    ```

  * 🔑 We use the JSON method `JSON.stringify()` to turn the object into a string, as follows:

    ```js
    JSON.stringify(user)
    ```

  * 🔑 We use `setItem()` to store the stringified object with `localStorage`, like in the following example:

    ```js
    localStorage.setItem("user", JSON.stringify(user));
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When we want to store an object using `localStorage`, what extra step do we have to take? 

  * 🙋 We stringify the object using `JSON.stringify()`, because the value we store in `localStorage` needs to be a string.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Local Storage To-Dos (5 min) 

* Open `25-Ins_Local-Storage-Todos/index.html` in your browser and demonstrate the following:

  * 🔑 When we reopen a browser, the data that was last stored using `localStorage` appears on the page.

  * 🔑 This data appears because data has been saved to `localStorage`, the existing data has been retrieved, and the data has been rendered to the page when the page loads. 

* Open `25-Ins_Local-Storage-Todos/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We use a function to hold the code to retrieve and render the data&mdash;making the code easily reuseable&mdash;as shown in the following example:

    ```js
    function renderLastGrade() {
    }
    ```

  * 🔑 Inside the `renderLastGrade()` function, we use the method `getItem()` to retrieve the data from storage, as a string. See the following code for an example:

    ```js
    localStorage.getItem("studentGrade")
    ```

  * 🔑 Because the return data is stringified, we use the JSON method `JSON.parse()` to convert it back into an object. We then store the object in a variable so that we can use it in the code, as shown in the following example:

    ```js
    var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
    ```

  * 🔑 If data is returned from storage, we use `innerHTML` to render the data to the page. 

  * 🔑 Else, if `null` is returned, we use `return` to exit out of the function, like in the following example:

    ```js
    if (lastGrade !== null) {
      document.getElementById("saved-name").innerHTML = lastGrade.student;
      document.getElementById("saved-grade").innerHTML = lastGrade.grade;
      document.getElementById("saved-comment").innerHTML = lastGrade.comment;
    } else {
      return
    }
    ```

  * 🔑 We want the data retrieved and rendered when we load the page. So we put it in a function called `init()`, which holds the code that we want executed when the page first loads and then calls the function. If data has previously been saved using `localStorage`, the data will appear on the page. See the following code for an example:

    ```js
    function init() {
      renderLastGrade();
    }

    init();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we get stored data to appear on the page when we open a browser window? 

  * 🙋 We retrieve the data using `getItem()` and then render it to the page using DOM manipulation. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Local-Storage-Todos/README.md`.

### 9. Student Do: Local Storage To-Dos (15 min) 

* Direct students to the activity instructions found in `26-Stu_Local-Storage-Todos/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Local Storage

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/assets/js/script.js).

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is `sessionStorage`? How is it different from `localStorage`? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Local Storage To-Dos (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel implementing `localStorage` in an app? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `JSON.stringify()`

  * ✔️ `JSON.parse()`

  * ✔️ `init()`

* Open `26-Stu_Local-Storage-Todos/Solved/assets/js/script.js` in your IDE and explain the following: 

  * We add an event listener to the to-do form so that when a user enters a to-do item, the data is stored on submit. The to-dos are stored and rendered using two helper functions, `storeTodos()` and `renderTodos()`, as shown in the following example:

      ```js
      todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var todoText = todoInput.value.trim();
          if (todoText === "") {
            return;
          }
        todos.push(todoText);
        todoInput.value = "";
        storeTodos();
        renderTodos();
      });
      ```

  * 🔑 The `storeTodos` function stores an array using `localStorage`. First we stringify it using `JSON.stringify()`, then we set it to storage using `setItem()`. 
  
  * We need to save to-do items to `localStorage` in a few places, so storing this action in the function `storeTodos` cleans up the code! See the following code for an example:

    ```js
    function storeTodos() {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    ```

  * 🔑 We've stored the to-do items, but we also need to be able to retrieve the data from storage. We will do this inside the `init()` function.

  * 🔑 `init()` is being invoked in `script.js`, so it will run every time the page loads.
  
  * 🔑 Inside of `init()`, we use `getItem()` and convert the data from a string to an array using `JSON.parse()`. To use the array in the code, we store it in a variable, as follows:

    ```js
    function init() {
      var storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (storedTodos !== null) {
        todos = storedTodos;
      }
      renderTodos();
    }
    ```

  * We have stored to-do items in local storage and parsed them using JSON methods. Now we need to render each item. We will do this with the `renderTodos()` function.

  * We use `createElement()` and `appendChild()` to render the to-do list. Because we will reuse this code, we store it in a function, just like we did with `storeTodos()`&mdash;as shown in the following example:

    ```js
    function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

      for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete ✔️";

        li.appendChild(button);
        todoList.appendChild(li);
      }
    }
    ```

  * Finally, we need to add an event listener to the `completed` button so that a user can remove to-do items. We do this by using the `"data-index"` of the `button`'s parent element to remove the correct to-do item from the `todos` array.
  
  * We call the `storeTodos()` and `renderTodos()` functions when the `complete` button is clicked, to store and render the updated list as follows:

    ```js
    todoList.addEventListener("click", function(event) {
      var element = event.target;
      if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);
        storeTodos();
        renderTodos();
      }
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use `localStorage` to store information in apps?

  * 🙋 We set the information as a key-pair using `setItem()` and retrieve it using `getItem()`. To show the stored information on the page when a browser page is refreshed, we use a function that retrieves the stored data if it exists and use DOM manipulation to render it to the page. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Pull-Request/README.md`. 

### 11. Everyone Do: Git Pull Request (20 min)

* Open the [GitHub documentation on contributing to a project](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project) in your browser and explain the following:

  * A **pull request** is a tool that allows us to collaborate and comment on code before it is merged to the main branch. 

  * In this activity, we'll practice creating a new repository on GitHub, pulling down the repo to the local machine using `git clone`, and pushing up changes using `git push`. We will also explore pull requests by opening a pull request, reviewing the request, and merging the changes into the main branch.

* Direct students to the activity instructions found in `27-Evr_Git-Pull-Request/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* Open your browser, navigate to [GitHub](https://github.com/), and demonstrate the following:

  * We create a new repository by clicking on the green New button and initializing the repo with a `README.md`. 

* Open your CLI and demonstrate the following:

  * 🔑 We use `git clone` to copy the repo to the local machine, as follows:

    ```
    git clone https://github.com/{user-name}/(your-repo-name).git
    ```

  * 🔑 We create a new branch, where we will make the changes for the pull request, as shown in the following example:

    ```
    git checkout -b 01-my-new-feature
    ```

* Open your IDE and demonstrate the following:

  * We open VS Code and navigate to the README.md to make a change. We mig:ht add something like the following text:

    ```
    Now, I am a demo for a Pull Request!
    ```

* Open your CLI and demonstrate the following:

  * 🔑 In the command line, we add and commit the change made to the README.md. Then we push it up to the remote branch, making sure to use the name of the branch that we just created, as shown in the following example:

    ```
    git add -A
    git commit -m "My first commit"
    git push origin 01-my-new-feature
    ```

* Open your browser, navigate to [GitHub](https://github.com/), and demonstrate the following:

  * 🔑 We navigate to see the changes. We click on Compare & Pull Request to open a pull request.

  * 🔑 We pick the branch that we want to compare the changes against as the **base** branch. We use `main` because we want to merge the changes into `main`. 

  * 🔑 We pick the branch that we want to compare (the **comparison** branch). That is the new branch that we just created, or `01-my-new-feature`.

  * 🔑 We fill in the form and click Create Pull Request to create the request.

  * 🔑 We review the changes by clicking the Review Changes button.

  * 🔑 We want to keep the changes and merge them into the `main` branch, so we select Merge Pull Request and then confirm it. 

  * 🔑 We open the `main` branch in the repo. The changes made in the branch have been merged.

* Answer any questions before proceeding.

### 12. BREAK (30 min)

### 13. Instructor Demo: Mini-Project (5 min) 

* Open `28-Stu_Mini-Project/Main/index.html` in your browser and demonstrate the following:

  * 🔑 When we open the browser, the user's previous win-loss history is displayed.

  * 🔑 When we click the start button, blanks appear on the screen. Each blank represents a letter in the word to be guessed.

  * 🔑 When we click the start button, the timer starts.

  * 🔑 When the user guesses the word, the timer stops and a win message is displayed.

  * 🔑 When time runs out and the user has not guessed the word, a lose message appears.

  * 🔑 The user's wins and losses appear on the screen. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We use `localStorage` to save the user's wins and losses. We use the `setInterval()` and `clearInterval()` methods to create a timer. We use DOM manipulation methods to update the screen. To add words to the screen, we can use an array and array methods. 

* Answer any questions before allowing students to start the mini-project.

### 14. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Module 04 Mini-Project: Word Guess

  In this activity, you will work with a group to build a game using JavaScript and Web APIs.

  ## Instructions

  The completed application should meet the following criteria:

  * As a user, I want to start the game by clicking on a button. 

  * As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.

  * As a user, I want the game to be timed. 

  * As a user, I want to win the game when I have guessed all the letters in the word.

  * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.

  * As a user, I want to see my total wins and losses on the screen. 

  ### Specifications

  * When a user presses a letter key, the user's guess should be captured as a key event.

  * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 

  * When a user wins or loses a game, a message should appear and the timer should stop. 

  * When a user clicks the start button, the timer should reset. 

  * When a user refreshes or returns to the browser page, the win and loss counts should persist.

  ## 💡 Notes

  Refer to the documentation:

  * [MDN Web Docs on KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

  * [MDN Web Docs on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

  * [MDN Web Docs on loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

  * [MDN Web Docs on setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

  * [MDN Web Docs on clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

  * [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your group to further your knowledge:

  * How can you add a reset button to set the win and loss counts back to zero? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Mini-Project (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `getItem()`

  * ✔️ `setItem()`

  * ✔️ `addEventListener()`

  * ✔️ `setInterval()`

  * ✔️ `clearInterval()`

   * ✔️ `keydown`

* Open `28-Stu_Mini-Project/Main/assets/js/script.js` in your IDE and explain the following: 
 
  * We store the words that the user will guess in an array, as follows:

    ```js
    var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];
    ```

  * The actions that will be performed are organized into a series of functions. Each function holds a block of code that performs a task and is called when needed, often inside another function. This allows us to write DRY code and make code blocks more reusable.

  * We use an `init()` function to hold the code that we want to execute when the page loads. When the `init()` function executes, the functions called inside it will also execute. See the following code for an example: 

    ```js
    function init() {
      getWins();
      getlosses();
    }
    ```

  * 🔑 The `getWins()` function retrieves the win count from storage, using `getItem()`, and renders it to the page&mdash;as shown in the following example:

    ```js
      function getWins() {
        var storedWins = localStorage.getItem("winCount");
        if (storedWins === null) {
          winCounter = 0;
        } else {
          winCounter = storedWins;
      }
      win.textContent = winCounter;
    }
    ```

  * The `getlosses()` function also retrieves the loss count from storage and renders it to the page. If no data is returned, the lose counter is set to `0`. See the following code for an example:

    ```js
    function getlosses() {
      var storedLosses = localStorage.getItem("loseCount");
      if (storedLosses === null) {
        loseCounter = 0;
      } else {
        loseCounter = storedLosses;
      }
      lose.textContent = loseCounter;
    }
    ```

  * 🔑 To set the data to storage, we use `setItem()`. We put the code in the functions `setWins()` and `setLosses()`. These functions will be called inside the `winGame()` and `loseGame()` functions, as shown in the following example:

    ```js
    function setWins() {
      win.textContent = winCounter;
      localStorage.setItem("winCount", winCounter);
    }

    function setLosses() {
      lose.textContent = loseCounter;
      localStorage.setItem("loseCount", loseCounter);
    }
    ```

  * 🔑 To start the game when the button is clicked, we add an event listener to the start button, as follows:

    ```js
    startButton.addEventListener("click", startGame);
    ```

  * The `startGame()` function executes when the button is clicked. `renderBlanks()` and `startTimer()` will also be executed, as shown in the following example:

    ```js
    function startGame() {
      isWin = false;
      timerCount = 10;
      startButton.disabled = true;
      renderBlanks()
      startTimer()
    }
    ```

  * The `renderBlanks()` function uses `Math.random()` to randomly pick a word from an array and a loop to push blanks to the `blankLetters` array, as follows:

    ```js
    function renderBlanks() {
      chosenWord = words[Math.floor(Math.random() * words.length)];
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      blanksLetters = []
      for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_");
      }
      wordBlank.textContent = blanksLetters.join(" ")
    }

    ```

  * 🔑 The `startTimer()` function starts the countdown. We use `setInterval()` to set the count to decrease each second and `clearInterval()` to stop the countdown. The `startTimer()` function also uses conditionals to determine whether the user won or lost, as shown in the following example:

    ```js
    function startTimer() {
      timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
          if (isWin && timerCount > 0) {
            clearInterval(timer);
            winGame();
          }
        }
        if (timerCount === 0) {
          clearInterval(timer);
          loseGame();
        }
      }, 1000);
    }

    ```

  * The `winGame()` and `loseGame()` functions are executed if the win and loss conditions are met. Note that the `setWins()` and `setLosses()` functions are called inside the function. This will set the data to storage. See the following code for an example:

    ```js
    function winGame() {
      wordBlank.textContent = "YOU WON!!!🏆 ";
      winCounter++
      startButton.disabled = false;
      setWins()
    }

    function loseGame() {
      wordBlank.textContent = "GAME OVER";
      loseCounter++
      startButton.disabled = false;
      setLosses()
    }

    ```

  * 🔑 To capture the user's input, we attach an event listener to the document and use a `keydown` event. If the timer count is zero, then the function returns and nothing happens. Else, we check that the inputted key is a letter. If it is, the `checkLetters()` and `checkWins()` functions are executed. See the following code for an example:

    ```js
    document.addEventListener("keydown", function(event) {
      if (timerCount === 0) {
        return;
      }
      var key = event.key.toLowerCase();
      var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
      if (alphabetNumericCharacters.includes(key)) {
        var letterGuessed = event.key;
        checkLetters(letterGuessed)
        checkWin();
      }
    });
    ```

  * In the `checkLetters()` function, we use conditional statements to test whether the letter is a match, as follows:

    ```js
    function checkLetters(letter) {
      var letterInWord = false;
      for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
          letterInWord = true;
        }
      }
      if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
          if (chosenWord[j] === letter) {
            blanksLetters[j] = letter;
          }
        }
        wordBlank.textContent = blanksLetters.join(" ");
      }
    }

    ```

  * We also use conditional statements to check whether there is a win, as follows:

    ```js
    function checkWin() {
      if (chosenWord === blanksLetters.join("")) {
        isWin = true;
      }
    }
    ```

  * For the bonus, we use `querySelector()` to select the reset button element, as follows:

    ```js
    var resetButton = document.querySelector(".reset-button");
    ```

  * We create a function called `resetGame()`, like in the following example:

    ```js
    function resetGame() {}
    ```

  * Inside the function, we reset the values of the win and lose counters to `0`, as shown in the following example:

    ```js
    winCounter = 0;
    loseCounter = 0;
    ```

  * We call the `setWin()` and `setLosses()` function inside `resetGame()`. When the `resetGame()` function is called, the values will be reset to `0`, then saved to storage. The order is important here. See the following code for an example:

    ```js
    function resetGame() {
      winCounter = 0;
      loseCounter = 0;
      setWins()
      setLosses()
    }
    ```

  * We use an event listener to execute the `resetGame()` function when the button is clicked, as follows:

    ```js
    function resetGame() {
      winCounter = 0;
      loseCounter = 0;
      setWins()
      setLosses()
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When working to solve a complex coding problem like the mini-project, it is important to have a plan. How can you use functions to break down your complex projects into manageable chunks of code? 

  * 🙋 Functions are reusable blocks of code that perform a task. We can write a function to perform a simple task needed in the code. Then we can call it when we need it, even inside another function. 

  * ☝️ How can we use event listeners to capture user input and perform a task? 

  * 🙋 We attach an event listener to the HTML element, like a button, or even the entire document. When the event occurs, a function will be executed. For example, we attach an event listener to a button to listen for a click. When a click happens, the actions described in the function will occur. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventListener), the [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and the [MDN Web Docs on setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Introduce Challenge (5 min)

* Open `02-Challenge/Main/index.html` in your browser and demonstrate the following:

  * In this week's Challenge, you will build an interactive quiz app. 

  * When we click on a button, the game starts.

  * When the game starts, the user is given choices and the timer starts.

  * When a wrong answer is clicked, a message is displayed.

  * When a right answer is clicked, the next question is displayed. 

  * The app is a great chance to practice all the DOM manipulation and Web API skills that you have been learning this week. It also allows you to challenge yourself to use HTML, CSS, and JavaScript to build a fully interactive game that you can showcase in your portfolio.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning to use DOM manipulation and Web APIs to build a fully functioning and interactive app.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We will use HTML to provide the structure for the project and CSS for the styling. To make the app interactive, we will use JavaScript, DOM manipulation, and Web APIs. 

  * ☝️ How does this project relate to your career goals?

  * 🙋 This quiz app provides you with a fun outlet for showcasing your evolving JavaScript knowledge in your portfolio. Furthermore, manipulating the DOM and building interactive apps are essential skills for any professional web developer.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

### 17. FLEX (40 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Ask the students if there is anything they would like to review from Module 03 and 04.

* Answer any questions before ending the class.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
