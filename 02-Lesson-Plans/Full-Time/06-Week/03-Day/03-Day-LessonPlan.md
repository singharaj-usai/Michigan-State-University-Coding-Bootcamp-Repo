# 06.3 Full-Time Lesson Plan: Introduction to MySQL

## Overview

In this lesson, students will complete a mini project that reinforces routing and implementing an Express.js server. This lesson also introduces MySQL Shell and executing CRUD functions using SQL commands.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` through `08-Stu_CRUD-Insert`.

* Make sure that you have installed MySQL on your machine before class, and be prepared to troubleshoot any issues that students might have encountered during setup. For more information, refer to the [MySQL installation page](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

* Have your MySQL password ready so that you can use MySQL Shell to demonstrate the activities.

* **Important**: You will be demonstrating command-line commands that contain your database credentials. Be sure that your MySQL password is not used for any other personal accounts, because it will be visible during the demonstrations.

* Make sure that students can initialize the MySQL Shell using the command `mysql -u root -p`. They will need their MySQL password. Students should also be encouraged to use a MySQL password that is not used for any other personal accounts.

  * If Mac users get a `command not found` error, set up a `.zshrc` file in your home directory and add the `mysql` command to it. To do this, navigate to the home directory and type the following command in the command line: `echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc`. Mac users who install using Homebrew should not face this issue. Refer to [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) for installation instructions.

  * If Windows users get a `command not found` error, refer them to the [MySQL documentation on customizing the PATH](https://dev.mysql.com/doc/mysql-windows-excerpt/5.7/en/mysql-installation-windows-path.html).

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Execute commands using the MySQL Shell.

* Create and delete a database.

* Create a table to store data.

* Perform create and read functions using MySQL commands.

## Slide Deck

* [Module 12 Slide Deck](https://docs.google.com/presentation/d/1F-uRmcExGF3NYWAh2vz5Nxi8AJe-WWpwpoeAH7rZsOc/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Demo: Mini Project      | 0:05     |
| 10:05AM| 2   | Student Do: Mini Project           | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini Project    | 0:10     |
| 11:15AM| 4   | Introduce Challenge                | 0:05     |
| 11:20AM| 5   | FLEX                               | 0:30     |
| 11:50PM| 6   | Instructor Do: Stoke Curiosity     | 0:10     |
| 12:00PM| 7   | BREAK                              | 0:30     |
| 12:30PM| 8   | Instructor Demo: MySQL Shell       | 0:05     |
| 12:35PM| 9   | Student Do: MySQL Shell            | 0:15     |
| 12:50PM| 10  | Instructor Review: MySQL Shell     | 0:10     |
| 1:00PM | 11  | Instructor Demo: Databases         | 0:05     |
| 1:05PM | 12  | Student Do: Databases              | 0:15     |
| 1:20PM | 13  | Instructor Review: Databases       | 0:10     |
| 1:30PM | 14  | Instructor Demo: Tables            | 0:05     |
| 1:35PM | 15  | Student Do: Tables                 | 0:15     |
| 1:50PM | 16  | Instructor Review: Tables          | 0:10     |
| 2:00PM | 17  | Instructor Demo: CRUD Insert       | 0:05     |
| 2:05PM | 18  | Student Do: CRUD Insert            | 0:15     |
| 2:20PM | 19  | Instructor Review: CRUD Insert     | 0:10     |
| 2:30PM | 20  | END                                | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini Project (5 min)

* Navigate to `28-Stu_Mini-Project/Main` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001` in your browser to demonstrate the following:

  * 🔑 For the mini-project today, we will add two new routes to the UI/UX tips application.

  * 🔑 We will implement a wildcard route to direct users to a 404 page, as well as a diagnostics route to log information whenever a user submits a failed form submission.

* Open `http://localhost:3001/test` in your browser to demonstrate the following:

  * Note that when we visit a route that doesn't exist, the application directs us to a 404 page.

  * The 404 page contains a graphic and a button to return to the previous page.

* Open `http://localhost:3001/` in your browser to visit the main page once again:

  * We will input information that will cause the form validation to fail.

  * Enter a tip that is shorter than 15 characters and a username that is no longer than 4 characters:

    ```sh
    tip: short message
    username: test
    ```

  * These are the two conditions that we check for when validation fails.

  * 🔑 Note that we get an error message that the tip is invalid if it does not meet the length requirement.

  * The front end then makes a request to the `api/diagnostics` route, which logs the failed submission to the database -- or in this case, a `diagnostics.json` file.

