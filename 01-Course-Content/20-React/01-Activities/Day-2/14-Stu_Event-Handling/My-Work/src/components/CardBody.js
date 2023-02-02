import React from 'react';

// TODO: Add a comment explaining what is being passed to this "child" component as props
// This component is being passed an object with the properties count, handleIncrement, and handleDecrement as props.
// The count prop is being used to render the current value of a click counter, while the handleIncrement and handleDecrement props are being passed as the onClick handlers for the "Increment" and "Decrement" buttons, respectively.
// These handlers will be used to update the click counter when the buttons are clicked.

function CardBody(props) {
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
}

export default CardBody;
