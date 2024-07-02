// components/ProductOnCart.js
import React, { useContext } from "react";
import { CartContext } from "../hooks/CartContext";
import "./ProductOnCart.style.css";

const ProductOnCart = ({ product }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(product.name);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(product.name, newQuantity);
    }
  };

  return (
    <div className="product-on-cart">
      <div className="product-details">
        <img
          src={product.images}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <button onClick={handleRemove}>Eliminar</button>
        </div>
      </div>
      <div className="product-pricing">
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <div>
        <input
          type="number"
          value={product.quantity}
          min="1"
          max="10"
          onChange={handleQuantityChange}
          className="quantity-input"
        />
      </div>
      <div>
        <p className="product-total">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductOnCart;
