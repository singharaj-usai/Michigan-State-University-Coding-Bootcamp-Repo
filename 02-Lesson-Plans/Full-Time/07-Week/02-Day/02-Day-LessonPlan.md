# 07.2 Full-Time Lesson Plan: Object-Relational Mapping (ORM)

## Overview

As students continue to learn Sequelize in today's class, they will learn about password hashing with `bcrypt`, incorporating Hooks, and creating a secure login route for users. They will create a custom method that corresponds to a custom route. Later in the lesson, students will learn how to relate data between SQL tables using Sequelize associations and how to model one-to-one, one-to-many, and many-to-many relationships. Students will also learn how to write SQL subqueries with Sequlize literals and end with ESLint as their Git activity.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Password-Hashing` through `27-Evr_Eslint`.

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions that students might have.

* See the [Sequelize documentation on associations](https://sequelize.org/master/manual/assocs.html) to review how to create relationships. The documentation provides limited real-world examples, so be sure to look at how associations are implemented in the activities and mini-project before class.

* You will use MySQL for today's activities, so be sure to have your MySQL server up and running. You can create the database `cars_db` ahead of time or demonstrate it live in class.

* Instead of relying on a front end, all of the activities will use Insomnia to test the routes. Be sure to have it installed and set up for class. 

* To speed up demonstrations and activity reviews, you might want to run `npm install` and create the database for every activity before class starts. 

* Don't forget to run `node seeds/seed.js` before each demo or activity review, to seed the database. Remind students of the seed file too.

* All activities will require changing the `.env.EXAMPLE` file to `.env` and filling it with your MySQL credentials. Instruct students who arrive early to fill out that information ahead of time so that they can focus on the task at hand.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the `Everyone Do: ESLint` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end. 

* `npx` is used in the `Everyone Do: ESLint` activity, but it is not a learning objective. If students get hung up on `npx`, briefly explain what it is but do not linger on it.  

## Learning Objectives

* Encrypt a password with `bcrypt`.

* Automate functionality using Sequelize Hooks.

* Create and run a custom method on a Sequelize instance.

* Implement various Sequelize associations to create one-to-one, one-to-many, and many-to-many data relationships.

* Perform subqueries using a combination of Sequelize methods and plain SQL syntax.

* Enforce code styling for an application using ESLint.

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 10:00AM| 1   | Instructor Demo: Password Hashing   | 0:05     |
| 10:05AM| 2   | Student Do: Password Hashing        | 0:15     |
| 10:20AM| 3   | Instructor Review: Password Hashing | 0:10     |
| 10:30AM| 4   | Instructor Demo: Hooks              | 0:05     |
| 10:35AM| 5   | Student Do: Hooks                   | 0:15     |
| 10:50AM| 6   | Instructor Review: Hooks            | 0:10     |
| 11:00AM| 7   | Instructor Demo: Instance Method    | 0:05     |
| 11:05AM| 8   | Student Do: Instance Method         | 0:15     |
| 11:20AM| 9   | Instructor Review: Instance Method  | 0:10     |
| 11:30AM| 10  | FLEX                                | 0:30     |
| 12:00PM| 11  | BREAK                               | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:40PM| 13  | Instructor Demo: One-to-One         | 0:05     |
| 12:45PM| 14  | Student Do: One-to-One              | 0:15     |
| 1:00PM | 15  | Instructor Review: One-to-One       | 0:10     |
| 1:10PM | 16  | Instructor Demo: One-to-Many        | 0:05     |
| 1:15PM | 17  | Student Do: One-to-Many             | 0:15     |
| 1:30PM | 18  | Instructor Review: One-to-Many      | 0:10     |
| 1:40PM | 19  | Instructor Demo: Literals           | 0:05     |
| 1:45PM | 20  | Student Do: Literals                | 0:15     |
| 2:00PM | 21  | Instructor Review: Literals         | 0:10     |
| 2:10PM | 22  | Everyone Do: ESLint                 | 0:20     |
| 2:30PM | 23  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Password Hashing (5 min) 

* Welcome students to class.

* Open `15-Ins_Password-Hashing/routes/api/userRoutes.js` in your IDE and demonstrate the following:

  * Like we discussed earlier, password hashing is a crucial step in securing user data in the database. An application's first interaction with a user password occurs as soon as that user creates an account. 
  
  * In that first interaction, we must intervene and hash the plaintext password before it is stored in the database. To do this, we use a Node.js package called `bcrypt`. 

  * 🔑 First we import `bcrypt` into the `userRoutes.js` file by adding the `require` expression at the top of the file, as shown in the following code:

    ```js
    const bcrypt = require('bcrypt');
    ```

  * 🔑 In the POST route to create a new user, we take the data for a new user from `req.body` and assign it to `newUser`, as shown in the following code:

    ```js
    router.post('/', async (req, res) => {
      try {
        const newUser = req.body;
    ```

  * 🔑 Then, in the `bcrypt` hash function, we pass in the `req.body.password`, which is the plaintext password created by the user. We also pass in a `saltRound` value of `10`. The resulting hashed password is then saved as the `newUser.password`, as follows:

    ```js
    router.post('/', async (req, res) => {
      try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
    ```

  * Next we create a new user using the `newUser` data with the hashed password, and we save it in the database, as follows:

    ```js
    router.post('/', async (req, res) => {
      try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
    ```

* Run `npm start` in your command line and demonstrate the following in Insomnia:

  * We will make a POST request to `localhost:3001/api/users/` to create a new user. Notice that the password is `Password123` in plaintext, as shown in the following example:

    ```json
    {
      "username": "test2",
      "email": "test2@email.com",
      "password": "Password123"
    }
    ```

  * When we see the returned data, we see that the password saved in the database is hashed and salted&mdash;as shown in the following example:

    ```json
    {
      "id": 4,
      "username": "test2",
      "email": "test2@email.com",
      "password": "$2b$10$pQgQagcm85YW1b/0j5MrU.iH2iSCsne.FAMjcxp6izuXEJH.lgiqS"
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would need to use `bcrypt` to hash the password before saving a new user in the database.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Password-Hashing/README.md`.

### 2. Student Do: Password Hashing (15 min) 

* Direct students to the activity instructions found in `16-Stu_Password-Hashing/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of the Login Route

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/routes/api/user-routes.js).

  ## 📝 Notes

  Refer to the documentation: 

  [npm documentation on bcrypt](https://www.npmjs.com/package/bcrypt)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we persist a login state?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help. 

### 3. Instructor Review: Password Hashing (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with password hashing using `bcrypt`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `findOne()`

  * ✔️ `res.status(404)`

  * ✔️ `bcrypt.compare()`

  * ✔️ `res.status(400)`

* Open `16-Stu_Password-Hashing/Solved/routes/api/userRoutes.js` in your IDE and explain the following: 

  * For this reverse-engineering activity, we had to add comments describing the `/login` route.

  * 🔑 First, we need to search the database for a user with the provided email that the user used to login. We do that by using `.findOne()`, as follows:

    ```js
    router.post('/login', async (req, res) => {
      try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    ```

  * 🔑 If we cannot find any user in the database with that email address, we need to return a 404 status code with an error message. 
  
  * However, be careful not to specify which part of the login attempt failed. Revealing that information could help hackers figure out whether they need to use a different email address or password, making it easier to access sensitive data! Refer to the following message for an example of an error message:

    ```js
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    ```

  * 🔑 If the user is found in the database, then we use `bcrypt.compare()` to compare the user password with the hashed password saved in the database, as follows:

    ```js
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    ```

  * 🔑 If the password does not match, then we need to return a 400 status code with an error message. Again, we should avoid specifying what was wrong with the login info provided. See the following message for an example:

    ```js
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    ```

  * If everything goes well, we return a 200 status code with a success message, as follows:

    ```js
    res.status(200).json({ message: 'You are now logged in!' });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Rather than doing this in the routes, where is a better place to handle password hashing?

  * 🙋 In the `User` model! Because the password is directly related to the `User` model, it is better to handle the password hashing using Hooks in the model file.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [npm documentation on bcrypt](https://www.npmjs.com/package/bcrypt), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Hooks (5 min) 

* Navigate to `17-Ins_Hooks` and be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. 

* Open `17-Ins_Hooks/models/User.js` in your IDE and demonstrate the following:
  
  * As we've seen so far, Sequelize offers many tools that make it easier for us to communicate with the database. For example, **Hooks** can help us perform actions before and after calls in Sequelize are executed. 

  * 🔑 There are many Hooks available to us through Sequelize, but for now we will only touch on `beforeCreate()` and `beforeUpdate()`. 

  * 🔑 We can declare Hooks in a few ways. For this activity, we will declare a Hook via the `init()` method in the `User` model. 

  * 🔑 When including Hooks via the `init()` method, we add them between where the model attributes are defined and where the connection instance is passed, as follows:

    ```js
    User.init(
      {
        //model attributes
      },
      {
        hooks: {
          // hooks
        },
        ///connection instance
      }
    );
    ```

  * We are passing `newUserData` into both the `beforeCreate()` and the `beforeUpdate()` Hooks, so that whenever a user instance is created or updated, these Hooks have access to the user data.

  * 🔑 The `beforeCreate()` method accepts `newUserData`, uses `toLowerCase()` to set the email address to lowercase, and then returns `newUserData` with the newly formatted email address&mdash;as shown in the following example:

    ```js
    beforeCreate: async (newUserData) {
      newUserData.email = await newUserData.email.toLowerCase();
      return newUserData;
    },
    ```

  * 🔑 The `beforeUpdate()` method is identical to `beforeCreate()` in the `User` model, as follows:

    ```js
    beforeUpdate: async (newUserData) {
      newUserData.email = await newUserData.email.toLowerCase();
      return newUserData;
    },
    ``` 

    However, there is one small difference regarding the `beforeUpdate()` Hook, located in `userRoutes.js`. We will discuss this difference next.

* Open `17-Ins_Hooks/routes/api/userRoutes.js` and scroll down to the PUT route, then demonstrate the following: 

  * We add the option `individualHooks: true` because the ` update()` method could potentially match more than one entry, and we want the Hook to run on each match. Refer to the following code for an example:

    ```js
    router.put('/:id', async (req, res) => {
      try {
        const userData = await User.update(req.body, {
          where: {
            id: req.params.id,
          },
          individualHooks: true
        });
    ```

* To test the Hooks, run `npm start` from the command line and demonstrate the following in Insomnia: 

  * 🔑 We will make a POST request to `http://localhost:3001/api/users` to create a new user. Notice that the email address is capitalized in the body of the request, as follows:

    ```json
    {
      "username": "test",
      "email": "TEST@email.com",
      "password": "Password123"
    }
    ```

  * 🔑 When the data is returned, we should see that the email address has been saved in lowercase, as follows:

    ```json
    {
      "username": "test",
      "email": "test@email.com",
      "password": "Password123"
    }
    ```

  * 🔑 We will make a PUT request to `http://localhost:3001/api/users/1` to update the user we just created, as shown in the following example:

    ```json
    {
      "username": "test",
      "email": "TEST1234@email.com",
      "password": "Password123"
    }
    ```

  * 🔑 When the data is returned, we should see that the email address has been updated and stored in lowercase, as shown in the following example: 

    ```json
    {
      "username": "test",
      "email": "test1234@email.com",
      "password": "Password123"
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use Hooks to automate `bcrypt` password hashing for users?

  * 🙋 We can add Hooks to the `User` model to hash passwords for user instances before they are created or updated.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Hooks/README.md`.

### 5. Student Do: Hooks (15 min) 

* Direct students to the activity instructions found in `18-Stu_Hooks/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Use Hooks to Hash a Password

  Work with a partner to implement the following user story:

  * As a user, I want to be able to log in with my password.

  * As a user, I want to be able to change my password.

  * As a user, I want to know that my password is being stored securely.

  ## Acceptance Criteria

  * It's done when `User.init()` includes Hooks to hash the user's password before it is created.

  * It's done when `User.init()` includes Hooks to hash the user's password before it is updated, only if a password is provided in the paylod.

  ## 💡 Hints

  * What have you learned about hashing a password, `async` and `await`, and `try...catch`? 

  * What are three methods for adding Hooks to your code? How is adding a Hook via `init()` different from the other options?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Hooks are considered **middleware** in programming terms. What are some other examples of middleware used in Node applications?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help. 

### 6. Instructor Review: Hooks (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using Hooks in Sequelize? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `beforeCreate()`

  * ✔️ `beforeUpdate()`

  * ✔️ Hashing passwords inside Hooks with `bcrpyt`

* Open `18-Stu_Hooks/Solved/models/User.js` in your IDE and explain the following: 

  * 🔑 We create a `beforeCreate()` Hook in the `User.js` file to make sure that a user can create a profile and that their password will be stored securely with `bcrypt` before the record is stored, as shown in the following example:

    ```js
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    }  
    ```

  * 🔑 The user's password is set as equal to a hashed password, using `bcrypt`. Then `newUserData` is returned, as follows:

    ```js
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    }   
    ```

  * `async` and `await` are included in the method, to write cleaner code that enables Promise-based behavior, as follows:

    ```js
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    }  
    ```
  
  * 🔑 We can repeat the preceding steps to create the `beforeUpdate()` method. However, we add a conditional statement that will only hash a user's password if it is included in the payload. Without this conditional statement, the user's information could become corrupted and they would not be able to login. We accomplish this as follows:

    ```js
    beforeUpdate: async (updatedUserData) => {
      if (updatedUserData.password) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        }
      return updatedUserData;
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What other commonly used Hooks are available to us?

  * 🙋 We could also use the `afterCreate`, `afterUpdate`, `beforeDestroy`, and `afterDestroy` Hooks, among others.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on Hooks](https://sequelize.org/master/manual/hooks.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Instance Methods (5 min) 

* Navigate to `19-Ins_Instance-Method` and be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. 

* Open `19-Ins_Instance-Method/models/User.js` in your IDE and demonstrate the following:

  * 🔑 Sometimes we want to access only a specific data point rather than ALL of the data associated with a user. For example, maybe we want to know if a user in a pet adoption database currently has any pets. Instead of using GET to return all of that user's information, we can use **instance methods** to find the specific data we want&mdash;whether that user has pets or not. 

  * 🔑 Sequelize allows us to write instance methods within models (in this example, the `User` model) to access specific data that we can then return to users. 
  
  * Let's look at `User.js`. In the following example, to create a user instance for the pet adoption database, we must include the number of pets that a user currently has:

    ```js
    User.init(
      {
        // previous model attributes above...
        
        numberOfPets: {
          type: DataTypes.INTEGER,
        },
      },
    )
    ```

* Run `npm start` from the command line and demonstrate the following in Insomnia: 

  * 🔑 We will make a POST request to `http://localhost:3001/api/users` to create a new user. We've set `numberOfPets` equal to `2`, as follows, because the user has two pets:

    ```json
    {
      "username": "test",
      "email": "test@email.com",
      "password": "Password123",
      "numberOfPets": 2
    }
    ```

  * 🔑 When the data is returned, we should see that the user's pets have been stored in the record, as follows: 

    ```json
    {
      "username": "test",
      "email": "test@email.com",
      "password": "Password123",
      "numberOfPets": 2
    }
    ```

  * Many users in this pet adoption database might not have pets yet, so let's create another user to reflect that. See the following code for an example:

    ```json
    {
      "username": "test2",
      "email": "test2@email.com",
      "password": "Password890",
      "numberOfPets": 0
    }
    ```

  * When the data is returned, we should see that this user's pets have been stored in the record as `"numberOfPets": 0`. Refer to the following code for an example:

    ```json
    {
      "username": "test2",
      "email": "test2@email.com",
      "password": "Password890",
      "numberOfPets": 0
    }
    ```

  * We have created the users; now we want to check whether a user has pets or not&mdash;without returning ALL of their information&mdash;by creating an instance method.

  * 🔑 Let's look at the `User` model in `User.js`. Note the simple instance method called `hasPets` at the top. 
  
  * Inside the instance method, we use a conditional statement to check whether `this.numberOfPets` (where `this` represents one particular user) is greater than 0. If the number is greater than 0, it returns `true`. Otherwise, it returns `false`. Refer to the following statement for an example:

    ```js
    class User extends Model {
      // This instance method uses a conditional statement to check if a user has pets
      hasPets() {
      if (this.numberOfPets > 0) {
          return true;
        } else {
        return false;
        }
      }
    }
    ```

  * The instance method checks whether a user has any pets, but now we need to make sure that this method is actually usable. To do that, we need to write a custom route.

* 🔑 Open `19-Ins_Instance_Method/routes/api/userRoutes.js` in your IDE and demonstrate the following:

  * 🔑 We have included a new route specifically for the instance method `hasPets`, as follows: 

    ```js
    router.get('/:id/hasPets', async (req, res) => {

    }
    ```
  
  * First we find a user by their primary key (provided by params). If `userData` evaluates as `false` (no user exists with that primary key), then we will send an error message&mdash;as shown in the following example:

    ```js
    try {
      const userData = await User.findByPk(req.params.id);
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
    ```
  
  * If a user does exist at the primary key, we get to use the instance method that we wrote in `User.js` to see if that user has pets, as follows: 

    ```js
    const petData = userData.hasPets();
    ```
  
  * If `petData` evaluates as `false` (the user has no pets), then the user will receive the message `"This person has no pets."` See the following code for an example:
  
    ```js
    if (!petData) {
      res.status(400).json({ message: 'This person has no pets.' });
      return;
    }
    ```

  * Otherwise, the user will see the message `"This person has pets!"` The code here should look something like the following example:

    ```js
    res.json({ message: 'This person has pets!' });
    ```
  
* If you have time, run `npm start` from the command line and demonstrate the following in Insomnia: 

  * 🔑 We will make a GET request to `http://localhost:3001/api/users/1/hasPets` to check the route and instance method.

  * 🔑 When the data is returned, we should see the following message, because the first user we created did have pets: 

    ```json
    {
      "message": "This person has pets!"
    }
    ```

  * 🔑 Now let's check the second user. We will make a GET request to `http://localhost:3001/api/users/2/hasPets`.

  * 🔑 When the data is returned, we should see the following message, because the second user we created had no pets: 

    ```json
    {
      "message": "This person has no pets."
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we return specific data about one instance?

  * 🙋 We would add an instance method inside the model to return specific data about that one instance. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Instance-Method/README.md`.

### 8. Student Do: Instance Methods (15 min) 

* Direct students to the activity instructions found in `20-Stu_Instance-Method/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create a Custom Instance Method

  Work with a partner to implement the following user story:

  * As a user, I want to log in to my account with my password.

  * As a developer, I want to allow a user to log in to their account securely so that their password information isn't compromised. 

  ## Acceptance Criteria

  * It's done when the model includes an instance method.

  * It's done when the instance method compares the user's input with the user's hashed password.

  ## 💡 Hints

  What tools does `bcrypt` offer to help us compare user input to a hashed password?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we DRY up the code using Sequelize's static model methods?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help. 

### 9. Instructor Review: Instance Methods (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel adding instance methods to your models? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:
  
  * ✔️ `checkPassword()` 

  * ✔️ `bcrypt.compareSync()`

* Open `20-Stu_Instance-Methods/Solved/routes/api/userRoutes.js` in your IDE and explain the following: 

  * The `checkPassword()` instance method is used in the `/login` route. Understanding how `checkPassword()` is being used in the `/login` route can give us clues to what the instance method needs to accomplish. 

  * We can tell from the `/login` route that the instance method will need to take in the user's password (from `req.body`) as an argument and then determine whether it matches the password stored in that user's record&dash;as shown in the following example:

    ```js
    router.post('/login', async (req, res) => {
      
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      res.json({ user: userData, message: 'You are now logged in!' });
      };
    ```

* Open `20-Stu_Instance-Methods/Solved/models/User.js` in your IDE and explain the following: 

  * 🔑 First, we want to write the instance method `checkPassword()` inside the `User` model in `User.js`, as follows: 

    ```js
    class User extends Model {
      checkPassword(loginPw) {
        
        }
    }
    ```

  * 🔑 `bcrypt` offers a method called `compareSync()` that allows us to easily check a password. As shown in the following example, it takes two arguments&mdash;`loginPw` (the password sent in the body of the POST request) and `this.password` (the password stored in this particular user record): 

    ```js
    class User extends Model {
      checkPassword(loginPw) {
        bcrypt.compareSync(loginPw, this.password);
        }
    }
    ```

  * Remember, the `/login` route expects `checkPassword()` to evaluate as either `true` or `false`. `compareSync` returns a Boolean&mdash;so all we need to do is return it in the instance method, as follows:

    ```js
    class User extends Model {
      checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
    }
    ```
  
* If you have time, run `npm start` from the command line and demonstrate the following in Insomnia: 

  * We will make a POST request to `http://localhost:3001/api/users` to create a new user, as shown in the following example:

    ```json
    {
      "username": "test",
      "email": "test@email.com",
      "password": "Password123"
    }
    ```

  * When the data is returned, the password is hashed because `User.js` includes a `beforeCreate` Hook that uses `bcrypt` to hash the user's password, as follows: 

    ```json
    {
      "id": 1,
      "username": "test",
      "email": "test@email.com",
      "password": "$2b$10$ItAeYIqhuEzADqxHsMe6Mu.r3lzZ.Ewb0gnWw0md3OkRsqPnFKbbG"
    }
    ```

  * Now we will make a POST request to `http://localhost:3001/api/users/login` to log in, as shown in the following example:

    ```json
    {
      "email": "test@email.com",
      "password": "Password123"
    }
    ```

  * If the code is working, we should see the following message when the data is returned:  

    ```json
    {
      "user": {
        "id": 1,
        "username": "test",
        "email": "test@email.com",
        "password": "$2b$10$ItAeYIqhuEzADqxHsMe6Mu.r3lzZ.Ewb0gnWw0md3OkRsqPnFKbbG"
      },
      "message": "You are now logged in!"
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When do you need to incorporate an instance method into your model?

  * 🙋 When you need to get data or do something related to one specific instance of a model.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on model instances](https://sequelize.org/master/manual/model-instances.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module.

* Ask the students if they have any questions regarding anything they've learned in Module 13 so far.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Remind students that one of the main offerings of SQL is the ability to connect multiple tables of data to each other to create relationships between them. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some examples of data that we could relate using SQL? 

  * 🙋 Artists and albums or songs, pet owners and their pets, and more! Almost any relationship that exists in real life can be represented in a SQL database.

  * ☝️ Why would we want to represent these real-world relationships in an application?

  * 🙋 Web applications like social networks and online stores that remember customers' personal preferences are all digital representations of characteristics and relationships that exist in real life. These kinds of apps can help users more easily connect with each other, shop online, and accomplish other daily tasks.

  * ☝️ Using plain SQL, how do we establish these relationships?

  * 🙋 We define a relationship between tables by creating a foreign key column that holds a reference to the primary key of the related data.

  * ☝️ Can we build the same type of relationships using Sequelize?

  * 🙋 You bet! 

* Explain that today we will focus on how Sequelize allows us to more clearly define relationships between data. Students will also learn some other interesting tools to become better developers.

* Answer any questions before proceeding to the next activity.

### 13. Instructor Demo: One-to-One (5 min)

* Navigate to `21-Ins_One-to-One` and run `npm install` from the command line. Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. Then run `npm start` from the command line and demonstrate the following:

  * 🔑 By default, Sequelize logs the commands that it performs on the SQL server, even on load. You can see that in the following example:

    ```bash
    Executing (default): CREATE TABLE IF NOT EXISTS `driver` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255) NOT NULL, `address` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
    Executing (default): SHOW INDEX FROM `driver`
    Executing (default): CREATE TABLE IF NOT EXISTS `license` (`id` INTEGER NOT NULL auto_increment , `license_number` CHAR(36) BINARY, `is_donor` TINYINT(1) DEFAULT true, `driver_id` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`driver_id`) REFERENCES `driver` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
    Executing (default): SHOW INDEX FROM `license`
    ```

  * 🔑 In these statements that create the tables, the `license` table stores a reference to the `driver` table as a foreign key.

* Ask the class the following question (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we want license data to have a reference to a driver?

  * 🙋 A driver's license belongs to a specific driver, so we need to know which driver holds this license.

* Open `21-Ins_One-to-One/models/Driver.js` in your IDE and explain the following:

  * 🔑 In the `Driver` model, nothing indicates ownership of a license.

* Open `21-Ins_One-to-One/models/License.js` in your IDE and explain the following:

  * 🔑 However, a column in the `License` model specifically references the `Driver` model, as follows:

    ```js
    // This column will store a reference of the `id` of the `Driver` that owns this License
    driver_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `driver` model, which we set in `Driver.js` as its `modelName` property
        model: 'driver',
        key: 'id',
      },
    },
    ```

* Open `21-Ins_One-to-One/models/index.js` in your IDE and explain the following:

  * 🔑 We import both models and instruct Sequelize to create a relationship between them, like in the following example:

    ```js
    // Define a Driver as having one License to create a foreign key in the `license` table
    Driver.hasOne(License, {
      foreignKey: 'driver_id',
      // When we delete a Driver, make sure to also delete the associated License.
      onDelete: 'CASCADE',
    });

    // We can also define the association starting with License
    License.belongsTo(Driver, {
      foreignKey: 'driver_id',
    });
    ```

  * We need to import the models into `index.js` before establishing any associations between them.

* Ask the class the following question (☝️) and call on students for the answers (🙋):

  * ☝️ What do we think the `hasOne()` method does here?

  * 🙋 A driver should only have one driver's license, so the `hasOne()` method probably enforces that!

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_One-to-One/README.md`.

