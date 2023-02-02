# Module 21 Instructor Overview: MERN

## Overview

This week, students will apply their knowledge of MongoDB, Express.js, React.js, and Node.js to develop the tools needed to build a full-stack MERN app.

Students will learn how to use React Router to add dynamic client-side routing to apps, which makes it possible for users to bookmark URLs and use the browser’s forward and back buttons. They'll also learn GraphQL, an open-source data query and manipulation language for APIs that provides declarative data fetching. Finally, students will add authentication to a MERN app by using a JSON Web Token.

Review this module's Roadmap in Canvas for detailed information on key topics, learning objectives, and this module's Challenge.

## Instructor/TA Notes

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to GraphQL and the MERN framework may face.

* The activities in this module will require some familiarity with GraphQL and the Apollo Sandbox tool. If you've never worked with GraphQL or the Apollo Sandbox tool, please refer to the [Apollo Docs on Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox/).

* Apollo Sandbox is an Apollo Studio Explorer tool used for local development and replaces the now-deprecated GraphQL Playground. To use Sandbox, you do not have to register for an Apollo account. Instead, Sandbox can be accessed on the same URL as the GraphQL server. For most activities during this module's class, you will do the following to start Sandbox: start the app using `npm install`, `npm run seed`, and `npm start`. Then, navigate to `localhost:3001/graphql` in the browser to view Sandbox in the browser.

* This module's activities use Apollo Server 3, which include a number of breaking changes from Apollo Server 2. Apollo Server 3 requires `graphql` 15.3.0 or later to run successfully. For more information about migrating to Apollo Server 3, including bumped dependencies and removed integrations, refer to [Apollo Docs on migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/).

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* The `17-Ins_Apollo-Cache` activity uses Apollo Client Developer Tools to visualize the in-memory cache. If you haven't yet, install the [Apollo Client Developer Tools extension for Google Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US). Once installed, open Chrome DevTools and navigate to the `>>` arrow on the toolbar to see additional tools available. Click on `Apollo` to open the interface.

* If you get an `eslint` preflight check error when running the Challenge application, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. The error can also be avoided by running the Challenge from the class repo to avoid conflicting `eslint` installations.

* If you find that students are struggling with the complexity of the module, encourage them to look back on these activities as a resource for Challenge preparation and self-study. You can also reassure them that there is time for review during next week's lessons.

## Career Connection

* Remind students that related career services material can be found in the Weekly Wrap-Up in Canvas.

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

* During the next module, we will build on the full-stack app development skills covered in this module, as well as explore state management and the Context API. We'll also review the key concepts covered in this module to help students prepare for their final projects and solidify their understanding of these more advanced skills.

* The Module 22 Challenge will be an extra credit assignment for students. It is not required for submission, nor will it count towards one of the two assignments that students can skip. Please remind students about this extra credit assignment in Module 22.

## Helpful Links

This section contains links to this module's lesson plans, Challenge, slide deck, algorithms, and resources.

### Lesson Plans

* [21.1 Lesson Plan](./01-Day_GraphQL/21.1-LESSON-PLAN.md)

* [21.2 Lesson Plan](./02-Day_Front-End/21.2-LESSON-PLAN.md)

* [21.3 Lesson Plan](./03-Day_JWT/21.3-LESSON-PLAN.md)

### Challenge

* [Module 21 Challenge](../../../01-Class-Content/21-MERN/02-Challenge)

### Slide Deck

* [Module 21: MERN](https://docs.google.com/presentation/d/15HFGsli3B1UvM8-khsTi7-DjkN1zX8mpLULMn7oGwX4/edit?usp=sharing)

### Algorithms

* [01: Plus One](../../../01-Class-Content/21-MERN/03-Algorithms/01-plus-one)

* [02: One Edit Away](../../../01-Class-Content/21-MERN/03-Algorithms/02-one-edit-away)

* [03: Caesar Cipher](../../../01-Class-Content/21-MERN/03-Algorithms/03-caesar-cipher)

  * 📹 [Let's Code Caesar Cipher!](https://2u-20.wistia.com/medias/bcfetr7mvf)

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

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
