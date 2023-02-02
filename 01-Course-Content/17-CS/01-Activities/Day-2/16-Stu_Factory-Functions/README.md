# 🐛 Factory Function Returns Undefined Values When the Inner Function Is Called

Work with a partner to resolve the following issue(s):

* As a developer, I want the inner function of my factory function to correctly log the variables when called.

## Expected Behavior

When a user calls the `greet` method on the `Student` function, the values should be correctly displayed in the console.

## Actual Behavior

When a user calls the `greet` method on the `Student` function, they see undefined values instead of the `name` and `gradeYear`.

## Steps to Reproduce the Problem

1. Create a new student variable and assign it to the `Student` function. 

2. Call the `greet` method on the newly created student variable.

3. Check the console to see undefined values.

4. Run `npm test` to check if all unit tests pass.

## 💡 Hints

What is the context of `this` when inside a factory function? 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Is the `new` keyword required when using a factory function? 

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
