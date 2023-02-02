# 11.2 Full-Time Lesson Plan: GraphQL and JSON Web Tokens

## Overview

This class focuses on using Apollo's client-side library to consume a GraphQL API. React Router and JSON Web Tokens to add authentication to a MERN-stack application is also covered.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_useMutation` through `27-Evr_GitHub-Actions`.

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to token based authentication and the MERN framework may face.

* In the previous class, students were introduced to MERN's three-layer architecture and learned how to construct a GraphQL API. Encourage students to refer back to that material, as needed, to review these key concepts.

* The `17-Ins_Apollo-Cache` uses Apollo Client Developer Tools to visualize the in-memory cache. If you have not yet done it, install the [Apollo Client Developer Tools extension for Google Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US). Once installed, open Chrome DevTools and navigate to the `>>` arrow on the toolbar to see additional tools available. Click on `Apollo` to open the interface.

* For activity `18-Stu_Apollo-Cache`, please point the students to the console to see the error message.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they work on the activity and do a brief review at the end.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Use `useMutation` Apollo Hook to fetch and update data.

* Explain what the Apollo Cache is and identify when it needs updating.

* Use React Router to tie a component to a URL route.

* Create and verify a JSON Web Token to log in the user.

* Store, check expiration of, and pass JSON Web Tokens to an Apollo Client.

* Implement server-side authentication in GraphQL API.

* Explain a practical use case for implementing GitHub Actions.

## Time Tracker

| Start  | #   | Activity Name                          | Duration |
|---     |---  |---                                     |---       |
| 10:00AM| 1   | Instructor Demo: useMutation           | 0:05     |
| 10:05AM| 2   | Student Do: useMutation                | 0:15     |
| 10:20AM| 3   | Instructor Review:  useMutation        | 0:10     |
| 10:30AM| 4   | Instructor Demo:  Apollo Cache         | 0:05     |
| 10:35AM| 5   | Student Do: Apollo Cache               | 0:15     |
| 10:50AM| 6   | Instructor Review:  Apollo Cache       | 0:10     |
| 11:00AM| 7   | Instructor Demo: React Router          | 0:05     |
| 11:05AM| 8   | Student Do:  React Router              | 0:15     |
| 11:20AM| 9   | Instructor Review: React Router        | 0:10     |
| 11:30AM| 10  | FLEX                                   | 0:30     |
| 12:00PM| 11  | BREAK                                  | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity         | 0:10     |
| 12:40PM| 13  | Instructor Demo: Sign JWT              | 0:05     |
| 12:45PM| 14  | Student Do: Sign JWT                   | 0:15     |
| 1:00PM | 15  | Instructor Review: Sign JWT            | 0:10     |
| 1:10PM | 16  | Instructor Demo: Decode JWT            | 0:05     |
| 1:15PM | 17  | Student Do: Decode JWT                 | 0:15     |
| 1:30PM | 18  | Instructor Review: Decode JWT          | 0:10     |
| 1:40PM | 19  | Instructor Demo: Context Resolver      | 0:05     |
| 1:45PM | 20  | Student Do: Context Resolver           | 0:15     |
| 2:00PM | 21  | Instructor Review:  Context Resolver   | 0:10     |
| 2:10PM | 22  | Everyone Do: GitHub Actions            | 0:20     |
| 2:30PM | 23  | END                                    | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: useMutation (5 min)

* Welcome students to class.

* Navigate to `15-Ins_useMutation` in your command line and run `npm install`, `npm run seed` and `npm run develop`.

* Open `http://localhost:3000` to demonstrate the following:

  * 🔑 When we enter a name into the text box and submit the form, a new profile containing the name we entered is created and the profile is displayed on the page.

  * 🔑 To create and modify data, we use mutations. This allows us to have a full CRUD app.

* Open `15-Ins_useMutation/client/src/utils/mutations.js` to demonstrate the following:

  * Setting up a mutation is a lot like setting up a query. First, we set up our front end to send requests using Apollo Client.

  * 🔑 Then, we write our mutation, making sure our entry point and fields match definitions in our schema exactly and that our variable definition is set. We also define a variable `$name`. This variable will be used to pass back data when our mutation executes:

     ```js
     mutation addProfile($name: String!) {
       addProfile(name: $name) {
         _id
         name
         skills
       }
     }
     ```

  * Finally, we wrap our completed mutation in a `gql` function and export it.

* Open `15-Ins_useMutation/client/src/components/ProfileForm/index.js` to demonstrate the following:

  * 🔑 In the component where we want to execute the mutation, we import the mutation we created as well as the `useMutation` Hook:

     ```js
     import { useMutation } from '@apollo/client';
     import { ADD_PROFILE } from '../../utils/mutations';
     ```

  * 🔑 Next, we apply the `useMutation` Hook to return a mutation function that we can use to trigger the mutation as needed:

     ```js
     const [addProfile, { error }] = useMutation(ADD_PROFILE);
     ```

  * Because we want our mutation function to execute when we submit the form, we place it inside the `handleFormSubmit` function:

     ```js
     const { data } = await addProfile({
       variables: { name },
     });
     ```

  * 🔑 We then assign a value to our mutation variable that represents the name entered by the user:

     ```js
     variables: { name }
     ```

  * We wrap our mutation function in a `try...catch` and add error handling. This will handle any errors gracefully if our request fails:

     ```js
     try {
       const { data } = await addProfile({
         variables: { name },
       });

     } catch (err) {
       console.error(err);
     }
     ```

  * 🔑 Finally, we add a refresh to allow our page to reload after the mutation is executed. This will stop any cache issues and allow our new profile to be displayed:

      ```js
     window.location.reload();
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When are mutations executed using `useMutation()`?

  * 🙋 Mutations are not immediately executed when the page is rendered. Instead, the `useMutation()` Hook returns a mutation function that can be called inside another function. This makes it easy to attach a mutation to an event, like a form submission.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_useMutation/README.md`.

