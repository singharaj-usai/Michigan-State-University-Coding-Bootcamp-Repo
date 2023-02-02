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

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
