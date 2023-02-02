# 01.2 Full-Time Lesson Plan: HTML, CSS, and Git

## Overview

In today's class, students will be continue working with HTML and be introduced to CSS, the fundamental technologies used to structure and style a webpage. Students will also learn about web accessibility and semantic HTML tags. Towards the end of the lesson, students will delve further into CSS. Students will be introduced to the box model and learn how to customize layout using the `display` and `position` properties.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_CSS-color` through `21-Evr_Git-Guide`.

* Be ready to view and edit CSS in Chrome DevTools. If you need a quick refresher, refer to the [Google documentation on viewing and changing CSS](https://developers.google.com/web/tools/chrome-devtools/css).


* During activities, encourage students to refer to the provided user stories and acceptance criteria&mdash;as introduced in the previous class&mdash;to identify the user's goal and the conditions that must be met for the solution to be accepted. Doing so will help reinforce their computational thinking skills and set them up for success in future coding challenges.

* If students do not have the required tools set up on their local machines, refer them to office hours for assistance. A list of required tools and resources can be found in the [01.1 Lesson Plan](../01-Day/01-Day-LessonPlan.md).

* For the `Everyone Do: Git` activity, be prepared to demonstrate configuring the local Git default branch to `main` as well as creating a Git repository using `git init`. You might want to review [Git Basics—Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) prior to class, so that you can handle student questions as they arise.

* Help students do a `git pull` of the class repository to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Add custom color and fonts to a webpage using CSS properties.

* Select an HTML element to style using CSS selectors.

* Link a CSS style sheet to an HTML file.

* Set an element as an inline or block element using the CSS `display` property.

* Determine how an element is positioned in an HTML document using the CSS `position` property.

* Identify the box model and its role in web design and layout.

* Configure a local Git default branch.

* Initialize a local repository using `git init`.

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 10:00AM| 1   | Instructor Demo: Color              | 0:05     |
| 10:05AM| 2   | Student Do: Color                   | 0:15     |
| 10:20AM| 3   | Instructor Review: Color            | 0:10     |
| 10:30AM| 4   | Instructor Demo: Units and Font     | 0:05     |
| 10:35AM| 5   | Student Do:  Units and Font         | 0:15     |
| 10:50AM| 6   | Instructor Review: Units and Font   | 0:10     |
| 11:00AM| 7   | Instructor Demo: Selectors          | 0:05     |
| 11:05AM| 8   | Student Do:  Selectors              | 0:15     |
| 11:20AM| 9   | Instructor Review: Selectors        | 0:10     |
| 11:30AM| 10  | FLEX                                | 0:30     |
| 12:00PM| 11  | BREAK                               | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:40PM| 13  | Instructor Demo: HTML Display       | 0:05     |
| 12:45PM| 14  | Student Do: HTML Display            | 0:15     |
| 1:00PM | 15  | Instructor Review: HTML Display     | 0:10     |
| 1:10PM | 16  | Instructor Demo: CSS Box Model      | 0:05     |
| 1:15PM | 17  | Student Do: CSS Box Model           | 0:15     |
| 1:30PM | 18  | Instructor Review: CSS Box Model    | 0:10     |
| 1:40PM | 19  | Instructor Demo: CSS Positioning    | 0:05     |
| 1:45PM | 20  | Student Do: CSS Positioning         | 0:15     |
| 2:00PM | 21  | Instructor Review: CSS Positioning  | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                    | 0:20     |
| 2:30PM | 23  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Color (5 min)

* Welcome students to class.

* Open `09-Ins-CSS-Color/index.html` in your browser and demonstrate the following:

  * Color is one key way that web developers can add style and personality to a webpage. We can add color to HTML elements using CSS.

* Open `09-Ins-CSS-Color/index.html` in your IDE and demonstrate the following:

  * We have to set up the HTML before we can write the CSS to add color to the page.

  * 🔑 Like before, we use a `<link>` element inside the `<head>` to link the CSS style sheet to the HTML. Remember, `href` specifies the relative path to the CSS file, and the `rel` attribute defines the relationship:

    ```html
    <link rel="stylesheet" href="./assets/css/style.css">
    ```

  * As previously explained, we use `class` attributes to identify multiple elements for CSS styling:

      ```html
      <section class="lesson box-orange">
      ```

  * And we use `id` to select a unique element for styling&mdash;which can be useful if we want to apply certain styling to only one specific element on the page:

    ```html
    <section class="lesson" id="box-yellow">
    ```

* Open `09-Ins-CSS-Color/assets/style.css` in your browser and demonstrate the following:

  * 🔑 Again, a style sheet is a list of CSS properties that defines how HTML elements will be displayed.

  * 🔑 Each rule block comprises a selector that indicates the element or elements you want to style and the CSS properties to be applied. The name of the selector will match the name of the `class` or `id` attribute in your HTML. A `.` precedes the name of a class. A `#` precedes the id:

    ```css
    .lesson {
      width: 200px;
      height: 200px;
    }
    ```

  * 🔑 We use the `color` CSS property to change the color of the text on a page. We use the `background-color` CSS property to add color to the entire width and height of the element:

    ```css
    .box-blue {
      color: white;
      background-color: #0000ff;
    }
    ```

  * There are numerous ways to specify the colors that we want.

  * 🔑 We can specify a predefined color:

    ```css
    #box-yellow {
      color: purple;
      background-color: yellow;
    };
    ```

  * 🔑 Or we can use a hexadecimal code for a more specific color choice:

    ```css
    .box-orange {
      color: #0000ff;
      background-color: #ffa500;
    }
    ```

   * We can also make comments when writing CSS. To make a comment in CSS, we use the following syntax:

   ```css
   /* Sets the height and width of the section */
   ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use CSS to add color to webpages?

  * 🙋 We use the CSS properties `color` and `background-color` to apply colors to the HTML elements. We can specify predefined colors or use hex codes.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_CSS-Color/README.md`.

### 2. Student Do: Color (15 min)

* Direct students to the activity instructions found in `10-Stu_CSS-Color/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Add Color to HTML Page Using CSS

  Work with a partner to implement the following user story:

  * As a developer, I want to use CSS to style my HTML page.

  ## Acceptance Criteria

  * It's done when the HTML page has been linked with the external CSS style sheet.

  * It's done when `Section 1` has a background color of purple and the text is yellow.

  * It's done when `Section 2` and `Section 3` have a background color of blue and the text is orange.

  * It's done when the `container` has a background color of black.

  * It's done when `Section 4` and `Section 5` have a text color of white.

  * It's done when `Section 6` has a text color of yellow.

  * It's done when the finished page matches the mockup.

  ## 📝 Notes

  Refer to the documentation:

  [MDN Web Docs on color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

  [MDN Web Docs on getting started With CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A webpage features colored blocks that represent six sections, each displaying different background and text colors.](./assets/image-1.png)

  ---

  ## 💡 Hints

  How can we use the `<link>` element inside the `<head>` to connect the HTML to the CSS?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we use color to help make your website accessible to users? What color combinations should be avoided?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Color (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using CSS to add color to your webpage? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `<link>`

  * ✔️ `color`

  * ✔️ `background-color`

* Open `10-Stu_CSS-Color/Solved/index.html` in your IDE and explain the following:

  * 🔑 We use a `<link>` element with an `href` attribute that indicates the relative path to connect the CSS to the HTML:

    ```html
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
    ```

  * We use `class` attributes to identify groups of elements that we want to style. To apply the style to just one unique element, we can use an `id` attribute:

    ```html
    <section class="lesson" id="section-1">
    ```

* Open `10-Stu_CSS-Color/Solved/assets/css/style.css` in your IDE and explain the following:

  * 🔑 We add the CSS property `color` to change the font color of `section-1` to yellow, and we add the `background-color` property to change the background to purple. We can either specify predefined colors or use hex codes:

    ```css
    #section-1 {
      color: #ffff00;
      background-color: #800080;
    }
    ```

  * 🔑 We want to apply the same styling to `Section 2` and `Section 3`. Using a `class` allows us to write a single rule block and apply it to multiple elements:

    ```css
    .section-blue {
      color: #ffa500;
      background-color: #0000FF;
    }
    ```

  * We use the `color` property to set the text color of the `container` to white. This will set the font color for `Section 4`, `Section 5`, and `Section 6` to white as well because they are nested inside the container. We also set the background color to black:

    ```css
    .container {
      color: white;
      background-color: black;
    }
    ```

* 🔑 By using a unique `id`, we can set the font of `Section 6` to yellow without changing any other elements:

  ```css
  #section-6 {
    color: #ffff00;
  }
  ```

* We also use an `id` attribute to apply styling only to `Section 1`. This will make the background color purple and the text yellow. No other elements will be changed:

  ```css
  #section-1 {
    color: #ffff00;
    background-color: #800080;
  }
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `background-color` and `color`?

  * 🙋 We use `background-color` to set the background color of the element. We use `color` to set the font color.

  * ☝️ Why would we want to use a hex code instead of a predefined color?

  * 🙋 Both hex codes and predefined colors will add styling to your elements, but hex codes offer a wider selection of colors&mdash;which can come in handy when you want to customize your design.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Units and Fonts (5 min)

