import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map((grocery, index) => {
        return (
          // TODO: Your code here
            <li key={index} className="list-group-item">
              {grocery}
            </li>
        );
      })}
    </ul>
  );
}

export default List;
