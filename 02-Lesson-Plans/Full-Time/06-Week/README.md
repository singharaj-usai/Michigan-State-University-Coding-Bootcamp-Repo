# Module 11 & 12 Instructor Overview: Express.js and SQL

## Overview

In Module 11, students will learn about important features of the Express.js library. They will learn how to create and configure an Express.js app to handle GET and POST routes. Also, they will configure servers to send static files to the client. Students will learn to identify how client-side requests relate to server-side responses. They will parse query strings and parameters, send POST requests using Insomnia, and use the Fetch API. Finally, students learn how to create separation of concerns for their routes.

In Module 12, you’ll introduce students to the final layer to your tech stack: the database. Students will learn to design a MySQL database capable of storing large amounts of data as well as the tools needed to create, read, update and delete data. Connecting a MySQL database to a Node.js application using an Express.js server is also discussed.

Review the Roadmap for each module in Canvas for detailed information on key topics, learning objectives, and the Challenges for these modules.

## Instructor/TA Notes

* In Module 11, students will deploy their web applications using Heroku's command-line interface (CLI). Be sure to have students create a Heroku account and install the CLI before class. For more guidance, they can refer to the [Full-Stack Blog on how to install the Heroku CLI](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli).

* We will use Insomnia to make HTTP requests to Express.js routes. Be sure to have students [install Insomnia](https://insomnia.rest/download) before class.

* Students will write data to the file system instead of a database. We will cover persistent storage using databases in another module. Review the [Node.js documentation on the fs module](https://nodejs.org/api/fs.html) before class.

* This module also features a guide on Git History. Students will clone the Inquirer.js repository for this activity. To allow for more time during the activity, provide students with the link to the [Inquirer.js repository](https://github.com/SBoudrias/Inquirer.js/) to clone before class.

* For Module 12, please make sure that you have [installed MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html) on your machine and be prepared to troubleshoot any issues students may have faced during setup.

* Module 12 activities use MySQL Shell. Please make sure you have your MySQL password ready for use to demonstrate the activities.

* After starting the MySQL server, make sure that students can initialize the MySQL Shell, using the command `mysql -u root -p`. They will need their MySQL password.

   * If Mac users get a `command not found` error, set up a `.zshrc` file in your home directory and add the `mysql` command to it. To do this, navigate to the home directory and type the following command in the command line: `echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc`. Mac users who install using Homebrew should not face this issue. Refer to [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) for installation instructions.

  * If Windows users get the `command not found` error, refer them to the [MySQL documentation on customizing the PATH](https://dev.mysql.com/doc/refman/8.0/en/mysql-installation-windows-path.html)
  mysql-installation-windows-path.html).

* This week's Challenge uses MySQL, Node.js, and Inquirer to build a command line application. For a refresher on Inquirer, refer students to the [NPM documentation on Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4).

## Career Connection

* Remind students that related career services material can be found in the Weekly Wrap-Up in Canvas.

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

During Module 13, students will build on their MySQL skills and learn to use [Sequelize](https://sequelize.org/), an object-relational mapping (ORM) library, to simplify the MySQL queries and easily handle data in a full-stack app.

During Module 14, students will combine everything they've learned so far to create their first full-stack application&mdash;with Handlebars.js, MVC architecture, and front-end authentication.

## Helpful Links

This section contains links to this module's lesson plans, Challenge, slide decks, algorithms, and resources.

### Lesson Plans

  * [06.1 Lesson Plan](./01-Day/01-Day-LessonPlan.md)

  * [06.2 Lesson Plan](./02-Day/02-Day-LessonPlan.md)

  * [06.3 Lesson Plan](./03-Day/03-Day-LessonPlan.md)

  * [06.4 Lesson Plan](./04-Day/04-Day-LessonPlan.md)

  * [06.5 Lesson Plan](./05-Day/05-Day-LessonPlan.md)

### Challenge

  * [Module 11 Challenge](../../../01-Class-Content/11-Express/02-Challenge)

  * [Module 12 Challenge](../../../01-Class-Content/12-SQL/02-Challenge)

### Slide Decks

  * [Module 11: Express.js](https://docs.google.com/presentation/d/1GuwaaR-Td4TyFa6mzRs5mKU4bEsC0wbIq_74r96T2gA/edit?usp=sharing)

  * [Module 12: SQL](https://docs.google.com/presentation/d/1F-uRmcExGF3NYWAh2vz5Nxi8AJe-WWpwpoeAH7rZsOc/edit?usp=sharing)

### Algorithms

Module 11:

* [01: Most Songs In Playlist](../../../01-Class-Content/11-Express/03-Algorithms/01-most-songs-in-playlist)

* [02: Is Perfect Square](../../../01-Class-Content/11-Express/03-Algorithms/02-is-perfect-square)

* [03: Array Search 2D](../../../01-Class-Content/11-Express/03-Algorithms/03-array-search-2d)

  * 📹 [Let's Code: Array Search 2D!](https://2u-20.wistia.com/medias/qbtymlf1fx)

Module 12:

* [01: Multiply Into 20](../../../01-Class-Content/12-SQL/03-Algorithms/01-multiply-into-20)

  * 📹 [Let's Code Multiply Into 20!](https://2u-20.wistia.com/medias/joflnt5aqv)

* [02: Zeroes and Ones](../../../01-Class-Content/12-SQL/03-Algorithms/02-zeroes-and-ones)

* [03: Merge Sorted](../../../01-Class-Content/12-SQL/03-Algorithms/03-merge-sorted)

### Resources

* [How to install the Heroku CLI](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli)

* [Heroku Deployment Guide](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

* [Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)

* [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide)

* [MySQL Reference Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-reference-guide)

* [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

* [Express.js documentation on the Hello World example](https://expressjs.com/en/starter/hello-world.html)

* [Express.js documentation on response methods](https://expressjs.com/en/guide/routing.html#response-methods)

* [Express.js documentation on route paths](http://expressjs.com/en/guide/routing.html#route-paths)

* [Express.js documentation on basic routing](https://expressjs.com/en/starter/basic-routing.html)

* [Express.js documentation on serving static files](http://expressjs.com/en/starter/static-files.html)

* [Express.js documentation on express.Router](http://expressjs.com/en/guide/routing.html#express-router)

* [Express.js documentation on writing middleware](https://expressjs.com/en/guide/writing-middleware.html)

* [MDN Web Docs on using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

* [Insomnia documentation on getting started](https://support.insomnia.rest/article/11-getting-started)

* [Node.js documentation on the fs module](https://nodejs.org/api/fs.html)

* [Heroku documentation on getting started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

* [MySQL documentation on Getting Started](https://dev.mysql.com/doc/mysql-getting-started/en/)

* [NPM documentation on Node MySQL 2](https://www.npmjs.com/package/mysql2)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
