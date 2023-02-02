# 07.1 Full-Time Lesson Plan: Object-Relational Mapping (ORM)

## Overview 

In today's class, students will be introduced to the Sequelize ORM. Working with a Sequelize model, they will use CRUD methods within Express.js routes. Students will also use `async` and `await` syntax to create a synchronous seed script. Students will be formally introduced to RESTful API paradigms. Along with `async` and `await`, they will use `try...catch` to properly catch errors and return them to the user. Finally, students will incorporate validators and constraints to prevent bad data from being saved into the database. 

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Sequelize-Setup` through `14-Stu_Validation`.

* You will use MySQL for today's activities, so be sure to have your MySQL server up and running. You can create the `library_db` and `user_db` database ahead of time or demonstrate it live in class.

* The first activity, `01-Ins_Sequelize-Setup`, hardcodes the database credentials in the `connection.js` file. Every subsequent activity uses a `.env` file. Be sure to create one or rename the existing `.env.EXAMPLE` file before demonstrating each activity.

* Instead of relying on a front end, all of the activities use Insomnia to test the routes. Be sure to have it installed and set up for class.

* Activities `05-Ins_Create` through `08-Stu_Update-Delete` include a `/seed` POST route to make it easier to populate the database with books. In activity `09-Ins_Async-Await`, we switch to using a proper seed script in the `seeds` directory.

* To demo the mini-project, you'll need to create a `traveller_db` database. Use the `seed.js` file located in `28-Stu_Mini-Project/Main/seeds` to populate the database before the demo.

* Google data breaches this year to find a list of businesses that have been recently affected by security issues. You can refer to this list during the second Stoke Curiosity section of the lesson.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review. 

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Connect to a database using Sequelize and environment variables.

* Create and configure a Sequelize model.

* Perform CRUD operations with Sequelize methods.

* Write a script to seed a database with initial data.

* Convert asynchronous code to synchronous code using `async` and `await`.

* Catch errors with `try...catch`.

* Ensure that HTTP requests respond with the correct status code.

* Perform checks on a Sequelize model with validation tools.

## Slide Deck

* [Module 13 Slide Deck](https://docs.google.com/presentation/d/12L1MgEGt-oHIPMNWisv2QAxZ3J4NQNpAxk2jY2rXtyM/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity     | 0:10     |
| 10:10AM| 2   | Instructor Demo: Sequelize Setup   | 0:05     |
| 10:15AM| 3   | Student Do: Sequelize Setup        | 0:15     |
| 10:30AM| 4   | Instructor Review: Sequelize Setup | 0:10     |
| 10:40AM| 5   | Instructor Demo: Models            | 0:05     |
| 10:45AM| 6   | Student Do: Models                 | 0:15     |
| 11:00AM| 7   | Instructor Review: Models          | 0:10     |
| 11:10AM| 8   | Instructor Demo: Create            | 0:05     |
| 11:15AM| 9   | Student Do: Create Read            | 0:15     |
| 11:30AM| 10  | Instructor Review: Create Read     | 0:10     |
| 11:40AM| 11  | Instructor Demo: Update Delete     | 0:05     |
| 11:45AM| 12  | Student Do: Update Delete          | 0:15     |
| 12:00PM| 13  | BREAK                              | 0:30     |
| 12:30PM| 14  | Instructor Review: Update Delete   | 0:10     |
| 12:40PM| 15  | Instructor Demo: async and await   | 0:05     |
| 12:45AM| 16  | Student Do: async and await        | 0:15     |
| 1:00PM | 17  | Instructor Review: async and await | 0:15     |
| 1:15PM| 18  | Instructor Do: Stoke Curiosity      | 0:10     |
| 1:25PM| 19  | Instructor Demo: RESTful Routes     | 0:05     |
| 1:30PM| 20  | Student Do: RESTful Routes          | 0:15     |
| 1:45PM| 21  | Instructor Review: RESTful Routes   | 0:10     |
| 1:55PM| 22  | Instructor Demo: Validation         | 0:05     |
| 2:00PM| 23  | Student Do: Validation              | 0:15     |
| 2:15PM| 24  | Instructor Review: Validation       | 0:15     |
| 2:30PM| 25  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/12L1MgEGt-oHIPMNWisv2QAxZ3J4NQNpAxk2jY2rXtyM/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Object-Relational Mapping**
  
    * This module is all about using **object-relational mappers**, or **ORMs**, to model your database data on the JavaScript side.

  * **What are some of the challenges of using plain SQL in JavaScript?**
  
    * It is prone to accidental syntax errors.

    * Complicated queries can be hard to follow.

    * It requires extra work to validate and secure data.

    * Similar routes can lead to repetitive queries being written.

    * Data relationships aren’t obvious just by looking at the code.
  
  * **What is object-oriented programming?**

    * Code is organized using objects instead of functions.

    * Objects can inherit properties and methods from other objects.

    * Multiple objects can be created from the same blueprint classes or constructor functions.
  
  * **How can objects help us manage SQL queries in JavaScript?**
  
    * We can set up object methods to run generic SQL queries based on the method’s parameters.

    * We can structure objects to mimic how the data is stored in the database, eliminating ambiguity.

    * We can import objects into any other module that needs to execute its SQL queries.
  
  * **Is there a library that might already do this for us?**
  
    * Of course there is! Sequelize is an object-relational mapper (ORM) that can be installed with npm. It provides the following benefits:

      * Allows you to model your data as JavaScript classes. 

      * Abstracts SQL queries to simpler object methods.

      * Provides built-in validation checks for securing data.

      * Makes it easier to visualize and join relational data.

      * And more!
  
  * **How can we learn to use and implement Sequelize?**

    * Sequelize and other ORMs were created to make managing and using data easier, but they still come with a learning curve!

    * You can try the following strategies to learn Sequelize:

      * Read the official documentation and practice with the provided examples.

      * Reverse-engineer finished code to see how something was accomplished.

      * Build something from scratch.

      * Debug a broken app.

      * And most importantly, ask questions!
  
  * **Mini-Project**

    * The mini-project for this module uses Sequelize to manage the data for a set of travel-related API routes.

* Navigate to `28-Stu_Mini-Project/Main` in your command line.

* If you haven't already, rename the `.env.EXAMPLE` file and fill in your credentials. Use the `seeds/seed.js` script to populate the database with test data.

* Run `npm start` from the command line to start the server.

* Open Insomnia and demonstrate the following:

  * We can make a GET request to `http://localhost:3001/api/travellers` to see all travellers in the database.

  * We can also make a GET request to `http://localhost:3001/api/locations` to see all locations in the database.

  * Additionally, we can make a POST request to `http://localhost:3001/api/trips` with the following JSON to create a new relationship between traveller and location:

    ```json
    {
      "traveller_id": 1,
      "location_id": 1,
      "trip_budget": 2000
    }
    ```

  * We can make a GET request to `http://localhost:3001/api/travellers/1` to see the traveller with their related trip information included.

  * We are using Sequelize on the back end to manage all of this data and track how one dataset relates to another.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 Sequelize, object-relational mapping, data management, etc.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We are continuing to use SQL and databases but will now focus on a more object-oriented approach.

  * ☝️ How does this project relate to your career goals?

  * 🙋 In this era of large apps with complex data, virtually every web application uses an object-relational mapper to assist with careful data management. If you work in any back-end capacity as a developer, you will need tools to better manage the flow of data more efficiently and securely. ORMs can help you do just that.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Sequelize Setup (5 min) 