* Open `11-Ins_CSS-units-font/index.html` in your browser and explain the following:

  * We can use CSS to do much more than add color to elements. We can also use it to change the font to help create a custom style.

* Open `11-Ins_CSS-units-font/assets/css/style.css` in your IDE and demonstrate the following:

  * Adding a font style to your webpage can be as simple as adding another CSS property to an existing rule block:

    ```css
    .container {
      font-family: "Lucida Console", Monaco, monospace;
      color: white;
      background-color: black;
    }
    ```

  * You can use the `font-family` CSS property to specify the font style for an element. The first font listed should always be your first choice. If that font is not available, the browser will display the next font listed. Finally, you should always end the `font-family` declaration with a more generic family, like `monospace`, so that the browser can pick a similar font if your choices cannot be rendered:

      ```css
      font-family: "Lucida Console", Monaco, monospace;
      ```

  * The `line-height` property takes a length value, to set the distance between lines of text. We use `px` to represent roughly the width and height of a single dot, or pixel, that can easily be seen by the human eye. One inch equates to roughly 96px:

    ```css
    .section-blue {
      line-height: 100px;
      color: #ffa500;
      background-color: #0000FF;
    }
    ```

  * We can also use `px` to set a font size for the text:

    ```css
    #section-1 {
      font-size: 26px;
      color: #ffff00;
      background-color: #800080;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we add custom font styles to the webpage?

  * 🙋 We can use `font-family` to set a custom font type and `line-height` to change the amount of space between the text. We can also use `font-size` to make the fonts bigger or smaller.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_CSS-units-font/README.md`.

