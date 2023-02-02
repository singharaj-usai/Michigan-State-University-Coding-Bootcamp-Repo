# Props in React

## Components can be passed values using props

Data passed to components in JavaScript are called props.

Props look identical to attributes on plain JSX/HTML elements, but you can access their values within the component itself.

Props are available in parameters of the component to which they are passed. Props are always included as properties of an object.

```js
ReactDOM.render(
  <Greeting username="John!" />,
  document.getElementById("root")
);

function Greeting(props) {
  return <h1>Hello {props.username}</h1>;
}
```

## Props cannot be directly changed

Props must never be directly changed within the child component.

Another way to say this is that props should never be **mutated**, since props are a plain JavaScript object

```js
// We cannot modify the props object:
function Header(props) {
  props.username = "Doug";

  return <h1>Hello {props.username}</h1>;
}
```

Components are considered pure functions. That is, for every input, we should be able to expect the same output. This means we cannot mutate the props object, only read from it.

## Special props: the children prop

The **children** prop is useful if we want to pass elements / components as props to other components

The children prop is especially useful for when you want the same component (such as a Layout component) to wrap all other components.

```js
function Layout(props) {
  return <div className="container">{props.children}</div>;
}

function IndexPage() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Footer />
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <About />
      <Footer />
    </Layout>
  );
}
```

The benefit of this pattern is that all styles applied to the Layout component will be shared with its child components.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.