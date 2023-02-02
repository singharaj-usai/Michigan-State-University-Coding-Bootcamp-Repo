# 10.4 Full-Time Lesson Plan: Events, Forms, Fetching Data, and React Hooks

## Overview

In this lesson, you'll review some important React concepts with students to help them understand why it is a powerful tool for creating modern web applications. You will review the concept of props, state, event handlers within React, making forms functional, fetching data from an API in React, and React Hooks.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_Components` through `20-Stu_Fetching-Data`.

* Much like in the previous lesson, each activity will require the student to replace the `/src` directory from their `00-practice-app` with the current activity by manually copying and pasting, or by using the `sswap` utility located in the `01-Activities/swap_tool` directory.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Explain and use React props.

* Explain the concept of state within a React app.

* Implement event handlers in React components.

* Create functional forms in React.

* Explain the `useEffect` Hook and how it can be used inside a React app.

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Demo: Components        | 0:05     |
| 10:05AM| 2   | Student Do: Components             | 0:15     |
| 10:20AM| 3   | Instructor Review: Components      | 0:10     |
| 10:30AM| 4   | Instructor Do: Stoke Curiosity     | 0:10     |
| 10:40AM| 5   | Instructor Demo: State             | 0:05     |
| 10:45AM| 6   | Student Do: State                  | 0:15     |
| 11:00AM| 7   | Instructor Review: State           | 0:10     |
| 11:10AM| 8   | Instructor Demo: Event Handling    | 0:05     |
| 11:15AM| 9   | Student Do: Event Handling         | 0:15     |
| 11:30AM| 10  | Instructor Review: Event Handling  | 0:10     |
| 11:40AM| 11  | FLEX                               | 0:20     |
| 12:00PM| 12  | BREAK                              | 0:30     |
| 12:30PM| 13  | Instructor Demo: React Forms       | 0:05     |
| 12:35PM| 14  | Student Do: React Forms            | 0:15     |
| 12:50PM| 15  | Instructor Review: React Forms     | 0:10     |
| 1:00PM | 16  | Instructor Demo: useEffect Hook    | 0:05     |
| 1:05PM | 17  | Student Do: useEffect Hook         | 0:15     |
| 1:20PM | 18  | Instructor Review: useEffect Hook  | 0:10     |
| 1:30PM | 19  | Instructor Demo: Fetching Data     | 0:05     |
| 1:35PM | 20  | Student Do: Fetching Data          | 0:15     |
| 1:50PM | 21  | Instructor Review: Fetching Data   | 0:10     |
| 2:00PM | 22  | FLEX                               | 0:30     |
| 2:30PM | 23  | END                                | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Components (5 min)

* Welcome students to class.

