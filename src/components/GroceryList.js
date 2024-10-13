import React from 'react';

const GroceryList = ({ groceryItems }) => {
  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;