### 5. Student Do: Units and Fonts (15 min)

* Direct students to the activity instructions found in `12-Stu_CSS-units-font/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 CSS Styling Not Applied to HTML Elements

  Work with a partner to resolve the following issues:

  * Users should be able to see styling applied to HTML elements when the page is opened.

  ## Expected Behavior

  * Each section should have a background color of `#fffacd`, and the font family `"Lucida Sans Unicode", "Lucida Grande", sans-serif` should be specified.

  * The `fact-1` paragraph should be bold.

  * The `fact-2` paragraph should have a font size of 24px.

  * The `fact-3` paragraph should have a line height of 50px.

  * The finished page should match the mockup.

  ## Actual Behavior

  When a user opens the page, no styling is visible.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Beneath a heading labeled "Fun Facts," subheadings list  topics above paragraphs of different font sizes, all on yellow backgrounds.](./assets/image-1.png)

  ---

  ## 💡 Hints

  How can you use the global attributes `id` and `class` with CSS to style elements?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other ways that you can use CSS properties to style text?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: Units and Fonts (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with units and fonts? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `<link>`

  * ✔️ `font-family`

  * ✔️ `line-height`

  * ✔️ `font-size`

* Open `12-Stu_CSS-units-font/Solved/index.html` in your IDE and explain the following:

  * 🔑 For this activity, you were asked to debug a broken webpage where no styles were being displayed&mdash;a common development problem. When this happens, first check that your HTML and CSS are actually linked.

  * Adding a `<link>` element will connect the HTML and CSS and allow the styles to display:

    ```html
    <link rel="stylesheet" href="./assets/css/style.css">
    ```

  * 🔑 It is also important to check that the styles that you want to use have matching `class` and `id` attributes applied to the HTML elements.

  * We add the missing `id` and `class` attributes on the HTML elements so that the styles can display:

    ```html
    <section class="lesson">
      <h2>Baby Spiders</h2>
      <p id="fact-1">A baby spider is called a spiderling 🕷️.</p>
    </section>

    <section class="lesson">
      <h2>Beds</h2>
      <p id="fact-2">The word "bed" looks like a bed 🛏️.</p>
    </section>

    <section class="lesson">
      <h2>Powerful Squirrels</h2>
      <p id="fact-3">Approximately 10-20% of US power outages 🔌 are caused by squirrels 🐿️.</p>
    </section>
    ```

* Open `12-Stu_CSS-units-font/Solved/assets/css/style.css` in your IDE and explain the following:

  * Now that the HTML is properly set up, we can add the styles needed so the font styles are displayed.

  * 🔑 We add a `font-family` property to the `section` rule block, applying this font family to all sections that have the `lesson` class:

    ```css
    .lesson {
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      background-color: #fffacd;
    }
    ```

  * 🔑 We add a `font-size` property to `fact-2` and set the size to `24px`:

    ```css
    #fact-2 {
      font-size: 24px;
    }
    ```

  * 🔑 Finally, we add a `line-height` property to `fact-3` and set the line height to `50px`. That is roughly half an inch:

    ```css
    #fact-3 {
      line-height: 50px;
    }
    ```

* Open `12-Stu_CSS-units-font/Solved/index.html` in the browser and demonstrate the following:

  * To test that the page is now displaying properly and all the styles are allowed, we can open the webpage in the browser.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What should we do first if no styles are displaying on the page?

  * 🙋 We should check that the HTML file and CSS style sheet are properly linked.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on styling text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Selectors (5 min)

* Open `13-Ins_CSS-selectors/index.html` in your browser and demonstrate the following:

  * So far, we have focused on using `class` and `id` to select and style HTML elements. Alternatively, we can use a range of selectors to style the webpage&mdash;for an identical result in the browser.

* Open `13-Ins_CSS-selectors/assets/css/style.css` in your IDE and demonstrate the following:

  * We use a **universal selector** to apply a style to all the elements on a page:

    ```css
    * {
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    }
    ```

  * We can also select by the element's tag name, which will apply the styles to all the elements with that name and any elements nested in that element. This approach allows us to apply the same font size to all the paragraphs or determine a uniform height and width for all sections:

    ```css
    section {
      height: 200px;
      width: 300px;
    }

    p {
      font-size: 60px;
      line-height: 200px;
    }
    ```

  * We have already been using **class selectors**! Class selectors select all the elements that have that class attribute attached:

    ```css
    .box-blue {
      color: white;
      background-color: blue;
    }
    ```

  * We have also been using **id selectors**. Id selectors apply a style to a single element:

    ```css
    #box-orange {
      color: blue;
      background-color: orange;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some ways that we can select and style elements with CSS?

  * 🙋 We can use universal, element, class, and id selectors to select and style elements.

  * ☝️ Why would you pick one selector over another?

  * 🙋 Although selectors do not change how the styles display on the page, we can choose selectors with a purpose in mind. If we want to style all the elements, we can use a universal selector. If we want to style only one specific element, we might choose an id selector.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_CSS-Selectors/README.md`

### 8. Student Do: Selectors (15 min)

* Direct students to the activity instructions found in `14-Stu_CSS-Selectors/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of CSS Selectors

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/assets/css/style.css).

  ## 📝 Notes

  Refer to the documentation:

  [MDN Web Docs on HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

  [MDN Web Docs on attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute)

  [MDN Web Docs on CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are pseudo-class selectors?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: Selectors (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with selectors? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Universal selectors

  * ✔️ Element selectors

  * ✔️ Class selectors

  * ✔️ Id selectors

* Open `14-Ins_CSS-selectors/Solved/assets/css/style.css` in your IDE and explain the following:

  * For this activity, you were asked to provide comments on existing code, allowing you to solidify your understanding and practice explaining code in plain language.

  * 🔑 For this code snippet, you might write a comment that explains that because this is a universal selector, the font family will be applied to all the elements on the page:

    ```css
    * {
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    }
    ```

  * 🔑 This element selector applies a background color to the body element:

    ```css
    body {
      background-color: lemonchiffon;
    }
    ```

  * This rule block looks different because there are two selectors. When rule blocks have more than one selector, the styling will apply to all the elements of both selectors. (If code looks unfamiliar, it is a good opportunity to check the documentation.)

    ```css
    header,
    footer {
      width: 100%;
      height: 100px;
      line-height: 100px;
      color: #f0ead6;
      background-color: #191970;
    }
    ```

  * 🔑 We use a class selector to select all the HTML elements with that class attribute. To specify that the selector is a class selector, we place a `.` in front of the name in the CSS:

    ```css
    .highlighted-text {
      font-weight: bolder;
    }
    ```

  * 🔑 We use an id selector to select a single element. The style will be applied to that element alone:

    ```css
    #contact-section {
      background-color: #f0ead6;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do selectors help us style code?

  * 🙋 Selectors define the elements to which a set of CSS rules apply. Universal selectors will apply styles to all the elements on the page, while id selectors will style on a single element. We pick the selectors based on the specificity required.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), and stay for office hours to ask for help.

