# 🐛 App Renders a Blank Page

Work with a partner to resolve the following issue:

* As a user, I want to be able to see something rendered to the page when I visit the site.

## Expected Behavior

The page should render an `h1` heading tag that introduces the creator; for example, `<h1>Hello! My name is <insert name here></h1>`.

There should also be an unordered list of interests following the heading.

## Actual Behavior

The page loads with errors in the console and the page is empty.

## Steps to Reproduce the Problem

Because this is a new activity, we need to swap out the `/src` folder. Follow these steps to reproduce the problem:

1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

3. Run `npm start` and navigate to the page.

## 💡 Hints

Why do we need to import the React library in each component?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Why is it important to wrap all JSX tags for a single component in a single parent tag?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
