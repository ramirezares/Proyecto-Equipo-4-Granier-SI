import { createContext } from "react";
import { useCart } from "./useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addProduct, removeProduct, updateQuantity, loading, error } =
    useCart();

  return (
    <CartContext.Provider
      value={{
        cartItems: cart ? cart.productos : [],
        addProduct,
        removeProduct,
        updateQuantity,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
