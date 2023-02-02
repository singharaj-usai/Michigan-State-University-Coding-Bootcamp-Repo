# Module 17 & 18 Instructor Overview: Computer Science for JavaScript and NoSQL

## Overview

In Module 17, we will shift gears a bit to introduce students to general computer-science concepts as they relate to JavaScript. The end goal is to prepare students for the technical interview portion of the job interview process. While still project-based, this will be a more concept-dense module than students are accustomed to.

We will dissect JavaScript and review how code executes at a granular level. We will also learn about closures and how we can leverage them in our code. We will compare inheritance and composition in application design. And we will review search algorithms and recursion in JavaScript.

The Module 17 activities are especially aimed at helping students gain practice experience in interviews and help move them from classroom learners to career-ready developers. Please allow time to share with the class your own experiences as a seasoned industry professional -- as you are comfortable -- in both interviews and on the job. In addition, the activities are built to allow time for conversations centered the key concepts to help the students gain confidence in both asking questions and explaining their ideas to others.

For the Module 17 mini-project, students will practice the technical interview portion of a mock interview for a web-developer job with their peers. They'll address topics that are foundational to improving code performance and commonly found in technical interviews.

In Module 18, you will introduce students to NoSQL databases and performing CRUD operations using MongoDB, a popular NoSQL document-based database. Students will also learn how to use Mongoose, an Object Data Modeling (ODM) library, to enforce a specific schema on data and handle data relationships. Deployment of an application using Mongo Atlas and Heroku is also discussed.

Review the Roadmap for each module in Canvas for detailed information on key topics, learning objectives, and the Challenges for these modules.

## Instructor/TA Notes

