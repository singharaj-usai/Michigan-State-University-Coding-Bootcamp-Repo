# 07.4 Full-Time Lesson Plan: Model-View-Controller (MVC)

## Overview

In today's class, students will continue to practice using Handlebars.js, including using partials and custom helpers. Students will also incorporate sessions and cookies using the Sequelize store. Lastly, students will create their own custom middleware for user authentication.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_Handlebars-FE-Logic` through `20-Stu_Middleware`.

* Be sure to prepare and read over the activities before class. Try to anticipate any questions that students might have.

* You will be using MySQL for today's activities. Be sure to have your MySQL server up and running. Demonstrate creating the `museum_db` database live during the first Instructor Demo section of this class.

* Be sure to modify the `.env.EXAMPLE` file to include your MySQL user and password information before demonstrating each activity.

* Students will need to create the `museum_db` database and seed it during their first activity. They will need to run `npm install`, modify the `.env.EXAMPLE` file, and run `npm start` before every activity.

* **Important**: Activities `15-Ins_Sessions` through `18-Stu_Cookies` are aimed at providing an **introduction** to sessions and cookies as they may encounter them in the workplace. Aim to keep your explanations simple to fit in the alloted timeframe and remind students that on the job when they encounter similar, challenging codebases they will often have to refer to the documentation and do more research on their own.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Explain the separation of concerns and its benefits.

* Implement Handlebars.js partials to reuse a Handlebars.js template.

* Use custom helper functions to format data in a Handlebars.js template.

* Create and read a session on a server using `express-sessions`.

* Explain how cookies and sessions work together.

* Implement middleware function in Express.js for user authentication.

## Time Tracker

| Start   | #   | Activity Name                      | Duration |
| ------- | --- | ---------------------------------- | -------- |
| 10:00AM | 1   | Instructor Demo: Front-End Logic   | 0:05     |
| 10:05AM | 2   | Student Do: Front-End Logic        | 0:15     |
| 10:20AM | 3   | Instructor Review: Front-End Logic | 0:10     |
| 10:30AM | 4   | Instructor Do: Stoke Curiosity     | 0:10     |
| 10:40AM | 5   | Instructor Demo: Partials          | 0:05     |
| 10:45AM | 6   | Student Do: Partials               | 0:15     |
| 11:00AM | 7   | Instructor Review: Partials        | 0:10     |
| 11:10AM | 8   | Instructor Demo: Custom Helpers    | 0:05     |
| 11:15AM | 9   | Student Do: Custom Helpers         | 0:15     |
| 11:30AM | 10  | Instructor Review: Custom Helpers  | 0:10     |
| 11:40AM | 11  | FLEX                               | 0:20     |
| 12:00PM | 12  | BREAK                              | 0:30     |
| 12:30PM | 13  | Instructor Demo: Sessions          | 0:05     |
| 12:35PM | 14  | Student Do: Sessions               | 0:15     |
| 12:50PM | 15  | Instructor Review: Sessions        | 0:10     |
| 1:00PM  | 16  | Instructor Demo: Cookies           | 0:05     |
| 1:05PM  | 17  | Student Do: Cookies                | 0:15     |
| 1:20PM  | 18  | Instructor Review: Cookies         | 0:10     |
| 1:30PM  | 19  | Instructor Demo: Middleware        | 0:05     |
| 1:35PM  | 20  | Student Do: Middleware             | 0:15     |
| 1:50PM  | 21  | Instructor Review: Middleware      | 0:10     |
| 2:00PM  | 22  | FLEX                               | 0:30     |
| 2:30PM  | 23  | END                                | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Handlebars.js Front-End Logic (5 min)

* Welcome students to class.

* Rename the `09-Ins_Handlebars-FE-Logic/.env.EXAMPLE` file to `.env` and input your credentials.

  * 🔑 The MVC framework follows the **separation of concerns principle**. This means keeping content separate from presentation and keeping data processing separate from content. This principle helps us write clear and maintainable code.

  * 🔑 To explore MVC and the separation of concerns principle further, now let's examine a form that allows users to add a dish to the database.

* Open `09-Ins_Handlebars-FE-Logic/views/all.handlebars` in your IDE and demonstrate the following:

  * This RSVP form to the `'all'` template allows guests to provide information about the dish they plan to bring to the party.

  * 🔑 To add an event listener, we need to connect the template in `'all'` to the JS in `add-dish.js` by adding a `<script>` tag, as follows:

    ```html
      <script src="/js/add-dish.js"></script>
    ```

* Open `09-Ins_Handlebars-FE-Logic/public/js/add-dish.js` in your IDE and demonstrate the following:

  * 🔑 Because the template is connected to the JS in the `public` folder, we can add an event listener for the form in `add-dish.js`.

  * On submit, the form handler will capture user input from the form fields in the View, as shown in the following example:

    ```js
      document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
    ```

  * Notice the syntax where `has_nuts` is declared, shown in the following example:

    ```js
    const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
    ```

    This is a **ternary operator**, or another type of conditional operator. `'#has_nuts:checked'` is the condition, followed by a `?`. If it is truthy, `has-nuts` will be true. Otherwise, it will be false.

  * 🔑 Using the POST method, `fetch()` passes the form input to the Controller in the body of the request, as follows:

    ```js
     const response = await fetch(`/api/dish`, {
       method: 'POST',
       body: JSON.stringify({
        dish_name,
        description,
        guest_name,
        has_nuts,
       }),
       headers: {
        'Content-Type': 'application/json',
      },
     });
    ```

