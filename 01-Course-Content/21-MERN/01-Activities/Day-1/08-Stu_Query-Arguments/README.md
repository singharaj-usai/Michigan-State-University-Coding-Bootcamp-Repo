# 📖 Create a Class Resolver to Return Individual Classes

Work with a partner to implement the following user story:

* As a developer, I want to be able to query for individual classes.

## Acceptance Criteria

* It's done when the following GraphQL query returns a single class object:

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

## 📝 Notes

Refer to the documentation: 

[Apollo docs on handling arguments](https://www.apollographql.com/docs/apollo-server/data/resolvers/#handling-arguments)

---

## 💡 Hints

* What database query would retrieve a single object?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How do you differentiate between required and optional arguments?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
