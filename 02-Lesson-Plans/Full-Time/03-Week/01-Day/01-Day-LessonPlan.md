# 03.1 Full-Time Lesson Plan: Third-Party APIs

## Overview

In this class, we will perform DOM manipulations that students are already familiar with, except this time we'll be using jQuery. We will use the equivalent strategy of traversing down the DOM tree through child elements from the parent element. Then we will begin to look into Bootstrap components and layouts.

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_jQuery-Elements` through `14_Stu_Bootstrap-Layout`.

* Take a few minutes before class to get familiar with the [jQuery API documentation](https://api.jquery.com/), as students will rely heavily on it in class and might need help finding answers.

* Throughout the class, reiterate often that the vanilla JavaScript DOM methods we have used previously like `document.getElementById`, `document.body.children`, and `Element.innerHTML` all have corresponding jQuery methods as well as a powerful selector feature, to select elements in the DOM.

* Students can get hung up on learning the correct syntax. Encourage them that the interface gets easier to understand with practice and time.

* If students continually question why they are learning jQuery even though they have already learned how to manipulate the DOM with vanilla JavaScript, tell them that it is due to the longstanding prevalence and popularity of jQuery on the web. Also, knowing how to learn new libraries and measure their benefits is an important skill to have.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice but instead  is a self-study on topics beyond the scope of this module, for those who want to further their knowledge.

* **Important**: Our curriculum currently uses Bootstrap v4.5! Please refer to the Bootstrap v4.5 [documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/) instead of `https://getbootstrap.com` as that will navigate to version 5+.

## Learning Objectives

We will use jQuery to do the following:

* Create and select DOM elements.

* Assign content or styling to a DOM element.

* Append, prepend, and replace elements to the DOM.

* Traverse the DOM through child elements.

* Attach event listeners and their corresponding event handling functionality.

* Delegate events for elements that have been dynamically created.

* Use Bootstrap components and create Bootstrap layouts

## Slide Deck