* Open `09-Ins_Handlebars-FE-Logic/controllers/api/dish-routes.js` in your IDE and demonstrate the following:

  * 🔑 The POST route in the Controller accepts the input, uses the Model to create a dish object in the database, and then returns the data. See the following code for an example:

    ```js
     router.post('/', async (req, res) => {
       try { 
         const dishData = await Dish.create({
           dish_name: req.body.dish_name,
           description: req.body.description,
           guest_name: req.body.guest_name,
           has_nuts: req.body.has_nuts,
         });
        res.status(200).json(dishData)
        } catch (err) {
          res.status(400).json(err);
        }
      });
    ```

  * 🔑 When the dish is added and a successful response is sent to `add-dish.js`, the `all` template is re-rendered by the View.

* Run `npm install` and `npm start` from the command line.

* Navigate to <http://localhost:3001/> in your browser and demonstrate the following:

  * Now when we add information into the form and click Submit, we can see that the dish has been added to the menu.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we process user input and send it to the Controller?

  * 🙋 We can use a form handler to collect form input and send it to the Controller, where the business logic will be performed.

  * ☝️ How do we connect the form handlers in the `js` folder to the templates in the View?

  * 🙋 We can add a `<script>` tag with `src="<our-file-name>"` at the bottom of the template.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Handlebars-FE-Logic/README.md`.

### 2. 16. Student Do: Handlebars.js Front-End Logic (15 min)

* Direct students to the activity instructions found in `10-Stu_Handlebars-FE-Logic/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to the Implementation of a Form to Update a Food Item

  Work with a partner to add comments describing the functionality of the code found in [dish.handlebars](./Unsolved/views/dish.handlebars), [edit-dish](./Unsolved/public/js/edit-dish.js), and [dish-routes](./Unsolved/controllers/api/dish-routes.js).

  ## 📝 Notes

  Refer to the documentation: 

  [Handlebars.js documentation](https://handlebarsjs.com/guide/#what-is-handlebars)

  [MDN Web Docs on MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the pros and cons of using a template engine like Handlebars.js?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Handlebars.js Front-End Logic (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with MVC and front-end logic? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ View

  * ✔️ Model

  * ✔️ Controller

  * ✔️ Front-end logic

  * ✔️ Ternary operator

* Open `10-Stu_Handlebars-FE-Logic/Solved/views/dish.handlebars` in your IDE and explain the following:

  * We now have an edit form in the `'dish'` template that allows users to update a dish.

  * 🔑 As a part of the View, this form is responsible for the UI/UX logic. It is not responsible for business or data-related logic.

* Open `10-Stu_Handlebars-FE-Logic/Solved/public/js/edit-dish.js` in your IDE and explain the following:

  * We've added an event listener to the form in `edit-dish.js`.

  * 🔑 On submit, the form handler will capture user input from the form fields in the View and process the data using front-end logic to pass to the Controller, as follows:

    ```js
    document.querySelector('.edit-dish-form').addEventListener('submit', editFormHandler);
    ```

  * 🔑 We've included a ternary operator again, shown in the following example, to indicate whether the checkbox for "Contains Nuts" has been checked or not:

    ```js
    const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
    ```

  * We are using the URL to access the dish's id, as follows, to ensure that we send the fetch request to the correct endpoint:

    ```js
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    ```

  * 🔑 `fetch()` passes the edit form input to the Controller in the body of the request with the PUT method, like in the following example:

    ```js
     const response = await fetch(`/api/dish/${id}`, {
       method: 'PUT',
       body: JSON.stringify({
        dish_name,
        description,
        guest_name,
        has_nuts,
       }),
       headers: {
        'Content-Type': 'application/json',
      },
     });
    ```

* Open `10-Stu_Handlebars-FE-Logic/controllers/api/dish-routes.js` in your IDE and demonstrate the following:

  * 🔑 The PUT route in the Controller accepts the input, uses the Model to edit a dish object in the database, and then returns a response to `edit-dish.js`. If the response to the following code is OK, `dish` will be rendered by the View:

    ```js
      router.put('/:id', async (req, res) => {
      try {
        const dish = await Dish.update(
          {
            dish_name: req.body.dish_name,
            description: req.body.description,
            guest_name: req.body.guest_name,
            has_nuts: req.body.has_nuts,
          },
          {
            where: {
            id: req.params.id,
          },
          });
          res.status(200).json(dish);
        } catch (err) {
          res.status(500).json(err);
        };
      });
    ```
  
* Run `npm install` and `npm start` from the command line.

* Navigate to <http://localhost:3001/> in your browser and demonstrate the following:

  * Now when we add information into the form to edit a dish and click Submit, we can see that the dish info has been edited.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the separation of concerns principle, and why is it important?

  * 🙋 The separation of concerns principle calls for content to be kept separate from presentation and for data processing to be kept separate from content. This helps us write conventional, clear, and maintainable code.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 mins)

* Explain to students that today they will learn about cookies&mdash;not cookies that we eat, but the HTTP cookies that are saved whenever we visit a website.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ You've probably noticed messages like the following example whenever you visit a website:

    > This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy. If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.

    What do you think this message means? What is your understanding of cookies?

  * 🙋 Cookies are small text files that get stored on users' computers to help websites remember their visitors.

  * ☝️ Can you think of examples of when cookies might be useful?

  * 🙋 The most common example is an online shopping cart. When you visit an online store and select items to add to the shopping cart, the cookie will remember those items. When you are ready to check out, the items will still be in your shopping cart.

  * ☝️ If cookies are so useful&mdash;and even crucial to a good user experience&mdash;why do websites ask for permission to store cookies?

  * 🙋 Cookies are pieces of information saved about you when you’re online. Most cookies identify you through your device, and they track you as you browse. So for privacy reasons, companies need your explicit consent to collect your data. Implementing cookies involves many security considerations, but arguably the most important is that vulnerabilities can allow third parties to access them. Thus, we do NOT store sensitive information like passwords in cookies.

  * ☝️ We have also used `localStorage` to store data. How are cookies different from `localStorage`?

  * 🙋 Cookies can be read by the client but are mainly for reading on the server side, whereas local storage can only be read by the client side. Basically, cookies allow the server to deliver a page tailored to the user; local storage allows a much larger amount of data to be stored on the user's computer and reduces the amount of traffic between the client and server. When deciding which one to use, think about whether it is the client or the server that needs the data.

  * ☝️ How will we use cookies in the applications we work on today?

  * 🙋 We will use cookies to remember our logged-in status so that we can navigate from page to page and access all content.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Partials (5 min)

* Remind students to start their MySQL Server.

* Demonstrate how to create the `museum_db` database, run `npm install`, and modify the `.env.EXAMPLE` file to include their MySQL user and password information.

* Demonstrate how to seed the database by running `npm run seed` in your command line.

* Navigate to `11-Ins_Partials` and run `npm start` from the command line.

* Open <http://localhost:3001/> in your browser and demonstrate the following:

  * Today all of the activities will use this museum application.

  * We see four galleries named after the four seasons in different languages.

  * 🔑 When we select a gallery, we see the images that belong in that gallery.

  * 🔑 When we select a painting, we see it in a larger format with the title and artist name.

* Open `11-Ins_Partials/views/homepage.handlebars` in your IDE and explain the following:

  * 🔑 Here is the homepage. Instead of rendering the four galleries here, we use a partial `gallery-details` instead.

  * We are using the built-in helper method `{{#each}}` to iterate through the galleries. Then for each gallery we are rendering the `gallery-details` partial, as follows:

    ```handlebars
    {{#each galleries as |gallery|}}
    {{> gallery-details}}
    {{/each}}
    ```

* Open `11-Ins_Partials/views/partials/gallery-details.handlebars` in your IDE and explain the following:

  * 🔑 We create a new folder called `partials` in the `views` directory and put the partials there.

  * In the `gallery-details` partial, we see a card that links to the specific gallery using its `id`, as shown in the following example:

    ```handlebars
    <section class="card">
      <a href="/gallery/{{id}}">
      ...
      </a>
    </section>
    ```

  * The card consists of a header with the name of the gallery and the first painting of the gallery. Notice in the following example how we are accessing the first painting of the gallery, as well as its file name and description:

    ```handlebars
    <header>{{name}}</header>
    <img src="/images/{{paintings.[0].filename}}" alt="{{paintings.[0].description}}">
    ```

  * ☝️ How are the Handlebars.js templates getting all this data about the galleries and their paintings?

  * 🙋 They're getting it from the Controllers!

* Open `11-Ins_Partials/controllers/home-routes.js` in your IDE and explain the following:

  * If we look at the routes, we see that we are getting all of the galleries as well as the paintings in each gallery, as follows:

    ```js
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });
    ```

  * Then we map through the data and serialize it, as shown in the following example:

    ```js
    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );
    ```

  * When we render the `homepage` template, we pass in the `galleries` data for the templates to use, as follows:

    ```js
    res.render('homepage', {
      galleries,
    });
    ```

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Partials/README.md`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How else could we use partials in the museum application?

  * 🙋 We will use partials to reuse a template that renders details about the painting.

* Answer any questions before proceeding to the next activity.

### 6. Student Do: Partials (15 min)

* Direct students to the activity instructions found in `12-Stu_Partials/README.md`.

* Break your students into pairs that will work together on this activity.

* Remind students to set up their `museum_db` database and seed it before starting the activity.

  > **Important**: Students should also modify the `.env.EXAMPLE` file to include their MySQL user and password information and run `npm install` before every activity.

  ```md
  # 🏗️ Use Handlebars.js Partials to Reuse a Template

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to render details of a painting by reusing the same Handlebars.js template.

  ## Acceptance Criteria

  * It's done when the details for the paintings associated with the gallery are rendered using a Handlebars.js partial in the [gallery.handlebars](./Unsolved/views/gallery.handlebars) file.

  * It's done when the `painting-details.handlebars` partial renders a card that links to that painting's page.

  * It's done when the card includes a header with the painting's title.

  * It's done when the card includes a body with the painting and the artist's name.

  ## Assets

  The following image demonstrates how the painting's details should be rendered on the page:

  ![On a museum webpage, one card displays a photo of a sandy beach with the title and artist name underneath it.](./Images/01-painting-details.jpg)

  ---

  ## 💡 Hints

  How do we set up the database? What command do we use to seed it? And what is the syntax for Handlebars.js partials?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other ways that we can use Handlebars.js partials? How else can partials be useful?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Partials (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Handlebars.js partials? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `painting-details`

  * ✔️ Link to painting's page

  * ✔️ Painting's title

  * ✔️ Painting's image and artist name

* Open `12-Stu_Partials/Solved/views/gallery.handlebars` in your IDE and explain the following:

  * This is the gallery page, which displays the paintings that belong to this gallery. There are two to three paintings for each gallery, so we use the built-in helper function `{{#each}}` to iterate through each painting, as shown in the following example:

    ```handlebars
    {{#each gallery.paintings as |painting|}}

    {{/each}}
    ```

  * 🔑 The details for each painting will be rendered by using the partial `painting-details`, as follows:

    ```handlebars
    {{> painting-details}}
    ```

* Open `12-Stu_Partials/Solved/views/partials/painting-details.handlebars` in your IDE and explain the following:

  * We are given a card for each painting. We need to include a link to the painting's page, the title, the image, and the artist name.

  * 🔑 We use the entire contents of the card as a link to the painting's page, so we encapsulate everything in a `<a>` tag. We are using the `id` of the painting with the `{{ }}` handlebars syntax, as shown in the following example:

    ```handlebars
    <a href="/painting/{{id}}">

    </a>
    ```

  * 🔑 We create the card header by using the `<header>` tag with the painting's `title` as a Handlebars.js expression, like in the following example:

    ```handlebars
    <header>{{title}}</header>
    ```

  * 🔑 In the body of the card, we render the actual image of the painting. We use the painting's `filename` in the `<img src>` tag and the painting's `description` as the alt text, as follows:

    ```handlebars
    <img src="/images/{{filename}}" alt="{{description}}">
    ```

  * 🔑 Also in the card body, we include the artist's name, as shown in the following example:

    ```handlebars
    <p>By: {{artist}}</p>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where can we specify which data gets sent over to the partials to be rendered?

  * 🙋 That will be handled by the Controller! As part of the MVC framework, the templates (View) only focus on the rendering of content. The routes (Controller) are responsible for getting the data from the database (Model) and handle all the logic behind which data needs to be rendered.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Handlebars.js documentation on basic partials](https://handlebarsjs.com/guide/partials.html#basic-partials), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Custom Helpers (5 min)

* Navigate to `13-Ins_Custom-Helpers` and run `npm install` and `npm start` in your command line to demonstrate the following:

  * 🔑 When we navigate to <localhost:3001/> in the browser and click on one of the galleries, we see the Opening Hour and Closing Hour.

  * 🔑 But the Opening Hour is formatted as the original timestamp from the database, whereas the Closing Hour has been formatted to a clean `H:M:S` format.

* Open `13-Ins_Custom-Helpers/views/gallery.handlebars` in your IDE and explain the following:

  * The Opening Hour uses the gallery's `starting_date` as is, as shown in the following example:

    ```handlebars
    <h4>Opening Hour: {{gallery.starting_date}}</h4>
    ```

  * 🔑 But the Closing Hour uses a custom helper function called `format_time` to display only the time of `gallery.ending_date` in a specific format, as follows:

    ```handlebars
    <h4>Closing Hour: {{format_time gallery.ending_date}}</h4>
    ```

* Open `13-Ins_Custom-Helpers/utils/helpers.js` in your IDE and explain the following:

  * 🔑 To create custom helper functions, we create a folder called `utils` and a new file named `helpers.js`.

  * 🔑 For the `format_time` custom helper, we will take in a `date` timestamp and use the `toLocaleTimeString()` method to format the time as `H:MM:SS AM/PM`, like in the following example:

    ```js
    module.exports = {
      format_time: (date) => {
        return date.toLocaleTimeString();
      },
    };
    ```

* Open `13-Ins_Custom-Helpers/server.js` in your IDE and explain the following:

  * To use custom helper methods, we need to import them into the `server.js` file, as follows:

    ```js
    const helpers = require('./utils/helpers');
    ```

  * We instruct Handlebars.js to incorporate the custom helper methods when rendering the templates, as follows:

    ```js
    const hbs = exphbs.create({ helpers });
    ```

* In preparation for the next activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Custom-Helpers/README.md`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use custom helpers to format the painting's end date in the museum application?

  * 🙋 We will need to create a helper function and use JavaScript Date methods that allow us to get the month, date, and year of a timestamp.

* Answer any questions before proceeding to the next activity.

### 9. Student Do: Custom Helpers (15 min)

* Direct students to the activity instructions found in `14-Stu_Custom-Helpers/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Date Is Not Formatted Correctly

  Work with a partner to resolve the following issues:

  * Museum visitors should be able to see the end date of each painting on the painting page.

  ## Expected Behavior

  * When a museum visitor visits the painting page, it should clearly and accurately show the date that the exhibition will end.

  * The end date is calculated by adding five years to the painting's `exhibition_date`.

  * The end date should be formatted as `M/D/YYYY`.

  ## Actual Behavior

  When a museum visitor visits the exhibition page, it shows the painting's `exhibition_date` in the original long timestamp format.

  ## Assets

  The following image demonstrates the correct formatting of the end date for each painting:

  ![On the museum webpage, one card displays an image of a blossoming tree with the title, artist name, and end date underneath the image.](./Images/01-painting-end-date.jpg)

  ---

  ## 💡 Hints

  Which JavaScript Date methods allow you to return the month, date, and year of a specified date? How do you correctly render the month, considering that it is returned as a zero-based value?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other data can be formatted by custom helpers?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Custom Helpers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with custom helpers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `.getMonth()`

  * ✔️ `.getFullYear()`

  * ✔️ `format_date()`

* Open `14-Stu_Custom-Helpers/Solved/utils/helpers.js` in your IDE and explain the following:

  * Under the `format_time` helper function, we create another custom helper, named `format_date`, that takes in a date as follows:

    ```js
    format_date: (date) =>  {

    }
    ```

  * 🔑 To format the date, we use template literals! First we need to get the month, but `.getMonth()` will return the month as a zero-based value. For example, January will return `0`. To format it correctly, we need to add `1` to the value returned, as follows:

    ```js
    return `${new Date(date).getMonth() +1}
    ```

  * Then we add the `/` slash and the date value, like in the following example:

    ```js
    /${new Date(date).getDate()}
    ```

  * 🔑 Lastly, we add the `/` slash and get the year, but we need to add five years to it to calculate the end date, as shown in the following example:

    ```js
    /${new Date(date).getFullYear() + 5}`;
    ```

* Open `14-Stu_Custom-Helpers/Solved/views/painting.handlebars` in your IDE and explain the following:

  * 🔑 On the `painting.handlebars` template, we need to include the helper function `format_date` along with the `painting.exhibition_date` for the end date to be rendered correctly&mdash;as shown in the following example:

    ```handlebars
    <p>Exhibition open until: {{ format_date painting.exhibition_date}}</p>
    ```

* Run `npm start` and navigate to <http://localhost:3001/> in your browser to demonstrate the following:

  * When we select a gallery and then a painting, we see that the exhibition end date is formatted correctly.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How are custom helper functions helpful when using Handlebars.js?

  * 🙋 To keep the templates logicless and only concerned with rendering data, we can place that logic in helper functions instead.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [npm documentation on Express Handlebars helpers](https://www.npmjs.com/package/express-handlebars#helpers), and stick around for office hours to ask for help.

* Answer any questions before proceeding.

### 11. FLEX (20 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

### 12. BREAK (30 mins)

### 13. Instructor Demo: Sessions (5 min)

* Navigate to `15-Ins_Sessions` in your command line and run `npm install` to demonstrate the following:

  * Sessions allow the Express.js server to track which user is making a request and to store useful data about them in memory.

  * 🔑 To incorporate sessions into the application, we need to install `express-session`.

  * The `express-session` library allows us to leverage sessions in the Express.js routes.

* Open `15-Ins_Sessions/server.js` in your IDE and demonstrate the following:

  * 🔑 We need to import `express-session` into the application, as follows:

    ```js
    const session = require('express-session');
    ```

  * 🔑 We set up an Express.js session with the following options: `secret`, `resave`, and `saveUninitialized`. The `secret` option is required and can be either a string for a single secret or an array of multiple secrets. This is used to sign the session id cookie. Technically this should be stored in a `.env` file as a real secret.

  * The `resave` option forces the session to be saved back to the session store. In most cases, we will want to use `false`.

  * The `saveUninitialized` option forces a session that is **uninitialized** (new but not modified) to be saved to the store. Choosing `false`, as shown in the following example, is useful for implementing login sessions:

    ```js
    const sess = {
      secret: 'Super secret secret',
      resave: false,
      saveUninitialized: false,
    };
    ```

* Open `15-Ins_Sessions/controllers/home-routes.js` in your IDE and explain the following:

  * We will set up a session variable to count how many times we visit the homepage&mdash;and only the homepage. We can visit the gallery and painting pages, but those visits will not get counted.

  * 🔑 In the `/` route, which is the homepage, we set up a session variable called `countVisit`. If that session variable already exists, we increment it by one. But if this is the first time visiting the homepage&mdash;meaning that there is not a session variable yet&mdash;then we create it and set it to `1`, as follows:

    ```js
    if (req.session.countVisit) {
      req.session.countVisit++;
    } else {
      req.session.countVisit = 1;
    }
    ```

  * Then we will render the `homepage` template and send over the `galleries` data and the `countVisit` session variable, as shown in the following example:

    ```js
    res.render('homepage', {
      galleries,
      countVisit: req.session.countVisit,
    });
    ```

  * We want to ensure that the session is created before we send the response back, so we're wrapping the variables in a callback. The `req.session.save()` method, shown in the following example, will initiate the creation of the session and then run the callback function once complete:

    ```js
    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }

      res.render('homepage', {
        galleries,
        countVisit: req.session.countVisit,
      });
    });
    ```

* Run `npm start`, open <http://localhost:3001/> in your browser, and demonstrate the following:

  * On the first visit to the homepage, we see the text "Number of times you've visited this homepage: 1."

  * If we click on a gallery, it still lists just one visit, because we are only counting how many times we visit the main homepage.

  * If we return to the homepage, it will say "Number of times you've visited this homepage: 2."

  * If we refresh the homepage, the number will increment.

  * If we restart the server, the count will reset! That's because the session is lost once the connection to the server is lost or restarted.

  * This was a simple demo of how to create session variables. In most cases, session variables will be used to check logged-in statuses.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Sessions/README.me`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we use sessions to allow or restrict access to content?

  * 🙋 We could use sessions to check whether a user is logged in or not, then allow logged-in users to access the gallery's paintings. Otherwise we could redirect users to the login page.