* Open `01-Ins_Sequelize-Setup/package.json` in your IDE and explain the following:

  * 🔑 To get started, we include `sequelize` as a dependency. We also include `mysql2` to specify which flavor of SQL the Sequelize library should use, as follows:

    ```json
    "dependencies": {
      "express": "^4.17.1",
      "mysql2": "^2.2.5",
      "sequelize": "^6.3.5"
    }
    ```

  * From the command line, run `npm install` in the `01-Ins_Sequelize-Setup` directory to demonstrate installing the dependencies.

* Open `01-Ins_Sequelize-Setup/config/connection.js` in your IDE and explain the following:

  * 🔑 We use the `Sequelize()` constructor to create a new database connection, specifying the user credentials and location of the MySQL database.
  
  * Be sure to change the credentials to match your own before moving on.
  
  * The code should resemble the following example:

    ```js
    const sequelize = new Sequelize(
      // Database name
      'library_db',
      // User
      'root',
      // Password
      'myPassword',
      {
        // Database location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );
    ```


* Open `01-Ins_Sequelize-Setup/server.js` in your IDE and explain the following:

  * 🔑 We import the connection object, as follows:

    ```js
    const sequelize = require('./config/connection');
    ```
  
  * 🔑 We use the `sync()` method to connect to the database, as shown in the following example:

    ```js
    sequelize.sync().then(() => {
      app.listen(PORT, () => console.log('Now listening'));
    });
    ```

* From the command line, run `npm start` in the `01-Ins_Sequelize-Setup` directory and demonstrate the following: 

  * 🔑 Sequelize executes a simple test query to verify the database connection, as shown in the following example:

    ```text
    Executing (default): SELECT 1+1 AS result
    Now listening
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What dependencies does Sequelize require?

  * 🙋 The `sequelize` and `mysql2` npm packages.

  * ☝️ How would we connect to a different database?

  * 🙋 Change the credentials in the `Sequelize()` constructor in `connection.js`.

  * ☝️ Why would hardcoding these credentials be a bad idea?

  * 🙋 Different team members would have different credentials. And if the repository is public, anyone can see the credentials.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Sequelize-Setup/README.md`.

### 3. Student Do: Sequelize Setup (15 min) 