* Begin by deleting the `00-practice-app/src` directory and replacing it with `09-Ins_Component/src`.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 When we start the React app, the page renders with the two components found in `/components`.

  * Remember that components are JavaScript functions that describe some part of the application's user interface. They usually return some JSX and can also be written as classes.

  * 🔑 Also note that in `App.js`, we are importing the two components `List` and `Nav` at the top of the file. The return statement includes a parent `div` that contains both the `Nav` and `List` components.

    ```js
    import List from './components/List';
    import Nav from './components/Nav';

    export default function App() {
      return (
        <div>
          <Nav />
          <List users={users} />
        </div>
      );
    }
    ```

  * We can see that the `List` component has an attribute called `users` and is set to the value of `users`, one of the imports:

    ```js
    import users from './users';

    export default function App() {
      return (
        <div>
          <Nav />
          <List users={users} />
        </div>
      );
    }
    ```

  * If we navigate into the `00-practice-app/src/components/Nav.js` file, we can see that this component seems responsible for returning JSX associated with the navigation bar for the page.

  * We also see that we have one style object, called `linkStyle`, that is being used for each link:

    ```js
    export default function Nav() {
      const linkStyle = { border: '1px black', padding: '5px' };

      return (
        <nav className="main-header-menu">
          <section
            style={{
              display: 'flex',
              fontFamily: 'helvetica',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <div style={linkStyle}>
              <a href="#">Home</a>
            </div>
            <div style={linkStyle}>
              <a href="#">Login</a>
            </div>
            <div style={linkStyle}>
              <a href="#">Register</a>
            </div>
            <div style={linkStyle}>
              <a href="#">About</a>
            </div>
            <div style={linkStyle}>
              <a href="#">Contact</a>
            </div>
          </section>
        </nav>
      );
    }
    ```

  * If we open `00-practice-app/src/components/List.js`, we can see that this component is mapping over a list of users and rendering `li` elements for each user. The sole responsibility of the component is to return a list of users with the `map()` method.

    ```js
    export default function List({ users }) {
      return (
        <div className="container">
          <h1>Random Users:</h1>
          <ul className="list-group">
            {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
            {users.map((user) => (
              <li className="list-group-item" key={user.login.uuid}>
                {`${user.name.first} ${user.name.last} (${user.login.username})`}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    ```

  * The `List` component receives a `props` object. We use destructuring assignment to assign `users` to its own variable.

    ```js
    export default function List({ users }) {
    ```

  * Passing `props` to the component allows us to use that data inside the return method.

  * 🔑 The `users` array is being passed to the `List` component as a **prop**:

    ```js
    {users.map((user) => (
      <li className="list-group-item" key={user.login.uuid}>
        {`${user.name.first} ${user.name.last} (${user.login.username})`}
      </li>
    ))}
    ```

  * 🔑 The `map()` method is very similar to a `forEach` loop. The key difference is that `map()` doesn't actually mutate the original data. Instead, it makes a copy of the data and returns a new array.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of using the `map()` method to render data inside a React component?

  * 🙋 The `map()` method allows us to render more than one of the same kind of element with a few lines of code. This is at the core of what it means to have DRY (Don't Repeat Yourself) code. We also have the benefit of leaving the initial data untouched as a result of `map()` returning a new array to work with.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Component/README.md`.

### 2. Student Do: Components (15 min)

* Direct students to the activity instructions found in `10-Stu_Component/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Map() Inside a Component

  ## Before We Begin

  Before you begin this activity, complete the following steps:

  1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  2. Copy the `/src` folder from [Unsolved](./Unsolved/src/) and paste it into [00-practice-app](../00-practice-app/).

  3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

    `import 'bootstrap/dist/css/bootstrap.min.css'`

  ## Activity

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to map over a list of data and render components for each piece of data.

  ## Acceptance Criteria

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

  * How could we render a list of only the groceries that have NOT been purchased? Could we use the [filter() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to help us with this?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Components (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with mapping over data inside React components? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `map()`

  * ✔️ Key

  * ✔️ Immutability

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * The assignment was to modify the `List` component so that inside its `ul`, one `li` tag renders for each item in the array of grocery objects being passed via props.

  * First we need to add Bootstrap to the `index.js` file to take advantage of some style classes:

    ```js
    import 'bootstrap/dist/css/bootstrap.min.css'
    ```

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * Next, if we open the `App.js` file, we can see that we are passing the list of groceries to the `List` component as a prop. `List` is a child component of `App`:

    ```js
    function App() {
      return <List groceries={groceries} />;
    }
    ```

* Open `00-practice-app/src/components/List.js` in your IDE and explain the following:

  * Now let's look at the `List` component. This file is where we used `map()` to iterate over each grocery item and return a new array of `li` tags for each item.

  * 🔑 When creating a collection of JSX elements using the `map()` method, we must provide a unique `key` attribute to the parent element that gets returned -- usually something specific to the data that you are working with, like an id. This `key` attribute allows React to track changes to the virtual DOM and select specific elements properly.

  * We write JavaScript inside JSX by using curly braces (`{}`):

    ```js
    return (
      <ul className="list-group">
        {props.groceries.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    );
    ```

  * 🔑 Notice that `map()` returns an array of `li` items. Whenever we try to render an array that contains JSX, React knows to render each JSX element separately.

  * Let's imagine that the user wanted to render a list of items that had not been purchased yet. We could do that using the `filter()` method:

     ```js
     function List(props) {
       const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

       return (
         <ul className="list-group">
           {notPurchased.map(item => (
             <li className="list-group-item" key={item.id}>
               {item.name}
             </li>
           ))}
         </ul>
       );
     }
     ```

  * With the `notPurchased` variable, we are setting it to an array of groceries where the `purchased` property is `false`, and mapping through that instead.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why can't we use something like `forEach` to render an array with React?

  * 🙋 React requires a return value, and `forEach` doesn't return anything. It simply iterates over elements in an array. The `map()` method, however, returns a new array of elements and leaves the original array intact.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝ What is state within the context of a React application?

  * 🙋 **State** is an object that contains property values that belong to a component.

  * ☝ What is a React Hook?

  * 🙋 **Hooks** are a new addition to React that let us use state and other React features without writing an ES6 class.

* Explain that in the beginning, managing the internal state of a component could only be accomplished by creating a class-based component and using a method called `this.setState()`.

* Explain to students that now, with React Hooks, we can manage state in functional components and also replicate the lifecycle methods that were previously only possible in class-based components.

* Let students know that they will learn how to use React Hooks inside functional components, specifically the `useState` and `useEffect` Hooks.

* The most important React Hook, `useState`, is a function exposed by React itself that we can import in components.

* After importing `useState`, we will pluck two values out of it. The first will be the state variable, and the second will be a method to update it.

* Express that choosing whether to use functional components or class-based components is a design choice by the developer. It is important to be comfortable with both so that you can adapt to existing codebases.

* Prepare students for the fact that these topics can get abstract, and encourage them to ask questions as they arise. React Hooks can be a little confusing at first, but most developers appreciate their elegance once they become familiar with them.

### 5. Instructor Demo: State (5 min)

* Start by deleting the `00-practice-app/src` directory and replacing it with `11-Ins_State/src`.

* In the command line, run `npm start` inside the `00-practice-app` directory and demonstrate the following:

  * When we run the React application, the browser loads a page with a greeting that says, "React state is awesome!"

  * Instead of being hardcoded, this greeting is actually being rendered from a value that is stored in state.

  * 🔑 The **state** of a component is an object that holds some information that might change over the life of a component. You will often hear this term used in conjunction with **props**, which we will cover shortly.

  * This app takes advantage of a React Hook called `useState`, which lets you add React state to functional components.

* Open `00-practice-app/src/components/Greeting.js` in your IDE and demonstrate the following:

  * At the very top of the component, we must import `useState` with React in order to use it:

     ```js
     import React, { useState } from 'react';
     ```

  * We first declare the **state variable** called `greeting` by calling the `useState` Hook.

  * `useState` is a way to preserve some values between the function calls. React will remember the value of `greeting` in between re-renders.

  * The `useState` Hook will return the current state and a function to update it, which in this case is called `setGreeting`.

  * The only argument that `useState` accepts is the initial value of the state variable. In this case, we are starting the `greeting` at `Welcome! React state is awesome!`:

     ```js
     const [greeting, setGreeting] = useState('Welcome! React state is awesome!');
     ```

  * To actually render the greeting in the return method, we simply put it in curly braces inside the JSX:

     ```jsx
     return (
       <div className="card text-center">
         <div className="card-header bg-primary text-white">
           Greeting from state:
         </div>
         <div className="card-body">
           <p className="card-text" style={{ fontSize: '50px' }}>
             {greeting}
           </p>
         </div>
       </div>
     );
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is returned from the `useState` Hook?

  * 🙋 The `useState` Hook returns the state and a function to update it.

  * ☝️ What role does state play in reloading the UI of your React application?

  * 🙋 We can use state to associate data with the components and keep track of any values that cause the UI to update.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_State/README.md`.

### 6. Student Do: State (15 min)

* Direct students to the activity instructions found in `12-Stu_State/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Hardcoded Values in JSX

  ## Before We Begin

  Before you begin this activity, complete the following steps:

  1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  2. Copy the `/src` folder from [Unsolved](./Unsolved/src/) and paste it into [00-practice-app](../00-practice-app/).

  3. Import Bootstrap into the [index.js](./Unsolved/src/index.js) file:

      `import 'bootstrap/dist/css/bootstrap.min.css'`

  ## Activity

  Work with a partner to resolve the following issue:

  * As a user, I want to be able to welcome some students to class by displaying their names in an unordered list on the page along with a welcome message.

  * As a developer, I want to use state variables using the `useState` hook and access those variables inside the JSX.

  ## Expected Behavior

  Loading the page will show a greeting message and a list of students from the class in an unordered list. These values should be declared as state variables using the `useState` Hook and accessed inside the JSX with curly braces.

  ## Actual Behavior

  The page seems to have hardcoded values inside the JSX for the greeting and student names.

  ## 💡 Hints

  * What do we need to import in order to use the `useState` Hook?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other Hooks that we can use with React?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: State (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `useState` Hook? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `useState` Hook

  * ✔️ Default state values

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * First we want to import Bootstrap to make sure that the `className` attributes apply the proper styles to the page:

     ```js
     import 'bootstrap/dist/css/bootstrap.min.css';
     ```

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * Inside the `App.js` file, we can see that we import something called `Greeting.js` and return it in the `App` component:

     ```js
     import React from "react";
     import Greeting from "./components/Greeting";

     function App() {
       return <Greeting />;
     }

     export default App;
     ```

* Open `00-practice-app/src/components/Greeting.js` in your IDE and explain the following:

  * To use the `useState` Hook from React, we have to modify the import statement at the top of the file:

     ```js
     import React, { useState } from 'react';
     ```

  * With the `useState` Hook, we declare a state variable called `greeting` and a function to update `setGreeting`. The `useState` Hook accepts only one argument, which will be the initial value for `greeting`. In this case, this is `Welcome the following students to class!`:

     ```js
     function Greeting() {
       const [greeting, setGreeting] = useState('Welcome the following students to class!');
     ```

  * Because the app will render a list of students, we also want to create a state variable called `group`. This will be an array that contains a few students from the class. Notice that we immediately set an initial value for the state variable with three names:

     ```js
     const [group, setGroup] = useState(["John", "Grace", "Jared"]);
     ```

  * In the return statement, we see the JSX that will render when this component loads. We use curly braces to render the greeting inside a `p` tag.

  * We also created a unordered list that will display the name of each person in `group` by accessing the array index position:

     ```js
     return (
       <div className="card text-center">
         <div className="card-header bg-primary text-white">State activity!</div>
         <div className="card-body">
           <p className="card-text">{greeting}</p>
           <ul>
             <li>{group[0]}</li>
             <li>{group[1]}</li>
             <li>{group[2]}</li>
           </ul>
         </div>
       </div>
     );
     ```

  * 🔑 Remember that, for React to function properly, state variables shouldn't be updated directly. The **virtual DOM (VDOM)** only knows to update when the state of the application has changed. For this reason, if we wanted to update `greeting`, for example, we would use the method that is returned from the `useState` Hook, `setGreeting()`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What two things does `useState` return?

  * 🙋 `useState` returns the state variable and a function to update it.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on useState](https://reactjs.org/docs/hooks-state.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Event Handling (5 min)

* Begin by deleting the `00-practice-app/src` directory and replacing it with `13-Ins_Event-Handling/src/`.

* Run `npm start` from the command line and demonstrate the following:

  * When we launch this React app, we can see that it is very similar functionally to the previous example.

  * Let's look at `00-practice-app/src/components/Counter.js`. To use the `useState` Hook, we need to first import it with React at the top of the file:

     ```js
     import React, { useState } from 'react';
     ```

  * We can see that we create a state variable for `count` and a function called `setCount()` to update it.

  * We set the initial value of `count` to 0:

     ```js
     let [count, setCount] = useState(0);
     ```

  * In the `Counter` component, we will declare a method, `setCount()`, that will be used later in the code. This function will be called when a user clicks on the increment button.

  * 🔑 Notice that we did not update the `count` variable directly. When dealing with class-based components, we always use `setCount` to update state and allow React to become aware of the change:

     ```js
     const handleClick = () => {
       setCount((count + 1));
       console.log(`New value of count: ${count}`);
     };
     ```

  * In the JSX, we refer to the `handleIncrement()` method by making it the value of the `onClick` attribute for the button. We also refer to the count variable, `count`, to render it on the page:

     ```js
     return (
       <div className="card text-center">
         <div className="card-header bg-primary text-white">Click Counter!</div>
         <div className="card-body">
           <p className="card-text">Click Count: {count}</p>
           <button className="btn btn-primary" type="button" onClick={handleIncrement}>
             Increment
           </button>
         </div>
       </div>
     );
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why wouldn't we want to update the state variable, `count`, directly?

  * 🙋 For the component to re-render itself, we must use the method we declared with `useState`. If we updated the variable directly, the component would not re-render.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Event-Handling/README.md`.

### 9. Student Do: Event Handling (15 min)

* Direct students to the activity instructions found in `14-Stu_Event-Handling/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 📐 Add Comments to Implementation of Event Handlers

   ## Before We Begin

   Before you begin this activity, complete the following steps:

   1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

   2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

   3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

     `import 'bootstrap/dist/css/bootstrap.min.css'`

   ## Activity

   Work with a partner to add comments describing the functionality of the code found in the [components](../00-practice-app/src/components) folder.

   ## 📝 Notes

   Refer to the documentation:

   [React Docs on handling events](https://reactjs.org/docs/handling-events.html)

   ---

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * What does `this` refer to when dealing with a class-based component?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Event Handling (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with handling events in React? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Updating parent components

  * ✔️ Defining event handlers

* Open `00-practice-app/src/components/App.js` in your IDE and explain the following:

  * In `App.js`, we are importing the `Counter` component and rendering it in the return method:

     ```js
     import React from "react";
     import Counter from "./components/Counter";

     function App() {
       return <Counter />;
     }

     export default App;
     ```

* Open `00-practice-app/src/components/Counter.js` in your IDE and explain the following:

  * Remember that when we use `useState`, we have to import it using React at the top of the component. This is the first thing we did in this file:

     ```js
     import React, { useState } from 'react';
     ```

  * We also import `CardBody` for use in the return statement.

     ```js
     import CardBody from './CardBody';
     ```

  * After we declare our functional component, `Counter`, we then set up the state variable and a function to update it. Notice that we use `let` so that the value of `count` can change at some point. We also set the initial value to `0`:

     ```js
     let [count, setCount] = useState(0);
     ```

  * Next, we need to create some event handlers that we can point to when the increment or decrement buttons are clicked. We call on the `setCount()` method inside these methods so that we can change the count itself:

     ```js
     const handleIncrement = () => {
       setCount(count + 1);
     };

     const handleDecrement = () => {
       setCount(count - 1);
     };
     ```

  * In the return statement, we want to pass these click handlers to the `CardBody` component. To do this, we pass them as props. We also have one more prop being passed, which is the actual count:

     ```jsx
     return (
       <div className="card text-center">
         <div className="card-header bg-primary text-white">Click Counter!</div>
         <CardBody
           count={count}
           handleIncrement={handleIncrement}
           handleDecrement={handleDecrement}
         />
       </div>
     );
     ```

* Open `00-practice-app/src/components/CardBody.js` in your IDE and explain the following:

  * In `CardBody.js`, we are creating a functional component called `CardBody` that accepts props. `CardBody` will be a child component of `Counter`.

  * If we were to run `console.log(props)` at the beginning of the component, we would see an object with `count`, `handleIncrement()`, and `handleDecrement()`:

     ```js
     function CardBody(props) { ... }
     ```

  * The return method for the `CardBody` component contains some JSX with Bootstrap classes for styling and also two buttons. Those buttons assign `props.handleIncrement` and `props.handleDecrement` to the `onClick` attribute respectively:

     ```js
     return (
       <div className="card-body">
         <p className="card-text">Click Count: {props.count}</p>
         <button
           type="button"
           className="btn btn-primary"
           onClick={props.handleIncrement}
         >
           Increment
         </button>{' '}
         <button
           type="button"
           className="btn btn-danger"
           onClick={props.handleDecrement}
         >
           Decrement
         </button>
       </div>
     );
     ```

  * Sometimes props will be assigned to variables using destructuring assignment syntax, allowing us to avoid having to type `props.` before each key. In this scenario, the `CardBody` component would look something like this:

     ```js
     function CardBody({count, handleIncrement, handleDecrement}) {
       return (
         <div className="card-body">
           <p className="card-text">Click Count: {count}</p>
           <button
             type="button"
             className="btn btn-primary"
             onClick={handleIncrement}
           >
             Increment
           </button>{' '}
           <button
             type="button"
             className="btn btn-danger"
             onClick={handleDecrement}
           >
             Decrement
           </button>
         </div>
       );
     }
     ```

  * As with all components in React, we want to make sure that we export it so that we can use it inside `Counter.js`:

     ```js
     export default CardBody;
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do you pass an event handler to a component?

  * 🙋 We can pass event handlers and other functions as props to child components.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on event handling](https://reactjs.org/docs/handling-events.html), and stay for office hours to ask for help.

* Answer any questions before proceeding.

### 11. FLEX (20 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* If the students are struggling with React, use this time to review the concepts that they need the most help with. Take time to review the activities more in depth.

### 12. BREAK (30 mins)

### 13. Instructor Demo: React Forms (5 min)

* Begin by deleting the `00-practice-app/src` directory and replacing it with `15-Ins_React-Forms/src`.

* Run `npm start` from the command line and demonstrate the following:

* Open <http://localhost:3000> in your browser and demonstrate the following:

  * 🔑 When we type a first and last name, the page updates display the username that was entered.

  * 🔑 When we press Enter, we receive an alert that greets us with the name we provided.

* Open `00-practice-app/src/components/Form/index.js` in your IDE and explain the following:

  * Note that the component is no longer a single file in the components directory. In larger React applications, it is common to create nested folders for each component in case the component has its own dependencies, like a CSS file.

  * The first thing that we import in the `index.js` file of the `Form` component is a `style.css` file that is in the same directory. This file contains a few classes that apply only to the `Form` component.

    ```js
    import React, { useState } from 'react';
    import './style.css';
    ```

  * If we look at the `input` elements in the return method, we can see that there are some props attached to them.

  * We are passing the state variables `firstName` and `lastName`. Additionally, we have two `onChange` attributes, which are set to `handleInputChange`:

    ```js
    return (
      <div>
        <p>
          Hello {firstName} {lastName}
        </p>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
    ```

  * At the top of the component, we initialize the state variables by using the `useState` Hook. We set both `firstName` and `lastName` to an empty string as the initial value for both variables:

     ```js
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     ```

  * 🔑 Notice that in the input elements, we set the value of the input to be equal to these state variables:

    ```js
    <input
      value={firstName}
      name="firstName"
      onChange={handleInputChange}
      type="text"
      placeholder="First Name"
    />
    <input
      value={lastName}
      name="lastName"
      onChange={handleInputChange}
      type="text"
      placeholder="Last Name"
    />
    ```

  * The event listener that is attached to these input elements is called `handleInputChange()`. It is responsible for updating state when the user types something in the text field.

  * Notice that we accept the event as an argument. We assign `name` and `value` to their own variables from the `e.target` object.

  * Next, we create a ternary statement that will set the `firstName` or `lastName` depending on the `name` attribute of the input element:

    ```js
    const handleInputChange = (e) => {
      const { name, value } = e.target;

      return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };
    ```

  * When working with React forms, it typically is not sufficient to only handle events concerning input changes. We should also consider button clicks, such as the user clicking "submit" in this case.

  * To handle this logic, we created another handler called `handleFormSubmit()`. This method accepts the event as an argument, prevents the page from refreshing, sends an alert to the user, and finally clears the input after the user clicks "submit":

    ```js
    const handleFormSubmit = (e) => {
      e.preventDefault();

      alert(`Hello ${firstName} ${lastName}`);
      setFirstName('');
      setLastName('');
    };
    ```

  * This method is then attached to the `onClick` attribute of the submit button:

    ```jsx
    <button type="button" onClick={handleFormSubmit}>
      Submit
    </button>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first create the React component that renders the form and then create methods to handle input changes and form submission.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_React-Forms/README.md`.

### 14. Student Do: React Forms (15 min)

* Direct students to the activity instructions found in `16-Stu_React-Forms/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Functionality for the Forms Section

  ## Before We Begin

  Before you begin this activity, complete the following steps:

  1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

  ## Activity

  Work with a partner to implement the following user story:

  * As a developer, I want to prevent empty input for the email and username fields of a form.

  * As a developer, I want to improve the user experience by automatically clearing the input fields after the user clicks submit.

  * As a developer, I want to make the application more robust by adding a password input field.

  * As a developer, I want to ensure that the email and password provided by the user are valid.

  ## Acceptance Criteria

  This activity is complete when the following criteria are met:

  * It's done when I have created a state variable, `password`.

  * It's done when I have added a condition to check if the input type is `password` and to update state using `setPassword`.

  * It's done when I have used the methods in the `helper.js` file to validate the format of the email and the strength of the password.

  * It's done when I have set the input fields back to empty strings after the user clicks submit.

  * It's done when I have added a new input field in the return statement with `name`, `type`, `placeholder`, `value`, and `onChange` attributes.

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could we have implemented basic form validation without using helper functions?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: React Forms (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with building form functionality in React? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `event.preventDefault()`

  * ✔️ Destructuring assignment syntax

* Open `00-practice-app/src/components/Form/index.js` in your IDE and explain the following:

  * At the top of the `index.js` for the `Form` component, we need to import `useState` with React first. We are also importing some helper functions that will check the `password` and `email` for validity. These are located in the `/utils` folder:

     ```js
     import React, { useState } from 'react';
     import { checkPassword, validateEmail } from '../../utils/helpers';
     ```

  * If we open `index.js`, we can see that the `Form` component initializes some state variables by using the `useState` Hook. Each of them is set to empty strings to start:

     ```js
     function Form() {
       const [email, setEmail] = useState('');
       const [userName, setUserName] = useState('');
       const [password, setPassword] = useState('');
       const [errorMessage, setErrorMessage] = useState('');
     ```

  * If we look at the return method, we have another form, but this time we also have a `password` input. Notice how each input has a `value`, `name`, and `onChange` prop.

  * 🔑 When dealing with passwords, remember to set the input type to `password` instead of `text`, which tells the browser to hide the user's input as they type it:

     ```js
     return (
       <div>
         <p>Hello {userName}</p>
         <form className="form">
           <input
             value={email}
             name="email"
            onChange={handleInputChange}
             type="email"
             placeholder="email"
           />
           <input
             value={userName}
             name="userName"
             onChange={handleInputChange}
             type="text"
             placeholder="username"
           />
           <input
             value={password}
             name="password"
             onChange={handleInputChange}
             type="password"
             placeholder="Password"
           />
           <button type="button" onClick={handleFormSubmit}>Submit</button>
         </form>
         ...
       </div>
     );
     ```

  * The `onChange` attribute for each of these input fields is responsible for calling the `handleInputChange()` whenever the user enters anything.

  * First we check the `name` attribute of each element and, depending on its value, update the corresponding state variable:

     ```js
     const handleInputChange = (e) => {
       const { target } = e;
       const inputType = target.name;
       const inputValue = target.value;

       if (inputType === 'email') {
         setEmail(inputValue);
       } else if (inputType === 'userName') {
         setUserName(inputValue);
       } else {
         setPassword(inputValue);
       }
     };
     ```

  * When it comes time for the user to actually submit the form, we have an event for that. It is attached to the `onSubmit` attribute of the form, which then calls `handleFormSubmit()`.

  * In the logic, we check whether the `email` is invalid or `userName` is empty. If so, we set an error message and return out of the code block.

  * We do the same with the password. If `password` is not valid, set an error message and return out of the code block.

  * In the event that everything checks out, we send an alert to the user and set the state variables back to empty strings:

     ```js
     const handleFormSubmit = (e) => {
       e.preventDefault();

       if (!validateEmail(email) || !userName) {
         setErrorMessage('Email or username is invalid');
         return;
       }
       if (!checkPassword(password)) {
         setErrorMessage(
           `Choose a more secure password for the account: ${userName}`
         );
         return;
       }
       alert(`Hello ${userName}`);

       setUserName('');
       setPassword('');
       setEmail('');
     };
     ```

  * State is updated when we enter any character into the first name and last name inputs, due to the `handleInputChange()` method. As a result, the page updates in real time when we type:

     ```jsx
     return (
       <div>
         <p>Hello {userName}</p>
       ...
       </div>
     )
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we use `event.preventDefault()` in the function to handle the form submission?

  * 🙋 With single-page apps and React, we don't want the page to refresh when the user clicks submit.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on forms](https://reactjs.org/docs/forms.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: useEffect Hook (5 min)

* Being by deleting the `00-practice-app/src` directory and replacing it with `17-Ins_Hooks-useEffect/src`.

* Run `npm start` from the command line and demonstrate the following:

  * When we run the React app and the browser opens, there is a button that increments the count displayed on the screen.

  * Also, the page is notifying us that the browser's local storage is being updated.

  * This functionality is using a React Hook called `useEffect`. This Hook is used in a very similar fashion to React lifecycle methods like `componentDidUpdate()`.

* Open `00-practice-app/src/components/Display.js` in your IDE and explain the following:

  * Inside the `Display` component, we can see right away that this is a functional component and not a class-based component.

  * 🔑 React Hooks can only be used with functional components.

  * First, we need to import `useEffect` in the React import statement, along with `useState`:

     ```js
     import React, { useState, useEffect } from 'react';
     ```

  * In our component, we have initialized state using the `useState` Hook. We made a `count` variable with a default value of `0`, and a function to update it called `setCount`:

     ```js
     const [count, setCount] = useState(0);
     ```

  * The `useEffect` Hook comes into play when we want some code to run after the state is updated. For example, if the `count` is changed from `1` to `2`, we want to do something.

  * In this example, we are setting a `localStorage` variable called `myCount` with the same count that's in the state.

  * 🔑 The `setItem()` method updates `localStorage` and accepts the key name and value:

     ```js
     useEffect(() => localStorage.setItem('myCount', count));
     ```

  * 🔑 If we wanted this to only run one time after the page loads, we could provide an optional empty dependency array as a second argument to the `useEffect` Hook. We could also specify which variables we want to watch for changes by passing `count` into this array:

     ```js
     useEffect(() => {
      localStorage.setItem('myCount', count)
     }, []); // runs once
     ```

     ```js
     useEffect(() => {
      localStorage.setItem('myCount', count)
     }, [count]); // re-creates the closure every time the "count" variable changes
     ```

  * The return method contains JSX with a button that has an `onClick` attribute set to `handleIncrease` in order to update the state:

     ```jsx
     return (
       <div>
         <p>You clicked {count} times</p>
         <code>check localStorage in developer console</code>
         <hr />
         <button type="button" onClick={handleIncrease}>
           Click me
         </button>
       </div>
     );
     ```

  * `handleIncrease` is responsible for updating the state variable `count`, and nothing more:

     ```js
     const handleIncrease = () => {
       setCount(count + 1);
     };
     ```

* Open <http://localhost:3000> in the browser and open the developer console. Examine the local storage for this page and notice that the count variable is updated every time the state changes.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would determine what code needs to run when the state changes and then use the `useEffect` Hook inside our functional component.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Hooks-useEffect/README.md`.

### 17. Student Do: useEffect Hook (15 min)

* Direct students to the activity instructions found in `18-Stu_Hooks-useEffect/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 📖 Implement the useEffect Hook

   ## Before We Begin

   Before you begin this activity, complete the following steps:

   1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

   2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

   ## Activity

   Work with a partner to implement the following user story:

   * As a developer, I want to be able to use the `useEffect` Hook to update the browser tab to reflect the current temperature.

   ## Acceptance Criteria

   * It's done when I have imported `useEffect` into [Thermostat.js](../00-React-App/src/components/Thermostat.js).

   * It's done when I have set a value for the `temp` variable.

   * It's done when I have used the `useEffect` Hook to set the `document.title` to the current temperature.

   ## 📝 Notes

   Refer to the documentation:

   [React Docs on the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * What are some other use cases for the `useEffect()` Hook?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: useEffect Hook (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `useEffect` Hook? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ React Hooks

  * ✔️ Optional dependency array

* In the command line, run the application by typing `npm start`.

* Open `00-practice-app/src/components/Thermostat.js` in your IDE and explain the following:

  * This application updates the `document.title` every time the user clicks one of the buttons to raise or lower the temperature.

  * This is accomplished by using the `useEffect` Hook, which we imported with React:

     ```js
     import React, { useState, useEffect } from 'react';
     ```

  * We start by creating a `temp` variable and `setTemp` as a function to update it. We also set an initial value of `75`:

     ```js
     const [temp, setTemp] = useState(75);
     ```

  * Next, we create a `useEffect` Hook that will update the `document.title` as a side effect whenever the state is changed:

     ```js
     useEffect(() => {
       document.title = `${temp}° Fahrenheit`;
     });
     ```

  * Finally, we have the render method that returns the JSX we see on the page. It contains two button elements that have the inline `onClick` attribute set to `increaseTemp` or `decreaseTemp`:

     ```jsx
     <button
       type="button"
       className="btn btn-danger"
       onClick={increaseTemp}
     >
       Raise temperature
     </button>{' '}
     <button
       type="button"
       className="btn btn-primary"
       onClick={decreaseTemp}
     >
     ```

  * Both of the click handlers are responsible for updating the state of the temp variable:

     ```js
     const increaseTemp = () => {
       setTemp(temp + 1);
     };

     const decreaseTemp = () => {
       setTemp(temp - 1);
     };
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What would happen if we provided an empty array as the second argument to the `useEffect` Hook?

  * 🙋 The `document.title` would only update one time.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on useEffect](https://reactjs.org/docs/hooks-effect.html), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 19. Instructor Demo: Fetching Data (5 min)

* Begin by deleting the `00-practice-app/src` directory and replacing it with `19-Ins_Fetching-Data/src`.

* Open `00-practice-app/src/components` in your IDE.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 When we start the application, we see a series of cat-related images.

  * 🔑 When the component mounts, a request for cats is sent to the Giphy API and the results are displayed on the page.

* Open `00-practice-app/src/components/SearchResultContainer.js` in your IDE and demonstrate the following:

  * 🔑 The `useEffect` Hook can also be used to fetch data from an API. This is useful for fetching data that is not immediately available, and very similar to the `componentDidMount` lifecycle method found in older class-based components.

  * With `useEffect`, we can set it to run only once, by passing an empty array as the second argument. Optionally, if we wanted it to watch for changes we could pass in a state variable in that array. However, we will not be using this in this activity. Notice that we invoke the `useEffect` Hook inside our function component, as shown below:

    ```js
    useEffect(() => {
      // code to run when the component loads
    }, []);
    ```

  * The `SearchResultContainer` component contains and renders the `ResultList` component:

    ```js
    return (
      <div>
        {/* Pass our results to the ResultsList component to map over */}
        <ResultList results={results} />
      </div>
    );
    ```

  * Notice that `SearchResultContainer` is the only stateful component in this application. This is what would be considered the parent component that passes down the state variable to its children.

  * The component can perform a search after it loads by using the React `useEffect` hook. This method is built-in to React, but it does have to be imported.

  * Inside the `useEffect()`, we invoke another method, `searchGiphy()`, that performs the API request, passing in the search term of `"kittens"`:

    ```js
    useEffect(() => {
      searchGiphy('kittens');
    }, []);
    ```

  * The `search()` method, which is imported from `/utils`, takes the response from the GET request and sets it to the value of `results`.

  * You can see this method being using in the`searchGiphy()` method below:

    ```js
    const searchGiphy = async (query) => {
      const response = await search(query);
      setResults(response.data.data);
    };
    ```

* Open `00-practice-app/src/utils/API.js` in your IDE and demonstrate the following:

  * The `search` method is exported for use inside `SearchResultContainer` and does the actual GET request to Giphy.

    ```js
    const search = (query) =>
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`);

    export default search;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is Axios? Can it be compared to another piece of technology that we've used on the front end?

  * 🙋 Axios is an npm package that performs AJAX requests and returns the results. It is similar to the functionality in the browser's `fetch()` method.

  * ☝️ How could we make our component refresh after every change to the search term?

  * 🙋 We can use the `useEffect` Hook to perform the search whenever the search term changes by passing in the search term as the second argument.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Fetching-Data/README.md`.

### 20. Student Do: Fetching Data (15 min)

* Direct students to the activity instructions found in `20-Stu_Fetching-Data/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Information from the OMDB API Does Not Display

  ## Before We Begin

  Before you begin this activity, complete the following steps:

  1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  2. Copy the `/src` folder from [Unsolved](./Unsolved/).

  3. To make API requests, we need to use Axios and Bootstrap. Make sure they are installed by running `npm i axios bootstrap`.

  4. This project uses Bootstrap, so don't forget to import it inside `index.js`:

      ```js
      import 'bootstrap/dist/css/bootstrap.min.css';
      ```

  ## Activity

  Work with a partner to resolve the following issue:

  * As a user, I want to be able to search for the name of a movie using a form on the right and then see the related information on the left.

  ## Expected Behavior

  * When a user visits the page, the result for "The Matrix" should display on the left side of the page.

  * When the user types the name of a movie into the input field, the search term should appear in the field as the user types it.

  * When the user enters a search term and clicks submit, the results for the search should display on the left side of the page.

  ## Actual Behavior

  * When a user searches for a movie, they find out that they cannot enter any text into the search field.

  * Additionally, the search button doesn't seem to do anything in its current state.

  ## 💡 Hints

  * Why might we need to use `event.preventDefault()` in event handlers?

  * Only one file needs to be modified for this activity. Which file is it?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could we show a loading element before the search results are displayed? What React feature allows for this kind of behavior?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Fetching Data (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with making API requests in React? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Axios

  * ✔️ `API.js`

* Ensure that `axios` is added as a dependency:

  ```sh
  npm i axios
  ```

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * In `App.js`, we are importing and returning another component called `OmdbContainer`:

    ```js
    import React from "react";
    import OmdbContainer from "./components/OmdbContainer";

    function App() {
      return <OmdbContainer />;
    }

    export default App;
    ```

* Open `00-practice-app/src/components/OmdbContainer.js` in your IDE and explain the following:

  * This component contains the state and most of the methods that we will pass down to child components.

  * First we create a result state variable using the `useState` hook that will be used to store the results of the API request. Additionally, we create another state variable called `search` that will store the search term that the user enters.

    ```js
    const [result, setResult] = useState({});
    const [search, setSearch] = useState('');
    ```

  * When the component loads, we use the `searchMovies` method to render a default search term of The Matrix.

  * 🔑  Notice that we pass an empty array as the second argument to `useEffect`. This is because we want to run the `searchMovies` method only once when the component loads.

    ```js
    useEffect(() => {
      searchMovie('The Matrix');
    }, []);
    ```

  * The `searchMovies()` method uses the `API` module to make a GET request by using `axios`. The result is then saved to the state object using `setResult()`:

    ```js
    const searchMovie = (query) =>
      API.search(query)
        .then((res) => setResult(res.data))
        .catch((err) => console.log(err));
      };
    ```

* Open `00-practice-app/src/utils/API.js` in your IDE and explain the following:

  * We abstracted the API request logic into its own module for organization. This method is exported for use in `OmdbContainer`:

    ```js
    import axios from 'axios';

    const search = async (query) =>
      axios.get(`https://www.omdbapi.com/?t=${query}trilogy&rating=pg`);

    export default { search };
    ```

* Open `00-practice-app/src/components/OmdbContainer.js` in your IDE and explain the following:

  * To have the `search` variable updated with the current search term, we needed to create a `handleInputChange` method.

  * The `handleInputChange()` method gets called every time the user types in the input field. Without this method, the user is not able to type in the input field.

    ```js
    const handleInputChange = (e) => setSearch(e.target.value);
    ```

  * The `handleInputChange()` method is then passed down to the `SearchForm` component as a prop of the same name, `handleInputChange()`:

    ```jsx
    <Card heading="Search">
      <SearchForm
        value={search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </Card>
    ```

  * To get the movie search working, we need to create a `handleFormSubmit()` method that will be invoked whenever the user clicks submit to search for a movie.

  * Notice that we use `event.preventDefault()` to stop the default browser behavior of refreshing the page when the submit button is clicked:

    ```js
    const handleFormSubmit = (e) => {
      e.preventDefault();
      searchMovie(search);
    };
    ```

  * The `handleFormSubmit()` method is also passed down to the `SearchForm` component as a prop of the same name, `handleFormSubmit`:

    ```js
    <SearchForm
      value={search}
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}
    />
    ```

  * Finally, after the `search` variable has been updated with the results from the OMDB API request, we can display that data in the component:

    ```js
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading={Title || 'Search for a Movie to Begin'}>
              {Title ? (
                <MovieDetail
                  title={Title}
                  src={Poster}
                  director={Director}
                  genre={Genre}
                  released={Released}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
    ```

  * The JSX is using a ternary operator, which acts like an `if` statement. We first check whether `result` has a `Title` property, which would mean that a movie was found in the API request.

  * If we have a movie result, we display a `MovieDetail` component by passing down the result data as props. Otherwise, we display an `h3` saying that there are no results:

    ```js
    {Title ? (
      <MovieDetail
        title={Title}
        src={Poster}
        director={Director}
        genre={Genre}
        released={Released}
      />
    ) : (
      <h3>No Results to Display</h3>
    )}
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is one reason that a user might not be able to type in a input field inside a React app?

  * 🙋 The search field needs an `onChange` handler to update state when the user types something.

  * ☝️ What are some of the use cases for `useEffect`?

  * 🙋 The `useEffect` hook is used to run a piece of code on a specific condition.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Axios Docs](https://axios-http.com/docs/), or ask the instructor for help.

* Answer any questions before proceeding to the next activity.

### 22. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Again, React can be overwhelming so use this time to help students who are struggling with the module.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
