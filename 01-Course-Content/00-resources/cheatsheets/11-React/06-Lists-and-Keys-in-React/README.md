# Lists and Keys in React

## How to iterate over arrays in JSX using map

How do we displays lists in JSX using array data? We use the `.map()` function to convert lists of data (arrays) into lists of elements.

```js
const people = ["John", "Bob", "Fred"];
const peopleList = people.map((person) => <p>{person}</p>);
```

You can use `.map()` for components as well as plain JSX elements.

```js
function App() {
  const people = ["John", "Bob", "Fred"];

  return (
    <ul>
      {people.map((person) => (
        <Person name={person} />
      ))}
    </ul>
  );
}

function Person({ name }) {
  // we access the 'name' prop directly using object destructuring
  return <p>This person's name is: {name}</p>;
}
```

## The importance of keys in lists

Each React element within a list of elements needs a special **key prop**.

Keys are essential for React to be able to keep track of each element that is being iterated over with the `.map()` function.

React uses keys to performantly update individual elements when their data changes (instead of re-rendering the entire list).

Keys need to have unique values to be able to identify each of them according to their key value.

```js
function App() {
  const people = [
    { id: "Ksy7py", name: "John" },
    { id: "6eAdl9", name: "Bob" },
    { id: "6eAdl9", name: "Fred" },
  ];

  return (
    <ul>
      {people.map((person) => (
        <Person key={person.id} name={person.name} />
      ))}
    </ul>
  );
}
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.