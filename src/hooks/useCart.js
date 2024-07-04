import { useState, useEffect } from "react";
import {
  getCartByUserId,
  addProductToCart,
  removeProductFromCart,
  updateCartState,
  createCart,
} from "../controllers/cartController"; // Ajusta la ruta según sea necesario
import { useUser } from "./useUser";

export const useCart = () => {
  const { user } = useUser();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        try {
          const existingCart = await getCartByUserId(user.uid);
          if (existingCart.estado === "activo") {
            setCart(existingCart);
          } else {
            const newCart = await createCart(user.uid);
            setCart(newCart);
          }
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchCart();
  }, [user]);

  const addProduct = async (productId) => {
    try {
      await addProductToCart(cart.uidUsuario, productId);
      const updatedCart = await getCartByUserId(cart.uidUsuario);
      setCart(updatedCart);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeProduct = async (productId) => {
    try {
      await removeProductFromCart(cart.uidUsuario, productId);
      const updatedCart = await getCartByUserId(cart.uidUsuario);
      setCart(updatedCart);
    } catch (err) {
      setError(err.message);
    }
  };

  const completeCart = async () => {
    try {
      await updateCartState(cart.uidUsuario, "completado");
      setCart(null); // Clear cart after completion
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
    completeCart,
  };
};