### 14. Student Do: One-to-One (15 min)

* Direct students to the activity instructions found in `22-Stu_One-to-One/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of a One-to-One Association

  Work with a partner to add comments describing the functionality of the code found in the following files: 

  * [Unsolved/models/index.js](./Unsolved/models/index.js)

  * [Unsolved/models/LibraryCard.js](./Unsolved/models/LibraryCard.js)

  * [Unsolved/routes/api/readerRoutes.js](./Unsolved/routes/api/readerRoutes.js)

  * [Unsolved/routes/api/libraryCardRoutes.js](./Unsolved/routes/api/libraryCardRoutes.js)

  ## 📝 Notes

  Refer to the documentation: 

  [Sequelize documentation on associations](https://sequelize.org/master/manual/assocs.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is an entity-relationship diagram (ERD)?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 15. Instructor Review: One-to-One (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with one-to-one relationships in Sequelize? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `hasOne()`
  
  * ✔️ Foreign key columns

   * ✔️ `belongsTo`

  * ✔️ Performing JOIN with `include` option

* Open `22-Stu_One-to-One/Solved/models/LibraryCard.js` in your IDE and explain the following:

  * 🔑 We create a foreign key column to reference the library card's `Reader`, as shown in the following example:

    ```js
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reader',
        key: 'id',
      },
    },
    ```

* Open `22-Stu_One-to-One/Solved/models/index.js` in your IDE and explain the following:

  * 🔑 We import both models, associate them to one another, and export them as an object, like in the following example:

    ```js
    const Reader = require('./Reader');
    const LibraryCard = require('./LibraryCard');
    ```

    * 🔑 To associate the `Reader` model with the `LibraryCard` model in a one-to-one relationship, we use the `hasOne()` method to declare a model has one of another model, or in this case, the `Reader` has one `LibraryCard`. The foreign key will be defined on the `Reader` model. 

    ```js
    Reader.hasOne(LibraryCard, {
      foreignKey: 'reader_id',
      onDelete: 'CASCADE',
    });
    ```

    * 🔑 We then use the `belongsTo()` method to define the relationship between two models. It is important that both `hasOne()` and `belongsTo` are both used. They are a pair!

    ```js
    LibraryCard.belongsTo(Reader, {
      foreignKey: 'reader_id',
    });

    module.exports = { Reader, LibraryCard };
    ```

* Open `22-Stu_One-to-One/Solved/routes/api/readerRoutes.js` in your IDE and explain the following:

  * In the API route files, we import both models through destructuring, as follows:

    ```js
    const { LibraryCard, Reader } = require('../../models');
    ```

  * 🔑 Also in the API route files, the GET routes use the `include` option to perform a SQL JOIN, as shown in the following example:

    ```js
    const readerData = await Reader.findAll({
      include: [{ model: LibraryCard }],
    });
    ```

* If time allows, seed the database, run the app, and use Insomnia to demonstrate the following:

  * We can now create a library card and associate it with a reader by running a POST request to `/api/cards` with the following JSON body:

    ```json
    {
      "reader_id": 1
    }
    ```

  * We can also query a reader and get their associated library card by running a GET request to `/api/readers`.  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What two methods do we use to create a one-to-one relationship using Sequelize?  

  * 🙋  In Sequelize, to form an association we use the `hasOne()` method to establish that a model has one of another model. Then, we use the `belongsTo()` method to define the relationship between the two models. It is important to use both of the association methods together to successfully define a one-to-one relationship. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on one-to-one relationships](https://sequelize.org/master/manual/assocs.html#one-to-one-relationships), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: One-to-Many (5 min)

* Navigate to `23-Ins_One-to-Many` and run `npm install` from the command line. Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. To speed things up, run `node seeds/seed.js` as well to seed the database tables.

* Run `npm start` from the command line and use Insomnia to demonstrate the following:

  * 🔑 When we perform a GET request to `/api/drivers/1`, we get a response like the following example&mdash;including not only the driver's license data but also an array of their owned cars:

    ```json
    {
      "id": 1,
      "name": "Sal",
      "address": "200 Response St",
      "license": {
        "id": 1,
        "license_number": "bea06fda-0543-4cc7-82e9-3743fccf566b",
        "is_donor": true,
        "driver_id": 1
      },
      "cars": [
        {
          "id": 2,
          "make": "Honda",
          "model": "Accord",
          "mileage": 30000,
          "driver_id": 1
        },
        {
          "id": 4,
          "make": "Toyota",
          "model": "Camry",
          "mileage": 60000,
          "driver_id": 1
        },
        {
          "id": 6,
          "make": "Subaru",
          "model": "Outback",
          "mileage": 20000,
          "driver_id": 1
        }
      ]
    }
    ```

* Open `23-Ins_One-to-Many` in your IDE and demonstrate the following:

  * 🔑 In `models/Car.js`, we create a model with a column to reference the `id` of the driver who owns it, as shown in the following example:

    ```js
    driver_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'driver',
        key: 'id',
      },
    },
    ```

  * 🔑 In `models/index.js`, drivers have one license. But now they also have many cars, and cars belong to one driver, as you can see in the following example:

    ```js
    Driver.hasMany(Car, {
      foreignKey: 'driver_id',
      onDelete: 'CASCADE',
    });

    Car.belongsTo(Driver, {
      foreignKey: 'driver_id',
    });
    ```

  * 🔑 In `routes/api/driverRoutes.js`, the GET route queries use the `include` option to perform a JOIN to retrieve the associated driver's license and cars, as follows:

    ```js
    const driverData = await Driver.findByPk(req.params.id, {
      include: [{ model: License }, { model: Car }],
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can we create a new driver's license or car without a driver?

  * 🙋 Nope! Both belong to specific drivers, so the driver has to exist in the database before the license or car can be created.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_One-to-Many/README.md`.

### 17. Student Do: One-to-Many (15 min)

* Direct students to the activity instructions found in `24-Stu_One-to-Many/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement One-to-Many Association Between Reader and Book Models

  Work with a partner to implement the following user story:

  * As a book owner, I want to see the books in my collection.

  ## Acceptance Criteria

  * It's done when the MySQL table for book data has a foreign key referencing the reader table.

  * It's done when the response of a GET request to `/api/readers` or `/api/readers/:id` includes the books owned by a reader, like the following JSON:

      ```json
      {
        "id": 1,
        "name": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "$2b$10$AcbPGE6mNk3aZAnFCan1XeVVbuDYhQiHxOQ/gIG/PSUj2WoOR2pGC",
        "library_card": {
          "id": 2,
          "card_number": "8342e78a-7265-4060-9834-81a19c76c041",
          "reader_id": 1
        },
        "books": [
          {
            "id": 4,
            "title": "The Pragmatic Programmer: Your Journey To Mastery",
            "author": "David Thomas",
            "isbn": "978-0135957059",
            "pages": 352,
            "edition": 2,
            "is_paperback": false,
            "reader_id": 1
          },
          {
            "id": 6,
            "title": "Algorithms of Oppression: How Search Engines Reinforce Racism",
            "author": "Safiya Umoja Noble",
            "isbn": "978-1479837243",
            "pages": 256,
            "edition": 1,
            "is_paperback": true,
            "reader_id": 1
          }
        ]
      }
      ```

  ---

  ## 💡 Hints

  When you associate these models, what will the relationship look like? Would users belong to books, or would books belong to users? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * As a JavaScript developer using Sequelize, why do you still need to know SQL?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 18. Instructor Review: One-to-Many (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with one-to-many relationships? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Foreign key column

  * ✔️ `hasMany()`

  * ✔️ `belongsTo()`

  * ✔️ `include`

* Open `24-Stu_One-to-Many/Solved/models/Book.js` in your IDE and explain the following:

  * 🔑 We add a column, as follows, to store a reference to the reader that owns the book:

    ```js
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reader',
        key: 'id',
      },
    },
    ```

* Open `24-Stu_One-to-Many/Solved/models/index.js` in your IDE and explain the following:

  * 🔑 We create the relationship between readers and books by using the `hasMany()` relationship to declare readers have many books, as shown in the following example:

    ```js
    Reader.hasMany(Book, {
      foreignKey: 'reader_id',
      onDelete: 'CASCADE',
    });
    ```

  * 🔑 We pair the `hasMany()` association method with a `belongsTo()` declaration to show that while each reader has many books, a book belongs to a single reader. This forms the one-to-many relationship:
    
    ```js
    Book.belongsTo(Reader, {
      foreignKey: 'reader_id',
    });
    ```

* Open `24-Stu_One-to-Many/Solved/routes/api/readerRoutes.js` in your IDE and explain the following:

  * 🔑 We use the `findAll()` to find to return all of our data and an an `include` statement to identify the models we want to join:

    ```js
    const readerData = await Reader.findAll({
      include: [{ model: LibraryCard }, { model: Book }],
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens to the books or library cards owned by a reader if that reader is deleted?

  * 🙋 They will also be deleted, because we set `onDelete: 'CASCADE'`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on one-to-many relationships](https://sequelize.org/master/manual/assocs.html#one-to-many-relationships), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 19. Instructor Demo: Sequelize Literals (5 min) 

* Navigate to `25-Ins_Literals` and run `npm install` from the command line. Be sure to change the `.env.EXAMPLE` file into your own `.env` file with your credentials. To speed things up, run `node seeds/seed.js` as well to seed the database tables.

* Run `npm start` from the command line and use Insomnia to demonstrate the following: 

  * 🔑 When we perform a GET request to `/api/drivers/2`, we get a response that resembles the following example&mdash;including everything from before but also the total mileage of all cars owned by the driver:

    ```json
    {
      "id": 2,
      "name": "Lernantino",
      "address": "404 Express Blvd",
      "totalMileage": "150000",
      "license": {
        "id": 2,
        "license_number": "54f17c3c-aef2-49ac-b68a-b66f8645222d",
        "is_donor": true,
        "driver_id": 2
      },
      "cars": [
        {
          "id": 1,
          "make": "Ford",
          "model": "Mustang",
          "mileage": 40000,
          "driver_id": 2
        },
        {
          "id": 4,
          "make": "Toyota",
          "model": "Camry",
          "mileage": 60000,
          "driver_id": 2
        },
        {
          "id": 5,
          "make": "Toyota",
          "model": "Corolla",
          "mileage": 50000,
          "driver_id": 2
        }
      ]
    }
    ```

* Open `25-Ins_Literals/routes/api/driverRoutes.js` in your IDE and demonstrate the following:

  * 🔑 We update the query to include a new attribute called `totalMileage` that has a value of the output of a SQL function, as follows:

    ```js
    const driverData = await Driver.findAll({
      include: [{ model: License }, { model: Car }],
      attributes: {
        include: [
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
            ),
            'totalMileage',
          ],
        ],
      },
    });
    ```

  * 🔑 Because we need to perform a SQL query on the database connection, we import the Sequelize instance at the top of the file, as shown in the following example:

    ```js
    const sequelize = require('../../config/connection');
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we want to use regular SQL with Sequelize?

  * 🙋 Sequelize provides a lot of built-in functionality, but it can be easier to write a more complex query using regular SQL syntax instead. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Literals/README.md`.

### 20. Student Do: Sequelize Literals (15 min) 

* Direct students to the activity instructions found in `26-Stu_Literals/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Users Route Is Missing Data

  Work with a partner to resolve the following issues:

  * As a user, I want to see the books I own and a count of how many of those are short novels.

  ## Expected Behavior

  When a request is made for user data, the response includes a `shortBooks` property that counts the books with between 100 and 300 pages.

  ## Actual Behavior

  The user data in the response does not include a `shortBooks` property.

  ## Steps to Reproduce the Problem

  1. Run `node seeds.js` from the command line to seed the database.

  2. Run `npm start` to start the server.

  3. In Insomnia, make a GET request to `/api/readers/1`.

  4. Note that the response data does not include a `shortBooks` property.

  ---

  ## 💡 Hints

  How could you obtain this short novel count using a regular SQL query?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would you build a many-to-many relationship using Sequelize?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 21. Instructor Review: Sequelize Literals (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using regular SQL queries in Sequelize? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `attribute` 

  * ✔️ `sequel.literal()` 

  * ✔️ `COUNT()` 

* Open `26-Stu_Literals/Solved/routes/api/readerRoutes.js` in your IDE and explain the following: 

  * 🔑 For the GET routes, we add the `attributes` option to instruct Sequelize to include or exclude any columns or fields, as follows:

    ```js
    const readerData = await Reader.findAll({
      include: [{ model: LibraryCard }, { model: Book }],
      attributes: {
        include: [
          [
            // Use plain SQL to get a count of all short books
            sequelize.literal(
              '(SELECT COUNT(*) FROM book WHERE pages BETWEEN 100 AND 300 AND book.reader_id = reader.id)'
            ),
            'shortBooks',
          ],
        ],
      },
    });
    ```

  * 🔑 In the `include` option, we add an array with the `sequelize.literal()` query first and the attribute name we'll use second. 

  * 🔑 The SQL `COUNT()` function will return the number of books with between 100 and 300 pages.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we make this code easier to read in the route's callback function?

  * 🙋 We can create a static Sequelize method to perform on the model.

  * ☝️ Why does the SQL query have to explicitly include `book.reader_id = reader.id`?

  * 🙋 Without that part of the query, it would count ALL books and not just the books owned by this reader.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Sequelize documentation on subqueries](https://sequelize.org/master/manual/sub-queries.html), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Eslint/README.md`.

## 22. Everyone Do: ESLint (20 min)

* Open the [ESLint documentation](https://eslint.org/) in your browser and explain the following:

  * We can use **ESLint** to help enforce code styling and consistency in web applications.

* Direct students to the activity instructions found in `27-Evr_Eslint/README.md`:

  ```md
  # 🐛 Code Not Following ESLint Rules

  Work with a partner to resolve the following issues:

  * As a developer on a team, I want my team's codebase to follow uniform formatting and styling, using ESLint rules.

  ## Expected Behavior

  The code in [Unsolved/example.js](Unsolved/example.js) should pass all tests and rules listed in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json), and it should not have red underlines.

  ## Actual Behavior

  The code in [Unsolved/example.js](Unsolved/example.js) does not pass most rules listed in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json), and it does have red underlines.

  ## Steps to Reproduce the Problem

  1. Install the [VS Code EsLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

  2. From the command line, run `npm install` in the [Unsolved](./Unsolved) folder.

  3. Open [Unsolved/example.js](Unsolved/example.js) in your code editor. If you completed the previous steps correctly, you should see red annotations under different parts of the code. Hovering over each one displays a popover that lists an ESLint rule being broken.

      * Alternatively, you can run `npm run test` to get a list of code styling errors and where they occur.

  ---

  ## 💡 Hints

  How can we better understand the rules in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json) using the [ESLint documentation on rules](https://eslint.org/docs/rules/)?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we ensure that the code passes all ESLint checks before merging a GitHub pull request? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

* Navigate to `27-Evr_Eslint/Unsolved` on the command line, run `npm install`, and demonstrate the following:

  * 🔑 If we run `npm run test`, ESLint will check all of the JavaScript files for code styling issues by comparing it to both its internal base rules and the rules that are present in `.eslintrc.json`.

* Open `27-Evr_EsLint/Unsolved` in your IDE to demonstrate the following:

  * 🔑 The ESLint extension for VS Code also allows us to open a file like `example.js` and view what's wrong. We can highlight underlined code to get a dialog that explains what's wrong and how we can fix it.

  * In the `.eslintrc.json` file, we can tell ESLint how to handle certain rules and formats.

  * In `package.json`, we use the `npm run test` script to run the `npm run lint` script. 

  * The `npm run lint` script uses `npx` to temporarily download ESLint as an executable command and run it on all files that match the extension of `.js`. We use `exit 0` at the end, like in the following example, to prevent Node.js from throwing an error when the linting doesn't pass:

    ```json
    "lint": "npx eslint **/*.js --quiet; exit 0",
    ``` 

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
