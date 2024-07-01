import React, { useContext } from "react";
import { CartContext } from "../hooks/CartContext";

const Cart = () => {
  const {  cartItems, addToCart, removeFromCart, updateQuantity} = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Tu Carrito de Productos</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Productos</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="product-image">
                  {/* Mostrar imagen del producto */}
                </div>
                <div className="product-details">
                  <h3>{item.name}</h3>
                  {/* Mostrar más detalles del producto */}
                </div>
              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-totals">
        <p>Subtotal: ${calculateSubtotal(cartItems).toFixed(2)}</p>
        <button className="cart-button">Comprar</button>
      </div>
    </div>
  );
};

const calculateSubtotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export default Cart;