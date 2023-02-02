# Full-Stack Lesson Plans

Welcome, instructors and TAs! This directory contains the lessons plans and grading rubrics for the Full-Stack Boot Camp. 

In addition, this README contains guidelines for [how to approach each class week](#how-to-approach-each-week), as well as background information about [why we teach what we teach](#why-we-teach-what-we-teach). We hope this information supports you as you take on the challenge of changing students' lives! 

## How to Approach Each Week

Here are some general tips and reminders about things you should do at different times during the week: at the begining of the week, before class starts, at the beginning of class, during class, and at the end of class. 

If you have any questions, please check with your SSM.

### Beginning of the Week

At the beginning of the class week, complete the following tasks to prepare for class:  

* Review the instructor-facing Module Overview and the student-facing content in Canvas.

* Review the Challenge assignment(s) for the week.

* Review the lesson plans for the week.

* Ensure that the Challenge from previous week(s) has been graded.

### Before Class Starts

Before class starts, take the following steps to make sure you're prepared to teach: 

* Do a `git pull` of this repo.

* Refer to the Instructor Notes in the lesson plan and/or the associated time tracker to understand the range of activities that you'll cover in class.

* Push any `Unsolved` activities to the class repo for today's lesson. **DO NOT** push `Solved` folders until the end of class.

**Note**: Students also receive the `Unsolved` activities for each module in Canvas.

#### What NOT to Move Into the Class Repo

**DO NOT** move anything in this folder, `02-Lesson-Plans`, into the class repository. This includes, but is not limited to, the following content:

* Grading Rubrics

* Lesson Plans

* Instructor-facing READMEs (such as this!)

### Beginning of Class

This section contains steps that instructors and TAs should take at the beginning of every class. 

#### Instructors

* Start the recording.

* Open the day's `LessonPlan.md` file on a second display for yourself.

* Open the entire day's `Activities` folder in your editor to easily move through the examples.

* Have students do a `git pull` of the class repo to have the class activities ready on their machine.

**Note**: Students also receive the `Unsolved` activities for each module in Canvas.

#### TAs

* Remind students to mark their attendance in BCS. Edit attendance as needed.

* Open the day's `LessonPlan.md` file and follow along.

* Open the time tracker to help the instructor keep an eye on time.

### During Class

This section contains tasks tips and tasks for instructors and TAs to follow during class. 

#### Instructors and TAs

* All instructional team members should be circulating the room and helping out during activities!

#### TAs

* Monitor the time tracker file and collaborate with the instructor to make adjustments to the class schedule if needed.   

* Push `Solved` activities to the class repo after reviewing the solutions together. Students can `git pull`.

### End of Week (or Module)

* Make the career services announcement (found in the Module Overview).

* Push solutions to any Challenge assignments that were due.

## Why We Teach What We Teach

Instructors and TAs (and students, sometimes) ask why we teach certain technologies or languages in this course. We are constantly assessing what we include in our curriculum. The decision to remove, keep, or add a technology is based on a number of factors, including feedback from industry partners, changes in the web development landscape, and trends in instructor feedback.

There are as many opinions about web development as there are developers. Everything in the curriculum is there for a specific reason. Here are some the most common questions about some of the technologies you'll teach in this course:

### Why do we still introduce `float`?

A large part of our teaching philosophy rests on the belief that we should give our students a thorough understanding of any problem before we teach the solution. Sometimes that means including topics that are outmoded. Flexbox and CSS Grid emerged to solve specific design challenges. So while it's important that we teach students about flexbox (and encourage them to explore CSS Grid on their own), we also believe it's important that students understand the historical context of a `float`.

### Why do we still teach jQuery?

Although jQuery is on the decline as a popular front-end framework while React, Vue, and Angular continue to dominate, it persists in many legacy codebases. Thus it's important that our students begin their careers in web development having some familiarity with it. jQuery is now isolated to a single module&mdash;Module 05: Third-Party APIs. This will make it easier for us to replace it with a different technology as the web development landscape continues to evolve.

### Why do we teach Sequelize?

Object-relational mapping (ORM) is an important concept when working with relational datbases in object-oriented programming. While it's unlikely that students will use Sequelize exclusively in their careers as web developers, it serves as a good first step to introduce them to the concept of the ORM. It's important to emphasize to your students that they're more likely to encounter a different ORM (perhaps even a proprietary one), and that the important skills to retain are learning how an ORM works conceptually and how to dive into a new library or framework's documentation, a frequent task for any developer.

### Why do we teach Handlebars?

Almost every major programming language uses or has its own templating engine. Even applications that don’t use a templating engine use the concepts involved in templating. Students are likely to encounter templating in any development role they take on. Although Handlebars is not the most popular or common templating engine in use, it is an easy way to introduce students to the concepts of a templating engine, especially in the context of the Model-View-Controller (MVC) paradigm.

Template engines are common in Java and Python frameworks, such as Django, Flask, and Thymeleaf, and learning template engines will support students when making the transition to those languages.

It's also important that you emphasize the concepts introduced while using Handlebars so that your students are set up to understand the MVC folder structure as they begin to learn React. Templating engines serve as an important step towards learning React, because the abstractions of a framework are challenging for beginners to understand.

Finally, Handlebars is currently used in only one module and one project. Isolating Handlebars to a single module will make it much easier to replace if we move to a different template engine in the future.

### Why do we teach Heroku? Why don't we teach cloud deployment through AWS instead?

Although industry feedback has shown that having some knowledge of the AWS ecosystem is an important skill to have as a developer, covering an extremely large and varied topic such as AWS in an already limited amount of time would mean that we would have to eliminate some of the foundational technologies and concepts necessary to learn web development. To this end, we now offer asynchronous modules of additional content known as Continuation Courses to all of our boot camp graduates, including a module focusing exclusively on AWS.

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
