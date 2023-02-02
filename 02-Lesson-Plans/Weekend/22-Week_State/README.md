# Module 22 Instructor Overview: State

## Overview

In this module, you will introduce complex state management techniques and review the key tools needed to build a MERN-stack app with routing and authentication. Students will also be introduced to the Stripe payment platform.

Review this module's Roadmap in Canvas for detailed information on key topics, learning objectives, and this module's Challenge.

## Instructor/TA Notes

* Be sure to prepare and review the activities before class. Try to anticipate any questions that students might have.

* Let students know that this module's **Challenge will be extra credit**. It is not required for submission, nor will it count towards one of the two assignments that students can skip.

* In this week's Challenge, the students will refactor the e-commerce platform used in the [26-Stu_Actions-Reducers](../../../01-Class-Content/22-State/01-Activities/26-Stu_Actions-Reducers/Unsolved) activity so that it uses Redux. Students can access the code in the class repo or [download the activity code](https://static.fullstack-bootcamp.com/fullstack-ground/unit-22/26-Stu_Actions-Reducers.zip).

* Be sure to create a practice React app before class by navigating to `01-Class-Content/22-State-dev/01-Activities` and running `npx create-react-app 00-practice-app`. Remind students to copy the `src` directory into the React practice app. The `README.md` files of these activities will also remind students to do so.

* **Important**: `create-react-app` now automatically uses the latest release of React, version 18. Due to several conflicting packages with React version 18, follow the steps below to ensure that all activities work as intended.

  * Delete the `package-lock.json` file and `node_modules` folder from the `client` directory.

  * Downgrade `react` to 17.0.2 inside of the `package.json` file.

  * Downgrade `react-dom` to 17.0.2 inside of the `package.json` file.

  * Downgrade `@testing-library/react` to ^11.1.0 inside of the `package.json` file.

  * Your `package.json` file should look like the following:

    ```js
    "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "17.0.2",
        "react-dom": "17.0.2",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
    },
    ```

  * Run `npm install` to ensure that your project is now running React version 17.

* If you get an `eslint` preflight check error when setting up the React app, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`.

* Before class, install the [React developer tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi). It will be used in the `O1-Ins_Providers` demo.

* In the state management activities, emphasis is placed on having the students refer to the documentation. Explain that on the job, it is important to be able to use documentation to find information on specific issues and then apply that information to their own code.

* Many of the activities in this module allow students to review the skills needed for their final project as well as full-stack application development. Because the code and activities will be familiar, encourage students to use activity time to explore the code, ask questions, and build on their existing skills. Encourage students who need an additional challenge to explore the Bonus.

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* In the `24-Stu_Stripe` activity, students are introduced to implementing an e-commerce solution in an existing MERN app using Stripe. This activity serves two learning purposes. First, it is important that students practice reverse engineering an unfamiliar codebase since they are likely to encounter similar e-commerce integrations in the workplace. Second, as the goal of the Challenge is to refactor an authentic existing MERN app with a Stripe integration, this activity provides the students the needed exposure to Stripe prior to doing the Challenge. For more information about integrating Stripe, refer to [Stripe docs on getting up and running](https://stripe.com/docs/development/quickstart).

* We'll use the Stripe API to process payments, which includes making front-end and back-end changes. Don't worry, Stripe provides test credentials, so you won't need to use a real credit card to try it out. Refer to the [Stripe docs on testing your integration](https://stripe.com/docs/testing).

## Career Connection

* Remind students that related career services material can be found in the Weekly Wrap-Up in Canvas.

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

In Module 23, students will begin work on their final projects. These projects are student-driven; they will be responsible for forming their own teams, brainstorming app ideas, and developing a full-stack app. Encourage students to start forming groups and brainstorming ideas for their apps, and be prepared to help anyone who is struggling to find a group or project idea.

There are occasional circumstances, such as an illness or a personal emergency, which might force a student to complete a group project on their own. In these circumstances, as the instructor, you will meet with the student and SSM to determine if completing the project independently is the best path forward. If it is, you will share adjusted project requirements and a grading rubric with the student.

## Helpful Links

This section contains links to this module's lesson plans, Challenge, slide decks, algorithms, and resources.

### Lesson Plans

* [22.1 Lesson Plan](./01-Intro-State/22.1-LESSON-PLAN.md)

* [22.2 Lesson Plan](./02-MERN-Review/22.2-LESSON-PLAN.md)

* [23.3 Lesson Plan](./03-MERN-Redux/22.3-LESSON-PLAN.md)

### Challenge

* [Module 22 Challenge](../../../01-Class-Content/22-State/02-Challenge)

  * The Module 22 Challenge will be an extra credit assignment for students. It is not required for submission, nor will it count towards one of the two assignments that students can skip.

### Slide Decks

* [Module 22: State](https://docs.google.com/presentation/d/1-3k49f8V-tRaTefWpSrXlts2wEcBC9lKOE0MQtkl_ig/edit?usp=sharing)

### Algorithms

* [01: Roman Numeral to Int](../../../01-Class-Content/22-State/03-Algorithms/01-roman-to-int)

* [02: Rotation Point](../../../01-Class-Content/22-State/03-Algorithms/02-rotation-point)

  * 📹 [Let's Code Rotation Point!](https://2u-20.wistia.com/medias/92nkaslwg8)

* [03: Simplify Path](../../../01-Class-Content/22-State/03-Algorithms/03-simplify-path)

### Resources

* [Context API documentation](https://reactjs.org/docs/context.html)

* [Redux documentation](https://redux.js.org/)

* [Stripe documentation](https://stripe.com/docs)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
