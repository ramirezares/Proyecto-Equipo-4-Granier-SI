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
    <div className="product flex flex-col md:flex-row justify-center items-center">
      <div className="image-container md:w-1/2 mb-4 md:mb-0">
        <ImageGallery images={product.images} />
      </div>
      <div className="info md:w-1/2 m-2.5">
        <div className="l1 flex justify-between mb-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="value font-bold text-beige-granier">${product.price}</p>
        </div>
        <div className="l2 flex justify-between mb-6">
          <div>
            <p className="font-bold mr-4">Estado: {product.status}</p>
          </div>
          <div>
            <p className="font-bold">
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
          <p className="label font-bold">Descripción:</p>
          <p className="description border-2 pb-20 rounded-lg">{product.description}</p>
          <div className="justify-center flex mt-20 mb-20">
            <button className="border-2 rounded-lg p-0.5 pl-12 pr-12 border-beige-granier hover:bg-beige-granier"> + Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
