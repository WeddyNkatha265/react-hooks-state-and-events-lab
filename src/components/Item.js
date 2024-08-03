
import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); // State to track whether the item is in the cart

  const handleAddToCart = () => {
    setInCart(!inCart); // Toggle the inCart state
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
