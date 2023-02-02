# Module 13 & 14 Instructor Overview: Object-Relational Mapping (ORM) and Model-View-Controller (MVC)

## Overview

In Module 13, you will teach students to use the ORM library Sequelize to connect to and seed a database. In the process, students will create and configure Sequelize models, use validation tools, encrypt a password using `bcrypt`, automate functionality with Hooks, and use SQL in literals. Students will also model relationships and relate data between SQL tables using Sequelize associations. With the help of RESTful routes, they will map HTTP verbs to CRUD actions and build custom routes that map to instance methods. Additionally, students will learn to catch errors with `try...catch` and use `async` and `await` instead of Promises.

In Module 14, students will use the separation of concerns principle and the MVC framework to build full-stack web apps. They will use Handlebars.js features including expressions, built-in helpers, custom helpers, and partials to build static templates that can render dynamic data. Students will use front-end logic to make requests and pass data to the back end. They will begin by using hardcoded data and transition to using seed data with Sequelize and MySQL. They will use the routes in the Controller to manipulate data in the Model, to serialize Sequelize objects before sending them to the View, and create their own custom middleware for user authentication. Students will also incorporate sessions and cookies using the Sequelize store. They will be introduced to Prettier before starting on the mini-project.

Review the Roadmap for each module in Canvas for detailed information on key topics, learning objectives, and the Challenges for these modules.

## Instructor/TA Notes

* For Module 13, take some time to review the Sequelize documentation to refamiliarize yourself with the library. Focus on implementing Hooks, validations, and associations.

* You will use MySQL in all of the activities for this module, so be sure to have your MySQL server up and running. You can create the databases listed in each activity ahead of time, or you can prepare to demonstrate it live in class.

* Run `npm install` before the Instructor Demo to ensure that you have the full five-minute window for instruction.

* In the first activity of Module 13, `01-Ins_Sequelize-Setup`, you will hardcode the database credentials in the `connection.js` file. Every subsequent activity uses a `.env` file. Make sure that you create one or rename the existing `.env.EXAMPLE` file before demonstrating each activity.

* Instead of relying on a front end, all of the activities will use Insomnia to test the routes. Be sure to have it installed and ready for class.

* Module 13 also introduces RESTful routes. Highlight the convention for students and tell them that they will revisit the pattern at a later point.

* The introduction to seeding in this module differs from what students will find in the Sequelize documentation. Consider warning students about the difference in case they look for more information on seeding in the documentation.

* For Module 14, take some time to read through the Handlebars.js documentation and the Express Handlebars documentation to refamiliarize yourself with the template engine. This module uses Express Handlebars, so the Handlebars.js documentation alone might not provide all of the answers. Focus on expressions, built-in helpers, custom helpers, and partials.

* This module introduces students to the template engine Handlebars.js. The intention is not so much for students to learn Handlebars.js because it will be useful in their careers but more to treat the experience as an introduction to template engines, preparation for React.js, and a way to solidify their understanding of the MVC framework.

* Starting with `07-Ins_Data-Serialization`, each activity requires a `.env` file. Be sure to create one or rename the existing `.env.EXAMPLE` file before demonstrating each activity.

* Be prepared to remind students how to start their MySQL server on Day 1. They will need to use it starting with `08-Stu_Data-Serialization`.

* **Important**: Activities `15-Ins_Sessions` through `18-Stu_Cookies` are aimed at providing an **introduction** to sessions and cookies as they may encounter them in the workplace. Aim to keep your explanations simple to fit in the alloted timeframe and remind students that on the job when they encounter similar, challenging codebases they will often have to refer to the documentation and do more research on their own.

* You'll need to install the VS Code extensions ESLint and Prettier to properly demonstrate both libraries.

* If the students struggle with the Everyone Do: Prettier activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

## Career Connection

* Remind students that related career services material can be found in the Weekly Wrap-Up in Canvas.

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

* Starting next week, students will work on their group projects. The project groups and project requirements will be announced in the next class (Day 1 of Module 15).

* In the meantime, start thinking about possible project groups. This time, assign three students per group, all around the same skill level. Be ready to assign students to groups in the next class.

* There are occasional circumstances, such as an illness or a personal emergency, which might force a student to complete a group project on their own. In these circumstances, as the instructor, you will meet with the student and SSM to determine if completing the project independently is the best path forward. If it is, you will share adjusted project requirements and a grading rubric with the student.

* Let students know that they will be allowed to create their own groups for the final project.

## Helpful Links

This section contains links to this module's lesson plans, Challenge, slide decks, algorithms, and resources.

### Lesson Plans

  * [07.1 Lesson Plan](./01-Day/01-Day-LessonPlan.md)

  * [07.2 Lesson Plan](./02-Day/02-Day-LessonPlan.md)

  * [07.3 Lesson Plan](./03-Day/03-Day-LessonPlan.md)

  * [07.4 Lesson Plan](./04-Day/04-Day-LessonPlan.md)

  * [07.5 Lesson Plan](./05-Day/05-Day-LessonPlan.md)

### Challenge

  * [Module 13 Challenge](../../../01-Class-Content/13-ORM/02-Challenge)

  * [Module 14 Challenge](../../../01-Class-Content/14-MVC/02-Challenge)

### Slide Decks

  * [Module 13: ORM](https://docs.google.com/presentation/d/12L1MgEGt-oHIPMNWisv2QAxZ3J4NQNpAxk2jY2rXtyM/edit?usp=sharing)

  * [Module 14: MVC](https://docs.google.com/presentation/d/1RIA8VZVN4_JAaL0xSPf1GPc8b5dJlM5V43EVNEZ_kfA/edit?usp=sharing)

### Algorithms

Module 13:

* [01: Double Triple Map](../../../01-Class-Content/13-ORM/03-Algorithms/01-double-triple-map/)

  * 📹 [Let's Code Double Triple Map!](https://2u-20.wistia.com/medias/pz1ugrv0yu)

* [02: Array Intersection](../../../01-Class-Content/13-ORM/03-Algorithms/02-array-intersection/)

* [03: Squares of a Sorted Array](../../../01-Class-Content/13-ORM/03-Algorithms/03-squares-of-a-sorted-array/)

Module 14:

  * [01: Common Element](../../../01-Class-Content/14-MVC/03-Algorithms/01-common-element/)

  * [02: Permutation Substring](../../../01-Class-Content/14-MVC/03-Algorithms/02-permutation-substring/)

  * [03: Concert Flyer](../../../01-Class-Content/14-MVC/03-Algorithms/03-concert-flyer/)

    * 📹 [Let's Code Concert Flyer!](https://2u-20.wistia.com/medias/42ac9axtbq)

### Resources

* [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

* [Sequelize documentation](https://sequelize.org/master/)

* [npm documentation on bcrypt](https://www.npmjs.com/package/bcrypt)

* [npm documentation on dotenv](https://www.npmjs.com/package/dotenv)

* [ESLint configuration user guide](https://eslint.org/docs/user-guide/configuring)

* [Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)

* [Sequelize documentation](https://sequelize.org/master/)

* [Handlebars.js](https://handlebarsjs.com/)

* [npm documentation on Express Handlebars](https://www.npmjs.com/package/express-handlebars)

* [npm documentation on connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

* [GitHub documentation on Express.js session cookies](https://github.com/expressjs/session#cookie)

* [Express.js documentation on using middleware](https://expressjs.com/en/guide/using-middleware.html)

* [ESLint configuration user guide](https://eslint.org/docs/user-guide/configuring)

* [Prettier documentation](https://prettier.io/docs/en/index.html)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
