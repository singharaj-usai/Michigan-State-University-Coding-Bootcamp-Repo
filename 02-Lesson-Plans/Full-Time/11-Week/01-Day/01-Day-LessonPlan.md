# 11.1 Full-Time Lesson Plan: GraphQL and MERN

## Overview

This class covers GraphQL, including using the Apollo Server to set up `typeDefs` and `resolvers`, making queries and using mutations, and using the Apollo Sandbox. The three-layer MERN architecture, setting up a MERN application and the `useQuery` hook are also discussed.

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Apollo-Server` through `14-Stu_useQuery`.

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to GraphQL and the MERN framework may face.

* Today's slide deck includes an introduction to the MERN framework. This is a great opportunity to remind students of how far they have come since starting with HTML and CSS and encourage them to start thinking about how they can apply their new skills to their final, full-stack projects and their future careers.

* The activities in this module will require some familiarity with GraphQL and the Apollo Sandbox tool. If you've never worked with GraphQL or the Apollo Sandbox tool, please refer to the [Apollo Docs on Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox/).

* Apollo Sandbox is an Apollo Studio Explorer tool used for local development and replaces the now-deprecated GraphQL Playground. To use Sandbox, you do not have to register for an Apollo account. Instead, Sandbox can be accessed on the same URL as the GraphQL server. For most activities during today’s class, you will do the following to start Sandbox: start the app using `npm install`, `npm run seed`, and `npm start`. Then, navigate to `localhost:3001/graphql` in the browser to view Sandbox in the browser.

* Today's activities use Apollo Server 3, which include a number of breaking changes from Apollo Server 2. Apollo Server 3 requires `graphql` 15.3.0 or later to run successfully. For more information about migrating to Apollo Server 3, including bumped dependencies and removed integrations, refer to [Apollo Docs on migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/).

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* For students who need help opening up the apps used in today's activities or accessing the Apollo Sandbox, step-by-step instructions are found in `02-Stu_Apollo-Server/README.md`.

* The second Stoking Curiosity is intentionally structured to allow students to think about what an API is and how it is used in a full-stack MERN app. Rather than provide a quick answer to the initial question, encourage students to share their observations in their own words and frame their observations in the context of what they are learning. This will help solidify their understanding of this important concept.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Explain how the client, server, and database layers work together to build a full-stack MERN app.

* Integrate an Apollo Server with Express.js to create GraphQL server.

* Write queries using the GraphQL query language.

* Design a schema using `typedefs` and `resolvers`.

* Use mutations to modify server-side data.

* Create a full-stack MERN app for use in both development and production environments.

* Use the `useQuery` Apollo Hook to fetch and update data.

## Slide Deck

* [Module 21 Slide Deck](https://docs.google.com/presentation/d/15HFGsli3B1UvM8-khsTi7-DjkN1zX8mpLULMn7oGwX4/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                             | Duration |
|---     |---  |---                                        |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity            | 0:10     |
| 10:10AM| 2   | Instructor Demo: Apollo Server            | 0:05     |
| 10:15AM| 3   | Student Do: Apollo Server                 | 0:15     |
| 10:30AM| 4   | Instructor Review:  Apollo Server         | 0:10     |
| 10:40AM| 5   | Instructor Demo: Queries                  | 0:05     |
| 10:45AM| 6   | Student Do: Queries                       | 0:15     |
| 11:00AM| 7   | Instructor Review: Queries                | 0:10     |
| 11:10AM| 8   | Instructor Demo: typeDefs and Resolvers   | 0:05     |
| 11:15AM| 9   | Student Do: typeDefs and Resolvers        | 0:15     |
| 11:30AM| 10  | Instructor Review: typeDefs and Resolvers | 0:10     |
| 11:40AM| 11  | Instructor Demo: Query Arguments          | 0:05     |
| 11:45AM| 12  | Student Do:  Query Arguments              | 0:15     |
| 12:00PM| 13  | BREAK                                     | 0:30     |
| 12:30PM| 14  | Instructor Review: Query Arguments        | 0:10     |
| 12:40PM| 15  | Instructor Demo: Mutations                | 0:05     |
| 12:45AM| 16  | Student Do:  Mutations                    | 0:15     |
| 1:00PM | 17  | Instructor Review:  Mutations             | 0:15     |
| 1:15PM | 18  | Instructor Do: Stoke Curiosity            | 0:10     |
| 1:25PM | 19  | Instructor Demo: MERN Setup               | 0:05     |
| 1:30PM | 20  | Student Do: MERN Setup                    | 0:15     |
| 1:45PM | 21  | Instructor Review:  MERN Setup            | 0:10     |
| 1:55PM | 22  | Instructor Demo: useQuery                 | 0:05     |
| 2:00PM | 23  | Student Do: useQuery                      | 0:15     |
| 2:15PM | 24  | Instructor Review: useQuery               | 0:15     |
| 2:30PM | 25  | END                                       | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [Module 21 slide deck](https://docs.google.com/presentation/d/15HFGsli3B1UvM8-khsTi7-DjkN1zX8mpLULMn7oGwX4/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **What Is the MERN Stack?**: The MERN stack is a group of four technologies that, when used together, create our “stack”. There are other stacks besides MERN, but the MERN stack uses technologies we already learned to quickly build a full-stack app. The four MERN technologies are: MongoDB, Express.js, React.js, and Node.js.

  * **How Does the MERN Stack Work?**: The MERN stack has a three-layered architecture based on the Model-View-Controller design pattern. Each interconnected layer performs a specific function in the application.

  * **The Client Layer: React.js**: React.js is a front-end JavaScript library that allows us to turn reusable components into interactive user interfaces. The client layer controls what the user sees and how the user interacts with data. In the client layer, data retrieved from the database can be displayed. Users can also input data using the user interface.

  * **The Server Layer: Express.js and Node.js**: Express.js is a web framework for Node.js that handles requests and connects the client layer with the database layer. The server layer defines how data is handled in our apps and routes it between the database and client layers. The server layer listens for events from the client layer and then responds by executing methods that save and retrieve data from the database layer.

  * **The Database Layer: MongoDB**: MongoDB is a general purpose, document-based, distributed NoSQL database. The database layer is used to store all the data needed for your application to function. MongoDB stores JSON natively (technically BSON) making it work easily with JavaScript apps.

* After you run through the slides, preview the mini-project for the class. In the command line, navigate to `28-Stu_Mini-Project/Main` and run `npm install`, `npm run seed`, and `npm run develop`. Be sure to have a MongoDB instance running!

* Open `http://localhost:3000/` to demonstrate the following:

  * This app is built using the MERN framework and uses technologies that we have already learned: React.js, Node.js, Express.js, and MongoDB.

  * When we open the app, everything we see is the client layer. The **client layer**, or front end, is the how the user inputs and views data.

  * When we interact with the app by selecting technologies for a matchup or voting on existing matchup pairs, we trigger an event that is handled on the backend. The backend contains the logic for handling data and is not seen by the user.

  * The **server layer** listens for events triggered by the client. For example, when we vote or select a pair of technologies to create a matchup using the user interface, the server layer responds to that event by executing a function to save the user generated data in the database.

  * The server layer can also retrieve data from the **database layer**.

  * When we click on View All Matchups, the server layer executes a method to retrieve the requested data from the database layer. The populated list of matchups is displayed to the user.

  * This three-layer architecture makes it easier to store, manipulate, and represent data. This makes the MERN stack an ideal solution for highly interactive apps and those that require data to be fetched quickly and easily.

  * During today's class, we will focus on fetching and storing data by using an add-on technology that builds on our existing Express.js server.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to structure a full-stack app by using the MERN stack.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 The MERN stack relies on JavaScript and technologies that we have learned throughout the course: React.js, MongoDB, Express.js, and Node.js.

  * ☝️ How does this project relate to your career goals?

  * 🙋 The MERN framework uses the MVC pattern, a pattern common in software development, to connect a front end, back end, and database to create a full-stack app. It also uses JavaScript technologies commonly used in development on the job. Learning MERN is also a great way to become familiar with full-stack web development and gain skills in building interactive apps that are scalable and capable of handling large data sets.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Apollo Server (5 min)

