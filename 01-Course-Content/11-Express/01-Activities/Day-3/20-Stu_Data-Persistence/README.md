# 🐛 Adding a Review Overwrites Existing JSON

Work with a partner to resolve the following issues:

* As a user, I want to be able to append my review to the list of existing reviews so that existing reviews don't get overwritten.

## Expected Behavior

When a user adds a review, the review should append to the list of reviews in the JSON file.

## Actual Behavior

When a user adds a review, the entire JSON file gets overwritten with the new review, and the existing reviews get replaced.

## Steps to Reproduce the Problem

1. Run the back-end server by running `npm install` and `npm start`.

2. Click the link in the terminal to visit `http://localhost:3001/`.

3. Fill out the necessary fields to add a review.

4. Check the content of `db/reviews.json` and note that the old entries have been replaced.

---

## 💡 Hints

How can the built-in `fs` module accomplish appending data to a JSON file?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Without having a database, what other tools can you use to persist data on the server?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