* Direct students to the activity instructions found in `02-Stu_Sequelize-Setup/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Replace Hardcoded Credentials With Environment Variables

  Work with a partner to implement the following user story:

  * As a developer, I want to protect my database credentials by not hardcoding them in the project files.

  ## Acceptance Criteria

  * It's done when the database name, user, and password are moved to environment variables.

  * It's done when Sequelize can connect to the database using the `dotenv` npm package.

  ## 📝 Notes

  Refer to the documentation: 

  * [npm documentation on dotenv](https://www.npmjs.com/package/dotenv)

  ---

  ## 💡 Hints

  How does the `dotenv` npm package use `.env` files?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you set environment variables from the command line? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 4. Instructor Review: Sequelize Setup (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `dotenv` package and connecting to Sequelize? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `.env` files

  * ✔️ `dotenv` npm package

* Open `02-Stu_Sequelize-Setup/Solved/package.json` in your IDE and explain the following: 

  * 🔑 We added the `dotenv` npm package as a dependency, as follows:

    ```json
    "dependencies": {
      "dotenv": "^8.2.0",
      "express": "^4.17.1",
      "mysql2": "^2.2.5",
      "sequelize": "^6.3.5"
    }
    ```

* Open `02-Stu_Sequelize-Setup/Solved/.env.EXAMPLE` in your IDE and explain the following: 

  * 🔑 We created a `.env` file to store the environment variables, as follows:

    ```text
    DB_NAME='library_db'
    DB_USER=''
    DB_PASSWORD=''
    ```

* Fill in your credentials and rename the `.env.EXAMPLE` file to `.env` while explaining the following:

  * We called the file `.env.EXAMPLE` for activity purposes, but in actual projects it would just be `.env`.

* Open `02-Stu_Sequelize-Setup/Solved/.gitignore` in your IDE and explain the following: 

  * 🔑 We added `.env` to the `.gitignore` file&mdash;as shown in the following example&mdash;to ensure that the credentials don't accidentally get added and committed to the repository:

    ```text
    node_modules
    .DS_Store
    .env
    ```

* Open `02-Stu_Sequelize-Setup/Solved/config/connection.js` in your IDE and explain the following: 

  * 🔑 We imported the `dotenv` module and immediately executed its `config()` method (as shown in the following example), allowing the `.env` variables to be read by the Node.js script:

    ```js
    require('dotenv').config();
    ```

  * 🔑 We used `process.env` environment variables in place of hardcoded values to connect to the database, as shown in the following example:

    ```js
    const sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );
    ```

* From the command line, run `npm install` and `npm start` in the `02-Stu_Sequelize-Setup/Solved` directory and demonstrate the following:

  * Sequelize can still connect to the database using the `process.env` variables.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What problem does the `dotenv` package solve?

  * 🙋 It gives you a way to avoid hardcoding your credentials in a JS file.

  * ☝️ Going forward, which activities will we need to set up with `dotenv`?

  * 🙋 Any activity that is using personal credentials.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [npm documentation on dotenv](https://www.npmjs.com/package/dotenv) and the [Sequelize documentation](https://sequelize.org/), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Models (5 min) 

* Open `03-Ins_Models/.env.EXAMPLE`, add your credentials, and demonstrate the following:

  * All of the activities provide a `.env.EXAMPLE` file that we must remember to change each time before we begin. Let's rename the file to `.env` and add the correct credentials.

* Run `npm install` and `npm start` in the `03-Ins_Models` directory from the command line and demonstrate the following:

  * 🔑 Sequelize executed a SQL `CREATE TABLE` statement when the `sync()` method was called.

  * 🔑 Sequelize performed this table creation based on a data model.

* Open `03-Ins_Models/models/Book.js` in your IDE and explain the following:

  * 🔑 Sequelize models are defined as JavaScript classes, as shown in the following example:

    ```js
    class Book extends Model {}
    ```

  * 🔑 The `init()` method allows us to define which properties the model has. These properties will become the table columns in MySQL. See the following code for an example:

    ```js
    Book.init(
      {
        title: {
          type: DataTypes.STRING
        },
        author: {
          type: DataTypes.STRING
        },
        isbn: {
          type: DataTypes.STRING
        },
        pages: {
          type: DataTypes.INTEGER
        },
        edition: {
          type: DataTypes.INTEGER
        },
        isPaperback: {
          type: DataTypes.BOOLEAN
        }
      }
    );
    ```

  * 🔑 We did not need to specify an `id` field, because Sequelize will generate a primary key automatically. In the future, however, we could retain more control over the model by defining it ourselves.

  * 🔑 We pass a second object to the `init()` method to link the model to the `sequelize` connection object, which is required for the model to work. We can optionally define other settings in this same object, as shown in the following example:

    ```js
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'book'
    }
    ```

  * For instance, `timestamps: false` stops Sequelize from auto-creating date columns in the MySQL table. We can also enforce column names to be underscored instead of using camelCase.

* Open `03-Ins_Models/server.js` in your IDE and explain the following:

  * 🔑 We imported the model in the application to ensure that Sequelize sees it and syncs it with the database, as follows:

    ```js
    const Book = require('./models/Book');
    ```

  * 🔑 In the `sync()` method, we added a `force: true` option&mdash;telling Sequelize to drop the tables if they exist and to recreate them, as follows:

    ```js
    sequelize.sync({ force: true }).then(() => {
      app.listen(PORT, () => console.log('Now listening'));
    });
    ```

     This is helpful when you are still experimenting with your models.

* Reopen `03-Ins_Models/models/Book.js` and set `timestamps` to  `true`. From the command line, run `npm start` in the `03-Ins_Models` directory to demonstrate the following:

  * Sequelize executed a `DROP TABLE IF EXISTS` statement due to the `force: true` flag.

  * Sequelize included `created_at` and `updated_at` fields in the `CREATE TABLE` statement due to the `timestamps: true` flag.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How are Sequelize models written?

  * 🙋 As JavaScript classes.

  * ☝️ What does the model become when Sequelize syncs with the database?

  * 🙋 A MySQL table.

  * ☝️ Why would you want to remove the `force: true` flag before deploying?

  * 🙋 Removing `force: true` ensures that the database will not be dropped and that the stored data will not be lost.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Models/README.md`.

### 6. Student Do: Models (15 min) 

