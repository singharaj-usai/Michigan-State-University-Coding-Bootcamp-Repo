# JSX Elements

## JSX is a powerful tool for structuring applications

**JSX** is meant to make creating user interfaces with JavaScript applications easier.

It borrows its syntax from the most widely used programming language: HTML. As a result, JSX is a powerful tool to structure our applications.

The code example below is the most basic example of a React element which displays the text "Hello World":

```js
<div>Hello React!</div>
```

Note that to be displayed in the browser, React elements need to be **rendered** (using `ReactDOM.render()`).

## How JSX is different from HTML

We can write valid HTML elements in JSX, but what differs slightly is the way some attributes are written.

Attributes that consist of multiple words are written in the camel-case syntax (like `className`) and have different names than standard HTML (`class`).

```js
<div id="header">
  <h1 className="title">Hello React!</h1>
</div>
```

JSX has this different way of writing attributes because it is actually made using JavaScript functions (more on this later).

## JSX must have a trailing slash if it is made of one tag

Unlike standard HTML, elements like `input`, `img`, or `br` must close with a trailing forward slash for it to be valid JSX.

```js
<input type="email" /> // <input type="email"> is a syntax error
```

## JSX elements with two tags must have a closing tag

Elements that should have two tags, such as `div`, `main` or `button`, must have their closing, second tag in JSX, otherwise it will result in a syntax error.

```js
<button>Click me</button> // <button> or </button> is a syntax error
```

## How JSX elements are styled

Inline styles are written differently as well as compared to plain HTML.

* Inline styles must not be included as a string, but within an object.

* Once again, the style properties that we use must be written in the camel-case style.

```js
<h1 style={{ color: "blue", fontSize: 22, padding: "0.5em 1em" }}>
  Hello React!
</h1>;
```

Style properties that accept pixel values (like width, height, padding, margin, etc), can use integers instead of strings. For example, `fontSize: 22` instead of `fontSize: "22px"`.

## JSX can be conditionally displayed

New React developers may be wondering how it is beneficial that React can use JavaScript code.

One simple example if that to conditionally hide or display JSX content, we can use any valid JavaScript conditional, like an if statement or switch statement.

const isAuthUser = true;

```js
if (isAuthUser) {
  return <div>Hello user!</div>   
} else {
  return <button>Login</button>
}
```

Where are we returning this code? Within a React component, which we will cover in a later section.

## JSX cannot be understood by the browser

As mentioned above, JSX is not HTML, but is composed of JavaScript functions.

In fact, writing `<div>Hello React</div>` in JSX is just a more convenient and understandable way of writing code like the following:

```js
React.createElement("div", null, "Hello React!")
```

Both pieces of code will have the same output of "Hello React".

To write JSX and have the browser understand this different syntax, we must use a **transpiler** to convert JSX to these function calls.

The most common transpiler is called **Babel**.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.