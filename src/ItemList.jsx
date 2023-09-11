// Create a component that renders a list of items. The items can be hardcoded in the component or passed as props.
// • Create a new functional component called (ItemList).
// • Pass an array of items to the component using props.
// • In the function body, use the map method to create an array of JSX elements that represent each item in the list.
// • Return the array of JSX elements from the function.
// • Import this component into App.js and display it.

import React from 'react';

function ItemList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;