* Direct students to the activity instructions found in `04-Stu_Models/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 MySQL Table Isn't Being Created to Specifications

  Work with a partner to resolve the following issues:

  * As a developer, I want a MySQL table with the same name as the Sequelize model.

  * As a developer, I want a more descriptive primary key name in the MySQL table.

  ## Expected Behavior

  When Sequelize syncs the model with the database, the table name should be `book` (singular) and the primary key name should be `book_id`.

  ## Actual Behavior

  The table name is `books`, and the primary key is `id`.

  ## Steps to Reproduce the Problem

  1. Run `npm start` from the command line to start the server and sync the database.

  2. Run `mysql -u root -p` to log into the MySQL shell.

  3. In the MySQL shell, run `USE library_db;` to switch to the library database.

  4. Try to run `DESCRIBE book;`. It will fail because the table name is `books`.

  5. Run `DESCRIBE books;`. Note that the primary key is named `id` and not `book_id`.

  ---

  ## 💡 Hints

  What options does Sequelize provide when it comes to naming tables and fields?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you globally define table-naming rules for your Sequelize connection?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 7. Instructor Review: Models (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Sequelize models? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Sequelize column options

  * ✔️ Sequelize table options

* Open `04-Stu_Models/Solved/models/Book.js` in your IDE and explain the following: 

  * 🔑 We added a `book_id` column with `primaryKey` and `autoIncrement` properties to replace Sequelize's auto-generated `id`, as follows:

    ```js
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
    ```

  * 🔑 In the configuration object, we added a `freezeTableName` property to prevent Sequelize from pluralizing the model name for the table name, as shown in the following example:

    ```js
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'book'
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we want to override Sequelize's default behavior?

  * 🙋 To remove any confusion around what we define and what Sequelize creates. For example, the names that we define won't suddenly change on us.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on model basics](https://sequelize.org/master/manual/model-basics.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Create (5 min) 

* Rename the `05-Ins_Create/.env.EXAMPLE` file to `.env` and fill in your credentials.

* Navigate to `05-Ins_Create` and run `npm install` and `npm start` from the command line to demonstrate the following in Insomnia:

  * We can make a POST request to `http://localhost:3001/api/books/` to create a single book with the following JSON:

    ```json
    {
      "title": "Don't Make Me Think",
      "author": "Steve Krug",
      "is_paperback": true
    }
    ```

  * We can also make a POST request to `http://localhost:3001/api/books/seed` to create multiple books at once.

* Open `05-Ins_Create/routes/api/index.js` in your IDE and explain the following:

  * We create an `api/` directory that will hold all of the API endpoints and help keep them separate from any HTML routes that we might eventually build.

  * We use an Express.js `Router` object to prefix all routes defined in `bookRoutes.js` with `/books`, as follows:

    ```js
    const bookRoutes = require('./bookRoutes');

    router.use('/books', bookRoutes);
    ```

