# 🏗️ Delete Data Using MongoDB and Express.js

Work with a partner to implement the following user story:

* As a developer, I want to be able to delete an existing document in a MongoDB database.

* As a developer, I want to be able to update data in an existing document in a MongoDB database.

## Acceptance Criteria

* It is done when I use the existing `/create` GET Route to create a new document that includes a title.

* It is done when I add a new `/delete` DELETE route that uses a filter to find a single document by its unique `_id` and deletes that document. The `_id` value should be provided by the request body.

* It is done when I test the route using Insomnia and the document that I just created is deleted. No other documents should be changed.

## 💡 Hints

* Why is it important to specify a filter when updating and deleting documents?

* Why do you need to require the `ObjectId()` when sending an `_id` string in JSON? 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are indexes? How do they support the efficient execution of queries in MongoDB?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
