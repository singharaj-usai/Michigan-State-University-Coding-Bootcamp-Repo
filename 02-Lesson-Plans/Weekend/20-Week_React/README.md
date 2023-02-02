# Module 20 Instructor Overview: React

## Overview

In this module, you will teach students how to create a React single-page application (SPA) from the ground up. Through this process, students will learn about components, state, props, React styling, and how to test React applications. They will also learn how to use `create-react-app` to scaffold their React apps. You will help them render elements in JSX and write JSX expressions. You will also help them understand more complex topics like React Hooks, fetching data, and creating fully functional React forms.

Review this module's Roadmap in Canvas for detailed information on key topics, learning objectives, and this module's Challenge.

## Instructor/TA Notes

* Be sure to take some time to review the official React documentation, as there have been some important recent changes concerning React import statements. As of React version 17, it's no longer required to import React in order to process JSX. This module, however, does still include the import statements, as this was a very recent change.

* Make sure you're well-versed in React Hooks so that you can explain how they work to students, who might be confused at first about this different approach to building web app UIs.

* The Challenge for this module invites students to create an updated portfolio that demonstrates their newly acquired React skills. Students will be required to deploy their application to GitHub Pages for submission. Be sure to review the [React Docs on deployment](https://create-react-app.dev/docs/deployment/#github-pages) so that you can help students with their Challenge.

* Module 20 uses `create-react-app` for the first activity to create a "practice" React app. This app will be used for the entire module by swapping out only the `/src` directory before each activity.

* Make sure that you have installed `npx` so that you can demonstrate `create-react-app`. To check the installation, run `npx --version` in the command line.

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

* Each activity in Module 20 will rely on this practice app existing inside the `01-Activities` directory. Be sure to copy all activities to the student repo, including the `swap_tool` utility.

* To save time in class, students are expected to copy the `/src` directory from the activity folder to their practice React app. This can be done manually, or with `sswap`, a command line tool that is included in the activities directory. Simply navigate to the [`swap_tool`](../../../../01-Class-Content/20-React/01-Activities/swap_tool/README.md) directory, install the dependencies and run the `sswap` command.

## Career Connection

* Remind students that related career services material can be found in the Weekly Wrap-Up in Canvas.

* For more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/additionalresources).

## Heads-Up

* During the next module, you will build on React foundations, and guide students through application development using three-layer MERN architecture.  You will also introduce students to the GraphQL Playground and Apollo Server. If you are new to the GraphQL and the GraphQL Playground or Apollo Server, please refer to the Apollo Docs on GraphQL Playground and the [Apollo Docs on introduction to Apollo Server](https://www.apollographql.com/docs/apollo-server/).

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version.](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* Apollo Server recently migrated to Apollo Server 3. This major-version release impacts how Apollo Server interacts in an Express environment. Apollo Server 2 is currently used in the activities. For the Challenge, students must **MUST** use the following script `npm install apollo-server-express@2.15.0` to follow the implementation used in class.  Alternately, students can complete the Challenge using the latest version of Apollo Server. Please refer them to the [Apollo Server Docs on Migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/#nodejs) and [Apollo Server Docs on Implementing Apollo Server Express with v3](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express). Note that Apollo Server 3 requires the use of `await server.start()` before calling `server.applyMiddleware`.

## Helpful Links

This section contains links to this module's lesson plans, Challenge, slide decks, algorithms, and resources.

### Lesson Plans

* [20.1 Lesson Plan](01-Day_Intro-React/20.1-LESSON-PLAN.md)

* [20.2 Lesson Plan](02-Day_Props-Lists-State/20.2-LESSON-PLAN.md)

* [20.3 Lesson Plan](03-Day_React-Style-Tests/20.3-LESSON-PLAN.md)

### Challenge

* [Module 20 Challenge](../../../01-Class-Content/20-React/02-Challenge/README.md)

### Slide Decks

* [Module 20: React](https://docs.google.com/presentation/d/1LeJL4oLTOTTmKL_kKRMQBijRic4zTgBuk2bJ3el_Dn8/edit?usp=sharing)

### Algorithms

* [01: Maximum Continuous Sub-Array](./../../../01-Class-Content/20-React/03-Algorithms/01-maximum-continuous-subarray/)

* [02: Merge Meeting Times](./../../../01-Class-Content/20-React/03-Algorithms/02-merge-meeting-times/)

  * 📹 [Let's Code Merge Meeting Times!](https://2u-20.wistia.com/medias/rsyvzd1cxl)

* [03: Int to Roman Numeral](./../../../01-Class-Content/20-React/03-Algorithms/03-int-to-roman/)

### Resources

* [React Docs: Getting Started](https://reactjs.org/docs/getting-started.html)

* [Create React App Docs: Getting Started](https://create-react-app.dev/docs/getting-started/)

* [React Docs on rendering elements](https://reactjs.org/docs/rendering-elements.html)

* [React Docs on components and props](https://reactjs.org/docs/components-and-props.html)

* [React Docs on JSX](https://reactjs.org/docs/introducing-jsx.html)

  * [React Docs on JSX expressions](https://reactjs.org/docs/jsx-in-depth.html)

* [React Docs on state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

* [React Docs on handling events](https://reactjs.org/docs/handling-events.html)

* [React Docs on forms](https://reactjs.org/docs/forms.html)

* [React Docs on Hooks](https://reactjs.org/docs/hooks-intro.html)

  * [React Docs on useState](https://reactjs.org/docs/hooks-state.html)

  * [React Docs on useEffect](https://reactjs.org/docs/hooks-effect.html)

* [React Docs on styling](https://reactjs.org/docs/faq-styling.html)

* [React Docs on conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

* [React Docs on testing](https://reactjs.org/docs/testing.html)

* [React Docs on lists and keys](https://reactjs.org/docs/lists-and-keys.html)

* [Create React App Docs on deployment](https://create-react-app.dev/docs/deployment)

* [GitHub Docs on deploying to GitHub pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
