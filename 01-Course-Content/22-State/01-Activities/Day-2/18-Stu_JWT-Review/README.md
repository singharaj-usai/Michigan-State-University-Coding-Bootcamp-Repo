# 🐛 Profile Page isn't Displaying the Logged in User's Data

Work with a partner to resolve the following issue(s):

* As a user, I want to see my own thoughts when I visit the profile page.

## Expected Behavior

A logged-in user should see the thoughts that they created when they visit the `/me` route.

## Actual Behavior

The profile page displays a message informing the user that they must be logged in to see the content.

## Steps to Reproduce the Problem

1. Navigate to `26-Stu_Resolver-Context/Unsolved` from the command line.

2. Run `npm install`, `npm run seed`, and `npm run develop`.

3. Open <localhost:3000/login> in the browser.

4. Log in with the following test credentials, or create your own user and some thoughts:

    ```json
    {
      "email": "lernantino@techfriends.dev",
      "password": "password10"
    }
    ```

5. Navigate to <localhost:3000/me>.

6. The app doesn't display the thoughts from this user.

## Assets

The following image demonstrates the profile page's appearance and functionality:

![The logged-in user's profile page displays thoughts that they've created and a form to create more thoughts.](Images/01-screenshot.png)

---

## 💡 Hints

* What is the difference between the server-side `QUERY_ME` and `QUERY_SINGLE_USER` query resolvers that would cause one to work and the other to not work?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could we implement authentication in a React app without using GraphQL?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