* [Module 05 Slide Deck](https://docs.google.com/presentation/d/1FjKh60N-t5lF3XMmLDiEfCgiNIqAxbDbIyGZLdtGhjw/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                           | Duration |
|---     |---  |---                                      |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity          | 0:10     |
| 10:10AM| 2   | Instructor Demo: jQuery Elements        | 0:05     |
| 10:15AM| 3   | Student Do: jQuery Elements             | 0:15     |
| 10:30AM| 4   | Instructor Review: jQuery Elements      | 0:10     |
| 10:40AM| 5   | Instructor Demo: Click Events           | 0:05     |
| 10:45AM| 6   | Student Do: Click Events                | 0:15     |
| 11:00AM| 7   | Instructor Review: Click Events         | 0:10     |
| 11:10AM| 8   | Instructor Demo: Form Elements          | 0:05     |
| 11:15AM| 9   | Student Do: Form Elements               | 0:15     |
| 11:30AM| 10  | Instructor Review: Form Elements        | 0:10     |
| 11:40AM| 11  | Instructor Demo: DOM Traversal          | 0:05     |
| 11:45AM| 12  | Student Do: DOM Traversal               | 0:15     |
| 12:00PM| 13  | BREAK                                   | 0:30     |
| 12:30PM| 14  | Instructor Review: DOM Traversal        | 0:10     |
| 12:40PM| 15  | Instructor Demo: Event Delegation       | 0:05     |
| 12:45AM| 16  | Student Do: Event Delegation            | 0:15     |
| 1:00PM | 17  | Instructor Review: Event Delegation     | 0:15     |
| 1:15PM | 18  | Instructor Do: Stoke Curiosity          | 0:10     |
| 1:25PM | 19  | Instructor Demo: Bootstrap Components   | 0:05     |
| 1:30PM | 20  | Student Do: Bootstrap Components        | 0:15     |
| 1:45PM | 21  | Instructor Review: Bootstrap Components | 0:10     |
| 1:55PM | 22  | Instructor Demo: Bootstrap Layouts      | 0:05     |
| 2:00PM | 23  | Student Do: Bootstrap Layouts           | 0:15     |
| 2:15PM | 24  | Instructor Review: Bootstrap Layouts    | 0:15     |
| 2:30PM | 25  | END                                     | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1FjKh60N-t5lF3XMmLDiEfCgiNIqAxbDbIyGZLdtGhjw/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Third-Party APIs:** This module is all about learning how to use tools and code built by other developers.

  * **What languages do we use to build web apps?**

    * We use HTML for content and structure, CSS for styling and layout, and JavaScript for handling logic, interaction, and fetching data.

  * **How do we interact with HTML and CSS using JavaScript?**

    * The document object model interface enables developers to interact with the application’s HTML and CSS using JavaScript.

    * Some of these interactions include the following:

      * Creating HTML elements.

      * Changing HTML content and attributes.

      * Binding listeners to execute a function upon a certain event.

  * **Is the DOM built into the JavaScript language?**

    * Nope. The browser provides it! On its own, JavaScript is very limited. Luckily, the browser provides numerous application programming interfaces (APIs) that we can use in JavaScript code.

  * **Are there APIs we can use that aren’t provided by the browser?**

    * Yes, there are! The web is filled with tools that other developers have built and made available for us to use in our projects! These third-party APIs exist to help us carry out specific tasks that we can do ourselves with CSS or JavaScript but that might be too complex or time-consuming to do by hand.

  * **How can we learn to use and implement these APIs?**

    * Because these APIs are provided by developers (like us!) of all different backgrounds, there is no one correct way to learn how to use them.

    * What’s important is that you identify what problem an API solves for you and how to properly integrate it into your existing application.

    * You can try the following strategies to learn more about specific APIs:

      * Read the official documentation and practice with the provided examples.

      * Reverse-engineer finished code to see how something was accomplished.

      * Build something from scratch.

      * Debug a broken app using Chrome DevTools.

      * And most importantly, ask questions.

* In this module, we will learn how to integrate these third-party APIs with applications. Specifically, we'll learn how to work with jQuery, Bootstrap, Google Fonts, jQuery UI, and MomentJS!

* Open `28-Stu_Mini-Project/Solved/index.html` in your browser.

  * 🔑 We are viewing the mini-project that we will be able to build this by the end of this module.

  * 🔑 It is a web application to track the amount of money earned on projects.

  * 🔑 This page is built with minimal custom CSS styles, and most of the complex JavaScript is handled by jQuery, jQuery UI, and MomentJS!

* Demonstrate the following:

  * We can create projects and add them to a table.

  * We can see how much money we could make on the project based on the hourly rate and potential project completion date.

  * We can sort and remove projects as well.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to use third-party APIs in our applications.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We are continuing to use HTML, CSS, and JavaScript, but in a different way.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Most application developers rely heavily on third-party tools and libraries like these, so it's important to learn how to use them.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: jQuery Elements (5 min)

* Open `01-Ins_jQuery-Elements/index.html` in your IDE and show the following:

  * Notice there is barely any markup on this page!

* Open `01-Ins_jQuery-Elements/index.html` in the browser. Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How did we render these elements to the page?

  * 🙋 We can create elements dynamically with jQuery. We can populate a list by looping through an array, then creating each element and attaching it to the webpage.

* Open `01-Ins_jQuery-Elements/index.html` in your IDE again and demonstrate the following:

  * We insert the jQuery CDN link with the `<script>` at the bottom of the `<body>`.

  * We can find this link on the [jQuery CDN page](https://code.jquery.com/). We chose the minified version of jQuery 3.5.1.

* Open `01-Ins_jQuery-Elements/assets/js/script.js` in your IDE and demonstrate the following:

  * We can select the element by attribute like an `id` and create a jQuery object:

    ```js
    var rootEl = $("#root");
    ```

  * We can create a DOM element with angle brackets:

    ```js
    var titleEl = $("<h1>");
    ```

  * We can loop through an array and create a DOM element for each array element, add text content, and append the DOM element to the page:

    ```js
    for (var i = 0; i < abilities.length; i++) {
      // Create a new `<div>` for each ability and its text content
      var abilityEl = $('<li>');

      // abilityEl.textContent = abilities[i];
      abilityEl.text(abilities[i]);

      // `my-3` class adds margin on top and bottom
      abilityEl.addClass('my-3');

      // Add this new `<div>` to the abilities `<div>`.
      rootEl.append(abilityEl);
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the vanilla JavaScript methods that can achieve similar results?

  * 🙋 `document.createElement`, `document.querySelector`, `Element.textContent`, `Element.setAttribute`, `Element.className`, and `Element.style`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_jQuery-Elements/README.md`.

### 3. Student Do: jQuery Elements (15 min)

* Direct students to the activity instructions found in `02-Stu_jQuery-Elements/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Create HTML Elements with jQuery

  Work with a partner to implement the following user story:

  * As a user, I want to be greeted with a quote by an author when I open the page.

  ## Acceptance Criteria

  * It's done when the page dynamically displays a quote by an author and the author's name on load.

  ## 📝 Notes

  Refer to the following documentation:

  [jQuery API documentation](https://api.jquery.com/)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A quote appears in blue text on a black background, with the author's name in white text on the next line.](./Images/01-quote.png)

  ---

  ## 💡 Hints

  * Don’t forget to add jQuery to `index.html` before you begin.

  * Only use jQuery methods! Do NOT use any of the following vanilla JavaScript methods: `createElement`, `textContent`, or `appendChild`.

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * How can we add event listeners using jQuery?

  Use [Google](https://www.google.com) or another search engine to answer this question.

  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 4. Instructor Review: jQuery Elements (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the jQuery interface? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ jQuery Selector `$("selector")`

  * ✔️ `.text()` and `.attr()`

  * ✔️ Append to the page using `append()`

* Open `02-Stu_jQuery-Elements/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We begin by using the jQuery ID selector, `$("#root")`, and assigning it to a variable `rootEl`.

    ```js
    var rootEl = $("#root");
    ```

  * We can use this variable, `rootEl`, to modify the `<div id="root">` with jQuery methods.

  * We can also create elements by placing the angle brackets around the element:

    ```js
    var authorEl = $("<p>");
    ```

  * 🔑 We can add text content with the `text()` method:

    ```js
    authorEl.text("~ Carol Dweck");
    ```

  * We can create an `<h1>` element for the quote text:

    ```js
    var quoteEl = $("<h1>");
    ```

  * We can assign a class using the `addClass()` method:

    ```js
    authorEl.addClass("plain");
    ```

  * We can add text content to the quote element with the `text()` method:

      ```js
      quoteEl.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.");
      ```

  * 🔑 We can also add class or any attribute with the `attr()` method:

    ```js
    quoteEl.attr("class", "fancy");
    ```

  * 🔑 We can append the quote element to the page with  `append()`:

    ```js
    rootEl.append(quoteEl);
    ```

  * We attach the author element to the quote:

    ```js
    quoteEl.append(authorEl);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `$("<div>")` and `$("div")` in jQuery?

  * 🙋 `$("<div>")` creates a new `<div>` element. `$("div")` will select every `<div>` in the document and return them in an array.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [jQuery API documentation](https://api.jquery.com/), look at examples, and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Click Events (5 min)

* Open `03-Ins_Click-Events/index.html` in the browser and show the following:

  * 🔑 We can click each button to trigger a different response.

  * 🔑 All the elements were created dynamically, except the empty `<div>`.

* Open `03-Ins_Click-Events/assets/js/script.js` in your IDE and show the following statements:

  * We create references to the DOM elements we will work with first:

    ```js
    var alertButtonEl = $('#alert-btn');
    var themeButtonEl = $('#theme-btn');
    var lotteryButtonEl = $('#lottery-btn');
    var lotteryNumberEl = $('#lottery-number');
    var refreshButtonEl = $('#refresh-btn');
    ```

  * 🔑 We attach the click event to the alert button:

    ```js
    alertButton.click(function() {
      alert("Hello World");
    });
    ```

  * 🔑 We add the event handler, `alert("Hello World")`, to the callback function.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What other types of event listeners are there?

  * 🙋 Mouse, key, browser events, and more.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Click-Events/README.md`.

### 6. Student Do: Click Events (15 min)

* Direct students to the activity instructions found in `04-Stu_Click-Events/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 🐛 Password generator doesn't work on single-click

Work with a partner to resolve the following issues:

* As a user, I should be able to click the "Generate Password" button.

* As a user, I should be able to single-click the "Generate Password" button to generate a new password.

* As a user, I should be able to generate a 15-character password upon click.

## Expected Behavior

When a user single-clicks the "Generate Password" button, a 15-character password is printed to the page.

## Actual Behavior

When a user clicks the "Generate Password" button, nothing happens.

## Steps to Reproduce the Problem

1. Open `index.html` in the browser.

2. Click on the "Generate Password" button to see that nothing happens.

## Assets

The following image demonstrates the web application's appearance and functionality:

![On the password generator app, an input field is filled by a random password.](./Images/01-solution-screenshot.png)

---

## 💡 Hint

* How can we ensure that our HTML elements have the correct event listeners attached to them?

## 🏆 Bonus

If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

* What are alternative methods to add event listeners? Use [Google](https://www.google.com) or another search engine to answer this question.
```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 7. Instructor Review: Click Events (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel about adding click events by using jQuery? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ Correct selector

  * ✔️ `click`, not `dblclick`

  * ✔️ The password is displayed to the page

* Open `04-Stu_Click-Events/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 The jQuery selector at the top of the file used the incorrect selector syntax and should select by ID and not class:

    ```js
    var passwordBtnEl = $('#password-btn');
    ```

  * 🔑 Because the `.on()` method will listen for any valid browser event, we can simply change it to say `click`:

    ```js
    passwordBtnEl.on('click', function () {
    ```

  * 🔑 After the password is generated, it's displayed to the element that `passwordDisplayEl` references:

    ```js
    var newPassword = passwordGenerator(15);
    passwordDisplayEl.text(newPassword);
    ```

  * We create the variables first, then the functionality, then the event listener bindings. This approach ensures that everything exists before we put it to use in the JavaScript.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Could we listen for both click and double-click events on one element?

  * 🙋 Yes! We can use a second `.on()` to an element to attach another event listener.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [jQuery documentation on mouse events](https://api.jquery.com/category/events/mouse-events/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to send the instruction text to the students in their class-specific channel.

### 8. Instructor Demo: Form Elements (5 min)

* Open `05-Ins_Form-Elements/index.html` in the browser and demonstrate the following:

  * 🔑 Open the browser console.

  * 🔑 Fill out the form and click Submit. We see the form input logged in the console.

  * 🔑 We used jQuery to create the text input fields dynamically.

* Open `05-Ins_Form-Elements/assets/js/script.js` in your IDE and show the following:

  * We can use `.on('submit', ...)` as the click event for the `<form>` element and pass `handleFormSubmit()` as the callback function:

    ```js
    formEl.on('submit', handleFormSubmit);
    ```

  * We use the jQuery `.val()` method on form elements to retrieve the input values:

    ```js
    firstNameEl.val()
    ```

  * Because there can be more than one checked item, we need to select the checked elements and store them in an array using the jQuery `$.each()` method:

    ```js
    var checkedEl = $('input:checked');
    var selected = [];

    // Loop through checked options to store in array
    $.each(checkedEl, function () {
      selected.push($(this).val());
    });
    ```

  * We can clear form elements by using CSS selectors and setting an empty string value to them, but the checkbox requires a different type of reset:

    ```js
    $('input[type="text"]').val('');
    $('input[type="email"]').val('');
    $('input[type="checkbox"]').prop('checked', false);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can we use the `submit()` event for other elements beside forms?

  * 🙋 No, `submit` can only be used with forms.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Form-Elements/README.md`.

### 9. Student Do: Form Elements (15 min)

* Direct students to the activity instructions found in `06-Stu_Form-Elements/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📖 Implement a Shopping List Form

Work with a partner to implement the following user storys:

* As an online shopper, I want to be able to add items to my shopping list so that I can view them all in one place.

* As an online shopper, I want to be able to quickly add another item to my list.

## Acceptance Criteria

* It's done when the form can be submitted and the value in the input field is captured and printed to the page as a list item.

* It's done when the form's input field is cleared upon a successful submission.

## 📝 Notes

Refer to the following documentation:

[jQuery documentation on forms](https://api.jquery.com/category/forms/)

## Assets

The following image demonstrates the web application's appearance and functionality:

![A shopping list app shows an input field with a button to Add Item, above a shopping list.](./Images/01-solution-screenshot.png)

---

## 💡 Hints

* Prevent the default behavior of the `submit()` event.

* What jQuery form method can you use to retrieve the input field's data?

## 🏆 Bonus

If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

* How can we reset form elements using plain JavaScript?

Use [Google](https://www.google.com) or another search engine to research this.

```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 10. Instructor Review: Form Elements (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with form elements in jQuery? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ The use of `.on('submit', ...)`

  * ✔️ `.val()` for getting and setting data

  * ✔️ Validating form submission

* Open `06-Stu_Form-Elements/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We attach the `submit` event to the form element using `.on()`:

    ```js
    shoppingFormEl.on('submit', handleFormSubmit);
    ```

  * 🔑 We can get the value entered in the form `<input>` by selecting it by its `name` attribute and using `.val()`:

    ```js
    var shoppingItem = $('input[name="shopping-input"]').val();
    ```

  * 🔑 If we click Submit and nothing is in the `<input>`, do nothing:

    ```js
    if (!shoppingItem) {
      console.log('No shopping item filled out in form!');
      return;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some differences between the `click` and the `submit` events?

  * 🙋 `submit` is used to post a form, so it can only be attached to form elements. `click` can be attached to any element. The `submit` event is not strictly a mouse event, whereas `click` is.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to the supplemental material, read the [jQuery documentation on forms](https://api.jquery.com/category/forms/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 11. Instructor Demo: DOM Traversal (5 min)

* Open `07-Ins_Dom-Traversal/index.html` in the browser and open the Elements tab in DevTools to demonstrate the following:

  * 🔑 Explain the element hierarchical structure of the markup. Expand all the elements on the page in the Elements tab, including the `<ul>`.

  * Explain that all the visible elements on the page are children or grandchildren to the `<main id="top">` element.

  * In the Elements tab, examine the `<script>` elements at the bottom of the `<body>` for jQuery and the `script.js` file.

* Open `07-Ins_Dom-Traversal/assets/js/script.js` in your IDE and notice that JavaScript statements are commented. Only uncomment the requested lines to reveal each effect on the webpage.

  * Uncomment the lines 3 and 4 to illustrate which elements are selected by the jQuery traversal methods:

    ```js
    $('#top').children().css('color', 'yellow');
    console.log($('#top').children());
    ```

* Refresh `07-Ins_Dom-Traversal/index.html` in your browser to display how the webpage has been modified.

  * Keep the console in DevTools open to view any logs. We will continually refresh this webpage to view DOM changes after each uncommented line.

  * Note that we can chain traversal methods to the jQuery selector to select descendants or ancestors.

  * Note that the `children()` traversal method only affects direct children. The reason why the list items also have yellow font is because the unordered list parent element `<ul>` was assigned the css rule `{ color: yellow; }` which affects the list items, as can be seen in the browser's Elements tab.

  * In the console, we can see the log of the children of the element `<main id="top">` and its corresponding index starting with index 0. Note that only the direct children, not any further nested elements like the `<li>` elements are logged.

* Open `07-Ins_Dom-Traversal/assets/js/script.js` in your IDE and uncomment line 7 and explain the following:

  * The traversal method `eq(0)` was chained to the previous statement. Chaining allows us to further select elements from the array of children elements selected previously by the index number.

  * The `addClass()` method was used to add the class `boxy` to the `<h1>`.

* Refresh `07-Ins_Dom-Traversal/index.html` in your browser to display how the webpage has been modified.

  * Open the Elements tab and select the `<h1>` to view the `.boxy` class selector and its corresponding CSS rules or view `style.css` in the IDE.

  * Notice that although the text color was changed to red in the class rule, it was overwritten by the `css()` method due to its cascading priority. The `css(color, red)` method can be chained to this statement to override the previous `css(color, yellow)` statement.

* Open `07-Ins_Dom-Traversal/assets/js/script.js` in your IDE and uncomment line 10 and explain the following:

  * Note that in this statement we select the `<ul>` in the array of children elements to append an additional list item.

  ```js
  $('#top').children().eq(4).append($('<li>Classmates</li>'));
  ```

* Refresh `07-Ins_Dom-Traversal/index.html` in your browser to display how the webpage has been modified.

* Open `07-Ins_Dom-Traversal/assets/js/script.js` in your IDE and uncomment line 13 and explain the following:

  * Note that in the following statement, we select the `<ul>` this time by filtering the array to find the '<ul>' element.

  ```js
  $('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');
  ```

  * In the preceding statement, methods are chained to select the children of the `<ul>`, the `<li>`. A class and a CSS rule are added to the list items by chaining additional methods.

* Refresh `07-Ins_Dom-Traversal/index.html` in your browser to display how the webpage has been modified.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the name of the jQuery traversal method that will only select direct descendants?

  * 🙋 `.children()`

  * ☝️ If the jQuery selector returns an array of elements, which method can select the first element?

  * 🙋 `eq(0)`

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Dom-Traversal/README.md`.

### 12. Student Do: DOM Traversal (15 min)

* Direct students to the activity instructions found in `08-Stu_Dom-Traversal/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Tic-Tac-Toe Automation

  Work with a partner to implement the following user story:

  * As a game developer, I want to programmatically change the board style.

  * As a game developer, I want to programmatically add the winning move.

  ## Acceptance Criteria

  * It's done when the board's tiles are automatically styled on page load.

  * It's done when the X player is blocked from winning.

  * It's done when the O player has won.

  * It's done when all traversals begin the `<main>` element.

  ## 📝 Notes

  Refer to the following documentation:

  [jQuery Docs on Traversing](https://api.jquery.com/category/traversing)

  [jQuery Docs on Markup Changes](https://api.jquery.com/text/)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A Tic-Tac-Toe board shows that the O player has won the game.](./Images/01-solution-screenshot.png)

  ---

  ## 💡 Hint

  * The starting point for all the the traversals in this activity must begin at the `<main id="root">`, which has been assigned for you as `rootEl`.

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * What are some alternative methods to traverse up and down the DOM tree? Use [Google](https://www.google.com) or another search engine to answer this question.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: DOM Traversal (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel traversing the DOM with jQuery? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ `children`, `eq()`, traversal methods for nested elements

  * ✔️ Method chaining

  * ✔️ `text()`

* Open `08-Stu_Dom-Traversal/Solved/assets/js/script.js` in your IDE and explain the following:

  * The starting point of the traversals at `<main id="root">` has been assigned to `rootEl`.

  * 🔑 To select the background color for all the boxes, we must select the children of the `<ul>`, then apply the CSS rule to these elements with `css()`.

    ```js
    rootEl.children('ul').children().css('background-color', 'white');
    ```

  * 🔑 We can chain the methods together to combine searches to further filter down into nested elements.

  * Select the last row since it contains the winning move.

    ```js
    var rowThree = rootEl.children('ul').eq(2);
    ```

  * 🔑 We use `eq(0)`, to select the first element of the last row. We use the `text('O')` to insert the text O into the first box of row three:

    ```js
    rowThree.children().eq(0).text('O');
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which jQuery method is used to add text to an element?

  * 🙋 `text()`

  * ☝️ What is the use of traversal methods?

  * 🙋 Allows selection of elements when using the selector is not possible, for instance for dynamically created elements.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to the supplemental material, read the [jQuery documentation on traversing](https://api.jquery.com/category/traversing), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 15. Instructor Demo: Event Delegation (5 min)

* Open `09-Ins_Event-Delegation/index.html` in your browser and demonstrate the following:

  * 🔑 We see a white message board with a Show Letters button.

  * 🔑 When we click the Show Letters button, that button disappears and instead we see buttons with the letters of the alphabet on them. We also see a Clear button.

  * 🔑 When we click on a letter button, that letter is rendered on the message board.

  * 🔑 When we click the Clear button, the message board is cleared.

* Open `09-Ins_Event-Delegation/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We have a few `click` events going on. While we could use the jQuery `.click()` method, it would only work for elements that exist on the page at the time `click()` is used. But our letter buttons are dynamically created elements, meaning we'd need to use event delegation to account for them.

  * 🔑 Therefore, we must delegate the event listener to the parent element, `<div id="buttons">`, because the letters are not available when the `document` loads:

    ```js
    buttonListEl.on('click', '.letter-button', function (event) {
      var displayLetterEl = $('<div>');

      displayLetterEl.addClass('letter');

      // get letter from clicked letter button's `data-letter` attribute and use it for display
      displayLetterEl.text($(event.target).attr('data-letter'));
      displayEl.append(displayLetterEl);
    });
    ```

  * 🔑 We use `.on()` to attach the `click` event so that we only listen for the event on the descendants with the class selector `.letter-button`.

  * 🔑 We retrieve the user's selection using `$(event.target)` and assign the text content to the letter's `data-letter` attribute.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Is it necessary to use the `.on()` method instead of the `.click()` method when delegating events?

  * 🙋 Yes, to leverage the `.on()` method's extra feature that filters the descendant elements.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Event-Delegation/README.md`.

### 16. Student Do: Event Delegation (15 min)

* Direct students to the activity instructions found in `10-Stu_Event-Delegation/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Shopping List Item Deletion

  Work with a partner to implement the following user story:

  * As an online shopper, I want to be able to remove items from my list.

  ## Acceptance Criteria

  * It's done when each item's Remove button can be clicked to remove its respective shopping list item.

  ## 📝 Notes

  Refer to the following documentation:

  [jQuery documentation on event delegation](https://learn.jquery.com/events/event-delegation/)

  ## 💡 Hints

  * Use your knowledge in DOM traversal to select an element's parent.

  * The jQuery method for deleting an element is `.remove()`.

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * What are some alternatives to using jQuery? Discuss the merits with your partner.

  You can read this [guide to whether you need jQuery](http://youmightnotneedjquery.com/) to see some alternatives.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 17. Instructor Review: Event Delegation (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with event delegation? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ Event delegation

  * ✔️ `event.target` is the button clicked

  * ✔️ `.parent()`

* Open `10-Stu_Event-Delegation/Solved/assets/js/script.js`in your IDE and explain the following:

  * 🔑 We can attach the `on()` event listener to the parent element, `shoppingListEl`, to listen for the click on the shopping list item buttons:

    ```js
    shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
    ```

  * 🔑 In the event handler, we use `$(event.target)` to select the button clicked by the user:

    ```js
    var btnClicked = $(event.target);
    ```

  * 🔑 We use traversing with `.parent('li')` to select the first parent element that matches a `<li>` and remove it:

    ```js
    btnClicked.parent('li').remove();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Are there any drawbacks with event delegating to ancestor elements&mdash;for example, `<html>`, because this element will always be guaranteed to load?

  * 🙋 Yes, all descendants of `<html>` that exist now or in the future matching the selector will fire the handler. Therefore it's best to select a parent closest to the target element to decrease the chances for errant function calls.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to the supplemental material, read the [jQuery documentation on event delegation](https://learn.jquery.com/events/event-delegation/), and stay for office hours to ask for help.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Remind students that this module is all about using third-party APIs and libraries to make development work easier at times.

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ What purpose does jQuery serve?

  * 🙋 It is a library that can make working with the DOM a little easier at times.

* Explain that in this class, we will learn about a CSS framework called **Bootstrap**.

* Liken Bootstrap to jQuery, but for CSS instead of JavaScript.

* Explain that Bootstrap is a **CSS Framework** and is essentially a very large stylesheet that offers a lot of solutions for layout and design needs&mdash;reducing the amount of custom CSS that developers need to create for their apps.

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How can we learn about getting started using Bootstrap?

  * 🙋 By visiting the documentation!

* Open the [Bootstrap website](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

* Walk through the Quick Start section of the page, explaining the CSS file and three JavaScript/jQuery dependencies. We don't always need the `<script>` tags for our app to work, but they're needed for certain offerings that Bootstrap provides.

* Briefly touch on how Bootstrap can be thought of in three main solutions:

  * **Components:** Bootstrap offers prebuilt UI components like form elements, alert dialogs, and navigation bars.

  * **Layout:** Bootstrap has a prebuilt grid system that allows us to create responsive layouts with ease.

  * **Utilities:** Bootstrap offers a series of utility styles that allow us to adjust a number of CSS properties, like margin, padding, colors, and sizing.

* Explain that all of this is built using CSS properties that we already know; Bootstrap has simply done a lot of the work for us. All we have to do is learn how to apply their prebuilt CSS classes, and we can use their styles! This can save developers valuable time when working on long, intense projects.

### 19. Instructor Demo: Bootstrap Components (5 min)

* Open `11-Ins_Bootstrap-Components/index.html` in your browser and walk through each example:

  * 🔑 The main page uses Bootstrap buttons to link us to each component page.

  * 🔑 The Navbar page shows three (of many) variations that Bootstrap provides. The dropdown menu capability and responsive hamburger menu icon need the three `<script>` elements we saw earlier.

  * 🔑 The Cards page shows two variations of a popular component called a card. They can be used for a list of blog posts, products in a store, sidebar content, and a lot more.

  * 🔑 The Forms page demonstrates how form elements look using Bootstrap.

  * 🔑 The Bootstrap layout and utility classes were used in each page to achieve a responsive centered layout with differing background colors.

* Open `11-Ins_Bootstrap-Components/index.html` in your IDE and point out the following:

  * 🔑 The Bootstrap CDN `<link>`

  * 🔑 The use of multiple classes provided by Bootstrap

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where can we go to learn more about each of these components?

  * 🙋 The Bootstrap documentation!

* Reiterate that whenever we use a new library, framework, or technology, it's best that we familiarize ourselves with the documentation as much as possible.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Bootstrap-Components/README.md`.

### 20. Student Do: Bootstrap Components (15 min)

* Direct students to the activity instructions found in `12-Stu_Bootstrap-Components/README.md`

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Add Bootstrap Components to the Page

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to quickly put together a webpage without having to write custom CSS.

  ## Acceptance Criteria

  * It's done when the page has a styled navbar.

  * It's done when the page has a styled jumbotron.

  * It's done when the page has a styled and dismissible alert box.

  * It's done when the page has a styled form.

  * It's done when the page has a styled list with badges.

  * It's done when the page has a styled card with a list, header, and footer.

  ## 📝 Notes

  Refer to the following documentation:

  [Bootstrap documentation on components](https://getbootstrap.com/docs/4.5/components/)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A webpage features a styled form, list, card and navbar.](./Images/01-solved-screenshot.png)

  ---

  ## 💡Hints

  * When in doubt, use the Bootstrap documentation links in the comments and Chrome DevTools to break down the classes and styles used!

  * Look down the left-hand side of the Bootstrap documentation to see the different types of components.

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * How did Bootstrap come to be, and how are CSS frameworks like it useful for developers?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 21. Instructor Review: Bootstrap Components (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Bootstrap components? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ The documentation has everything we need.

  * ✔️ Bootstrap provides all of the classes.

  * ✔️ Some components rely on the Bootstrap JavaScript to work.

* Open `12-Stu_Bootstrap-Components/Solved/index.html` in your IDE and explain the following:

  * 🔑 Everything implemented here can be found in the documentation and sample code.

  * 🔑 Each component works by using classes that are defined in the Bootstrap stylesheet. Scroll down to the Card HTML:

    ```html
    <div class="card">
      <h4 class="card-header">This is a card.</h4>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    ```

  * Most of these classes need to work in unison to show the result in the browser.

  * 🔑 Some components rely on HTML data attributes and JavaScript to work as well, like the responsive hamburger icon navbar toggling the menu to open and close on click.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Did anyone look at how these styles are used in Chrome DevTools?

  * 🙋 You'll notice that it's all the regular CSS properties we already know; the team at Bootstrap just spent a lot more time planning it out for us.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Bootstrap documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/), and stay for office hours to ask for help.

* Answer any questions before introducing the next demo.

* Ask the class the following question to help transition to the next demo:

  * ☝️ Do we think we're making good use of space with this layout?

  * 🙋 Most likely not; we might want to create some left and right columns to help put more content higher up on the page.

### 22. Instructor Demo: Bootstrap Layout (5 min)

* Open `13-Ins_Bootstrap-Layout/index.html` in your browser and demonstrate the following:

  * 🔑 We can create a 12-column grid layout with Bootstrap classes.

  * 🔑 We can even control what width they will be on different screen sizes and use justification and alignment classes to reposition them.

* Open `13-Ins_Bootstrap-Layout/index.html` in your IDE and explain the following:

  * 🔑 A grid layout is created by using the `row` class in the container and `col-*` classes for different column sizes on different screens.

  * 🔑 The page margins are created using the `container` and `container-fluid` classes. The `container` class has a maximum width applied, and `container-fluid` will grow with the page no matter how wide.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What CSS tool have we used in the past to achieve these types of layouts?

  * 🙋 flexbox!

  * ☝️ And what other CSS tool did we combine flexbox properties with to make a responsive page layout?

  * 🙋 Media queries.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Bootstrap-Layout/README.md`.

### 23. Student Do: Bootstrap Layout (15 min)

* Direct students to the activity instructions found in `14-Stu_Bootstrap-Layout/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Responsive Layout

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to create a responsive layout without having to write custom CSS.

  ## Acceptance Criteria

  * It's done when the page displays a multicolumn layout on large screens and matches the mock-up provided.

  * It's done when the screen displays in a single-column layout on smaller screens and matches how it looks currently.

  ## 📝 Notes

  Refer to the following documentation:

  [Bootstrap documentation on the grid](https://getbootstrap.com/docs/4.5/layout/grid/)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The webpage layout features multiple rows and columns using Bootstrap's grid system.](./Images/01-solved-screenshot.png)

  ---

  ## 💡 Hint

  * Don't forget to use the previous activity as a guide to how the classes can be used!

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * What are some ways Chrome DevTools can demystify the CSS powering the grid?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 24. Instructor Review: Bootstrap Layout (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel building layouts in Bootstrap? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ `col-*` needs to be direct child of `row`.

  * ✔️ It's mobile-first. Use breakpoints to go up, not down.

  * ✔️ We don't need to take up the full width.

* Open `14-Stu_Bootstrap-Layout/Solved/index.html` in your IDE and explain the following:

  * 🔑 Every grid layout we create starts with an HTML element receiving a class of `row` and turns it into a flexbox layout.

  * 🔑 Walk through this portion of the solution HTML to explain the column sizing at different breakpoints and the grid alignment with `align-items-end`:

    ```html
    <div class="row align-items-end">
      <div class="col-12 col-md-6">
        <img class="img-fluid" src="https://via.placeholder.com/1920x1080" alt="video placeholder" />
      </div>

      <div class="col-12 col-md-6">
        <h1>Welcome to the app.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, reprehenderit! Placeat quo
        necessitatibus porro corporis quasi architecto sit aspernatur inventore, perspiciatis nulla hic soluta ipsum
        ipsa sed iure dolorum! Tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem
        dolorum earum esse recusandae facere aliquam. Excepturi facilis sint nesciunt ipsa, eveniet facere in quidem
        voluptas exercitationem distinctio commodi laborum!</p>
        <button class="btn btn-primary">Learn more.</button>
      </div>
    </div>
    ```

  * 🔑 When we don't want to have a column take up the full width, we can center-justify the row's contents and set the column to be smaller on larger screen sizes.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do the `-sm`, `-md`, and `-lg` in the class names do for us?

  * 🙋 They instruct the columns to be different sizes on different screen widths using media queries.

  * ☝️ Did anyone find anything interesting in the documentation that we didn't use here?

  * 🙋 We can automatically size columns with simple `col` classes and reorder them, amongst many other things!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Bootstrap documentation on the grid](https://getbootstrap.com/docs/4.5/layout/grid/), and stay for office hours to ask for help. Use the Bootstrap examples provided in the documentation to give yourself a starting point, then continue to tweak the class names to try and configure different layouts. Having a good understanding of CSS flexbox properties will ultimately be the best way to learn it too.

* Answer any questions before proceeding to the next demo.

* Ask the class the following question to help transition to the next demo:

  * ☝️ How can we make this more vibrant and less tight feeling?

  * 🙋 We can use custom CSS, or we can look at Bootstrap utility classes and see what's offered.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
