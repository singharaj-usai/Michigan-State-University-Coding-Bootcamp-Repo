# 11.3 Full-Time Lesson Plan: Introduction to State

## Overview

In this class, students will be introduced to complex state management within their apps. They will learn about key state management concepts like providers, consumers, reducers, and actions. Students will also work in groups to refactor a fully functioning MERN-stack app to use a GraphQL API built with Apollo Server and Apollo Client.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` through `08-Stu_Actions`.

* Be sure to create a practice React app before class, by navigating to `01-Class-Content/22-State/01-Activities` and running the following command:

  ```sh
  npx create-react-app 00-practice-app
  ```

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

* Once your practice React app has been created, you might encounter some issues regarding conflicting versions of `eslint`. If this is the case, also run the following:

  ```sh
  echo "SKIP_PREFLIGHT_CHECK=true" > .env
  ```

* Remind students that they can use the `swap_tool` to easily swap `src` into the practice app. It is found in the Activities folder.  

* Install the [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for your browser. It is used in `01-Ins_Providers`.

* Inform students that not every React application calls for the use of complex state management. Explain that it might be beneficial only when data needs to be accessible by many components at different nesting levels.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Explain and use providers inside a React component.

* Explain the concept of `Consumer` and accessing React `Context`.

* Explain and use actions with a Reducer function.

## Slide Deck

* [Module 22 Slide Deck](https://docs.google.com/presentation/d/1-3k49f8V-tRaTefWpSrXlts2wEcBC9lKOE0MQtkl_ig/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 10:00AM| 1   | Instructor Demo: Mini Project       | 0:05     |
| 10:05AM| 2   | Student Do: Mini Project            | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini Project     | 0:10     |
| 11:15AM| 4   | Introduce Challenge                 | 0:05     |
| 11:20AM| 5   | FLEX                                | 0:30     |
| 11:50PM| 6   | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:00PM| 7   | BREAK                               | 0:30     |
| 12:30PM| 8   | Instructor Demo: Providers          | 0:05     |
| 12:35PM| 9   | Student Do: Providers               | 0:15     |
| 12:50PM| 10  | Instructor Review: Providers        | 0:10     |
| 1:00PM | 11  | Instructor Demo: Consumers          | 0:05     |
| 1:05PM | 12  | Student Do: Consumers               | 0:15     |
| 1:20PM | 13  | Instructor Review: Consumers        | 0:10     |
| 1:30PM | 14  | Instructor Demo: Reducers           | 0:05     |
| 1:35PM | 15  | Student Do: Reducers                | 0:15     |
| 1:50PM | 16  | Instructor Review: Reducers         | 0:10     |
| 2:00PM | 17  | Instructor Demo: Actions            | 0:05     |
| 2:05PM | 18  | Student Do: Actions                 | 0:15     |
| 2:20PM | 19  | Instructor Review: Actions          | 0:10     |
| 2:30PM | 20  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini-Project (5 min)

* Welcome students to class.

* Navigate to `28-Stu_Mini-Project/Solved` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `localhost:3000/` in your browser and demonstrate the following:

  * 🔑 As developers, we are often asked to take an existing, functional app and update it to incorporate a new technology. Our task is to convert the app from using an existing RESTful API to an app that uses a GraphQL API built with Apollo Server and Apollo Client.

  * 🔑 When we open the homepage `localhost:3000/` route, we see a list of technologies.

  * 🔑 When we navigate to `localhost:3000/matchup`, we are presented with a form for the user to input matchup choices.

  * 🔑 When we click on the `Create Matchups` pages, we navigate to a new page at `localhost:3000/matchup/<id>`. That page shows only the information for our new matchup.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We use Apollo Client to set up our React.js front end to send requests and Apollo Server on the back end to create a GraphQL API.

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Module 21 Mini-Project: Tech Matchup App

  In this mini-project, you are given a fully functioning MERN-stack application that allows users to create a matchup between two technologies and vote on their favorite technology. The application currently uses a RESTful API. You will need to refactor it to use a GraphQL API built with Apollo Server and Apollo Client. You will also use React Router's `<Route>` component in the routes. During your research, you will likely come across examples and documentation on React Router's `<Switch>` component. As of React Router version 6, the `<Switch>` component no longer exists and will cause your application to break.

  ## User Stories

  Work with your group to resolve the following issues:

  * As a user, I want to see a list of matchups.

  * As a user, I want to be able to create a matchup between two technologies.

  * As a user, I want to be able to vote for one of the two technologies in the matchup.

  * As a user, I want to see the current number of votes for each technology in the matchup.

  * As a user, if I reach a page that doesn't exist, I want to see a 404 page.

  ## Acceptance Criteria

  The mini-project is complete when the following criteria are met:

  * The `/` homepage route renders a list of technologies.

  * The `/matchup` route renders a form to choose two technologies to create a matchup.

  * The `/matchup/:id` route renders a matchup to vote on.

  * An Apollo Server is set up to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

  * Apollo Client is set up so that requests can communicate with an Apollo Server.

  * A 404 page `NotFound` is rendered if the user tries to access a page that doesn't exist.

  ---

  ## 💡 Hints

  * After implementing GraphQL on the server, what tool can you use to test the queries and mutations?

  * How can we use `<Route>` to render the `NotFound` page?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Incorporate user authentication so that only logged-in users can create and vote on matchups.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Mini-Project (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* If students ran into examples or documentation on React Router's `<Switch>` component, explain to them that it was previously used in place of the current `<Routes>` component. When we previously used `<Switch>`, the first -- and only the first -- match of a route would be rendered. However, with React Router v6, the `<Routes>` component was introduced and behaves much like `<Switch>` but looks for routes that best match instead of traversing routes in order.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `const server = new ApolloServer()`

  * ✔️ `typeDefs`

  * ✔️ `resolvers`

  * ✔️ `ApolloClient`

  * ✔️ `ApolloProvider`

  * ✔️ `useQuery()`

  * ✔️ `useMutation()`

  * ✔️ `<Route>`

* Open `28-Stu_Mini-Project/Main/server/server.js` in your IDE and explain the following:

  * We add the `ApolloServer` class to the `server.js` file. We also import the `schemas` directory which holds our `typeDef` and `resolver` files:

    ```js
    const { ApolloServer } = require('apollo-server-express');
    const { typeDefs, resolvers } = require('./schemas');
    ```

  * 🔑 Next, we create a new instance of the `ApolloServer` class, which gives us access to the core functionality needed to implement our GraphQL API. We also pass in our `typeDefs` and `resolvers`, which are used to define the shape of our data and the functionality needed to retrieve it:

    ```js
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    ```

* Open `28-Stu_Mini-Project/Main/server/schemas/typeDefs.js` in your IDE and explain the following:

  * To define our data, we import `gql` from `apollo-server-express` and create a variable called `typeDefs`:

    ```js
    const { gql } = require('apollo-server-express');
    const typeDefs = gql
    ```

  * 🔑 Then, we add our type definitions. An object type is used to define an object that the client may need to interact with, such as a `Matchup`:

    ```js
    type Matchup {
      _id: ID!
      tech1: String!
      tech2: String!
      tech1_votes: Int
      tech2_votes: Int
    }
    ```

  * 🔑 We use a Query type to define the entry point for our data. The `Tech` query provides an entry point for an array of all the Tech objects. The `matchup` entry point uses an argument to point to a single matchup object:

    ```js
    type Query {
      tech: [Tech]
      matchups(_id: String): [Matchup]
    }
    ```

  * 🔑 We use a mutation type to provide an entry point to modify our data. The `createMatchup` mutation creates a new `Matchup` object. The `createVote` mutation modifies the vote count on an existing `Matchup` object:

    ```js
    type Mutation {
      createMatchup(tech1: String!, tech2: String!): Matchup
      createVote(_id: String!, techNum: Int!): Matchup
    }
    ```

* Open `28-Stu_Mini-Project/Main/server/schemas/resolvers.js` in your IDE and explain the following:

  * To write the functions needed to populate our data, we first import our existing models:

     ```js
     const { Tech, Matchup } = require('../models');
     ```

  * 🔑 Then, we use the models to read and write data from our MongoDB database. For each query or mutation to work, we must write an associated function:

    ```js
    tech: async () => {
      return Tech.find({});
    }
    ```

* Open `28-Stu_Mini-Project/Main/client/src/App.js` in your IDE and explain the following:

  * Now that we have the GraphQL API set up on our back end, we can use `Apollo Client` to provide the front-end functionality needed to send requests and handle returned data.

  * 🔑 We start by importing the `ApolloClient` and `InMemoryCache` classes from `apollo/client` as well as the `ApolloProvider` component:

    ```js
    import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
    ```

  * 🔑 This will create a new instance of the `ApolloClient` class. This will give us the key functionality that we need to interact with our GraphQL API:

    ```js
    const client = new ApolloClient({
      uri: '/graphql',
      cache: new InMemoryCache(),
      );
    ```

  * 🔑 We then wrap the `ApolloProvider` component around our app so that we can access the functionality we need in our components:

    ```js
    <ApolloProvider client={client}>
    ...
    </ApolloProvider>
    ```

* Open `28-Stu_Mini-Project/Main/client/src/utils/queries.js` in your IDE and explain the following:

  * 🔑 We write a query in the GraphQL query language. To work with our hooks, we then wrap our query with a `gql` function and export it:

    ```js
    export const QUERY_TECH = gql`
      query tech {
      tech {
        _id
        name
      }
    }
    `;
    ```

* Open `28-Stu_Mini-Project/Main/client/src/utils/mutations.js` in your IDE and explain the following:

  * We follow the same process to write and export our mutations, making sure our entry point and fields match our schema exactly and that a variable is declared to hold data that we will need to pass back to our mutation:

    ```js
    export const CREATE_MATCHUP = gql`
      mutation createMatchup($tech1: String!, $tech2: String!) {
      createMatchup(tech1: $tech1, tech2: $tech2) {
        _id
        tech1
        tech2
      }
    }
    `;
    ```

* Open `28-Stu_Mini-Project/Main/client/src/pages/Matchup.js` in your IDE and explain the following:

  * 🔑 In the component where we want the query and mutation to execute, we import the query and mutation as well as the `useQuery()` and `useMutation` hooks:

    ```js
    import { useMutation, useQuery } from '@apollo/client';
    import { QUERY_TECH } from '../utils/queries';
    import { CREATE_MATCHUP } from '../utils/mutations';
    ```

  * 🔑 We apply the `useQuery()` hook to the query. This will execute the query when the page renders, and return a JSON object that can be used to populate the page:

    ```js
    const { loading, data } = useQuery(QUERY_TECH);
    ```

  * 🔑 When we apply the `useMutation()` hook to the imported mutation, it does not execute right away. Instead, it returns a mutation function that we can apply in our code:

    ```js
    const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);
    ```

  * 🔑 We apply the `createMatchup` mutation function inside the form submit handler to fire when the button is clicked and the form is submitted. When the mutation is executed, a JSON object is returned:

    ```js
    const { data } = await createMatchup({
        variables: { ...formData },
      });
    ```

* Open `28-Stu_Mini-Project/Main/client/src/App.js` in your IDE and explain the following:

  * 🔑 Remember to use a `<Routes>` component to wrap all of our routes. This is how to nest our routes properly:

    ```js
    <Routes>
      <Route
        path="/">
        element={<Home />}
      />
      <Route
        path="/matchup">
        element={<Matchup />}
      />
      <Route
        path="/matchup/:id">
        element={<Vote />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use hooks to retrieve and modify data from our GraphQL API?

  * 🙋 We use the `useQuery()` and `useMutation()` hooks to send requests to our GraphQL API and handle the returned data. The data is returned in a JSON object, which can then be used to display information on our page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on Apollo Client](https://www.apollographql.com/docs/react/why-apollo/), the [Apollo Docs on Apollo Server](https://www.apollographql.com/docs/apollo-server/), and the [React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/overview) and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main` in your command line and run `npm install` and `npm run develop`.

* **Note** If you get an `eslint` preflight check error when running the Challenge application, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. You can also avoid the error by running the Challenge from the class repo, to avoid conflicting `eslint` installations.

* Open `localhost:3000` in your browser and demonstrate the following:

  * For this week's Challenge, we are taking an existing book search engine that was built using a RESTful API and refactor it to use a GraphQL API.

  * When the app loads, we are presented with an option to "Search for Books" as well as an option to "SignUp/Login".

  * When we enter a word and click on the search button, a list of related books is returned, including the book’s title, author, description, image, and a link to that book on the Google Books site.

  * If we are logged in when we execute a search, we are also presented with an option to save the book to our account.

  * This app is a great way to practice the skills to build a secure, data-driven site that provides a personalized account for each user.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning to implement a GraphQL API in a full-stack MERN app.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 We will use `Apollo Server` to set up our back end and `Apollo Client` to set up our front end to send requests. We will also write queries and mutations using the GraphQL query language, and use JWT to provide user authentication.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Most modern apps require developers to handle user input and store data. Increasingly, apps are also personalized, with each user having access to their own data stored in accounts. This Challenge is an opportunity to practice the fundamental skills of implementing a GraphQL API in a full-stack MERN app and using authentication to personalize the experience for each user.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [Module 22 slide deck](https://docs.google.com/presentation/d/1-3k49f8V-tRaTefWpSrXlts2wEcBC9lKOE0MQtkl_ig/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **State Management in React**

    * This module will be an introduction to state management using React and Redux. In today's class, we will cover providers, consumers, reducers, and actions.

  * **Pure vs. Impure Functions**

    * We need to understand the difference between the two because this distinction relates to the way state is managed by React and Redux.

  * **Let’s Talk About Pure Functions**

    * Pure functions keep data passed to the function untouched by the function itself.

    * **Pure functions:**

      * Are straightforward with singular intention.

      * Yield the same result when passed the same arguments -- every time.

      * Store modified data in new variables.

    * **Impure functions:**

      * Include side effects like database and network calls.

      * Often modify the values that are passed in.

  * **Impure and Pure Examples**

    * Pure function -- Regardless of what number we pass in, we will get a predictable result every time.

    * Impure function -- The data that gets passed to impure functions can be mutated. Impure functions might include calls to a database or API, possibly returning something unexpected.

  * **Creating Pure Functions**

    * Creating pure functions is an effective technique to apply to all of your JavaScript, but it is especially useful when creating React components.

  * **React Hooks and Context API**

    * React manages state through a combination of Hooks and the Context API.

    * React Context enables us to share data globally and follows a very similar design pattern to Redux, a similar but separate library.

    * A good use for the Context API would be making a user’s account information available to all subscribing components.

  * **Redux**

    * Redux is another library that helps us manage the state of complex applications.

    * Redux requires a lot of boilerplate code, but its utility increases exponentially with an application’s complexity.

    * Instead of learning about the Redux library, we will focus on the concepts and design patterns that Redux uses.

  * **The React Parts**

    * Today we will cover three core React state components. Some of these will overlap with Redux:

      * **Providers** allow child components to subscribe to context changes.

      * **Consumers** allow for consumption of the data made available by the provider.

      * **Reducers** take the current state and the desired action and return a new copy of the state object.

  * **The Redux Parts**

    * We will also cover three core Redux concepts:

      * **Actions** are declarative objects that define what the store should do to the state.

      * **Reducers** handle all actions by taking in the previous state and returning a new state object.

      * **Store** grants the entire application access to the reducer function and the global state.

  * **The Principles of Redux**

    * Redux comprises three core principles.

  * **Principle 1: State Tree**

    * Every stateful aspect of your application can be represented by a single JavaScript object, known as the **state tree**.

  * **Principle 2: Read-Only**

    * The state tree is **read-only** -- meaning that to change the state tree, you need to dispatch an action.

    * The action describes the change that the state will undergo, in a declarative manner.

  * **Principle 3: Pure Functions**

    * Try to make your reducers pure functions. It is considered bad practice to use side effects inside reducer functions.

  * **Mini-Project**

    * For this module's mini-project, you will build a digital garage!

* Remind students that the activities today will use the the `00-practice-app` React application! 

* Demonstrate copying the the `src` directory from `28-Stu_Mini-Project/Main` and paste it into `00-practice-app`.

* Navigate to `00-practice-app` in your command line and run `npm install` and `npm start`.

* Open the app in your browser to demonstrate the following:

  * In this assignment, we will build a digital garage, replacing React Hooks with Redux.

  * This will be a fun way to implement Redux into an application and provide global state to the components.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to implement Redux into an existing application and how to manage complex state.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This project expands on the React Hooks concepts that we have already learned. Using Redux, we will no longer be restricted to declaring state on a per-component basis.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Complex state management is a valuable skill to employers because many large-scale web applications use some state management framework. If you encounter this concept in job interviews or other parts of the application process, you will be prepared to address it!

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: Providers (5 min)

* Be sure to have already created the `00-practice-app` React application! Copy the `src` directory from `01-Ins_Providers` and paste it into `00-practice-app`.

* Navigate to `00-practice-app` in your command line and run `npm install` and `npm start`.

* Open `localhost:3000` in your browser to demonstrate the following:

  * When we run this application, we see in the browser that the user's account information has been made available by the provider.

  * 🔑 Using the [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), click on components and then click on `Context.Provider`. Here we can see a preview of what data is available to us.

    ```json
    {
      "value": {
        "currentUser": {
          "name": "John",
          "role": "Admin",
          "id": 142323
        }
      },
      "children": "<UserComponent />"
    }
    ```

  * This information is visible even though we didn't pass it as a prop directly to the `<UserComponent>`.

* Open `01-Ins_Providers/utils/UserContext.js` in your browser to demonstrate the following:

  * This is possible because of `React.createContext()`, which returns an object that contains two components, a `Provider` and a `Consumer`. Here we create a new context called `UserContext` by assigning it a value of `React.createContext()`:

    ```js
    export const UserContext = React.createContext();
    ```

  * To use the `Provider`, we return the context as a component and access the `Provider` property of that object. The syntax looks odd, but it is no different than accessing an object property in JavaScript:

    ```jsx
    <UserContext.Provider />
    ```

  * The `UserContext.Provider` component accepts a `value` property. This will be the data that we want to make available to any child component of the `Provider`. In this case, the value is the `currentUser`:

    ```jsx
    <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
    ```

* Navigate to the `App` component and note the following:

  * The `UserComponent` can use the data supplied by the `Provider` because it is wrapped inside the `Provider` itself:

    ```js
    import React from 'react';
    import UserProvider from './utils/UserContext';
    import UserComponent from './components/UserComponent';

    export default function App() {
      return (
        <div>
          <UserProvider>
            <UserComponent />
          </UserProvider>
        </div>
      );
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which two components are returned from `React.createContext()`?

  * 🙋 The `Provider` and `Consumer` components.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Providers/README.md`.

### 9. Student Do: Providers (15 min)

* Direct students to the activity instructions found in `02-Stu_Providers/README.md`.

* Remind students to copy the `Unsolved/src` directory into their practice React app.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Global State with React Context API

  Work with a partner to implement the following user story:

  * As a developer, I want to consume data/values from a single, global source across my entire React application.

  ## Acceptance Criteria

  * It's done when a global state object has been defined with the following properties: an array of students with `name` and `major` properties.

  * It's done when the provider is made available to child components.

  * It's done when the associated test suite passes with zero failures when `npm run test` is run.

  ---

  ## 💡 Hints

  When defining global state, which properties should be present? Should we care what type they are initialized with?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Can an app have multiple providers? If so, are they allowed to be nested?

  Use [Google](https://google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Providers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with providers as a concept? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `React.CreateContext()`

  * ✔️ Providers

  * ✔️ `npm run test`

* Open `02-Stu_Providers/Solved/src/utils/StudentContext.js` in your IDE and explain the following:

  * To create a global state object for this application, we have to first import `createContext` along with `useContext`:

    ```js
    import React, { createContext, useContext } from 'react';
    ```

  * 🔑 We begin by creating a context for students called `StudentContext`:

    ```js
    const StudentContext = createContext();
    ```

  * 🔑 `useContext` is a Hook that allows us to create custom methods that will make the context available inside other components. It accepts an argument of a context object. Here we pass in `StudentContext`:

    ```js
    export const useStudentContext = () => useContext(StudentContext);
    ```

  * We can see that `StudentProvider` is a function that accepts props and will return the `Provider` component. It also contains the initial state object.

  * It is important to note that we receive `children` as a property inside the `props` object. We are using destructuring assignment to assign it to the variable `children`:

    ```js
    export const StudentProvider = ({ children }) => { };
    ```

  * The provider accepts an initial state object that we will pass to it. Here we add the two students to the array:

    ```js
    const initialState = {
    students: [
      {
        id: 1,
        name: 'Sayid',
        major: 'Computer Science',
      },
      {
        id: 2,
        name: 'Sun-Hwa',
        major: 'Data Science',
      },
    ],
    ```

  * As mentioned previously, we want to return the provider from the `StudentContext()` function. To do that, we pass it a value attribute of the `initialState`.

  * We also render the children by placing `children` in curly braces inside the `Provider` component:

    ```jsx
    return (
      <StudentContext.Provider value={initialState}>
        {children}
      </StudentContext.Provider>
    );
    ```

* Navigate to the `App` component and note the following:

  * Inside the `App` component, we can see that `StudentList` is wrapped inside `StudentProvider`. Thus, we should be able to use the initial state object that was passed as a value:

    ```js
    return (
      <div>
        <StudentProvider>
          <StudentList />
        </StudentProvider>
      </div>
    );
    ```

* Navigate to the `/components/StudentList` component and explain the following:

  * First, inside the `StudentList` component, we import the custom `useStudentContext` Hook. This will give us access to the `students` array:

    ```js
    import { useStudentContext } from '../utils/StudentContext';

    export default function StudentList() {
      const { students } = useStudentContext();
    }
    ```

  * Now that we have imported the custom Hook and have access to the `students` array, we can finally use `students` in the component. Here we are mapping over each student and returning a new array that contains a `li` element for each one:

    ```js
    return (
      <>
        <span>Looks good here, make sure to run the tests!</span>
        <ul>
          {students.map((student) => (
            <li key={student.name}>
              {student.name} : {student.major}
            </li>
          ))}
        </ul>
      </>
    );
    ```

* Make sure you have copied the `src` directory from `01-Ins_Providers` and pasted it into `00-practice-app`.

* Navigate to `00-practice-app` in your command line and run `npm install` and `npm run test`.

  * We run `npm run test` from the command line to check that we wrote everything correctly and the unit tests are passing:

    ```bash
    PASS  src/__tests__/app.test.js
      ✓ StudentList shows value from provider (28 ms)

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        2.303 s
    Ran all test suites.
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the purpose of the `Provider` component?

  * 🙋 The `Provider` component allows child components to subscribe to changes in the given context.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React documentation on Context.Provider](https://reactjs.org/docs/context.html#contextprovider), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Consumers (5 min)

* Copy the `src` directory from `03-Ins_Providers` and paste it into `00-practice-app`.

* Navigate to `00-practice-app` in your command line and run `npm install` and `npm start`.

* Open `localhost:3000` in your browser to demonstrate the following:

  * When we run the React app, we encounter a page that displays a theme and a button to toggle it.

  * A message indicates the current value of `darkTheme`, a variable that is declared in the `ThemeContext`.

  * Toggling the theme changes the value of `darkTheme` and applies a different style to the `<div>` on the screen.

* Open `src/utils/ThemeContext.js` in your IDE and note the following:

  * 🔑 To consume context, we import the `useContext` Hook:

    ```js
    import React, { useState, useContext } from 'react';
    ```

  * `useContext` accepts an argument of a context and returns the current value of that context. Notice that we have created a custom Hook called `useTheme` that gets exported:

    ```js
    export const ThemeContext = React.createContext();
    export const useTheme = () => useContext(ThemeContext);
    ```

* Open `src/components/ThemeComponent.js` and note the following:

  * To consume the data in `ThemeContext`, we import `useTheme` inside `ThemeComponent`.

  * The two variables that were passed to the provider are assigned using destructuring assignment. Now we can consume `darkTheme` and `toggleTheme` inside the component:

    ```js
    const { darkTheme, toggleTheme } = useTheme();
    ```

  * You will find that this is a common pattern for consuming context inside a React component.

  * Alternatively, we can consume the value inside a context by accessing the `<ThemeContext.Consumer>` component -- but many developers consider the `useContext` Hook more elegant.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What argument does `useContext` accept?

  * 🙋 `useContext` accepts a context object and returns the value for that context.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Consumers/README.md`.

### 12. Student Do: Consumers (15 min)

* Direct students to the activity instructions found in `04-Stu_Consumers/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Access and Update Global State Using React Context Hooks

  Work with a partner to implement the following user story:

  * As a developer, I want to have access to a global state object to avoid passing props down through multiple child components.

  ## Acceptance Criteria

  * It's done when the `studentList` component pulls the global state variables `students` and `majors`.

  * It's done when the `studentList` components add and remove buttons to update the global state object.

  * It's done when changes in global state are reflected in necessary components.

  * It's done when the components render properly in the browser.

  ---

  ## 💡 Hints

  What argument does `useContext()` accept?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * When might you prefer to use the Context API as opposed to prop drilling?

  Use [Google](https://google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Consumers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with consumers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `useContext` Hook

  * ✔️ Global state

  * ✔️ Prop drilling

* Open `04-Stu_Consumers/Unsolved/src/utils/StudentContext.js` in your IDE and explain the following:

  * In this activity we accessed global state variables `student` and `majors` inside the `StudentList` component. To do that, we needed a custom Hook that would grant us access to those values.

  * The `StudentContext.js` file contains the custom Hook that gets exported:

    ```js
    export const useStudentContext = () => useContext(StudentContext);
    ```

  * `StudentContext` gets passed a value of an object that contains not only the `students` array, but also the various methods to update students:

    ```js
    return (
      <StudentContext.Provider
        value={{ students, addStudent, removeStudent, majors }}
      >
        {children}
      </StudentContext.Provider>
    ```

* Open `/src/components/StudentList` and note the following:

  * At the top of the `StudentList` component, we import the custom `useStudentContext` to get the consume values from the context.

  * We use destructuring assignment to give the `students` array and methods to their own variable names that can be used inside the `StudentList` component:

    ```js
    import React, { useState } from 'react';
    import { useStudentContext } from '../utils/StudentContext';

    export default function StudentList() {
      const { students, addStudent, removeStudent, majors } = useStudentContext();
      ...
    }
    ```

  * Using the methods that we can now access, the next step is to add the `onClick` event to the button for removing a student:

    ```jsx
    {students.map((student) => (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.major}</td>
        <td>
          <button
            type="button"
            onClick={() => removeStudent(student.id)}
          >
            <span role="img" aria-label="close">
              ✖️
            </span>
          </button>
        </td>
      </tr>
    ))}
    ```

  * To properly display a list of available majors on the page, we map over each major and return an `option` element for each one.

  * As with all JavaScript code inside JSX, we wrap all of it inside curly braces:

    ```js
    {majors.map((major) => (
      <option key={major} value={major}>
        {major}
      </option>
    ))}
    ```

  * Next, we make the Add Student button work by adding an `onClick` that would invoke the `addStudent()` method:

    ```js
    <button
      type="button"
      onClick={() => {
        addStudent({ name: newStudentName, major: newStudentMajor });
        setNewStudentName('');
        setNewStudentMajor('');
      }}
    >
      Add Student
    </button>
    ```

  * In the return method for `StudentList`, we use the `students` array itself to conditionally render either a student list or a message that no students were found.

  * Because we are using the `students` array provided to us by the `useContext` Hook, we can reference it in the component:

    ```js
    return (
      <div>
        {students ? (
          <>
            <section className="student-list">
            ...
            </section>
          </>
        ) : (
          <span>Hmm... seems that there are no students here!</span>
        )}
      </div>
    );
    ```

* Run `npm start` in your command-line window to demonstrate the finished application's functionality in the browser.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the two different ways that we can consume context?

  * 🙋 We can use the `useContext` Hook inside a custom Hook and make that available to other components, or we can use the `<MyContext.Consumer>` component to reference variables directly.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React documentation on useContext](https://reactjs.org/docs/hooks-reference.html#usecontext), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Reducers (5 min)

* Copy the `src` directory from `05-Ins_Reducers/` and paste it into `00-practice-app`.

* Navigate to `00-practice-app` in your command line and run `npm install` and `npm start`.

* Open `localhost:3000` in your browser to demonstrate the following:

  * When we load the React app, we are presented with a page that shows a few cars.

  * As you might have noticed, there isn't much functionality yet for this application, because the reducer hasn't been implemented yet.

* End the running process for the React app, and then run the tests using `npm run test`.

  * This demo includes tests for the reducer function so that we can ensure it works before implementing it into the app.

  * 🔑 A **reducer** is a function that accepts state and an action and returns a new state object. Reducers also keep all of the actions that can be performed on the state object in one place.

* Open `05-Ins_Reducers/src/utils/reducers.js` in your IDE and explain the following:

  * The `reducers.js` file consolidates all actions into one function by using a `switch` statement.

  * The `switch` statement will check the type of action that we passed and perform some work based on that action:

    ```js
    export const reducer = (state, action) => {
      switch (action.type) {
        ...
      }
    };
    ```

  * The first case for adding a car will create a variable, `newCar`, that will contain the `id` and a copy of the `action.payload`.

  * Then it returns a copy of state with the updated `cars` array:

    ```js
    switch (action.type) {
      case 'ADD_CAR': {
        const newID = randomNum();
        const newCar = { ...action.payload, id: newID };

        return {
          ...state,
          cars: [...state.cars, newCar],
        };
      }
    ```

  * Similarly, we have a case for `REMOVE_CAR` -- which will return a copy of state, including a new `cars` array, after filtering out the car that we want to remove:

    ```js
    case 'REMOVE_CAR': {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    ```

  * Finally, as with all `switch` statements in JavaScript, we assign a `default` case, specified in case the action wasn't accounted for in the code:

    ```js
    default: {
      return state;
    }
    ```

  * Reducers can seem a little intimidating at first because of the use of the spread operator. For more guidance, refer to the [MDN Web Docs on spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first create a reducer function that accepts arguments of `state` and `action`. Then we would write a `switch` statement that tells the function what to return based on that action.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Reducers/README.md`.

### 15. Student Do: Reducers (15 min)

* Direct students to the activity instructions found in `06-Stu_Reducers/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Reducer Fails to Add/Remove Students

  Work with a partner to resolve the following issue(s):

  * As a developer, I want to implement reducers into my application to update global state.

  * As a developer, I want to be able to diagnose and fix the issue associated with the reducer that is causing the tests to fail.

  ## Expected Behavior

  When the tests are run, all of them should pass.

  ## Actual Behavior

  The suite that tests the reducer is failing for adding and removing student functionality.

  ## Steps to Reproduce the Problem

  1. Navigate to the `06-Stu-Reducers/Unsolved` folder and run `npm install`.

  2. Run `npm run test`.

  3. Note that the test fails.

  ---

  ## 💡 Hints

  How does the test's error message inform us about where the error is occurring?

  How can we use `switch` statements to an advantage in this activity?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Where have we seen the term **reduce** elsewhere in JavaScript?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Reducers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with reducers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Arguments passed to `reducer`

  * ✔️ Pure functions

* First, run `npm run test` in the command-line window to demonstrate that the tests are currently failing.

  * Reiterate to students that the goal of this activity is to write code in the `reducers.js` file that would allow the tests to pass.

* Open `06-Stu_Reducers/src/utils/StudentContext.js` in your IDE and explain the following:

  * The application hasn't implemented the reducer yet and is still using methods inside the `StudentContext`.

  * The idea is to extract that functionality into a single reducer function. Let's look at those methods to see what we need to include in the reducer function:

    ```js
    const addStudent = (student) => {
      const id = createId(students);

      const newStudent = { ...student, id };

      setStudents([...students, newStudent]);
    };

    const removeStudent = (id) => {
      const newStudentsList = students.filter((student) => student.id !== id);

      setStudents(newStudentsList);
    };
    ```

  * Now that we know we need the reducer to handle adding and removal of students, let's navigate to `reducers.js` and create the `reducer`.

* Open `06-Stu_Reducers/src/utils/reducers.js` in your IDE and explain the following:

  * First we import the action variables from `actions.js` into the file:

    ```js
    import { ADD_STUDENT, REMOVE_STUDENT } from './actions';
    ```

  * Then we set up the reducer function, which accepts `state` and an `action`:

    ```js
    export default function reducer(state, action) { ... }
    ```

  * The first action, `ADD_STUDENT`,  returns a new copy of state with an updated `students` array.

  * We populate the `students` array with existing students using the spread operator, and we add the new student from the `payload` property of the `action` object:

    ```js
    switch (action.type) {
      case ADD_STUDENT:
        return {
          ...state,
          students: [...state.students, action.payload],
        };
    ...
    };
    ```

  * The other action to account for is `REMOVE_STUDENT`, which also returns a new copy of state with an updated `students` array.

  * First we populate the `students` array with existing students, as long as they don't have the `id` that was included in `action.payload`:

    ```js
    case REMOVE_STUDENT:
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    ```

  * Finally we add a `default` case, which will prevent the application from breaking if we happen to pass an invalid `action` to the reducer:

    ```js
      switch (action.type) {
        ...

      default:
        return state;
    }
    ```

  * 🔑 Remember that, while the tests are now passing, this activity only involves setting up the reducer. Later we will connect the application to the reducer.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to keep the original state intact when working with reducer functions?

  * 🙋 This allows the reducer to be a pure function and keeps the state that we pass to the reducer intact.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Redux Docs on reducers](https://redux.js.org/faq/reducers/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Actions (5 min)

* Copy the `src` directory from `07-Ins_Actions` and paste it into `00-practice-app`.

* Navigate to `00-practice-app` in your command line and run `npm install` and `npm start`.

* Open `localhost:3000` in your browser to demonstrate the following:

  * This digital garage app includes a start- and stop-engine action for each car.

* Open `07-Ins_Actions/src/utils/actions.js` in your IDE and explain the following:

  * 🔑 It is common practice to set variable names for each kind of action in a new file called `actions.js`.

  * Doing so allows those actions to be referenced by other parts of your application as it grows in scale:

    ```js
    export const ADD_STUDENT = 'ADD_STUDENT';
    export const REMOVE_STUDENT = 'REMOVE_STUDENT';
    ```

  * Inside the `actions.js` file, we have some actions that are annotated.

  * **Actions** are events that trigger specific functionality in the reducer:

    ```js
    export const START_CAR = 'START_CAR';
    ```

* Open `07-Ins_Actions/src/utils/reducers.js` and explain the following:

  * The reducer function now accounts for some additional actions, like stopping and starting the engine.

  * This action could easily be refactored into a `TOGGLE_CAR` action by setting the `isRunning` value to the opposite of whatever `action.payload.isRunning` currently is, but for the sake of adding multiple actions we divided them into two:

    ```js
    case START_CAR: {
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      const updatedCar = { ...state.cars[carIndex], isRunning: true };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }

      case STOP_CAR: {
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      const updatedCar = {
        ...state.cars[carIndex],
        isRunning: false,
      };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    ```

* Open `07-Ins_Actions/src/utils/CarContext.js` and explain the following:

  * Notice that the methods in `CarContext` are nearly identical to those in the reducer function.

  * The two are so similar because we haven't yet refactored the application to use the reducer. We will do this later.

  * In the upcoming activity, we will simply be annotating the `actions.js` file.

  * Other developers who join this project could easily understand which options are available to manipulate state, because we provide that information.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would you describe what an action is to someone like your best friend or a family member?

  * 🙋 Actions are events that trigger specific work to happen inside an application.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Actions/README.md`.

### 18. Student Do: Actions (15 min)

* Direct students to the activity instructions found in `08-Stu_Actions/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Each Action Inside the React App

  Work with a partner to add comments to `/utils/actions.js` to describe what each action's inputs are and what the net effect will be on the new state.

  ## Setup

  Copy the `src` directory from the unsolved folder into `00-practice-app` before you begin.

  ## 💡 Notes

  Check `/utils/reducers.js` and the associated test file to learn more about each action.

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following questions with your partner to further your knowledge:

  * What are some best practices for creating and managing actions?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: Actions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with actions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Actions

  * ✔️ `switch` statements

* Open `08-Stu_Actions/Solved/src/utils/actions.js` in your IDE and explain the following:

  * There are several variables listed in this file. The assignment calls for adding comments to describe the functionality of each action:

    ```js
    export const ADD_STUDENT = 'ADD_STUDENT';
    export const REMOVE_STUDENT = 'REMOVE_STUDENT';
    export const UPDATE_STUDENT = 'UPDATE_STUDENT';
    export const ADD_MAJOR = 'ADD_MAJOR';
    export const REMOVE_MAJOR = 'REMOVE_MAJOR';
    ```

  * 🔑 To intelligently describe the functionality of each action, we first have to review what the reducer is doing when it encounters these actions.

  * The first one listed is `ADD_STUDENT`. Let's look at the corresponding code block inside the reducer function.

* Open `08-Stu_Actions/Solved/src/utils/reducers.js` in your IDE and explain the following:

  * To calculate the `newStudentId`, we have to rely on the `students` array inside the state. We take the last index position in the array and add one to it to generate the new `id`.

  * Then we create a `newStudent` object with the content of the `action.payload` and the `newStudentId`.

  * Finally, we return a copy of state with an updated `students` array that now includes the `newStudent` object:

    ```js
    case ADD_STUDENT: {
        const newStudentId = createId(state.students);
        
        const newStudent = { ...action.payload, id: newStudentId };

        return {
          ...state,
          students: [...state.students, newStudent],
        };
      }
    ```

  * The next action to annotate is the `REMOVE_STUDENT` action. The first part of this action is to make a copy of the `students` array and filter out the `id` included in `action.payload`.

  * The way the `REMOVE_STUDENT` action is set up, we can immediately return a copy of `state` with the updated `students` array, performing the filter inline:

    ```js
    case REMOVE_STUDENT: {
        return {
          ...state,
          students: [...state.students].filter(
            (student) => student.id !== action.payload
          ),
        };
      }
    ```

  * The next action in `action.js` is `UPDATE_STUDENT`. Let's look at the code block for this one, inside the reducer function.

  * The first thing that happens is that we isolate the index position for the student that we want to update.

  * We can get the index from an array method called `findIndex()`. This method returns the index position based on a callback passed to the method. In this case, we want to find the index of the student `id` that matches the `id` found in `action.payload`:

    ```js
    const studentIndex = state.students.findIndex(
          (student) => student.id === action.payload.id
        );
    ```

  * Next, we create an object that will contain the updated student. This uses the `studentIndex` that we found, along with the body of `action.payload`:

    ```js
    const updatedStudent = {
          ...state.students[studentIndex],
          ...action.payload,
        };
    ```

  * Then we create a copy of the `students` array and inject the updated student into it:

    ```js
    const newStudentsList = [...state.students];
    newStudentsList[studentIndex] = updatedStudent;
    ```

  * Finally, we return a copy of state with the new `students` array, which we call `newStudentsList`:

    ```js
    return {
      ...state,
      students: newStudentsList,
    };
    ```

  * For the `ADD_MAJOR` action we immediately return a copy of state and an updated `majors` array that contains the major passed into the `action.payload` object:

    ```js
    case ADD_MAJOR: {
        return {
          ...state,
          majors: [...state.majors, action.payload],
        };
      }
    ```

  * The `REMOVE_MAJOR` action is very similar. However, instead of returning a copy of the `majors` array from `state` and the `action.payload`, we perform a filter on the array, removing the `major` provided in `action.payload`:

    ```js
    case REMOVE_MAJOR: {
        return {
          ...state,
          majors: [...state.majors].filter((major) => major !== action.payload),
        };
      }
    ```

  * That was the last action to annotate, but note that you should always have a default case in your `switch` statement, to account for unknown action types.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why might it be useful to annotate the actions that will be used in your reducer function?

  * 🙋 Actions can be used in multiple places when creating a Redux application. Annotating them is good practice to help other developers interface with your code.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Redux Docs on actions](https://redux.js.org/faq/actions/), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
