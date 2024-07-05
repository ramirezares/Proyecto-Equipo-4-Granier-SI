import { useState, useEffect } from "react";
import {
  createCart,
  getCartByUserId,
  addProductToCart,
  removeProductFromCart,
} from "../controllers/cart";
import { useUser } from "./useUser";

export const useCart = () => {
  const { user } = useUser();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        if (user && user.id) {
          let fetchedCart = await getCartByUserId(user.id);
          if (!fetchedCart) {
            fetchedCart = await createCart(user.id);
          }
          setCart(fetchedCart);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  const addProduct = async (productId, quantity = 1) => {
    try {
      setLoading(true);
      const updatedCart = await addProductToCart(user.id, productId, quantity);
      setCart(updatedCart);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (productId) => {
    try {
      setLoading(true);
      const updatedCart = await removeProductFromCart(user.id, productId);
      setCart(updatedCart);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      setLoading(true);
      const updatedCart = await addProductToCart(user.id, productId, quantity);
      setCart(updatedCart);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    cart,
    addProduct,
    removeProduct,
    updateQuantity,
    loading,
    error,
  };
};
