import React from "react";
import Cart from "../icons/Cart";

function TopBar({ products, setProducts }) {
  const handleChange = (e) => {
    const userInput = e.target.value.toLowerCase().trim();
    const newProductList = products.filter((product) =>
      product.title.toLowerCase().trim().includes(userInput)
    );
    setProducts(newProductList);
  };

  return (
    <div className="topbar">
      <input
        className="topbar__input"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
      <Cart />
    </div>
  );
}

export default TopBar;
