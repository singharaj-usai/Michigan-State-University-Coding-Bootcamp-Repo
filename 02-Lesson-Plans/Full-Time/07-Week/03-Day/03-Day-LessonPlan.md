# 07.3 Full-Time Lesson Plan: Model-View-Controller (MVC)

## Overview

In today's class, students will start by doing the mini-project for Module 13. Then they will learn about the MVC framework and the separation of concerns. Starting with hardcoded data, they will practice using template engines on the front end by implementing Handlebars.js expressions and built-in helpers. Then they will use Sequelize and MySQL to handle data logic on the back end. In the process, they will learn how the Controller mediates between the View and the Model by processing requests for data, using routes to manipulate the database, and passing serialized data to the View.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` from Module 13 through `08-Stu_Data-Serialization` from Module 14.

* Module 14 introduces students to the template engine **Handlebars.js**. Students might not use Handlebars.js in their careers, but learning this tool will help introduce them to template engines, prepare them to work with React.js, and demonstrate the MVC framework.

* You will use MySQL for a few of today's activities, so be sure to have your MySQL server up and running. You can create the `dish_db` database ahead of time, or you can demonstrate it live in class.

* The first several activities, `01-Ins_MVC-Handlebars-Intro` through `06-Stu_Built-In-Helpers`, include hardcoded data in Handlebars.js templates, in `index.html`, or in the `dish-routes.js` file. Every subsequent activity (starting with `07-Ins_Data-Serialization`) includes a seeds folder. Run `node seeds/index.js` before class, or demonstrate seeding the database live in class.

* Starting with `07-Ins_Data-Serialization`, each activity requires a `.env` file. Be sure to create one or rename the existing `.env.EXAMPLE` file before demonstrating each activity.

* Be prepared to remind students how to start their MySQL server and create the `dish_db` database in `08-Stu_Data-Serialization`.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Deploy an application with a MySQL database to Heroku.

* Implement MVC modularization in a full-stack web application.

* Render dynamic HTML using the Handlebars.js template engine.

* Dynamically pass data to other helpers or components using built-in helpers.

* Simplify objects by using data serialization, to work with necessary properties only.

## Slide Deck

