# Module 21 & 22 Instructor Overview: MERN and State

## Overview

In Module 21, students will apply their knowledge of MongoDB, Express.js, React.js, and Node.js to develop the tools needed to build a full-stack MERN app.

Students will learn how to use React Router to add dynamic client-side routing to apps, which makes it possible for users to bookmark URLs and use the browser’s forward and back buttons. They'll also learn GraphQL, an open-source data query and manipulation language for APIs that provides declarative data fetching. Finally, students will add authentication to a MERN app by using a JSON Web Token.

In Module 22, you will introduce complex state management techniques and review the key tools needed to build a MERN-stack app with routing and authentication. Students will also be introduced to the Stripe payment platform.

Review the Roadmap for each module in Canvas for detailed information on key topics, learning objectives, and the Challenges for these modules.

## Instructor/TA Notes

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to GraphQL and the MERN framework may face.

* The activities in these modules will require some familiarity with GraphQL and the Apollo Sandbox tool. If you've never worked with GraphQL or the Apollo Sandbox tool, please refer to the [Apollo Docs on Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox/).

* Apollo Sandbox is an Apollo Studio Explorer tool used for local development and replaces the now-deprecated GraphQL Playground. To use Sandbox, you do not have to register for an Apollo account. Instead, Sandbox can be accessed on the same URL as the GraphQL server. For most of the activities, you will do the following to start Sandbox: start the app using `npm install`, `npm run seed`, and `npm start`. Then, navigate to `localhost:3001/graphql` in the browser to view Sandbox in the browser.

* These activities use Apollo Server 3, which include a number of breaking changes from Apollo Server 2. Apollo Server 3 requires `graphql` 15.3.0 or later to run successfully. For more information about migrating to Apollo Server 3, including bumped dependencies and removed integrations, refer to [Apollo Docs on migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/).

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* The `17-Ins_Apollo-Cache` activity in Module 21 uses Apollo Client Developer Tools to visualize the in-memory cache. If you haven't yet, install the [Apollo Client Developer Tools extension for Google Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US). Once installed, open Chrome DevTools and navigate to the `>>` arrow on the toolbar to see additional tools available. Click on `Apollo` to open the interface.

* If you get an `eslint` preflight check error when running the Module 21 Challenge application, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. The error can also be avoided by running the Challenge from the class repo to avoid conflicting `eslint` installations.

* Let students know that the **Module 22 Challenge will be extra credit**. It is not required for submission, nor will it count towards one of the two assignments that students can skip.

* For the React activities in Module 22, be sure to create a practice React app before class by navigating to `01-Class-Content/22-State/01-Activities` and running `npx create-react-app 00-practice-app`.

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

* Before class, install the [React developer tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi). It will be used in the Module 22 `O1-Ins_Providers` demo.

* In the state management activities in Module 22, emphasis is placed on having the students refer to the documentation. Explain that on the job, it is important to be able to use documentation to find information on specific issues and then apply that information to their own code.

* Many of the activities in Module 22 allow students to review the skills needed for their final project as well as full-stack application development. Because the code and activities will be familiar, encourage students to use activity time to explore the code, ask questions, and build on their existing skills. Encourage students who need an additional challenge to explore the Bonus.

* In the `24-Stu_Stripe` activity of Module 22, students are introduced to implementing an e-commerce solution in an existing MERN app using Stripe. This activity serves two learning purposes. First, it is important that students practice reverse engineering an unfamiliar codebase since they are likely to encounter similar e-commerce integrations in the workplace. Second, as the goal of the Module 22 Challenge is to refactor an authentic existing MERN app with a Stripe integration, this activity provides the students the needed exposure to Stripe prior to doing the Challenge. For more information about integrating Stripe, refer to [Stripe docs on getting up and running](https://stripe.com/docs/development/quickstart).

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

* [11.1 Lesson Plan](./01-Day/01-Day-LessonPlan.md)

* [11.2 Lesson Plan](./02-Day/02-Day-LessonPlan.md)

* [11.3 Lesson Plan](./03-Day/03-Day-LessonPlan.md)

* [11.4 Lesson Plan](./04-Day/04-Day-LessonPlan.md)

* [11.5 Lesson Plan](./05-Day/05-Day-LessonPlan.md)

### Challenge

* [Module 21 Challenge](../../../01-Class-Content/21-MERN/02-Challenge)

* [Module 22 Challenge](../../../01-Class-Content/22-State/02-Challenge)

  * The Module 22 Challenge will be an extra credit assignment for students. It is not required for submission, nor will it count towards one of the two assignments that students can skip.

### Slide Decks

* [Module 21: MERN](https://docs.google.com/presentation/d/15HFGsli3B1UvM8-khsTi7-DjkN1zX8mpLULMn7oGwX4/edit?usp=sharing)

* [Module 22: State](https://docs.google.com/presentation/d/1-3k49f8V-tRaTefWpSrXlts2wEcBC9lKOE0MQtkl_ig/edit?usp=sharing)

### Algorithms

Module 21:

* [01: Plus One](../../../01-Class-Content/21-MERN/03-Algorithms/01-plus-one)

* [02: One Edit Away](../../../01-Class-Content/21-MERN/03-Algorithms/02-one-edit-away)

* [03: Caesar Cipher](../../../01-Class-Content/21-MERN/03-Algorithms/03-caesar-cipher)

  * 📹 [Let's Code Caesar Cipher!](https://2u-20.wistia.com/medias/bcfetr7mvf)

Module 22:

* [01: Roman Numeral to Int](../../../01-Class-Content/22-State/03-Algorithms/01-roman-to-int)

* [02: Rotation Point](../../../01-Class-Content/22-State/03-Algorithms/02-rotation-point)

  * 📹 [Let's Code Rotation Point!](https://2u-20.wistia.com/medias/92nkaslwg8)

* [03: Simplify Path](../../../01-Class-Content/22-State/03-Algorithms/03-simplify-path)

### Resources

* [Apollo Docs on Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox/)

* [Apollo Docs on migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/)

* [GraphQL documentation on queries and mutations](https://graphql.org/learn/queries/)

* [Apollo Docs on writing query resolvers](https://www.apollographql.com/docs/tutorial/resolvers/)

* [GraphQL documentation on passing arguments](https://graphql.org/graphql-js/passing-arguments/)

* [Apollo Docs on mutations](https://www.apollographql.com/docs/react/data/mutations/)

* [Apollo Docs on updating data with mutations](https://www.apollographql.com/docs/tutorial/mutations/)

* [Apollo Docs on fetching data with queries](https://www.apollographql.com/docs/tutorial/queries/)

* [Apollo Client Developer Tools extension for Google Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US)

* [React Router quick start guide](https://reactrouter.com/docs/en/v6/getting-started/overview)

* [Introduction to JSON Web Tokens](https://jwt.io/introduction)

* [Apollo Docs on authentication and authorization](https://www.apollographql.com/docs/apollo-server/security/authentication/)

* [GitHub Docs on GitHub Actions](https://docs.github.com/en/actions)

* [Deploy with Heroku and MongoDB Atlas Blog Post](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas)

* [Context API documentation](https://reactjs.org/docs/context.html)

* [Redux documentation](https://redux.js.org/)

* [Stripe documentation](https://stripe.com/docs)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
