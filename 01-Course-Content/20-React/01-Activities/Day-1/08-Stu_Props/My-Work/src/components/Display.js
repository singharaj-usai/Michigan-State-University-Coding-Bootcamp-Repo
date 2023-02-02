import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

export default function Display() {
  return (
    <div>
        // TODO: Write logic that will render a Card component for the dog
        // TODO: Pass `name`, `description`, and `id` to the Card component as props
        <Card name={canine.name} description={canine.description} id={canine.id} />
    </div>
  );
}
// Here is one way to render a Card component and pass the name, description, and id to the Card component as props.
// The <Card> component in the return statement renders a new instance of the Card component.
// Then, the data is passed as props.
// In this case, the values are pulled out of the canine object and passed to the component by adding name={canine.name}, description={canine.description}, and id={canine.id} props to the Card component.
// In the Card component, it can now access these props using props.name, props.description, and props.id.

// It's worth noting that the canine data can be passed as is instead of destructuring them and passed to the component, it's just a matter of preference on how to do it.