* In Module 17, we will explore JavaScript execution and data structures. To prepare, review concepts related to [execution context vs. scope](https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/) and the [JavaScript execution process](https://www.youtube.com/watch?v=8aGhZQkoFbQ). To explain JavaScript execution, you should be familiar with the following terminology: thread of execution, execution context, scope chain, event loop, callback queue, and call stack.

* Some activities use a testing library to debug or build code. Lesson content moves fluidly between the browser and Node.js, so familiarize yourself with when you'll use `npm install` to run the test suites.

* We teach advanced JavaScript concepts including closures, classes, and factory functions. Take some time before class to review these subjects so you are prepared for questions about lexical environment, composition, and inheritance. Some students might have a hard time understanding these concepts. Encourage them to be patient with themselves, and remind them that the best way to understand these topics is through coding practice.

* We will focus primarily on algorithms. To prepare, review the algorithms in the [Resources](#resources) section. Students might struggle to understand some of the algorithms, so encourage patience, practice, asking questions, and seeking resources.

* The Module 17 mini-project is a departure from past projects in that it is an interactive mock interview with a small group of peers. Encourage students to take the mini-project seriously. The main objective is to practice technical communication in preparation for the real-life interview process. Be sure to check on students frequently to motivate them. Add a personal story about any technical interviews you've done if possible.

* If students struggle with the `bash shell` activity, `27-Evr_Shell`, walk through it with them using the talking points provided. Otherwise, support the students as they work on the activity and briefly review it at the end.

* In Module 18, you will focus on NoSQL databases. Be sure to have MongoDB and Compass installed on your machine before the first class. Refer to the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) for instructions.

* Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. To use, make sure that you first have both MongoDB and Node.js installed. For start-up instructions, refer to the [Mongoose docs on getting started](https://mongoosejs.com/docs/index.html).

* Mongo Atlas, a fully managed cloud database, will be used to deploy the Module 18 mini-project to Heroku. For instructions on how to sign up for an account and deploy a free cluster, refer to [Get started free with MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/).

* Module 18's activities do not have a front end and all routes will be tested using Insomnia. Please make sure that you have Insomnia installed locally prior to class. Refer to [Insomnia installation docs](https://insomnia.rest/download) as needed.

* Though MongoDB might be new to most learners, Module 18's activities build on skills developed in earlier modules, including Express servers, SQL databases, data relationships, and queries. Where possible, encourage students to make connections to prior learning and start thinking about the role that databases such as MongoDB play in their apps.

## Career Connection

* Remind students that related career services material can be found in the Weekly Wrap-Up in Canvas.

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

* In Module 19, students will learn about measuring and optimizing the performance of web applications, as well as learning how to create Progressive Web Applications (PWAs). Chrome Devtools and Google Lighthouse will be our primary tools for measuring web application performance. We will use the Service Worker and Cache APIs to cache assets and API responses, which ensures that the application will continue to work without an internet connection. To unlock the power of service workers, we will use `webpack` and Workbox.

* This module is a precursor to the upcoming React modules, because webpack is an important part of React. While learning about PWAs, students will gain exposure to the client-server architecture, which is different from the MVC model that they had been using in previous weeks.

* In Module 20, students will learn how to create a React single-page application (SPA) from the ground up. Through this process, students will learn about components, state, props, React styling, and how to test React applications.

* Make sure that you have installed `npx` so that you can demonstrate `create-react-app`. To check the installation, run `npx --version` in the command line.

* The Module 22 Challenge will be an extra credit opportunity for students. This change comes from student and instructor feedback on the amount of work and time required to complete both the Module 22 Challenge and Project 03 that week. Please let students know about this ahead of time as they enter Phase 3 of the boot camp.

## Helpful Links

This section contains links to this module's lesson plans, Challenge, slide decks, algorithms, and resources.

### Lesson Plans

  * [09.1 Lesson Plan](./01-Day/01-Day-LessonPlan.md)

  * [09.2 Lesson Plan](./02-Day/02-Day-LessonPlan.md)

  * [09.3 Lesson Plan](./03-Day/03-Day-LessonPlan.md)

  * [09.4 Lesson Plan](./04-Day/04-Day-LessonPlan.md)

  * [09.5 Lesson Plan](./05-Day/05-Day-LessonPlan.md)

### Challenge

  * [Module 17 Challenge](../../../01-Class-Content/17-CS/02-Challenge)

  * [Module 18 Challenge](../../../01-Class-Content/18-NoSQL/02-Challenge)

### Slide Decks

  * [Module 17: Computer Science for JavaScript](https://docs.google.com/presentation/d/16vSjLoHs48HwxdQIc5V67tvhW9f-VZBxElEY2nltVgA/edit?usp=sharing)

  * [Module 18: NoSQL](https://docs.google.com/presentation/d/1U9HV8gv4am28LWJ46sDm367mrBi0PZ3tpIDYNpRoj3A/edit?usp=sharing)

### Algorithms

Module 17:

  * [01: Reverse Words](../../../01-Class-Content/17-CS/03-Algorithms/01-reverse-no-built-in)

  * [02: Left Rotation](../../../01-Class-Content/17-CS/03-Algorithms/02-left-rotation)

    * 📹 [Let's Code Left Rotation!](https://2u-20.wistia.com/medias/kfyhj4z6fn)

  * [03: Reverse in Place](../../../01-Class-Content/17-CS/03-Algorithms/03-reverse-in-place)

Module 18:

  * [01: Valid Brackets](../../../01-Class-Content/18-NoSQL/03-Algorithms/01-valid-brackets)

    * 📹 [Let's Code Valid Brackets!](https://2u-20.wistia.com/medias/dazwcql05r)

  * [02: Min Increment for Unique](../../../01-Class-Content/18-NoSQL/03-Algorithms/02-min-increment-for-unique)

  * [03: Peak Finder](../../../01-Class-Content/18-NoSQL/03-Algorithms/03-peak-finder)

### Resources

  * [Global Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#global_context)

  * [Functional Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Function_context)

  * [What Is the Event Loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

  * [Scope vs. Context](https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/)

  * [Data Structures](https://en.wikipedia.org/wiki/Data_structure)

  * [Event Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Event_loop)

  * [Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)

  * [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

  * [Composition Over Inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

  * [Practical Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures/#Practical_closures)

  * [Linear Search](https://en.wikipedia.org/wiki/Linear_search)

  * [Recursion](https://en.wikipedia.org/wiki/Recursion)

  * [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)

  * [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation)

  * [Merge Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Merge_sort)

  * [Bubble Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Bubble_sort)

  * [Quick Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Quicksort)

  * [MongoDB Installation Guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)

  * [Understanding the different types of NoSQL databases](https://www.mongodb.com/scale/types-of-nosql-databases)

  * [MongoDB docs on getting started](https://docs.mongodb.com/manual/tutorial/getting-started/)

  * [Mongoose docs on getting started](https://mongoosejs.com/docs/index.html)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
