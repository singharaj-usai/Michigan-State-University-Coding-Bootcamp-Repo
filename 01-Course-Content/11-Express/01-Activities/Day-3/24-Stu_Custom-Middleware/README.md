# 🐛 Middleware Logging Not Working

Work with a partner to resolve the following issues:

* As a developer, I want to use logging middleware in my application so that I can know when a specific endpoint has been used.

## Expected Behavior

When a user makes a request to an endpoint, the middleware will intercept the request, log out information about the request (GET, POST), and log it to the console.

## Actual Behavior

When a user makes a request to endpoints in the application, we can tell that something was written to the file system, but custom middleware does not log any information.

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

Use [Google](https://www.google.com) or another search engine to research this

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
