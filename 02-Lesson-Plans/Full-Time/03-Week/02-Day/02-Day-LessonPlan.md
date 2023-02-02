# 03.2 Full-Time Lesson Plan: Third-Party APIs

## Overview

This class introduces Bootstrap utilities and how to extend Bootstrap. Student's will also learn about Google Fonts. Students will rely heavily on documentation to make use of utility classes and they will customize those pages with Google Fonts and CSS. Students will also implement jQuery UI&mdash;specifically widgets and interactions&mdash;to make a webpage more user-friendly. Students will also learn about formatting dates using Moment.js. Also, `git revert` will be covered today as a part of the continuing education on Git.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Bootstrap Utilities` through `27-Evr_Git-Revert`.

* The `26-Stu_Moment-Format` activity uses the `Moment.js` library to format dates and time. Let the students know that `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. It is still functional, which is why we are covering it in class. Feel free to encourage students to explore other options such as [Luxon](https://moment.github.io/luxon/), [Day.js](https://day.js.org/), [date-fns](https://date-fns.org/), and [js-Joda](https://js-joda.github.io/js-joda/).

* Take a few minutes before class to get familiar with both the [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) and [Google Fonts](https://fonts.google.com/) documentation, as students will rely heavily on these resources in class and might need a nudge in finding answers.

* **Important**: Our curriculum currently uses Bootstrap v4.5! Please refer to the Bootstrap v4.5 [documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/) instead of `https://getbootstrap.com` as that will navigate to version 5+.

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students might have.

* It's important that students understand that Bootstrap is simply a large stylesheet and that it uses a lot of skills they already have. If students are struggling with certain concepts, try and jog their memory of learning CSS and emphasize the use of DevTools to break down styles being used.

* Reiterate often that, like CSS, using Bootstrap classes and Google Fonts requires a bit of trial and error to achieve the intended design and layout. Encourage students to try using different variations of classes and fonts to become more comfortable with the process and learn more about their personal tastes.

* Emphasize that whenever we use a new library, framework, or technology, it's best that we familiarize ourselves with the documentation as much as possible.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice but instead  is a self-study on topics beyond the scope of this module, for those who want to further their knowledge.

## Learning Objectives

By the end of class students will be able to:

* Optimize page layouts using Bootstrap's utility classes.

* Customize pages built with Bootstrap to use custom color themes and Google Fonts.

* Use jQuery UI widgets to make the webpage more user-friendly.

* Implement jQuery UI interactions to create sortable lists.

* Use Moment.js to calculate time differences.

* Apply the inverse of a commit by using `git revert`.

## Time Tracker

| Start  | #   | Activity Name                              | Duration |
|---     |---  |---                                         |---       |
| 10:00AM| 1   | Instructor Demo: Bootstrap Utilities       | 0:05     |
| 10:05AM| 2   | Student Do: Bootstrap Utilities            | 0:15     |
| 10:20AM| 3   | Instructor Review: Bootstrap Utilities     | 0:10     |
| 10:30AM| 4   | Instructor Demo: Extend Bootstrap          | 0:05     |
| 10:35AM| 5   | Student Do: Extend Bootstrap               | 0:15     |
| 10:50AM| 6   | Instructor Review: Extend Bootstrap        | 0:10     |
| 11:00AM| 7   | Instructor Demo: Google Fonts              | 0:05     |
| 11:05AM| 8   | Student Do: Google Fonts                   | 0:15     |
| 11:20AM| 9   | Instructor Review: Google Fonts            | 0:10     |
| 11:30AM| 10  | FLEX                                       | 0:30     |
| 12:00PM| 11  | BREAK                                      | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity             | 0:10     |
| 12:40PM| 13  | Instructor Demo: jQuery UI Widgets         | 0:05     |
| 12:45PM| 14  | Student Do: jQuery UI Widgets              | 0:15     |
| 1:00PM | 15  | Instructor Review: jQuery UI Widgets       | 0:10     |
| 1:10PM | 16  | Instructor Demo: jQuery UI Interactions    | 0:05     |
| 1:15PM | 17  | Student Do: jQuery UI Interactions         | 0:15     |
| 1:30PM | 18  | Instructor Review: jQuery UI Interactions  | 0:10     |
| 1:40PM | 19  | Instructor Demo: Moment.js Format          | 0:05     |
| 1:45PM | 20  | Student Do: Moment.js Format               | 0:15     |
| 2:00PM | 21  | Instructor Review: Moment.js Format        | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                           | 0:20     |
| 2:30PM | 23  | END                                        | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Bootstrap Utilities (5 min)

