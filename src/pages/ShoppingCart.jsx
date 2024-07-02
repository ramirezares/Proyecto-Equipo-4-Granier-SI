import React, { useContext } from "react";
import { CartContext } from "../hooks/CartContext";
import ProductOnCart from "../components/ProductOnCart";
import { Link } from "react-router-dom";
import "./ShoppingCart.style.css";

const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h1>Tu Carrito de Productos</h1>
      <div className="cart-header">
        <div>Producto</div>
        <div>Precio</div>
        <div>Cantidad</div>
        <div>Total</div>
      </div>
      <div className="cart-products">
        {cartItems.map((product, index) => (
          <ProductOnCart key={index} product={product} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Sub-total: ${subtotal.toFixed(2)}</p>
        <Link className="buy-button" to="/granier/shoppingCart/details">
          Comprar
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