* Answer any questions before proceeding to the next activity.

### 14. Student Do: Sessions (15 min)

* Direct students to the activity instructions found in `16-Stu_Sessions/README.me`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Add Sessions to the Login Route

  Work with a partner to implement the following user story:

  * As a museum director, I want to allow visitors to view the gallery's paintings only after logging in.

  * As a museum visitor, I want to be able to visit multiple pages while maintaining my logged-in status.

  ## Acceptance Criteria

  * It's done when I can view the gallery's paintings only after I am logged in. Otherwise I am directed to log in.

  * It's done when I can view the individual painting page only after I am logged in. Otherwise I am directed to log in.

  * It's done when I can navigate from the gallery page to a painting's detail page without losing my logged-in status.

  ## Assets

  The following image demonstrates what the museum visitor sees if they try to access the gallery page without logging in:

  ![On the museum webpage, under the gallery name and operating hours, a message prompts users to log in.](./Images/01-Unauthorized-Gallery.jpg)

  ---

  ## 💡 Hints

  * To test the routes, feel free to either create your own user or use the following credentials: 

    * `username`: "Sam"
  
    * `email`: "sam@email.com"
  
    * `password`: "password1234"

  * If the session variables are set up when the user is created or logged in, which file would hold that info?

  * How can the templates know if the user is logged in or not?

  * What built-in helper method will help us render specific content depending on whether the user is logged in or not?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the lifecycle of a session?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Sessions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with sessions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `loggedIn` session variable

  * ✔️ `{{#if loggedIn}}`

  * ✔️ `{{else}}`