* Welcome students to class.

* Open `15-Ins_Bootstrap-Utilities/index.html` in your browser and demonstrate the following:

  * 🔑 This is the same page as before, but we use Bootstrap utility classes to add some different colors.

* Open `15-Ins_Bootstrap-Utilities/index.html` in your IDE and explain the following:

  * 🔑 To achieve this updated design, we simply add in Bootstrap utility classes.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we change the color of an HTML element without changing its existing style definition?

  * 🙋 Add another class to it that defines that color style.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Bootstrap-Utilities/README.md`.

### 2. Student Do: Bootstrap Utilities (15 min)

* Direct students to the activity instructions found in `16-Stu_Bootstrap-Utilities/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Adjust Positioning and Styling on the Page

  Work with a partner to implement the following user stories:

  * As a developer, I want to be able to center the form on the page horizontally and vertically using no custom CSS.

  * As a developer, I want to be able to adjust and add style to the page without writing any custom CSS.

  ## Acceptance Criteria

  * It's done when the main content on the page is centered horizontally and vertically on the page.

  * It's done when the background color of the page is dark.

  * It's done when the background color of the form is white.

  * It's done when the text color of the header on the page is white.

  ## 📝 Notes

  Refer to the following documentation (look for Utilities in the left navigation menu):

  [Bootstrap documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A white form is centered on the page with a dark background.](./Images/01-solved-screenshot.png)

  ---

  ## 💡 Hint

  * Don't forget to use the previous examples and activities as a guide to how the classes can be used!

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * Using Chrome DevTools, what can you do to make this look more personalized? Try updating some of the more generic styles to use different colors or font sizes.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Bootstrap Utilities (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using Bootstrap utility classes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ More single-purpose classes to achieve a result.

  * ✔️ Change colors to create contrast.

  * ✔️ Proper sizing and spacing goes a long way.

* Open `16-Stu_Bootstrap-Utilities/Solved/index.html` in your IDE and explain the following:

  * 🔑 We can center a page's content vertically and horizontally by making the page have a minimum height set to the height of the page and making it a flexbox:

    ```html
    <div class="min-vh-100 d-flex align-items-center bg-dark">
    ```

  * 🔑 Bootstrap has a list of preset color classes for backgrounds and text, which can be helpful when we need some contrast on a page.

  * 🔑 The spacing properties for margin and padding can be extremely useful to create or remove space in areas instead of needing to use custom CSS.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which class was used to center the content vertically on the page, `justify-content-center` or `align-items-center`?

  * 🙋 `align-items-center`, because the term "align" is used when adjusting flexbox elements vertically in a row.

  * ☝️ Where do we think Bootstrap falls a bit short and requires us to build custom styles?

  * 🙋 The colors are preset, so we would need to use our own if we wanted to change them.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Bootstrap documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Extending Bootstrap (5 min)

* Open `17-Ins_Bootstrap-Extend/index.html` in your browser and demonstrate the following:

  * 🔑 This page is using all Bootstrap components, but with custom colors instead of the default Bootstrap colors.

  * 🔑 This is great for when we want to use Bootstrap for handling layout and certain design aspects but still need to provide a custom theme or branding.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we add custom CSS styles?

  * 🙋 Apply custom classes to the HTML elements and create our own style rules.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Bootstrap-Extend/README.md`.

### 5. Student Do: Extending Bootstrap (15 min)

* Direct students to the activity instructions found in `18-Stu_Bootstrap-Extend/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗 Add Custom Styles to the Page

  Work with a partner to implement the following user story:

  * As a user, I want to visit a site that uses a custom color theme and branding.

  ## Acceptance Criteria

  * It's done when the page is not utilizing the generic colors provided by Bootstrap.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A guestbook webpage features custom colors instead of the built-in colors provided by Bootstrap.](./Images/01-solved-screenshot.png)

  ---

  ## 💡 Hints

  * There is a color theme already available to use in `style.css`, but feel free to use [Adobe Color](https://color.adobe.com/).

  * Don't forget to use the previous example as a guide to how custom styles can be applied with CSS.

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * What are some other UI frameworks that we could use?

  To get started, try [Bulma](https://bulma.io/), [Materialize](https://materializecss.com/), and a very customizable one called [Tailwind](https://tailwindcss.com/).
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 6. Instructor Review: Extending Bootstrap (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel customizing Bootstrap with CSS? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ Add our own stylesheet.

  * ✔️ Just add another class to the HTML element.

  * ✔️ Use Bootstrap for layout and spacing but custom CSS for colors and fonts.

* Open `18-Stu_Bootstrap-Extend/Solved/index.html` in your IDE and explain the following:

  * 🔑 It's important that the stylesheet's `<link>` comes last in the HTML file, so that the styles aren't overridden.

  * 🔑 We can add our own classes to elements with Bootstrap classes to add custom CSS rules to them.

* Open `18-Stu_Bootstrap-Extend/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We were able to add custom classes to both existing HTML and any HTML created as a result of the form being submitted:

    ```js
    var cardName = $('<h5>').addClass('card-header custom-card-header').text(name);
    ```

* Remind students that Bootstrap is simply a framework with a lot of popular style needs handled for us, but not all.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ If we needed to, could we use our own custom CSS for sizing and layout purposes alongside Bootstrap?

  * 🙋 Yes! But we need to be careful not to use the same class names.

  * ☝️ Do we think it's a good idea to mix Bootstrap and custom CSS?

  * 🙋 Yes, Bootstrap is great for handling a lot of layout needs but looks generic on its own. We can, and should, add as much extra styling as we need to in order to achieve the desired result. If you find yourself making too many overriding styles, though, you might want to consider a different or custom solution.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, check DevTools to determine what styles are needed, and stay for office hours to ask for help.

* Answer any questions before proceeding to the next demo.

### 7. Instructor Demo: Google Fonts (5 min)

* Remind students how each computer has a default set of fonts that we can pick from, but over the years some services have emerged to help with providing more options.

* Open `19-Ins_Google-Fonts/index.html` in your browser and demonstrate the following:

  * 🔑 This page uses fonts that aren't native to our computers; they actually come from Google Fonts.

  * 🔑 With the use of web fonts like this, we can add even more customization and branding to an application!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we learn how to use Google Fonts?

  * 🙋 By reading their documentation.

* Navigate to [Google Fonts](https://fonts.google.com) in your browser and walk through the interface.

* Be sure to demonstrate how to select fonts and use the embed code.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Google-Fonts/README.md`.

### 8. Student Do: Google Fonts (15 min)

* Direct students to the activity instructions found in `20-Stu_Google-Fonts/README.md`.

* Break your students into pairs that will work together on this activity.

* Let them know this is a bit more open-ended of an activity, and students should feel encouraged to find and implement fonts of their choosing. This is all about learning how to implement web fonts, not necessarily which ones are right.

  ```md
  # 📖 Add Custom Font to Page with Google Fonts

  Work with a partner to implement the following user story:

  * As a user, I want to view a customized and well-designed page that uses custom colors and fonts.

  ## Acceptance Criteria

  * It's done when the page's body text uses fonts loaded from Google Fonts and not the default Bootstrap fonts.

  * It's done when the page's headings text uses fonts loaded from Google Fonts and not the default Bootstrap fonts.

  ## 📝 Notes

  Refer to the following documentation:

  [Google Fonts](https://fonts.google.com)

  ## 💡 Hints

  * Remember, this is an open-ended activity! Work with your partner to find interesting fonts of your choosing. There is no right or wrong answer to this activity.

  * There are websites that can help you pick fonts if you are overwhelmed by the options. Visit [Typewolf](https://www.typewolf.com/google-fonts) and [FontPair](https://fontpair.co/) for inspiration!

  * Don't forget to use typographic CSS properties to adjust font weights and italics if you need to!

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * How does Google develop their typography?

  You can read [Google’s design blog](https://design.google/library/google-fonts/) to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 9. Instructor Review: Google Fonts (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using Google Fonts? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ We need to start by finding a font or fonts that we want to use.

  * ✔️ Use the `<link>` provided.

  * ✔️ Don't pick too many fonts or , for performance reasons.

* Open `20-Stu_Google-Fonts/Solved/index.html` in your IDE and explain the following:

  * 🔑 It's important that we start by finding a font or fonts that we want to use, but not too many variations.

  * 🔑 We need to ensure that the Google Font `<link>` comes before our own custom stylesheet so that the fonts are loaded before we put them to use:

    ```html
    <link href="https://fonts.googleapis.com/css2?family=Karla&family=Rubik:wght@700&display=swap" rel="stylesheet">
    ```

  * We'll learn more about what the URL in the `href` value means in future lessons. All we need to know for now is that the URL holds the data needed for us to use those fonts in the stylesheet.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Did anyone pick a font that used italics or thin/thick variations? If yes, what CSS properties did you have to use?

  * 🙋 `font-style` for italic, `font-weight` for thin/thick variations.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Google Fonts documentation](https://developers.google.com/fonts/), and stay for office hours to ask for help. Like all things CSS, it's just about putting it to practice. There are also a few links included in the activity's readme to help with picking the right font.

* Answer any questions before proceeding to the end of class.

* Offer encouragement that most of what we learned today builds on things we've learned in the past. The most important thing to remember with third-party libraries is reading the documentation!

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Ask if students have any questions about the Challenge.

* Ask the students if there is anything they would like to review from Module 03 before moving on to Module 04.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open `28-Stu_Mini-Project/Solved/index.html` in your browser and demonstrate the following:

  * You will work on creating this project tracker after the break, but let's take a sneak peak at some cool features here!

  * When we click on Add Project, a modal opens up. When we get to the Due Date field, we see a calendar that pops up, which makes it easier for the user to choose a date.

  * After we add a project, we can see how many days are left until the due date.

  * Datepicker is a jQuery UI widget, and Moment.js calculates the days until the due date. We will learn more about both of these tools today!

## 13. Instructor Demo: jQuery UI Widgets (5 min)

* Open the [jQuery UI documentation on dialog](https://jqueryui.com/dialog/) in your browser and demonstrate the following:

  * 🔑 jQuery UI offers a combination of interactions, effects, widgets, utilities, and themes designed to work well together or on their own.

  * 🔑 The dialog widget is a basic dialog window that opens on top of a page and can be moved, resized, and closed. We can use it to display instructions or announcements on a page.

  * 🔑 We can click "view source" to see the code for the widget.

* Open `21-Ins_jQuery-UI-Widgets/dialog-docs.html` in your IDE and demonstrate the following:

  * Here we see the code for the dialog widget directly copied from the jQuery UI documentation. Let's go through the code and tweak it a bit.

  * We see the jQuery UI `<link>` tag in the `<head>` section:

    ```html
    <link
      rel="stylesheet"
      href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    ```

  * Next there's an imported stylesheet, but let's replace that with our own stylesheet:

    ```html
    <link rel="stylesheet" href="./assets/css/style.css" />
    ```

  * Let's also bring in Bootstrap:

    ```html
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    ```

  * We can change the title and add custom content to the `<body>`.

  * We see the jQuery UI `<script>` tags at the end of the `<head>` section. But let's move those to the bottom, after the `</body>` tag:

    ```html
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
      $(function () {
        $('#dialog').dialog();
      });
    </script>
    ```

* Open `21-Ins_jQuery-UI-Widgets/index.html` in your IDE and explain the following:

  * After we customize the dialog widget code, the resulting code can be seen in `index.html`.

  * Notice what the dialog function is doing&mdash;it is looking for an element with an id of `dialog` and applying the `.dialog()` to it.

  * We can leave this in the `index.html` file, or we can move it to a `script.js` file.

* Open `21-Ins_jQuery-UI-Widgets/index.html` in your browser and demonstrate the following:

  * After we tweak the code and customize it, here is what it looks like&mdash;we can see the Bootstrap design along with the dialog box on top.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would need to read the jQuery UI documentation to figure out how to apply the widgets to the existing page.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_jQuery-UI-Widgets/README.md`.

### 14. Student Do: jQuery UI Widgets (15 min)

* Direct students to the activity instructions found in `22-Stu_jQuery-UI-Widgets/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📖 Enhance UI with jQuery UI Widgets

Work with a partner to implement the following user stories:

* As a user, I want to easily choose a skill from a list to use in the form.

* As a user, I want to easily select a date from a datepicker instead of writing it out manually.

## Acceptance Criteria

* It's done when the form input for entering a skill has an autocomplete feature added to it, to pick from a list of skills.

* It's done when the form input for entering a date has a datepicker feature added to it, to select by month and year.

## 📝 Notes

Refer to the following documentation:

[jQuery UI demos](https://jqueryui.com/demos/)

## 💡 Hints

* You will need to add an array of skills to use with the autocomplete widget (for example, `JavaScript`, `Node.js`, `Bootstrap`, `React`, and `CSS`).

* Look for "Display month & year menus" in the list of examples on the datepicker widget page of the jQuery UI documentation.

## 🏆 Bonus

If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

* What built-in HTML feature can also help enforce a date?

Use [Google](https://www.google.com) or another search engine to answer this.
```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 15. Instructor Review: jQuery UI Widgets (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with jQuery UI widgets? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ jQuery UI `<link>` and `<script>` tags

  * ✔️ Autocomplete widget

  * ✔️ Datepicker widget

* Open `22-Stu_jQuery-UI-Widgets/Solved/index.html` in your IDE and explain the following:

  * 🔑 First, we bring in the jQuery UI `<link>` tag and put it in the `<head>`:

    ```html
    <link
      rel="stylesheet"
      href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    ```

  * 🔑 We also bring in the jQuery UI `<script>` tag and put it below the `</body>`:

    ```html
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    ```

  * Notice that we are using a separate file for the JavaScript. Let's open that now.

* Open `22-Stu_jQuery-UI-Widgets/Solved/assets/js/script.js` in your IDE and explain the following:

  * We see functions for printing the skills onto the page and handling the form submit.

  * 🔑 If we look at the [jQuery UI documentation on autocomplete](https://jqueryui.com/autocomplete/), we see that we need to create an array for the `.autocomplete()` function to find and select from. Everyone's array of skills will be different but will look something like the following example:

    ```js
    // Autocomplete widget
    $(function () {
      var skillNames = [
        'Bootstrap',
        'C',
        'C++',
        'CSS',
        'Express.js',
        'Git',
        'HTML',
        'Java',
        'JavaScript',
        'jQuery',
        'JSON',
        'MySQL',
        'Node.js',
        'NoSQL',
        'PHP',
        'Python',
        'React',
        'Ruby',
      ];
    ```

  * Then we look for the element that has an id of `skill-name` (which in this case is the `<input>` element) and apply the `.autocomplete()` function to it. It will check if what is being typed is one of the values of the `skillNames` array that we just created:

    ```js
    $('#skill-name').autocomplete({
      source: skillNames,
    });
    ```

  * 🔑 If we look at the [jQuery UI documentation on datepicker](https://jqueryui.com/datepicker/), we see that we have a lot of choices in terms of customizing it. For the purposes of this activity, we want to show the month and year in drop-downs in place of the static month/year header.

  * So we look for the ["Display month & year menus" option](https://jqueryui.com/datepicker/#dropdown-month-year) and apply the additional Boolean options:

    ```js
    // Datepicker widget
    $(function () {
      $('#datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
      });
    });
    ```

* Open `22-Stu_jQuery-UI-Widgets/Solved/index.html` in your browser and demonstrate the following:

  * We see a Skills Form; when we start typing a skill name, we can see it will autocomplete it for us.

  * Then when we are choosing the date, we can see that the calendar allows us to choose the month and year as a drop-down.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can you think of other uses for the autocomplete or datepicker widgets?

  * 🙋 We could use the autocomplete widget for entering the state field for an address. Or we could use the datepicker widget when making an appointment.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, review the [jQuery UI demos](https:\//jqueryui.com/demos/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 16. Instructor Demo: jQuery UI Interactions (5 min)

* Open the [jQuery UI documentation on sortable](https://jqueryui.com/sortable/) in your browser and demonstrate the following:

  * 🔑 Interactions add basic mouse-based behaviors to any element. We can drag and drop items or sort items in a list.

  * 🔑 The sortable interaction allows the user to reorder elements in a list or grid using the cursor. Let's try that now!

* Open `23-Ins_jQuery_UI_Interactions/sortable-docs.html` in your IDE and demonstrate the following:

  * Here we see the code for the sortable interaction taken straight from the jQuery documentation. Let's go through the code and customize it.

  * Again, let's clean up the `<head>` section by changing the `<title>`, importing our own custom stylesheet, moving the `<style>` code to that stylesheet, and moving the `<script>` tags down to the bottom of the page:

    ```html
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- Changed title -->
      <title>jQuery UI Sortable</title>
      <link
        rel="stylesheet"
        href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
      />
      <!-- Imported our own custom stylesheet -->
      <link rel="stylesheet" href="./assets/css/style.css" />
    </head>
    ```

  * In the `<body>` let's make a list of skills that we will learn through this course. Can you name some skills that you look forward to learning?

    * Take answers from the students and use them in the following example:

      ```html
      <body>
        <h1>jQuery UI Interactions - Sortable</h1>
        <h2>What are you most excited to learn more about?</h2>
        <div>
          <ul id="sortable">
            <li class="ui-state-default">
              Node.js
            </li>
            <li class="ui-state-default">
              HTML
            </li>
            <li class="ui-state-default">
              MySQL
            </li>
            <li class="ui-state-default">
              Express.js
            </li>
            <li class="ui-state-default">
              NoSQL
            </li>
            <li class="ui-state-default">
              React
            </li>
            <li class="ui-state-default">
              JavaScript
            </li>
          </ul>
        </div>
      </body>
      ```

* Open `23-Ins_jQuery_UI_Interactions/index.html` in your IDE and explain the following:

  * After we customize the sortable interaction code, the resulting code can be seen in `index.html`.

  * Notice what the sortable function is doing&mdash;it is looking for an element with an id of `sortable` and applying the `.sortable()` function to it. Right afterwards, it will `.disableSelect()`:

    ```html
    <script>
      $(function () {
        $('#sortable').sortable();
        $('#sortable').disableSelection();
      });
    </script>
    ```

  * Again, we can leave this in the `index.html` file, or we can move it to a `script.js` file.

* Open `23-Ins_jQuery_UI_Interactions/index.html` in your browser and demonstrate the following:

  * Here we see the list of skills that we are most excited to learn more about.

  * We can order them any way we want, by dragging them up and down the list.

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How would we build this?

  * 🙋 We will need to read the jQuery UI documentation to figure out how to apply the interaction we want to the existing page.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_jQuery-UI-Interactions/README.md`.

### 17. Student Do: jQuery UI Interactions (15 min)

* Direct students to the activity instructions found in `24-Stu_jQuery-UI-Interactions/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📖 Implement a Sortable List with Drag and Drop

Work with a partner to implement the following user story:

* As a user, I want to be able to sort my list of skills using the cursor to drag and drop them.

## Acceptance Criteria

* It's done when the list of skills can be reorganized and sorted using drag-and-drop functionality.

* It's done when a placeholder is filling empty space.

## 📝 Notes

Refer to the following documentation:

[jQuery UI demos](https://jqueryui.com/demos/)

## 💡 Hint

* Think about which interaction will allow a user to drag an element to a new spot on the list.

## 🏆 Bonus

If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

* Can we implement drag-and-drop functionality without jQuery?

Use [Google](https://www.google.com) or another search engine to research this.
```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 18. Instructor Review: jQuery UI Interactions (10 min)

* Ask the class the following question (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with jQuery UI interactions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ Sortable interaction

  * ✔️ `placeholder` option

* Open `24-Stu_jQuery-UI-Interactions/Solved/assets/js/script.js` in your IDE and explain the following:

  * According to the [jQuery UI documentation on sortable](https://jqueryui.com/sortable), to allow the user to drag and reorder the skills listed under List of Skills, we need to use the sortable interaction.

  * 🔑 We look for the element that has an id of `skills-list`, which is the List of Skills that will get populated by the user, and apply the `.sortable()` function to it:

    ```js
    $(function () {
      $('#skills-list').sortable();
      $('#skills-list').disableSelection();
    });
    ```

  * 🔑 However, we also want to add the option of seeing the whitespace between the items shifting. According to the ["Drop placeholder" option](https://jqueryui.com/sortable/#placeholder), we can do just that:

    ```js
    $(function () {
      $('#skills-list').sortable({
        placeholder: 'ui-state-highlight',
      });
        $('#skills-list').disableSelection();
    });
    ```

* Open `24-Stu_jQuery-UI-Interactions/Solved/index.html` in your browser and demonstrate the following:

  * We see the same Skills Form as the previous activity. Let's go ahead and add some skills to the List of Skills.

  * Now when we want to order the list, we can drag and drop the skills, and we see a yellow placeholder box underneath.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between the sortable interaction and the draggable and droppable interactions?

  * 🙋 The draggable interaction allows you to move an item anywhere on the screen. The droppable interaction is similar, but you need to drag the item and drop it on a target.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, review the [jQuery UI demos](https://jqueryui.com/demos/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 19. Instructor Demo: Moment.js Format (5 min)

* Open the [Moment.js documentation on format](https://momentjs.com/docs/#/displaying/) in your browser and explain the following:

  * `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. It is still functional and widely used, which is why we are covering it in this activity. But feel free to explore other options!

  * 🔑 We use `moment().format()` to format dates and times. We can format the date and time in many ways.

* Open `25-Ins_Moment-Format/index.html` in your browser and demonstrate the following:

  * 🔑 We see questions about the date and time, and they are answered according to the current date and time.

* Open `25-Ins_Moment-Format/index.html` in your IDE and observe the following:

  * Here we only see the questions printed to the screen. The answers were calculated in `script.js`.

* Open `25-Ins_Moment-Format/assets/js/script.js` in your IDE and explain the following:

  * First we need to create a Moment object for today. We will use this in all of the answers. We can do so with the following code:

    ```js
    var today = moment();
    ```

  * For the answer to the first question, we format the moment object `today` to use `MM Do, YYYY` format:

  ```js
    $("#1a").text(today.format("MMM Do, YYYY"));
    ```

  * For the second question, we format `today` to say which day of the week it is using `dddd`:

    ```js
    var dayWeek = today.format("[Today is] dddd")
    $("#2a").text(dayWeek);
    ```

  * For the third question, we parse the 11/3/2020 and reformat it into `dddd, MMMM Do YYYY, h:mm:ss a` format:

    ```js
    var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#3a").text(reformatDate);
    ```

  * Lastly, we determine what week of the year we fall on right now, and use a `if/else` statement to determine if it is odd or even. Then we print to the screen a boolean along with the current week number:

    ```js
    var weekNum = today.format("w");
    var takeOut;
    // Check odd, then assign boolean
    if(weekNum % 2) {
      takeOut = true;
    } else {
      takeOut = false;
    }

    $("#4a").text(takeOut + ", because it's currently week " + weekNum);
    ```

* Ask the class the following question (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We will need to read the Moment.js documentation to figure out how to use Moment.js to format the date and time.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Moment-Format/README.md`.

### 20. Student Do: Moment.js Format (15 min)

* Direct students to the activity instructions found in `26-Stu_Moment-Format/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📖 Create Solutions to the Date Quiz

Work with a partner to implement the following user story:

* As a user, I want to be able to view the correct answers to multiple questions about dates and time.

## Acceptance Criteria

* It's done when every question prompt on the page is correctly answered and displayed in the correct format using Moment.js.

## 📝 Notes

Refer to the following documentation:

[Moment.js Docs](https://momentjs.com/docs/#/displaying/)

**Note**: `Moment.js` has historically been the most popular date/time library, but is now no longer supported by its developers. It is still functional and widely used, which is why we are introducing it through this module.

## 💡 Hints

* Refer to the official [Moment.js docs on parsing](https://momentjs.com/docs/#/parsing/) to format ISO 8601 strings.

* Follow the instructions provided by the comments in the starter code to format the date that answers the questions and assign them to the declared variable provided.

* Save often and check [index.html](Unsolved/index.html) in your browser to see your progress.

## 🏆 Bonus

If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

* How can we measure the difference between two time stamps with `Moment.js`? Read the [Moment.js Docs](https://momentjs.com/docs/) to research how this works.
```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 21. Instructor Review: Moment.js Format (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Moment.js? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ Formatting given date

  * ✔️ Formatting current date

  * ✔️ Formatting Unix timestamp

* Open `26-Stu_Moment-Format/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 The first two questions require us to format a given date. We parse the date that needs to be reformatted and then specify how we want to display the date. We could've used any date for the graduation date. The code will look something like the following example:

    ```js
    var gradDate = moment("2021-06-15").format("MMM Do, YYYY");

    var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
    ```

  * 🔑 The next questions require us to format the current date and time. We use `moment()` for the current date and time, then specify how we want to display it:

    ```js
    var dayYear = moment().format("DDD");

    var time = moment().format("hh:mm:ss");

    var unix = moment().format("X");
    ```

  * For the last question, we had to parse the Unix timestamp and convert it to date and time:

    ```js
    var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we add words other than the formatted date to be displayed on the screen?

  * 🙋 We can use `[]` brackets. For example, if today is Saturday, then `moment().format("[Today is] dddd")` will display the full string "Today is Saturday".

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Moment.js Documentation](https://momentjs.com/docs/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Revert/README.md`.

## 22. Everyone Do: Git (20 min)

* Open the [Git documentation on git revert](https://git-scm.com/docs/git-revert) in your browser and explain the following:

  * As you work with your teammates on projects and other collaborative assignments, there will be times when you might wish that you could undo a commit.

  * `git revert` isn't exactly an undo operation, but it will figure out how to invert the changes introduced by the commit and then append a new commit with the resulting inverse content. This way you are not losing any history, which is very important for the integrity of your revision history and for reliable collaboration with others.

  * Let's say that you are working with your classmates on a project and you are trying to fix a bug. You find out that the bug was caused by a single commit. You can use `git revert` to go fix it and commit a new snapshot.

* Direct students to the activity instructions found in `27-Evr_Git-Revert/README.md`.

* While everyone is working on the activity, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. This is a good way for your team to prioritize students that need extra help.

* If necessary, you can review the activity with students.

* Open your command line, create a new directory, `cd` into it, and initialize a Git repo there:

  ```bash
  mkdir git_revert_demo
  cd git_revert_demo
  git init .
  ```

* Open the `git_revert_demo` directory in your IDE and copy the `27-Evr_Git-Revert/script.js` file into it.

* Let students know that we are taking the `script.js` file from the jQuery UI activity.

  * Before we test out the `git revert` command, we will need to make a few commits. Let's make the initial commit as follows:

    ```bash
    git add -A
    git commit -m 'initial commit'
    ```

  * Then we'll add the autocomplete widget to `script.js`:

    ```js
    // Autocomplete widget
    $(function () {
      var skillNames = [
        'Bootstrap',
        'C',
        'C++',
        'CSS',
        'Express.js',
        'Git',
        'HTML',
        'Java',
        'JavaScript',
        'jQuery',
        'JSON',
        'MySQL',
        'Node.js',
        'NoSQL',
        'PHP',
        'Python',
        'React',
        'Ruby',
      ];
      $('#skill-name').autocomplete({
        source: skillNames,
      });
    });
    ```

  * Then we commit the new code:

    ```bash
    git add -A
    git commit -m 'added Autocomplete widget'
    ```

  * We'll add the datepicker widget:

    ```js
    // Datepicker widget
    $(function () {
      $('#datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
      });
    });
    ```

  * We commit the new code:

    ```bash
    git add -A
    git commit -m 'added Datepicker widget'
    ```

  * Lastly, we'll add the sortable interaction:

    ```js
    // Sortable interaction
    $(function () {
      $('#skills-list').sortable({
        placeholder: 'ui-state-highlight',
      });
      $('#skills-list').disableSelection();
    });
    ```

  * We commit again:

      ```bash
      git add -A
      git commit -m 'added Sortable interaction'
      ```

* Enter `git log` into your terminal to display the commit history for students.

  * 🔑 We see all four commits when we invoke `git log`. We can use `git revert <commit hash>` to revert back to before we made the commit that matches the commit hash.

* Copy the most recent commit hash from the log of commits in your terminal.

  * 🔑 Once we find the correct commit hash, we can copy the commit hash and use it in the git command, `git revert <commit hash>`. It should look something like this:

    ```bash
    git revert 601e2affb5fca3addd898cb09ef950c562338823
    ```

  * This will create a new commit, which will open the commit message editor prompting for a new commit message.

* Demonstrate to students how to `esc`, `Shift + Z`, and `Shift + Z` to exit out of the message editor.

* Open `script.js` in your IDE:

  * When we check the `script.js` file, we see that the sortable interaction is indeed gone.

* Run `git log` in your terminal and demonstrate the following:

  * We see that have a record of all the commits in the project history.

  * 🔑 We can also pass in `HEAD` instead of the commit hash, which will instead revert the latest commit:

    ```bash
    git revert HEAD
    ```

  * This action creates another new commit, which will again open the commit message editor prompting for a new commit message. We can press `esc`, `Shift + Z`, and `Shift + Z` to exit out of the message editor.

* Run `git log` in your terminal and demonstrate the following:

  * When we run `git log`, we can see the automatically generated commit messages for both of our revert commands.

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
