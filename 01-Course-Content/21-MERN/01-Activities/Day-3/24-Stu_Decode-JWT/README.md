# 🐛 User Is Immediately Logged Out of Application

Work with a partner to resolve the following issue:

* As a user, I want to log in to the application and remain logged in.

## Expected Behavior

A user should be able to sign up or log in to their account and receive a JSON Web Token with a two-hour expiration.

## Actual Behavior

The user's token is immediately deemed expired by the client-side application and is removed from localStorage, logging out the user.

## Steps to Reproduce the Problem

To reproduce the problem, follow these steps:

1. Navigate to `24-Stu_Decode-JWT/Unsolved` from the command line.

2. Run `npm install`, `npm run seed`, and `npm run develop`.

3. Open <localhost:3000/signup> in the browser to create a user and a session or log in as one of the seeded users at <localhost:3000/login>.

4. When page redirects to the homepage, the user is still prompted to log in or sign up.

---

## 💡 Hints

* Where do we store all of our client-side authentication functionality? 

* What unit of time measurement does the JSON Web Token use compared to JavaScript?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* When would you use JSON Web Tokens vs. cookies for user authentication?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
