import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// export default keyword is used to export a single class, function, or primitive from a script file.
// In this case, the Counter function is exported as the default export from this file, which makes it available for other parts of the application to import and use.
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
    // useState is a hook from the React library that allows you to use state in functional components.
    // The hook takes an initial value for the state and returns an array containing the current state value and a function to update the state.
    // In this case, the initial value of the count state is set to 0. let [count, setCount] = useState(0); destructuring the state value and the updater function from the return of the useState hook.
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
    // The handleIncrement function is an event handler that is called when the "Increment" button is clicked.
    // This function uses the setCount function returned by the useState hook to update the count state by adding 1 to it.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
    // Similarly, the handleDecrement function is also an event handler that is called when the "Decrement" button is clicked.
    // This function uses the setCount function returned by the useState hook to update the count state by subtracting 1 from it.
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
        {/*
        <CardBody count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        this JSX is rendering the CardBody component and passing the current count, handleIncrement and handleDecrement as the props.
        count is the value of the current count.
        handleIncrement is the function that is called on the click of "Increment" button.
        handleDecrement is the function that is called on the click of "Decrement" button.
        */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
