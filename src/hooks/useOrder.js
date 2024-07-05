import { useState, useEffect } from "react";
import {
  createOrder,
  getOrdersByUserId,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController"; // Ajusta la ruta según sea necesario

export const useOrders = (uid) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderList = await getOrdersByUserId(uid);
        setOrders(orderList);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [uid]);

  const addNewOrder = async (order) => {
    try {
      const id = await createOrder(order);
      setOrders([...orders, { id, ...order }]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateExistingOrder = async (id, updatedOrder) => {
    try {
      await updateOrder(id, updatedOrder);
      setOrders(
        orders.map((order) =>
          order.id === id ? { id, ...updatedOrder } : order
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteExistingOrder = async (id) => {
    try {
      await deleteOrder(id);
      setOrders(orders.filter((order) => order.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    orders,
    loading,
    error,
    addNewOrder,
    updateExistingOrder,
    deleteExistingOrder,
  };
};
