import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery.jsx";
import "./ProductPage.style.css";
import { useState } from "react";

const initialProducts = [
  {
    name: "Cafe",
    description: "Caliente",
    status: "Disponible",
    price: 2.5,
    images: ["/Mapa 1.png", "/Mapa 2.png"],
    foodPreference: "",
    kindProduct: "Bebida",
    kindFood: "Merienda",
  },
  {
    name: "Pan",
    description: "Fresco",
    status: "Disponible",
    price: 5.99,
    images: [],
    foodPreference: "Vegano",
    kindProduct: "Platillo",
    kindFood: "Desayuno",
  },
  {
    name: "Cafe",
    description: "Caliente",
    status: "Disponible",
    price: 2.5,
    images: [],
    foodPreference: "",
    kindProduct: "Bebida",
    kindFood: "Merienda",
  },
  {
    name: "Pan",
    description: "Fresco",
    status: "Disponible",
    price: 5.99,
    images: [],
    foodPreference: "Vegano",
    kindProduct: "Platillo",
    kindFood: "Desayuno",
  },
  {
    name: "Cafe",
    description: "Caliente",
    status: "Disponible",
    price: 2.5,
    images: [],
    foodPreference: "",
    kindProduct: "Bebida",
    kindFood: "Merienda",
  },
  {
    name: "Pan",
    description: "Fresco",
    status: "Disponible",
    price: 5.99,
    images: [],
    foodPreference: "Vegano",
    kindProduct: "Platillo",
    kindFood: "Desayuno",
  },
];

const ProductPage = () => {
  const { productName } = useParams(); // Obtiene el nombre del producto de la URL
  console.log(productName);
  const product = initialProducts.find((p) => p.name === productName); // Encuentra el producto

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className="product">
      <div className="image-container">
        <ImageGallery images={product.images} />
      </div>
      <div className="info">
        <div className="l1">
          <h1>{product.name}</h1>
          <p className="value">${product.price}</p>
        </div>
        <div className="l2">
          <div>
            <p>Estado: {product.status}</p>
          </div>
          <div>
            <p>
              Cantidad:
              <input
                type="number"
                value={quantity}
                min="1"
                max="10"
                onChange={handleQuantityChange}
              />
            </p>
          </div>
        </div>
        <div className="details">
          <p className="label">Descripción:</p>
          <p className="description">{product.description}</p>
          <div>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
