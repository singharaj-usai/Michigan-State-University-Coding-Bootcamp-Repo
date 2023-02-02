# 09.5 Full-Time Lesson Plan: Advanced Mongoose

## Overview

In this lesson, you will teach students how to create computed properties in Mongoose using virtual properties. You will also cover populating a subdocument in Mongoose after it has been created. Finally, you will go through the various create, read, update, and delete operations that can be performed on a Mongoose document.

## Instructor Notes

* In this lesson, students will complete activities `21-Ins_Virtuals` through `28-Stu_Mini-Project`.

* This lesson features a mini-project that requires students to use MongoDB Atlas. MongoDB Atlas is a cloud-based MongoDB service that provides high availability, high performance, and a simple, intuitive interface. MongoDB Atlas is available for free, but it does require an account in order to create a cluster. To create an account, refer to the [MongoDB Atlas setup guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas).

* Students might find it difficult to understand the difference between data that gets stored in the database and information that gets computed on the fly using virtual properties. Be sure to read the [Mongoose docs on virtual properties](https://mongoosejs.com/docs/tutorials/virtuals.html) before class to ensure that help teach students the difference between the two.

* Most activities in this lesson will require students to run the seed script by running `npm run seed` at the command line inside the `Unsolved` directory for each activity.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, simply use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the "Everyone Do: Git" activity, walk through it using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

## Learning Objectives

By the end of class, students will be able to:

* Explain and execute CRUD operations using Mongoose subdocuments.

* Configure Heroku for deployment of a Node.js application using MongoDB Atlas.

* Implement a Mongoose virtual property to create computed properties.

## Time Tracker

| Start  | #   | Activity Name                                 | Duration |
|---     |---  |---                                            |---       |
| 10:00AM| 1   | Instructor Do: Welcome                        | 0:10     |
| 10:10AM| 2   | Instructor Demo: Virtuals                     | 0:05     |
| 10:15AM| 3   | Student Do: Virtuals                          | 0:15     |
| 10:30AM| 4   | Instructor Review: Virtuals                   | 0:10     |
| 10:40AM| 5   | Instructor Demo: Subdocument Population       | 0:05     |
| 10:45AM| 6   | Student Do: Subdocument Population            | 0:15     |
| 11:00AM| 7   | Instructor Review: Subdocument Population     | 0:10     |
| 11:10AM| 8   | Instructor Demo: CRUD Subdocuments            | 0:05     |
| 11:15AM| 9   | Student Do: CRUD Subdocuments                 | 0:15     |
| 11:30AM| 10  | Instructor Review: CRUD Subdocuments          | 0:10     |
| 11:40AM| 11  | Everyone Do: Git                              | 0:20     |
| 12:00PM| 12  | BREAK                                         | 0:30     |
| 12:30PM| 13  | Instructor Demo: Mini Project                 | 0:05     |
| 12:35PM| 14  | Student Do: Mini Project                      | 0:60     |
| 1:35PM | 15  | Instructor Review: Mini Project               | 0:10     |
| 1:45PM | 16  | Introduce Challenge                           | 0:05     |
| 1:50PM | 17  | FLEX                                          | 0:40     |
| 2:30PM | 18  | End                                           | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Congratulate students on their hard work and explain where MongoDB fits into the bigger picture as we move into the MERN stack, which is a combination of MongoDB, Express, React, and Node.js that is used to build web applications.

* The topic of today's lesson is using Mongoose to build out fully functional CRUD applications. These applications will feature the ability to create, read, update, and delete data, and also perform those same operations on subdocuments. Additionally, students will learn how to deploy a back-end application to Heroku using MongoDB Atlas.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would someone use something like MongoDB Atlas?

  * 🙋 MongoDB Atlas is a great option for a developer to deploy their database to a remote server. It has the ability to scale automatically, and it's free. It also works well with Heroku by giving the developer quick snippets for the connection string and database name.

  * 🙋 What are the advantages of using MongoDB as opposed to a relational database? What are the disadvantages?

  * ☝️ The advantages of MongoDB include the ability to store data in a schema-less way. Additionally, with a wrapper like Mongoose, we can define the structure of our data in advance and keep our application as modular as possible. Mongoose also makes it easy to create relationships among documents and subdocuments.

  * 🙋 What does it mean when people say that Mongoose is a wrapper around MongoDB?

  * ☝️ A wrapper is something that wraps around another piece of software. Mongoose is a wrapper around MongoDB and provides a set of methods that allow us to interact with MongoDB in a more familiar way.

  * 🙋 How can we connect our Heroku application to MongoDB Atlas?

  * ☝️ We can use Heroku's MongoDB add-on to connect our application to MongoDB Atlas, or we can get the connection string and database name and add them to our Heroku application as environment variables. We will use the latter option in the mini-project in order to get acquainted with connection strings in general.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Virtuals (5 min)

* Open `21-Ins_Virtuals/server.js` in your IDE and run `npm i && npm run seed && npm start` from your command line to demonstrate the following:

  * 🔑 In this demo, we will be using virtuals to create computed properties that are not stored in the database.

  * First, let's review the folder structure of this application:

    ```sh
    .
    ├── config
    │   └── connection.js
    ├── controllers
    │   ├── commentController.js
    │   └── postController.js
    ├── models
    │   ├── Comment.js
    │   ├── Post.js
    │   └── index.js
    ├── package.json
    ├── routes
    │   ├── api
    │   │   ├── commentRoutes.js
    │   │   ├── index.js
    │   │   └── postRoutes.js
    │   └── index.js
    ├── server.js
    ├── utils
    │   ├── data.js
    │   └── seed.js
    ```

  * To keep things organized, we broke up our code into multiple files. In the server file, you can see that we import the database connection and routes at the top:

    ```js
    const express = require('express');
    const db = require('./config/connection');
    const routes = require('./routes');

    const PORT = 3001;
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(routes);

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
      });
    });
    ```

  * Similarly, we created a central `index.js` file for our `api/`, `models/`, and `controllers/` to keep things organized.

  * Now that we have an understanding of the folder structure, let's take a look at our `models` folder and dive into the main concept for this demo: virtuals.

* Open `21-Ins_Virtuals/models/Post.js` in your IDE to demonstrate the following:

  * Virtuals give us a way to create computed properties that are not stored in the database.

  * Virtuals also allow the user of your API to get computed properties from the server without having to write front-end logic to calculate them.

  * The example used in this demo is a computed property that calculates the number of comments on a post.

  * **Important**: Mongoose will not include virtuals in the schema unless you explicitly tell it to. As a result, we add an options object to our schema definition to tell Mongoose to include virtuals by setting the `virtuals` property to `true`.

  * In addition, you will see that we have a `toJSON` property that is used to indicate which properties of the document should be returned when the document is converted to JSON. Virtuals are not included by default, so we have to add them to the `toJSON` property.

  * Our `postSchema` has the following properties:

    ```js
    const postSchema = new Schema(
      {
        text: String,
        username: String,
        comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
    );
    ```

  * To create a virtual property, we use the `virtual` method and pass in the name of the property that we want to create. In this case, we want to create a property called `commentCount` that will return the number of comments on a post.

  * We then define a getter function that returns the value of the property that we want to create.

  * Virtuals are defined in the `Post` model.

    ```js
    postSchema.virtual('commentCount').get(function () {
      return this.comments.length;
    });
    ```

  * We can then access the property in our `Post` model.

    ```js
    post.commentCount;
    ```

* Make a GET request to `http://localhost:3001/api/posts` in Insomnia and demonstrate the following:

  * You should see a list of posts with a `commentCount` property. Whereas our seed data is set to have a static number of comments, we can see that the `commentCount` property is dynamically calculated.

    ```json
    [
      {
        "comments": [
          "6113e9dbad15d35c4b407adc"
        ],
        "_id": "6113e9dbad15d35c4b407ae0",
        "text": " blandit curabitur imsum nullam hendrerit ut imperdiet nunc a nullam",
        "username": "Alex",
        "commentCount": 1
      },
      {
        "comments": [
          "6113e9dbad15d35c4b407adb"
        ],
        "_id": "6113e9dbad15d35c4b407ae1",
        "text": " nullam libero gravida orci lorem lacinia lorem nullam imperdiet dolor",
        "username": "Zennon",
        "commentCount": 1
      }
    ]
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we use virtuals to create computed properties that are not stored in the database?

  * 🙋 We could build a virtual property in our model by using the `virtual` method and passing in the name of the property that we want to create. The `get` method is then used to define the getter function that will return the computed property.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Virtuals/README.md`.

### 3. Student Do: Creating Indexes (15 min)

* Direct students to the activity instructions found in `21-Stu_Creating_Indexes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Creating Indexes

  In this activity, you will create an index on your object store that can be used to query data.

  ## Instructions

  * In your browser's DevTools, be sure to have deleted the "todoList" database from the list of IndexedDB in the Application tab before starting this activity!

  * Write code to request an IndexedDB database instance.

  * On success, log the result to your console.

  * Inside the `onupgradeneeded` method, create an object store for your database called `toDoList`. Next, create three indexes for your ToDoList called `icebox`, `inprogress` and `complete`.

  ## 💡 Hint(s)

  * Use the [createIndex](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex) docs if you are stuck.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Student Do: Virtuals (15 min)

* Direct students to the activity instructions found in `22-Stu_Virtuals/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ````md
  # 🏗️ Create a Virtual

  Work with a partner to implement the following user story:

  * As a developer, I want to implement a Mongoose virtual in my schema to get and set data.

  * As a developer, I do not want that data to persist in the database, so I can get and set computed properties on documents.

  ## Acceptance Criteria

  * It is done when I have defined a virtual property on the `userSchema` called `fullName` that will get the `first` and `last` attributes and return a string containing the full name of the user.

  * It is done when I have defined a `set()` method on the `fullName` virtual that takes a string containing the full name of the user and sets the virtual attribute values for `first` and `last`.

  * It is done when I allow the schema to include virtuals in `res.json()` by setting the `toJSON` schema option to `{ virtuals: true }`.

  * It is done when I have run the code and added a user using Insomnia.

    ```json
    {
        "first": "Ada",
        "last": "Lovelace",
        "age": 36
    }
    ```

  * It is done when I have performed a GET request to `http://localhost:3001/api/users/` to get all users and confirmed that the `fullName` virtual attribute is present in the response.

  ## 💡 Hints

  * What method do we use on a Mongoose schema to create a virtual property?

  * Why do we need the `this` keyword when working with virtuals?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some of the limitations of Mongoose virtuals as they relate to queries?

  Use [Google](https://www.google.com) or another search engine to research this.
  ````

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Virtuals (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with virtual properties? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `toJSON: { virtuals: true }`

  * ✔️ `this` keyword inside controllers

* Open `22-Stu_Virtuals/Solved/models/User.js` in your IDE and explain the following:

  * To get the full name of a user, we need to access the `first` and `last` attributes of the user. These attributes are part of the `userSchema`.

    ```js
    const userSchema = new Schema(
      {
        first: String,
        last: String,
        age: Number,
      }
    );
    ```

  * Next, we create a virtual property on the `userSchema` called `fullName`, which will get the `first` and `last` attributes and return a string that contains the full name of the user.

  * **Important**: The `this` keyword is used inside the `userSchema`.

  * To do this, we invoke the `virtual` method on the `userSchema` and pass in the name of the property that we want to create. Then we use the `get` method to define the getter function that will return the computed property.

    ```js
    userSchema.virtual('fullName').get(function () {
      return `${this.first} ${this.last}`;
    });
    ```

  * We also want the virtual property to be able to work in the other direction by setting the `first` and `last` attributes of the user. We can do this by defining a `set` method on the `fullName` virtual.

  * Next, we define a `set()` method on the `fullName` virtual that takes a string containing the full name of the user and sets the virtual attribute values for `first` and `last`.

    ```js
    userSchema.virtual('fullName').set(function (v) {
      const first = v.split(' ')[0];
      const last = v.split(' ')[1];
      this.set({ first, last });
    });
    ```

  * We can also chain the getter and setter methods for a virtual property.

    ```js
    userSchema
      .virtual('fullName')
      .get(function () {
        return `${this.first} ${this.last}`;
      })
      .set(function (v) {
        const first = v.split(' ')[0];
        const last = v.split(' ')[1];
        this.set({ first, last });
      });
    ```

  * Finally, we allow the schema to include virtuals in `res.json()` by setting the `toJSON` schema option to `{ virtuals: true }`.

    ```js
    const userSchema = new Schema(
      {
        first: String,
        last: String,
        age: Number,
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
    );
    ```

* Now let's add a user to the database and see if we can get the full name of the user.

* Make a POST request to `http://localhost:3001/api/users` with the following JSON and demonstrate the following:

  * Notice that the `fullName` virtual property is present in the response after sending the request that contains the following data:

    ```json
    {
      "first": "Ada",
      "last": "Lovelace",
      "age": 36
    }
    ```

  * Confirm that the `fullName` virtual property is present in the response.

    ```json
    {
      "_id": "611419e5c033b36b1775193f",
      "first": "Ada",
      "last": "Lovelace",
      "age": 36,
      "__v": 0,
      "fullName": "Ada Lovelace"
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of virtual properties?

  * 🙋 The benefits of virtual properties are that they allow us to define a property that is computed from other properties, and they also allow us to get information without needing that data to be stored in the database.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Subdocument Population (5 min)

* 💡 In the command line, navigate to `23-Ins_Subdoc-Population` and run `npm i && npm run seed && npm start` to seed the database with some data and start the server.

* To demonstrate the `populate` method, let's first add a `user` to the database. The user will also have a posts array that will be populated with a few posts.

* Make a POST request to `http://localhost:3001/api/users` with the following JSON and demonstrate the following:

  * First, let's add a user to the database.

    ```json
    {
      "first": "Ada",
      "last": "Lovelace",
      "age": 36
    }
    ```

  * You will see the new user in the response, including an `_id` and `posts` array. The posts array will be empty, because we haven't populated it yet.

  * For now, let's copy the `_id` of the new user and use it to populate the posts array as shown in the response we got from the POST request.

    ```json
    {
      "posts": [],
      "_id": "61152e041fad508595cb68d6",
      "first": "Ada",
      "last": "Lovelace",
      "age": 36,
      "__v": 0,
      "fullName": "Ada Lovelace"
    }
    ```

  * Copy the `_id` of the new user and use it to populate to the posts array for our new user, Ada.

* Make a POST request to `http://localhost:3001/api/posts` with the following JSON and demonstrate the following:

  * Now we can make a post that we can use to populate the posts array for our new user. Be sure to include a `userId` property that references the `_id` of the new user that we just created.

    ```json
    {
      "meta": {
        "upvotes": 156,
        "bookmarks": 12
      },
      "published": true,
      "text": "Why pineapple is awesome on Pizza: A true story",
      "userId": "61152e041fad508595cb68d6"
    }
    ```

  * You should see a response that looks like the following:

    ```json
    "Created the post 🎉"
    ```

  * Now let's make a GET request for all users and see if the posts array is populated for our new user.

* Make a GET request to `http://localhost:3001/api/users/<user_id_of_the_new_user>` and demonstrate the following:

  * You should see the new user in the response, including an `_id` and `posts` array. The posts array should now have a post.

    ```json
    {
      "posts": [
        {
          "meta": {
            "upvotes": 454,
            "bookmarks": 10
          },
          "published": true,
          "_id": "611535921fad508595cb68e7",
          "text": "Why pineapple is awesome on Pizza: A true story",
          "createdAt": "2021-08-12T14:52:02.536Z",
          "__v": 0,
          "upvoteCount": 454
        }
      ],
      "_id": "61152e041fad508595cb68d6",
      "first": "Ada",
      "last": "Lovelace",
      "age": 36,
      "fullName": "Ada Lovelace"
    }
    ```

  * You might be wondering how the `posts` array was populated if all we stored was a reference to the post's id.

* Open `23-Ins_Subdoc-Population/controllers/userController.js` in your IDE to demonstrate the following:

  * Notice that we call on the `populate` method to populate the posts array for our new user inside the `getSingleUser` method, which is inside the `userController`.

  * The `populate` method is a Mongoose method that allows you to populate a subdocument. The `populate` method takes a path to the subdocument and a path to the parent document. In this case, we are populating the posts array for the user.

    ```js
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('posts')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we use the `populate` method to populate the posts array for our new user?

  * 🙋 We could use the `populate` method to populate any subdocument by passing in a path to the subdocument and a path to the parent document when creating the method.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Subdoc-Population/README.md`.

### 6. Student Do: Subdocument Population (15 min)

* Direct students to the activity instructions found in `24-Stu_Subdoc-Population/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ````md
  # 🐛 Tag Population Not Working

  Work with a partner to resolve the following issue:

  * As a user, I should be able to see all tags associated with a `post` after running the Mongoose populate method on the `Posts` model.

  ## Expected Behavior

  When a user queries a `post`, the controller should return the `post` with an array that is populated with the associated `tags`.

  ## Actual Behavior

  When a user runs the application in an attempt to get a post, they are presented with the following error:

  ```sh
  TypeError: Invalid schema configuration: `Tag` is not a valid type within the array `tags`
  ```

  ## Steps to Reproduce the Problem

  Follow these steps to reproduce the problem:

  1. In the command line, navigate to `Unsolved/` and run `npm i`.

  2. Run `npm run seed` to populate an example database, or `npm run dev` to run the development server.

  3. Notice the following error: ``TypeError: Invalid schema configuration: `Tag` is not a valid type within the array `tags``.

  ## 💡 Hints

  * When referencing another schema inside a Post schema, what attributes and types must be specified?

  * Use `npm run dev` to automatically restart your application after you save changes.

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the performance benefits associated with using the populate method in Mongoose as opposed to the `$lookup` operator in MongoDB?

  Use [Google](https://www.google.com) or another search engine to research this.
  ````

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Subdocument Population (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with populating subdocuments? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `Schema.Types.ObjectId`

  * ✔️ `ref`

  * ✔️ `populate()`

* Open `24-Stu_Subdoc-Population/Solved/models/Post.js` in your IDE and explain the following:

  * 🔑 In this activity, we are again working with the `Posts` schema, but this time each `post` will have an associated `tags` array that is linked via the `ref` attribute.

    ```js
    const postSchema = new Schema(
      {
        published: {
          type: Boolean,
          default: false,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        tags: [
          {
            type: Schema.Types.ObjectId,
            ref: 'tag',
          },
        ],
        text: {
          type: String,
          minLength: 15,
          maxLength: 500,
        },
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
    );
    ```

  * 🔑  To associate a subdocument with a parent document, we use the `ref` attribute. This attribute takes a string that represents the path to the subdocument. In our case, we are linking the `tags` array to the `Tag` schema and listing the type of the subdocument as `Schema.Types.ObjectId`.

  * This means that we will only reference `Tag` documents by their `_id` attribute instead of the entire document.

* Open `24-Stu_Subdoc-Population/models/Tag.js` in your IDE and explain the following:

  * For organization, we first imported all the models into one central file, `models/index.js`. Inside that file, we require both the `Post` and `Tags` schemas and export them.

    ```js
    const Tags = require('./Tags');
    const Post = require('./Post');

    module.exports = { Tags, Post };
    ```

* Open `24-Stu_Subdoc-Population/Solved/controllers/tagController.js` in your IDE to demonstrate the following:

  * First, we use the imported `Tags` schema from `models/index.js` and invoke one of the built-in Mongoose methods, `.find()`, to find all the tags in the database.

  * We also chained an additional method called `select`, which allows us to limit the fields returned from the database. In our case, we are removing the `-__v` field, which is the Mongoose version number.

    ```js
    getTags(req, res) {
      Tags.find({})
        .select('-__v')
    ...
    ```

  * In this controller, we also have logic to create a new tag, and subsequently update a post with that tag.

  * To do this, we created a `createTag` method that takes a tag object and creates a new tag document. After the new tag is created, we associate it with the post by using the `$addToSet` operator.

  * All of this logic is wrapped in a `then` block that is executed when the `createTag` method is successful. We use the `findOneAndUpdate` method to update the post with the new tag.

  * The `findOneAndUpdate` method takes two parameters: the query to find the document to update, and the update object.

  * The `addToSet` operator is a MongoDB operator that adds a value to an array if it does not already exist.

    ```js
    createTag(req, res) {
      Tags.create(req.body)
        .then((tag) => {
          return Post.findOneAndUpdate(
            { _id: req.body.postId },
            { $addToSet: { tags: tag._id } },
            { new: true }
          );
        })
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'Tag created, but found no post with that ID' })
            : res.json('Created the tag 🎉')
        )
      ...
    ```

  * It is important to handle errors in this method. If the `createTag` method fails, we want to return a 500 error to the user.

    ```js
    // continued from above
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
    ```

* Open `24-Stu_Subdoc-Population/Solved/controllers/postController.js` in your IDE to demonstrate the following:

  * First, we use the imported `Posts` schema from models/index.js and invoke one of the built-in Mongoose methods, `.find()`, to find all the posts in the database.

  * In the `getPosts` method, we use the `populate` method to populate the `tags` array for each `id` in the array that is associated with a tag.

  * 🔑 In the `populate` method, we pass in an object with a `path` and `select` property. The `path` property specifies the path to the subdocument, and the select property removes the `-__v` field in those subdocuments. In this case, we use the `populate` method to populate the tags array for each post.

    ```js
    getPosts(req, res) {
    Post.find()
      .populate({ path: 'tags', select: '-__v' })
      .then((posts) => res.json(posts))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
    },
    ```
  
  * We also need to update the `getSinglePost` method with the same `populate` method. In this case, we use the `populate` method to populate the tags array for a single post.

    ```js
    getSinglePost(req, res) {
    Post.findOne({ _id: req.params.postId })
      .populate({ path: 'tags', select: '-__v' })
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
    },
    ```

  * Let's make a POST request to add a new tag to a post, but first let's make a GET request and pick one of our existing posts to work with.

  * Make a GET request to `http://localhost:3001/api/posts/` and copy the `_id` of one of the posts. Let's imagine for this example that the `_id` is `6116dd5c38283bccf74a2353`.

  * Next, make a POST request to `http://localhost:3001/api/tags/` with the following JSON body, but replace the `_id` with the `_id` of the post you picked:

    ```json
    {
      "postId": "6116dd5c38283bccf74a2353",
      "tagName": "new tag",
      "color": "red"
    }
    ```

  * Finally, make a GET request to `http://localhost:3001/api/posts/<post_id>` to see the new tag.

  * You should see the new tag in the `tags` array.

    ```json
    {
      "published": true,
      "tags": [
        {
          "_id": "6228e950c381d33a1bc059f5",
          "tagname": "#658759",
          "color": "#658759",
          "getTagCss": "color: #658759",
          "id": "6228e950c381d33a1bc059f5"
        },
        {
          "_id": "622901c757f4b7f60b9baf33",
          "tagName": "new tag",
          "color": "red",
          "getTagCss": "color: red",
          "id": "622901c757f4b7f60b9baf33"
        }
      ],
      "_id": "6116dd5c38283bccf74a2353",
      "text": " a ut blandit consectetur ut imperdiet hendrerit orci lorem orci adipiscing lacinia ut ut imperdiet ornare consectetur ornare imsum a dolor nunc vel ornare imsum adipiscing odio nunc gravida quis elit purus imperdiet hendrerit a a nunc elit nullam gravida purus lacinia libero adipiscing hendrerit odio gravida quis ut hendrerit",
      "createdAt": "2021-08-13T21:01:30.484Z",
      "tagCount": 2
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can subdocuments be used to make a more efficient API?

  * 🙋 Subdocuments are a great way to reduce the number of queries to the database.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on populate](https://mongoosejs.com/docs/populate.html), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: CRUD with Subdocuments (5 min)

* In the command line, navigate to `25-Ins_CRUD-Subdoc/` and run `npm i && npm run seed && npm start` to seed the database with some data and start the server.

  * In this demo, we are working with an API that features users, videos, and responses to videos. To demonstrate the CRUD functionality, we are going to create a new video, update an existing video, and delete a video.

  * Before we test the application, let's first make a GET request to `http://localhost:3001/api/users/` to see if the server is up and running.

  * You should see a list of users with properties like `videos`, `first`, `last`, `age`, and `_id`.

    ```json
    [
      {
        "videos": [],
        "_id": "611973218d5b58f2b343620f",
        "first": "Sarah",
        "last": "Smith",
        "age": 29,
        "fullName": "Sarah Smith"
      },
      {
        "videos": [],
        "_id": "611973218d5b58f2b3436210",
        "first": "Bob",
        "last": "Jones",
        "age": 86,
        "fullName": "Bob Jones"
      },
    ]
    ```

  * Change the endpoint to `http://localhost:3001/api/videos/` to show that endpoints are set up for videos as well.

  * Next, we can use the `_id` of a user to create a video by adding it as a property in our request object called `userId`. Copy the following JSON snippet in the body of a POST request to `http://localhost:3001/api/videos/`.

    ```json
    {
      "userId": "611973218d5b58f2b343620f",
      "published": true,
      "advertiserFriendly": false,
      "description": "CRUD methods in Mongoose",
    }
    ```

  * You should get a response that the video was created, and if you make a GET request to `http://localhost:3001/api/videos/`, you should see the video you just created at the end of the list.

    ```json
    {
      "published": true,
      "advertiserFriendly": false,
      "_id": "61197bd4f4a65ff36e7f1e0f",
      "description": "CRUD methods in Mongoose",
      "createdAt": "2021-08-15T20:40:52.604Z",
      "responses": [],
      "__v": 0,
      "getResponses": 0
    }
    ```

  * To set up an API like this, we would first begin by creating our controller for users, videos, and responses. Once all of those are created, we can import them into a single file and begin to create the routes for the API.

  * To get an idea of what that would look like, let's check out the `videoRoutes.js` file inside the `api` folder.

* Open `25-Ins_CRUD-Subdoc/routes/api/videoRoutes.js` in your IDE and demonstrate the following:

  * 🔑 Notice that we can use a destructuring assignment to assign each function to its own variable, and then chain them together on a single router.

    ```js
    // videoRoutes.js
    const router = require('express').Router();
    const {
      getVideos,
      getSingleVideo,
      createVideo,
      updateVideo,
      deleteVideo,
      addVideoResponse,
      removeVideoResponse,
    } = require('../../controllers/videoController');

    // /api/videos
    router.route('/').get(getVideos).post(createVideo);

    // /api/videos/:videoId
    router
      .route('/:videoId')
      .get(getSingleVideo)
      .put(updateVideo)
      .delete(deleteVideo);

    // /api/videos/:videoId/responses
    router.route('/:videoId/responses').post(addVideoResponse);

    // /api/videos/:videoId/responses/:responseId
    router.route('/:videoId/responses/:responseId').delete(removeVideoResponse);

    module.exports = router;
    ```

  * 🔑 When we do this, we are organizing our routes into logical groups. For example, we can see that we have a `/` route that handles GET requests to `/api/videos` and a `/:videoId` route that handles GET, PUT, and DELETE requests to `/api/videos/:videoId`.

  * 🔑 We can also see that we have a `/:videoId/responses` route that handles POST requests to `/api/videos/:videoId/responses` and a `/:videoId/responses/:responseId` route that handles DELETE requests to `/api/videos/:videoId/responses/:responseId`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it useful to be able to create, read, update, and delete data in a subdocument?

  * 🙋 Being able to modify the subdocument without having to completely replace the entire document is a great way to keep the API clean and efficient.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_CRUD-Subdoc/README.md`.

### 9. Student Do: CRUD with Subdocuments (15 min)

* Direct students to the activity instructions found in `26-Stu_CRUD-Subdoc/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📐 Add Comments to Mongoose CRUD Operations

  Work with a partner to add comments that describe the functionality of the CRUD operations found in [Unsolved/controllers/appController.js](./Unsolved/controllers/appController.js).

  ## 📝 Notes

  * Be sure to run `npm install`, `npm run seed`, and `npm start`.

  * Refer to the documentation: [Mongoose docs on constructing models](https://mongoosejs.com/docs/models.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `findOneAndDelete()` and `findOne()` + `remove()`? Or similarly, what is the difference between `findOneAndUpdate()` and `findOne()` + `save()`?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: CRUD with Subdocuments (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Mongoose CRUD operations on subdocuments? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `.create()`

  * ✔️ `.find()` and `.findOne()`

  * ✔️ `findOneAndUpdate()`

  * ✔️ `findAndRemove()`

* Open `26-Stu_CRUD-Subdoc/Solved/controllers/appController.js` in your IDE and explain the following:

  * In this activity, we are taking a look at the `appController.js` file to see how we can use Mongoose CRUD operations to create, read, update, and delete data.

  * The first methods we want to understand are `.create()`, `.find()`, and `.findOne()`.

  * `find()` happens to be one of the first methods listed in the `appController.js` file. We use the `.find()` method to find all of the applications in our database.

    ```js
    getApplications(req, res) {
       Application.find()
         .then((applications) => res.json(applications))
         .catch((err) => res.status(500).json(err));
    }
    ```

  * 🔑 Notice that all of the methods are contained in a single `module.exports` object. This is a design choice and not a strict requirement.

  * First we invoke our Application model's `.find()` method to find all of the applications in our database. This is a promise, so we can use the `.then()` method to handle the response.

  * We name the response object `applications` and we simply return the applications array to the user using `res.json()`.

  * 🔑 It is also important to note that we are using `.find()` instead of `.findOne()` because we want to return all of the applications in our database.

  * Finally, we must use `.catch()` to handle any errors that may occur.

    ```js
    // appController.js
      getApplications(req, res) {
        Application.find()
          .then((applications) => res.json(applications))
          .catch((err) => res.status(500).json(err));
      },
    ```

  * 🔑 Remember that you must respond even if you do not have any data to return. This will help you to ensure that your application is still working if the request fails.

  * The next method that we want to take a look at is the `findOne` method. We use the `.findOne()` method to find a single application in our database.

  * The `findOne` method takes a single parameter, `_id`, which is the unique identifier for the application that was provided in the URL, otherwise known in our code as `req.params.applicationId`.

  * If the application is found, we return the application to the user using `res.json()`. We also use the `.catch()` method to handle any errors that may occur, and respond with a 500 status code. This allows us to gracefully handle errors, as shown in the following code:

    ```js
    getSingleApplication(req, res) {
      Application.findOne({ _id: req.params.applicationId })
        .then((application) =>
          !application
            ? res.status(404).json({ message: 'No application with that ID' })
            : res.json(application)).catch((err) => res.status(500).json(err));
        },
    ```

  * Next, we have a method called `createApplication`. We use the `.create()` method to create a new application in our database.

  * 🔑 The interesting thing to note about this method is that it is also responsible for updating the user whose application is being created. We handle all this logic in the `.then()` method after the application is created.

  * Once the application is created, we return another promise that will handle updating the user whose application is being created with the `findOneAndUpdate` method and a MongoDB operator called `$addToSet`. This operator will add the new application to the user's list of applications.

  * The `findOneAndUpdate` method is a promise that will return the updated `user` document and update the `applications` array in the `user` document. This method accepts the following parameters:

    * The first parameter is the `query` object that will find the user document that we want to update.

    * The second parameter is the `update` object that will update the user document.

    * The third parameter is the `options` object that we will pass to the `findOneAndUpdate` method; note that this is optional.

  * 🔑 The `new: true` option is important because it tells Mongoose to return the updated document instead of the original document.

    ```js
    createApplication(req, res) {
      Application.create(req.body)
        .then((application) => {
          return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { applications: application._id } },
            { new: true }
          );
        })
      ...
    ```

  * After the user has been updated, we return a message to the user depending on whether the application was created successfully or not.

  * 🔑 Feel free to do a refresher on the ternary operator syntax before going into more detail about the `.then()` and `.catch()` methods.

    ```js
    createApplication(req, res) {
      Application.create(req.body)
        .then((application) => {
          return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { applications: application._id } },
            { new: true }
          );
        })
        .then((user) =>
          !user
            ? res.status(404).json({
                message: 'Application created, but found no user with that ID',
              })
            : res.json('Created the application 🎉')
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
    ```

  * Next, we will look at the update and delete methods for the `applications` collection. These are titled `updateApplication` and `deleteApplication`, respectively.

  * The `updateApplication` method is used to update an application in our database. It also uses the `findOneAndUpdate` method to find the application and update it.

  * The parameter for the `findOneAndUpdate` method is the `query` object that finds the application that we want to update. We also use the `update` object that we want to update the application with and the `options` object that we want to pass to the `findOneAndUpdate` method.

  * Inside the `update` object, we use the `$set` operator to update the entire body of a given `application`, which is selected by using the `req.params.applicationId` passed in from the URL.

  * 🔑 The `runValidators: true` option is important because it tells Mongoose to run the application's validators before saving the application. A validator makes sure that the application is properly formatted before it is saved.

    ```js
    updateApplication(req, res) {
      Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
    ...
    ```

  * 🔑 In the `.then()` method, we return the updated application if it is found and updated, or we return a `404` status code if the application is not found, as shown in the following code snippet containing the full `updateApplication` method:

    ```js
    updateApplication(req, res) {
      Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((application) =>
          !application
            ? res.status(404).json({ message: 'No application with this id!' })
            : res.json(application)
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
    ```

  * The `deleteApplication` method is used to delete an application from our database. It uses the `findOneAndRemove` method to find the application and remove it.

  * After the application has been removed, we return another promise that will handle updating the user whose application is being deleted with the `findOneAndUpdate` method and a MongoDB operator called `$pull`. This operator will remove the application from the user's list of applications.

  * The full `deleteApplication` method is shown below.

    ```js
    deleteApplication(req, res) {
      Application.findOneAndRemove({ _id: req.params.applicationId })
        .then((application) =>
          !application
            ? res.status(404).json({ message: 'No application with this id!' })
            : User.findOneAndUpdate(
                { applications: req.params.applicationId },
                { $pull: { applications: req.params.applicationId } },
                { new: true }
              )
        )
        .then((user) =>
          !user
            ? res.status(404).json({
                message: 'Application created but no user with this id!',
              })
            : res.json({ message: 'Application successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));
    },
    ```

  * Finally, we have some methods to handle the adding and removing of tags from an application. These methods are `addTag` and `removeTag`.

  * 🔑 One thing to note about these methods is that because the tags are a subdocument in the `application` document, we still invoke the Application model's `findOneAndUpdate` method, and use the `$addToSet` operator to add the tag to the `tags` array.

  * This means that if we were to make a POST request to `/applications/:applicationId/tags`, we would be adding a tag to the `tags` array of the application document.

  * Similarly, we use the `$pull` operator to remove the tag from the `tags` array.

    ```js
    addTag(req, res) {
      Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $addToSet: { tags: req.body } },
        { runValidators: true, new: true }
      )
        .then((application) =>
          !application
            ? res.status(404).json({ message: 'No application with this id!' })
            : res.json(application)
        )
        .catch((err) => res.status(500).json(err));
    },

    removeTag(req, res) {
      Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $pull: { tags: { tagId: req.params.tagId } } },
        { runValidators: true, new: true }
      )
        .then((application) =>
          !application
            ? res.status(404).json({ message: 'No application with this id!' })
            : res.json(application)
        )
        .catch((err) => res.status(500).json(err));
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the `_id` field in the `applications` collection?

  * 🙋 The `_id` field is a MongoDB `ObjectId`, which is a 12-byte string that is unique to each document.

  * ☝️ What do the `$addToSet` and `$pull` operators do?

  * 🙋 The `$addToSet` operator adds a value to an array if it does not already exist. The `$pull` operator removes a value from an array if it exists.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on subdocuments](https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_GitHub-Packages/README.md`.

### 11. Everyone Do: Git (20 min)

* Open [GitHub Packages Getting Started](https://docs.github.com/en/packages) in your browser and explain the following:

  * In this section, we will use GitHub to manage our packages.

  * GitHub offers a service very similar to npm, but with a few differences. In many ways, GitHub packages are similar to npm packages, except that they are managed by GitHub.

  * This makes a lot of sense for developers who already have their code on GitHub, but it can still be confusing for those that haven't published a package before.

  * This guide will walk you through the steps needed to create and publish a GitHub package. At the end of the guide, you will be able to create a GitHub package and publish it so that it can be installed when running `npm install`.

  * This process will involve the following steps:

    1. Generating a GitHub Access Token.

    2. Adding the token to a file called `.npmrc`.

    3. Configuring the `package.json` file and the repository URL.

    4. Setting a registry variable in the `.npmrc` file.

    5. Writing some code that simply console logs a message.

    6. Publishing the package with `npm publish`.

    7. Testing the package locally by adding it to the list of dependencies in `package.json` and running `npm install`.

  * This may sound like a lot, but there is no need to worry. This guide will help you get through it and help you understand the process.

* Direct students to the activity instructions found in `27-Evr_GitHub-Packages/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* Answer any questions before students go on break.

### 12. BREAK (30 min)

### 13. Instructor Demo: Mini Project (5 min)

* Open `https://student-stats-db.herokuapp.com/api/students` in your browser and demonstrate the following:

  * This is an API that contains courses, students, and assignments. The specific endpoint that we are using is `/api/students`, where you can see that we have a list of students and also a headcount for each course.

  * As you can see in the URL, the application is running on Heroku rather than localhost.

  * 🔑  In this project, we will use Heroku to host our application and MongoDB Atlas to host our MongoDB database.

  * This API has some endpoints that will allow us to retrieve information about the students and assignments. Additionally, we can request a specific student's information and get their overall grade using the `GET /students/:studentId` endpoint.

* Make a GET request to `https://student-stats-db.herokuapp.com/api/students/611ab8ffd85938023d26ba00` and explain the following:

  * 🔑 These keys change with every build, so if the provided `studentId` is incorrect, use one from the `/api/students` endpoint.

  * This is a request to get the information for a specific student.

  * Notice that when getting the information for a specific student, we also get a new field called `grade` that contains the overall grade for the student.

  * This is possible with the use of the `aggregate` pipeline and some MongoDB operators.

  * The `aggregate` pipeline is a way to run multiple queries on the database at the same time.

  * The task of this mini-project is to take a mostly complete API and add the ability to calculate the overall grade of a student. The other part will be learning how to deploy the application to Heroku with a MongoDB back end using the MongoDB Atlas service.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the aggregate pipeline and how do did we use it in this activity?

  * 🙋 The aggregate pipeline is a way to run multiple queries on the database at the same time. We used it to get the overall grade for a student.

* Answer any questions before allowing students to start the mini-project.

### 14. Student Do: Mini Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Module 18 Mini-Project: Student Statistics Back-End

  In this activity, you will start with an existing codebase for a mostly complete application.

  You will be adding aggregate methods to the `Student` controller to show a student's overall grade and the number of students.

  Finally, you will spend the remaining time deploying the application using MongoDB Atlas and Heroku.

  ## Instructions

  The completed application should meet the following criteria:

  * As a user, I want to be able to view all the students and get a total of the number of students enrolled.

  * As a user, I want to be able to view a specific student's overall grade in the class using MongoDB operators and their score on each assignment.

  * As a user, I want to be able to execute create, read, update, and delete operations on `courses`, `students`, and `assignments`.

  ### Specifications

  The completed application should meet the following specifications:

  * The application must make use of a MongoDB database, the Mongoose ODM, and Express.js.

  * The database must be seeded with sample data.

  * The `Student` controller should have a `headCount` aggregate function to get the total number of students by making use of MongoDB aggregate operators.

  * The `Student` controller should have a `grade` aggregate function that returns a single student and also the student's overall grade using MongoDB aggregate operators.

  * The project will require research of MongoDB operators such as `$addToSet`, `$unwind`, `$group`, `$match`, and `$avg`.

  * `Student` lookup will require use of the `ObjectId()` method.

  * The endpoints `api/students/<student id>` and `api/students/` should be tested using Insomnia to ensure that the aggregate functions return the student's overall grade and headcount respectively.

  * This back-end application should be deployed using Heroku and MongoDB Atlas. Refer to the resources below for further instructions.

  ## 💡 Hints

  * Be sure to run `npm run seed` to seed your database before testing with Insomnia.

  * Run `npm run dev` to have the server automatically restart whenever changes are saved.

  * How can we use the `$avg` [MongoDB operator](https://docs.mongodb.com/manual/reference/operator/aggregation/avg/) to calculate the overall grade for a student?

  * How can we use the `ObjectId` [Mongoose `Type` method](https://mongoosejs.com/docs/schematypes.html#objectids) to ensure we are able to query a student based on the value in their `_id` field?

  * How can we use the information from [The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) to help deploy the mini-project?

  ## 🏆 Bonus

  * What is the difference between Mongoose and MongoDB? What are the advantages and disadvantages of both?
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Mini-Project (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ MongoDB Atlas

  * ✔️ Aggregate Methods

  * ✔️ MongoDB Operators (`$addToSet`, `$unwind`, `$group`, `$match`, `$avg`)

* Open `28-Stu_Mini-Project/Main/controllers/studentController.js` in your IDE and explain the following:

  * To get the number of students enrolled, we were tasked with creating a function that executes an aggregate pipeline that counts the number of students in the database.

  * 🔑  To do this, we chained the `count` method to the `aggregate` method. The `count` method accepts a single argument, which is the `collection` that we want to count. In our case, we are counting the number of students in the `students` collection.

  * 🔑  This is an async function, so we used the `await` keyword to wait for the result of the `aggregate` method to be returned.

    ```js
    const headCount = async () =>
      Student.aggregate()
        .count('studentCount')
        .then((numberOfStudents) => numberOfStudents);
    ```

  * In this same file, we also created a `grade` function that returns the overall grade for a student. This function is also async, so we used the `await` keyword to wait for the result of the `aggregate` method.

  * 🔑  To get the overall grade for a student, we used the `$avg` operator, which calculates the average of a field. However, we first had to use the `$match` operator to find only the student who matched given `_id` field, as well as the `ObjectId()` method to convert the `studentId` string paramter to a usable `ObjectId` for database lookup. Then, we used the `$unwind` operator to get the individual scores for each assignment.

    ```js
    const grade = async (studentId) =>
      Student.aggregate([
        { $match: { _id: ObjectId(studentId) } },
        {
          $unwind: '$assignments',
        },
      ...
    ```

  * 🔑  The `$group` operator in MongoDB is used to group documents by a field. In this case, we are grouping the documents by the `studentId`, and then we are calculating the average of the `score` field and storing it in the `overallGrade` field.

  * Overall, the function should look something like this:

    ```js
    const grade = async (studentId) =>
      Student.aggregate([
        { $match: { _id: ObjectId(studentId) } },
        {
          $unwind: '$assignments',
        },
        {
          $group: { _id: ObjectId(studentId), overallGrade: { $avg: '$assignments.score' } },
        },
      ]);
    ```

  * Now that we have our `grade` function, we can use it to get the overall grade for a student. This function is called inside the `getSingleStudent` function.

    ```js
    getSingleStudent(req, res) {
      Student.findOne({ _id: req.params.studentId })
        .select('-__v')
        .then(async (student) =>
          !student
            ? res.status(404).json({ message: 'No student with that ID' })
            : res.json({
                student,
                grade: await grade(req.params.studentId),
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    ```

  * Similarly, we invoke the `grade` function inside the `getStudents` function.

    ```js
    getStudents(req, res) {
      Student.find()
        .then(async (students) => {
          const studentObj = {
            students,
            headCount: await headCount(),
          };
          return res.json(studentObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    ```

  * Now that we have all the coding done, we had to test our application and push it to Heroku. This process was a little more complicated than the previous activities only because we needed to add a environment variable to our Heroku app that would be used to connect to MongoDB Atlas. But before all of that, we needed to create a Heroku app and deploy our application to it.

  * To do this, we used the `heroku create` command to create a new Heroku app, and then we used the `git push heroku main` command to push our code to Heroku.

  * To get our app using MongoDB Atlas, we had to add a new environment variable to our app. We did this by using the `heroku config:set` command. This can also be done on the Heroku dashboard, but we used the command here because it was easier to remember.

  * 🔑  This environment variable was obtained from the [MongoDB Atlas Databases](https://cloud.mongodb.com/) dashboard after clicking the "connect" button next to your free cluster. It gave us an option to connect to our application and a snippet of code that we used as our `MONGODB_URI` environment variable.

  * 🔑 For more detailed steps on this process, refer to the [Deploy with Heroku and MongoDB Atlas post on the Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas).

  * Finally, once our Heroku app has been created and our environment variable has been added, we can deploy our application to Heroku.

* Open `28-Stu_Mini-Project/Main/package.json` and explain the following:

  * Notice that our `package.json` file has a `scripts` section. This section contains a `start`, `dev`, `seed`, and -- a new one -- `heroku-postbuild`. The `heroku postbuild` script tells Heroku which commands to run after the app has been created.

  * We can see that the postbuild script will run our seeds file (`seed.js`) and then run our `start` script. This data will be stored in our remote MongoDB Atlas database.

  * 🔑 MongoDB Atlas has a great tool for visualizing the data that we have stored in our database, much like their Compass utility. If you are curious, feel free to check it out by clicking on the collections tab in the MongoDB Atlas dashboard.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between a `MongoDB` and a `MongoDB Atlas` database?

  * 🙋 The difference is that MongoDB Atlas is a cloud service that allows you to store your data in the cloud, while MongoDB typically refers to a local database.

  * ☝️ What is required to deploy a back-end application and connect it to a MongoDB Atlas database?

  * 🙋 You need to create a Heroku app, create a MongoDB Atlas database, and then add a `MONGODB_URI` environment variable to the Heroku app.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read [the Full-Stack Blog post on deploying to Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas), and attend Office Hours to ask for help.

* If you had trouble with this mini-project, do not worry and be sure to ask for help. There are a lot of steps to this project, and it can be hard to get everything right the first time.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Introduce Challenge (5 min)

* Open `01-Class-Content/18-NoSQL/02-Challenge/README.md` in your IDE and demonstrate the following:

  * This Challenge requires you to build an API for a social network web application where users can share their thoughts, create a friends list, and react to friends’ thoughts.

  * The app will use Express.js for routing, MongoDB for storage, and Mongoose for data modeling.

  * Optionally, you can import a time/date management library to make adding timestamps to your data easier. You also have the option to use the native `Date` object.

  * The app uses the following models: `User`, `Thought`, and `Reactions`.

  * Some of these models have virtual fields that will be used to store data that is not part of the model, such as `friendCount`, which returns the number of friends that the user has.

  * The `Thought` model will have `thoughtText`, `userName`, `reactions` (aka replies), and `createdAt` fields. This model will also need a virtual field called `reactCount`, which returns the number of reactions that the `Thought` has.

  * The last model that you need to create is the `Reactions` model. This model will have a `reactionId`, `reactionBody`, `username`, and `createdAt` fields.

  * You will build the following endpoints:

    * `/api/users`

    * `/api/users/:userId`

    * `/api/users/:userId/friends/:friendId`

    * `/api/thoughts`

    * `/api/thoughts/:thoughtId/reactions`

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to build a RESTful API using Express.js, MongoDB, and Mongoose.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 This project builds on previous projects where we learned how to create an API, but we are extending our knowledge to use MongoDB and Mongoose instead of MySql.

  * ☝️ How does this project relate to your career goals?

  * 🙋 This project is part of our career goals because it teaches us one piece of the MERN stack, a set of technologies that we will be using in the future.

* Ask TAs to direct students to the Challenge Requirements found in `01-Class-Content/18-NoSQL/02-Challenge/README.md`.

* Answer any questions before ending the class.

### 17. FLEX (40 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Encourage students to get a head start on their Challenge. Or use this time to answer any questions students have over anything we covered this week.

* Answer any questions before ending the class.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
