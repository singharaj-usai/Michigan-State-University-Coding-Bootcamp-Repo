# Module 14 Instructor Overview: Model-View-Controller (MVC)

## Overview

In this module, students will use the separation of concerns principle and the MVC framework to build full-stack web apps. They will use Handlebars.js features including expressions, built-in helpers, custom helpers, and partials to build static templates that can render dynamic data. Students will use front-end logic to make requests and pass data to the back end. They will begin by using hardcoded data and transition to using seed data with Sequelize and MySQL. They will use the routes in the Controller to manipulate data in the Model, to serialize Sequelize objects before sending them to the View, and create their own custom middleware for user authentication. Students will also incorporate sessions and cookies using the Sequelize store. They will be introduced to Prettier before starting on the mini-project.

Review this module's Roadmap in Canvas for detailed information on key topics, learning objectives, and this module's Challenge.

## Instructor/TA Notes

* Take some time to read through the Handlebars.js documentation and the Express Handlebars documentation to refamiliarize yourself with the template engine. This module uses Express Handlebars, so the Handlebars.js documentation alone might not provide all of the answers. Focus on expressions, built-in helpers, custom helpers, and partials.

* This module introduces students to the template engine Handlebars.js. The intention is not so much for students to learn Handlebars.js because it will be useful in their careers but more to treat the experience as an introduction to template engines, preparation for React.js, and a way to solidify their understanding of the MVC framework.

* You will be using MySQL for the majority of this module's activities. Be sure to have your MySQL server up and running. You can create the databases ahead of time or demonstrate it live in class.

* Starting with `07-Ins_Data-Serialization`, each activity requires a `.env` file. Be sure to create one or rename the existing `.env.EXAMPLE` file before demonstrating each activity.

* Be prepared to remind students how to start their MySQL server on Day 1. They will need to use it starting with `08-Stu_Data-Serialization`.

* **Important**: Activities `15-Ins_Sessions` through `18-Stu_Cookies` are aimed at providing an **introduction** to sessions and cookies as they may encounter them in the workplace. Aim to keep your explanations simple to fit in the alloted timeframe and remind students that on the job when they encounter similar, challenging codebases they will often have to refer to the documentation and do more research on their own.

* You'll need to install the VS Code extensions ESLint and Prettier to properly demonstrate both libraries for Day 3.

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

  * [14.1 Lesson Plan](./01-Day_Handlebars/14.1-LESSON-PLAN.md)

  * [14.2 Lesson Plan](./02-Day_Authentication/14.2-LESSON-PLAN.md)

  * [14.3 Lesson Plan](./03-Day_Review/14.3-LESSON-PLAN.md)

### Challenge

  * [Module 14 Challenge](../../../01-Class-Content/14-MVC/02-Challenge)

### Slide Decks

  * [Module 14: MVC](https://docs.google.com/presentation/d/1RIA8VZVN4_JAaL0xSPf1GPc8b5dJlM5V43EVNEZ_kfA/edit?usp=sharing)

### Algorithms

  * [01: Common Element](../../../01-Class-Content/14-MVC/03-Algorithms/01-common-element/)

  * [02: Permutation Substring](../../../01-Class-Content/14-MVC/03-Algorithms/02-permutation-substring/)

  * [03: Concert Flyer](../../../01-Class-Content/14-MVC/03-Algorithms/03-concert-flyer/)

    * 📹 [Let's Code Concert Flyer!](https://2u-20.wistia.com/medias/42ac9axtbq)

### Resources

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
