import React, { useState } from 'react';
import AddShoppingItem from './AddShoppingItem';
import ShoppingList from './ShoppingList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Shopping List</h1>
      <AddShoppingItem onAdd={addItem} />
      <ShoppingList items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
