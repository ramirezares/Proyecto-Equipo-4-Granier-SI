import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
} from "firebase/firestore";

// Función para obtener todos los productos
export const getAllProducts = async () => {
  const productsCollection = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollection);
  const productList = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return productList;
};

// Función para obtener un producto por su nombre
export const getProductByName = async (name) => {
  const productsCollection = collection(db, "products");
  const q = query(productsCollection, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
  }
  return null;
};

// Función para obtener un producto por su ID
export const getProductById = async (id) => {
  const productDoc = doc(db, "products", id);
  const productSnapshot = await getDoc(productDoc);
  if (productSnapshot.exists()) {
    return { id: productSnapshot.id, ...productSnapshot.data() };
  }
  return null;
};

// Función para agregar un nuevo producto
export const addProduct = async (product) => {
  const productsCollection = collection(db, "products");
  const docRef = await addDoc(productsCollection, product);
  return docRef.id;
};

// Función para actualizar un producto
export const updateProduct = async (id, updatedProduct) => {
  const productDoc = doc(db, "products", id);
  await updateDoc(productDoc, updatedProduct);
};

// Función para eliminar un producto
export const deleteProduct = async (id) => {
  const productDoc = doc(db, "products", id);
  await deleteDoc(productDoc);
};