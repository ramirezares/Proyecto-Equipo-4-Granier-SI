import { useState, useEffect } from "react";
import {
  getCartByUserId,
  addProductToCart,
  removeProductFromCart,
  updateCartState,
  calculateSubtotal,
} from "../controllers/cartController"; // Ajusta la ruta según sea necesario

export const useCart = (uid) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getCartByUserId(uid);
        setCart(cartData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCart();
  }, [uid]);

  const addProduct = async (productId) => {
    try {
      await addProductToCart(uid, productId);
      const updatedCart = await getCartByUserId(uid);
      setCart(updatedCart);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeProduct = async (productId) => {
    try {
      await removeProductFromCart(uid, productId);
      const updatedCart = await getCartByUserId(uid);
      setCart(updatedCart);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateState = async (estado) => {
    try {
      await updateCartState(uid, estado);
      const updatedCart = await getCartByUserId(uid);
      setCart(updatedCart);
    } catch (err) {
      setError(err.message);
    }
  };

  const calculateCartSubtotal = async () => {
    try {
      const subtotal = await calculateSubtotal(uid);
      setCart((prevCart) => ({ ...prevCart, subtotal }));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    cart,
    loading,
    error,
    addProduct,
    removeProduct,
    updateState,
    calculateCartSubtotal,
  };
};