* Open `16-Stu_Sessions/Solved/controllers/api/user-routes.js` in your IDE and explain the following:

  * We have been provided with `user-routes` to handle functionality for creating a new user, logging in, and logging out.

  * 🔑 We want new users to be logged in right away. So we set up a session variable `loggedIn` and set it to `true` as soon a user is created, as shown in the following example:

    ```js
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
    ```

  * 🔑 For the `/login` route, after we find the user in the database, using their email address, and check their password against the hashed password, we set up the session, like in the following example:

    ```js
    req.session.save(() => {
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
    ```

  * Notice how we destroy the session once the user logs out, as follows:

    ```js
    router.post('/logout', (req, res) => {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
    });
    ```

* Open `16-Stu_Sessions/Solved/views/gallery.handlebars` in your IDE and explain the following:

  * 🔑 We want to prevent unauthorized access to the paintings in the gallery page. So on the `gallery.handlebars` template, we use the built-in helper method `{{#if}}` to determine whether the session variable `loggedIn` is set to `true`. Only then can they access the `painting-details`. See the following code for an example:

    ```handlebars
    {{#if loggedIn}}
      <section class="flex-row justify-center">
        {{#each gallery.paintings as |painting|}}
        {{> painting-details}}
        {{/each}}
      </section>
    </section>
    ```

  * 🔑 Else, if the session variable `loggedIn` does not exist or is set to `false`, then we provide a link for them to log in, as shown in the following example:

    ```handlebars
    {{else}}
    <a href="/login">You must log in first to view the paintings</a>
    {{/if}}
    ```

