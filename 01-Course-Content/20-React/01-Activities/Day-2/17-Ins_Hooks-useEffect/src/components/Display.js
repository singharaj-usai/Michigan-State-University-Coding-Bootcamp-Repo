import React, { useState, useEffect } from 'react';

export default function Display() {
  const [count, setCount] = useState(0);

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    localStorage.setItem('myCount', count);
  });

  const handleIncrease = () => {
    setCount(count + 1);
  };

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
}
