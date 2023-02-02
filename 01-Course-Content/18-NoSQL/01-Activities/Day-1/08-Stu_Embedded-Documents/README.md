# 🐛 Query on Embedded Document Not Returning Matching Data

Work with a partner to resolve the following issue(s):

* As a book store owner, I should be able to execute a query that returns a list of books that have a price of less than $10.

* As a book store owner, I should be able to execute a query that returns a list of books that has at least one featured author.

## Expected Behavior

When I query the embedded data using the `db.collection.find()` method, the matching data should be returned.

## Actual Behavior

When I query the embedded data using the `db.collection.find()` method, no matching data is returned.

## Steps to Reproduce the Problem

Follow these steps to reproduce the problem:

1. In the Unsolved folder, run `npm install` and `node server`.

2. Open Insomnia and enter the GET Route `/price-less-than-10`. A list of books that have a price of less than $10 is not returned.

3. Open Insomnia and enter the GET Route `/featured-authors`. A list of books that have at least one featured author is not returned.

---

## 💡 Hints

What notation do you use to access an object inside another object in JavaScript?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How would you query an array of embedded documents in MongoDB?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
