import React from 'react';

// TODO: Modify this function so that it accepts props from the parent component
export default function Card() {
  const cardStyle = {
    width: '18rem',
  };

// Modified v
//  export default function Card(props) {
 //   const cardStyle = {
//      width: '18rem',
 //   };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {/* Display the dog's name here */}</h5>
          <p className="card-text">Description: {/* Display the dog's description here */}</p>
          <p className="card-text">ID: {/* Display the dog's id here */}</p>
          <a href="course-content/20-React/01-Activities/Day-1/08-Stu_Props/Unsolved/src/components/Card#" className="btn btn-primary">
            Adopt {/* Display the dog's name here */}
          </a>
        </div>
      </div>
    </div>
  );
}

// To update return statement to receive props, use:
// Name: {props.name}
// Description: {props.description}
// ID: {props.id}
// Adopt {props.name}
// Here is one way to modify the Card function to accept props from the parent component.
// We added the props parameter as the input of the function.
// The props object contains all the data that the parent component is passing to this component.
// In the return statement, inside the JSX, you can reference the props by its name. so, wherever you need to display the dog's data you can use it by referencing it with props.name for example.
// It's worth noting that the randomWidth function is not affected by this modification as it is not related to the prop passed from the parent component.