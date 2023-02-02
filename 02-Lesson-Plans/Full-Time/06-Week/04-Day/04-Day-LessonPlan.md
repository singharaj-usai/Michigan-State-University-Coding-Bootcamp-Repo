# 06.4 Full-Time Lesson Plan: MySQL and Node.js

## Overview

In this lesson, students will continue using MySQL Shell to execute CRUD functions using SQL commands. They will connect a MySQL database to a Node.js application and develop a database schema, using various data types and foreign and primary keys. They will also learn about seeding a database.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_CRUD-Delete` through `20-Stu_Foreign-Primary-Key`.

* Have your MySQL password ready so that you can use MySQL Shell to demonstrate the activities.

* **Important**: You will be demonstrating command-line commands that contain your database credentials. Be sure that your MySQL password is not used for any other personal accounts, because it will be visible during the demonstrations.

* Make sure that students can initialize the MySQL Shell using the command `mysql -u root -p`. They will need their MySQL password. Students should also be encouraged to use a MySQL password that is not used for any other personal accounts.

   * If Mac users get a `command not found` error, set up a `.zshrc` file in your home directory and add the `mysql` command to it. To do this, navigate to the home directory and type the following command in the command line: `echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc`. Mac users who install using Homebrew should not face this issue. Refer to [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) for installation instructions.

  * If Windows users get a `command not found` error, refer them to the [MySQL documentation on customizing the PATH](https://dev.mysql.com/doc/mysql-windows-excerpt/5.7/en/mysql-installation-windows-path.html).

* For the activities that use an Express.js server, you will be required to pass your username and SQL password as a parameter of `createConnection()`. Make sure to change the provided user -- if you are not using the default `root` -- and add your personal SQL password before running each demo or activity. The changes will need to be made in the `server.js` file.

* In the Stoke Curiosity section, you will use a sample MySQL database to demonstrate the real-world application of SQL. Before class, visit the [MySQL Employees sample database page](https://dev.mysql.com/doc/employee/en/), then download it and unzip the file. You can also download it directly from the [GitHub repo for the Employees sample database](https://github.com/datacharmer/test_db).

* The Stoke Curiosity instructions differ from the instructions provided in the GitHub repo, so be sure to review them ahead of time. The instructions in this lesson plan aim to reinforce the skills that students learn in class and prevent a possible permissions error during installation.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Perform CRUD functions using MySQL commands.

* Configure a Node.js application to connect to a MySQL database.

* Use data types to specify the type of data that each column can hold.

* Create a database schema.

* Seed a database for use in application development.

* Specify the relationship between tables using primary and foreign keys.

## Time Tracker

| Start  | #   | Activity Name                         | Duration |
|---     |---  |---                                    |---       |
| 10:00AM| 1   | Instructor Demo: CRUD Delete          | 0:05     |
| 10:05AM| 2   | Student Do: CRUD Delete               | 0:15     |
| 10:20AM| 3   | Instructor Review: CRUD Delete        | 0:10     |
| 10:30AM| 4   | Instructor Do: Stoke Curiosity        | 0:10     |
| 10:40AM| 5   | Instructor Demo: Connect to Node.js   | 0:05     |
| 10:45AM| 6   | Student Do: Connect to Node.js        | 0:15     |
| 11:00AM| 7   | Instructor Review: Connect to Node.js | 0:10     |
| 11:10AM| 8   | Instructor Demo: Data Types           | 0:05     |
| 11:15AM| 9   | Student Do: Data Types                | 0:15     |
| 11:30AM| 10  | Instructor Review: Data Types         | 0:10     |
| 11:40AM| 11  | FLEX                                  | 0:20     |
| 12:00PM| 12  | BREAK                                 | 0:30     |
| 12:30PM| 13  | Instructor Demo: Schema               | 0:05     |
| 12:35PM| 14  | Student Do: Schema                    | 0:15     |
| 12:50PM| 15  | Instructor Review: Schema             | 0:10     |
| 1:00PM | 16  | Instructor Demo: Seeds                | 0:05     |
| 1:05PM | 17  | Student Do: Seeds                     | 0:15     |
| 1:20PM | 18  | Instructor Review: Seeds              | 0:10     |
| 1:30PM | 19  | Instructor Demo: Keys                 | 0:05     |
| 1:35PM | 20  | Student Do: Keys                      | 0:15     |
| 1:50PM | 21  | Instructor Review: Keys               | 0:10     |
| 2:00PM | 22  | FLEX                                  | 0:30     |
| 2:30PM | 23  | END                                   | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: CRUD Delete (5 min)

* Open `09-Ins_CRUD-Delete/db/delete.sql` in your IDE and explain the following:

  * 🔑 We can delete a row in a table by first using the `DELETE FROM` command to select a table:

    ```sql
    DELETE FROM produce
    ```

  * 🔑 Because we do not want to delete all the rows, we use the `WHERE` clause to specify a condition for the row. In this case, we want to delete the row where `id` equals `2`:

    ```sql
    WHERE id = 2;
    ```

* Open `09-Ins_CRUD-Delete/db/update.sql` in your IDE and explain the following:

  * 🔑 We can also use the `UPDATE` command to change the data. To start, we select the table that we want to update:

    ```sql
    UPDATE produce
    ```

  * 🔑 Then we use `SET` to assign the new data to a column:

    ```sql
    SET name = "strawberry"
    ```

  * 🔑 We only want the `name` column to have the value of `strawberry` in the row where the `id` is `1`, so we add a `WHERE` clause:

    ```sql
    WHERE id = 1;
    ```

* Navigate to `09-Ins_CRUD-Delete/db` in your command line and enter `mysql -u root -p` to open MySQL Shell.

  * We execute the `schema.sql` file in MySQL Shell to create the database and table:

    ```sql
    SOURCE schema.sql;
    ```

  * We use `SELECT *` to display the contents of the `produce` table:

    ```sql
    SELECT * FROM produce;
    ```

  * We execute the `delete.sql` file to run the delete query:

    ```sql
    SOURCE delete.sql;
    ```

  * When we run a `SELECT` query to display the contents of the `produce` table again, we find that the row has been deleted:

    ```sql
    SELECT * FROM produce;
    ```

  * We execute the `update.sql` file to run the update query:

    ```sql
    SOURCE update.sql;
    ```

  * When we run a `SELECT` query to display the contents of the `produce` table again, we find that the data for row `2` has changed:

    ```sql
    SELECT * FROM produce;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which clause do we use to specify a condition?

  * 🙋 We use the `WHERE` clause to specify a condition. For example, if we set the condition to `id = 2`, then only the row with the `id` of `2` will be deleted or updated.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_CRUD-Delete/README.md`.

### 2. Student Do: CRUD Delete (15 min)

* Direct students to the activity instructions found in `10-Stu_CRUD-Delete/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Data Not Updating in Database

  Work with a partner to resolve the following issue(s):

  * As a user, I want to update a single row of data in a table using a MySQL statement.

  ## Expected Behavior

  When I execute a MySQL statement, I want only the data with an `id` of `2` to update to `Candide`.

  ## Actual Behavior

  When I execute a MySQL statement to update the data, the data in every row displays the new value.

  ## Steps to Reproduce the Problem

  1. Create a `books_db` database and select it for use.

  2. Execute the `insert.sql` file in the command line to insert data.

  3. Execute the `update.sql` file to update the table.

  4. Enter the query `SELECT * FROM fiction` to view the contents of the table.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The table lists three data entries, with "Candide" appearing in row 2.](./assets/image-1.png)

  ---

  ## 💡 Hints

  What clause do we use to filter and select specific rows to be updated?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How do we distinguish SQL syntax from other text?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: CRUD Delete (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel deleting and updating data? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `UPDATE`

  * ✔️ `SET`

  * ✔️ `WHERE`

* Open `10-Stu_CRUD-Delete/Solved/schema.sql` in your IDE and explain the following:

  * We create a `books_db` database and select it for use:

    ```sql
    DROP DATABASE IF EXISTS books_db;
    CREATE DATABASE books_db;
    USE books_db;
    ```

  * We create a table named `fiction` to hold the data. The table has an `id` column and a `name` column:

    ```sql
    CREATE TABLE fiction (
      id INT NOT NULL,
      name VARCHAR(100) NOT NULL
    );
    ```

* Open `10-Stu_CRUD-Delete/Solved/insert.sql` in your IDE and explain the following:

  * We use `INSERT INTO` to add data:

    ```sql
    INSERT INTO fiction (id, name)
      VALUES
       ( 001, "To Kill a Mockingbird"),
       ( 002, "100 Years of Solitude"),
       ( 003, "War and Peace");
    ```

* Open `10-Stu_CRUD-Delete/Solved/update.sql` in your IDE and explain the following:

  * Now that we have data in the table, we use the `UPDATE` command to update the data in the `fiction` table:

    ```sql
    UPDATE fiction
    ```

  * Then we use `SET` to determine the column where the data will be updated:

    ```sql
    SET name = "Candide"
    ```

  * Next, we add a condition to determine which rows will be changed. If we don't set a condition, all the rows will be changed:

    ```sql
    WHERE id = 2;
    ```

* Navigate to `10-Stu_CRUD-Delete/Solved` in your command line and enter `mysql -u root -p` to open MySQL Shell.

  * We execute the `schema.sql` file in the MySQL Shell to create the database along with the table. We then execute the `insert.sql` file to add data:

    ```sql
    SOURCE schema.sql;
    SOURCE insert.sql;
    ```

  * We use `SELECT *` to display the contents of the `fiction` table:

    ```sql
    SELECT * FROM fiction;
    ```

  * Now that we have specified a condition using a `WHERE` clause, only the second row has changed!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which CRUD operations can we perform using a SQL query?

  * 🙋 We can create data using `INSERT`, read data using `SELECT`, update data using `UPDATE`, and delete data using `DELETE`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on examples of common queries](https://dev.mysql.com/doc/refman/8.0/en/examples.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 mins)

* If you have not yet downloaded the sample database, download it from the [MySQL Employees sample database page](https://dev.mysql.com/doc/employee/en/employees-installation.html) and unzip the file. You can also download it directly from the [GitHub repo for the Employees sample database](https://github.com/datacharmer/test_db).

* Explain that while these activities involve relatively small sets of data, many companies use SQL to handle large amounts of data quickly and easily.

* Emphasize that the skills students are learning in class are the same skills that they will use on the job to handle large datasets in the workplace -- making SQL a highly transferable skill.

* Open the `test_db/employees.sql` directory in your IDE to demonstrate the following:

  * MySQL provides a sample database that we can use to practice querying large amounts of data, similar to datasets found in the workplace.

  * Just like the databases that we have created in class, the sample database uses the `CREATE` and `USE` commands to create and select the database:

    ```sql
    DROP DATABASE IF EXISTS employees;
    CREATE DATABASE IF NOT EXISTS employees;
    USE employees;
    ```

  * The sample database also comprises numerous tables, which all contain columns that hold certain data. For example, each column in the `employees` table is assigned a specific type of data, as well as a primary key:

    ```sql
    CREATE TABLE employees (
      emp_no      INT             NOT NULL,
      birth_date  DATE            NOT NULL,
      first_name  VARCHAR(14)     NOT NULL,
      last_name   VARCHAR(16)     NOT NULL,
      gender      ENUM ('M','F')  NOT NULL,
      hire_date   DATE            NOT NULL,
      PRIMARY KEY (emp_no)
    );
    ```

  * During class today, we will learn more about applying data types and keys to tables.

  * The description of the database and tables make up the **schema** of the dataset. As datasets grow, we must plan out the schema to define both the types of data that each table can hold as well as the relationship between the tables.

* Open the [MySQL documentation on the Employees sample database schema](https://dev.mysql.com/doc/employee/en/sakila-structure.html) in your browser to demonstrate the following:

  * Databases large and small use schemas to define the structure of each table.

  * The diagram on this page shows that the `employees` table is linked to numerous other tables. These relationships allow us to query to return meaningful data, while keeping the data organized.

* Navigate to the `test_db` directory in your command line to demonstrate the following:

  * After downloading the dataset, we navigate to the unpacked directory to work with it using MySQL Shell:

    ```sh
    cd test_db/
    mysql -u root -p
    ```

  * In MySQL Shell, we use the `SOURCE` command to execute the `employees.sql` file:

    ```sql
    SOURCE employees.sql;
    ```

  * Then we check that the employees database is now in use:

    ```sql
    SELECT DATABASE();
    ```

  * Now let's view the tables contained in the database:

    ```sql
    SHOW TABLES;
    ```

  * To find out how big the database is, we can use a new method -- the aggregate function `COUNT()` --  to return the number of rows in the `employees` table:

    ```sql
    SELECT COUNT(*) FROM employees;
    ```

  * This tells us that there are over 300,000 employees in the database!

* Whether a table contains 10 rows or 300,000, it is important to build databases that can scale up quickly and easily. Today we will focus on tools that we can use to build databases, provide practice data for development, and connect databases to a MySQL server.

### 5. Instructor Demo: Connect to Node.js (5 min)

* Navigate to `11-Ins_Connect-Node/db` in your command line and enter `mysql -u root -p` to enter MySQL Shell.

* Run `SOURCE schema.sql;` and `SOURCE seeds.sql;` to create and seed the database.

* Exit the MySQL Shell and run `npm install` to demonstrate the following:

  * So far, we have worked with MySQL using MySQL Shell. However, we might want to access and manipulate data using an app. To do so, we can connect a MySQL database to an Express.js server.

  >**Note**: Before running the following code and any subsequent demos that use an Express.js server, be sure to add your MySQL password to the `server.js` file as a parameter of the `mysql.createConnection()` function.

  * Then run the server using the following command:

    ```sh
    node server.js
    ```

  * When we do so, data is printed to the command line. This data is the result of a query run directly in the Express.js server.

* Open `11-Ins_Connect-Node/server.js` in the IDE to demonstrate the following:

  * 🔑 We use the npm `mysql2` package to easily connect the MySQL database to the Express.js server:

    ```js
    const mysql = require('mysql2');
    ```

  * 🔑 Once we have required `mysql2`, we create a new database instance using `CreateConnection()`:

    ```js
    const db = mysql.createConnection();
    ```

  * 🔑 We also specify the host, user, password, and database. These configurations should match the way we access the database using MySQL Shell:

    ```js
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'classlist_db'
    },
    ```

  * 🔑 Now that we are connected to the database, we can query it directly in Express.js using the `query()` function:

    ```js
    db.query()
    ```

  * The `query()` function takes two parameters -- the actual query that we want to execute and the function that we want performed. Note that the query looks exactly the same as it did when we queried using MySQL Shell:

    ```js
    db.query('SELECT * FROM students', function (err, results) {
      console.log(results);
    });
    ```

  * When we run the `server.js` file, the query is executed and the data is printed to the screen.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What steps do we take to connect a MySQL database to an Express.js server?

  * 🙋 We require the npm `mysql2` package. Then we use `CreateConnection()` to connect the MySQL database to Express.js.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Connect-Node/README.md`.

### 6. Student Do: Connect to Node (15 min)

* Direct students to the activity instructions found in `12-Stu_Connect-Node/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of MySQL in Node.js Environment

  Work with a partner to add comments describing the functionality of the code found in [server.js](./Unsolved/server.js).

  ## 📝 Notes

  Refer to the documentation:

  [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2#installation)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the components of client-server architecture? How does a MySQL database fit into this model?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Connect to Node (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel connecting to Node.js? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `require('mysql2')`

  * ✔️ `createConnection()`

  * ✔️ `query()`

* Navigate to `12-Stu_Connect-Node/Solved/db` in your command line.

  * When we use MySQL Shell, we set the user to `root`, using the `-u` flag, and we enter the MySQL password using the `-p` flag. We will need this information when we connect the database to the Express.js server:

    ```sql
    mysql -u root -p
    ```

  * To create the database and provide seed data, we execute the `schema.sql` and `seeds.sql` files in MySQL Shell:

    ```sql
    SOURCE schema.sql;
    SOURCE seeds.sql;
    ```

  * Next, we display the database currently in use:

    ```sql
    SELECT DATABASE();
    ```

  * We connect that database to the Express.js server, using the exact name returned by the `SELECT` command.

* Open `12-Stu_Connect-Node/Solved/server.js` in your IDE and explain the following:

  * 🔑 We require the npm `mysql2` package to connect the database to the server:

    ```js
    const mysql = require('mysql2');
    ```

  * 🔑 We then use the `mysql2` method `createConnection()` to create a new instance of a MySQL database and store the connection in a variable called `db`:

    ```js
    const db = mysql.createConnection()
    ```

  * 🔑 To connect to the database that we just created using MySQL Shell, we enter the user, the password, and the name of the database -- exactly as this information was entered previously:

    ```js
    const db = mysql.createConnection(
     {
       host: 'localhost',
       user: 'root',
       password: '',
       database: 'classlist_db'
      },
      console.log(`Connected to the classlist_db database.`)
    );
    ```

  * 🔑 To test that the database has been successfully connected, we call the `query()` method on the new database instance. The method takes in two parameters -- the query that we want to execute and the function that we want performed:

    ```js
    db.query('SELECT * FROM students', function (err, results) {
      console.log(results);
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we execute a MySQL query in an Express.js server?

  * 🙋 We use the `query()` method. The first parameter is the query -- entered just as we would enter it into MySQL Shell -- and the second is the action that we want performed.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Data Types (5 min)

* Open `13-Stu_Data-Types/db/schema.sql` in your IDE and explain the following:

  * When we create a scalable database that can hold a large amount of data, we want to make sure that we store useful data of the right type.

  * 🔑 We use the **data type** attribute to assign specific types of data to columns and limit the types of data that a column can hold.

  * 🔑 We use the `INT` or `INTEGER` data type to store whole numbers:

    ```sql
    id INT
    ```

  * 🔑 For shorter strings of text, we use `VARCHAR` and specify a number of characters. For longer strings of indeterminate length, we use `TEXT`:

    ```sql
    course_title VARCHAR(30),
    course_description TEXT,
    ```

  * 🔑 For values that are true or false, we use the `BOOLEAN` data type:

    ```sql
    active BOOLEAN
    ```

  * 🔑 For each of these common data types, we have also added the `NOT NULL` constraint. We use `NOT NULL` when we want to require that each row of the table has data for that particular column:

    ```sql
    id INT NOT NULL,
    course_title VARCHAR(30) NOT NULL,
    course_description TEXT NOT NULL,
    active BOOLEAN NOT NULL,
    ```

  * We can also set a column to automatically generate data, like a date:

    ```sql
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we add a data type attribute to the columns?

  * 🙋 We add a data type attribute to limit the type of data that the column can store, and thereby ensure that only useful data is stored in the database.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Data-Types/README.md`.

### 9. Student Do: Data Types (15 min)

* Direct students to the activity instructions found in `14-Stu_Data-Types/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Data Types and Constraints

  Work with a partner to implement the following user story:

  * As a developer, I want to limit each column so that it accepts only one type of data.

  ## Acceptance Criteria

  * It's done when each column in the `customers` table has a defined data type and constraint.

  * It's done when the values in the `id`, `first_name`, and `last_name` columns cannot be `NULL`.

  ## 📝 Notes

  Refer to the documentation:

  [MySQL documentation on data types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)

  ---

  ## 💡 Hints

  If no value is supplied to a column, what value is set by default?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * MySQL constraints are classified as either column-level or table-level constraints. What is the difference?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Data Types (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with data types and constraints? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `INT`

  * ✔️ `VARCHAR()`

  * ✔️ `NOT NULL`

  * ✔️ `BOOLEAN`

* Open `14-Stu_Data-Types/Solved/db/schema.sql` in your IDE and explain the following:

  * 🔑 When we create columns for a table, it is important to properly define the columns using data types. For an id, we use `INT` or `INTEGER`, to allow only whole numbers:

      ```sql
      id INT
      ```

  * 🔑 When we add string values to a column, we should limit the data to the size that we need. By setting the column to `VARCHAR(30)`, we allow names of up to 30 characters:

      ```sql
      first_name VARCHAR(30),
      last_name VARCHAR(30),
      ```

  * 🔑 Booleans represent data that we can express as `True` or `False`. But without a built-in Boolean data type, MySQL tables use `Boolean` as a synonym for `TinyInt(1)` -- which can have a value of either `0` or `1`. So in this case, a column with a `Boolean` data type will display the data as `0` for false or `1` for true:

      ```sql
      value_card_member BOOLEAN
      ```

  * 🔑 In addition to data types, we use **constraints** to further limit the data. The `NOT NULL` constraint helps ensure that each row holds a value for that column and that no `NULL` values are allowed:

      ```sql
      id INT NOT NULL,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30) NOT NULL,
      value_card_member BOOLEAN NOT NULL
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to select the right data type and constraints for each column?

  * 🙋 By specifying the type of data that each column can hold as well as the amount of space that each piece of data can occupy -- and using constraints to further define rules for each column -- we can better enforce the integrity of the database.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on data types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html), and stay for office hours to ask for help.

* Answer any questions before proceeding.

### 11. FLEX (20 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Check if students need additional support using MySQL Shell or understanding any of the SQL concepts learned so far.

### 12. BREAK (30 mins)

### 13. Instructor Demo: Schemas (5 min)

* Open `15-Ins_Schema/index.html` in your browser and demonstrate the following:

  * Schema design is an important step in developing a database that can efficiently handle datasets of all sizes.

  * 🔑 When planning a database, it is important to consider the type of data that you will be storing and how the data is related. For example, the data for the `registrar_db` database can be separated into four categories (or tables): `courses`, `students`, `instructors`, and `classrooms`.

  * 🔑 On a more granular level, for every table we need a unique way to identify a row of data -- usually the `id`. And each column should represent one piece of data that can easily be defined by a single data type.

  * After planning these details, we can actually create the database and tables.

* Open `15-Ins_Schema/db/schema.sql` in your IDE and demonstrate the following:

  * 🔑 We start to build the schema by creating and selecting the database:

    ```sql
    DROP DATABASE IF EXISTS registrar_db;
    CREATE DATABASE registrar_db;
    USE registrar_db;
    ```

  * 🔑 Next, we check whether the table exists, and if so, we drop it. Then we create a new table using `CREATE TABLE`:

    ```sql
    DROP TABLE IF EXISTS courses;
    CREATE TABLE courses ()
    ```

  * 🔑 We add an `id` column for each table, followed by additional columns that hold the other data. For each column, we add a data type and constraints as needed:

    ```sql
    DROP TABLE IF EXISTS students;
    CREATE TABLE students (
      id INT NOT NULL,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30) NOT NULL,
      active BOOLEAN NOT NULL,
      date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
    ```

* Navigate to `15-Ins_Schema/db` in your command line and input `mysql -u root -p`, to enter MySQL Shell and demonstrate the following:

  * To execute the schema, we use the `SOURCE` command:

      ```sql
      SOURCE schema.sql;
      ```

  * We use the `DESCRIBE` command in MySQL Shell to view the table and the data type for each column:

      ```sql
      DESCRIBE students;
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we include an `id` column in each table?

  * 🙋 The `id` provides a unique identifier for each row of data, making it easier to work with.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Schema/README.md`.

### 14. Student Do: Schema (15 min)

* Direct students to the activity instructions found in `16-Stu_Schema/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Design Schema With Tables

  Work with a partner to implement the following user story:

  * As a developer, I want to design a schema that contains two tables.

  ## Acceptance Criteria

  * It's done when the schema includes two tables.

  * It's done when each table has two or more columns, and each column has a defined data type and constraint.

  * It's done when the schema matches the diagram.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The schema displays two tables, one labeled "products" and one labeled "categories", each with rows for id and other data.](./assets/image_1.png)

  ---

  ## 💡 Hints

  Which MySQL command do we use to display a table and information about each field's data types?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What issues can we avoid by having a well-designed schema?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Schema (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel designing a schema? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `CREATE DATABASE`

  * ✔️ `USE`

  * ✔️ `CREATE TABLE`

  * ✔️ Data types

  * ✔️ `NOT NULL`

  * ✔️ `DESCRIBE`

* Open `16-Stu_Schema/Solved/db/schema.sql` in your IDE and explain the following:

  * 🔑 We check whether the database exists, and if so, we drop it. Then we create the database using the `CREATE DATABASE` command:

     ```sql
     DROP DATABASE IF EXISTS grocery_db;
    CREATE DATABASE grocery_db;
     ```

  * 🔑 We use the `USE` command to specify which database the tables will be added to:

      ```sql
      USE grocery_db;
      ```

  * 🔑 We use the `CREATE` command to add a new table:

      ```sql
      CREATE TABLE products(
      );
      ```

  * 🔑 We add an `id` column to the table and set it to  `NOT NULL`, so that the column must always contain a value. We also add columns that hold specific types of data that we need to store in the database:

      ```sql
      CREATE TABLE products(
        id INT NOT NULL,
        product_name VARCHAR(30) NOT NULL,
        category_name VARCHAR(100) NOT NULL,
        price INT NOT NULL,
        in_stock BOOLEAN
      );
      ```

  * 🔑 We use the `CREATE` command to add a second table and assign a data type to each column:

      ```sql
      CREATE TABLE categories(
        id INT NOT NULL,
        category_name VARCHAR(30) NOT NULL
      );
      ```

* Navigate to `16-Stu_Schema/Solved/db` in your command line and input `mysql -u root -p`, to enter MySQL Shell and demonstrate the following:

  * To execute the schema, we use the `SOURCE` command:

    ```sql
    SOURCE schema.sql;
    ```

  * 🔑 We use the `DESCRIBE` command in MySQL Shell to check that the new tables have been created and that they hold the right data types:

      ```sql
      DESCRIBE products;
      DESCRIBE categories;
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we drop the `grocery_db` database if it exists?

  * 🙋 We use the `DROP` command before so that we can start fresh and add the new database without error.

  * ☝️ Why do we need a schema?

  * 🙋 A schema describes the data that we want to store in the database and serves as a template for the tables -- helping us to build an efficient database that can handle datasets of all sizes.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to the lesson plan, read the [MySQL documentation on getting information about databases and tables](https://dev.mysql.com/doc/refman/8.0/en/getting-information.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Seeds (5 min)

* Navigate to `17-Ins_Seeds/db` in your command line and input `mysql -u root -p`, to enter MySQL Shell and demonstrate the following:

  * After we initialize MySQL Shell, we set up the database:

    ```sql
    SOURCE schema.sql;
    ```

  * 🔑 This schema provides the blueprint for the data. But during development we will need some actual data to work with, so we will create a `seeds` file.

  * 🔑 After we create the `seeds` file, we will import that data into the database:

    ```sql
    SOURCE db/seeds.sql
    ```

  * At that point, we will be able to query the data -- using `SELECT *` to display all the data that has been added to the `courses` table:

    ```sql
    SELECT * FROM courses;
    ```

* Open `17-Ins_Seeds/db/seeds.sql` in your IDE and explain the following:

  * Now let's look more closely at the data that we just imported.

  * 🔑 We use an `INSERT INTO` command to specify the table that we want to add data to and the columns:

    ```sql
    INSERT INTO courses (id, course_title, course_description, active)
    ```

  * 🔑 We then use a `VALUES` clause to specify the values. These values will provide **seeds**, or sample data, that we can work with during development. We can also use seeds to provide static values, like country codes, that might be used in both development and production:

    ```sql
    VALUES (001, "Algebra I", "Linear equations, inequalities, functions, and graphs", true),
       (002, "Pre-Calculus", "Polynomials, Complex Numbers, Vectors", true),
       (003, "Calculus I", "Limits, Differentiation, Derivatives", true),
       (004, "Euclidean Geometry", "Intuitively Appealing Axioms Galore", false);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we use seeds to provide sample data during development?

  * 🙋 Having sample data available during development allows us to test the schema design and queries.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Seeds/README.md`.

### 17. Student Do: Student Do: Seeds (15 min)

* Direct students to the activity instructions found in `18-Stu_Seeds/README.md`

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Seed Data Not Populating Table

  Work with a partner to resolve the following issue(s):

  * As a developer, I should be able to populate my table with seed data.

  ## Expected Behavior

  When the `seeds.sql` file is executed in MySQL Shell, the data should populate my table.

  ## Actual Behavior

  When the `seeds.sql` file is executed, the data is not successfully populated in the table.

  ## Steps to Reproduce the Problem

  1. Execute `schema.sql` in MySQL Shell to create the database and table.

  2. Execute `seeds.sql` in MySQL Shell to populate data in the table.

  3. Run `SELECT * FROM products;` to view seeded data.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The completed table displays an id column and a name column, holding five rows of data.](./assets/image_1.png)

  ---

  ## 💡 Hints

  Which MySQL statement do we use to add data to a table?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you alter an existing table?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Seeds (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel seeding data? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `INSERT INTO`

  * ✔️ `VALUES`

* Open `18-Stu_Seeds/Solved/db/schema.sql` in your IDE and explain the following:

  * 🔑 We start by referring to the table in the schema. The `products` table has three columns, all set to `NOT NULL`, so that they must contain a value:

     ```sql
     CREATE TABLE products (
       id INT NOT NULL,
       product_name VARCHAR(30) NOT NULL,
      category_name VARCHAR(30) NOT NULL
     );
     ```

* Open `18-Stu_Seeds/Solved/db/seeds.sql` in your IDE and explain the following:

  * 🔑 We use the `INSERT INTO` statement to specify which table we are adding data to and which columns they belong to. Because the `id` column is set to `NOT NULL`, we must provide a value:

     ```sql
     INSERT INTO products (id, product_name, category_name)
     ```

  * 🔑 Then we use `VALUES` to insert values into the columns, separating each row with a comma and ensuring that the seed data appears in the same order as the column list:

    ```sql
    VALUES (001, "spinach", "produce"),
       (002, "peanut butter", "staples"),
       (003, "peas-canned", "canned goods"),
       (004, "ice cream", "frozen"),
       (005, "potato chips", "snacks");
    ```

* Navigate to `18-Stu_Seeds/Solved/db` in your command line and input `mysql -u root -p`, to enter MySQL Shell and demonstrate the following:

  * To execute the schema and seed the data, we use the `SOURCE` command:

    ```sql
    SOURCE schema.sql;
    SOURCE seeds.sql;
    ```

  * To test that the data has been successfully added, we use `SELECT *`:

    ```sql
    SELECT * FROM products;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of seeding a table?

  * 🙋 Seeding a table with sample data allows us to test queries and interact with the database. We can also use seeding to populate a table in which the data will not change, like country codes or zip codes.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on loading data into a table](https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Foreign and Primary Keys (5 min)

* Open `19-Ins_Foreign-Primary-Key/index.html` in your browser and demonstrate the following:

  * Storing data in tables is useful, but the ability to form relationships between groups of data is what truly makes MySQL powerful.

  * This schema includes two tables: `instructors` and `courses`. The `instructors` table holds information for each individual instructor. The `courses` table holds data about each course.

  * 🔑 Because each course has an instructor, we form a relationship to link the data between the two tables.

  * 🔑 We use primary and foreign keys to link the `id` of the individual instructor with the `courses` table.

* Open `19-Ins_Foreign-Primary-Key/db/schema.sql` in your IDE and demonstrate the following:

  * 🔑 A way to identify the rows of a table, a **primary key** must be unique and set to `NOT NULL`. In the `instructors` table, we set the `id` to be the primary key:

    ```sql
    CREATE TABLE instructors (
      id INT NOT NULL,
      first_name VARCHAR(30),
      last_name VARCHAR(30),
     PRIMARY KEY (id)
    );
    ```

  * 🔑 We use the primary key for the `instructors` table  to link to the `courses` table.

  * 🔑 In the `courses` table, we add a column that will hold the `id`, and we limit it to the same type of data as the primary key that we just set up (in this case, an `INT`):

    ```sql
    instructor_id INT
    ```

  * 🔑 Then we designate the column as a **foreign key**, or a column that refers to the primary key of another table:

    ```sql
    FOREIGN KEY (instructor_id)
    ```

  * Unlike primary keys, foreign keys can contain `NULL` values:

  * 🔑 To define the relationship, we use the `REFERENCES` command, followed by the name of the table and column that we want to reference:

    ```sql
    REFERENCES instructors(id)
    ```

  * 🔑 Because the data is now related, we need to consider what will happen data is deleted from the parent table. So if the instructor data is no longer available, the column will be set to `NULL`:

    ```sql
    ON DELETE SET NULL
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we link tables using primary and foreign keys?

  * 🙋 We use a primary key to provide a unique identifier for each row of data in a table that we want to reference. Then we use a foreign key in a second table to link the two tables.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Foreign-Primary-Key/README.md`.

### 20. Student Do: Foreign and Primary Keys (15 min)

* Direct students to the activity instructions found in `20-Stu_Foreign-Primary-Key/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Use Primary Key and Foreign Key to Define Relationship Between Tables

  Work with a partner to implement the following user story:

  * As a developer, I want to organize my data by linking a `customers` table with a related `customer_orders` table.

  ## Acceptance Criteria

  * It's done when the `id` column in the `customers` table is defined as the primary key.

  * It's done when the foreign key in the `customer_orders` table refers to the `customers` table primary key.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The schema displays a customers table and a customer_order table, each linked by the customer_id value.](./assets/image_1.png)

  ---

  ## 💡 Hints

  What is the difference between primary and foreign key constraints?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the advantages of using multiple, related tables to store data?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Foreign and Primary Keys (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with primary and foreign keys? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `PRIMARY KEY`

  * ✔️ `FOREIGN KEY`

  * ✔️ `REFERENCES`

* Open `20-Stu_Foreign-Primary-Key/Solved/db/schema.sql;` in your IDE and explain the following:

  * 🔑 We set the primary key of the `customers` table to the `id`, to provide a unique identifier that we can reference in another table:

    ```sql
    CREATE TABLE customers (
      id INT NOT NULL,
      first_name VARCHAR(30),
      last_name VARCHAR(30),
      PRIMARY KEY (id)
    );
    ```

  * 🔑 Then, in the table where we want to reference the data, we add a column that will hold the `customer_id` values:

    ```sql
    customer_id INT,
    ```

  * 🔑 We set the column that references data from another table as the foreign key:

    ```sql
    FOREIGN KEY (customer_id)
    ```

  * 🔑 We use `REFERENCES` to define the relationship and describe what we want to happen if the parent data is no longer available:

    ```sql
    REFERENCES customers(id)
    ON DELETE SET NULL
    ```

* Navigate to `20-Stu_Foreign-Primary-Key/Solved/db` in your command line and input `mysql -u root -p`, to enter MySQL Shell and demonstrate the following:

  * To execute the schema and seed the data, we use the `SOURCE` command:

    ```sql
    SOURCE schema.sql;
    SOURCE seeds.sql;
    ```

  * We use `DESCRIBE` to check whether the primary key and foreign key were added to the table. The foreign key will be shown as `MUL`, or "multiple", meaning that it does not need to be unique, unlike the primary key:

    ```sql
    DESCRIBE customers;
    DESCRIBE customer_order;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important that a primary key is unique?

  * 🙋 Making the primary key unique helps to ensure that we can access an individual row of data -- and only that row.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MySQL documentation on PRIMARY KEY and UNIQUE](https://dev.mysql.com/doc/refman/5.6/en/constraint-primary-key.html) and the [MySQL documentation on FOREIGN KEY](https://dev.mysql.com/doc/refman/5.6/en/create-table-foreign-keys.html), and stay for office hours to ask for help.

* Answer any questions before proceeding.

### 22. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