### 2. Student Do: useMutation (15 min)

* Direct students to the activity instructions found in `16-Stu_useMutation/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 🏗️ Implement Mutation to Create New Thought

   Work with a partner to implement the following user story:

   * As a user, when I submit a new thought, I want that thought to be created and displayed on the page.

   ## Acceptance Criteria

   The activity is complete when the following criteria is met:

   * A thought is added to the database upon form submission.

   * A successful thought submission reloads the page and displays the new thought.

   ---

   ## 💡 Hints

   * Where can we define mutations that accept arguments?

   * What information about the mutation's state can we use in our UI?

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * How can Apollo Client be set up as a state management tool?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: useMutation (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `useMutation` Hook? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `($thoughtText: String!, $thoughtAuthor: String!)`

  * ✔️ `import { useMutation }`

  * ✔️ `useMutation(ADD_THOUGHT)`

  * ✔️ `const { data } = addThought()`

  * ✔️ `variables: { ...formState }`

* Open `16-Stu_useMutation/Solved/client/src/utils/mutations.js` in your IDE and explain the following:

  * 🔑 The `ADD-THOUGHT` mutation has two variables `$thoughtText` and `$thoughtAuthor`. We will use these variables to pass back data that is entered by the user:

     ```js
     ($thoughtText: String!, $thoughtAuthor: String!)
     ```

  * To pass our mutation to a component so it can be used by our Hook, we wrap the mutation in a `gql` function and export it. This work has been done for us:

     ```js
     export const ADD_THOUGHT = gql`
       mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
         addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
           _id
           thoughtText
           thoughtAuthor
           createdAt
           comments {
             _id
             commentText
           }
         }
       }
     `;
     ```

* Open `16-Stu_useMutation/Solved/client/src/components/ThoughtForm/index.js` in your IDE and explain the following:

  * 🔑 In the component where we want use the mutation, we import both the mutation and the `useMutation` Hook:

     ```js
     import { useMutation } from '@apollo/client';
     import { ADD_THOUGHT } from '../../utils/mutations';
     ```

  * 🔑 Then, we set up our `useMutation` Hook to apply our mutation. We also add error handling:

     ```js
     const [addThought, { error }] = useMutation(ADD_THOUGHT);
     ```

  * 🔑 The `useMutation` Hook returns a mutation function, `addThought`, that can then be used to execute the function as needed. Because we want it to execute when a form is submitted, we add it to the form submit handler:

     ```js
     const { data } = addThought({
       });
     ```

  * 🔑 We also set the value of our mutation variables to equal the current value of `thoughtText` and `thoughtAuthor` in our form state to allow use to pass the user-generated values back to our mutation:

     ```js
      variables: { ...formState },
     ```

  * We add a window refresh to reload our page and avoid an error with the cache:

       ```js
       window.location.reload();
       ```

  * Finally, we wrap the function in a `try...catch` to allow graceful error handling:

     ```js
      try {
       const { data } = addThought({
         variables: { ...formState },
       });

       window.location.reload();
       } catch (err) {
         console.error(err);
       }
     };
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use variables to pass data inputted by the user back to our mutation?

  * 🙋 When we write a mutation, we define the variable. Then, when the mutation is executed, we assign the variable a value. This value is then passed back to the mutation so that it can be used in the associated function to create, update, or delete data.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on mutations](https://www.apollographql.com/docs/react/data/mutations/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Apollo Cache (5 min)

* Navigate to `17-Ins_Apollo-Cache` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `http://localhost:3000` and navigate to Chrome DevTools and open the `Apollo` tool to demonstrate the following:

  * 🔑 When we add a name and click and submit the form, a mutation executes and a new profile is added to our database.

  * 🔑 The in-memory cache is updated as well.

* Open `17-Ins_Apollo-Cache/client/src/App.js` in your IDE and demonstrate the following:

  * 🔑 Apollo Client has an in-memory cache that stores the data from completed requests. To use Apollo's in-memory cache, we first import `InMemoryCache` in our `App.js` file:

      ```js
     import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
     ```

  * We then set the cache value in our `client` to a new instance of a `InMemoryCache()` object. We will reference this `cache` object when we want to retrieve data or update the data stored in the cache:

     ```js
     const client = new ApolloClient({
       uri: '/graphql',
       cache: new InMemoryCache(),
     });
     ```

* Open `17-Ins_Apollo-Cache/client/src/components/ProfileForm/index.js` in your IDE and demonstrate the following:

  * When we execute the `useMutation` Hook, the data in our back-end database is updated and an object is returned. In some cases -- like when we create or delete data -- the cache may not update automatically:

  * In those cases, we add an update function as the second argument of our `useMutation` Hook:

     ```js
     const [addProfile, { error }] = useMutation(ADD_PROFILE, {update()})
     ```

  * We add two arguments to the update function: the cache object that represents the Apollo Client cache and a `data` property. The `data` property is set to hold the data returned from the mutation function:

     ```js
     update(cache, { data: { addProfile } })
     ```

  * We then use the web API function `.readQuery()` to retrieve the existing list of profiles in the cache:

     ```js
     const { profiles } = cache.readQuery({ query: QUERY_PROFILES });
     ```

  * Next, we combine the data from the newly executed mutation function with the data we retrieved from the cache and store the results in our `data` property:

     ```js
     data: { profiles: [...profiles, addProfile] }
     ```

  * We use `.writeQuery()` to update the data on the cache and keep the cache in sync with our back end:

     ```js
     cache.writeQuery({
       query: QUERY_PROFILES,
       data: { profiles: [...profiles, addProfile] },
     })
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use an `update()` function to modify our cache?

  * 🙋 We pass the update function as the second argument of our `useMutation` Hook. Then, we retrieve the existing data from our cache and combine it with the data generated when our mutation executed and write the new data to our cache.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Apollo-Cache/README.md`.

### 5. Student Do: Apollo Cache (15 min)

* Direct students to the activity instructions found in `18-Stu_Apollo-Cache/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Apollo Client Cache Update Throws an Error

  Work with a partner to resolve the following issue:

  * As a user, when I submit a new thought, I want that thought to be displayed on the page without reloading it.

  ## Expected Behavior

  When as user submits a new thought through the form, the thought should be automatically added to the page without refreshing the page.

  ## Actual Behavior

  When a user submits a new thought through the form, the thought is created but the cache update functionality throws an error in the console and doesn't update correctly.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. Run `npm install` and `npm run develop` from the command line at the root of the application's directory.

  2. Navigate to `http://localhost:3000` in the browser.

  3. Fill out the form at the top of the page and submit the form to see the error.

  ## Assets

  The following image shows the error:

  ![The Chrome Console displays an error after the update cache functionality executes.](./Images/01-screenshot.png)

  ---

  ## 💡 Hint

  * Where does the cache update functionality go when executing a mutation?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is another means of storing data globally client-side that we can implement?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: Apollo Cache (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Apollo Cache? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `Missing field` error

  * ✔️ `{ data: { addThought } }`

* Open `18-Stu_Apollo-Cache/Solved/client/src/components/ThoughtForm/index.js` in your IDE and explain the following:

  * 🔑 The update function modifies the data in the cache to match the changes made in the database when a mutation executes. But while the app seems to work, let's check the Console for safety. It looks like we have a few `Missing field '...' while writing result` errors.

  * For the `update()` function to operate without errors, we must pass in two arguments: a cache object and a `data` property that holds the value of data returned from our mutation function. Because our broken code is returning a `Missing field` error, it is likely that one of these is not passing data about our thought correctly.

  * 🔑 The data is not separate from the `addThought()` mutation data. Instead, the data we want to store IS the mutation data, identified as `addThought()`. This could be causing the bug!

    ```js
     update(cache, data, addThought)
    ```

  * To fix the error, we add the `data` property to the mutation data and give it a value of `{addThought}`. Now the `update()` function has the data -- in the format it needs:

    ```js
    update(cache, { data: { addThought } }) {
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What two things do we need to pass into the update function?

  * 🙋 We pass the cache object that represents the Apollo Client cache as well as a data property that holds the data returned when the mutation is executed.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on reading and writing data to the cache](https://www.apollographql.com/docs/react/caching/cache-interaction/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: React Router (5 min)

* Navigate to `19-Ins_React-Router` in your command line and run `npm install`, `npm run seed` and `npm run develop`.

* Open `http://localhost:3000` in your browser to demonstrate the following:

  * At this point, we have covered all that is needed so that our front end can send requests to our GraphQL API and handle responses. Congrats, that is a huge step!

  * To make it easy for our user to easily navigate between multiple pages, though, we have a bit more more work to do.

  * When we enter `http://localhost:3000/` in our browser we are directed to the home page.

  * 🔑 We can also navigate to a new page that contains the information about a single tech friend.

  * 🔑 The URL has also changed and now includes a `/profile` route followed by an id. We can copy and paste the URL into a new browser window and view the same page and even bookmark it to return to this page later.

* Open `19-Ins_React-Router/client/src/App.js` in your IDE to demonstrate the following:

  * React Router is a library that allows us to easily add navigation and dynamic routing to our apps.

  * 🔑 To use React Router, we start by importing the `BrowserRouter`, `Routes` and `Route` components from `react-router-dom`:

    ```js
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    ```

  * 🔑 Next, we wrap our `Router` component around our app elements. This allows us to keep track of the location and easily navigate between pages:

    ```js
    <Router>...</Router>
    ```

  * 🔑 To create a static route, we wrap a `Route` component around the page we want to access and identify the path. Be sure to wrap any `Route` components within a `Routes` component. Note that within the `Route` component we have a `path` as well as an `element`. The `path` signifies the URL and the `element` signifies which component we want the user to see when they hit that path! Now, when we navigate to `http://localhost:3000/`, the `Home` page will display:

    ```js
    <Routes>
      <Route
        path="/">
        element={<Home />}
      />
    </Routes>
    ```

  * 🔑 To create a dynamic route, we simply add a parameter `:profileId` to our path. For the `profile` page, the URL will change depending on which tech friend's information is being displayed. Note that regardless of if we want to create a static or dynamic route, the `Route` must be within a `Routes` component. The profile pages will now be available at `http://localhost:3000/profiles/<profileId>`:

    ```js
    <Routes>
      <Route
        path="/profiles/:profileId">
        element={<Profile />}
      />
    </Routes>
    ```

* Open `19-Ins_React-Router/client/src/components/ProfileList/index.js` in your IDE to demonstrate the following:

  * 🔑 Links are a React Router component that allow us to navigate around our app using a hyperlink.

  * To use a link, we first have to import the component:

    ```js
    import { Link } from 'react-router-dom';
    ```

  * 🔑 Then, we create the link inside the `.map()` function and give it a path to an existing route using `to`. We use `${profile._id}` to assign the route's parameter to the id of our current tech friend:

    ```js
    <Link
      className="btn btn-block btn-squared btn-light text-dark"
        to={`/profiles/${profile._id}`}
     >
       View and endorse their skills.
    </Link>
    ```

* Open `19-Ins_React-Router/client/src/pages/Profile.js` in your IDE to demonstrate the following:

  * When the user clicks on the link inside our app or enters the page's URL in the browser, we want only the associated tech friend's information to display on the page.

  * 🔑 To do this, we first grab the needed profile id from the URL's parameter using the `useParams()` Hook:

    ```js
    const { profileId } = useParams();
    ```

  * 🔑 Then, we use that profile id to query our data and return the associated tech friend's information:

    ```js
    const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
      variables: { profileId: profileId },
    });
    ```

  * 🔑 We can then use the returned data to populate the page:

    ```js
    <h2 className="card-header">
      {profile.name}'s friends have endorsed these skills...
    </h2>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use React Router to add navigation to our site?

  * 🙋 React Router is a library that allows us to easily create a route for each page for our app. The route can then be used by either entering the path into a browser window or internally, when a user clicks on a link.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_React-Router/README.md`.

### 8. Student Do: React Router (15 min)

* Direct students to the activity instructions found in `20-Stu_React-Router/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Single-Thought Page Display

  Work with a partner to implement the following user stories:

  * As a user, I want to view individual thoughts and a list of comments.

  * As a user, I want to be able to bookmark a thought's page so I can come back and read more comments.

  ## Acceptance Criteria

  The activity is complete when the following criteria are met:

  * When I select a thought on the homepage, I am taken to that thought's page to view its comments without reloading the page.

  * When I visit the thought directly in the browser, I am taken to that thought's page to view its comments.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The single thought's page displays the thought's information, its list of comments, and a form to add a new comment.](./Images/01-screenshot.png)

  ---

  ## 💡 Hints

  * How can the value of the `to` prop in each thought's `<Link>` component help us define our route?

  * How can we define a route with a parameter using React Router?

  * How can the `useParams()` Hook be used to retrieve data to be used in the `useQuery()` Hook?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Which browser API does React Router leverage?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: React Router (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with React Router? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `<Routes>` and `<Route>` components

  * ✔️ `<Link>` component

  * ✔️ `useParams()` hook

* Open `20-Stu_React-Router/client/src/App.js` in your IDE and explain the following:

  * 🔑 To navigate to the thoughts page, we first must define a route. Because the route is dynamic and will change based on the id of the thought we want to display, we use a `:thoughtID` parameter:

    ```js
    <Routes>
      <Route
        path="/thoughts/:thoughtId"
        element={<SingleThought />}
      />
    </Routes>
    ```

* Open `20-Stu_React-Router/client/src/components/ThoughtList/index.js` in your IDE and explain the following:

  * To access the page from inside our app, we use a link.

  * 🔑 Inside our map function, we create a link component that uses the route we just created. Then, we assign the value of the `:thoughtId` parameter to be the id of our current thought:

    ```js
    <Link
       className="btn btn-primary btn-block btn-squared"
        to={`/thoughts/${thought._id}`}
    >
    ```

* Open `20-Stu_React-Router/client/src/pages/SingleThought.js` in your IDE and explain the following:

  * 🔑 To populate the data for the individual thought on our page, we first retrieve the id from the URL's parameter using the `useParams()` Hook:

    ```js
    const { thoughtId } = useParams();
    ```

  * 🔑 Then, we pass the retrieved id into a query to return the information needed to populate the page:

    ```js
    const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
      variables: { thoughtId: thoughtId },
    });
    ```

  * We can then use the returned data to display information on our page:

    ```js
    <h3 className="card-header bg-dark text-light p-2 m-0">
      {thought.thoughtAuthor} <br />
      <span style={{ fontSize: '1rem' }}>
         had this thought on {thought.createdAt}
      </span>
    </h3>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are two ways we can access a page when we use React Router?

  * 🙋 We can access the page directly, by entering the URL of the page directly into the browser. If the path uses a variable, a value for the variable must be provided. We can also use a Link component to allow a user to click on a link and be directed to another page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, review the [React Router example of URL parameters](https://reactrouter.com/docs/en/v6/getting-started/overview#reading-url-parameters) and the [React Router example of basic routes](https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes), and stay for office hours to ask for help.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Explain that as we develop more complex data-driven and user-interactive web apps, it is important to keep data security in mind.

* One way to accomplish this is to use a token to securely transmit information between parties as a JSON object. Let's take a look at the components of a JSON Web Token, or JWT.

* Open the [JSON Web Token Debugger](https://jwt.io/#debugger-io) in your browser and demonstrate the following:

  * We use a JSON Web Token to securely send signed and verified data as a JSON object. Each JWT is made up of three parts: the header, payload, and signature.

  * We use the header to hold the token's metadata. This includes the algorithm used and the token type:

    ```js
    {
      "alg": "HS256",
      "typ": "JWT"
    }
    ```

  * The second part is the payload. We use the payload to hold the JSON object containing the data we wish to transmit as well as a `iat` property, which stands for "Issued at" and describes the time the JWT was issued:

    ```js
    {
      "sub": "1234567890",
      "name": "John Doe",
      "iat": 1516239022
    }
    ```

  * Finally, we use a signature to validate that the token comes from the sender and has not been tampered with. The signature takes the encoded header and payload and then signs it using a secret, which is a key that is used to verify the token:

    ```js
    HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    your-256-bit-secret)
    ```

  * When we put all three parts together, we get three Base64-URL strings separated by dots that can be easily passed around to help keep our data secure:

    ```js
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
    ```

  * Explain that later during today's class, we will learn how to use a JSON Web Token to add authentication to our MERN-stack apps.

### 13. Instructor Demo: Sign JWT (5 min)

* Navigate to `21-Ins_Sign-JWT` in your command line and run `npm install`, `npm run seed`, and `npm start`.

* Open `21-Ins_Sign-JWT/utils/auth.js` in your IDE to demonstrate the following:

  * 🔑 To generate a token in our apps, we start by adding a `auth.js` file to our server's `utils` directory and requiring the `jsonwebtoken` library to provide the functionality to check the validity of the token using a `secret` and `expiration`:

    ```js
    const jwt = require('jsonwebtoken');
    ```

  * 🔑 We then assign values for both a `secret` and `expiration`. The `secret` is a private key that signs the token and enables the server to verify whether the token is valid. The `expiration` is the length of time the token remains valid before expiring:

     ```js
     const secret = 'mysecretsshhhhh';
     const expiration = '2h';
     ```

  * 🔑 Next, we add a `signToken()` function to combine the payload, secret, and string and return our token as a string:

     ```js
     signToken: function ({ email, name, _id }) {
       const payload = { email, name, _id };
       return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
     },
     ```

* Open `21-Ins_Sign-JWT/schemas/resolvers.js` in your IDE to demonstrate the following:

  * 🔑 We call the `signToken()` function in the resolvers where we want to transmit data securely to generate a signed token:

    ```js
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);
      return { token, profile };
    }
    ```

* Open `21-Ins_Sign-JWT/models/Profile.js` in your IDE to demonstrate the following:

  * We also need a way to handle a password in the resolvers. We start by importing `bcrypt`, a library that is used to safely store a password in the `Profile` model:

    ```js
    const bcrypt = require('bcrypt');
    ```

  * Next, we add a save hook to encrypt a password when a new profile is created:

    ```js
    profileSchema.pre('save', async function (next) {
      if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
      }
      next();
    });
    ```

  * We also add an `isCorrectPassword()` method that checks to determine if the correct password was provided by the user:

    ```js
    profileSchema.methods.isCorrectPassword = async function (password) {
      return bcrypt.compare(password, this.password);
    }
    ```

  * We then export the model so the functionality can be used in our resolvers to handle our passwords.

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * Now, that we have a way to generate a token and handle a password, we also need to add definitions to our existing GraphQL schema to handle our token.

  * 🔑 When we open the `schema` tab, we see that there is an object type `auth`, that contains `token` and a `profile` field. This defines the `Auth` data we will have access to:

    ```js
    type Auth {
      token: ID!
      profile: Profile
    }
    ```

  * 🔑 We can access this `auth` object through two mutation entry points: `login` and `addProfile`. Let's use the `addProfile` entry point to add a new profile to see a generated token.

  * We write a mutation in the editor that takes in three values: name, email, and password:

    ```js
    mutation addProfile($name: String!, $email: String!, $password: String!) {
      addProfile(name: $name, email: $email, password: $password) {
        token
        profile {
          _id
        }
      }
    }
    ```

  * We then assign values to our variables in the `Query Variables` editor to replicate the user-provided data and test if our mutation works:

    ```js
    {
      "name": "sample",
      "email": "me@me.com",
      "password": "password"
    }
    ```

  * When we click the play button, we see that a signed token is stored in the `token` field.

* Open the [JSON Web Token Debugger](https://jwt.io/#debugger-io) in your browser and demonstrate the following:

  * 🔑 When we copy the generated token into the decoder, we see that the payload contains the `name` and `email` that we added, an `iat` that describes when the data was created, and the token's expiration:

    ```js
    {
      "data": {
      "email": "me@me.com",
      "name": "sample",
      "_id": "601a054d40fbcbf267a3f253"
    },
      "iat": 1612318029,
      "exp": 1612325229
    }
    ```

* The process of generating a signed token takes place in the resolver.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use the `signToken()` function to generate a signed token?

  * 🙋 The `signToken()` function expects an object that contains data and will add that object's properties to a token. The `secret` and `expiration` are also added.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Sign-JWT/README.md`.

### 14. Student Do: Sign JWT (15 min)

* Direct students to the activity instructions found in `22-Stu_Sign-JWT/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of JWT Signing

  Work with a partner to add comments that describe the functionality of the code found in [resolvers.js](./Unsolved/schemas/resolvers.js).

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the pros and cons of using JSON Web Tokens?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Sign JWT (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with creating a signed token server-side? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `User.create({ username, email, password })`

  * ✔️ `const token = signToken(user)`

  * ✔️ `User.findOne({ email })`

  * ✔️ `user.isCorrectPassword(password)`

* Open `22-Stu_Sign-JWT/Solved/schemas/resolvers.js` in your IDE and explain the following:

  * We import the `signToken()` method and the `User` model to access the functionality needed in our resolvers to generate a signed token and check a password:

    ```js
    const { User, Thought } = require('../models');
    const { signToken } = require('../utils/auth');
    ```

  * 🔑 We then write an `addUser` resolver and pass in `username`, `email`, and `password` as arguments. This resolver will use our imported `signToken()` method:

    ```js
    addUser: async (parent, { username, email, password }) => {
    ```

  * 🔑 We use the data passed in to create a new user in the database:

    ```js
    const user = await User.create({ username, email, password });
    ```

  * 🔑 Next, we call the `signToken()` function to generate a signed token that includes the user information as the payload. The newly created `user` and `token` are then returned:

    ```js
    const token = signToken(user);
    return { token, user };
    ```

  * 🔑 For the `login` mutation, we pass in the `email` and `password` that we want to check against an existing user:

    ```js
    login: async (parent, { email, password }) => {
    ```

  * 🔑 We use the `.findOne()` method to search the database for a matching `email`:

    ```js
    const user = await User.findOne({ email });
    ```

  * If no user is found, we return an error message indicating there is no match:

    ```js
    if (!user) {
      throw new AuthenticationError('No user found with this email address');
    }
    ```

  * 🔑 If a match is found, we use the `.isCorrectPassword()` method from the `Profile` model to check if the password is also match:

    ```js
    const correctPw = await user.isCorrectPassword(password);
    ```

  * If there is no password match, we return an error. Otherwise, we use the `signToken()` function to generate a signed token that contains the user information:

    ```js
    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }
    const token = signToken(user);
    return { token, user };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we update the mutation resolvers to generate a token that includes our data?

  * 🙋 We create a `signToken()` method that uses the `jsonwebtoken` library's `sign()` method to add a signature and expiration date to the data payload. Then, we import and execute the `signToken()` method in our resolvers.

  * ☝️ How do we determine if the the entered password matches an existing account?

  * 🙋 We create an `isCorrectPassword()` method that uses the `bcrypt` library's `compare` method to check if the provided password matches.  Then, we import and execute the `isCorrectPassword()` method in our resolvers.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [JSON Web Tokens introduction](https://jwt.io/introduction), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Decode JWT (5 min)

* Navigate to `23-Ins_Decode-JWT` in your command line and run `npm install`, `npm run seed`, and `npm start`.

* Open `23-Ins_Decode-JWT/client/src/utils/auth.js` in your IDE to demonstrate the following:

  * 🔑 When a token is returned to our front end after a user is successfully logged in, it must be stored and decoded. We import the `jwt-decode` library to decode the data a token holds as well as when it expires:

    ```js
    import decode from 'jwt-decode';
    ```

  * Next, we create a new class `AuthService` and add the functionality needed to store our token so we can easily retrieve it and include it with a request to the server:

    ```js
    class AuthService {}
    ```

  * 🔑 Inside this class, we use the `getToken` method to retrieve an existing token from local storage, if it exists:

    ```js
    getToken() {
      return localStorage.getItem('id_token');
    }
    ```

  * 🔑 We then call the `getToken` method in the `loggedIn` method to check if a token has been returned. If a user has been successfully logged in, a token will be returned from local storage. If not, no user is logged in:

    ```js
    loggedIn() {
      const token = this.getToken();
      return token ? true : false;
    }
    ```

    * 🔑 When a user logs in, we store the token in local storage. Then, when a user logs out, we remove the token. This makes sure our token is only held in storage while a user remains logged in:

    ```js
    login(idToken) {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/');
    }

    logout() {
      localStorage.removeItem('id_token');
      window.location.reload();
    }
    ```

  * 🔑 We also add a `getProfile` method that decodes the retrieved token and returns a string so the expiration date and the data in the token can be used:

    ```js
    getProfile() {
      return decode(this.getToken());
    }
    ```

  * We then export our `AuthService` so we can use this functionality in our `Login` page:

    ```js
    export default new AuthService()
    ```

* Open `23-Ins_Decode-JWT/client/src/App.js` in your IDE to demonstrate the following:

  * 🔑 To authenticate requests sent to the back end while a user is logged in, we must add a header containing the token in our requests. We use the `setContext()` function from Apollo Client to do this:

    ```js
    import { setContext } from '@apollo/client/link/context';
    ```

  * 🔑 We then use the `setContext()` method to retrieve an existing token from local storage and attach the JWT token to every request sent from the client. The back end will then use this information to verify the request:

    ```js
    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem('id_token');
      return {
        headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
    ```

* Open `23-Ins_Decode-JWT/client/src/pages/Login.js` in your IDE to demonstrate the following:

  * Using the functionality we just added, we execute the login mutation and receive a token in return. This token is then immediately stored using our `AuthService` functionality:

    ```js
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
          } catch (e) {
            console.error(e);
          }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What library do we use to decode the information in our token on the front end?

  * 🙋 We use the `jwt-decode` library to check what information a token holds and when it expires.

  * ☝️ How do we attach a token as a header to our front-end requests?

  * 🙋 We use the `setContext()` method to retrieve an existing token, if it exists, and attach it to our request.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Decode-JWT/README.md`.

### 17. Student Do: Decode JWT (15 min)

* Direct students to the activity instructions found in `24-Stu_Decode-JWT/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 User Is Immediately Logged Out of Application

  Work with a partner to resolve the following issue:

  * As a user, I want to log in to the application and remain logged in.

  ## Expected Behavior

  A user should be able to sign up or log in to their account and receive a JSON Web Token with a two-hour expiration.

  ## Actual Behavior

  The user's token is immediately deemed expired by the client-side application and is removed from localStorage, logging out the user.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. Navigate to `24-Stu_Decode-JWT/Unsolved` from the command line.

  2. Run `npm install`, `npm run seed`, and `npm run develop`.

  3. Open <localhost:3000/signup> in the browser to create a user and a session or log in as one of the seeded users at <localhost:3000/login>.

  4. When page redirects to the homepage, the user is still prompted to log in or sign up.

  ---

  ## 💡 Hints

  * Where do we store all of our client-side authentication functionality?

  * What unit of time measurement does the JSON Web Token use compared to JavaScript?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * When would you use JSON Web Tokens vs. cookies for user authentication?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Decode JWT (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with decoding and using a token on the front end? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `jwt-decode`

  * ✔️ `const decoded = decode(token)`

  * ✔️ `Date.now() / 1000`

* Open `24-Stu_Decode-JWT/Solved/client/src/utils/auth.js` in your IDE to demonstrate the following:

  * We have a bug that is causing our token to be deemed expired. As a result, our user is getting immediately logged out.

  * 🔑 The library that we use to decode the token's expiration time is `jwt-decode`. We see that the library has been successfully imported:

    ```js
    import decode from 'jwt-decode';
    ```

  * 🔑 We also need to apply the `jwt` library's `decode()` method to our token. It looks like the expiration time, as set by the server, is being retrieved and stored in a variable `decoded`:

    ```js
    const decoded = decode(token)
    ```

  * 🔑 Next, we look at the code used to compare the expiration date to the current time. For the comparison to work, the time units we use must be the same. Because `decoded.exp` is in seconds and the `Date.now()` method returns a value in milliseconds, we divide the value that `Date.now()` returns by `1000`. Then a valid comparison can be made:

    ```js
    if (decoded.exp < Date.now() / 1000)
    ```

  * Once a valid comparison is made, the user will be prevented from immediately logging out.

    ```js
    isTokenExpired(token) {
      const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
         localStorage.removeItem('id_token');
         return true;
        }
      return false;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we decode our token's expiration date and then check if the token is expired?

  * 🙋 We use the `jwt-decode` library to decode our token and return the expiration time, as set by our server. We then compare that time to the current time using `Date.now()` to see if the token is expired.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋We can refer to supplemental material, read the [Apollo Docs on setContext](https://www.apollographql.com/docs/react/api/link/apollo-link-context/) and the [NPM Docs on jwt-decode](https://www.npmjs.com/package/jwt-decode), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Context Resolver (5 min)

* Open `25-Ins_Resolver-Context/server/utils/auth.js` in your IDE and demonstrate the following:

  * While we can decode our token in the front end and attach it to a request as header, we are still missing the key functionality needed to verify our token and decode it before it reaches our resolver. To do that, we will have to return to our back-end code.

  * We import the `jsonwebtoken` library in our server's `auth.js` file:

    ```js
    const jwt = require('jsonwebtoken');
    ```

  * 🔑 Then, we add a `authMiddleware` function to check if there's a token with the request and, if it exists, verify and decode the token.

  * First, we describe the way our tokens can be received:

    ```js
    let token = req.body.token || req.query.token || req.headers.authorization
    ```

  * 🔑 Next, we use the `jsonwebtoken` library's `verify()` method to check if our token is valid and return the payload data:

    ```js
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    ```

  * We then return the `req` object and supply the request -- and the needed data -- to the resolver function:

    ```js
    return req;
    ```

* Open `25-Ins_Resolver-Context/server/server.js` in your IDE and demonstrate the following:

  * 🔑 We import the `authMiddleware` function from our `auth.js` file to use it in the context of our `ApolloServer` instance:

    ```js
    const { authMiddleware } = require('./utils/auth');
    ```

  * Previously, we passed `typeDefs` and `resolvers` to our `ApolloServer` instance.  Now, we add a `context` property and set the value to `authMiddleware`. This allows the incoming requests to be verified and the data returned from the `authMiddleware()` function to be made available to our resolvers:

    ```js
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
    })
    ```

* Open `25-Ins_Resolver-Context/server/schemas/resolvers.js` in your IDE and demonstrate the following:

  * To access the data in the context, we add a `context` parameter to our query and mutation resolvers. This will pass in the data from our token so that it can be used by the resolvers. Because parameters in resolvers are positional, the `context` parameter must always be in the third place:

    ```js
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we verify and decode a token before it reaches the resolver?

  * 🙋 We add a `context` option to our Apollo Server configuration and give it the value of `authMiddleware`. Then, in our `authMiddleware` method, we add the functionality needed to verify and decode our token. This will allow us to intercept any request to the server and check if there's a valid JWT before the request gets to the resolver.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Resolver-Context/README.md`.

### 20. Student Do: Context Resolver (15 min)

* Direct students to the activity instructions found in `26-Stu_Resolver-Context/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Profile Page Is Not Displaying the Logged-In User's Data

  Work with a partner to resolve the following issue:

  * As a user, I want to see my own thoughts when I visit the profile page.

  ## Expected Behavior

  When a logged-in user visits the `/me` route, they should see the thoughts they created.

  ## Actual Behavior

  The profile page displays a message informing the user they must be logged in to see the content.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. Navigate to `26-Stu_Resolver-Context/Unsolved` from the command line.

  2. Run `npm install`, `npm run seed`, and `npm run develop`.

  3. Open <localhost:3000/login> in the browser.

  4. Log in with the following test credentials, or create your own user and some thoughts:

     {
       "email": "lernantino@techfriends.dev",
       "password": "password10"
     }

  5. Navigate to <localhost:3000/me>.

  6. The app does not display the thoughts from this user.

  ## Assets

  The following image demonstrates the profile page's appearance and functionality:

  ![The logged-in user's profile page displays thoughts they've created and a form to create more thoughts.](./Images/01-screenshot.png)

  ---

  ## 💡 Hints

  * What is the difference between the server-side `QUERY_ME` and `QUERY_SINGLE_USER` query resolvers that would cause one to work and the other to not work?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could we implement authentication in a React app without using GraphQL?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Context Resolver (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using context to verify tokens and decode tokens before they reach the resolvers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `authMiddleware`

  * ✔️ `context: authMiddleware`

  * ✔️ `me: async (parent, args, context)`

* Open `26-Stu_Resolver-Context/Solved/server/utils/auth.js` in your IDE and explain the following:

  * We want a logged in user to see the thoughts they created, but it looks like we have a bug and the user is receiving a message that they are not logged in.

  * 🔑 Let's start by taking a looking in our server's `auth.js` file. When a request comes, we need a method to check if a token exists, and if so, verify and decode it. It looks like we have an `authMiddleware` method in place to handle this functionality and return a data object that can be used by our resolver:

    ```js
    authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
      if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
      }
      if (!token) {
        return req;
      }

      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log('Invalid token');
      }
      ```

* Open `26-Stu_Resolver-Context/Solved/server/server.js` in your IDE and explain the following:

  * 🔑 In our `ApolloServer` instance, we add a `context` option. The `context` holds our `authMiddleware` function and passes the data object that is returned to every resolver. This is how the user's login information that is sent by the client reaches the resolver:

    ```js
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
    });
    ```

* Open `26-Stu_Resolver-Context/Solved/schemas/resolvers.js` in your IDE and explain the following:

  * 🔑 To use the context data, we add a `context` parameter to our resolver. Because resolvers take in positional arguments, the context must always be third. In our broken code, `context` was second, so our login data was not being added in the right place:

    ```js
    me: async (parent, args, context) => {
    ```

  * 🔑 Now that the `context` parameter is in the third position, `context` can be used to check if `user` data exists and if so, find the user by id and then populate the thoughts associated with the user:

    ```js
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we provide a context to a resolver?

  * 🙋 First, we add a `context` option to our `ApolloServer` instance to hold the value of a function that returns an object or an object itself. Then, to use the object in our resolver, we add `context` as the third parameter.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on the context argument](https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_GitHub-Actions/README.md`.

### 22. Everyone Do: GitHub Actions (20 min)

* Open the [GitHub Docs Introduction to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions) in your browser and explain the following:

  * **GitHub Actions** are automated tasks or workflows that run when certain events are triggered, like pull requests. At their core, they are a series of commands that allow us to automate things like deployment, testing, and linting.

  * Using this guide, you will create a GitHub Action that automatically runs linting checks on any pull request made to the `main` or `develop` branches. Actions like this can especially benefit collaborative efforts like group projects.

* Direct students to the activity instructions found in `27-Evr_GitHub-Actions/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* Open your command line and demonstrate the following:

  * First we create a boilerplate React app:

    ```bash
    npx create-react-app gh-actions-demo
    ```

  * After a few minutes, the `create-react-app` utility will finish, and we move on to creating the GitHub Action.

  * 🔑 We set up the GitHub Action locally and then push it to GitHub. As a result, we still need to install dependencies locally to ensure that they are added to the `package.json` file. To do this, we change into the `gh-actions-demo` folder and run the following command:

    ```sh
    npm i eslint --save-dev
    ```

  * With `eslint` installed as a developer dependency, we add a new script to the `package.json` file that allows us to run linting checks with a single command:

    ```json
    "scripts": {
        "eslint": "eslint src"
    },
    ```

  * Next, we create a GitHub repository named `gh-actions-demo`, and we add the remote to the local repository:

    ```sh
    git remote add origin git@github.com:USERNAME/gh-actions-demo.git
    git branch -M main
    ```

  * We also add and commit all of the files and push to the remote repository:

    ```sh
    git add -A
    git commit -m "Adding existing files"
    git push -u origin main
    ```

  * We build the GitHub workflow by creating directories called `.github` and `.workflows`, with a `main.yml` file inside the `.workflows` directory.

  * Then we add the workflow to the `main.yml` file, telling GitHub which actions to execute when a specific trigger happens:

    ```yml
    #  Name of workflow
    name: Lint workflow
    # Trigger workflow on all pull requests
    on:
        pull_request:
            branches:
                - dev
                - main
    # Jobs to carry out
    jobs:
        test:
            # Operating system to run job on
            runs-on: ubuntu-latest
            # Steps in job
            steps:
                # Get code from repo
                - name: Checkout code
                  uses: actions/checkout@v1
                # Install NodeJS
                - name: Use Node.js 12.x
                  uses: actions/setup-node@v1
                  with:
                      node-version: 12.x
                # Build the app
                - name: 🧰 install deps
                  run: npm install
                - name: Run lint
                  run: npm run eslint
    ```

  * After that, we save the changes, commit all the files, and push to GitHub once again.

  * With the workflow in place in the repository, we can now create a new branch, make a pull request to `dev` or `main`, and witness the workflow in action!

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
