# 📖 Implement Map() Inside a Component

## Before We Begin

Before you complete this activity, complete the following steps:

1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

2. Copy the `/src` folder from [Unsolved](./Unsolved/src/) and paste it into [00-practice-app](../00-practice-app/).

3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

  `import 'bootstrap/dist/css/bootstrap.min.css'`

## Activity

Work with a partner to implement the following user story:

* As a developer, I want to be able to map over a list of data and render components for each piece of data.

## Acceptance Criteria

The activity is done when it meets the following criteria:

* It's done when I have modified the `List` component so that inside its `ul` tags, one `li` tag renders for each item in the array of grocery objects being passed via props.

* It's done when each `li` tag displays the `text` property of each grocery object using the `map()` method.

## 📝 Notes

Refer to the documentation:

* [React Docs on lists and keys](https://facebook.github.io/react/docs/lists-and-keys.html)

* [MDN Web Docs on map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## 💡 Hints

We only need to modify one file for the activity. Which one is it?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could we render a list of *only* the groceries that *have not* been purchased? Could we use the [filter() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to help us with this?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
