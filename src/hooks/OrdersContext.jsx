import { createContext, useState, useEffect } from "react";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [onTracking, setOnTracking] = useState(null);
  const [lastOrderNumber, setLastOrderNumber] = useState(null);

  useEffect(() => {
    // Manejar con la base de datos
    const initialOrders = [
      {
        orderNumber: 12345,
        delivered: false,
        id: "1234567890",
        deliveryDate: "2023-03-08",
        totalAmount: 59.98,
        deliveryPoint: "Granier",
        cartItems: [
          {
            id: 1,
            name: "Café",
            price: 19.99,
            quantity: 1,
          },
          {
            id: 2,
            name: "Pan",
            price: 39.99,
            quantity: 1,
          },
        ],
      },
      {
        orderNumber: 67890,
        delivered: true,
        id: "9876543210",
        deliveryDate: "2023-03-10",
        totalAmount: 25.0,
        deliveryPoint: "Feria",
        cartItems: [
          {
            id: 3,
            name: "Café",
            price: 25.0,
            quantity: 1,
          },
        ],
      },
    ];
    setOrders(initialOrders);
    setLastOrderNumber(initialOrders[initialOrders.length - 1].orderNumber);
  }, []);

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
    setLastOrderNumber(order.orderNumber);
    //Limpiar local storage
  };

  const getOrders = () => orders;

  const getLastOrderNumber = () => lastOrderNumber;

  const startTracking = (order) => {
    setOnTracking(order);
  };

  const stopTracking = () => {
    setOnTracking(null);
  };

  return (
    <OrdersContext.Provider
      value={{
        addOrder,
        getOrders,
        onTracking,
        startTracking,
        stopTracking,
        getLastOrderNumber,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
