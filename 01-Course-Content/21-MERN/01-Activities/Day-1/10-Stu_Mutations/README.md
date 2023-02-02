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

    ```json
    {
      "id": "<insert ID of a class here>",
      "building": "AA"
    }
    ```

5. Run the following mutation:

    ```gql
    mutation updateClass($id: ID!, $building: String!) {
      updateClass(id: $id, building: $building) {
        name
        building
      }
    }
    ```

6. Note that the `building` property in the returned data is not set to `"AA"`

---

## 💡 Hints

* How else could you verify if the data is being updated correctly?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What tools will you need to run GraphQL queries in your own front end? 

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
