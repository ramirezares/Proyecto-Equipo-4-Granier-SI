import { db } from "../firebase";
import {
  collection,
  getDoc,
  updateDoc,
  addDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getProductById } from "./product"; // Ajusta la ruta según sea necesario

const cartCollection = collection(db, "carts");

// Función para crear un nuevo carrito
export const createCart = async (uid) => {
  const newCart = {
    uidUsuario: uid,
    productos: [],
    estado: "activo",
    cantidadProductos: 0,
    subtotal: 0,
  };
  const docRef = await addDoc(cartCollection, newCart);
  const cartDoc = await getDoc(docRef);
  return { id: cartDoc.id, ...cartDoc.data() };
};

// Función para obtener el carrito del usuario
export const getCartByUserId = async (uid) => {
  if (!uid) throw new Error("UID is required to get cart"); // Asegura que uid no sea undefined
  const q = query(
    cartCollection,
    where("uidUsuario", "==", uid),
    where("estado", "==", "activo")
  );
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const cartDoc = querySnapshot.docs[0];
    return { id: cartDoc.id, ...cartDoc.data() };
  } else {
    // Si no existe el carrito, crear uno nuevo
    return await createCart(uid);
  }
};

// Función para agregar un producto al carrito
export const addProductToCart = async (uid, productId, quantity = 1) => {
  const cart = await getCartByUserId(uid);
  const product = await getProductById(productId);

  let updatedCart;
  const existingProduct = cart.productos.find((p) => p.productId === productId);
  if (existingProduct) {
    updatedCart = {
      ...cart,
      productos: cart.productos.map((p) =>
        p.productId === productId
          ? { ...p, quantity: p.quantity + quantity }
          : p
      ),
      cantidadProductos: cart.cantidadProductos + quantity,
      subtotal: cart.subtotal + product.price * quantity,
    };
  } else {
    updatedCart = {
      ...cart,
      productos: [
        ...cart.productos,
        { productId, quantity, price: product.price },
      ],
      cantidadProductos: cart.cantidadProductos + quantity,
      subtotal: cart.subtotal + product.price * quantity,
    };
  }

  await updateDoc(doc(cartCollection, cart.id), updatedCart);
  return updatedCart;
};

// Función para eliminar un producto del carrito
export const removeProductFromCart = async (uid, productId) => {
  const cart = await getCartByUserId(uid);
  const product = cart.productos.find((p) => p.productId === productId);

  let updatedCart;
  if (product.quantity > 1) {
    updatedCart = {
      ...cart,
      productos: cart.productos.map((p) =>
        p.productId === productId ? { ...p, quantity: p.quantity - 1 } : p
      ),
      cantidadProductos: cart.cantidadProductos - 1,
      subtotal: cart.subtotal - product.price,
    };
  } else {
    updatedCart = {
      ...cart,
      productos: cart.productos.filter((p) => p.productId !== productId),
      cantidadProductos: cart.cantidadProductos - 1,
      subtotal: cart.subtotal - product.price,
    };
  }

  await updateDoc(doc(cartCollection, cart.id), updatedCart);
  return updatedCart;
};

// Función para actualizar el estado del carrito
export const updateCartState = async (uid, estado) => {
  const cart = await getCartByUserId(uid);
  await updateDoc(doc(cartCollection, cart.id), { estado });
  return { ...cart, estado };
};
