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

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
