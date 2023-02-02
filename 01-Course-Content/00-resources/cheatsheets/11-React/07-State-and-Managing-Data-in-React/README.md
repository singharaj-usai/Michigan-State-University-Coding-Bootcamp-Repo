# State and Managing Data in React

## What is state in React?

State is a concept that refers to how data in our application changes over time.

The significance of state in React is that it is a way to talk about our data separately from the user interface (what the user sees).

We talk about state management, because we need an effective way to keep track of and update data across our components as our user interacts with it.

To change our application from static HTML elements to a dynamic one that the user can interact with, we need state.

## Examples of how to use state in React

We need to manage state often when our user wants to interact with our application.

When a user types into a form, we keep track of the form state in that component.

When we fetch data from an API to display to the user (such as posts in a blog), we need to save that data in state.

When we want to change data that a component is receiving from props, we use state to change it instead of mutating the props object.

## Introduction to React hooks with useState

The way to "create" state is React within a particular component is with the `useState` hook.

What is a hook? It is very much like a JavaScript function, but can only be used in a React function component at the top of the component.

We use hooks to "hook into" certain features, and `useState` gives us the ability to create and manage state.

`useState` is an example of a core React hook that comes directly from the React library: `React.useState`.

```js
import React from 'react';

function Greeting() {
  const state = React.useState("Hello React");  
    
  return <div>{state[0]}</div> // displays "Hello React"
}
```

How does `useState` work? Like a normal function, we can pass it a starting value (like "Hello React").

What is returned from useState is an array. To get access to the state variable and its value, we can use the first value in that array: `state[0]`.

There is a way to improve how we write this, however. We can use array destructuring to get direct access to this state variable and call it what we like, such as `title`.

```js
import React from 'react';

function Greeting() {
  const [title] = React.useState("Hello React");  
    
  return <div>{title}</div> // displays "Hello React"
}
```

What if we want to allow our user to update the greeting they see? If we include a form, a user can type in a new value. However, we need a way to update the initial value of our title.

```js
import React from "react";

function Greeting() {
  const [title] = React.useState("Hello React");

  return (
    <div>
      <h1>{title}</h1>
      <input placeholder="Update title" />
    </div>
  );
}
```

We can do so with the help of the second element in the array that useState returns. It is a setter function, to which we can pass whatever value we want the new state to be.

In our case, we want to get the value that is typed into the input when a user is in the process of typing. We can get it with the help of React events.

## What are events in React?

Events are ways to get data about a certain action that a user has performed in our app.

The most common props used to handle events are `onClick` (for click events), `onChange` (when a user types into an input), and `onSubmit` (when a form is submitted).

Event data is given to us by connecting a function to each of these props listed (there are many more to choose from than these three).

To get data about the event when our input is changed, we can add `onChange` on input and connect it to a function that will handle the event. This function will be called `handleInputChange`:

```js
import React from "react";

function Greeting() {
  const [title] = React.useState("Hello React");

  function handleInputChange(event) {
    console.log("input changed!", event);
  }

  return (
    <div>
      <h1>{title}</h1>
      <input placeholder="Update title" onChange={handleInputChange} />
    </div>
  );
}
```

Note that in the code above, a new event will be logged to the browser's console whenever the user types into the input

Event data is provided to us as an object with many properties which are dependent upon the type of event.

## How to update state in React with useState

To update state with useState, we can use the second element that useState returns to us in its array.

This element is a function that will allow us to update the value of the state variable (the first element). Whatever we pass to this setter function when we call it will be put in state.

```js
import React from "react";

function Greeting() {
  const [title, setTitle] = React.useState("Hello React");

  function handleInputChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <h1>{title}</h1>
      <input placeholder="Update title" onChange={handleInputChange} />
    </div>
  );
}
```

Using the code above, whatever the user types into the input (the text comes from `event.target.value`) will be put in state using `setTitle` and displayed within the `h1` element.

What is special about state and why it must be managed with a dedicated hook like useState is because a state update (such as when we call `setTitle`) causes a re-render.

A re-render is when a certain component renders or is displayed again based off the new data. If our components weren't re-rendered when data changed, we would never see the app's appearance change at all!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.