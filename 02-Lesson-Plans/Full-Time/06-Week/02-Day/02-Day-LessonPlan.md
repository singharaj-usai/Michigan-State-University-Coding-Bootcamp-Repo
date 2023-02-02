# 06.2 Full-Time Lesson Plan: POST Requests and Persistent Data

## Overview

In today's class students will create POST routes on the back end and corresponding `fetch()` requests on the front end. Students will learn how to use middleware to parse JSON in their applications and how to implement persistent storage for the back end.

Students will also learn how to create modular routes for better organization and write custom middleware and use it for their server-side applications. In addition, they will deploy applications to Heroku using the Heroku CLI and also explore some lesser-known Git commands in this week's Git Guide on Git History.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Body-Parsing` through `27-Evr_Git-History`.

* At the beginning of class, post the link to the [Insomnia download page](https://insomnia.rest/download) in Slack. Instruct students to download and install Insomnia if they have not yet done so.

* Each activity will require spinning up a new Express.js server. Students might encounter a common error with the code `EADDRINUSE`, due to the port being used. They can easily fix this error by running one of the following commands based on their operating system:

  * Mac:

    ```bash
    killall node
    ```

  * Windows:

    ```bash
    taskkill /im node.exe
    ```

* Today's activities also cover persistent storage. Module 12 covers databases, so for now we will store data using the Node.js `fs` module and JSON files. To accomplish this, some activities include helper functions in a `/helpers` directory.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Configure an Express.js app to handle POST requests.

* Implement Express.js middleware to be able to read data from a POST request.

* Implement client-side POST requests to submit form data to a server.

* Read and write to a JSON text file.

* Implement separation of concerns for routing.

* Write a custom middleware function for Express.js.

* Deploy a Node.js app to Heroku.

* Navigate Git History inside a large open source application.

## Time Tracker

| Start  | #   | Activity Name                        | Duration |
|---     |---  |---                                   |---       |
| 10:00AM| 1   | Instructor Demo: Body Parsing        | 0:05     |
| 10:05AM| 2   | Student Do: Body Parsing             | 0:15     |
| 10:20AM| 3   | Instructor Review: Body Parsing      | 0:10     |
| 10:30AM| 4   | Instructor Demo: POST Fetch          | 0:05     |
| 10:35AM| 5   | Student Do: POST Fetch               | 0:15     |
| 10:50AM| 6   | Instructor Review: POST Fetch        | 0:10     |
| 11:00AM| 7   | Instructor Demo: Data Persistence    | 0:05     |
| 11:05AM| 8   | Student Do: Data Persistence         | 0:15     |
| 11:20AM| 9   | Instructor Review: Data Persistence  | 0:10     |
| 11:30AM| 10  | FLEX                                 | 0:30     |
| 12:00PM| 11  | BREAK                                | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity       | 0:10     |
| 12:40PM| 13  | Instructor Demo: Modular Routing     | 0:05     |
| 12:45PM| 14  | Student Do: Modular Routing          | 0:15     |
| 1:00PM | 15  | Instructor Review: Modular Routing   | 0:10     |
| 1:10PM | 16  | Instructor Demo: Custom Middleware   | 0:05     |
| 1:15PM | 17  | Student Do: Custom Middleware        | 0:15     |
| 1:30PM | 18  | Instructor Review: Custom Middleware | 0:10     |
| 1:40PM | 19  | Instructor Demo: Heroku              | 0:05     |
| 1:45PM | 20  | Student Do: Heroku                   | 0:15     |
| 2:00PM | 21  | Instructor Review: Heroku            | 0:10     |
| 2:10PM | 22  | Everyone Do: Git History             | 0:20     |
| 2:30PM | 23  | END                                  | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Body Parsing (5 min)

* Open `15-Ins_Body-Parsing/server.js` in your browser and demonstrate the following:

* Run `npm install && npm start` from the command line and demonstrate the following:

  * When we run the server, we find that it is listening on port `http://localhost:3001/`.

  * Inside the `server.js` file, there are two routes for `/api/reviews` -- one to handle GET requests and another to handle POST requests.

  * 🔑 In a lot of cases, POST requests will be designed to accept a request body from the client. However, to use the data that we get from the client, we need to intercept that request first and parse the data into JSON.

  * 🔑 Middleware acts as a sort of net that captures the client request before it reaches the route logic.

  * Middleware in Express.js can access both the request and response object and optionally modify the data before passing it along.

  * First we add the middleware to the server and set it up to handle JSON and URL-encoded form data:

    ```js
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    ```

  * The GET route in this demo is set up to return all the reviews from the database:

    ```js
    app.get('/api/reviews', (req, res) => {
      console.info(`${req.method} request received to get reviews`);

      return res.json(reviews);
    });
    ```

  * Next we have a POST route with a handler that will check whether the request object exists and has a property called `product`. If so, we prepare a response and then send it off to the client.

  * If we don't have a proper request object or the require property, `product`, we send a message to the client that they are missing some information in the request body:

    ```js
    app.post('/api/reviews', (req, res) => {
      console.info(`${req.method} request received to add a review`);

      let response;

      if (req.body && req.body.product) {
        response = {
          status: 'success',
          data: req.body,
        };
        res.json(`Review for ${response.data.product} has been added!`);
      } else {
        res.json('Request body must at least contain a product name');
      }

      console.log(req.body);
    });
    ```

* Open Insomnia on your local machine and demonstrate the following:

  * Create a new POST request to `localhost:3001/api/reviews` and select the Body tab. From the Body drop-down menu, choose JSON.

  * Copy the following request object and click Send:

    ```json
    {
      "product": "Corsair K100",
      "username": "1337gamer",
      "review": "This keyboard has a nice response time!",
      "id": 5
    }
    ```

  * 🔑 Notice that the POST request was successful because we provided a request body and the necessary `product` property in the object.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What other use cases for `req.body` can you think of when building your applications?

  * 🙋 We can use the `req.body` object to capture a large amount of data from the client, like a blog post, comments, image captions, and so on.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Body-Parsing/README.md`.

### 2. Student Do: Body Parsing (15 min)

* Direct students to the activity instructions found in `16-Stu_Body-Parsing/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Body Parsing for Post Requests

  Work with a partner to implement the following user story:

  * As a developer, I want my application to be backward compatible with URL-encoded data in addition to JSON.

  ## Acceptance Criteria

  * It's done when I implement Express.js middleware to parse JSON in my server.

  * It's done when I implement Express.js middleware to parse URL-encoded data in my server.

  * It's done when I use Insomnia to make a POST request to `api/upvotes/:review_id`, using JSON to upvote a given post.

  * It's done when I use Insomnia to make a POST request to `api/upvotes/:review_id`, using URL-encoded data to upvote a given post.

  * It's done when I verify that both POST requests return a response that contains the updated vote count.

  ## 📝 Notes

  Refer to the documentation:

  [Express.js documentation on req.body](http://expressjs.com/en/api.html#req.body)

  ---

  ## 💡 Hints

  How do we use Insomnia to pass data inside a `req.body` object when making a POST request to the server?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is URL encoding?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Body Parsing (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel parsing data from the request body? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Middleware

  * ✔️ `app.use()`

  * ✔️ URL-encoded data

* Open `16-Stu_Body-Parsing/Solved/server.js` in your IDE and explain the following:

  * When we open the server file, we first need to mount the middleware functions.

  * To mount the middleware functions, we use the `app.use()` method provided by Express.js. The `use()` method mounts a specific middleware to the server.

  * To make the endpoints accept both JSON, we first add middleware for parsing JSON:

    ```js
    const express = require('express');

    const port = 3001;
    const reviews = require('./db/reviews.js');

    const app = express();

    app.use(express.json());
    ```

  * Next, we add another middleware function for the parsing of URL-encoded data. This is a method on the `express` object, called `express.urlencoded()`.

  * We also pass an additional options object to `express.urlencoded()`. The `extended` option allows us to choose whether we want to parse strings with the included `qs` library:

    ```js
    app.use(express.urlencoded({ extended: true }));
    ```

    **Note**: `qs` is a library that parses and stringifies queries and provides additional security.

  * URL-encoded data represents another way to submit a request body to the server besides JSON, which we are used to.

  * For example, if we had an HTML form with an `upvote` field, the URL-encoded data would look something like this:

    ```sh
    "upvote=true"
    ```

  * Parsing this data would allow us to access these key-value pairs in an object:

    ```json
    {
      "upvote": true,
    }
    ```

  * We want this to be an accepted way of submitting a request to the server.

  * Now that we have the middleware functions mounted, let's open Insomnia and make some requests to test the server.

* Navigate to `16-Stu_Body-Parsing/Solved` in your command line and run `npm install` and `npm start`.

* Open Insomnia to demonstrate the following:

  * Create a GET request to `/api/reviews` and copy the id of one of the reviews.

  * Create a new POST request to `/api/upvotes/:review_id`, substituting `review_id` for the id that you copied from the GET request.

  * In the Insomnia interface, choose the body type as **Form URL encoded**, and enter `upvote` as the key, with a value of `true`.

  * Click Send, and you should receive the updated vote count as a response from the server:

    ```json
    "New upvote count is: 21"
    ```

  * Now let's test whether we can submit regular JSON with the same data. Create a new POST request with a URL of `/api/upvotes/:review_id`, substituting the `review_id` with the one we used in the previous request.

  * From the drop-down, choose JSON as the request body type, and provide the following object:

    ```json
      {
        "upvote": true
      }
    ```

  * Click Submit, and verify that your response includes the updated vote count:

    ```json
    "New upvote count is: 22"
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to allow different types of request bodies to the endpoints?

  * 🙋 Accepting different types of requests makes the server more resilient and provides front-end developers with more options when they use the API.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on req.body](http://expressjs.com/en/api.html#req.body), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: POST Fetch (5 min)

* Navigate to `17-Ins_POST-Fetch/server.js` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001` in your browser to demonstrate the following:

  * 🔑 When we run this application, we find that the server starts on port 3001. We also encounter a message to visit `http://localhost:3001/` in the browser.

  * 🔑 When we visit this page in the browser, a form prompts us to submit a review.

  * There are input fields for each item on the page as well as a Submit button.

  * This exercise adds front-end functionality to make a POST request to the server, using the Fetch API that is built into modern browsers.

  * After the form has been submitted, we get its status and a new ID for the review that was submitted.

* Open `17-Ins_POST-Fetch/public/scripts/index.js` in your IDE to demonstrate the following:

  * To capture the data entered by the user, we need to first create variables for the input fields on the page:

    ```js
    const userNameInput = document.getElementById('username');
    const productInput = document.getElementById('product');
    const reviewInput = document.getElementById('review');
    ```

  * We will create a new `review` object using the `.value` from these elements. Then we will save a new review, using the Fetch API to send that object to the endpoint.

  * Once we have the new `review` object, we can perform the logic inside the event handler for the form itself:

    ```js
    const reviewForm = document.getElementById('review-form');

    reviewForm.addEventListener('submit', (e) => { /* Fetch Request Logic */ }
    ```

  * In the next activity, we will add comments to the functionality of this app.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first examine the server-side route handler for posting a new review and use that information to form the POST `fetch()` request on the front end.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_POST-Fetch/README.md`.

### 5. Student Do: POST Fetch (15 min)

* Direct students to the activity instructions found in `18-Stu_POST-Fetch/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Client-Side POST Requests

  Work with a partner to add comments describing the functionality of the code found in [server.js](./Unsolved/server.js) and [index.js](./Unsolved/public/scripts/index.js).

  ## 📝 Notes

  Where does the information that we want to send to the server reside when we create the `fetch()` request?

  Refer to the documentation:

  [MDN Web Docs on using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other content types could you set when sending a request?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: POST Fetch (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel making POST requests with the Fetch API? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Fetch API

  * ✔️ Headers

  * ✔️ `body` property

* Navigate to `18-Stu_POST-Fetch/` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001` in your browser to demonstrate the following:

  * 🔑 When we run this app from the command line and open `http://localhost:3001/`, we are presented with a form to submit a review.

  * 🔑 Note also that the form accepts a username or email address, a product, and finally a review for that product.

  * After submitting the form, we are presented with a status message and the ID for the review that we just submitted.

* Open `18-Stu_POST-Fetch/server.js` in your IDE to demonstrate the following:

  * In the `server.js` file, we require the necessary dependencies, set a port for the server, and initialize the middleware to parse JSON and URL-encoded data:

    ```js
    const express = require('express');
    const path = require('path');
    const uuid = require('./helpers/uuid');

    const port = 3001;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.static('public'));
    ```

  * 🔑 We know that the front end will use the Fetch API to make a POST request to the server, so let's examine the route for handling POST requests to `/api/reviews`:

  * First we use destructuring assignment to extract the request body into `product`, `review`, and `username` variables:

    ```js
    app.post('/api/reviews', (req, res) => {
      console.info(`${req.method} request received to add a review`);

      const { product, review, username } = req.body;
    ```

  * If all three of these variables exist, we create a new `review` object and a `response` object:

    ```js
    if (product && review && username) {
      const newReview = {
        product,
        review,
        username,
        upvotes: Math.floor(Math.random() * 100),
        review_id: uuid(),
      };

      const response = {
        status: 'success',
        body: newReview,
      };
    ```

  * 🔑 In this demo, we are not writing to the actual file system, so at the end of the route handler, we simply return the `response` object, which contains a `status` and the `newReview` that we created:

    ```js
    app.post('/api/reviews', (req, res) => {
      console.info(`${req.method} request received to add a review`);

      const { product, review, username } = req.body;

      if (product && review && username) {
        const newReview = {
          product,
          review,
          username,
          upvotes: Math.floor(Math.random() * 100),
          review_id: uuid(),
        };

        const response = {
          status: 'success',
          body: newReview,
        };

        console.log(response);
        res.status(201).json(response);
      } else {
        res.status(500).json('Error in posting review');
      }
    })
    ```

  * Let's examine the front end and study the corresponding `fetch()` POST request.

* Open `18-Stu_POST-Fetch/public/scripts/index.js` in your IDE to demonstrate the following:

  * The front-end code contains some variables that select various elements in the DOM:

      ```js
      const userNameInput = document.getElementById('username');
      const productInput = document.getElementById('product');
      const reviewInput = document.getElementById('review');
      const reviewForm = document.getElementById('review-form');
      ```

  * We use the `reviewForm` variable to attach the event listener.

  * 🔑 In the event handler, we prevent the default behavior of the browser by using `e.preventDefault()`, and then we create a `newReview` object from the data that the user enters.

  * Notice that the `newReview` object is very similar to the new `review` object that we created in the back-end route handler:

    ```js
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newReview = {
        username: userNameInput.value.trim(),
        product: productInput.value.trim(),
        review: reviewInput.value.trim(),
      };

      ...
    }
    ```

  * At the end of the event handler, we invoke another helper function, called `postReview()`. This method accepts `newReview` to post, then takes the response data and shows the user an alert:

    ```js
    postReview(newReview)
      .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
      .catch((err) => console.error(err));
    ```

  * 🔑 Inside the `postReview()` helper function, we use the Fetch API to make a POST request to the server.

  * Remember that POST requests accept a path or endpoint, and an `options` object. The `options` object has `method`, `headers`, and `body` properties.

  * 🔑 Before we send the `review` object to the server, we coerce the object into a string, using the `JSON.stringify()` method.

  * If the response was successful, we log out the successful response and return the data that was used to create the alert for the client.

  * If an error occurs, we log out that error to the console using `console.error()`:

    ```js
    const postReview = (review) =>
      fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Successful POST request:', data);
          return data;
        })
        .catch((error) => {
          console.error('Error in POST request:', error);
        });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to stringify an object before sending it to the server?

  * 🙋 The route handler attempts to parse the string it receives from the client into JSON; it will throw an error if the object hasn't been converted before sending the POST request.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Data Persistence (5 min)

* Navigate to `19-Ins_Data-Persistence` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001` in your browser to demonstrate the following:

  * 🔑 When we run this app, we are presented with the same review form as last time. If we enter the required information and click Submit, we get a message that includes the review ID.

  * 🔑 There is a feature that has been added to this application that will create a new JSON file for each product that gets reviewed.

  * Let's find out where these files are being saved to the file system.

* Open `19-Ins_Data-Persistence` in your IDE to demonstrate the following:

  * Note that in the file tree we have a new folder called `/db`. A new file has been created with the same name for the product that we reviewed in the front end.

* Open `19-Ins_Data-Persistence/server.js` in your IDE to demonstrate the following:

  * Let's review the server-side logic for the `/api/reviews` POST route handler.

  * First we set up the POST route, using `app.post()`, with the path `/api/reviews`:

    ```js
    app.post('/api/reviews', (req, res) => { }
    ```

  * We also use destructuring assignment to get the values of `product`, `review`, and `username`.

  * We check whether those exist, then make a new `review` object:

    ```js
    if (product && review && username) {
      const newReview = {
        product,
        review,
        username,
        upvotes: Math.floor(Math.random() * 100),
        review_id: uuid(),
      };
    ```

  * Before we can write the data to a file using the `fs` module, we need to convert the `review` object to a string using the `JSON.stringify()` method:

    ```js
    const reviewString = JSON.stringify(newReview);
    ```

  * With the stringified version of the review, called `reviewString`, we can now write to the file system.

  * First we invoke the `fs.writeFile()` method, which accepts the arguments `path` and `data`.

  * For `path`, we use string interpolation to create the file name, using the `newReview.product` property.

  * The second argument, `data`, will be the stringified version of the review that we created earlier.

  * The callback function will log if there is an error in saving the file. Otherwise, we will log to the terminal that the save was successful:

    ```js
    fs.writeFile(`./db/${newReview.product}.json`, reviewString, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Review for ${newReview.product} has been written to JSON file`
          )
    );
    ```

  * Even though we created the logic to write to the file system, it is still necessary to conclude the route handler by sending something to the client using `res.json()`:

    ```js
    res.status(201).json(response);
    ```

  * Also, we handle any errors that may occur by sending a response with the `res.status(500)` method.

    ```js
    res.status(500).json("Error in posting review");
    ```

  * 🔑 Remember that status codes in the 200 range indicate success and status codes in the 500 range indicate an error.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do we have to import into the server file to save data to the file system?

  * 🙋 At the top of the server file, we need to require the built-in Node.js `fs` module.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Data-Persistence/README.md`.

### 8. Student Do: Data Persistence (15 min)

* Direct students to the activity instructions found in `20-Stu_Data-Persistence/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Adding a Review Overwrites Existing JSON

  Work with a partner to resolve the following issues:

  * As a user, I want to be able to append my review to the list of existing reviews so that existing reviews don't get overwritten.

  ## Expected Behavior

  When a user adds a review, the review should append to the list of reviews in the JSON file.

  ## Actual Behavior

  When a user adds a review, the entire JSON file gets overwritten with the new review, and the existing reviews get replaced.

  ## Steps to Reproduce the Problem

  1. Run the back-end server by running `npm install` and `npm start`.

  2. Click the link in the terminal to visit `http://localhost:3001/`.

  3. Fill out the necessary fields to add a review.

  4. Check the content of `db/reviews.json` and note that the old entries have been replaced.

  ---

  ## 💡 Hints

  How can the built-in `fs` module accomplish appending data to a JSON file?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Without having a database, what other tools can you use to persist data on the server?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: Data Persistence (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel making POST requests using the Fetch API? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `fs.writeFile()`

  * ✔️ Reading from the file system

  * ✔️ Appending to the file system

* Open `20-Stu_Data-Persistence/Solved/db/reviews.json` in your IDE to demonstrate the following:

  * Notice that a few of the reviews are stored in the JSON file, along with the relevant `review`, `product`, `username`, and `review_id`:

      ```json
      [
        {
          "product": "Happy Hacking Keyboard Professional 2",
          "username": "kbdfan05",
          "review": "It rules!",
          "review_id": "c763"
        },
        {
          "product": "Das Keyboard",
          "review": "I love it, but the keyboard is too big for my desk.",
          "username": "coolperson12",
          "review_id": "121d"
        }
      ]
      ```

* Navigate to `20-Stu_Data-Persistence/Solved/` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3001/` in your browser to demonstrate the following:

  * 🔑 On the page, enter a username, product, and a review to use as an example, then click Submit.

* Open `20-Stu_Data-Persistence/Solved/db/reviews.json` in your IDE to demonstrate the following:

  * Note that each review is getting appended to the list of already existing reviews.

  * 🔑 To observe how the reviews are appended rather than overwritten, let's refer to the `app.post()` route for `/api/reviews`.

* Open `20-Stu_Data-Persistence/Solved/server.js` in your IDE to demonstrate the following:

  * In the route handler for posting new reviews, we have logic that checks whether the required properties are present in the `req.body` object:

      ```js
      app.post('/api/reviews', (req, res) => {
        console.info(`${req.method} request received to add a review`);

        const { product, review, username } = req.body;

        if (product && review && username) {
          const newReview = {
            product,
            review,
            username,
            review_id: uuid(),
          };
      ```

  * 🔑 The key to resolving this bug is to first read the content of the `reviews` file so that we can add to it. After that, we will be able to write the new list of reviews in the JSON file.

  * 🔑 To read the content of the `reviews.json` file, we use the native `fs.readFile()` method from Node.js. We specify the path for the file that we want to read, the file's encoding, and a callback function.

  * The callback function will accept an `err` argument, used for error handling, and also a `data` argument, which will contain the content of the `reviews.json` file:

    ```js
    fs.readFile('./db/reviews.json', 'utf8', (err, data) => { }
    ```

  * Inside the callback function for `fs.readFile()`, we start by handling any errors that might have occurred when the file was read:

    ```js
    if (err) {
      console.error(err);
    } else {
    ```

  * If no error exists, we move on to the next step. We parse the content of the file that we just read.

  * We can assume that the data we get back will contain the existing reviews, so we store them in a variable called `parsedReviews`:

    ```js
    const parsedReviews = JSON.parse(data);
    ```

  * The next step we take is to add the new review to the list of existing reviews. To do this, we use the `push()` method because the `parsedReviews` variable is an array of objects:

    ```js
    parsedReviews.push(newReview);
    ```

  * We now have the `newReview` object included in the `parsedReviews` array, so it is time to write the file back to the file system.

  * To save the `parsedReviews` array, we invoke `fs.writeFile()`, which takes a path, the data we want to save, and a callback.

  * In this case, the path is the relative path to the `reviews.json` file. The data is the `parsedReviews` array, and the callback will simply log out any errors or success messages from the write attempt:

    ```js
    fs.writeFile(
      './db/reviews.json',
      JSON.stringify(parsedReviews, null, 4),
      (writeErr) =>
        writeErr
          ? console.error(writeErr)
          : console.info('Successfully updated reviews!')
    );
    ```

      **Note**: The second and third arguments provided by the `JSON.stringify()` method are optional arguments that help with formatting. The first is a `replacer()` function, which we set to null, and the third is the `space` argument that adds indentation, whitespace, and line break characters to make it easier to read.

  * Once we have successfully written to `reviews.json`, we can send the client a response that contains the updated review:

    ```js
      const response = {
        status: 'success',
        body: newReview,
      };

      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting review');
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do we need to do with the data we get back from `fs.readFile()` to add some content to that data?

  * 🙋 The data we get back from the `fs.readFile()` call has to be parsed, using `JSON.parse()` to convert it to an array, before we can push something to it.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Node.js documentation on fs](https://nodejs.org/api/fs.html), and stay for office hours to ask for help.

* Answer any questions before proceeding.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would you describe middleware to a friend?

  * 🙋 Middleware is an intermediary between two different applications, services, or programs. It can be thought of as a kind of translator that gathers information from the first application or service, distills it into something that can be understood by the second program or service, and then delivers that information.

  * ☝️ What is middleware in the context of Express.js?

  * 🙋 **Middleware** is a function that has access to the `request` object, the `response` object, and the next middleware in the request cycle if there is one. An example of Express.js middleware would be a function that checks whether a user is authenticated before they are routed to the desired destination.

  * ☝️ What changes can middleware make to the data before it is passed along to the next middleware in the stack?

  * 🙋 Middleware can execute code, make changes to the `request` and `response` object, completely end the request cycle, and call the next middleware in the stack.

  * ☝️ What kinds of middleware can we use?

  * 🙋 We can use middleware for authentication to check whether a user is authenticated when attempting to visit specific routes. We can also use it for logging and error handling. Finally, we can use middleware as a way to add features to an application -- like body parsers for JSON and URL-encoded data.

* Explain that today we will create custom middleware for logging and will also deploy an application with custom middleware to Heroku.

* Answer any questions before proceeding to the next activity.

### 13. Instructor Demo: Modular Routing (5 min)

* Navigate to `21-Ins_Modular-Routing/server.js` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001` in your browser to demonstrate the following:

  * 🔑 The page displays a list of UI/UX tips in addition to a form to add a new tip.

  * 🔑 When we add a new tip and click Submit, a message indicates that the tip has been added.

* Open `21-Ins_Modular-Routing/server.js` in your IDE to demonstrate the following:

  * Note that the server file contains routes that have different paths:

    ```js
    app.get('/api/tips', (req, res) => {
      console.info(`${req.method} request received for tips`);
      readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    });

    app.get('/api/feedback', (req, res) => {
      console.info(`${req.method} request received for feedback`);

      readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
    });
    ```

* This demo contains all routes inside the same file. There are many ways to create your server, but creating modular routes is ideal for readability and organization.

* We could clean up this application by creating a `routes` folder that contains all the modular routes, divided into three files -- one named `tips.js` that contains all the route logic for the endpoint `/api/tips`, one for feedback called `feedback.js` that contains all the route logic for the endpoint `/api/feedback`, and an `index.js` file that will require all the other routes in that folder.

* For the next activity, we will need to read the Express.js documentation to learn how to create modular routes. Let's get started!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of modularizing routes in your application?

  * 🙋 Modularizing routes allows for the separation of concerns and makes the code easier to read and easier to maintain.

  * ☝️ What is the first step to create modular routes for this application?

  * 🙋 We could begin by creating a `routes` folder that will contain all the routes. Then we could require all of those routes in a central `index.js` file. Finally, we can refer to the Express.js documentation to learn how to create modular routes.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Modular-Routing/README.md`.

### 14. Student Do: Modular Routing (15 min)

* Direct students to the activity instructions found in `22-Stu_Modular-Routing/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Modular Routes

  Work with a partner to implement the following user story:

  * As a developer, I want to modularize my route logic from the rest of my server so that I can separate concerns appropriately.

  ## Acceptance Criteria

  * It's done when the routes in `server.js` are broken into modules based on different endpoints.

  * It's done when I have created a `routes` directory to hold my route files.

  * It's done when I have created a `tipsRouter.js` file that uses `express.Router()`.

  * It's done when I have created a `feedbackRouter.js` file that also uses `express.Router()`.

  * It's done when I have created an `index.js` file that imports all my router files.

  * It's done when I have required my `routes.js` file inside my `server.js` file.

  ## 📝 Notes

  Refer to the documentation:

  [Express.js documentation on express.Router()](http://expressjs.com/en/guide/routing.html#express-router)

  ---

  ## 💡 Hints

  How does the separation of concerns help other developers who might work with your code in the future?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some best practices for naming your routes?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Modular Routing (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel creating modular routes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `express.Router()`

  * ✔️ `module.exports`

  * ✔️ `app.use()`

* Open `22-Stu_Modular-Routing/Solved/server.js` in your IDE and explain the following:

  * When we open the `server.js` file, we notice that the file is much cleaner and easier to read after the refactor.

  * Modular routes drastically reduce the lines of code in a single file and allow for separation of concerns:

    ```js
    const express = require('express');
    const path = require('path');
    const api = require('./routes/index.js');

    const PORT = 3001;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', api);

    app.use(express.static('public'));

    app.get('/', (req, res) =>
      res.sendFile(path.join(__dirname, '/public/index.html'))
    );

    app.get('/feedback', (req, res) =>
      res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
    );

    app.listen(PORT, () =>
      console.log(`App listening at http://localhost:${PORT} 🚀`)
    );
    ```

  * To create the modular routes, we isolate similar paths and group them together in a single file. Let's start with the `/feedback` routes.

* Open `22-Stu_Modular-Routing/Solved/routes/feedback.js` in your IDE to demonstrate the following:

  * First we create a routes folder and then a `feedback.js` file to contain the feedback router.

  * At the top of the file, we require the `express.Router()` and set it to variable `fb`:

    ```js
    const fb = require('express').Router();
    ```

  * Next, we export the `fb` variable at the bottom of the file so that we don't forget:

    ```js
    module.exports = fb;
    ```

  * We also require any dependencies used inside the route handlers:

    ```js
    const { readAndAppend } = require('../helpers/fsUtils');
    const uuid = require('../helpers/uuid');
    ```

  * Now that we have the Express.js `fb` router, we move the routes related to the `/feedback` endpoint into this file.

  * 🔑 Notice that instead of using `app.get('/api/feedback')`, we are now referring to the `fb` router to create routes.

  * 🔑 Additionally, we no longer need to specify `/api` or `/feedback`, as those will be appended to the full path later in this example:

    ```js
    // GET all feedback -- `api/feedback`
    fb.get('/', (req, res) => {
      console.info(`${req.method} request received for feedback`);

      readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
    });

    // POST new feedback -- `api/feedback`
    fb.post('/', (req, res) => {
      console.info(`${req.method} request received to submit feedback`);

      const { email, feedbackType, feedback } = req.body;

      if (email && feedbackType && feedback) {
        const newFeedback = {
          email,
          feedbackType,
          feedback,
          feedback_id: uuid(),
        };

        readAndAppend(newFeedback, './db/feedback.json');

        const response = {
          status: 'success',
          body: newFeedback,
        };

        res.json(response);
      } else {
        res.json('Error in posting feedback');
      }
    });
    ```

* Open `22-Stu_Modular-Routing/Solved/routes/tips.js` in your IDE to demonstrate the following:

  * We move all the routes relevant to `/api/tips` to its module.

  * Much like the feedback module, we import any necessary dependencies, import `express.Router()`, and export the `router` variable at the end of the file:

    ```js
    const tips = require('express').Router();
    const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
    const uuid = require('../helpers/uuid');

    tips.get('/', (req, res) => {
      console.info(`${req.method} request received for tips`);
      readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    });

    tips.post('/', (req, res) => {
      console.info(`${req.method} request received to add a tip`);
      console.log(req.body);

      const { username, topic, tip } = req.body;

      if (req.body) {
        const newTip = {
          username,
          tip,
          topic,
          tip_id: uuid(),
        };

        readAndAppend(newTip, './db/tips.json');
        res.json(`Tip added successfully 🚀`);
      } else {
        res.error('Error in adding tip');
      }
    });

    module.exports = tips;
    ```

  * Now that we have the routes isolated into modules, we require them in a central `index.js` file that we can use in the server.

* Open `22-Stu_Modular-Routing/Solved/routes/index.js` in your IDE to demonstrate the following:

  * In the routes folder, we create a new file called `index.js` and require `express`:

    ```js
    const express = require('express');
    ```

  * Next, we require the modular routes inside the `index.js` file:

    ```js
    const tipsRouter = require('./tips');
    const feedbackRouter = require('./feedback');
    ```

  * We then create the `app` variable and give it a value of `express()`:

    ```js
    const app = express();
    ```

  * Next, we mount the modules using the `app.use()` method, assigning a path or endpoint to each router:

    ```js
    app.use('/tips', tipsRouter);
    app.use('/feedback', feedbackRouter);
    ```

* Open `22-Stu_Modular-Routing/Solved/server.js` in your IDE to demonstrate the following:

  * Finally, we use the same `app.use()` method to mount the `index.js` file with a path of `/api`. This endpoint is the entry point for our other modular routes.

    ```js
    app.use('/api', api);
    ```

* Open `22-Stu_Modular-Routing/Solved/routes/index.js` in your IDE to demonstrate the following:

  * 🔑  When we look at the `index.js` file in the `routes` directory for comparison, we can see that we have used the endpoint from the `server.js` file to form our `api/tips` endpoint. Notice both use the `use()` method.

    ```js
    app.use('/tips', tipsRouter);
    ```

* Open `22-Stu_Modular-Routing/Unsolved/server.js` in your IDE to demonstrate the following:

  * Notice how our refactored code is easier-to-read. Writing easy-to-read, modular code is important to help make our code easier to debug and maintain.

    ```js
    app.get('/api/tips', (req, res) => {
      console.info(`${req.method} request received for tips`);
      readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    });
    ```

  * When we run the `server.js` file, the functionality of the application is unchanged, but it makes is much easier to read and understand.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do we need to require in each modular Express.js route file?

  * 🙋 We need to require the `express.Router()` method, assign it to a variable, and remember to export it at the end of the file.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on express.Router()](http://expressjs.com/en/guide/routing.html#express-router), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Custom Middleware (5 min)

* Navigate to `23-Ins_Custom-Middleware/server.js` in your command line and run `npm install` and `npm start`.

* Open Insomnia and make a GET request to `http://localhost:3001/`.

  * 🔑 When running the application, we find that the server is listening on port 3001.

  * 🔑 Also, after we request `http://localhost:3001/`, the server logs the request type to the console:

    ```sh
    Listening for requests on port 3001! 🏎️
    GET request to /
    GET request to /api
    GET request to /test
    GET request to /reviews
    ```

  * The server is making use of custom middleware functions to log out requests to the console.

  * We have worked with middleware to parse JSON and URL-encoded requests, but now we get to create the middleware function using Express.js to add functionality to the app.

  * Let's examine the code to learn how to implement custom middleware in an application!

* Open `23-Ins_Custom-Middleware/server.js` in your IDE to demonstrate the following:

  * Middleware functions have access to the request object (`req`), the response object (`res`), the `next()` function, and the application’s request-response cycle.

  * The `next()` function invokes the next middleware function and also relinquishes control of the data:

    ```js
    const middleware = (req, res, next) => { ... }
    ```

  * We create a function titled `middleware` that logs out the request type and request path to the console. It also uses ANSI escape codes to print the output in yellow to differentiate it from the rest of the output:

    ```js
    const middleware = (req, res, next) => {
      const yellow = '\x1b[33m%s\x1b[0m';

      console.log(yellow, `${req.method} request to ${req.path}`);

      next();
    };
    ```

    **Note**: ANSI escape codes are sequences that control the location, color, and font style of text inside the terminal window.

  * Next, we mount the `middleware` function using the Express.js `use()` method, passing in the middleware function:

    ```js
    app.use(middleware);
    ```

  * The routes in this example are minimal but will be sufficient for causing the middleware to run and log requests to the console:

    ```js
    app.get('/', (req, res) => res.json(`GET route`));
    app.post('/', (req, res) => res.json(`POST route`));
    app.put('/:id', (req, res) => res.json(`PUT route`));
    app.delete('/:id', (req, res) => res.json(`DELETE route`));
    app.patch('/:id', (req, res) => res.json(`PATCH route`));
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What actions can middleware execute on the data?

  * 🙋 Custom middleware functions can manipulate the request or response data, end the request-response cycle, or run any code inside the middleware function.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Custom-Middleware/README.md`.

### 17. Student Do: Custom Middleware (15 min)

* Direct students to the activity instructions found in `24-Stu_Custom-Middleware/README.md`.

* Break your students into pairs that will work together on this activity.

  ````md
  # 🐛 Middleware Logging Not Working

  Work with a partner to resolve the following issues:

  * As a developer, I want to use logging middleware in my application so that I can know when a specific endpoint has been used.

  ## Expected Behavior

  When a user makes a request to an endpoint, the middleware will intercept the request, log out information about the request (GET, POST), and log it to the console.

  ## Actual Behavior

  When a user makes a request to endpoints in the application, we can see that something was written to the filesystem, but no logging by custom middleware takes place.

  ## Steps to Reproduce the Problem

  1. Navigate to `24-Stu_Custom-Middleware/Unsolved` and run `npm install` and `npm start`.

  2. Using Insomnia, make a POST request to `http://localhost:3001/api/tips` with the following request body:

      ```json
      {
      "username": "Sarah",
      "topic": "UI",
      "tip": "Make your application accessible by adding alt properties "
      }
      ```

  3. In the terminal where your Express.js server is running, note that the logging middleware failed to log that the request was received.

  ---

  ## 💡 Hints

  How can checking where the middleware is defined help you troubleshoot this bug?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a **wildcard rule** when defining route paths?

  Use [Google](https://www.google.com) or another search engine to research this.
  ````

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Custom Middleware (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with custom middleware? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Mounting custom middleware

  * ✔️ Order of imports

  * ✔️ `app.use()`

* Open `24-Stu_Custom-Middleware/Solved/middleware/clog.js` in your IDE to demonstrate the following:

  * 🔑 Note that the middleware function accepts the `req` object, the `res` object, and the `next()` method as arguments:

    ```js
    const clog = (req, res, next) => { ... };
    ```

  * Requests are intercepted by the middleware function and then enter a `switch` statement. The `switch` statement will run some code depending on the type of request method.

  * We can also see a variable, `fgCyan`, that contains an ANSI escape sequence to output strings in color to the console:

  * We have the option of using `res.end()` or `res.redirect()` to end the request-response cycle inside the middleware function, but for this example we want the cycle to continue. For that reason, we invoke the `next()` method at the end of the function:

    ```js
    const clog = (req, res, next) => {
      const fgCyan = '\x1b[36m';
      switch (req.method) {
        case 'GET': {
          console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
          break;
        }
        case 'POST': {
          console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
          break;
        }
        default:
          console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
      }

      next();
    };
    ```

  * To use custom middleware in the server, we have to ensure that it is being exported for use in other files.

  * Inside the `clog.js` file, the custom middleware function is being exported with the name `clog`:

    ```js
    exports.clog = clog;
    ```

* Open `24-Stu_Custom-Middleware/Solved/server.js` in your IDE to demonstrate the following:

  * To resolve the bug associated with this activity, first we require the middleware function `clog`:

    ```js
    const { clog } = require('./middleware/clog');
    ```

  * Next, we mount the middleware function using the `app.use()` method provided by Express.js:

    ```js
    app.use(clog);
    ```

* Open Insomnia and submit a new POST request to `http://localhost:3001/` to demonstrate the following:

  * After we require the middleware function in the server and mount it in the correct order inside the file, the request is logged in the terminal similar to the following:

    ```bash
    Express server listening on port 3001! Visit http://localhost:3001/ in your browser
    📗 GET request to /
    📗 GET request to /styles/index.css
    📗 GET request to /scripts/index.js
    📗 GET request to /api/tips
    ```

  * Move the `app.use(clog)` method just above the `app.listen()` method and run the POST request again:

    ```bash
    Express server listening on port 3001! Visit http://localhost:3001/ in your browser
    ```

  * Note that the requests are no longer logged to the console.

  * 🔑 Order is important, as the file gets parsed from top to bottom. We want to make sure that the custom middleware mounts at the top of the `server.js` file.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we end a request using custom middleware?

  * 🙋 We can use `res.end()` or `res.redirect()` to end the request-response cycle in custom middleware functions.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Express.js documentation on writing middleware](https://expressjs.com/en/guide/writing-middleware.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Heroku (5 min)

* Navigate to `25-Ins_Heroku` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001` in your browser to demonstrate the following:

  * 🔑 We have a single static webpage that is being served by Express.js in this demo.

  * 🔑 To share work with other people and host web apps, we will use a service called Heroku.

  * Let's work through these steps together to prepare for the next activity.

  * In your terminal, press `control + c` to end the local web server and free up your terminal for the next step.

  * First make sure that you have already installed the Heroku CLI, by running the command `heroku --version` in your terminal.

    **Note**: For anyone who receives a `command not found` error, share the link to the [Heroku CLI download page](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

  * Next, using a dedicated secondary CLI, we will log in using the Heroku CLI:

    ```sh
    heroku auth:login
    ```

    > **Note** This will open a new browser window. Once you are logged in, it will ask you to close the browser and return to the terminal. If you encounter an issue and the prompt hangs after logging in, it is safe to exit by pressing `control + c` and confirming with `Y`. As an alternative, you can also try the legacy login method by using `heroku login -i`.

  * We will create a Git repository out of this demo and make a commit with all the files:

    ```sh
    git init
    git add -A
    git commit -m "Initial commit"
    ```

  * Heroku provides preconfigured environment variables for available ports. Let's make sure the server is configured to use them.

* Open `25-Ins_Heroku/server.js` in your IDE to demonstrate the following:

  * In the server file, double-check that the port variable is set to `process.env.PORT || 3001`.

  * Now that we have logged in, initialized a Git repo, and checked the port variable, we create a new app on Heroku using the following command -- which will also add the remote to the repository:

    ```sh
    heroku create
    ```

  * Then we check whether the remote URL for Heroku was added to the repository:

    ```sh
    git remote -v
    ```

  * Then we just push to Heroku:

    ```sh
    git push heroku main
    ```

  * This might take a moment, but once it completes, run `heroku open` to view the webpage!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does `process.env.PORT` refer to in the server file?

  * 🙋 `process.env.PORT` refers to an environment variable that is specified by Heroku.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Heroku/README.md`.

### 20. Student Do: Heroku (15 min)

* Direct students to the activity instructions found in `26-Stu_Heroku/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Deploy an Express.js App to Heroku

  Work with a partner to implement the following user story:

  * As a web developer, I want to deploy my application to services like Heroku so that I can share my app with the world.

  ## Acceptance Criteria

  * It's done when I have initialized a Git repository by running `git init` at the root of my existing project.

  * It's done when I have modified the `PORT` variable in `server.js` according to the Heroku documentation.

  * It's done when I have created a new Heroku app using the Heroku CLI.

  * It's done when I have verified that the Heroku remote URL was added using the appropriate Git command.

  * It's done when I have added and committed all my files and pushed to Heroku.

  * It's done after I have confirmed that the application was deployed successfully by running `heroku open`.

  ## 📝 Notes

  Refer to the [Full-Stack Blog on installing the Heroku CLI](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli).

  Refer to the documentation:

  [Heroku documentation on getting started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

  [Heroku documentation on creating a Heroku remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote)

  ---

  ## 💡 Hints

  How can you use the command `heroku logs --tail` to troubleshoot deployment errors?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * When you created your Heroku account, you might have seen the [Heroku dashboard](https://dashboard.heroku.com/). What useful information can you learn about your application from this page?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Heroku (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel deploying applications to Heroku? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Heroku CLI

  * ✔️ `process.env.PORT`

  * ✔️ `heroku create`

* Open `26-Stu_Heroku/Unsolved/server.js` in your IDE and explain the following:

  * 🔑 The first step to deploying this application is to modify the `PORT` variable inside the `server.js` file:

    ```js
    const PORT = process.env.PORT || 3001;
    ```

  * 🔑 Next, we create a Git repository inside the folder that contains the code we want to deploy.

  * We also add and commit the files so that we have something to push to Heroku:

    ```sh
    git init
    git add -A
    git commit -m "Initial commit"
    ```

  * We need to create a new Heroku app for the UI/UX tips tracker:

    ```sh
    heroku create
    ```

  * Then we check whether the remote URL for Heroku was added to the repository:

    ```sh
    git remote -v
    ```

  * With the Git repository created, the code committed, and the Heroku app ready to deploy, we can now push directly to Heroku to run the build:

    ```sh
    git push heroku main
    ```

  * A successful build will output something like the following example:

    ```bash
    remote: -----> Build succeeded!
    remote: -----> Discovering process types
    remote:        Procfile declares types     -> (none)
    remote:        Default types for buildpack -> web
    remote:
    remote: -----> Compressing...
    remote:        Done: 33.8M
    remote: -----> Launching...
    remote:        Released v3
    remote:        https://vast-cliffs-60302.herokuapp.com/ deployed to Heroku
    remote:
    remote: Verifying deploy... done.
    To https://git.heroku.com/vast-cliffs-60302.git
    ```

  * We have pushed and built the Heroku app, so the next step is to verify that it works. We will open the app directly in the browser:

    ```sh
    heroku open
    ```

* Open a new integrated terminal window in your IDE to demonstrate the following:

  * We can view the output of the middleware function by checking the Heroku logs:

    ```sh
    heroku logs --tail
    ```

  * Note that we can see any requests made to the remote server, thanks to the custom middleware function.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does deploying your projects help you with your career goals?

  * 🙋 Having an application deployed helps show employers your work and demonstrate that you can learn a new cloud platform with relative ease.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Heroku deployment guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-History/README.md`.

### 22. Everyone Do: Git History (20 min)

* Open the [Git documentation on git log](https://www.git-scm.com/docs/git-log) in your browser and explain the following:

  * The command `git log` provides a list of commits that have been made to a given repository. You can use it to query specific folders, authors, date ranges, and keywords, to get specific information about the history of your repository.

  * In this Git Guide, we explore the history of an open source project to learn how to use some lesser-known Git commands.

* Direct students to the activity instructions found in `27-Evr_Git-History/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* Open your command line and demonstrate the following:

  * When we run `git log`, we get an output to the command line that contains a list of previous commits. We can filter this information further to get exactly what we are looking for.

  * In preparation for the activity, visit the [GitHub repository for Inquirer.js](https://github.com/SBoudrias/Inquirer.js) and clone the repository to your local machine:

    ```bash
    git clone git@github.com:SBoudrias/Inquirer.js.git
    cd Inquirer.js
    ```

  * 🔑 This Git Guide also covers some additional commands, including `git blame`. For more information, refer to the [Git documentation on git blame](https://www.git-scm.com/docs/git-blame).

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
