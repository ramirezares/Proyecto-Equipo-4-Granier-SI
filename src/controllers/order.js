import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const ordersCollection = collection(db, "orders");

// Función para crear un nuevo pedido
export const createOrder = async (order) => {
  const docRef = await addDoc(ordersCollection, order);
  return docRef.id;
};

// Función para obtener todos los pedidos de un usuario
export const getOrdersByUserId = async (uid) => {
  const userOrdersQuery = query(
    ordersCollection,
    where("uidUsuario", "==", uid)
  );
  const ordersSnapshot = await getDocs(userOrdersQuery);
  const orderList = ordersSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return orderList;
};

// Función para actualizar un pedido
export const updateOrder = async (id, updatedOrder) => {
  const orderDoc = doc(db, "orders", id);
  await updateDoc(orderDoc, updatedOrder);
};

// Función para eliminar un pedido
export const deleteOrder = async (id) => {
  const orderDoc = doc(db, "orders", id);
  await deleteDoc(orderDoc);
};