* Navigate to `01-Ins_Apollo_Server` in your command line and run `npm install`, `npm run seed`, and `npm start`.

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * At the heart of interactive full-stack apps is the need to retrieve data quickly and accurately.

  * 🔑 We use GraphQL to efficiently and precisely fetch the data queried in a single request.

  * 🔑 **GraphQL** is a query language that allows us to build even complex queries quickly and concisely, helping to make sure our queries fetch data -- and only the data we need -- quickly.

  * Apollo Sandbox is an Apollo Studio Explorer tool and is a great way to to visually explore how GraphQL can be used to request and fetch data.

  * 🔑 Using the Apollo Sandbox, we can enter a query to retrieve data from our database. This query will return the names of all the classes in our database:

     ```gql
     query classes{
       classes {
         name
       }
     }
     ```

  * Next, when we click the rectangular play button at the top of the screen we see a JSON object that contains only the data we requested in the response field on the left. This ability to easily write specific queries and return precise results is one of the main advantages of GraphQL.

  * We will be using the Apollo Sandbox in today's class to test our code amd make sure our queries work.

  * 🔑 To use GraphQL, we will need to set up a GraphQL server. Apollo Server is a popular GraphQL server that can be used as an add-on to an existing Node.js and Express.js server.

* Open `01-Ins_Apollo_Server/server.js` in your IDE and demonstrate the following:

  * To add Apollo Server to our existing Express.js and Node.js server structure, we run `npm install apollo-server-express` and import the `ApolloServer` class:

     ```js
     const { ApolloServer } = require('apollo-server-express');
     ```

  * We must also import the schemas directory. GraphQL relies on a schema bundle that includes two parts: the `typeDefs`, which defines the schema, and `resolvers`, or functions, that are responsible for populating data for a single field in the schema:

     ```js
     const { typeDefs, resolvers } = require('./schemas');
     ```

  * We create a new instance of the `ApolloServer` class. The `ApolloServer` class instance takes both `typeDefs` and `resolvers` as parameters:

     ```js
     const server = new ApolloServer({
       typeDefs,
       resolvers
     });
     ```

  * Next, we create an async function that will take in our `typeDefs` and `resolvers` and start our Apollo Server instance.

    ```js
    const startApolloServer = async (typeDefs, resolvers) => {...}
    ```

  * Inside the `startApolloServer` function, we use `await` to start our server. Don't forget, we must wrap `await` inside an async function. Otherwise, we will get an error!

    ```js
    await server.start()
    ```

  * We call the `.applyMiddleware()` method to integrate Express.js with the Apollo Server and connect the schema. This will enable our app to use GraphQL:

     ```js
     server.applyMiddleware({ app });
     ```

  * Since our Apollo Server works together with Express, we also create an instance of our Express app inside our async function and use it. Using an Express server gives us more flexibility in our server setup and allows additional configurations.

    ```js
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    ```

  * Then, we start our database and call `app.listen()` to listen the connections on our specified port.

    ```js
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
      })
    };
    ```

  * Since, we can enclosed our functionality in an async function, don't forget to call it at the bottom of of the file to run the scripts!

    ```js
    startApolloServer(typeDefs, resolvers);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 To integrate GraphQL in our MERN apps, we must connect a GraphQL schema to our Express.js server. We do this by adding an Apollo Server to our existing `service layer` and importing our schema.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Apollo_Server/README.md`.

### 3. Student Do: Apollo Server (15 min)

* Direct students to the activity instructions found in `02-Stu_Apollo_Server/README.md`.

