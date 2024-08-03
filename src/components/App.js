

import React, { useState } from "react";
import ShoppingList from "./ShoppingList"; // Import your ShoppingList component
import itemData from "../data/items"; // Import your item data

function App() {
  const [darkMode, setDarkMode] = useState(false); // State variable for dark mode

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode); // Toggle dark mode
  };

  const appClass = darkMode ? "App dark" : "App light"; // Set class based on dark mode

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} /> {/* Render your ShoppingList */}
    </div>
  );
}

export default App;