* Open `05-Ins_Create/routes/api/bookRoutes.js` in your IDE and explain the following:

  * 🔑 We import the `Book` model so that the Express.js routes can perform queries on it, as follows:

    ```js
    const Book = require('../../models/Book');
    ```

  * 🔑 In the POST route, we use the model's `create()` method to create a new book record in the database, as shown in the following example:

    ```js
    router.post('/', (req, res) => {
      Book.create({
        title: req.body.title,
        author: req.body.author,
        is_paperback: true
      });
    });
    ```

  * 🔑 Sequelize is Promise-based, so we add a `then()` and `catch()` to return the newly created book or an error message, as follows:

    ```js
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
    ```

  * 🔑 We have a second POST route called `/seed` that uses the model's `bulkCreate()` method to insert multiple records in the database, as shown in the following example:

    ```js
    router.post('/seed', (req, res) => {
      Book.bulkCreate([
        {
          title: 'Make It Stick: The Science of Successful Learning',
          author: 'Peter Brown',
          isbn: '978-0674729018',
          pages: 336,
          edition: 1,
          is_paperback: false
        }
      ]);
    });
    ```

  * We could also move the `bulkCreate()` method to a separate Node.js script to ensure that it only happens once.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What Sequelize methods can we use to insert data into a database?

  * 🙋 We can use `create()` and `bulkCreate()`.

  * ☝️ How can we test these methods as part of the Express.js routes?

  * 🙋 Make POST requests with Insomnia.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Create-Read/README.md`.

### 9. Student Do: Create Read (15 min) 

* Direct students to the activity instructions found in `06-Stu_Create-Read/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Sequelize Query Methods

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/routes/api/bookRoutes.js).

  ## 📝 Notes

  Refer to the documentation: 

  [Sequelize documentation on model querying basics](https://sequelize.org/master/manual/model-querying-basics.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between Sequelize's `create()` and `build()` methods?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 10. Instructor Review: Create Read (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Sequelize queries? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `findAll()`

  * ✔️ `findByPk()`

  * ✔️ Query parameters

* Open `06-Stu_Create-Read/Solved/routes/api/bookRoutes.js` in your IDE and explain the following: 

  * 🔑 We use the `findAll()` method, as follows, to get all books from the database and send them as JSON in the response:

    ```js
    router.get('/', (req, res) => {
      Book.findAll().then((bookData) => {
        res.json(bookData);
      });
    });
    ```

  * 🔑 We add optional parameters to the `findAll()` method to specify a sort order, filter results with a `WHERE` clause, and exclude certain attributes from the results. See the following code for an example:
  
    ```js
    router.get('/paperbacks', (req, res) => {
      Book.findAll({
        // Order by title in ascending order
        order: ['title'],
        where: {
          // Only get books that have this boolean set to TRUE
          is_paperback: true
        },
        attributes: {
          // Don't include these fields in the returned data
          exclude: ['is_paperback', 'edition']
        }
      }).then((bookData) => {
        res.json(bookData);
      });
    });
    ```

  * 🔑 We use the `findByPk()` method to get a single record based on its `book_id` primary key, as follows:

    ```js
      router.get('/:id', (req, res) => {
      Book.findByPk(req.params.id).then((bookData) => {
        res.json(bookData);
      });
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the plain SQL equivalent of `findAll()`?

  * 🙋 `SELECT * FROM book`

  * ☝️ What is the plain SQL equivalent of `findByPk()`?

  * 🙋 `SELECT * FROM book WHERE book_id = x`

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on model querying basics](https://sequelize.org/master/manual/model-querying-basics.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Update Delete (5 min) 

* Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials.

* Open `07-Ins_Update-Delete/routes/api/bookRoutes` in your IDE and demonstrate the following: 

  * 🔑 For the PUT route, we specify the endpoint to match the `isbn` of a book inside the database, as follows:

    ```js
      router.put('/:isbn', (req, res) => {
      // code...
      )};
    ```

  * 🔑 Inside the PUT route, we call the `Book` model's `update()` method. The first parameters it takes are a list of fields in the database and the coordinating data from the request body, as shown in the following example:

    ```js
    Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        pages: req.body.pages,
        edition: req.body.edition,
        is_paperback: req.body.is_paperback,
      },
    ```

  * 🔑 The `update()` method takes a second parameter, using the `WHERE` clause to specify which book should be updated. The `isbn` is being retrieved from the request parameters, as shown in the following example:

    ```js
    where: {
          isbn: req.params.isbn,
        },
    ```

   * 🔑 Sequelize is Promise-based, so we add `then()` and `catch()` to return the newly updated book or an error message, as follows: 

      ```js
      .then((updatedBook) => {
        res.json(updatedBook);
      })
      .catch((err) => {
        res.json(err);
      });
      ```

  * 🔑 Navigate to `07-Ins_Update-Delete` and run `npm start` from the command line.
  
  * 🔑 Make a PUT request to `localhost:3001/api/books/9780201896831` with the following JSON data as the body of the request in Insomnia: 

    ```json
    {
      "title": "Grokking Algorithms: An illustrated guide for programmers and other curious people",
      "author": "Aditya Bhargava",
      "edition": 1
    },
    ```

  * 🔑 Make a GET request to `http://localhost:3001/api/books/9780201896831` to see the following response:

    ```json
    {
      "book_id": 5,
      "title": "Grokking Algorithms: An illustrated guide for programmers and other curious people",
      "author": "Aditya Bhargava",
      "isbn": "9780201896831",
      "pages": 672,
      "edition": 1,
      "is_paperback": false
    }
    ```

  * 🔑 In the DELETE route, we specify the `isbn` endpoint.  

  * 🔑 We call the `Book` model's method `destroy()`, which accepts an object as one of its parameters.

  * 🔑 We use the `WHERE` clause inside the object to find the book that needs to be deleted based on the request parameters. Refer to the following code for an example:
  
    ```js
    router.delete('/:isbn', (req, res) => {
      Book.destroy({
        where: {
        isbn: req.params.isbn,
      },
    })
      .then((deletedBook) => {
        res.json(deletedBook);
      })
      .catch((err) => res.json(err));
    });
    ```
    
  * 🔑 Open Insomnia and make a DELETE request to `localhost:3001/api/books/9780137043293`. This deletes the book by the isbn number.

  * 🔑 Make a GET request to `http://localhost:3001/api/books/` in Insomnia to show students that the book *Essential Scrum: A Practical Guide to the Most Popular Agile Process* was deleted.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the plain SQL equivalent to `update()`?

  * 🙋  `UPDATE book SET title = x WHERE isbn = x`

  * ☝️ Which method deletes in Sequelize?

  * 🙋  `destroy()`

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on model querying basics](https://sequelize.org/master/manual/model-querying-basics.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Update-Delete/README.md`.

### 12. Student Do: Update Delete (15 min)

* Direct students to the activity instructions found in `08-Stu_Update-Delete/README.md`.

* Break your students into pairs that will work together on this activity.

    ```md
    ## 🏗️ Implement the PUT and DELETE Route with Your Own Parameters

    Work with a partner to implement the following user story:

    * As a bookstore owner, I want to be able to update and remove certain books of my choice from the inventory.

    ## Acceptance Criteria

    * It's done when a book can be updated based on specific parameters (like 'numberOfPages').

    * It's done when a book can be deleted based on specific parameters (like 'book_id').

    ---

    ## 💡 Hints

    Which option do you need to use on the method call?

    ## 🏆 Bonus

    If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * What SQL operators does Sequelize support?

    Use [Google](https://www.google.com) or another search engine to research this.
    ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: Update Delete (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the UPDATE and DELETE methods in Sequelize? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `update()`

  * ✔️ `destroy()`

  * ✔️ `WHERE`

* Open `08-Stu_Update-Delete/Solved/routes/api/bookRoute.js` in your IDE and explain the following: 

  * 🔑 Use the `update()` method on the `Book` model, mapping the request body to the proper fields in the database, as follows:

    ```js
    router.put('/:book_id', (req, res) => {
      Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        pages: req.body.pages,
        edition: req.body.edition,
        is_paperback: req.body.is_paperback,
      },
    ```

  * 🔑 We add optional parameters to the `update()` method to specify which book we want to update with the `WHERE` clause. We use the request parameters to retrieve the `book_id` of the desired book, as follows:

    ```js
    where: {
      book_id: req.params.book_id,
    },
    ```

  * We then send the response with the updated book or catch any errors that might occur, as shown in the following example:

    ```js
    .then((updatedBook) => {
        res.json(updatedBook);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
    ```

  * 🔑 Inside the DELETE route, use the `destroy()` method on the `Book` model. We use the `WHERE` clause to filter the book we want to delete from the database, as follows:

    ```js
    router.delete('/:book_id', (req, res) => {

    Book.destroy({
      where: {
        book_id: req.params.book_id,
      },
    })
      .then((deletedBook) => {
        res.json(deletedBook);
      })
      .catch((err) => res.json(err));
    });
    ```

 * 🔑 Point out how Express.js uses the `delete` keyword for DELETE routes but Sequelize uses the `destroy` keyword. This easy mistake can prevent your route from working properly.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `WHERE` clause do?

  * 🙋 Helps us specify where in the database we want to look.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on model querying basics](https://sequelize.org/master/manual/model-querying-basics.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: async and await (5 min) 

* Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials.

* Open `09-Ins_Async-Await/routes/api/bookRoutes.js` in your browser and demonstrate the following:

  * 🔑 To make a function asynchronous, we have to add the `async` keyword in front of the callback function. This tells JavaScript to return a Promise instead of returning a value, as the following example demonstrates:

    ```js
    router.get('/', async (req, res) => {
      // code...
    });
    ```

   * 🔑 Inside of the function's body we need to store the `Book` model's `findAll()` method inside of a variable named `bookData`. In front of the `Book` model, you place the `await` keyword. The `await` keyword can only be placed inside an `async` function. It tells JavaScript to wait untill the promise fullfills itself or throws an error. Lastly, we return the response with the `bookData`, as follows:

      ```js
      const bookData = await Book.findAll();

      return res.json(bookData);
      ```

   * 🔑 We call the `update()` method on the `Book` model, with an object mapping the request body to fields in the database. The `await` keyword does not prevent the code from running while it waits for the Promise to fufill. It does the opposite. It allows other parts of the code to run, but once the Promise is fulfilled it will return its value. See the following code for an example:

      ```js
      router.put('/:book_id', async (req, res) => {
        const bookData = await Book.update(
          {
            title: req.body.title,
            author: req.body.author,
            isbn: req.body.isbn,
            pages: req.body.pages,
            edition: req.body.edition,
            is_paperback: req.body.is_paperback,
          },
          {
            where: {
              book_id: req.params.book_id,
            },
          }
        );

      return res.json(bookData);
      });
      ```

 * 🔑 This makes the asynchronous code read and run more like synchronous code. We have the added benefit of not having to deal with long `then()` and `catch()` chains.

* 🔑 Rename the `.env.EXAMPLE` file and fill in your credentials. Run `npm start` from the `09-Ins_Update-Delete` directory. Open Insomnia and show that all requests to `localhost:3001/api/books` still work.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some of the benefits of writing your code with `async` and `await`?

  * 🙋 The code is cleaner and easier to read. It uses fewer `.then()` chains. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Async-Await/README.md`.

### 16. Student Do: async and await (15 min) 

* Direct students to the activity instructions found in `10-Stu_Async-Await/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Refactor the Code in bookSeeds.js to Use `async` and `await` Instead of Promises

  Work with a partner to implement the following user story:

  * As a developer, all my CRUD commands should still work when querying the database.

  * As a developer, my code should be less cluttered with Promises and instead use `async` and `await` for easier readability.

  ## Acceptance Criteria

  * It's done when a book can still be created, updated, and deleted from the database.

  * It's done when my `bookSeeds.js` no longer uses Promises and uses `async` and `await`.

  ---

  ## 💡 Hints

  How does JavaScript know when a function is asynchronous?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could you run this seed file from an npm script? How would you work with multiple models in an `index.js` file?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 17. Instructor Review: async and await (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `async` and `await`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `async`

  * ✔️ `await`

  * ✔️ Seeding with Sequelize

* Open `10-Stu_Async-Await/Solved/seeds/bookSeeds.js` in your IDE and explain the following: 

  * 🔑 This is the proper way to seed a database with Sequelize, compared to creating a `/seed` route like we did earlier.

  * We have to import the data from the JSON files inside the `seeds` folder to use inside the new asynchronous function, as follows:

    ```js
    const bookSeedData = require('./bookSeedData.json');
    const librarySeedData = require('./librarySeedData.json');
    ```

  * 🔑 We first need to add the `async` keyword to the `seedDatabase` function. This tells the function to return a Promise. See the following code for an example:

    ```js
    const seedDatabase = async () => {

    };
    ```

   * 🔑 Because we are not running this function every time the Express.js server starts, we need to sync the database before we start to seed the database. We don't need to store it in a variable, because we have no reason to return it. See the following example:

      ```js
      const seedDatabase = async () => {

        await sequelize.sync({ force: true });

      };
      ```

   * 🔑 We take the `Book` and use the `bulkCreate()` method, passing in the `bookSeedData` we imported. 

   * 🔑 We add the `await` keyword in front of the statement inside the `async` function body, as follows:

      ```js
      const seedDatabase = async () => {

        await sequelize.sync({ force: true });

        await Book.bulkCreate(bookSeedData);

      };
      ```

   * 🔑  We repeat this process for the `librarySeedData` by adding the `await` keyword, as follows:

      ```js
      const seedDatabase = async () => {

        await sequelize.sync({ force: true });

        await Book.bulkCreate(bookSeedData);

        await Library.bulkCreate(librarySeedData);
      };
      ```

  * Once the Promises have been fufilled and no errors have been thrown, we want this function to stop running in Node.js. We do this with `process.exit(0)`, as follows:

    ```js
    const seedDatabase = async () => {

      await sequelize.sync({ force: true });

      await Book.bulkCreate(bookSeedData);

      await Library.bulkCreate(librarySeedData);

      process.exit(0);
  
    };
    ```

  * 🔑 In the command line, travel to the directory `10-Stu_Async-Await/Solved/seeds/bookSeeds.js` and run `npm start` to have this function trigger. This way the database does not get seeded every time the Express.js server starts.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where is it best for you to place your seed files?

  * 🙋 In a seperate folder named `seeds`, not on a route.

  * ☝️ What does the `await` keyword tell JavaScript?

  * 🙋 The statement will either fufill a Promise and return the value of that Promise or throw an error.

  * ☝️ How do we make a function asynchoronus?

  * 🙋 By placing the `async` keyword in front of the function.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 18. Instructor Do: Stoke Curiosity (10 min)

* The next topic we will discuss is authentication. Using the prompts provided, have a discussion about the importance of securing data.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What kind of sensitive data should we protect online?

  * 🙋 Answers might include banking information, social security number, tax information, credit card information, and more.

  * ☝️ What can happen if your password is compromised online?

  * 🙋 If your password is compromised, your online accounts can be hacked, exposing your sensitive data and even possibly leading to identity theft. 

  * ☝️ Can you recall any high-profile data breaches that you heard about on the news, or a time when your account was hacked?

  * 🙋 Answers will vary. Refer back to the results of your Google search on data breaches (per the Instructor Notes) and share any highlights with students.

  * ☝️ As web developers, how can we help prevent data breaches?

  * 🙋 The ideal authentication platform should use both **password hashing** (scrambling user passwords so that they look different when we save them in the database) and **salting** (adding random data to the hashed password to make it truly unique). We will learn how to implement both of those security measures in this lesson, using a Node.js package called `bcrypt`!
  
* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: RESTful Routes (5 min) 

* Open `11-Ins_RESTful-Routes` and run `npm install`. Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. Then explain the following:

  * RESTful routes help us map between HTTP verbs and CRUD operations, to make requests more meaningful and reusable.

  * GET requests will read (or "get") a specific resource.

  * POST requests will create a new resource.

  * PUT requests will update an existing resource.

  * DELETE requests will delete an existing resource. 

  * We use HTTP status codes for the responses that are returned to us.

* Run `npm start` from the command line and demonstrate the following in Insomnia: 

  * 🔑 Before we look at the code, let's create a user in the database. We can do that by making a POST request to `localhost:3001/api/users/` and providing the following JSON data as the body of the request in Insomnia:

    ```json
    {
      "username": "user1",
      "email": "user1@email.com",
      "password": "Password123"
    }
    ```

  * 🔑 We check whether the data was saved correctly by making a GET request to that same URL (`localhost:3001/api/users/`). We should see the following response, as well as a `200 OK` status code:

    ```json
    [
      {
        "id": 1,
        "username": "user1",
        "email": "user1@email.com",
        "password": "Password123"
      }
    ]
    ```

* Open `11-Ins_RESTful-Routes/routes/api/userRoutes.js` in your IDE and explain the following:

  * As you can see, both routes use `async` and `await` and are fully functional. However, the POST route uses a `catch` block to catch all errors that might happen in the `try` block, as shown in the following example: 

    ```js
    // the route will 'try' to do this action first
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);

    // if there are any errors, it will 'catch' all of them here:
    } catch (err) {
      res.status(400).json(err);
      }
    ```

  * `try...catch` not only makes the code easier to read but also helps us catch all of the errors in one place.

  * Because we use `async` and `await` to avoid callbacks, it doesn't make sense to use the `.catch()` callback to catch errors like in the GET route. Refer to the following example:

    ```js
    router.get('/', async (req, res) => {
      const userData = await User.findAll().catch((err) => {
        res.json(err);
      });
      res.json(userData);
    });
    ```

  * Also, in the POST route, we incorporated proper HTTP status codes to know exactly what kind of error happened with the server. We use the `.status(xxx)` syntax to return the status code along with the error in JSON format, as follows:

    ```js
    catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would need to use `try...catch` to catch the errors and return the proper status codes along with the JSON response. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_RESTful-Routes/README.md`.

### 20. Student Do: RESTful Routes (15 min) 

* Direct students to the activity instructions found in `12-Stu_RESTful-Routes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Routes Return 200 Status Code Every Time

  Work with a partner to resolve the following issues:

  * As a developer, I want to see proper HTTP status codes returned so that I can be aware of any errors.

  * As a developer, I want to use `try...catch` to properly catch errors when using `async` and `await`.

  ## Expected Behavior

  * When there is no error with the request, the 200 status code is returned.

  * When there is an internal server error, the 500 status code is returned.

  * When a user does not exist in the database, the 404 status code is returned along with the following message:

    {
      "message": "No user with this id!"
    }

  ## Actual Behavior

  * Whether there is an error with the request or if the user does not exist in the database, the 200 status code is returned.

  ## Steps to Reproduce the Problem

  1. Run `npm start` in your command line to start the server.

  2. Open Insomnia and make a GET request to `api/users/10`.

  3. The 200 status code is returned.

  ---

  ## 💡 Hints

  How do we return HTTP status codes?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other common HTTP status codes?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help. 

### 21. Instructor Review: RESTful Routes (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `try...catch` and HTTP status codes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `try...catch`

  * ✔️ 200 status code

  * ✔️ 500 status code 

  * ✔️ 404 status code 

* Open `12-Stu_RESTful-Routes/Solved/routes/api/userRoutes.js` in your IDE and explain the following: 

  * Here we see a GET route to retrieve one user by their id, a PUT route to update a user, and a DELETE route to delete a user.

  * 🔑 Remember that we incorporated `try...catch` into all three routes to catch all of the errors that might happen in the `try` block.

  * 🔑 First, if there is no error with the request, the `200 OK` status code is returned, as follows:

    ```js
    res.status(200).json(userData);
    ```

  * 🔑 If there is an internal server error, the `500 Internal Server Error` status code is returned, as follows:

    ```js
    catch (err) {
      res.status(500).json(err);
    }
    ```
  
  * 🔑 If the user does not exist in the database, the `404 Not Found` status code is returned. But first we need to use an `if` statement to check whether the user exists in the database, like in the following example:

    ```js
    // GET a user
    router.get('/:id', async (req, res) => {
      try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
          res.status(404).json({ message: 'No user with this id!' });
          return;
        }
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why should we use `try...catch` to catch errors when using `async` and `await`?

  * 🙋 Because `async` and `await` don't necessitate `then()` or `catch()` callbacks, we can use `try...catch` to handle any errors that the asynchronous function might return. 

  * ☝️ How can we use status codes to enhance the user experience on the front end?

  * 🙋 A 400 status code can indicate to users that they caused the error, whereas a 500 status code can indicate that the error stemmed from a server problem.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Wikipedia page on REST](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services) and the [MDN Web Docs on HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: Validation (5 min) 

* Navigate to `13-Ins_Validation` and run `npm start` from the command line. Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. Then demonstrate the following in Insomnia:

  * When securing and ensuring the quality of user data, it is important to prevent any bad data from being saved in the database. For example, what if a user's password is too short or not secure enough? Or what if someone tries to sign up with the same email address twice? 

  * 🔑 Let's try to create a new user with the email address in the wrong email format. Make a POST request to `localhost:3001/api/users/` and provide the following JSON data as the body of the request in Insomnia:

    ```json
    {
      "username": "test1",
      "email": "test1",
      "password": "Password123"
    }
    ```

  * 🔑 We will get a `400 Bad Request` status code returned with an error, as follows:

    ```json
    {
      "name": "SequelizeValidationError",
      "errors": [
        {
          "message": "Validation isEmail on email failed",
          "type": "Validation error",
        }
      ]
      }
    ```

  * 🔑 This time we will create a new user with a correct email address, as shown in the following example:

    ```json
    {
      "username": "test1",
      "email": "test1@email.com",
      "password": "Password123"
    }
    ```

  * 🔑 That worked! But let's try to create another user with that same email address, as follows:

    ```json
    {
      "username": "test2",
      "email": "test1@email.com",
      "password": "Password123"
    }
    ```

  * 🔑 We get another `400 Bad Request` status code returned with a new error, as follows:

    ```json
    {
      "name": "SequelizeUniqueConstraintError",
      "errors": [
        {
          "message": "user.email must be unique",
          "type": "unique violation",
        }
      ]
    }
    ```

  * In this way, we can use validators and constraints on a Sequelize model to prevent bad data from entering the database.

* Open `13-Ins_Validation/models/User.js` in your IDE and explain the following:

  * We see a `User` model containing id, username, email, and password data. In the `email` attribute, we see the constraint `unique` set to `true`, as follows:

    ```js
    email: {
      type: DataTypes.STRING,
      unique: true,
    }
    ```

    This will prevent duplicate email addresses from being saved in the database.

  * **Constraints** are rules defined at the SQL level. If a constraint check fails, an error will be thrown by the database, and Sequelize will forward this error to JavaScript.

  * Next, we use a model validator to check that the email is in the correct email format, as follows: 

    ```js
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail:true,
      }
    }
    ```

  * **Validations** are checks performed at the Sequelize level, in pure JavaScript. Validations are automatically run on `create`, `update` and `save`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would need to add validators and constraints to the `User` model to prevent any bad data from being saved in the database. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Validation/README.md`.