* Break your students into pairs that will work together on this activity.

     ```md
     # 📐 Add Comments to Implementation of an Apollo Server

     Work with a partner to add comments describing the functionality of the code found in the following files:

     * [server.js](./Unsolved/server.js)

     * [schemas/typeDefs.js](./Unsolved/schemas/typeDefs.js)

     * [schemas/resolvers.js](./Unsolved/schemas/resolvers.js)

     ## 📝 Notes

     To Launch Apollo Sandbox, follow these steps:

     1. In the command line, navigate to `02-Stu_Apollo-Server/Unsolved`.

     2. Run `npm install`.

     3. With a MongoDB instance running, run `npm run seed` to seed the data.

     4. To start the server and launch the app, run `npm start`.

     5. To launch the Apollo Sandbox, open <localhost:3001/graphql> in the browser.

     Refer to the documentation:

     * [Apollo Docs on getting started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)

     * [Apollo Docs on integrating with Node.js middleware](https://www.apollographql.com/docs/apollo-server/integrations/middleware/)

     ---

     ## 🏆 Bonus

     If you have completed this activity, work through the following challenge with your partner to further your knowledge:

     * What are the pros and cons of GraphQL vs. REST?

     Use [Google](https://www.google.com) or another search engine to research this.
     ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Apollo Server (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with integrating Apollo Server? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `require('apollo-server-express')`

  * ✔️ `require('./schemas')`

  * ✔️ `new ApolloServer({typeDefs,resolvers})`

  * ✔️ `applyMiddleware()`

  * ✔️ `typeDefs`

  * ✔️ `resolvers`

    * ✔️ `startApolloServer` async function

* Open `02-Stu_Apollo-Server/Solved/server.js` in your IDE and explain the following:

  * 🔑 Apollo Server is a library that we use with an existing Express.js server. We require the `apollo-server-express` dependency and import the `ApolloServer` class:

     ```js
     const { ApolloServer } = require('apollo-server-express');
     ```

  * 🔑 We also import the `typedefs` and `resolvers` from the `schemas` directory:

     ```js
     const { typeDefs, resolvers } = require('./schemas');
     ```

  * 🔑 Next, we create a new instance of the `ApolloServer` class named `server`. This instance takes both parts of the schema -- the `typedefs` and `resolvers` -- as parameters, and allows us to use our schema to handle our data:

     ```js
     const server = new ApolloServer({
       typeDefs,
       resolvers
     });
     ```

  * We call the `.applyMiddleware()` method to update Express.js to use Apollo Server. Our GraphQL server is now set up and ready to use with our schema:

     ```js
     server.applyMiddleware({ app });
     ```

* Open `02-Stu_Apollo-Server/Solved/schemas/typeDefs.js` in your IDE and explain the following:

  * 🔑 We use `typeDefs` to define our schema and the types it contains.

  * Most defined types are objects. Each object holds a collection of fields that describes the data. The `Class` object will have fields for an id, name, and building as well as the credit hours for the course:

     ```js
      type Class {
       _id: ID
       name: String
       building: String
       creditHours: Int
     }
     ```

  * We also have access to another type, Query. **Query types** define the entry point of every GraphQL query, and control what data can be accessed. The `classes` query type allows us to query an array of all the `Class` objects:

     ```js
     type Query {
       classes: [Class]
     }
     ```

* Open `02-Stu_Apollo-Server/Solved/schemas/resolvers.js` in your IDE and explain the following:

  * 🔑 A **resolver** is a function that's responsible for populating the data that has been defined by our typeDefs.

* The activities in this module will require some familiarity with GraphQL and the Apollo Sandbox tool. If you've never worked with GraphQL or the Apollo Sandbox tool, please refer to the [Apollo Docs on Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox/).

* Some activities in this module rely on the Apollo Sandbox. Students do not need to install a separate tool to access this technology. To use the Apollo Sandbox, simply start the app by using `npm install`, `npm run seed`, and `npm start` and then point to `localhost:3001/graphql` in the browser.

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version.](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

     ```js
     const resolvers = {
       Query: {
         classes: async () => {
         return await Class.find({});
         }
       }
     };
     ```

* We will use the Apollo Sandbox to explore queries, typeDefs, and resolvers in greater depth in the next activities.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use Apollo Server to integrate GraphQL into our app?

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Queries (5 min)

* Navigate to `03-Ins_Queries` in your command line and run `npm install`, `npm run seed`, and `npm start`.

  * To open the Apollo Sandbox when using Apollo Server, we start up our app and navigate to `localhost:3001/graphql`. No further setup is needed.

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * 🔑 We click on the `schema` tab on the left to inspect our app's schema. If the server has been correctly set up, we should see the schema's object and query types auto-populate.

  * 🔑 The `object type` shows us the fields that we have access to in our query and the type of data it holds. Fields can be strings, integers, or even a queryable field that holds another object.

  * The Class object has an `id`, `name`, `building`, and `creditHours` field. In addition, the `professor` field is a queryable field that holds a singe `Professor` object:

     ```js
     type Class {
       _id: ID
       name: String
       building: String
       creditHours: Int
       professor: Professor
     }
     ```

  * 🔑 The `query type` tells us what data we can access and the entry point to that data. To access the array of `Class` objects, we use the `classes` entry point:

     ```js
     type Query {
       schools: [School]
       classes: [Class]
       professors: [Professor]
     }
     ```

  * 🔑 To create a query, we start by entering the name of the entry point we want to use. Because we want to work with `Class` objects, we use the `classes` entry point. We then list the fields we want included in our results. The `Class` object contains a `name` field, so we list the field `name` inside the brackets:

     ```gql
     query classes {
       classes {
       name
       }
     }
     ```

  * We click on the play button to run the query. A list containing the name of each class is returned.

  * 🔑 To access the professor data in the same query, we start by adding `professor` to the list of fields. Then, to display data from the `Professor` object, we use a sub-query to list the names of the fields from the `Professor` object. The Apollo Sandbox makes this simple by providing a list of the names of the fields we can use:

     ```gql
     query classes {
      classes {
        name
        professor {
         name
        }
      }
     }
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we build a query using GraphQL?

  * 🙋 GraphQL is organized using types and fields. The query type gives us the entry point for our query. The object type provides the fields that we can use to retrieve data. We start by listing the entry point for the data we want to use. Then, we add the fields we want included in our results.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Queries/README.md`.

### 6. Student Do: Queries (15 min)

* Direct students to the activity instructions found in `04-Stu_Queries/README.md`.

* Break your students into pairs that will work together on this activity.

     ```md
     # 🏗️ Write GraphQL Queries for Front-End Team

     Work with a partner to implement the following user story:

     * As a developer, I want a list of queries that I will need to use on the front end.

     ## Acceptance Criteria

     * It's done when I have a GraphQL query that returns the following:

       * Every school's name, location, and student body count

       * Every class's name

       * Every professor's name

     * It's done when I have a GraphQL query that returns the following:

       * Every class's name, credit hours, and building number

       * Every professor's name and student review score

     * It's done when I have a GraphQL query that returns the following:

       * Every professor's ID, name, student review score, office hours, and office building number

     ---

     ## 💡 Hints

     * What tools within the Apollo Sandbox can reveal the data that is available to you?

     ## 🏆 Bonus

     If you have completed this activity, work through the following challenge with your partner to further your knowledge:

     * What other GraphQL IDEs can you use besides the built-in Sandbox?

     Use [Google](https://www.google.com) or another search engine to research this.
     ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Queries (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with GraphQL queries? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Types and fields

  * ✔️ Queryable fields

  * ✔️ Query type

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * 🔑 GraphQL uses types and fields to organize data. We open the `schema` app to view the entry points for our data as well as the fields contained in each object. These will be used to write our queries.

  * 🔑 To query the `Professor` data, we use the `professors` entry point. Then we list the fields on the `Professor` object that we want included in the results. This query returns the `id`, `name`, `student score`, `office hours`, and `office location` for each professor:

     ```gql
     query professors {
       professors {
         _id
         name
         studentScore
         officeHours
         officeLocation
       }
     }
     ```

  * 🔑 We can also write more complex queries. When we inspect the `Class` object, we see that it contains a queryable field that can retrieve a single `Professor` object. This makes it easy to access the `Professor` data and `Class` data by using a single query:

     ```js
     type Class {
       _id: ID
       name: String
       building: String
       creditHours: Int
       professor: Professor
     }
     ```

  * 🔑 We access the array of Class objects using the `classes` entry point and list the names of the fields that we want retrieved. Then we list the fields from the `Professor` object that we want retrieved.

  * This query returns each class object and the associated professor's name and student score:

     ```gql
     query classes {
       classes {
         name
         creditHours
         building
         professor {
           name
           studentScore
         }
       }
     }
     ```

  * 🔑 We can also nest queries easily. The entry point `schools` gives us access to the array of `School` objects. The `School` object also includes a queryable field that returns an array of all the `Class` objects:

     ```js
     type School {
       _id: ID
       name: String
       location: String
       studentCount: Int
       classes: [Class]
     }
     ```

  * Using `schools` as our entry point, we can return data from the `School`, `Class`, and `Professor` objects all in a single query because `School` gives us access to the `Class` objects and the `Class` objects gives us access to the `Professor` object:

     ```gql
     query schools {
       schools {
         name
         location
         studentCount
         classes {
           name
           professor {
          name
           }
         }
       }
     }

     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use schemas to help us write our queries?

  * 🙋 The schema defines the data objects and the entry points to access that data. When we write a query, we start with the entry point used to access the data and then list the fields from our data object that contains the data we need.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [GraphQL Docs on queries and mutations](https://graphql.org/learn/queries/) and the [Apollo Docs on Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: typeDefs and Resolvers (5 min)

* Open `05-Ins_TypeDefs-Resolvers/schemas/typeDefs.js` in your IDE and demonstrate the following:

  * 🔑 For our queries to work, we must define our types to provide access to the data that we will need.

  * 🔑 Each object contains a collection of related fields that return a particular type of data. These fields determine what data can be accessed from the database and provide a shape to our data.

  * The `Professor` object contains fields that will return data containing  `name`, `id`, `officeHours`, `officelocation`, and `studentScore` data. These fields should match how the data in your database is structured:

     ```js
     type Professor {
       _id: ID
       name: String
       officeHours: String
       officeLocation: String
       studentScore: Float
     }
     ```

  * 🔑 We also use fields to define relationships between objects.

  * The `Class` object needs to access the information about a single related `Professor` object. We use a queryable field to retrieve a single `Professor` object. When the data from the `Class` object is queried, the data from the corresponding `Professor` object will also be available:

     ```js
       type Class {
       _id: ID
       name: String
       building: String
       creditHours: Int
       professor: Professor
     }
     ```

  * Likewise, the `School` object needs access to all of the `Class` objects. We use a queryable field to retrieve an array of all the `Class` objects:

     ```js
     type School {
       _id: ID
       name: String
       location: String
       studentCount: Int
       classes: [Class]
     }
     ```

  * 🔑 To access our data, we must also define an entry point. These entry points control the data that the query has access to. The `professors` entry point is used to access the array of all `Professor` objects. Likewise, the `schools` entry point controls the access to the array of all the `School` objects:

     ```js
     type Query {
       schools: [School]
       classes: [Class]
       professors: [Professor]
     }
     ```

* Open `05-Ins_TypeDefs-Resolvers/schemas/resolvers.js` in your IDE and demonstrate the following:

  * To respond to a query, we must also write a function that determines how the data for each field is populated when we make a query.

  * 🔑 Because we are using Mongoose, we must import our models. These models create and read data from the MongoDB database:

     ```js
     const { School, Class, Professor } = require('../models');
     ```

  * 🔑 When we write a query using the `professors` entry point, we call `.find()` on the `Professor` model that we imported to return all the data contained in the model instance, or document. This populates the fields:

     ```js
     professors: async () => {
       return await Professor.find({});
     }
     ```

  * We can also write a resolver that populates the data of a queryable field.

  * 🔑 The `.populate()` method allows us to reference documents in other MongoDB collections easily. We use `.populate()`, to fetch data for queryable field `professor`:

     ```js
     classes: async () => {
       return await Class.find({}).populate('professor');
     }
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 To query data with GraphQL, we need a schema that will define the shape of the data. The `object type` contains fields that will determine what type of data will be returned. The `query type` defines the entry points. Then, to make our queries work, we write `resolvers`, which are functions used to populate the data fields.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_TypeDefs-Resolvers/README.md`.

### 9. Student Do: typeDefs and Resolvers (15 min)

* Direct students to the activity instructions found in `06-Stu_TypeDefs-Resolvers/README.md`.

* Break your students into pairs that will work together on this activity.

     ```md
     # 🏗️ Update Professors to Include Their Classes

     Work with a partner to implement the following user story:

     * As a developer, I want to be able to query for professors and their classes at the same time.

     ## Acceptance Criteria

     * It's done when a query in the Apollo Sandbox is able to return data similar to the following:

       "professors": [
         {
           "name": "Rebecca Watts",
           "classes": [
             {
               "name": "Introduction to Computational Thinking"
             },
             {
               "name": "User Interface Design"
             },
             {
               "name": "Internet Architecture and Protocols"
             }
           ]
         }
       ]
     ---

     ## 💡 Hints

     * What back-end components make up a complete GraphQL schema?

     ## 🏆 Bonus

     If you have completed this activity, work through the following challenge with your partner to further your knowledge:

     * What other types can be used in a GraphQL schema?

     Use [Google](https://www.google.com) or another search engine to research this.
     ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: typeDefs and Resolvers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with typeDefs and resolvers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `typeDef`

  * ✔️ `resolver`

  * ✔️ `populate()`

* Open `06-Stu_TypeDefs-Resolvers/Solved/schemas/typeDefs.js` in your IDE and explain the following:

  * 🔑 The `Professor` object contains a queryable field that returns an array of `Class` objects:

     ```js
     type Professor {
       _id: ID
       name: String
       officeHours: String
       officeLocation: String
       studentScore: Float
       classes: [Class]
     ```

  * 🔑 To access the array of `Professor` objects, we use the `professors` entry point:

     ```js
     type Query {
       schools: [School]
       classes: [Class]
       professors: [Professor]
     }
     ````

* Open `06-Stu_TypeDefs-Resolvers/Solved/schemas/resolvers.js` in your IDE and explain the following:

  * We write a query using the `professors` entry point and call `.find()` on the `Professor` model we imported to populate the data:

     ```js
     professors: async () => {
       return await Professor.find({})
     }
     ```

  * 🔑 We then call the `.populate()` method to access the class data needed so we can query the array of `Class` objects. The data for both the professors and associated classes will be returned:

     ```js
     professors: async () => {
       return await Professor.find({}).populate('classes');
     }
     ```

* Navigate to `06-Stu_TypeDefs-Resolvers/Solved` in your command line and run `npm install`, `npm run seed`, and `npm start`.

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * To test if our `typeDefs` and `resolvers` work, we write a query using the `professors` entry point to return data that contains both the professor's name and the name of each class they teach:

     ```gql
     query professorsClasses {
       professors{
         name
         classes {
           name
         }
       }
     }
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we need to write resolvers to query our data?

  * 🙋 Resolvers are the functions that determine how the data fields are populated. Without resolvers, we wouldn't have any data to work with!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on resolvers](https://www.apollographql.com/docs/apollo-server/data/resolvers/) and the [Apollo Docs on schema basics](https://www.apollographql.com/docs/apollo-server/schema/schema/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Query Arguments (5 min)

* Navigate to `07-Ins_Query-Arguments` in your command line and run `npm install`, `npm run seed`, and `npm start`.

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * 🔑 We can also create more specific queries by passing arguments.

  * 🔑 Up until now, we have been using an entry point that returns an array of all the objects and returns one or more fields in each object. For example, we use the `classes` entry point to return the id of all the `Class` objects:

     ```gql
     query classIDs {
       classes {
       _id
       }
     }
     ```

  * Often, though, we want to query a more specific result like a single class.

  * When we open up the schema tab, we see a new entry point has been defined in the query type. The `class` entry point provides access to a single `Class` object. Note that single objects don't have brackets around them!

     ```js
     class(id: ID!): Class
     ```

  * 🔑 The class entry point also has an argument that allows us to define the id of the class object we want to fetch:

     ```js
     class(id: ID!)
     ```

  * The `ID!` is important here. The `ID` specifies the type of data that must be returned. The exclamation point `!` means that the data is required. Because we want our resolver function to search by ID for a particular class object, if that data is not provided, the search will not work.

  * 🔑 To create a query, we start with the `class` endpoint and then specify the id of the specific `Class` object we want queried. (**Note**: the query will not yet return data):

     ```gql
     query classInline {
       class(id: "1000") {
         name
       }
     }
     ```

  * The data passed in the argument is then used by the resolver to retrieve the specific class. Because no resolver has been written, no data is returned. In the next activity, you will be building that resolver to make it work.

  * 🔑 To make our queries more durable, we can also add a variable. Variables are identified by a dollar sign `$` and allow us to reuse the same query over and over:

     ```gql
      query classVariable($id: ID!) {
       class(id: $id) {
         name
       }
     }
     ```

  * We start by requiring our variable and setting the data type of the variable to the required type. For an id, it is the ID type. We also want to make sure that we only run the query if the variable is not null, so we add the exclamation point:

     ```gql
     query classVariable($id: ID!)
     ```

  * We then use the `class` entry point, and assign the `id` a value as we did before. In this case, we set the value of `id` to be the value held in the variable.

  * In our completed apps, the value for the variable is typically provided by the client. However, we can test the query using the Apollo Sandbox.

  * We enter the variable name and pass a value -- in JSON -- in the Query Variables pane, to test the query. We use just the variable name, not the `$` identifier:

     ```js
     {
       "id": "1000"
     }
     ```

  * This variable provides the information needed by the resolver to fetch the data. Our next task is to set up the resolver so our queries work.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we add an argument to our query?

  * 🙋 An argument allows us to write more specific queries. When we add an argument to our query, the argument is then passed to our resolver function. The resolver can then use that information to make a more targeted search.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Query-Arguments/README.md`.

### 12. Student Do: Query Arguments (15 min)

* Direct students to the activity instructions found in `08-Stu_Query-Arguments/README.md`.

* Break your students into pairs that will work together on this activity.

     ```md
     # 📖 Create a Class Resolver to Return Individual Classes

     Work with a partner to implement the following user story:

     * As a developer, I want to be able to query for individual classes.

     ## Acceptance Criteria

     * It's done when the following GraphQL query returns a single class object:

       query class($id: ID!) {
         class(id: $id) {
           name
           professor {
             name
           }
         }
       }

     ## 📝 Notes

     Refer to the documentation:

     [Apollo Docs on handling arguments](https://www.apollographql.com/docs/apollo-server/data/resolvers/#handling-arguments)

     ---

     ## 💡 Hints

     * What database query would retrieve a single object?

     ## 🏆 Bonus

     If you have completed this activity, work through the following challenge with your partner to further your knowledge:

     * How do you differentiate between required and optional arguments?

     Use [Google](https://www.google.com) or another search engine to research this.
     ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: Query Arguments (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with query arguments? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `args`

  * ✔️ `findById()`

  * ✔️ `populate()`

* Open `08-Stu_Query-Arguments/Solved/schemas/resolvers.js` in your IDE and explain the following:

  * When we use a query with arguments, we create an object that holds the information we need to pass to our resolver.

  * 🔑 To have access to that object, our resolver function uses `args`.

  * Because `args` is the second of the positional parameters that the resolver can take, we list `args` second so it keeps its place:

     ```js
     class: async (parent, args) => {
     ```

  * 🔑 To return the data we need, we call the method `findById()` on the `Class` model we imported to read data from the MongoDB database. The `findById()` method is a built-in method on Mongoose models that allows us to easily search for a single method by `id`. Because we want the data in the `id`, we use `args.id`:

     ```js
     return await Class.findById(args.id);
     ```

  * 🔑 To access the related `Professor` object, we use `populate()`:

     ```js
     return await Class.findById(args.id).populate('professor');
     ```

* Navigate to `08-Stu_Query-Arguments/Solved` in your command line and run `npm install`, `npm run seed`, and `npm start`.

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * 🔑 We use the `classes` entry point to query all the `Class` objects using the field `name` and `_id`. This will give us a list of the the names and ids for all of the classes:

     ```gql
     query getAllClassIdNames {
       classes {
         name
         _id
       }
     }
     ```

  * We copy one of the ids returned:

     ```json
     "_id": "Copy_This_ID"
     ```

  * In the Query Variables pane, we give the value of the `id` variable the value of the id that we just copied, and we make sure that both `id` and the id that we just copied are surrounded by quotes:

     ```json
     {
       "id" : "Add_Copied_ID_Here"
     }
     ```

  * We enter the query using a variable into the query editor:

     ```gql
     query class($id: ID!) {
       class(id: $id) {
         name
         professor {
           name
         }
       }
     }
     ```

  * We click the play button. If our resolver is successful, both the class and professor's name will be fetched.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we get more specific results using arguments?

  * 🙋 Arguments allow us to query for more specific data by passing information from our query to our resolver. For example, we can search for a specific `id` by passing the information about that `id` to the resolver, which then can use that information to search the database for that specific object using that data.

  * ☝️ Why use variables in our queries?

  * 🙋 Variables allow us to make our queries more durable. For example, by using a variable when searching by id, we only had to change the value of the variable to search for another object. If we didn't have variables, we would have to write a whole new query.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on handling arguments](https://www.apollographql.com/docs/apollo-server/data/resolvers/#handling-arguments), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Mutations (5 min)

* Open `09-Ins_Mutations/schemas/typeDefs.js` in your IDE and explain the following:

  * GraphQL does more than retrieve existing data. We can also use GraphQL to write data as well.

  * 🔑 The mutation type is similar to the query type. However, instead of providing an entry point to read an object or objects, the mutation type provides an entry point to write an object or objects.

  * 🔑 We create an entry point `addSchool` and set the object that it will write to to be a `School` object.

  * 🔑 We also pass in arguments that define the fields that will be written. This information will be passed to the resolver.

     ```js
       type Mutation {
         addSchool(name: String!, location: String!, studentCount: Int!): School
       }
     ```

* Open `09-Ins_Mutations/schemas/resolvers.js` in your IDE and explain the following:

  * 🔑 We enter the arguments that we wanted passed in as a parameter in the same order as we defined the fields in the mutation type:

     ```js
     addSchool: async (parent, { name, location, studentCount }) => {
     ```

  * 🔑 We call `create()` on the imported `School` model to write to our MongoDB database:

     ```js
     return await School.create({ name, location, studentCount });
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 A mutation is way to write data using GraphQL. We use the mutation type to define the entry point to the data to be written and a mutation resolver to provide the functionality to write the data to our database.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Mutations/README.md`.

### 16. Student Do: Mutations (15 min)

* Direct students to the activity instructions found in `10-Stu_Mutations/README.md`.

* Break your students into pairs that will work together on this activity.

     ```md
     # 🐛 Class Mutation Does Not Show that Object Was Updated

     Work with a partner to resolve the following issue:

     * As a developer, I want access to updated values so the front end can be updated accordingly.

     ## Expected Behavior

     Updating a class's building number should show the new value in the returned object.

     ## Actual Behavior

     The returned object still shows the old building number.

     ## Steps to Reproduce the Problem

     Follow these steps to reproduce the problem:

     1. In the command line, navigate to `10-Stu_Mutations/Unsolved`.

     2. Run `npm install`, `npm run seed`, and `npm start`.

     3. Open <localhost:3001/graphql> in the browser.

     4. Set the following variables in the Query Variables panel:

       {
         "id": "<insert ID of a class here>",
         "building": "AA"
       }

     5. Run the following mutation:

         mutation updateClass($id: ID!, $building: String!) {
           updateClass(id: $id, building: $building) {
             name
             building
           }
         }

     6. Note that the `building` property in the returned data is not set to `"AA"`.

     ---

     ## 💡 Hints

     * How else could you verify if the data is being updated correctly?

     ## 🏆 Bonus

     If you have completed this activity, work through the following challenge with your partner to further your knowledge:

     * What tools will you need to run GraphQL queries in your own front end?

     Use [Google](https://www.google.com) or another search engine to research this.
     ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: Mutations (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with mutations? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `findOneAndUpdate()`

  * ✔️ `{new: true}`

* Open `10-Stu_Mutations/Solved/schemas/resolvers.js` in your IDE and explain the following:

  * When your mutation is not working as expected, a great place to look is the resolver.

  * We have written a mutation to update the building for a specific class. However, it looks like when we run the mutation, the building is not being updated.

  * When your mutation is not working as expected, a great place to look is the resolver.

  * Because we are using Mongoose, we must import the model to write data to MongoDB. It looks like we have imported the `Class` model successfully.

     ```js
     const { School, Class, Professor } = require('../models');
     ```

  * We also need to make sure that our arguments are passed to the resolver. It looks like this is working too:

     ```js
     updateClass: async (parent, { id, building }) => {
     ```

  * 🔑 To write the data, we call the `.findOneAndUpdate()` method on the imported `Class` model and pass in the specific information needed to find the class by id and update the building:

     ```js
     return await Class.findOneAndUpdate(
       { _id: id },
       { building },
     )
     ```

  * 🔑 By default, the object returned will not be the one updated. To return the new object, we set `new` to be `true`. Adding this line will fix the bug in our resolver:

     ```js
     { new: true }
     ```

* Navigate to `10-Stu_Mutations/Solved` in your command line and run `npm install`, `npm run seed`, and `npm start`.

* Open `localhost:3001/graphql` in your browser and demonstrate the following:

  * 🔑 We test if our resolver is now working by using an existing `Class` object id and adding the the provided test object to the Query Variable editor:

     ```json
       {
         "id": "<insert ID of a class here>",
         "building": "AA"
       }
       ```

  * 🔑 Next we run the provided mutation:

     ```gql
       mutation updateClass($id: ID!, $building: String!) {
         updateClass(id: $id, building: $building) {
           name
           building
         }
       }
     ```

  * The updated information should now be fetched.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use mutations to create and update data?

  * 🙋 We use the mutation type to define the entry point for the object we want to write or update. We write a mutation resolver that performs the task of creating or updating the data.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on mutations](https://www.apollographql.com/docs/android/essentials/mutations/#gatsby-focus-wrapper), and stay for office hours to ask for help.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Ask the class the following questions (☝️):

  * ☝ What exactly is an `API`?

* Encourage students to respond with their own thoughts and observations and let them know they are on the right track.

* Explain that, as developers, it is important to be able to define what an API, or Application Programming Interface, is and how it is used to handle data in the context of our applications.

* To practice, let's take a look at the API we will be using to build our own full-stack MERN apps.

* Navigate to `11-Ins_MERN-Setup` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `http://localhost:3001/graphql` to demonstrate the following:

  * An API is the part of the server that responds to data requests and sends responses. When we open the Sandbox, we can visualize how a GraphQL API performs these tasks.

  * When we click on the `schema` tab, we see a set of instructions. APIs use instructions to define the shape of the data that can be requested and the functions that will be executed when requests are made.

  * We can also make a request for specific data by writing a query. Once a request is made, the API executes the function needed to handle the request. The requested data is then returned as a JSON object:

     ```gql
     query allProfiles {
       profiles {
        _id
        name
        skills
       }
     }
     ```

* Open the [illustration of MERN three-layer architecture in the Module 21 slide deck](https://docs.google.com/presentation/d/15HFGsli3B1UvM8-khsTi7-DjkN1zX8mpLULMn7oGwX4/edit#slide=id.g102fba7df29_0_2442) and explain the following:

  * In a MERN app, requests are sent to the API from the client.

  * The API handles the request, executes a function to retrieve data from a database, and returns a JSON object. The client can then use that returned object to display the results to the user.

* Explain that during today's class, we will focus on the tools needed to integrate a React.js front end to enable it to send requests to a GraphQL API and use the returned JSON object to display data on a page.

* Remind that students while there is a lot to cover today, by the end of the class they will have all the steps needed to start building a full-stack MERN app on their own.

### 19. Instructor Demo: MERN Setup (5 min)

* Navigate to `11-Ins_MERN-Setup` in your command line and run `npm install`, `npm run seed` and `npm run develop`.

* Open `http://localhost:3001/graphql` to demonstrate the following:

  * When we open up the Apollo Sandbox, we see that our API is up and running and ready to receive requests. Yet, there is no front end on this port.

  * 🔑 In a MERN setup, the front end and back end are separate entities.

* Open `http://localhost:3000` to demonstrate the following:

  * 🔑 The React.js front end is located on a separate port.

* Open `11-Ins_MERN-Setup/` in your IDE to demonstrate the following:

  * 🔑 When we look at the structure of our project directory, we see all the code needed to run the front end is contained in the `client` directory and all the code needed to run the back end is contained in the `server` directory.

  * Because they are two separate apps, we need to use two separate terminals to start up each app independently and run them on their own ports.

  * However, in a development environment, using two terminals can be cumbersome. So, to start up both apps simultaneously, we can add a third app located at the root. This will allow us to use just one set of commands -- and a single terminal -- to control both apps.

* Open `11-Ins_MERN-Setup/package.json` in your IDE to demonstrate the following:

  * 🔑 The root-level `package.json` belongs to this third app. We install `concurrently` as a development dependency at the root level so that we can run multiple commands at the same time during development. The installed dependency appears in `package.json`:

     ```js
     "devDependencies": {
       "concurrently": "^5.1.0"
     }
     ```

  * 🔑 We then add the scripts needed to start up both apps using a single terminal:

     ```js
      "scripts": {
       "start": "node server/server.js",
       "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
       "install": "cd server && npm i && cd ../client && npm i",
       "seed": "cd server && npm run seed",
       "build": "cd client && npm run build"
     }
     ```

* Open `11-Ins_MERN-Setup/client/package.json` in your IDE to demonstrate the following:

  * While in development, we also need a way for our front end to send requests to our back end on a different port.

  * To do this, we will use a proxy to handle requests and update them to include the URL location of our back end.

  * We add a `proxy` field to the client's `package.json` and add the URL of our back end as the value. Now, while in development, requests will be prefixed by `"http://localhost:3001"` to allow them to be received by the API.

     ```json
     "proxy": "http://localhost:3001"`
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does our front end and back end communicate when running on separate ports?

  * 🙋 In the client directory's `package.json` we add a proxy that identifies the port where the server is running. This allows the front end (or client) to send requests to the API, which is the back end (or the server).  We can then use the npm package `concurrently` to start up both the front end and back end during development, using `npm run develop`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_MERN-Setup/README.md`.

### 20. Student Do: MERN Setup (15 min)

* Direct students to the activity instructions found in `12-Stu_MERN-Setup/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 📐 Add Comments to Implementation of the MERN-stack Architecture

   Work with a partner to add comments in the [Unsolved README.md file](./Unsolved/README.md) describing the functionality of the code found in [package.json](./Unsolved/package.json), [client/package.json](./Unsolved/client/package.json), and [server/server.js](./Unsolved/server/server.js).

   ## 📝 Notes

   Refer to the documentation:

   [Create React App Docs on proxying API requests](https://create-react-app.dev/docs/proxying-api-requests-in-development)

   ---

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * What GitHub tool can we use to automate functionality such as running tests or deploying our applications?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: MERN Setup (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the implementation of MERN-stack architecture? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `"proxy": "http://localhost:3001"`

  * ✔️ `concurrently`

  * ✔️ `install`

  * ✔️ `seed`

  * ✔️ `develop`

  * ✔️ `../client/build'`

* Open `12-Stu_MERN-Setup/Solved/client/package.json` in your IDE and explain the following:

  * The `client` directory contains all the code needed to run our React.js front end.

  * 🔑 We check the proxy to the client's `package.json` to identify the port where the server will run. The proxy directs requests to the API and will allow our front end and back end to communicate:

     ```json
     "proxy": "http://localhost:3001"
     ```

* Open `12-Stu_MERN-Setup/Solved/package.json` in your IDE and explain the following:

  * At the root of our project folder, we have a third app that contains a `package.json`.

  * This `package.json` contains scripts that allow us to easily start up our `client` and `server` apps in a single set of terminal commands while in development.

  * 🔑  When we enter `npm install` into the terminal, npm will execute the terminal commands defined in the `install` script, installing the dependencies in both the `client` and `server` directories:

     ```json
     "install": "cd server && npm i && cd ../client && npm i"
     ```

  * 🔑 We also add a script to execute the terminal commands to seed our database:

     ```json
     "seed": "cd server && npm run seed"
     ```

  * 🔑 To run our `client` and `server` simultaneously, we first install `concurrently` as a development dependency at the root-level:

     ```json
     "devDependencies": {
       "concurrently": "^5.1.0"
     }
     ```

  * 🔑 We then use `concurrently` in our `develop` script to execute the commands to start up the `client` and `server` simultaneously by simply entering `npm run develop`:

     ```json
     "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\""
     ```

* Open `12-Stu_MERN-Setup/Solved/server/server.js` in your IDE and explain the following:

  * When we are ready to deploy our app, we will create a production build of our React.js front end and set the Express.js server to serve the `build` directory. This will allow our front end and back end to operate from the same port when in production:

     ```js
     if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/build')));
     }

     app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
     });
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use this boilerplate app when developing our own MERN full-stack apps?

  * 🙋 This app has the code needed to connect our front end and back end in both development and production for any MERN app. This makes it a great resource to refer to when building our own MERN apps.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Create React App docs on proxying API requests](https://create-react-app.dev/docs/proxying-api-requests-in-development), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: useQuery (5 min)

* Navigate to `13-Ins_useQuery` in your command line and run `npm install`, `npm run seed` and `npm run develop`.

* Open `http://localhost:3000` to demonstrate the following:

  * When we seed our database and open the app, we see a roster of friends and their endorsed skills.

  * Each time this page loads, the client sends a request to the API. The returned data is then displayed on the page, allowing us to see the roster.

* Open `13-Ins_useQuery/client/src/App.js` in your IDE and demonstrate the following:

  * To set up our React.js front end to be able to send requests, we need to use one more tool.

  * 🔑 Apollo Client is a library that allows us to handle data using the GraphQL on the front end.

  * 🔑 We first install `@apollo/client` and import the component and classes we need for setup:

     ```js
     import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
     ```

  * 🔑 Next, we create a new instance of the imported `ApolloClient` class to implement the core client-side API and provide the uri of our GraphQL API so we can send requests. We also create a new instance of `InMemoryCache` to enable caching:

     ```js
     const client = new ApolloClient({
       uri: '/graphql',
       cache: new InMemoryCache()
     });
     ```

  * 🔑 To access the `ApolloClient` instance from anywhere in your component tree, we use the `ApolloProvider` component to wrap our React.js app:

     ```js
     <ApolloProvider client={client}>
       <div className="flex-column justify-flex-start min-100-vh">
         <Header />
         <div className="container">
           <Home />
         </div>
         <Footer />
       </div>
     </ApolloProvider>
     ```

  * Now, our Apollo Client is set up and we are ready to write a query and start sending requests.

* Open `13-Ins_useQuery/client/src/utils/queries,js` in your IDE and demonstrate the following:

  * 🔑 We write a query that uses the `profile` entry point and return values for the `_id`, `name`, and `skills` fields. It is important that these values match a type defined in our GraphQL API schema exactly. Otherwise, the query will not work:

     ```js
     query allProfiles {
       profiles {
         _id
         name
         skills
       }
     }
     ```

  * 🔑 For our query to execute, it must be contained in a `gql` function. We import the functionality from `apollo/client` at the top of the page:

     ```js
     import { gql } from '@apollo/client';
     ```

  * 🔑 Next, we wrap our query in the `gql` function and add `export` so we can use our query in our component:

     ```js
     export const QUERY_PROFILES = gql`
       query allProfiles {
         profiles {
           _id
           name
          skills
         }
       }
     `;
     ```

* 🔑 Open `13-Ins_useQuery/client/src/pages/Home.js` in your IDE and demonstrate the following:

  * We import the query into the component where we want our data to be displayed:

     ```js
     import { QUERY_PROFILES } from '../utils/queries';
     ```

  * 🔑 We also import the `useQuery` Hook from `apollo/client` to return our data:

     ```js
     import { useQuery } from '@apollo/client';
     ```

  * We use the `useQuery` Hook to execute the query when the page renders. The returned object will contain both `loading` and `data` properties:

     ```js
     const { loading, data } = useQuery(QUERY_PROFILES);
     ```

  * We can then store the returned data in a variable so we can display the information on our page:

     ```js
     const profiles = data?.profiles || [];
     ...

     <ProfileList
       profiles={profiles}
       title="Here's the current roster of friends..."
     />
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is Apollo Client?

  * 🙋  Apollo Client is a powerful library allows us to request data from our API and handles the whole request cycle.

  * ☝️ What can we do with Apollo Client?

  * 🙋  Using Apollo Client, we can easily execute a query and use the returned data to populate our page in a few lines of code.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_useQuery/README.md`.

### 23. Student Do: useQuery (15 min)

* Direct students to the activity instructions found in `14-Stu_useQuery/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 🏗️ Implement Query to Retrieve Thought Data

   Work with a partner to implement the following user story:

   * As a user, when I visit the application's homepage, I am shown a list of thoughts.

  ## Acceptance Criteria

   The activity is complete when it meets the following criteria:

   * The application's homepage displays all thought data queried from the API in a list.

   * The homepage renders a loading screen when the thought data has not returned from the API yet.

   ## Assets

   The following image demonstrates the web application's appearance and functionality:

   ![The Tech Thoughts homepage displays a list of thoughts, who wrote them, and when they were created.](./Images/01-screenshot.png)

   ---

   ## 💡 Hints

   * Where can a query be created to be used anywhere in our application?

   * What properties returned from `useQuery()` can be used to determine if the request hasn't completed yet?

   * How can we seed the database so there's data to query?

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * What React API is the Apollo Client provider functionality built with?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 24. Instructor Review: useQuery (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using the `useQuery` Hook? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `gql`

  * ✔️ `import { useQuery }`

  * ✔️ `import { QUERY_THOUGHTS }`

  * ✔️ `useQuery(QUERY_THOUGHTS)`

* Open `14-Stu_useQuery/client/src/App.js` in your IDE and explain the following:

  * To send requests, we first have to set up Apollo Client in our `App.js` file and create a new `ApolloClient` instance that identifies the URL of our GraphQL server. This step has already been done for us:

     ```js
     const client = new ApolloClient({
       uri: '/graphql',
       cache: new InMemoryCache(),
     });
     ```

* Open `14-Stu_useQuery/client/src/utils/queries.js` in your IDE and explain the following:

  * The app is running and ready to make requests. Let's create a new query.

  * 🔑 We start by using the entry point `thoughts` and add the fields we want to access. It is important to refer to the schema so that the names match a defined type exactly:

     ```js
     query getThoughts {
       thoughts {
         _id
         thoughtText
         thoughtAuthor
         createdAt
       }
     }
     ```

  * 🔑 We then wrap our completed query in a `gql` function and export it:

     ```js
     export const QUERY_THOUGHTS = gql`
       query getThoughts {
       thoughts {
         _id
         thoughtText
         thoughtAuthor
         createdAt
       }
     }
     `;
     ```

* Open `14-Stu_useQuery/client/src/pages/Home.js` in your IDE and explain the following:

  * 🔑 To use our query, we start by importing the `useQuery` Hook and the query into the component where we want the data to be displayed:

     ```js
     import { useQuery } from '@apollo/client';
     import { QUERY_THOUGHTS } from '../utils/queries';
     ```

  * 🔑 We then use the `useQuery` Hook to execute the query and return a JSON object that contains loading information and the requested data:

     ```js
     const { loading, data } = useQuery(QUERY_THOUGHTS);
     ```

  * 🔑 If data is returned, we store the returned data in a variable. If no data is available, we use an empty array instead:

     ```js
     const thoughts = data?.thoughts || [];
     ```

  * 🔑 We use the variable to access the data in our JSX so the data can be displayed on our page:

     ```js
     <ThoughtList
       thoughts={thoughts}
       title="Some Feed for Thought(s)..."
     />
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use the `useQuery` Hook to return data?

  * 🙋 The `useQuery` Hook takes in a GraphQL query wrapped in a `gql` function and returns the requested data as a JSON object. We can then use that data object to display information on the page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on queries](https://www.apollographql.com/docs/react/data/queries/), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
