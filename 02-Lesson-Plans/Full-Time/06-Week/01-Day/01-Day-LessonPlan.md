# 06.1 Full-Time Lesson Plan: Express.js Setup and Methodology

## Overview

In this lesson, students will learn how to create an API, define the routes, perform back-end logic, and save data using the built-in Node.js `fs` module. Performing HTTP requests using Insomnia will also be introduced.

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Setup` through `14-Stu_POST-Requests`.

* As class begins, remind students that they will need Insomnia for the majority of this module. Post the link for the [Insomnia download page](https://insomnia.rest/download) in Slack and instruct students to download and install Insomnia if they have not yet done so.

* Insomnia features a **Create query** option that allows the saving of commonly used endpoints. Use this as much as possible to encourage good habits and reference prior requests easily. Refer to the [Insomnia documentation on GraphQL queries](https://support.insomnia.rest/article/176-graphql-queries).

* When creating endpoints, students might forget to include a `/` at the beginning of the path. When you help students troubleshoot Express.js issues, be sure to add this common mistake to your checklist.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Configure an Express.js app to handle GET and POST requests.

* Configure an Express.js app to serve static files.

* Identify how client-side requests relate to server-side responses.

* Parse optional and required parameters when creating server-side routes.

* Implement client-side POST requests to submit form data to a server.

* Implement separation of concerns for routing.

* Perform HTTP requests using Insomnia.

## Slide Deck

* [Module 11 Slide Deck](https://docs.google.com/presentation/d/1GuwaaR-Td4TyFa6mzRs5mKU4bEsC0wbIq_74r96T2gA/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                             | Duration |
|---     |---  |---                                        |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity            | 0:10     |
| 10:10AM| 2   | Instructor Demo: Setup                    | 0:05     |
| 10:15AM| 3   | Student Do: Setup                         | 0:15     |
| 10:30AM| 4   | Instructor Review: Setup                  | 0:10     |
| 10:40AM| 5   | Instructor Demo: API vs. HTML Routes      | 0:05     |
| 10:45AM| 6   | Student Do: API vs. HTML Routes           | 0:15     |
| 11:00AM| 7   | Instructor Review: API vs. HTML Routes    | 0:10     |
| 11:10AM| 8   | Instructor Demo: Query Parameters         | 0:05     |
| 11:15AM| 9   | Student Do: Query Parameters              | 0:15     |
| 11:30AM| 10  | Instructor Review: Query Parameters       | 0:10     |
| 11:40AM| 11  | Instructor Demo: GET-Fetch                | 0:05     |
| 11:45AM| 12  | Student Do: GET-Fetch                     | 0:15     |
| 12:00PM| 13  | BREAK                                     | 0:30     |
| 12:30PM| 14  | Instructor Review: GET-Fetch              | 0:10     |
| 12:40PM| 15  | Instructor Demo: Static Assets            | 0:05     |
| 12:45AM| 16  | Student Do: Static Assets                 | 0:15     |
| 1:00PM | 17  | Instructor Review: Static Assets          | 0:15     |
| 1:15PM | 18  | Instructor Do: Stoke Curiosity            | 0:10     |
| 1:25PM | 19  | Instructor Demo: Insomnia                 | 0:05     |
| 1:30PM | 20  | Student Do: Insomnia                      | 0:15     |
| 1:45PM | 21  | Instructor Review: Insomnia               | 0:10     |
| 1:55PM | 22  | Instructor Demo: POST Requests            | 0:05     |
| 2:00PM | 23  | Student Do: POST Requests                 | 0:15     |
| 2:15PM | 24  | Instructor Review: POST Requests          | 0:15     |
| 2:30PM | 25  | END                                       | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1GuwaaR-Td4TyFa6mzRs5mKU4bEsC0wbIq_74r96T2gA/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **What is Express.js?**

    * Express.js is a lightweight framework for Node.js that allows you to write APIs, handle HTTP requests, and implement middleware in your server-side application.

    * Express.js exists on the back end of an application.

    * Express.js is considered the de facto standard for creating routes in Node.js applications.

  * **What is a route?**

    * Routes are a lot like traffic lanes at an airport. Certain lanes are designated for dropping people off, picking up passengers, picking up luggage, and so on.

    * Similarly, routes allow us to send and receive data depending on which route and **HTTP method** we use.

    * A route can be used for different kinds of requests, to create, read, update, and delete data.

  * **What is a RESTful API?**

    * **REST**, or **representational state transfer**, is an architecture for creating a web service like an API.

    * While REST is the architecture, the API defines the interface that clients use to interact with the server.

    * RESTful APIs must meet the following criteria:

      * Comprise clients, servers, resources and requests (via HTTP).

      * Use stateless communications between client and server.

      * Serve cached objects to reduce bandwidth.

      * Maintain a uniform interface between the client and the server so that they can evolve separately.

      * Optionally, can perform code on demand.

  * **What are the HTTP methods?**

    * You will use the following four main HTTP methods:

      * **POST** submits data to the specified resource, often causing a change on the server.

      * **GET** retrieves a resource from the server.

      * **DELETE** deletes a specified resource.

      * **PUT** replaces a specified resource with a payload.

  * **What does the code look like?**

  * Here we have an example of a few Express.js routes:

    * Use `get()`, `post()`, `delete()`, and similar methods to create routes.

    * The first argument is the path, `/api/reviews`.

  * Here we have an example of a POST route:

    * The **path** is the part of the route that comes after the base URL.

    * POST routes also accept `path` as the first argument.

    * The second argument is a callback: `(req, res) => { }`.

  * **How does this relate to the front end?**

    * We use the Fetch API to make requests to the Express.js server.

    * We can create `fetch()` requests that the server-side routes understand and respond to.

    * POST requests will send a request body that we capture server-side.

    * Making `fetch()` requests will be very similar to making calls to a third-party API. The only difference is that this API will run locally.

    * Requests must be concluded to prevent the client application from hanging indefinitely.

    * Methods attached to the response object allow us to conclude a request-response cycle.

* Navigate to `28-Stu_Mini-Project/Main` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * For the mini-project, we will add new routes to a full-stack application for sharing UI/UX tips.

  * Using your newly acquired Express.js skills, you will add a wildcard route that sends users to a 404 page if they end up in the wrong place.

  * You will also create a route to track how users are interacting with the app, and all of those diagnostics will be written to the file system using the `fs` module in Node.js. Pretty neat!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to create APIs and routes.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This project will allow us to connect front-end projects to back-end servers and eventually databases.

  * ☝️ How does this project relate to your career goals?

  * 🙋 By pairing your front-end skills with these new Express.js skills, you will be able to create APIs on the back end -- meaning that you can market yourself as a true full-stack developer!

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Setup (5 min)

* Navigate to `01-Ins_Setup` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * 🔑 When we run the application, we encounter a page called Express Routing.

  * 🔑 We can also see a message asking us to visit `/routes` and `/send`.

  * These routes were created using Express.js. Let's review the code and determine what is going on.

* Open `01-Ins_Setup/server.js` in your IDE to demonstrate the following:

  * Firstly, Express.js is imported at the top of the server file:

    ```js
    const express = require('express');
    ```

  * To initialize an instance of Express.js that we can refer to easily, we create a variable called `app`:

    ```js
    const app = express();
    ```

  * When using Express.js, we can specify which port we want the server to run on. This demo sets that port number to a variable called `port`:

    ```js
    const port = 3001;
    ```

  * In the `server.js` file, we use a built-in Node.js package called `path` to resolve the path of files that are located on the server:

    ```js
    const path = require('path');
    ```

  * To serve static assets like an HTML or CSS file, we need to first set up the static middleware and point it at the `public` folder:

    ```js
    app.use(express.static('public'));
    ```

  * This demo features two different routes: `/send` and `/routes`.

  * Additionally, a root path sends the client a string that instructs them to visit `/send` or `/routes`:

    ```js
    app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
    ```

    **Note**: Because we set up middleware for the `public` folder, Express.js automatically looks for an `index.html` in the `public` folder to send when a user visits the root path. Because we do have an `index.html` file in the `public` folder, that is shown in the browser now. If we didn't have an `index.html` file in the `public` folder, the browser would display the message `Navigate to /send or /routes`.

  * Next, the `/send` route uses the `path` library to resolve the path to the `public` folder. Then we use `res.sendFile()` to send an HTML file to the client:

    ```js
    app.get('/send', (req, res) =>
      res.sendFile(path.join(__dirname, 'public/sendFile.html'))
    );
    ```

  * Finally, the last route, aptly named `routes`, also sends a static file to the client:

    ```js
    app.get('/routes', (req, res) =>
      res.sendFile(path.join(__dirname, 'public/routes.html'))
    );
    ```

  * With all Express.js apps, it is important to initialize the server using the `app.listen()` method.

  * The `listen()` method accepts a port as the first argument and a callback function as the second argument. The `listen()` method is responsible for listening for incoming connections on the specified port:

    ```js
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can create an Express.js server by requiring the Express.js package, creating the routes, and using `app.listen()` to start the server.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Setup/README.md`.

### 3. Student Do: Setup (15 min)

* Direct students to the activity instructions found in `02-Stu_Setup/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Express.js Routing

  Work with a partner to implement the following user story:

  * As a developer, I want to implement Express.js into my app so that client requests relate to server responses.

  ## Acceptance Criteria

  * It's done when I have created an `app` variable set to the value of `express()`.

  * It's done when I have set up middleware to serve static files from `/public`.

  * It's done when I have created an HTML route to serve up `paths.html`.

  ---

  ## 💡 Hints

  What is the `path` module used for when defining routes?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would you create a web server without the Express.js library?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Setup (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel creating Express.js servers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `express.static()`

  * ✔️ `app.listen()`

  * ✔️ `get()`

* Open `02-Stu_Setup/Solved/server.js` in your IDE and explain the following:

  * When we open `server.js`, we see that we are missing the middleware that will help us send static files to the client.

  * First we need to mount the static middleware function to the Express.js server, using the `app.use()` method.

  * To serve HTML, CSS, and images, we use the `express.static()` method. This function accepts a root path. In this case, we set the root to the `public` folder:

    ```js
    app.use(express.static('public'));
    ```

  * 🔑 The next part of this activity requires us to set up another route from scratch. To set up a route, we define the route handler using `app.get()`.

    **Note**: Express.js offers methods for each HTTP verb, including GET, POST, DELETE, and PUT. We will delve into these later in the module, but for now, let's focus on the `get()` method.

  * The first argument of the `app.get()` method is the path. Let's set this one to `/paths`:

    ```js
    app.get('/paths', (req, res) => { }
    ```

  * The next step is to create the **route handler** function. This is a callback function that accepts two arguments for a request and response object.

  * We want to send the client an HTML file when they visit this path, so we use the `res` object and a `sendFile()` method:

    ```js
    res.sendFile(path.join(__dirname, 'public/paths.html'))
    ```

  * Now let's run the server and test these routes.

* Navigate to `02-Stu_Setup/Solved/` in your command line and run `npm install` and `npm start`.

  * You can see that when we visit `http://localhost:3001/paths`, we are sent the `paths.html` file, thanks to the route that we created.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What arguments does the `app.get()` method accept?

  * 🙋 The `app.get()` method accepts two arguments: a path and a callback function. The callback function is often referred to as the **route handler**.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on the Hello World example](https://expressjs.com/en/starter/hello-world.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: API vs. HTML Routes (5 min)

* Navigate to `03-Ins_API-HTML-Routes/server.js` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * 🔑 When we run the application and visit the `http://localhost:3001/` page, we are presented with a definition for an API.

  * 🔑 This example also includes another endpoint, `http://localhost:3001/api`.

  * 🔑 This endpoint is very similar to the first one -- but the first returns a simple string that contains an HTML element, and the second is an `api` endpoint that returns JSON.

  * The two endpoints are very useful for different purposes:

    * We can send entire files that contain HTML using `res.sendFile()`.

    * We can send a `body` parameter to the client using the `res.send()` method.

    * This body parameter can be a string, buffer, or even an array. In the root path, `/`, for example, we send a string that contains a `p` element that gets rendered in the browser:

      ```js
      app.get('/', (req, res) => {
        res.send(
          `<p>API - An application programming interface is a computing interface that defines interactions between multiple software intermediaries</p>`
        );
      });
      ```

  * Now let's review the `/api` endpoint.

  * Notice that we are using a new method, `res.json()`. This method sends a JSON response with the correct content type.

  * In the case of the `/api` endpoint, we will send the client JSON that contains the definition for the term **API**. Notice that the data is organized like a typical JSON object:

    ```js
    app.get('/api', (req, res) => {
      res.json({
        term: 'api',
        description:
          'An application programming interface is a computing interface that defines interactions between multiple software intermediaries',
      });
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between an HTML and an API route?

  * 🙋 An HTML route sends either a static HTML file or HTML element to the client, while an API endpoint typically returns JSON.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_API-HTML-Routes/README.md`.

### 6. Student Do: API vs. HTML Routes (15 min)

* Direct students to the activity instructions found in `04-Stu_API-HTML-Routes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create an API Route

  Work with a partner to implement the following user story:

  * As a developer, I want to implement an API route that returns content from a JSON file, using an Express.js server.

  ## Acceptance Criteria

  * It's done when I have imported Express.js into my project.

  * It's done when I have created an `app` variable set to the value of `express()`.

  * It's done when I have created an API route to `/api/`.

  * It's done when GET requests made using the browser to the API endpoint return the content found in `terms.json`.

  ---

  ## 💡 Hints

  Which method can we use on the `res` object that will allow us to send JSON to the client?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other methods are available on the `res` object?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: API vs. HTML Routes (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel differentiating between HTML routes and API endpoints? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `res.json()`

  * ✔️ Importing JSON files

* Navigate to `04-Stu_API-HTML-Routes/Solved/` in your command line and run `npm install` and `npm start`.

* Open `/Solved/server.js` in your IDE and explain the following:

  * First we require Express.js in the server file:

    ```js
    const express = require('express');
    ```

  * To send back a list of terms from the JSON file, we need to require the JSON file as well:

    ```js
    const termData = require('./terms.json');
    ```

* Open `04-Stu_API-HTML-Routes/Solved/terms.json` in your IDE to demonstrate the following:

  * The JSON file holds an array of objects that contain definitions from Wikipedia for various web development terms. This data will be used by the API:

    ```json
    [
      {
          "term": "SEO",
          "definition": "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
          "url": "https://en.wikipedia.org/wiki/Search_engine_optimization"
      },
      {
          "term": "API",
          "definition": "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc",
          "url": "https://en.wikipedia.org/wiki/API"
      },
      {
          "term": "REST",
          "definition": "Stands for Representational State Transfer. This term is usually used in the context of describing an API where requests are made to a URI and a response is given in the form of HTML, XML, JSON, or some other format",
          "url": "https://en.wikipedia.org/wiki/Representational_state_transfer"
      }
    ]
    ```

  * The next step in creating an Express.js server is to create `app` and `port` variables for later use.

  * We set the `app` variable to the value of `express()`:

    ```js
    const port = 3001;

    const app = express();
    ```

  * 🔑 The solved version contains a root path that returns a string asking the user to visit the `/api` path:

    ```js
    app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));
    ```

  * The main objective of this activity was to create an `/api` endpoint that would return a list of web-related terms to the client as JSON.

    * First we set up the `/api` endpoint with the `get()` method.

    * In the callback function, we use `res.json()` to send the content of the JSON file that we required at the top of the file:

      ```js
      app.get('/api', (req, res) => res.json(termData));
      ```

* Open `http://localhost:/3001/api` in your browser to demonstrate the following:

  * By visiting this endpoint in the browser, we are making a GET request and receiving JSON that contains all web terms in the JSON file.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is JSON the preferred way to send data to a client when creating web applications?

  * 🙋 JavaScript Object Notation (JSON) is a common data structure that can be used with many front-end applications and services. It sends and receives data for back-end services, like Express.js APIs.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on routing](https://expressjs.com/en/guide/routing.html#response-methods), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Query Parameters (5 min)

* Navigate to `05-Ins_Query-Params/server.js` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001` in your browser to demonstrate the following:

  * When we run this demo, we are prompted with a message to make a GET request to `http://localhost:3001/api/terms`.

  * 🔑 Making a GET request to an API endpoint in the browser is as simple as visiting the endpoint as if it were a proper webpage.

  * Notice that for the `api/terms` endpoint, we get back some JSON that contains a list of all the web terms for this activity:

    ```json
    [
      {
        "term": "SEO",
        "definition": "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
        "url": "https://en.wikipedia.org/wiki/Search_engine_optimization"
      },
      {
        "term": "API",
        "definition": "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc",
        "url": "https://en.wikipedia.org/wiki/API"
      },
      {
        "term": "REST",
        "definition": "Stands for Representational State Transfer. This term is usually used in the context of describing an API where requests are made to a URI and a response is given in the form of HTML, XML, JSON, or some other format",
        "url": "https://en.wikipedia.org/wiki/Representational_state_transfer"
      }
    ]
    ```

  * We can also use endpoints to get information on one specific resource. We can do this by using optional route parameters.

* Navigate to `http://localhost:3001/api/terms/seo` in your browser to get information on the term **SEO**.

  * We get information for that term by providing the optional route parameter `name`:

    ```json
    {
      "term": "SEO",
      "definition": "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
      "url": "https://en.wikipedia.org/wiki/Search_engine_optimization"
    }
    ```

* Open `05-Ins_Query-Params/server.js` in your IDE to demonstrate the following:

  * Let's look at the logic that allowed the term to be sent to the client. First, we declare the `get()` method, using the syntax `app.get()`.

  * We then provide a path and optional route parameter as the first argument, designating the optional route parameter with the colon in the path:

    ```js
    app.get('/api/terms/:term', (req, res) => { ... }
    ```

    **Note**: In code snippets, `...` represents abbreviated code that exists between the two curly braces.

  * We access optional parameters using the `req.params` object, which in this example constructs the variable `requestedTerm`:

    ```js
    app.get('/api/terms/:term', (req, res) => {
      const requestedTerm = req.params.term.toLowerCase();
    ```

  * Next, we create a `for` loop that will iterate over each term that was imported from the JSON file.

  * If the requested term is the same as the term that we are currently iterating over, we return it using `res.json()`:

    ```js
    for (let i = 0; i < termData.length; i++) {
      if (requestedTerm === termData[i].term.toLowerCase()) {
        return res.json(termData[i]);
      }
    }
    ```

  * Finally, if no term is found, we return a message using `res.json()`:

    ```js
    return res.json('No match found');
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we create optional route parameters when creating server-side routes?

  * 🙋 We can create optional route parameters by prefacing them with a colon (`:`) and accessing them in the route handler on the `req.params` object.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Query-Params/README.md`.

### 9. Student Do: Query Parameters (15 min)

* Direct students to the activity instructions found in `06-Stu_Query-Params/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Query Parameters

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/server.js).

  ## 📝 Notes

  How are route parameters denoted when building route paths?

  How can we chain multiple parameters together in the same path?

  Refer to the documentation:

  [Express.js documentation on query parameters](http://expressjs.com/en/guide/routing.html#route-paths)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * When would you use query string parameters vs. route parameters?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Query Parameters (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with required and optional parameters and query strings? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Optional parameters

  * ✔️ `req.query`

* Open `06-Stu_Query-Params/Unsolved/server.js` in your IDE and explain the following:

  * Note in the `Unsolved` file that some new features have been added to the application.

  * Some new helper functions help sort the data.

  * These helper functions sort the terms in ascending or descending order, based on their `relevance` property. Students can explore these functions further after class or during office hours:

    ```js
    const { sortData } = require('./sortData');

    const sortHelper = (type) =>
      termData.sort(sortData('term', 'relevance', `${type}`));
    ```

  * The first route will return all the terms in the database. This route also contains the logic to sort the terms by relevance (in ascending or descending order) using query strings:

    ```js
    app.get('/api/terms/', (req, res) => { ... }
    ```

  * When we make a GET request with the following query string, a list of terms sorted by relevance is returned:

    ```sh
    http://localhost:3001/api/terms?sort=asc
    ```

  * 🔑 The query string is denoted by a question mark, `?`. The **key** follows the question mark, and the **value** follows the equals sign, `=`.

  * At this point, the `req.query` object contains the following:

    ```bash
    { sort: 'asc' }
    ```

  * Now we know that `req.query` contains key-value pairs. Let's examine the rest of the logic in this route.

  * First we create a Boolean value to check whether a query string was provided at all, and if so, we set the variable `hasQuery` to `true`:

    ```js
    const hasQuery = Object.keys(req.query).length > 0;
    ```

  * Using the `hasQuery` Boolean, we set up a few `if` statements that check whether the query provided is `sort` and has a value of `dsc` or `asc`. After that, we return a sorted version of the terms, using `res.json()` and the helper function provided to us:

    ```js
    if (hasQuery && req.query.sort === 'dsc') {
      return res.json(sortHelper('dsc'));
    }

    if (hasQuery && req.query.sort === 'asc') {
      return res.json(sortHelper('asc'));
    }
    ```

  * Before we close out this route handler, we add a return statement to account for requests that don't include a query string. In this case, we use `res.json()` to send back all the terms:

    ```js
    return res.json(termData);
    ```

  * 🔑 The next route is designed to send back a single term. We first create the route using `app.get()`:

    ```js
    app.get('/api/term/:term', (req, res) => { ... }
    ```

  * We set the requested term to a variable called `requestedTerm`. We also use the `toLowerCase()` method on the query parameter for consistency:

    ```js
    const requestedTerm = req.params.term.toLowerCase();
    ```

  * 🔑 To find the term in the JSON, we create a `for` loop that iterates through the terms. If there is a match, we send back the requested term. Otherwise, we send back a message that the term wasn't found:

    ```js
    for (let i = 0; i < termData.length; i++) {
      if (requestedTerm === termData[i].term.toLowerCase()) {
        return res.json(termData[i]);
      }
    }

    return res.json('No term found');
    ```

  * The next route is for getting all possible terms in a given category.

  * To start, we create the route using `app.get()` and provide it a path with a parameter of `:category`:

    ```js
    app.get('/api/terms/:category', (req, res) => { ... }
    ```

  * In the route handler, we create a variable for the requested category and initialize an empty array to store the results:

    ```js
    const requestedCategory = req.params.category.toLowerCase();
    const result = [];
    ```

  * The next step is to find all the terms that match the requested category. To do this, we set up a `for` loop that iterates through the terms.

  * We check whether the requested category is equal to the category that we are currently looping through, and if so we push it to the `result` array:

    ```js
    for (let i = 0; i < termData.length; i++) {
      const currentTermCategory = termData[i].category;
      if (requestedCategory === currentTermCategory) {
        result.push(termData[i]);
      }
    }
    ```

  * Before we close out this route handler, we return the result as JSON:

    ```js
    return res.json(result);
    ```

  * The final route in the sever file will return a list of all the possible categories that a term can have.

  * Similarly, we create this route by using the `app.get()` method while providing a path of `/api/categories`.

  * Inside the route handler, we map through the term data and create a new array that contains only the category called `categories` for each term.

  * Then we filter the `categories` array, remove any duplicates, and assign to a variable called `result`. Finally, we return that `result` as JSON:

    ```js
    app.get('/api/categories', (req, res) => {
      const categories = termData.map((term) => term.category);

      const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

      return res.json(result);
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between a route parameter and a query string?

  * 🙋 Route parameters are denoted in Express.js by a colon, while query strings are denoted with a question mark.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on route paths](http://expressjs.com/en/guide/routing.html#route-paths), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: GET-Fetch (5 min)

* Navigate to `07-Ins_GET-Fetch/server.js` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * 🔑 When we run this application and visit `http://localhost:3001`, we find a single button that reads **Fetch terms**.

  * 🔑 After we click the button, the page renders each term to the DOM using client-side JavaScript.

  * We have been working with the back end and creating routes with Express.js; in this demo, we see how client-side requests relate to server-side responses.

* Open `07-Ins_GET-Fetch/server.js` in your IDE to demonstrate the following:

  * In the server file, we have two routes set up -- one for sending the static `index.html` page and another that is an API endpoint that will send back all the terms as JSON:

      ```js
      app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
      });

      app.get('/api/terms', (req, res) => res.json(termData));
      ```

  * Let's review the code used to make this request.

* Open `07-Ins_GET-Fetch/public/index.js` in your IDE to demonstrate the following:

  * In the `public` folder, we have an `index.js` file to accompany the `index.html` file.

  * Note that we first created a helper function that will return results from a `fetch()` request.

  * 🔑 The important part of any `fetch()` request is the method and the path. Here we set the method to `GET` and the path `/api/terms`:

    ```js
    const getTerms = async () => {
      const result = await fetch('/api/terms', {
        method: 'GET',
      });
      const json = await result.json();
      return json;
    };
    ```

  * The client-side JavaScript also has a function that will render each term to the page in a card:

    ```js
    const renderTerm = (term) => {
      const cardEl = document.createElement('div');
      const cardBodyEl = document.createElement('div');
      const cardBodyTitle = document.createElement('div');

      cardEl.classList.add('card', 'p-5');
      cardBodyEl.classList.add('card-body', 'p-5');
      cardBodyTitle.classList.add('card-header', 'card-title', 'link');

      cardBodyTitle.innerHTML = `<a href=${term.url}>${term.term}</a>`;
      cardBodyEl.innerText = term.definition;
      termEl.appendChild(cardBodyTitle);
      termEl.appendChild(cardBodyEl);
    };
    ```

  * Finally, we have a `buttonHandler()` function that will invoke the `getTerms()` helper function, get some data back, and then use that data to render each term in a card -- using the other helper function, `renderTerm()`:

    ```js
    const buttonHandler = () =>
      getTerms().then((response) => response.forEach((item) => renderTerm(item)));
    ```

  * As with all event handlers, it is important to set up an event listener on the element that you want to invoke this action:

    ```js
    termButton.addEventListener('click', buttonHandler);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can make client-side requests to the Express.js server using the Fetch API and the path to the locally hosted endpoint.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_GET-Fetch/README.md`.

### 12. Student Do: GET-Fetch (15 min)

* Direct students to the activity instructions found in `08-Stu_GET-Fetch/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Client/Server Requests Not Working

  Work with a partner to resolve the following issues:

  * As a user, I want to be able to view pet data on the page by pressing a **Fetch pets** button.

  ## Expected Behavior

  When the user clicks the **Fetch pets** button from the front end, each pet is rendered in a card on the screen.

  ## Actual Behavior

  When a user requests the terms by clicking **Fetch pets**, nothing is rendered to the page and an error appears in the developer console.

  ## Steps to Reproduce the Problem

  1. Open the page by visiting `http://localhost:3001`.

  2. Open the developer console by pressing Command+Option+K (Mac), or Ctrl+Shift+J (Windows).

  3. Click **Fetch pets**, then note the lack of results on the page and the error in the develop console.

  ---

  ## 💡 Hints

  How can we test the endpoints outside of the browser?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are static assets?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: GET-Fetch (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with debugging client requests? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Fetch API

  * ✔️ HTTP methods

* Navigate to `08-Stu_GET-Fetch/Solved/public/index.js` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * When we run this application and visit `http://localhost:3001`, we notice that there is a button that doesn't seem to do anything.

  * After we open the developer console, we encounter an error that tells us there was a problem parsing the JSON data:

    ```console
    Uncaught (in promise) SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data
    ```

  * In the developer window, navigate to the Network tab and click the **Fetch pets** button once again.

  * Note that a network request is being made from the front end, resulting in a 404 error -- which means that the requested resource wasn't found.

  * We know that the client is attempting a request of some sort, so we can start troubleshooting this issue in the front-end JavaScript.

* Return to `08-Stu_GET-Fetch/Unsolved/public/index.js` in your IDE to demonstrate the following:

  * In `index.js`, we have a helper function called `getPets()` that makes a request to `/api/pets`:

      ```js
      const getPets = () =>
        fetch('/api/pets', {
          method: 'POST',
          body: '',
        })
          .then((res) => res.json())
          .then((data) => data);
      ```

  * Additionally, the application is meant to get data instead of saving data to the server. As a result, a POST request doesn't make sense here.

  * Let's see what happens when we change `POST` to `GET`. Save the code, refresh the page, and try again.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * After refreshing the page and clicking **Fetch pets**, we encounter a different error -- which isn't always a bad thing. This error tells us that GET requests shouldn't have a `body` property. Let's fix that.

* Open `08-Stu_GET-Fetch/Unsolved/public/index.js` in your IDE to demonstrate the following:

  * Remove the `body` attribute of the `fetch()` request, and save the file.

  * Your code should now look something like the following example:

    ```js
    const getPets = () =>
      fetch('/api/pets', {
        method: 'GET',
        // body: '',
      })
        .then((res) => res.json())
        .then((data) => data);
    ```

  * After making these changes, we can test the application again.

* Open `http://localhost:3001` in your browser to demonstrate the following:

  * After we refresh the page and click **Fetch pets**, the application seems to work as intended!

  * You should see a list of pets, with a description and an image for each pet.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we retrieve data from the API using client-side JavaScript?

  * 🙋 We use the Fetch API and provide the corresponding HTTP method in the `options` object.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Static Assets (5 min)

* Open `09-Ins_Static-Assets/server_static.js` in your IDE and demonstrate the following:

  * 🔑 In this server file, we notice that static routes are being made for individual assets:

    ```js
    // Serve the home page
    app.get('/home', (req, res) =>
      res.sendFile(path.join(__dirname, '/public/index.html'))
    );

    // Serve the cat image
    app.get('/image', (req, res) =>
      res.sendFile(path.join(__dirname, '/public/images/cat.jpg'))
    );

    // Serve the CSS file
    app.get('/css', (req, res) =>
      res.sendFile(path.join(__dirname, '/public/styles/jass.css'))
    );
    ```

  * This can be a problem as apps grow!

  * 🔑 The process of creating individual routes to serve static files is time-consuming and inefficient. Let's explore a different approach in the other `server.js` file.

* Open `09-Ins_Static-Assets/server.js` in your IDE to demonstrate the following:

  * 🔑 The amount of code is reduced drastically, while providing clients with access to any file in the `public` folder.

  * To use middleware in your Express.js application, use the `app.use()` function to mount the `express.static` middleware at the `public` directory.

    > **Important:** You might have noticed that some previous activities used `express.static` without properly introducing it. In those activities, we needed to use `express.static` to serve the required HTML and CSS. This demo and the upcoming activity will provide some context as to what this middleware does and why it is required.

  * That this server uses the built-in static middleware that Express.js provides to us. This allows us to serve images, CSS files, and JS files from the public directory:

    ```js
    app.use(express.static('public'));
    ```

* Navigate to `09-Ins_Static-Assets/server.js` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001/images/cat.jpg` in your browser to demonstrate the following:

  * We can reference assets in the `public` folder even if they are nested inside directories.

  * While the two servers accomplish the same thing, using static middleware will help us write less code, with more flexibility.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the built-in Express.js middleware that allows us to host static files?

  * 🙋 The `express.static()` middleware method allows us to host static files from a given directory.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Static-Assets/README.md`.

### 16. Student Do: Static Assets (15 min)

* Direct students to the activity instructions found in `10-Stu_Static-Assets/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Middleware for Static Assets

  Work with a partner to implement the following user story:

  * As a web developer, I want to automatically serve all static assets using middleware so that I don't need to create a specific GET route for each file.

  ## Acceptance Criteria

  * It's done when I have set up middleware to serve all static files in Express.js.

  * It's done when I have used the `express.static()` method to declare the root directory to serve assets from.

  * It's done when I have used the `express.static()` method (inside the `app.use()` method) for granting access to the `public` folder assets.

  ## 📝 Notes

  Refer to the documentation:

  [Express.js documentation on serving static files ](http://expressjs.com/en/starter/static-files.html)

  ---

  ## 💡 Hints

  How would we use routes to access the contents of a directory nested inside the `public` directory?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are other examples of middleware in Express.js?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: Static Assets (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using middleware to serve static assets? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `app.use()`

  * ✔️ `express.static()`

* Open `10-Stu_Static-Assets/Solved/server.js` in your IDE and explain the following:

  * In the server file, we first have to import `express`, set a variable for the port, and create an app variable for the `express()` function:

    ```js
    const express = require('express');

    const app = express();
    const PORT = process.env.port || 3001;
    ```

  * 🔑 Note also that the current method to serve `index.html` is to create a static route to the `public` folder.

  * When creating a static route to a folder, Express.js will automatically look for an `index.html` file and serve it to the client:

    ```js
    const path = require('path');

    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));
    ```

  * To allow this application to serve static assets automatically, let's add the middleware to the server:

    ```js
    app.use(express.static('public'));
    ```

  * After adding the static middleware to the server, start the server to check whether the assets are accessible to the client.

* Open `http://localhost:3001/` in your browser and demonstrate the following:

  * 🔑 All we needed to do to automatically serve static assets was add the `express.static` middleware by mounting it with `app.use()`.

  * While it is not required, we could clean up the code even further by removing the `path` module and the root path, as it is no longer needed to serve up the `index.html` file.

  * After you refactor your code, it will look something like this:

    ```js
    const express = require('express');

    const app = express();
    const port = 3001;

    app.use(express.static('public'));

    app.listen(port, () =>
      console.log(
        `Serving static asset routes on port ${port}! Visit http://localhost:3001/`
      )
    );
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why did all the static assets load automatically after we added middleware to the server?

  * 🙋 Adding middleware to the server allowed us to mount the `public` folder and all the files in it to the root path of the server, `/`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on serving static files](http://expressjs.com/en/starter/static-files.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Today we will explore POST requests and routes. Using the prompts provided, discuss the importance of being able to update data on the server.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What kind of data might we need to update in a web application?

  * 🙋 We might need to update anything that lives in the database. Specific examples include updating a blog post, creating a review for a movie, submitting login information, and more.

  * ☝️ What applications do you use daily that make POST requests to function properly?

  * 🙋 Some applications, including Canvas, rely on POST requests for logging in and submitting Challenges.

  * ☝️ Why is data persistence important in full-stack applications?

  * 🙋 Data persistence prevents the application from losing user data when the user leaves the page. It also helps to reassure users that their work won't be lost.

  * ☝️ How will learning how to create POST routes and requests contribute to your success in this course and in your future career?

  * ☝️ POST routes and requests make up some of the core functionality of modern web applications. Knowing how to create POST routes and make POST requests will make you a more competitive job applicant!

### 19. Instructor Demo: Insomnia (5 min)

* Open `11-Ins_Insomnia/README.md` in your IDE to demonstrate the following:

  * This activity demonstrates using Insomnia to make a GET request to the GitHub API.

  * Open Insomnia on your machine or download it locally (if you haven't already) by visiting the [Insomnia download page](https://insomnia.rest/download).

  * Refer to the `11-Ins_Insomnia/README.md` file for instructions and talking points.

    ```md
    # Insomnia Demo

    * Open Insomnia and create a new Request. If you're not familiar with Insomnia, refer to the the [Insomnia Docs](https://docs.insomnia.rest/insomnia/get-started) to get started.

    * In the Insomnia interface, change the HTTP method to GET and input the endpoint for GitHub: `https://api.github.com/repos/microsoft/vscode/pulls?state=open`

    * Let's review the different parts of this URI.

    * In this example, we are making a GET request to GitHub's API to access pull requests that are currently open.

      | Protocol |    base URL    | endpoint | :organization | :repository | :resource | query string |
      | :------- | :------------: | -------: | ------------: | ----------: | --------: | -----------: |
      | https    | api.github.com |    repos |     microsoft |      vscode |     pulls |   state=open |

      > **Note**: You might want to show students this [visual aid](./Images/00-endpoint.png) in the `Images` folder for this activity.

    * Click Send in the Insomnia interface. Note that the results appear on the left side of the app.

    * The response will contain an array of objects that we could map through, which would be handy if we wanted to create some HTML elements for each open pull request.

    * Change the word `pulls` to `issues` in the URI to demonstrate that we can access other resources with GitHub's API. Every possible resource is outlined in the [GitHub Docs on REST](https://docs.github.com/en/rest/reference).
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the benefit of using something like Insomnia instead of a front end?

  * 🙋 In most cases, you will find yourself building your API before you have created the front end. Insomnia allows you to execute POST requests and provide a request body without using the Fetch API to do so.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Insomnia/README.md`.

### 20. Student Do: Insomnia (15 min)

* Direct students to the activity instructions found in `12-Stu_Insomnia/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Query Express.js App Using Insomnia

  Work with a partner to implement the following user story:

  * As a developer, I want to use Insomnia to test endpoints that I created using Express.js, to debug my API.

  ## Acceptance Criteria

  * It's done when I have required the `db.json` file in the server.js file.

  * It's done when I have created a variable called `app` in the server.js file that is an instance of the Express.js app.

  * It's done when I have created a `GET` route for `/api` that will return the content of our json file.

  * It's done when I have tested my endpoint by performing a `GET` request to `/api` using Insomnia.

  ---

  ## 💡 Hints

  Do we need to pass a request body to the server when we are using query parameters?

  How can the [GitHub Docs on pulls](https://docs.github.com/en/rest/reference/pulls) help us with usage?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you save multiple request URLs in Insomnia?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Insomnia (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel testing endpoints using Insomnia? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Insomnia

  * ✔️ Creating new requests

* Open `12-Stu_Insomnia/Solved/server.js` in your IDE and explain the following:

  * 🔑 This activity doesn't have a database, so first we need to import the JSON file that contains some data that we can use with the endpoint.

  * The JSON file contains sample data that you would receive from GitHub's API:

    ```js
    const pulls = require('./db/repos.json');
    ```

  * 🔑 Next we need to create an app variable set to the value of the Express.js function:

    ```js
    const app = express();
    ```

  * For this activity, we need to create a GET route that will send back the entire contents from the JSON file. To do this, we use `app.get()` and `res.json()`:

    ```js
    app.get('/api', (req, res) => res.json(pulls));
    ```

  * Finally, we need to set up the Express.js server to listen for requests. To do this, we use `app.listen()`:

    ```js
    app.listen(3001, () => console.log('Express Server on port 3001!'));
    ```

  * Now that we have the Express.js server code ready, let's start the server and make a request using Insomnia.

* Navigate to `12-Stu_Insomnia/Solved/server.js` in your command line and run `npm install` and `npm start`.

  * In Insomnia, create a new GET request by selecting it from the list of HTTP methods, and enter `http://localhost:3001/api`.

  * Ensure that we receive a response from the server and note the status code at the top of the response pane.

* Open the [MDN Web Docs on HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) in your browser to demonstrate the following:

  * We received a 200 response code in Insomnia. These status codes correspond to the HTTP response codes outlined in the HTTP protocol.

  * Successful responses usually fall between 200 and 299.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can Insomnia help us debug routes?

  * 🙋 When we create the back end for an application, Insomnia allows us to make repeated requests to the server to ensure that the code works.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Insomnia documentation on getting started](https://support.insomnia.rest/article/11-getting-started), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: POST Requests (5 min)

* Navigate to `13-Ins_POST-Requests/server.js` in your command line and run `npm install` and `npm start`.

* Open Insomnia, create a new POST request to `http://localhost:3001/api/reviews`, and demonstrate the following:

  * 🔑 This demo shows how we can set up POST routes for the Express.js server. To begin, let's open Insomnia and create a new POST request to the endpoint `http://localhost:3001/api/reviews`.

  * 🔑 After making a request to the endpoint, we receive a simple response that the request was received.

* Open `13-Ins_POST-Requests/server.js` in your IDE to demonstrate the following:

  * Let's look at the server file and examine the POST route.

  * The POST route begins with the `app.post()` method.

  * Much like GET requests, the first argument is the endpoint that we want to create, and the second is the route handler function:

    ```js
    app.post('/api/reviews', (req, res) => {
    ```

  * Inside the body of the handler, the client is sent a message using the `res.json()` method.

  * The `req` object is also being used to dynamically slot in the method attribute that is provided by Express.js.

  * A few console logs will also provide us with additional information about the client in the terminal. We are using the `req` object again to access another property called `rawHeaders`.

  * `rawHeaders` contains the headers that are automatically generated by Insomnia and sent with each request:

    ```js
    console.info(req.rawHeaders);

    console.info(`${req.method} request received`);
    ```

  * 🔑 Remember when creating POST routes that requests will also need to be concluded -- preventing the client requests from timing out and letting them know that the server is done processing their request:

    ```js
    res.json(`${req.method} request received`);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can start by creating a POST route in the Express.js server using the `app.post()` method, then we use the `req` object to get additional information about the request and client.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_POST-Requests/README.md`.

### 23. Student Do: POST Requests (15 min)

* Direct students to the activity instructions found in `14-Stu_POST-Requests/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Logging for GET and POST Requests

  Work with a partner to implement the following user story:

  * As a developer, I want to ensure that my requests are handled based on their HTTP method so that future create, read, update, and delete (CRUD) operations work as intended.

  ## Acceptance Criteria

  * It's done when I have created a route that logs when a user has made a GET request.

  * It's done when I have created a route that logs when a user has made a POST request.

  * It's done when, if I test my route using Insomnia, GET and POST requests are logged.

  ---

  ## 💡 Hints

  How can we enable the same endpoint to handle both GET and POST requests?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * When would you use a GET request vs. a POST request?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 24. Instructor Review: POST Requests (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel creating POST requests? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ GET vs. POST

  * ✔️ One endpoint for two kinds of requests

* Open `14-Stu_POST-Requests/server.js` in your IDE and explain the following:

  * When we open the `server.js` file, we first import Express.js and set a variable for the port:

    ```js
    const express = require('express');
    const port = 3001;
    ```

  * We also have an `app` variable that is set to the value of the `express()` function:

    ```js
    const app = express();
    ```

  * The routes for both `/api/reviews` and `/api/upvotes` have already been started, so let's finish them.

  * 🔑 In the `/api/reviews` route handler, the first thing we want to do is tell the client that we received their request. We do this by invoking `res.json()` and passing in a message:

    ```js
    res.json(`${req.method} request received to get reviews`);
    ```

  * 🔑 Invoking the `res.json()` method will conclude the request-response cycle, but as far as the server is concerned, we can still run the rest of the code in the code block.

  * We use the `console.info()` method to print a message to the console that a request was received. We construct the output string using the `req.method()` object and string interpolation:

    ```js
    console.info(`${req.method} request received to get reviews`);
    ```

  * While this logic is fresh in your mind, you can finish the `/api/upvotes` GET route:

    ```js
    app.get('/api/upvotes', (req, res) => {
      res.json(`${req.method} request received to retrieve upvote count`);

      console.info(`${req.method} request received to retrieve upvote count`);
    });
    ```

  * Next, we create POST routes for both of these endpoints. Using Express.js, it is possible to create two entirely different routes with the same endpoint.

  * The POST route for `/reviews` and `/upvotes` are functionally identical to the GET routes, except that we use `app.post()` instead of `app.get()`:

    ```js
    app.post('/api/reviews', (req, res) => {
      res.json(`${req.method} request received to add a review`);

      console.info(`${req.method} request received to add a review`);
    });
    ```

  * The POST route for `api/upvotes` looks nearly identical, because the goal is to log the request and the HTTP method:

    ```js
    app.post('/api/upvotes', (req, res) => {
      res.json(`${req.method} request received to upvote`);

      console.info(`${req.method} request received to upvote`);
    });
    ```

  * 🔑 If you want to, when creating routes in Express.js, you can perform some logic to update a resource inside of a GET route handler. The different methods on the `app` object are designed to aid organization and readability rather than dictate exactly how APIs should be implemented. However, for the API to be considered RESTful, we should keep the POST logic to POST routes and GET logic to GET routes.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which HTTP methods can we handle using Express.js?

  * 🙋 Express.js has methods for GET, POST, patch, PUT, DELETE, connect, options, and trace.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on basic routing](https://expressjs.com/en/starter/basic-routing.html), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