* Open `28-Stu_Mini-Project/Main/db/diagnostics.json` in your IDE to demonstrate the following:

  * Note that the failed submission has been logged to the JSON file and given a unique identifier:

    ```json
    {
        "time": 1617228788871,
        "error_id": "11f8ee6f-a3c7-4b86-97d6-ae0eb763fc72",
        "errors": {
            "username": "Invalid username!",
            "tip": "Tip must be at least 15 characters",
            "topic": ""
        }
    }
    ```

  * Let's start adding these features to the UI/UX tips app!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can start by researching how to create a wildcard route in Express.js, to redirect users to a 404 HTML file. Additionally, we can create a POST route for `api/diagnostics`, to log the failed submissions. Finally, we create the `fetch()` request that will send the POST request to the diagnostics endpoint.

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # 🏗️ Module 11 Mini Project: Add Routes to Existing Application

  In this mini-project, you will work with a group to add routes to an existing application. You will create one wildcard route for serving up a 404 page, as well as a diagnostics route for logging failed form validation.

  * As a developer, I want to be able to add routes to an existing application.

  * As a developer, I want to serve up a custom 404 page when the requested resource doesn't exist.

  * As a developer, I want to log usage statistics from users of my site.

  * As a developer, I want to be able to deploy my apps to Heroku.

  ## Acceptance Criteria

  * It's done when I have created a wildcard route in `server.js` that will send the users to a 404 page.

  * It's done when I have created a custom `404.html` page for my wildcard route to serve.

  * It's done when I have created a POST route for `/api/diagnostics` that will store information about the invalid form submissions.

  * It's done when I have created a GET route for `/api/diagnostics` that will return the content of `db/diagnostics/json`.

  * It's done when I have created a `fetch()` request on the front end that will send a POST request to `/api/diagnostics` every time a user attempts to submit an invalid form.

  * It's done when I have tested my `/api/diagnostics` endpoint using Insomnia.

  * It's done when I have tested the wildcard route by visiting any non-existent path, like `http://localhost/test`.

  * It's done when I have deployed the finished application to Heroku.

  ---

  ## 💡 Hints

  How can we declare a wildcard route in Express.js?

  How will `fs.writeFile()` help us log usage stats?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How else could we implement statistics logging without making a request from the front end?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Mini Project  (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Wildcard routes

  * ✔️ `fs.writeFile()`

  * ✔️ Modular routes

* Open `28-Stu_Mini-Project/Main/server.js` in your IDE and explain the following:

  * In `server.js`, we have a few routes for the root and some static HTML files. Let's begin by creating a wildcard route.

  * First we invoke `app.get()` -- but instead of providing a full path, we use an asterisk (`*`)to denote a wildcard route.

  * A **wildcard route** handles all paths that are not defined by one of the other route files. Much like any other route handler, it accepts a `res` and `req` object.

  * In the wildcard route, we use the `res.sendFile()` method to send a static `404.html` page located in the public directory:

    ```js
    app.get('*', (req, res) =>
      res.sendFile(path.join(__dirname, 'public/pages/404.html'))
    );
    ```

  * In the `server.js` file, we also want to make sure that we are allowing static files like images to be served from the public directory:

    ```js
    app.use(express.static('public'));
    ```

  * Now that we have the wildcard route and the static middleware, the next step is to create the static HTML file for this page.

* Open `28-Stu_Mini-Project/Main/public/pages/404.html` in your IDE to demonstrate the following:

  * The 404 page is a simple HTML file that contains an image and links to a JavaScript file:

    ```html
    ...
      <main class="text-center">
        <h1>The page you are looking for is in another castle.</h1>
        <img src="./images/notfound.jpg" />
        <section class="big-button">
          <button class="btn" id="back">Get me out of here!</button>
        </section>
      </main>
    <script src="./scripts/404.js"></script>
    ...
    ```

* Open `28-Stu_Mini-Project/Main/public/scripts/404.js` in your IDE to demonstrate the following:

  * In the front-end JavaScript for the 404 page, we need a selector for the go-back button, and a function to direct the user back to the page they were previously on:

    ```js
    const goBackBtn = document.getElementById('back');

    const goBack = (e) => {
      e.preventDefault();

      history.back();
    };

    goBackBtn.addEventListener('click', goBack);
    ```

    **Note**: The built-in browser API `history` allows us to manipulate the user's browsing history.

  * Next, we need to create the `api/diagnostics` route for logging failed form submissions.

* Open `28-Stu_Mini-Project/Main/routes/diagnostics.js` in your IDE to demonstrate the following:

  * First we create a new file called `diagnostics.js` in the routes directory. This file will contain all the routes that use the `/diagnostics` path.

  * We require `express.Router()` and assign it to a variable called `diagnostics`. We also import an npm package called `uuid` that will help generate UUIDs.

  * If we receive any failed submission data, we want to write that data to a `diagnostics.json` file. To do so, we also require some helper functions to read and write to the file:

    ```js
    const diagnostics = require('express').Router();
    const { v4: uuidv4 } = require('uuid');
    const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
    ```

  * Then we create the POST route so that we can receive information from the front end when a user makes a form submission that doesn't validate:

    ```js
    diagnostics.post('/', (req, res) => { ... }
    ```

  * In this implementation, we expect a request body from the front end that contains an `isValid` property and an `errors` object. With this information, we create a `payload` object with a few extra properties, including `time` and `error_id`:

    ```js
    const { isValid, errors } = req.body;

    const payload = {
      time: Date.now(),
      error_id: uuidv4(),
      errors,
    };
    ```

  * Inside the route handler, we first check that the information we got from the front end is invalid. If so, we write that payload to the `diagnostics.json` file.

  * If the front end sent us a valid submission, we send back a message that the submission is unsuitable for logging because there was nothing wrong with it:

    ```js
    if (!isValid) {
      readAndAppend(payload, './db/diagnostics.json');
      res.json(`Diagnostic information added 🔧`);
    } else {
      res.json({
        message: 'Object is valid, not logging. Check front end implementation',
        error_id: payload.error_id,
      });
    }
    ```

  * Finally, we export the diagnostics router for use in the main router file:

    ```js
    module.exports = diagnostics;
    ```

* Open `28-Stu_Mini-Project/Main/routes/index.js` in your IDE to demonstrate the following:

  * In the `index.js` route file, we import the diagnostics router and assign it to a variable called `diagnosticsRouter`:

    ```js
    const express = require('express');

    const tipsRouter = require('./tips');
    const feedbackRouter = require('./feedback');
    const diagnosticsRouter = require('./diagnostics');

    const app = express();

    app.use('/tips', tipsRouter);
    app.use('/feedback', feedbackRouter);
    app.use('/diagnostics', diagnosticsRouter);

    module.exports = app;
    ```

  * Now that we have the diagnostics route, we can create the `fetch()` request for the front end.

* Open `28-Stu_Mini-Project/Main/public/scripts/index.js` in your IDE to demonstrate the following:

  * In the `index.js` file for the front end, we create a POST request using a function called `submitDiagnostics()`.

  * This function accepts a submission object and gets invoked when the user-submitted data is invalid.

  * In the `options` object, we specify that we are making a POST request. Additionally, we convert the JSON object to a string using the `JSON.stringify()` function:

    ```js
    const submitDiagnostics = (submissionObj) => {
      fetch('/api/diagnostics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionObj),
      })
        .then((response) => response.json())
        .then(() => showErrors(submissionObj.errors))
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What other use cases can you envision for creating Express.js APIs?

  * 🙋 We can add back-end APIs to future projects and implement endpoints for databases.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on express()](https://expressjs.com/en/4x/api.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main/` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * We are going to build a note-taking application using Express.js!

  * When this application is complete, we will be able to create notes, save notes to the file system, and retrieve notes from the back end.

  * The application features a useful interface for you to work with.

  * You will create HTML routes for `/api/notes` that will serve up a `notes.html` file.

  * You will implement a wildcard route that will serve up the `index.html` file.

  * Also, you will create some API endpoints for `api/notes` to GET and POST new notes.

  * You will implement some form of UUID management for each note.

  * As a bonus, you can optionally implement a DELETE route for a specific note.

  * Finally, you will deploy your application using Heroku!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to create a full-stack application using Express.js, with data persistent storage that allows for creating, reading, and optionally updating data.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This activity help you expand your skill set to the back end -- by combining your existing front-end knowledge with a new understanding of Express.js, to create a full-stack application.

  * ☝️ How does this project relate to your career goals?

  * 🙋 This project will help you become employer-ready by providing a new project that you can add to your portfolio. You will also demonstrate to future employers that you can deploy the apps that you create.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

* Advise students that the next module will have them working with MySQL and databases. Remind students that they will need to install MySQL Server on their machine before the beginning of the next module. Provide students with the [MySQL installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) for installation instructions.

* Answer any questions before proceeding.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1F-uRmcExGF3NYWAh2vz5Nxi8AJe-WWpwpoeAH7rZsOc/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **What is SQL?**

    * **SQL**, or **Structured Query Language**, is a query language that allows us to interact with a database.

  * **How does SQL interact with a database?**

    * SQL uses a **query**, or a structured inquiry, to react with data that is stored in a database. You can use a SQL query to create, read, update, and delete data.

  * **What is a relational database?**

    * A **relational database** organizes data into tables. A table holds a group of data and is divided into rows and columns. The tables can be linked to form relationships.

  * **How do we link tables?**

    * Tables can be linked based on data that is common to both of them. **Keys** identify rows of data in a table. By matching keys between two tables, a relationship is formed.

  * **What does a query do?**

    * A SQL query interacts with data in a database using the names of tables, columns, and relationships between tables. Queries enable us to supply data to the front end to build sites that can interact with lots of data quickly and easily.

  * **Why learn SQL?**

    * SQL is a marketable skill that's used in a majority of databases in every economic sector, from manufacturing, logistics, and health care to insurance, commerce, and much more. SQL also makes it easy to handle large amounts of data and scale up quickly.

* Navigate to `28-Stu_Mini-Project/Main` in your command line and start up the MySQL Shell:

  ```sh
  mysql -u root -p
  ```

* Create the database by running the schema and seeds files, then exit the MySQL Shell using the `exit` command:

  ```sh
  SOURCE db/schema.sql;
  SOURCE db/seeds.sql;
  ```

* Add your MySQL password to the `server.js` file and run `npm install` and `node server.js`.

* Open `http://localhost:3001/api/movies` demonstrate the following:

  * We use SQL queries to write and retrieve data from the database.

  * This SQL query returns the `id` and `title` from each row in the movies database.

  * The data is returned as an object that we can then manipulate and use to populate the page.

  * Using a SQL query, we can return even large sets of data quickly.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning to use SQL, or Structured Query Language, to access a database.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We will use an Express.js server to send the SQL queries and access the database.

  * ☝️ How does this project relate to your career goals?

  * 🙋 SQL is used in many industries and is a highly sought-after skill in the development field.

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: MySQL Shell (5 min)

* Open the command line. Navigate to `01-Ins_MySQL-Shell` and demonstrate the following:

  * 🔑 To start, we navigate to the root directory of the project and then type the following command into the terminal to confirm that the MySQL server is up and running:

    ```sh
    mysql --version
    ```

  * 🔑 Next, in the terminal, at the root directory of the project, we enter the following command and enter the MySQL password when prompted:

    ```sh
    mysql -u root -p
    ```

  * 🔑 We write each command after the `mysql` prompt. Don't forget, all commands must end with a semicolon!

    ```sql
    CREATE DATABASE demo_db;
    ```

  * 🔑 We can also write the commands in a SQL file and execute the file in MySQL Shell using `source`:

    ```sql
    source schema.sql
    ```

  * 🔑 To exit MySQL Shell, we type `quit`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are two ways that we can execute commands using MySQL Shell?

  * 🙋 We can enter the command after the `mysql` prompt, or we can write the command in a SQL file and then execute the the file using `source`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_MySQL-Shell/README.md`.

### 9. Student Do: MySQL Shell (15 min)

* Direct students to the activity instructions found in `02-Stu_MySQL-Shell/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Execute a SQL File Using MySQL Shell

  Work with a partner to implement the following user story:

  * As developer, I want to execute MySQL statements from a file using the command-line interface.

  ## Acceptance Criteria

  * It's done when the `schema.sql` file is executed using the command-line interface and a message reading `Query OK` is returned.

  ## 📝 Notes

  Refer to the documentation:

  [MySQL documentation on installing and starting MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)

  [MySQL documentation on executing SQL statements from a text file](https://dev.mysql.com/doc/refman/8.0/en/mysql-batch-commands.html)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The file execution output indicates "Query OK", along with the number of rows affected.](./assets/image_1.png)

  ---

  ## 💡 Hints

  Which commands do you use to start MySQL in the command line?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What kind of database is MySQL?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: MySQL Shell (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with MySQL Shell? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `schema.sql`

  * ✔️ `SOURCE`

* Navigate to `02-Stu_MySQL-Shell/Solved` in your command line and explain the following:

  * To open the MySQL Shell, we execute `mysql -u root -p` in the command line and then enter the MySQL password:

    ```sh
    mysql -u root -p
    ```

  * 🔑 We then use the `SOURCE` command to execute the schema from the `schema.sql` shell. Don't forget the semicolon!

    ```sh
    SOURCE schema.sql;
    ```

  * 🔑 We use the `SHOW` command to display the existing databases and confirm that the new database has been created:

    ```sh
    SHOW DATABASES;
    ```

  * To exit MySQL Shell, we enter the command `quit`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we execute a schema file in MySQL Shell?

  * 🙋 To execute a `schema.sql` file in MySQL Shell, we use the `SOURCE` command.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on getting started with MySQL Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-getting-started.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Databases (5 min)

* Open `03-Ins_Databases` in your command line and demonstrate the following:

  * 🔑 We use a database to store and organize data that we will access with MySQL.

  * 🔑 To create a new database, first we navigate to the command line and enter `mysql -u root -p` to open MySQL Shell:

    ```sh
    mysql -u root -p
    ```

  * 🔑 Then we use the `CREATE DATABASE` command and add the database that we want to create:

      ```sql
      CREATE DATABASE inventory_db;
      ```

  * 🔑 The `CREATE` command is all we really need, but it is a good idea to check whether the database has already been created, and drop it if so. We do this before we create the database:

      ```sql
      DROP DATABASE IF EXISTS inventory_db;
      CREATE DATABASE inventory_db;
      ```

  * 🔑 Once a database is created, we enter `USE` to select the database:

      ```sql
      USE inventory_db;
      ```

  * 🔑 We also check which database is currently in use:

      ```sql
      SELECT DATABASE();
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we create and select a database using MySQL?

  * 🙋 We use the `CREATE` command to create a database and the `USE` command to select a database.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Databases/README.md`.

### 12. Student Do: Databases (15 min)

* Direct students to the activity instructions found in `04-Stu_Databases/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Use MySQL Statements to Delete, Create, and Select a Database

  Work with a partner to implement the following user story:

  * As a developer, I want to delete an existing database.

  * As a developer, I want to create a new database and select that database for use.

  ## Acceptance Criteria

  * It's done when `sample_db` is dropped and no longer appears on the list of all databases.

  * It's done when a new `books_db` database is created and selected for use.

  ## 📝 Notes

  Refer to the documentation:

  [MySQL documentation on creating and selecting a database](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)

  [MySQL documentation on DROP DATABASE](https://dev.mysql.com/doc/refman/8.0/en/drop-database.html)

  ---

  ## 💡 Hints

  Which statement can we use to show all databases?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * SQL is a **relational database management system**, or **RDBMS**. What are the characteristics of an RDBMS? What other database systems fall into the category of RDBMS?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Databases (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with databases? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `DROP DATABASE`

  * ✔️ `CREATE DATABASE`

  * ✔️ `USE`

* Open `04-Stu_Databases/Solved/schema.sql` in your IDE and explain the following:

  * To drop and create a database, we can either enter the commands directly into MySQL Shell or use a file.

  * 🔑 To drop the `sample_db` database, we use the `DROP` command:

    ```sql
    DROP DATABASE IF EXISTS sample_db;
    ```

  * 🔑 To create a new `books_db` database, we start by checking whether a database of the same name already exists -- and if so, we drop it:

    ```sql
    DROP DATABASE IF EXISTS books_db;
    ```

  * 🔑 Then we add a new `books_db` database using the `CREATE` command:

    ```sql
    CREATE DATABASE books_db;
    ```

  * 🔑 To select the `books_db` database, we use the `USE` command:

    ```sql
    USE books_db;
    ```

* Navigate to `04-Stu_Databases/Solved` in your command line and enter `mysql -u root -p` to open MySQL Shell.

  * We execute the schema file in the MySQL Shell using `SOURCE`:

    ```sql
    SOURCE schema.sql;
    ```

  * To check that the `books_db` database is in use, we use `SELECT DATABASE()`:

    ```sql
    SELECT DATABASE();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which command do we use to delete a database?

  * 🙋 We use the `DROP DATABASE` command. To prevent an error from occurring if the database does not exist, we add `IF EXISTS`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on CREATE DATABASE](https://dev.mysql.com/doc/refman/8.0/en/create-database.html) and the [MySQL documentation on DROP DATABASE](https://dev.mysql.com/doc/refman/8.0/en/drop-database.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Tables (5 min)

* Open `05-Ins_Tables/db/schema.sql` in your IDE and demonstrate the following:

  * 🔑 To add data to databases, we use tables.

  * 🔑 We start by creating a database to hold the tables:

    ```sql
    DROP DATABASE IF EXISTS inventory_db;
    CREATE DATABASE inventory_db;
    ```

  * 🔑 Then we select the database where we plan to add the tables:

    ```sql
    USE inventory_db;
    ```

  * 🔑 To create a new table, we use the `CREATE TABLE` command, followed by the name of the new table:

    ```sql
    CREATE TABLE produce;
    ```

  * 🔑 Next, in parentheses `()`, we add the names of the columns that will hold the data and describe the type of data that the column will hold. We designate an integer using `INT` and specify a string of up to 100 characters using `VARCHAR(100)`:

    ```sql
    CREATE TABLE produce (
      id INT,
      name VARCHAR(100)
    );
    ```

* Navigate to `05-Ins_Tables/db` in your command line and enter `mysql -u root -p` to open MySQL Shell.

  * We execute the schema file using the `SOURCE` command:

    ```sql
    SOURCE schema.sql;
    ```

  * We use the `SHOW` command to list the tables in the database and check that the table has been successfully added:

    ```sql
    SHOW TABLES;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we add data to the database?

  * 🙋 We create a table to hold the data. Tables are composed of columns, which hold types of data like integers or strings.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Tables/README.md`.

### 15. Student Do: Tables (15 min)

* Direct students to the activity instructions found in `06-Stu_Tables/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Add Table to Database

  Work with a partner to implement the following user story:

  * As a developer, I want to delete a table from an existing database and replace it with a new table.

  ## Acceptance Criteria

  * It's done when a new table, `biographies`, has been created and includes two columns, `id` and `name`.

  * It's done when the `id` column has a data type of `INT` and the `name` column has a data type of `VARCHAR(100)`.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A table called "biographies" contains fields for "id" and "name".](./assets/image_1.png)

  ---

  ## 💡 Hints

  How can you display a list of existing tables in a database?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between a table and a database?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Tables (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with tables? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `CREATE TABLE`

  * ✔️ `SHOW TABLES`

* Open `06-Stu_Tables/Solved/db/schema.sql` in your IDE and explain the following:

  * Tables store data in databases. To start, we create a database to hold the new table:

    ```sql
    DROP DATABASE IF EXISTS books_db;
    CREATE DATABASE books_db;
    ```

  * Then, to select the new database, we enter the `USE` command:

    ```sql
    USE books_db;
    ```

  * 🔑 Next, we use the `CREATE` command to give the table a name:

    ```sql
    CREATE TABLE biographies;
    ```

  * Tables are composed of columns that hold a certain data type. We add two columns, `int` and `name`, and add their data types:

    ```sql
    CREATE TABLE biographies (
      id INT,
      name VARCHAR(100)
    );
    ```

* Navigate to `06-Stu_Tables/Solved/db` in your command line and enter `mysql -u root -p` to open MySQL Shell.

  * We execute the file using `SOURCE`:

    ```sql
    SOURCE schema.sql;
    ```

  * We check that the database was created, using `SHOW DATABASES;`:

    ```sql
    SHOW DATABASES;
    ```

  * 🔑 We check that the new table is part of the database, using `SHOW TABLES;`:

    ```sql
    SHOW TABLES;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we create a table to store data inside a database?

  * 🙋 We select the database using the `USE` command. Then we use the `CREATE TABLE` command to create a table.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on creating a table](https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: CRUD Insert (5 min)

* Open `07-Ins-CRUD-Insert/db/insert-one.sql` in your IDE and explain the following:

  * In a MySQL table, data is stored in rows. To add a row to an existing table, we use the `INSERT INTO` command, followed by the name of the table where we want to add data:

    ```sql
    INSERT INTO produce
    ```

  * The data must fit into the existing columns. So we specify the columns where we want to add data:

    ```sql
    INSERT INTO produce (id, name)
    ```

  * We then add data for the row -- making sure that the data matches the assigned data type -- using `VALUES`:

    ```sql
    INSERT INTO produce (id, name)
      VALUES (1, "apple");
    ```

* Open `07-Ins-CRUD-Insert/db/insert-many.sql` in your IDE and explain the following:

  * We can also add data to multiple rows at the same time, making sure that we separate each row of data with a comma (`,`):

    ```sql
    INSERT INTO produce (id, name)
      VALUES
       ( 1, "apple"),
       ( 2, "orange"),
       ( 3, "banana");
    ```

* Navigate to `07-Ins_CRUD-Insert/db` in your command line and enter `mysql -u root -p` to open MySQL Shell.

  * We execute the `schema.sql` file in MySQL Shell to create the database and table:

    ```sql
    SOURCE schema.sql;
    ```

  * We use `SELECT DATABASE()` to check that the database is now in use and that the table has been added. This is the table where we will add the data:

    ```sql
    SELECT DATABASE();
    ```

  * We execute the `insert-many.sql` file in the shell to add multiple rows of data:

    ```sql
    SOURCE insert-many.sql;
    ```

  * Now that we have stored data in the table, we can access and manipulate it with a query. We use the `SELECT` command to select data -- and an asterisk (`*`) to select all the data in each row:

    ```sql
    SELECT * from produce;
    ```

  * The data from each row is returned in the command line.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we add data to a table?

  * 🙋 We use the `INSERT INTO` command.

  * ☝️ How do write a query to select all the data in a table?

  * 🙋 We use the `SELECT` command. To select all, we can use an asterisk.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_CRUD-Insert/README.md`.

### 18. Student Do: CRUD Insert (15 min)

* Direct students to the activity instructions found in `08-Stu_CRUD-Insert/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Selecting and Inserting Data Using MySQL

  Work with a partner to add comments describing the functionality of the code found in [insert-seeds.sql](./Unsolved/db/insert-select.sql).

  ## 📝 Notes

  Refer to the documentation:

  [MySQL documentation on SELECT](https://dev.mysql.com/doc/refman/8.0/en/select.html)

  [MySQL documentation on INSERT](https://dev.mysql.com/doc/refman/8.0/en/insert.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Which operations can you perform on data using MySQL?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: CRUD Insert (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel adding data to a table and selecting the data? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `INSERT INTO`

  * ✔️ `VALUES`

  * ✔️ `SELECT *`

* Open `08-Stu-CRUD-Insert/Solved/db/schema.sql` in your IDE and explain the following:

  * We check whether a database named `books_db` already exists, and if so, we drop it:

    ```sql
    DROP DATABASE IF EXISTS books_db;
    ```

  * We create a new database using `CREATE DATABASE`:

    ```sql
    CREATE DATABASE books_db;
    ```

  * We select the new database with `USE`:

    ```sql
    USE books_db;
    ```

  * We create a new table, `biographies`, with two columns: `id` and `name`. Each column is assigned a data type that determines the kind of information it will hold:

    ```sql
    CREATE TABLE biographies (
      id INT NOT NULL,
      name VARCHAR(100) NOT NULL
    );
    ```

* Open `08-Stu-CRUD-Insert/Solved/db/insert-select.sql` in your IDE and explain the following:

  * 🔑 Now that we have created a database and a table to hold data, we can insert the data. We use the `INSERT INTO` command to select the table and the columns where we want to add data:

    ```sql
    INSERT INTO biographies (id, name)
    ```

  * 🔑 Next, we use `VALUES` to add values:

    ```sql
    VALUES
      ( 001, "Diary of Anne Frank"),
      ( 002, "Frida: A Biography of Frida Kahlo"),
      ( 003, "Long Walk to Freedom");
    ```

  * To query the database and select all the data from the new table, we use `SELECT *`:

     ```sql
     SELECT * from biographies;
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we insert data into a table?

  * 🙋 We first have to select the database where the table is located. Then we use the `INSERT INTO` command to select the table and columns where we want to add data. Finally, we use the `VALUES` command to add new rows of data.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on INSERT](https://dev.mysql.com/doc/refman/8.0/en/insert.html), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
