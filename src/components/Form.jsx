import React from "react";

function Form({ products, setProducts }) {
  const handleChange = (e) => {
    const userInput = e.target.value.toLowerCase().trim();
    const newProductList = products.filter((product) =>
      product.title.toLowerCase().trim().includes(userInput)
    );
    setProducts(newProductList);
  };

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