* Open `16-Stu_Sessions/Solved/views/painting.handlebars` in your IDE and explain the following:

  * We need to do the same thing to the `painting.handlebars` template to restrict access.

  * Here we wrap the entire contents of the template in the `{{#if}}` helper method, as follows:

    ```handlebars
    {{#if loggedIn}}
    <section class="painting">
      ...
    </section>
    {{else}}
    <a href="/login">You must log in first to view this painting</a>
    {{/if}}
    ```

* Run `npm start` and navigate to <http://localhost:3001/> in your browser to demonstrate the following:

  * If we try to access the paintings without logging in, we are directed to log in first.

  * Let's create a user using the provided credentials:

    * `username`: "Sam"
  
    * `email`: "sam@email.com"
  
    * `password`: "password1234"

  * After we are logged in, we can access everything on the museum website.

* Remind students that it is okay if they do not fully understand sessions right now. This activity is aimed to be an introduction to a concept they are likely to encounter on the job. Encourage them to research more on their own.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Did you notice where else we used the `loggedIn` session variable to change the view?

  * 🙋 On the `main.handlebars` template, once the user logged in, the login link was replaced by a logout button in the navbar!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [npm documentation on express-session](https://www.npmjs.com/package/express-session), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Cookies (5 min)

* Navigate to `17-Ins_Cookies` and run `npm install` and `npm start` from your command line.

* Open <http://localhost:3001/> in your browser to demonstrate the following:

  * 🔑 Create a new user for this application, if you haven't already done so, with the following credentials:
  
    * `username`: "Sam"
  
    * `email`: "sam@email.com"
  
    * `password`: "password1234"

    > **Important**: Adding cookie settings allows us to change the settings that are associated with the cookie that gets sent to the client. This cookie gets sent to the client immediately after `express-session` is added to the server, allowing us to store information about the session on the user's client. We can update the cookie settings to change how the session is identified on the server whenever sessions are used.
  
  * Once a session id, or `sid`, is generated on the server, `express-session` will reflect that information in a cookie on the client.

* Open `17-Ins_Cookies/server.js` in your IDE to demonstrate the following:
  
  * To store the session information in the database, we will use `express-session-sequalize`:

    ```js
    const SequelizeStore = require('connect-session-sequelize')(session.Store);
    ```

  * In the server, note that the session object has a `cookie` attribute. This property is used by `express-session` to set various options for the session cookie.

  * The `maxAge` attribute is set to `24 * 60 * 60 * 1000` milliseconds, meaning that the user has approximately one day until their cookie is expired:

    > **Note**: In this demo, we specify a `maxAge`, but it is not necessary to do so. A default `maxAge` of `null` will be set automatically if you don't declare one.

    ```js
    const sess = {
      secret: 'Super secret secret',
      cookie: {
        // Stored in milliseconds
        maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
      },
      resave: false,
      saveUninitialized: true,
      store: new SequelizeStore({
        db: sequelize,
      }),
    };
    ```

  * `express-session-sequelize` will periodically check the `cookie.expires` property to determine whether the `sid` should be removed from the database or not.
  
  * 🔑 When using `express-session-sequelize`, session records are automatically expired and removed from the database on a **tick** (interval of about 15 minutes) by default.

  * There are several options that you can set for cookies, all of which you can find in the `express-session` documentation.

  * Lastly, if the server is still running, we can also find the `sid`, or session id, printed in the CLI as we move from route to route, like in the following example:

    ```sh
    Executing (default): SELECT `sid`, `expires`, `data`, `createdAt`, `updatedAt` FROM `Session` AS `Session` WHERE `Session`.`sid` = 'jmIObjIijpBKfOv4MkVPh_Ri5G_SI7_o';
    ```

  * You can find this same `sid` in the cookie that gets stored in the browser. You can view the cookie information by opening Chrome DevTools, clicking the Application tab, and then clicking "storage".

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Cookies/README.md`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use cookies in the museum application?

  * 🙋 We will need to set up sessions with cookies and the Sequelize store.

* Answer any questions before proceeding to the next activity.

### 17. Student Do: Cookies (15 min)

* Direct students to the activity instructions found in `18-Stu_Cookies/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of the Sequelize Store and Cookies

  Work with a partner to add comments describing the functionality of the code found in [Unsolved/server.js](./Unsolved/server.js).

  ## 📝 Notes

  Refer to the documentation: 

  [npm documentation on connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between sessions and cookies?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Cookies (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with cookies? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `connect-session-sequelize`

  * ✔️ `cookie: {...}`

  * ✔️ `SequelizeStore()`

* Open `18-Stu_Cookies/Solved/server.js` in your IDE and explain the following:

  * 🔑 To set up cookies for database sessions, we first need to initialize Sequelize with the session store. To do that, we need to install and import `connect-session-sequelize`. The `connect-session-sequelize` library automatically stores the sessions created by `express-session` into the database! See the following code for an example:

    ```js
    const SequelizeStore = require('connect-session-sequelize')(session.Store);
    ```

  * 🔑 Then we set up an Express.js session like before, but this time we connect to the Sequelize database. We include the `secret`, `resave`, and `saveUninitialized` options as before. All we need to do to tell the session to use cookies is to set `cookie` as an object. We can set additional options on the cookie, like a maximum age, as shown in the following example:

    ```js
      cookie: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
      },
    ```

  * 🔑 Lastly, we set `store` to a new Sequelize store and connect it to the database, as follows:

    ```js
    store: new SequelizeStore({
      db: sequelize,
    }),
    ```

* Remind students that it is okay if they do not fully understand cookies right now. This activity is aimed to be an introduction to a concept they are likely to encounter on the job. Encourage them to research more on their own.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ In what ways are cookies useful?

  * 🙋 Cookies are useful for customer logins, persistent shopping carts, and helpful product recommendations.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on session cookies](https://github.com/expressjs/session#cookie), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Middleware (5 min)

* Open `19-Ins_Middleware/controllers/home-routes.js` in your IDE and explain the following:

  * 🔑 **Conditional access** refers to only allowing authorized users to see certain content. We did something like this already, when we checked whether the user was logged in before allowing them to see the paintings. But we checked that in the templates.

  * 🔑 In line with the separation of concerns principle and the MVC framework, the correct way to accomplish this is directly in the routes. If we look at the route for a gallery, we use the same logic, where if they are not logged in (meaning that the `loggedIn` session variable does not exist), then the user is redirected to the login page&mdash;as shown in the following example:

    ```js
    router.get('/gallery/:id', async (req, res) => {
      if (!req.session.loggedIn) {
        res.redirect('/login');
      } 
    ```

  * 🔑 Else, we allow them to view the gallery's paintings, as follows:

    ```js
    else {
      try {
        const dbGalleryData = await Gallery.findByPk(req.params.id, {
          include: [
            {
              model: Painting,
              attributes: [
                'id',
                'title',
                'artist',
                'exhibition_date',
                'filename',
                'description',
              ],
            },
          ],
        });
        const gallery = dbGalleryData.get({ plain: true });
        res.render('gallery', { gallery });
      }
    ```

  * The same logic is used for the painting page. This is more appropriate than doing it in the templates (because we want to keep that kind of logic out of the Views), but there is an even better solution to this!

  * We can create custom middleware to check whether the user is authenticated before allowing them to access the route. That's what the next activity is all about!

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Middleware/README.md`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we use custom middleware for the museum application?

  * 🙋 We will need to create custom middleware to check for user authentication.

* Answer any questions before proceeding to the next activity.

### 20. Student Do: Middleware (15 min)

* Direct students to the activity instructions found in `20-Stu_Middleware/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Middleware Function for User Authentication

  Work with a partner to implement the following user story:

  * As a developer, I want to write my own middleware to check for user authentication.

  ## Acceptance Criteria

  * It's done when the middleware checks whether the user is logged in.

  * It's done when the middleware allows access to the gallery and painting pages if the user is logged in.

  * It's done when the middleware directs an unauthorized user to the login page if they are not logged in yet.

  ## 📝 Notes

  Refer to the documentation: 

  [Express.js documentation on using middleware](https://expressjs.com/en/guide/using-middleware.html)

  ---

  ## 💡 Hints

  How can you keep the current logic being used in the routes to check whether a user is logged in or not and rewrite it as a middleware function? Where can you write the code for the custom middleware so that it is separate but accessible from the routes? (Where did you put the custom helper functions?)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other middleware do developers use with Express.js?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Middleware (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with custom middleware? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `withAuth`

* Open `20-Stu_Middleware/Solved/utils/auth.js` in your IDE and explain the following:

  * According to the Express.js documentation, middleware functions are functions that have access to the request object `req`, the response object `res`, and the next middleware function `next`. If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

  * To create the custom middleware, we put it in the same folder as the custom helper functions: the `/utils` folder. We create a new file called `auth.js` to hold the custom middleware.

  * 🔑 So to create this custom middleware, `withAuth`, we take the same logic that was in the routes and put it in the function, as follows:

    ```js
    const withAuth = (req, res, next) => {
      // This is directly from the `/gallery/:id` and `/painting/:id` routes
      if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
        // We call next() if the user is authenticated
        next();
      }
    };

    module.exports = withAuth;
    ```

* Open `20-Stu_Middleware/Solved/controllers/home-routes.js` in your IDE and explain the following:

  * Now we need to refactor the routes to use the middleware functions.

  * First we need to import the custom middleware at the top of the file, as shown in the following example:

    ```js
    const withAuth = require('../utils/auth');
    ```

  * 🔑 Then we replace the logic that is in the `/gallery/:id` and `/painting/:id` routes with the middleware, as follows:

    ```js
    router.get('/gallery/:id', withAuth, async (req, res) => { 

    }

    router.get('/painting/:id', withAuth, async (req, res) => {

    }
    ```

  * Notice how clean the code looks&mdash;and it functions perfectly!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can custom middleware be useful when building applications?

  * 🙋 Custom middleware can help handle common functionality in applications. For example, it keeps us from repeating the same code at the beginning of a route handler.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on using middleware](https://expressjs.com/en/guide/using-middleware.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding.

### 22. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
