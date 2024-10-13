import React, { useState } from 'react';
import InputList from './components/InputList';
import GroceryList from './components/GroceryList';

const App = () => {
  const [groceryItems, setGroceryItems] = useState([]);

  const handleAddToGroceryList = (item) => {
    setGroceryItems([...groceryItems, item]);
  };

  return (
    <div>
      <h1>SmartShelf</h1>
      <InputList onAddToGroceryList={handleAddToGroceryList} />
      <GroceryList groceryItems={groceryItems} />
    </div>
  );
};

export default App;


