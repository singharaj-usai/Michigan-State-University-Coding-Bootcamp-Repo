# React Components

## What are React components?

Instead of just rendering one or another set of JSX elements, we can include them within React **components**.

Components are created using what looks like a normal JavaScript function, but it's different in that it returns JSX elements.

```js
function Greeting() {
  return <div>Hello React!</div>;   
}
```

## Why use React components?

React components allow us to create more complex logic and structures within our React application than we would with JSX elements alone.

Think of React components as our custom React elements that have their own functionality.

As we know, functions allow us to create our own functionality and reuse it where we like across our application.

Components are reusable wherever we like across our app and as many times as we like.

## Components are not normal JavaScript functions

How would we render or display the returned JSX from the component above?

```js
import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return <div>Hello React!</div>;   
}

ReactDOM.render(<Greeting />, document.getElementById("root));
```

We use the `React` import to parse the JSX and `ReactDOM` to render our component to a root element with the id of "root."

## What can React components return?

Components can return valid JSX elements, as well as strings, numbers, booleans, the value `null`, as well as arrays and fragments.

Why would we want to return `null`? It is common to return `null` if we want a component to display nothing.

```js
function Greeting() {
  if (isAuthUser) {
    return "Hello again!";   
  } else {
    return null;
  }
}
```

Another rule is that JSX elements must be wrapped in one parent element. Multiple sibling elements cannot be returned.

If you need to return multiple elements, but don't need to add another element to the DOM (usually for a conditional), you can use a special React component called a fragment.

Fragments can be written as `<></>` or when you import React into your file, with `<React.Fragment></React.Fragment>`.

```js
function Greeting() {
  const isAuthUser = true;  
    
  if (isAuthUser) {
    return (
      <>
        <h1>Hello again!</h1>
        <button>Logout</button>
      </>
    );
  } else {
    return null;
  }
}
```

Note that when attempting to return a number of JSX elements that are spread over multiple lines, we can return it all using a set of parentheses () as you see in the example above.

## Components can return other components

The most important thing components can return is other components.

Below is a basic example of a React application contained with in a component called `App` that returns multiple components:

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

```js
function App() {
  return (
    <Layout>
      <Navbar />
      <Main />
      <Aside />
      <Footer />
    </Layout>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

This is powerful because we are using the customization of components to describe what they are (that is, the Layout) and their function in our application. This tells us how they should be used just by looking at their name.

Additionally, we are using the power of JSX to compose these components. In other words, to use the HTML-like syntax of JSX to structure them in an immediately understandable way (like the Navbar is at the top of the app, the Footer at the bottom, and so on).

## JavaScript can be used in JSX using curly braces

Just as we can use JavaScript variables within our components, we can use them directly within our JSX as well.

There are a few core rules to using dynamic values within JSX, though:

* JSX can accept any primitive values (strings, booleans, numbers), but it will not accept plain objects.

* JSX can also include expressions that resolve to these values.

For example, conditionals can be included within JSX using the ternary operator, since it resolves to a value.

```js
function Greeting() {
  const isAuthUser = true;  
    
  return <div>{isAuthUser ? "Hello!" : null}</div>;
}
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.