// chargerProduct.js
import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import fs from "fs";

// Función para leer el archivo JSON
function loadProductsFromFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const products = JSON.parse(data);
        resolve(products);
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Función para añadir productos a Firestore
async function addProductsToFirestore(products) {
  const productsCollection = collection(db, "products");

  for (const product of products) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Producto ${product.name} añadido con éxito.`);
    } catch (error) {
      console.error("Error añadiendo el producto: ", error);
    }
  }
}

// Ruta al archivo JSON con los productos
const filePath = "./products.json"; // Asegúrate de que la ruta sea correcta

// Cargar productos y añadirlos a Firestore
loadProductsFromFile(filePath)
  .then((products) => {
    return addProductsToFirestore(products);
  })
  .then(() => {
    console.log("Todos los productos fueron añadidos con éxito.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });


