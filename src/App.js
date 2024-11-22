import './App.css';
import React, {useState} from 'react';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [purclist, setPurclist] = useState([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleSelect = (event, item) => {
    const isChecked = event.target.checked;

    if (isChecked) {
        setPurclist([...purclist, item]);
        setWishlist(wishlist.filter(wishItem => wishItem !== item));
    }
  }

  const handleUnselect = (event, item) => {
    const isChecked = event.target.checked;

    if (!isChecked) {
      setWishlist([...wishlist, item]);
      setPurclist(purclist.filter(purcItem => purcItem !== item));
    }
  }

  const deleteWish = (event, item) => {
    setWishlist(wishlist.filter(wishItem => wishItem !== item));
  }

  const deletePurc = (event, item) => {
    setPurclist(purclist.filter(purcItem => purcItem !== item));
  }

  const addWish = () => {
    if (input.trim() !== "") {
      if (wishlist.includes(input) || purclist.includes(input)) {
        alert("Item already exists in the list.");
        return;
      }
      const newItem = {name: input, category}
      const newWishlist = [...wishlist, newItem];

      setWishlist(newWishlist);

      setInput("");
      setCategory("");
      return;
    }
  }

  const addPurc = () => {
    if (input.trim() !== "") {
      if (wishlist.includes(input) || purclist.includes(input)) {
        alert("Item already exists in the list.");
        return;
      }
      const newItem = {name: input, category}
      const newPurclist = [...purclist, newItem];

      setPurclist(newPurclist);

      setInput("");
      setCategory("");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>

      <body className="App-body">
        <span>Item: </span>
        <input type="text" value={input} onChange={handleInputChange}></input>
        <span>Category: </span>
        <input type="text" value={category} onChange={handleCategoryChange}></input>
        <div>
          <button type="button" onClick={addWish}>Add to Wish List</button>
          <button type="button" onClick={addPurc}>Add to Purchased List</button>
        </div>

        <h2>Wish List:</h2>
        <ul>
          {wishlist.map((item) => (
            <li key={item}>
              <label>
                <input type="checkbox" onChange={(e) => handleSelect(e, item)}/>
                {item.category} : {item.name}
                <button class="close-button" aria-label="Close alert" type="button" data-close onClick={(e) => deleteWish(e, item)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </label>
            </li>
          ))}
        </ul>

        <h2>Purchased List:</h2>
        <ul>
          {purclist.map((item) => (
          <li key={item}>
            <label>
              <input type="checkbox" checked onChange={(e) => handleUnselect(e, item)}/>
              {item.category} : {item.name}
              <button class="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e) => deletePurc(e, item)}>
                  <span aria-hidden="true">&times;</span>
              </button>
            </label>
          </li>
          ))}
        </ul>
      </body>
    </div>
  );
}

export default App;