* Answer any questions before proceeding to flex time.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module.

* Ask the students if they have any questions about what we've learned so far.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Explain that web developers often rely on tools to help troubleshoot issues and build pages faster.

* One of the most powerful development tools is available right in your web browser!

* Open `22-Stu_Mini-Project/Main/index.html` in your browser to demonstrate the following.

* Open Chrome DevTools by pressing Command+Option+J (Mac) or Ctrl+Shift+J (Windows, Linux, Chrome OS).

* Tell the students that Chrome DevTools has many useful features for debugging and even experimenting with the code in the browser.

* Navigate to the Styles tab on the Elements panel and note the CSS listed in the panel.

* Point the cursor at a CSS property and click to uncheck the box. Note the style change on the webpage.

* Change the `background-color` property in the body to `purple` to further demonstrate how you can manually change a value.

* Explain that changing CSS in the browser is a great way to experiment with style properties.

* You can also check an element's accessibility by simply pointing the cursor at the image.

* Select the pointer icon and then point at an element on the page. A box should indicate details about the element's accessibility, including the role that it should fulfill (like link, header, or image) to be properly read by an accessibility device. If applicable, a contrast score will also be indicated.

* Note that having enough contrast between colors helps ensure that your page is viewable to a range of users. Chrome DevTools is an easy way to check whether your page is readable.