### 23. Student Do: Validation (15 min) 

* Direct students to the activity instructions found in `14-Stu_Validation/README.md`.

* This activity uses **unit tests** to guide the students in creating the right validators and constraints. 

* If needed, explain what the `npm run test` script does and demonstrate how to use it to run the unit tests.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Add Validations and Constraints to the User Model

  Work with a partner to implement the following user story:

  * As a developer, I want to add validations and constraints to the `User` model to prevent bad data from being saved in the database.

  ## Acceptance Criteria

  * It's done when it prevents `null` values from being entered for the username, email, and password fields.

  * It's done when it prevents the password from being shorter than eight characters.

  * It's done when it prevents the username from having any characters other than letters and numbers. 

  ## 📝 Notes

  Refer to the documentation: 

  [Sequelize documentation on validations and constraints](https://sequelize.org/master/manual/validations-and-constraints.html)

  ---

  ## 💡 Hints

  * Can you use the `npm run test` script in your command line for guidance?

  * What built-in validators can you use?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are **regular expressions**?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 24. Instructor Review: Validation (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with validations and constraints for your models in Sequelize? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑 ) points:

  * ✔️ `allowNull`

  * ✔️ `isAlphanumeric`

  * ✔️ `len`

* Open `14-Stu_Validation/Solved/models/User.js` in your IDE and explain the following: 

  * 🔑 First, we want to prevent `null` values from being entered for all fields. To do that, we use the `allowNull` constraint and set it to `false`, as follows:

    ```js
    username: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      ```

  * 🔑 Next, we want to ensure that the password is longer than eight characters. So we use a built-in validator called `len` and specify the character count, as shown in the following example:

    ```js
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // must be longer than 8 characters
      validate: {
        len: [8],
      },
    },
    ```

  * 🔑 Finally, for the username, we only want to allow letters and numbers&mdash;no symbols or other characters. For that, we use another built-in validator called `isAlphanumeric` and set it to `true`, as shown in the following example:

    ```js
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // will only allow alphanumeric characters
      validate: {
        isAlphanumeric: true,
      },
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we write the `isAlphanumeric` validator using regular JavaScript?

  * 🙋 We can break it down by saying that we will only allow letters between A and Z as well as numbers 0 to 9. **Regex** (regular expression) operations use that kind of logic when finding patterns in text.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on validations and constraints](https://sequelize.org/master/manual/validations-and-constraints.html), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
