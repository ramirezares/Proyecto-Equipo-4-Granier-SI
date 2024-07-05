import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../hooks/CartContext"; // Ajusta la ruta según sea necesario
import "./MenuCard.style.css";

const MenuCard = ({ product }) => {
  const pathname = window.location.pathname;
  const { addProduct } = useContext(CartContext); // Usamos el hook del contexto del carrito
  let url = `/granier/menu/product/${product.name}`;

  if (pathname.includes("employee")) {
    url = `/granier/employee/menu/product/${product.name}`;
  }

  // Asegurarse de manejar tanto string como array para images
  const productImage = Array.isArray(product.images)
    ? product.images[0]
    : product.images;

  const handleAddToCart = async () => {
    await addProduct(product.id); // Asegúrate de pasar el ID del producto
  };

  return (
    <div className="product-card bg-white rounded-lg p-2.5 w-full max-w-60 text-white font-bold shadow-xl">
      <img
        src={productImage}
        alt={product.name}
        className="product-image text-black"
      />
      <div className="flex-col justify-between mt-2.5 bg-beige-granier rounded-lg">
        <div>
          <h3 className="pl-4 pt-2 pb-3"> {product.name}</h3>
        </div>
        <div className="button-container pl-2 pb-2 flex ">
          <Link
            to={url}
            className="info-button bg-azul-oscuro-granier p-1 rounded-lg w-fit hover:bg-beige-granier"
          >
            Información
          </Link>
          <button
            className="add-button bg-azul-oscuro-granier p-1 ml-2 rounded-lg w-fit hover:bg-beige-granier"
            onClick={handleAddToCart}
          >
            +
          </button>
          <p className="ml-9 mt-1">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired, // Asegúrate de que el ID del producto se proporciona
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  }).isRequired,
};

export default MenuCard;
