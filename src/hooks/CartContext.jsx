import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agrega funciones para agregar, eliminar o actualizar items en el carrito
  const addToCart = (item) => {
    // ...
  };

  const removeFromCart = (itemId) => {
    // ...
  };

  const updateQuantity = (itemId, newQuantity) => {
    // ...
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;