* [Module 14 Slide Deck](https://docs.google.com/presentation/d/1RIA8VZVN4_JAaL0xSPf1GPc8b5dJlM5V43EVNEZ_kfA/edit?usp=sharing)

## Time Tracker

| Start   | #   | Activity Name                                | Duration |
| ------- | --- | -------------------------------------------- | -------- |
| 10:00AM | 1   | Instructor Demo: Mini-Project                | 0:05     |
| 10:05AM | 2   | Student Do: Mini-Project                     | 0:60     |
| 11:05AM | 3   | Instructor Review: Mini-Project              | 0:10     |
| 11:15AM | 4   | Introduce Challenge                          | 0:05     |
| 11:20AM | 5   | FLEX                                         | 0:30     |
| 11:50PM | 6   | Instructor Do: Stoke Curiosity               | 0:10     |
| 12:00PM | 7   | BREAK                                        | 0:30     |
| 12:30PM | 8   | Instructor Demo: MVC Handlebars.js Intro     | 0:05     |
| 12:35PM | 9   | Student Do: MVC Handlebars.js Intro          | 0:15     |
| 12:50PM | 10  | Instructor Review: MVC Handlebars.js Intro   | 0:10     |
| 1:00PM  | 11  | Instructor Demo: Handlebars.js Expressions   | 0:05     |
| 1:05PM  | 12  | Student Do: Handlebars.js Expressions        | 0:15     |
| 1:20PM  | 13  | Instructor Review: Handlebars.js Expressions | 0:10     |
| 1:30PM  | 14  | Instructor Demo: Built-In Helpers            | 0:05     |
| 1:35PM  | 15  | Student Do: Built-In Helpers                 | 0:15     |
| 1:50PM  | 16  | Instructor Review: Built-In Helpers          | 0:10     |
| 2:00PM  | 17  | Instructor Demo: Data Serialization          | 0:05     |
| 2:05PM  | 18  | Student Do: Data Serialization               | 0:15     |
| 2:20PM  | 19  | Instructor Review: Data Serialization        | 0:10     |
| 2:30PM  | 20  | END                                          | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini Project (5 min)

* Welcome students to class.

* Navigate to `28-Stu_Mini-Project/Main` and run `npm install` from the command line. Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. To speed things up, run `node seeds/seed.js` as well to seed the database tables.

* Run `npm start` from the command line and use Insomnia to demonstrate the following:

  * 🔑 When we perform a GET request to `/api/travellers/:id` (pick an `id`), we receive data for a traveller, along with the locations they plan on visiting and more information for that trip, as shown in the following example:

    ```json
    {
      "id": 2,
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "trip_locations": [
        {
          "id": 4,
          "location_name": "Miami",
          "trip": {
            "id": 4,
            "trip_date": null,
            "traveller_amount": 3,
            "traveller_id": 2,
            "location_id": 4
          }
        }
      ]
    }
    ```

  * 🔑 When we perform a GET request to `/api/locations/:id` (again, pick an `id`), we receive data about a location and which travellers have planned trips there.

  * 🔑 This data is spread across three tables, where travellers can visit many locations and locations can have many travellers&mdash;through trips. A trip can only be created if a traveller and a location already exist.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Would this be considered a one-to-one association, a one-to-many association, or a different type of relationship?

  * 🙋 It's a type of relationship known as **many-to-many**, where data in either table is not necessarily owned by an entity but rather shared. For example, think of a blog. Blog posts can have multiple tags, and any given tag can be applied to many blog posts.

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project`.

* Break your students into groups that will work together on this activity.

  ````md
  # Module 13 Mini-Project: Travel Planner

  In this mini-project, you will work with a group to build an API using Node.js, Express.js, MySQL, and Sequelize, and you will deploy it to Heroku.

  ## User Stories

  * As a traveller, I want to be able to create an account.

  * As a traveller, I want to be able to create a new trip for myself using a location from a list.

  * As a traveller, I want to be able to create and view location data.

  * As a traveller, I want to be able to view all of the trips I'm taking, along with their locations.

  ## Acceptance Criteria

  * It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia.

  * It's done when the POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia.

  * It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia. 

  * It's done when the DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia.

  * It's done when the GET route `/api/locations` returns all location data in Insomnia.

  * It's done when the POST route `/api/locations` creates location data and returns a successful response in Insomnia.

  * It's done when the GET route `/api/locations/:id` returns a single location's data, with its associated trips, in Insomnia. 

  * It's done when the DELETE route `/api/locations/:id` removes a location and any trips associated with it and returns a successful response in Insomnia.

  * It's done when the POST route `/api/trips` creates trip data between associated travellers and locations.

  * It's done when the DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia.

  * It's done when the API is successfully deployed to Heroku with a MySQL database.

  ## Specifications 

  * Database models should have the following fields and associations:

    * `Traveller`

      * `id`: primary key

      * `name`
        
      * `email`

    * `Location`

      * `id`: primary key
      
      * `name`

    * `Trips`
        
      * `id`: primary key

      * `trip_budget` 
        
      * `traveller_amount`
        
      * `traveller_id`: non-unique foreign key that references the `Traveller` model's `id` field (`Traveller.id`)

      * `location_id`: non-unique foreign key that references the `Location` model's `id` field (`Location.id`)

    * Travellers have many locations, and locations have many travellers through trips (many-to-many association).

    * Set the `unique` flag to `false` to avoid a SQL error when creating the many-to-many relationship, because travellers can take multiple trips.

  ## 📝 Notes

  Refer to the documentation: 

  * [Sequelize documentation on many-to-many relationships](https://sequelize.org/master/manual/assocs.html#many-to-many-relationships)

  * [The Full-Stack Blog guide to deploying with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

  Use the following sample data as the request body POST `/api/trips` route:

    ```json
    {
      "trip_budget": 2000.50,
      "traveller_amount": 6,
      "traveller_id": 1,
      "location_id": 2
    }
    ```

  ---

  ## 💡 Hints

    * What model association option can we set to automatically delete associated data?

    * How can we use the data in `Develop/seeds` to provide starter data for locations and travellers and not have to create it ourselves?

    * If we're deploying this to Heroku, can we work on this from within the class repository, or should we make a new GitHub repo?

  ## 🏆 Bonus

    If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * Add validations to all of the model data.

    * Create a password hashing and login system for travellers.

    * Set up a **super many-to-many relationship** between travellers, locations, and trips to provide more querying options. To learn more, see the [Sequelize documentation on advanced many-to-many relationships](https://sequelize.org/master/manual/advanced-many-to-many.html).
  ````

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Mini-Project (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Two foreign keys in through table `Trip`

  * ✔️ `.belongsToMany()` and `through` option

  * ✔️ `include` with a through table

  * ✔️ JawsDB environment variable for production

* Open `28-Stu_Mini-Project/Solved/models/Trip.js` in your IDE and explain the following:

  * 🔑 We want a `Trip` model to be the joining table (or **through table**, in Sequelize terms) between locations and travellers, so we create foreign key columns for both. See the following code for an example:

    ```js
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'traveller',
        key: 'id'
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id'
      }
    }
    ```

* Open `28-Stu_Mini-Project/Solved/models/index.js` in your IDE and explain the following:

  * 🔑 We associate locations and travellers to one another through trips, as follows:

    ```js
    Traveller.belongsToMany(Location, {
      through: Trip,
      // Define an alias for when data is retrieved
      as: 'planned_trips',
      foreignKey: 'traveller_id'
    });

    Location.belongsToMany(Traveller, {
      through: Trip,
      // Define an alias for when data is retrieved
      as: 'location_travellers',
      foreignKey: 'location_id'
    });
    ```

* Open `28-Stu_Mini-Project/Solved/routes/api/travellerRoutes.js` in your IDE and explain the following:

  * 🔑 In the GET routes, we use `include` with the `through` option, to perform a many-to-many JOIN like in the following example:

    ```js
    // From`travellerRoutes.js`
    const travellerData = await Traveller.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      include: [{ model: Location, through: Trip, as: 'planned_trips' }]
    });
    ```

  * We do not use the `include` option in the routes that retrieve all data, because typically we would not need that data until we are viewing a single item's detailed data.

* Open `28-Stu_Mini-Project/Solved/config/connection.js` in your IDE and explain the following:

  * 🔑 We use `process.env.JAWSDB_URL` as a placeholder value that will be used in production by Heroku, as follows:

    ```js
    if (process.env.JAWSDB_URL) {
      sequelize = new Sequelize(process.env.JAWSDB_URL);
    } else {
      sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: 'localhost',
          dialect: 'mysql',
          port: 3306
        }
      );
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ With this many-to-many relationship, can multiple travellers create a trip to the same location?

  * 🙋 Yes! The idea of many-to-many relationships is that multiple connections can exist in a single set of data. The through table helps to store those pairings and prevent any duplicate data from being formed.

  * ☝️ Can we use the local machine's MySQL database instead of the one through Heroku?

  * 🙋 Yes, we can&mdash;but that would require us to leave the machine on all the time, so it is not a good idea.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on many-to-many relationships](https://sequelize.org/master/manual/assocs.html#many-to-many-relationships), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main` and run `npm install` from the command line. Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. To speed things up, run `node seeds/seed.js` as well to seed the database tables.

* Run `npm start` from the command line and use Insomnia to demonstrate the following:

  * We will build an e-commerce application back end that works with products, categories, and tags.

  * When we perform a GET request to `/api/products`, we get all products and their associated categories and tags.

* Open `02-Challenge/Develop` in your IDE and explain the following:

  * The structure for this application is already in place; we just need to create the models and finish the routes.

  * Students can use the comments in the files to help provide context as to what's needed.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 How to structure and use a basic e-commerce database.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 With the help of Sequelize, we will build one-to-many and many-to-many relationships and perform CRUD actions on the database using RESTful API endpoints.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Establishing data relationships is a common&mdash;and crucial&mdash;aspect of back-end web development. If any part of your future career involves working on the back end of a database, you will need to be comfortable using technologies like these to create data associations.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1RIA8VZVN4_JAaL0xSPf1GPc8b5dJlM5V43EVNEZ_kfA/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **MVC**
  
    * This module is all about the MVC architectural pattern, how it follows the separation of concerns principle, and the tools that help us follow this pattern&mdash;like the templating engine Handlebars.js.

  * **What is the separation of concerns principle?**
  
    * **Separation of concerns** is a design principle that each section of a program should address a separate concern.

    * In a restaurant, the chef’s concern is to cook the food, while the server’s concern is to take orders and serve food, and a customer’s concern is to order and eat.

    * We do not expect the customer to go back into the kitchen to cook food or the server to sit at a table and order, etc.

  * **What is MVC?**
  
    * The **Model-View-Controller (MVC)** framework is an architectural pattern that adheres to the separation of concerns principle.

    * The **Model** stores data and data-related logic.

    * The **View** is in charge of UI/UX concerns, or what a user will see and interact with.

    * The **Controller** is the interface between Models and Views. It processes requests from the View, uses the Model to manipulate data, and sends data to the View to render.

  * **What is a template engine?**
  
    * A **template engine** is software that allows us to combine data with a static template to generate dynamic HTML. Most template engines offer the following features:

      * Placeholders for data that we wish to include

      * Functions

      * Conditional rendering and looping

      * Text replacement

  * **What are the advantages of using template engines?**
  
    * They help us follow the separation of concerns principle and MVC by providing an easy, clean way to separate HTML and JavaScript.

    * They offer tools that reduce repetition in code.

    * Templates are easy to create, use, and maintain.

    * They improve SEO and make fewer client-to-server requests.

  * **What is Handlebars.js?**
  
    * **Handlebars.js** is an extension of the templating language Mustache.

    * It is a logicless templating language that separates code from the View.

    * It compiles templates into a single resource and then returns the HTML after replacing variables with data.

    * It is a pure rendering engine&mdash;meaning that it has no built-in support for event handling, accessing back-end services, or making incremental DOM updates.

  * **Why are we learning Handlebars.js?**
  
    * It gives us a great introduction to template engines because it is easy to use but offers a ton of functionality. It isn’t the only option out there, but it is a great place to start!

    * It prepares us to encounter other languages that have this sort of templating built into them.

    * It helps us follow separation of concerns and the MVC framework.

    * It is a step towards learning to use heavier frameworks like React.js to build single-page applications.
  
  * **How can we learn to use and implement MVC and Handlebars.js?**

    * Handlebars.js and other template engines are designed to make implementing the MVC pattern easier.

    * You can try the following strategies to learn MVC and Handlebars.js:

      * Read the official documentation and practice with the provided examples.

      * Reverse-engineer finished code to see how something was accomplished.

      * Build something from scratch.

      * Debug a broken app.

      * And most importantly, ask questions!

* Navigate to `28-Stu_Mini-Project/Main` in your command line.

* If you haven't already, rename the `.env.EXAMPLE` file and fill in your credentials. Run `seeds/seed.js` to data.

* Run `npm install` and `npm start` in the command line.

* Navigate to <http://localhost:3001/> in your browser and demonstrate the following:

  * The mini-project for this module uses Handlebars.js to build the View for a crowdfunding app.

  * The homepage for the crowdfunding app is rendered using Handlebars.js templates and displays all projects from the database.

* Navigate to <http://localhost:3001/login> in your browser and demonstrate the following:

  * A user can create an account if they don't have one.

  * Log into an account using the credentials `sal@hotmail.com` and `password12345`.
  
* Once logged in, navigate to <http://localhost:3001/profile> in your browser and demonstrate the following:

  * Logged-in users can view their projects when they visit `/profile`.

  * Logged-in users can create and delete projects when they visit `/profile`.

* Click the logout button on the page to demonstrate that a user can log out of their account.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning the MVC framework, template engines like Handlebars.js, and data serialization.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 For this project, we will need to implement the skills we've already acquired in Sequelize, MySQL, and object-oriented programming. It will also be a true full-stack application, including both a front end and a back end.

  * ☝️ How does this project relate to your career goals?

  * 🙋 You will be sure to encounter the MVC framework as a professional developer, and template engines like Handlebars.js will help you write HTML content more intuitively (instead of as a string). Finally, all this work will prepare you to use heavier frameworks, like React.js.

* Answer any questions before proceeding.

### 7. BREAK (30 min)

### 8. Instructor Demo: MVC Handlebars.js Intro (5 min)

* Run `npm install` and `npm start` from the command line.

* Open `01-Ins_MVC-Handlebars-Intro/controllers/dish-routes.js` in your IDE and demonstrate the following:

  * 🔑 The MVC architectural pattern is used in most modern web applications.

  * 🔑 The MVC framework includes Models, Views, and Controllers. The Controller is the interface between the View and the Model. It processes requests, uses the Model to manipulate data, and sends data to the View to render.

  * `dish-routes.js` currently includes a GET route. Right now, the route tells the View to render `index.html` when the user visits `/`, as follows:

      ```js
         router.get('/', async (req, res) => {
           res.sendFile(path.join(__dirname, '../views/index.html'));
         });
      ```

* Open `01-Ins_MVC-Handlebars-Intro/views/index.html` in your IDE and demonstrate the following:

  * 🔑 The View is responsible for UI/UX concerns (what a user can view in the browser).

  * For now the dishes are hardcoded in `views/index.html`. But today you will learn how to render data dynamically using Handlebars.js, Sequelize, and MYSQL.

* Navigate to <http://localhost:3001/> in your browser and demonstrate the following:

  * The View in this application shows a menu of dishes that guests plan to bring to a potluck party.

* Open `01-Ins_MVC-Handlebars-Intro/models/Dish.js` in your IDE and demonstrate the following:

  * 🔑 `Dish.js` is a Model. Models are in charge of data-related logic, like creating a new dish object.

  * We learned how to set up models previously, when we worked with ORMs. Remember, the data is hardcoded in `index.js`, so `Dish.js` is set up, but isn't actually doing anything at the moment.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does MVC stand for?

  * 🙋 MVC stands for Model-View-Controller.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_MVC-Handlebars-Intro/README.md`.

### 9. Student Do: MVC Handlebars.js Intro (15 min)

* Direct students to the activity instructions found in `02-Stu_MVC-Handlebars-Intro/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of MVC and Handlebars.js

  Work with a partner to add comments describing the functionality of the code found in [Dish.js](./Unsolved/models/Dish.js), [main.handlebars](./Unsolved/views/layouts/main.handlebars), and [dish-routes.js](./Unsolved/controllers/dish-routes.js).

  ## 📝 Notes

  Refer to the documentation: 

  [npm documentation on Express Handlebars](https://www.npmjs.com/package/express-handlebars)

  [MDN Web Docs on MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other template engines? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: MVC Handlebars.js Intro (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with MVC and Handlebars.js? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Model

  * ✔️ View

  * ✔️ Controller

  * ✔️ Handlebars.js static templates

* Open `02-Stu_MVC-Handlebars-Intro/Solved/package.json` in your IDE and explain the following:

  * We've added `express-handlebars` as a dependency in `package.json`, so we need to run `npm install`&mdash;as shown in the following example&mdash;to ensure that all the packages are installed before working on the code:

    ```json
    "dependencies": {
      "express": "^4.16.3",
      "express-handlebars": "^3.0.0"
      }
    ```

* Open `02-Stu_MVC-Handlebars-Intro/Solved/server.js` in your IDE and explain the following:

  * We import the `express-handlebars` library in `server.js`, as follows:

    ```js
    const exphbs = require('express-handlebars');
    const hbs = exphbs.create({});
    ```

  * We set Handlebars.js as the default template engine, as shown in the following example:

    ```js
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');  
    ```

* Open `02-Stu_MVC-Handlebars-Intro/Solved/controllers/dish-routes.js` in your IDE and explain the following:

  * 🔑 `dish-routes.js` is the Controller.

  * As the Controller, `dish-routes.js` interfaces between the View and the Model.

  * Now that we are using Handlebars.js, the GET route directs the View to render `all.handlebars`.

  * The contents of `all.handlebars` will now become `{{{ body }}}` in the main layout, as follows:

      ```js
      router.get('/', async (req, res) => {
        res.render('all');
      });
      ```

* Open `02-Stu_MVC-Handlebars-Intro/Solved/views/layouts/main.handlebars` in your IDE and explain the following:

  * 🔑 `main.handlebars` is part of the View.
  
  * The file looks like standard HTML, except for `{{{ body}}}`, which is a Handlebars.js placeholder. Whatever the Controller directs the View to render will be plugged into that placeholder, as shown in the following example:

    ```html
        <main class="container container-fluid mt-5">
          {{{ body }}}
        </main>
    ```

* Open `02-Stu_MVC-Handlebars-Intro/Solved/views/all.handlebars` in your IDE and explain the following:

  * 🔑 `all.handlebars` is also part of the View. Currently, we are rendering hardcoded data.

* Open `02-Stu_MVC-Handlebars-Intro/Solved/models/Dish.js` in your IDE and explain the following:

  * 🔑 `Dish.js` is a Model. But it is not actually doing anything yet, because we are rendering hardcoded data.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the `{{{ body }}}` syntax?

  * 🙋 It is a Handlebars.js placeholder.

  * ☝️ How does the View know what to plug into `{{{ body }}}`?

  * 🙋 The routes in the Controller will indicate which template to render.

  * ☝️ For now we are hardcoding the data, but where would the Controller typically get data to pass to the View?

  * 🙋 The Model is in charge of the data logic, so normally the Controller would retrieve and manipulate data using the Model.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Handlebars.js documentation](https://handlebarsjs.com/guide/#what-is-handlebars), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Handlebars.js Expressions (5 min)

* Open `03-Ins_Handlebars-Expressions/controllers/dish-routes.js` in your IDE and demonstrate the following:

  * In the previous activity, we hardcoded data in the View. Now we are beginning to pass static data (an array of objects called `dish`) to the View in the Controller.

  * Each object includes a `dish_name` and `description` key-value pair, like in the following example:

    ```js
      {
        dish_name: 'French Bread with Brie Cheese',
        description: 'French baguette with warm brie',
      },
    ```

  * The Controller includes a GET route that passes the static data for one dish into a Handlebars.js template, as follows:

    ```js
     router.get('/dish/:num', async (req, res) => {
      return res.render('dish', dishes[req.params.num - 1]);
     });
    ```

* Navigate to `03-Ins_Handlebars-Expressions/views/dish.handlebars` in your IDE and demonstrate the following:

  * 🔑 The template for one dish uses a Handlebars.js expression to render the dish name. Inside the double curly brackets, we include the `dish_name` key so that its value will be rendered&mdash;as shown in the following example:

    ```html
      <div class="dish-card">
        <div class="dish-card-header">
          {{dish_name}}
        </div>
      </div>
    ```

* Run `npm install` and `npm start` from the command line.

* Navigate to <http://local:host3001/dish/1> and demonstrate the following:

  * 🔑 When we view the page for one dish now, we see the name of that dish.

* Navigate to <http://local:host3001/dish/2> and demonstrate the following:

  * 🔑 And when we view the page for another dish, we see that the template is the same, but the data has changed.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would insert the key of the value we wish to render into a Handlebars.js expression in the correct template.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Handlebars-Expressions/README.md`.

### 12. Student Do: Handlebars.js Expressions (15 min)

* Direct students to the activity instructions found in `04-Stu_Handlebars-Expressions/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement a GET Route for Food Item Descriptions 

  Work with a partner to implement the following user story:

  * As a party guest, I want to see a description of one food item that will be at the potluck when I visit <http://localhost:3001/dish/:num>.

  ## Acceptance Criteria

  * It's done when the route called `/dish/:num` is properly configured to retrieve and return a food item and its description.

  * It's done when the view displays a description for the food item, where the list number matches the route `/dish/:num`.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A webpage with the header "Potluck Party!" displays the name and description for a Pork Gyoza dish.](images/dish-description.png)

  ---

  ## 💡 Hints

  How can you ensure that the correct Handlebars.js template is rendered?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we render an array of objects using Handlebars.js?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Handlebars.js Expressions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Handlebars.js expressions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ GET route for `/dish/:num`

  * ✔️ Handlebars.js expressions

* Open `04-Stu_Handlebars-Expressions/Solved/controllers/dish-routes.js` in your IDE and explain the following:

  * 🔑 To render a description for a dish, we first need to build a route for `/dish/:num`.
  
  * We render the `dish` template by passing it in as an argument. Then we use params to select the correct dish to render in the template, based on the index of the object. Now we have access to a dish description through a dish object, as follows:

    ```js
    router.get('/dish/:num', async (req, res) => {
      return res.render('dish', dishes[req.params.num - 1]);
    });
    ```

* Open `04-Stu_Handlebars-Expressions/Solved/views/dish.handlebars` in your IDE and explain the following:

  * 🔑 We create a Handlebars.js expression, `{{ description }}`, passing in the `description` key name like in the following example:

    ```html
      <div class="card-body">
        <p>
          Description:
          {{description}}
        </p>
      </div>
    ```

* Run `npm install` and `npm start` from the command line.

* Navigate to <http://local:host3001/dish/1> and demonstrate the following:

  * Now, when we view the page for one dish, we see the name of that dish and the dish description.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the syntax for a Handlebars.js expression?

  * 🙋 `{{ data }}`

  * ☝️ How do we render data using a Handlebars.js expression?

  * 🙋 Inside the curly brackets, we insert the key name of the value we wish to render.

  * ☝️ How does this relate to MVC?

  * 🙋 The Controller passes data to the View via a route, and the View renders that data in the browser.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Handlebars.js documentation on expressions](https://handlebarsjs.com/guide/expressions.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Built-In Helpers (5 min)

* Open `05-Ins_Built-In-Helpers/controllers/dish-routes.js` in your IDE and explain the following:

  * Now that `dishes` is hardcoded into `dish-routes.js`, we pass it in as an argument to `render()`, like in the following example:

    ```js
    router.get('/', async (req, res) => {
      res.render('all', { dishes });
    });
    ```

  * 🔑 We can use built-in Handlebars.js helpers to conditionally render blocks of code, iterate over lists, and more. Because the Controller is passing `dishes` to the View through `render()`, we can use a built-in helper to iterate over it in the template.

* Open `05-Ins_Built-In-Helpers/views/all.handlebars` in your IDE and demonstrate the following:

  * 🔑 In `all.handlebars`, we are using `#each` to iterate over and render a menu for the dish data.

  * In this case, `dishes` represents the array of dish objects that the Controller passed to the template. `dish` represents one dish object in that array.

  * 🔑 `{{#each dishes as |dish|}}` is followed by the block of code to be rendered for each dish object. We could also use the syntax `{{#each dish}}` and then use `this.id` and `this.dish_name` in the block of code.
  
  * 🔑 Then we close the `#each` helper with `{{/each}}`, as follows:

    ```html
      {{#each dishes as |dish|}}
        <div class="dish col-md-5">
          <p>
            {{dish.id}}.
            {{dish.dish_name}}
          </p>
        </div>
        <div class="col-md-7">
          <p>
            <!-- guest_name will eventually go here -->
          </p>
        </div>
      {{/each}}
    ```

* Run `npm install` and `npm start` from the command line.

* Navigate to <http://localhost:3001/> in your browser and demonstrate the following:

  * Here we see that each dish name is successfully rendered on the menu card.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When should we use built-in helpers?

  * 🙋 If we need to iterate over data or conditionally render blocks of code.

  * ☝️ Where would we include built-in helpers?

  * 🙋 We can include built-in helpers in Handlebars.js templates.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Built-In-Helpers/README.md`.

### 15. Student Do: Built-In Helpers (15 min)

* Direct students to the activity instructions found in `06-Stu_Built-In-Helpers/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Conditionally Render Food Allergens

  Work with a partner to implement the following user story:

  * As a party guest, I want to know whether a food item contains nuts.

  ## Acceptance Criteria

  * It's done when the View displays the message "Contains Nuts" under the food items that contain nuts.

  ## 📝 Notes

  Refer to the documentation: 

  [Handlebars.js documentation on built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html#if)

  ## 💡 Hints

  Which built-in helper conditionally renders a block?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Which built-in helper method is the inverse of `#if`? What is a use case for rendering a block if an expression is a falsy value? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Built-In Helpers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with built-in helpers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `#if`

* Open `06_Stu-Built-in-Helpers/Solved/controllers/dish-routes.js` in your IDE and explain the following:

  * The dish data includes a Boolean (`has_nuts`) that is set to `true` for the dishes that contain nuts, as shown in the following example:

    ```js
        {
          id: 2,
          dish_name: 'Cheese Plate with Spanish Chorizo',
          description: 'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
          has_nuts: true,
        },
    ```

* Open `06-Stu_Built-In-Helpers/Solved/views/dish.handlebars` in your IDE and explain the following:

  * 🔑 We want to make sure that the message "Contains Nuts" is only rendered for dish objects that actually contain nuts. To do this, we need to conditionally render a block of code with the built-in `#if` helper.

  * 🔑 We provide `has_nuts` as the condition when we open the `#if` helper. Then we include the block of code that we want to conditionally render. Finally, we close `#if`, as follows:

    ```html
      {{#if has_nuts}}
        <p class="has-nuts">
          Contains Nuts
        </p>
      {{/if}}
    ```

* Run `npm install` and `npm start` from the command line.

* Navigate to <http://local:host3001/dish/2> in your browser and demonstrate the following:

  * The message "Contains Nuts" shows up when a dish contains nuts!

* Navigate to <http://local:host3001/dish/1> in your browser and demonstrate the following:

  * The message is not being rendered here, because the dish does not contain nuts.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When is it a good idea to use a Handlebars.js built-in helper?

  * 🙋 We might want to use built-in helpers when we need to iterate over a list, conditionally render a block of code, and so on.

  * ☝️ How do built-in helpers relate to MVC?

  * 🙋 Built-in helpers relate to the View in the MVC framework because they aid an application in displaying the right data to the user at the right time.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Handlebars.js documentation on built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html#each), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Data Serialization (5 min)

* Rename the `07-Ins_Data-Serialization/.env.EXAMPLE` file to `.env` and input your credentials.

* Run `node seeds/index.js` from the command line and explain the following:

  * 🔑 Now we will move on to using Sequelize and MySQL. So far, we've focused on the Controller and the View. Now that we have a seeded database, we can look at how the Model fits into the MVC framework.

* Open `07-Ins_Data-Serialization/views/dish.handlebars` in your IDE and demonstrate the following:

  * Nothing has changed in the View. We are still using Handlebars.js expressions and built-in helpers to render data that is passed in.

* Open `07-Ins_Data-Serialization/controllers/dish-routes.js` in your IDE and demonstrate the following:

  * For the purpose of this demo, the Controller includes two GET routes for one dish. The first does not serialize data; the second one (currently commented out) does serialize the data.

  * 🔑 With the Model set up, the Controller has changed. Now we are using `findByPk()` to locate a dish in the database. Once `dishData` is found, we pass it to the `dish` template in the View to be rendered, as shown in the following example:

    ```js
    // get one dish without serializing data
    router.get('/dish/:id', async (req, res) => {
      try {
        const dishData = await Dish.findByPk(req.params.id);
        console.log(dishData)
        res.render('dish', dishData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    ```

* Run `npm install` and `npm start`, navigate to <http://local:host3001/dish/1> in your browser, and demonstrate the following:

  * 🔑 The object will be returned as a Sequelize object, which can be difficult to parse through on the template side.

  * 🔑 When we check the browser, the template is there, but the data is missing.

  * 🔑 When we check the command prompt, we see that we are logging the Sequelize object. Look at all of the extra data in the following code:

    ```js
      dish {
      dataValues: {
        id: 2,
        dish_name: 'Fish Tacos',
        description: 'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
        guest_name: 'Carlos',
        has_nuts: false,
        createdAt: 2020-11-17T22:33:06.000Z,
        updatedAt: 2020-11-17T22:33:06.000Z
      },
      _previousDataValues: {
        id: 2,
        dish_name: 'Fish Tacos',
        description: 'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
        guest_name: 'Carlos',
        has_nuts: false,
        createdAt: 2020-11-17T22:33:06.000Z,
        updatedAt: 2020-11-17T22:33:06.000Z
      },
      _changed: {},
      _modelOptions: {
        timestamps: true,
        validate: {},
        freezeTableName: true,
        underscored: true,
        paranoid: false,
        rejectOnEmpty: false,
        whereCollection: { id: '2' },
        schema: null,
        schemaDelimiter: '',
        defaultScope: {},
        scopes: {},
        indexes: [],
        name: { plural: 'dishes', singular: 'dish' },
        omitNull: false,
        sequelize: Sequelize {
          options: [Object],
          config: [Object],
          dialect: [MysqlDialect],
          queryInterface: [QueryInterface],
          models: [Object],
          modelManager: [ModelManager],
          connectionManager: [ConnectionManager],
          importCache: {}
        },
        hooks: {}
      },
      _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        raw: true,
        attributes: [
          'id',
          'dish_name',
          'description',
          'guest_name',
          'has_nuts',
          'createdAt',
          'updatedAt'
        ]
      },
      isNewRecord: false
    }
    ```

  * 🔑 So the Controller must **serialize** the data in the route to get rid of all of that extra information, before passing it to the templates in the View.

* In `07-Ins_Data-Serialization/controllers/dish-routes.js`, comment out the first GET route and uncomment the second GET route to demonstrate the following:

  * 🔑 The second GET route in the Controller is serializing the Sequalize object.

  * 🔑 We accomplish this by attaching `.get({ plain: true })` to the returned object `dishData`. Then we pass the serialized data as `dish` through to the `'dish'` template, like in the following example:

    ```js
      // get one dish with serialized data
      router.get('/dish/:id', async (req, res) => {
        try {
          const dishData = await Dish.findByPk(req.params.id);
          const dish = dishData.get({ plain: true });
          res.render('dish', dish);
        } catch (err) {
          res.status(500).json(err);
        }
      });
    ```

* Restart your server, navigate to <http://local:host3001/dish/1> in your browser, and demonstrate the following:.

  * The View for one dish is now rendering both the template and the data.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we ensure that the templates in the View can parse the data sent by the Controller?

  * 🙋 We serialize the data in the Controller so that we only send the necessary data to the View.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Data-Serialization/README.md`.

### 18. Student Do: Data Serialization (15 min)

* Direct students to the activity instructions found in `08-Stu_Data-Serialization/README.md`.

* Break your students into pairs that will work together on this activity.

* Remind students to set up their `dish_db` database and seed it before starting on the activity.

  > **Important**: Students should also modify the `.env.EXAMPLE` file to include their MySQL user and password information and run `npm install` before every subsequent activity.

  ```md
  # 🐛 Main View Is Not Displaying Food Items 

  Work with a partner to resolve the following issue(s):

  * As a party guest, I would like to view a full menu of food items that other guests will bring to the party.

  ## Expected Behavior

  * When a party guest views the page, they see a menu of food items.

  ## Actual Behavior

  * When a party guest views the page, no food items appear on the menu.

  ## Steps to Reproduce the Problem

  1. Run `npm install`. 

  2. Confirm that the MySQL server is turned on.

  3. Run `CREATE DATABASE dish_db;` to create a new database.

  4. Return to your console and run `node seeds/index.js` to seed the database.

  5. Run `npm start`.

  6. Navigate to <http://localhost:3001/> in your browser.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The "Potluck Party!" webpage displays a list of dishes and the name of the guest who will bring each one.](images/Full-Menu.png)

  ---

  ## 💡 Hints

  How can you change your route so that the View will display the menu?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How else could you serialize data down to the properties that you need? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: Data Serialization (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with data serialization? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `map()`

  * ✔️ Data serialization

* Open `08-Stu_Data-Serialization/Solved/controllers/dish-routes.js` in your IDE and explain the following:

  * To render a full menu for party guests, using a GET route, we must first query the database for all dish objects by using the Sequelize method `findAll()`.

  * 🔑 Instead of receiving one object, we receive an array of dish objects that need to be serialized before being rendered. We use `map()` to return a new array of serialized objects by adding `.get({ plain: true})` to each `dish` object.

  * Finally, the Controller sends the newly serialized array of dishes to the `'all'` template in the View, as follows:

    ```js
    router.get('/', async (req, res) => {
      const dishData = await Dish.findAll().catch((err) => { 
        res.json(err);
       }); 
      const dishes = dishData.map((dish) => dish.get({ plain: true }));
      res.render('all', { dishes });
    });
    ```

  * Run `npm install` and `npm start` from the command line, then navigate to <http://localhost:3001/> in your browser.

  * The View is rendering a full menu of dishes, as expected.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we need to serialize data in the Controller?

  * 🙋 Sequelize objects include extra data that the View does not need. We serialize data in the Controller so that the templates in the View can parse and render the data from the Model.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on Models](https://sequelize.org/master/class/lib/model.js~Model.html), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