* Encourage students to experiment with Chrome DevTools as they build their own projects later in the class.

## 13. Instructor Demo: Display (5 min)

* Open `15-Ins_HTML-display/index.html` in your browser and demonstrate the following:

  * We use the `display` property to set whether an element behaves as an inline or a block element.

  * 🔑 **Inline elements** only occupy as much width as needed and do not automatically start a new line.

  * Images and `<a>` elements are examples of inline elements.

  * 🔑 **Block elements** always start on a new line and occupy as much width as there is available.

  * Paragraph and unordered lists are examples of block elements.

  * We can also use `display` to hide an element.

* Open `15-Ins_HTML-display/assets/css/style.css` in your IDE and demonstrate the following:

  * We use `display: block` to indicate a block element, which will occupy the whole width available:

    ```css
    .display-block {
      display: block;
    }
    ```

  * We use `display: inline` to indicate an inline element, which will only occupy the necessary width:

    ```css
    .display-inline {
      display: inline;
    }
    ```

  * We use `display: none` to completely remove an image so that it does not appear on the page and no longer occupies space in the layout:

    ```css
    .display-none {
      display: none;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between an inline and a block element?

  * 🙋 An inline element will only occupy as much width as necessary. In contrast, a block element will occupy as much width as there is available.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_HTML-display/README.md`.
### 14. Student Do: Display (15 min)

