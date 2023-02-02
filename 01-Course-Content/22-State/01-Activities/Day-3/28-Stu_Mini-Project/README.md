# Mini-Project

In this activity, you will refactor an application that uses the Context API so that it handles state using the open source JavaScript library Redux.

## Setup

Copy the `src` directory from the `Develop` folder into `00-practice-app` before you begin.

## Instructions

* Begin by installing the `redux` and `react-redux` libraries with `npm`.

* Create a `store.js` file in the `utils` directory. This file should do the following:

  * Import `{ createStore }` from `redux`.

  * Import `reducers` from `./reducers`.

  * Create a default export of `createStore` that accepts an argument of `reducers`.

* Open `/utils/CarContext.js` and import `{ Provider }` from `react-redux` and `store` from `./store`.

* Refactor the `CarProvider` component so that it returns `<Provider>` with an attribute of `store`, set to the value of `store`.

* Clean up any unused code left over from the React Hooks.

* Run the application, using `npm run start`, to ensure that functionality is unchanged for the end user.

---

## 💡 Hints

How can we use the [Redux Fundamentals guide](https://redux.js.org/tutorials/fundamentals/part-1-overview) to find examples of implementation?

What needs to be changed, if anything, inside the `reducers.js` file?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Instead of using `React.createContext`, how can we use `Redux.createStore` and the existing `reducer` to generate the initial state and to calculate any future updates?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
