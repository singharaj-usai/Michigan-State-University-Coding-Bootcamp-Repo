# 🐛 GET Route Returns Wrong Summary Price Data

Work with a partner to resolve the following issue:

* As a user, I should be able to see summary statistics for the prices of books in stock.

## Expected Behavior

When I test the `sum-price` GET route in Insomnia, summary statistics for only books that are in stock should be returned.

## Actual Behavior

When I test the `sum-price` GET route in Insomnia, summary statistics for all books are returned.

## Steps to Reproduce the Problem

Follow these steps to reproduce the problem:

1. Run `npm install` and `npm start` to start the app.

2. Navigate to Insomnia on your local machine and test the `sum-price` GET route.

3. The summary data for all books are being returned. To see a list of all books for comparison, use the `all-books` GET route.

## Assets

The following image demonstrates the web application's appearance and functionality:

![Returned data showing only in-stock summary books.](assets/image_1.png)

---

## 💡 Hints

What MongoDB aggregate pipeline stage do you use to filter data?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Aggregate middleware is one of four types of Mongoose middleware. What are the other three and how are they used?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