* Direct students to the activity instructions found in `16-Stu_HTML-display/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 List Items and Boxes Are Not Displaying Correctly

  Work with a partner to resolve the following issues:

  * Users should be able to see a horizontal navigation bar with three list items side-by-side.

  * Users should be able to see three boxes.

  * Users should be able to see the boxes centered and stacked on top of each other.

  ## Expected Behavior

  * All three list items in the navigation bar should display inline.

  * All three boxes should be visible.

  * Each box should appear centered and on its own line.

  ## Actual Behavior

  * Each list item in the navigation bar displays on its own line.

  * Two boxes are visible, and one is not displayed.

  * The two visible boxes display inline and aligned to the left.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Three list items are displayed on the right side of the navigation bar, corresponding with three boxes centered on the page.](./assets/image-1.png)

  ---

  ## 💡 Hints

  Which `display` value hides an element?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the CSS `visibility` property? How is it different from the `display` property?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Display (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using display? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `display: inline`

  * ✔️ `display: block`

  * ✔️ `display: none`

* Open `16-Stu_HTML-Display/Solved/assets/css/style.css` in your IDE and explain the following:

  * In this activity, we are asked to debug broken code to meet the user's goals&mdash;as stated in the user story&mdash;and ensure that the app behaves as expected.

  * 🔑 Currently, each list item in the navigation bar displays on its own line. To meet the expected behavior, we set the `display` property to `inline`:

    ```css
    li {
      display: inline;
      ...
    }
    ```

  * The boxes are images that currently display inline. To set them as block elements, we use `display: block`:

    ```css
    img {
      display: block;
      margin: 0 auto;
    }
    ```

  * 🔑 The third box, `image-3`, is set to `display: none`. This means that the box is not visible and is not taking up space. To make the box visible and match the expected behavior, we use `display: block`:

    ```css
    #image-3 {
      display: block;
    }
    ```

* Open `16-Stu_HTML-Display/index.html` in your browser and explain the following:

  * We open the webpage in the browser to confirm that it now meets the expected behavior!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use the `display` property to change how an element appears on the page?

  * 🙋 We can set an element to `display: inline` so that it only occupies as much width as necessary. We can set an element to `display: block` so that it occupies the entire width available. Finally, we can use `display: none` to completely remove an item.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on display](https://developer.mozilla.org/en-US/docs/Web/CSS/display), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.
## 16. Instructor Demo: Box Model (5 min)

* Open `17-Ins_CSS-box-model/index.html` in your browser and demonstrate the following:

  * In HTML, all elements are boxes. We use the **box model** to describe the amount of space that each element will occupy.

  * The innermost layer of the box is the content itself. The content has height and width.

  * The next layer is the **padding** that surrounds the content. We use CSS to set the width of the padding.

  * The **border** surrounds the padding. Like the padding, the width of the border is set by CSS.

  * Finally, the **margin** is the area outside the border.

* Open `17-Ins_CSS-box-model/assets/css/style.css` in your browser and demonstrate the following:

  * We use CSS to set the width of the padding, border, and margins.

  * The CSS `padding` property sets the width of the padding. In this case, all sides will have a width of 20px:

    ```css
    padding: 20px;
    ```

  * The CSS `border` property sets the width of the border, the type of the border, and the color:

    ```css
    border: 10px solid darkblue;
    ```

  * The CSS `margin` property sets the width of the margin. The margin on each side is 20px here:

    ```css
    margin: 20px;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the four components of the box model?

  * 🙋 The content, padding, border, and margin.

  * ☝️ How can the box model help us understand layout and design?

  * 🙋 The box model explains how much space an element will occupy on a page, which can inform the overall layout and design.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_CSS-box-model/README.md`.

### 17. Student Do: Box Model (15 min)

* Direct students to the activity instructions found in `18-Stu_CSS-box-model/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement CSS Box Model Properties to Design Layout

  Work with a partner to implement the following user story:

  * As a developer, I want to use the CSS box model properties to position four boxes inside a frame.

  ## Acceptance Criteria

  * It's done when each box has a defined `padding` property.

  * It's done when each box has a defined `margin` property.

  * It's done when each box has a defined `border` property.

  * It's done when the finished page matches the mockup.

  ## 📝 Notes

  Refer to the documentation:

  [MDN Web Docs on CSS basic box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)

  [MDN Web Docs on padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

  [MDN Web Docs on margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

  [MDN Web Docs on border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Four numbered, differently colored boxes appear evenly spaced inside a larger box.](./assets/image-1.png)

  ---

  ## 💡 Hints

  How can we use the `margin` property to define space between elements?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the CSS `float` property?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Box Model (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the box model? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `margin`

  * ✔️ `padding`

  * ✔️ `border`

* Open `18-Stu_CSS-box-model/Solved/assets/css/style.css` in your IDE and explain the following:

  * To meet the acceptance criteria, we must center all four images inside the box.

  * The box has a width of 600px and a height of 600px. For the images to fit inside the box, the total combined space they occupy&mdash;including the content, padding, border, and margin&mdash;will have to be less than that:

    ```css
    section {
      width: 600px;
      height: 600px;
      text-align: center;
      border: 15px solid black;
    }
    ```

  * The width and height of the content is 200px:

    ```css
    width: 200px;
    height: 200px;
    ```

  * 🔑 First we set the margin on every side to 20px:

    ```css
    margin: 20px;
    ```

  * 🔑 We set the padding to 20px as well:

    ```css
    padding: 20px;
    ```

  * 🔑 Finally, we set the width of the border to 9px, make it a solid border, and give it a color of dark blue:

    ```css
    border: 9px solid darkblue;
    ```

* Open `18-Stu_CSS-box-model/Solved/index.html` in your browser and explain the following:

  * The total width of the image is now 20px (left margin) + 9px (border) + 20px (left padding) + 200px (image) + 20px (right padding) + 9px (border) + 20px (right margin)&mdash;for a total of 298px.

  * The total height of the image is also 298px.

  * Because the width of the containing box is 600px and the height is 600px, the boxes fit evenly.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between the padding and margin?

  * 🙋 The padding is the space between the content and the border. Padding surrounds the content. Margins determine the space surrounding an element. Both are often adjusted to make an element fit in a space.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 19. Instructor Demo: Positioning (5 min)

* Open `19-Ins_CSS-positioning/index.html` in your browser and demonstrate the following:

  * We use the CSS `position` property to set how the element is positioned in a document.

  * The default position is `static`, meaning that the element is positioned based on the normal flow.

  * When an element's position is `relative`, it stays in the normal flow but can be offset by a value provided in the CSS.

  * When an element's position is `absolute`, it is no longer in the normal flow but instead is positioned relative to its ancestor element and is determined by values provided for top, bottom, left, and right.

  * An element in the `fixed` position is also not in the normal flow. However, unlike `absolute`, the position is determined in relation to the viewport.

* Open `19-Ins_CSS-positioning/assets/css/style.css` in your IDE and demonstrate the following:

  * 🔑 We use `position: relative` to set an element to `relative`, and we use the values of `top`, `right`, `bottom`, and `left` to offset the element. Here, we position the element to be 200px from the left:

    ```css
    #relative-box {
      position: relative;
      left: 200px;
    }
    ```

  * 🔑 To set an element to `absolute`, we first set the parent element to `relative`:

    ```css
    #absolute-section {
      position: relative;
    }
    ```

  * 🔑 We then use `position: absolute` and use the values of `top`, `right`, `bottom`, and `left` to position the item relative to the parent container. Here, we position the element 50px from the top and 100px from the right inside the container:

    ```css
    #absolute-box {
      position: absolute;
      top: 50px;
      right: 100px;
    }
    ```

  * 🔑 To set the element to `fixed`, we use `position: fixed`.  Then we use the values of `top`, `right`, `bottom`, and `left` to position the element relative to the viewport. Here, we position the element to be fixed in the bottom-right corner of the screen:

    ```css
    #fixed-box {
      position: fixed;
      bottom: 0;
      right: 0;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use the CSS `position` property to change the layout of the webpage?

  * 🙋 We use the `position` property to set how an element is positioned in the document, allowing us to move and rearrange elements or even fix them in a certain position relative to the viewport.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_CSS-positioning/README.md`.

### 20. Student Do: Positioning (15 min)

* Direct students to the activity instructions found in `20-Stu_CSS-positioning/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Absolute and Relative Positioning to Change Layout

  Work with a partner to implement the following user story:

  * As a developer, I want to use the CSS position property to change the layout of my page.

  ## Acceptance Criteria

  * It's done when `box 2` is positioned in the middle of `square 1` using relative positioning.

  * It's done when `box 2` is positioned outside of the upper-right corner of `square 2` using absolute positioning.

  * It's done when the finished page matches the mockup.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Box 2 is positioned in the center of Square 1, while in Square 2, Box 2 is positioned outside the square.](./assets/image-1.png)

  ---

  ## 💡 Hints

  How does the CSS `position` property change the document's normal flow?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the `z-index` property?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Positioning (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with positioning? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `position: relative`

  * ✔️ `position: absolute`

* Open `20-Stu_CSS-Positioning/Solved/assets/css/style.css` in your IDE and explain the following:

  * In this activity, we need to use absolute and relative positioning to reposition `box 2` in each of the squares.

  * To start, we look at the dimensions of `square 1` and `square 2`, which have a class of `container`. The height is 600px, and the width is 600px:

    ```css
    .container {
      width: 600px;
      height: 600px;
      margin: 20px auto;
      border: 15px solid black;
    }
    ```

  * We can fit three boxes vertically in the square, so we can deduce that the dimensions of the boxes are 200px. This information will be useful in deciding how much to offset the box so that it is positioned in the middle.

  * 🔑  To position `box 2` in the middle of `square 1`, we will need to set the position of `relative-box-2` to `relative`. Then we offset it from its original position, 200px to the left&mdash;moving the box to the center of the square:

    ```css
    #relative-box-2 {
      position: relative;
      left: 200px;
    }
    ```

  * To use absolute positioning, we first need to set the parent element to `relative`. Therefore, `square 2` has an additional class of `absolute-container`:

    ```css
    .absolute-container {
      position: relative;
    }
    ```

  * 🔑  Then, to move `box 2` outside of `square 2`, we set the position of `absolute-box-2` to `absolute`, and we set the top to 0 and the left to 700px:

    ```css
    #absolute-box-2 {
      position: absolute;
      top: 0;
      left: 700px;
    }
    ```

* If time allows, explain the other CSS using the comments provided.

* Open `20-Stu_CSS-Positioning/Solved/index.html` in your browser and explain the following:

  * When we open the webpage, we see that the acceptance criteria has been met and the webpage matches the mockup.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between absolute and relative positioning?

  * 🙋 Relative positioning offsets an image relative to its original position but does not change the layout of the other elements around it. Absolute positioning positions the image relative to its parent container and removes it from the flow, changing the layout of other elements around it.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on position](https://developer.mozilla.org/en-US/docs/Web/CSS/position), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `21-Evr_Git-Guide/README.md`.

## 22. Everyone Do: Git (20 min)

* Students have already reviewed the basics of creating a remote repository on GitHub as well as commonly used Git commands. This Git activity will focus on configuring the local Git default branch to `main`, using `git init` to create a local repository, and reviewing the `git pull` command (because they will use it frequently to pull down the class repository before every class).

* Open [Git Basics—Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) in your browser and explain the following:

  * Git is an important tool that allows developers to track and store versions of content. Using a Git repository, we can save different versions of a project's code.

  * Creating a repository is an important part of the development process and should be done each time you start a new project.

  * We can create a repository and use it on a local machine in two ways&mdash;we can create the remote repository on GitHub first and then use `git clone` to clone it onto the local machine, or we can turn a local directory or project and into a Git repository using `git init`.

  * We already covered how to clone a remote repository, so today we will learn how to turn an existing local project into a Git repository.

  * But first we will need to configure the local Git default branch to `main`.

* Direct students to the activity instructions found in `21-Evr_Git-Guide/README.md`.

* Open your command line and demonstrate the following:

  * 🔑 Before you begin, you need to ensure that the default branch is `main`. If you have not done so yet, follow the instructions in the Git Guide and use `git config` to make that switch. If you have any issues, ask a TA for help or stay for office hours:

    ```bash
    git config --global init.defaultBranch main
    ```

* Open your command line and demonstrate the following:

  * Alternatively, we can use `git init` to create a repository. The results will be similar to if we used `git clone`, except that we start by creating a repository locally via the command line.

  * 🔑 Start by creating a new project directory named `git-init-sample` on your local machine. Ideally, you should store all of your coding projects for this course in a parent directory. Create this project directory inside that parent directory:

    ```bash
    mkdir git-init-sample
    ```

  * We use `cd` to navigate into new project directory and `touch` to add an `index.html` file:

    ```bash
    cd git-init-sample
    touch index.html
    ```

  * To initialize this folder as a Git repository, we will use `git init`&mdash;we need to be in the project folder when we run this command!

    ```bash
    git init
    ```

  * This creates a new subdirectory named `.git` that contains all of the necessary repository files&mdash;a Git repository skeleton.

  * To start version-controlling the existing files in the project, we need to start tracking those files and do an initial commit.

  * First let's run `git status` to check the status of the files:

    ```bash
    git status
    ```

  * We should see that `index.html` is currently untracked. Let's stage that file for commit:

    ```bash
    git add -A
    ```

  * Now if we run `git status` again, we should see that the file is being tracked and is ready to be committed:

    ```bash
    git commit -m "initial commit"
    ```

  * 🔑 Using `git init` adds version control locally to a project, but it doesn't create a remote repository. Let's do that now.

* Open [GitHub](https://github.com/) in your browser and demonstrate the following:

  * Click on the New button to create a new repository.

  * Enter the same name as the local repository, `git-init-sample`.

  * 🔑 Do not check any of the boxes, because we are importing an existing repository!

  * Click the Create Repository button.

  * Copy the code under the header "…or push an existing repository from the command line".

* Open your command line and demonstrate the following:

  * Back in your project directory, paste the commands copied from GitHub. This will sync your local repository with the repository that you just created on GitHub.

* Open the `git-init-sample` repository on GitHub in your browser and demonstrate the following:

  * The repository has been updated on GitHub!

* Open your command line and demonstrate the following:

  * You will need to pull down the class repository before each class in this course to have that day's activities ready.

  * To perform a `git pull`, first navigate to the project directory using `cd`:

    ```bash
    cd git-init-sample
    ```

  * Next, use `git pull` to pull down the changes from the remote. Just like when we did a `git push`, we use `origin` to represent the original directory&mdash;or more precisely, the original repository's URL&mdash;followed by the name of the branch, which is `main`:

    ```bash
    git pull origin main
    ```

  * You can view any changes by opening the project directory in VS Code.

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
