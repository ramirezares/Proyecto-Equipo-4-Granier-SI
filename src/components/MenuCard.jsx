import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MenuCard.style.css";

const MenuCard = ({ product, onAddToCart }) => {

  const pathname = window.location.pathname;
  let url = `/granier/menu/product/${product.name}`

  if (pathname.includes("homeEmployee")) {
    url = `/granier/menu/product/${product.name}`;
  }

  return (
    <div className="product-card bg-white rounded-lg p-2.5 w-full max-w-60 text-white font-bold shadow-xl">
      <img src={product.images} alt={product.name} className="product-image text-black" />
      <div className="flex-col justify-between mt-2.5 bg-beige-granier rounded-lg">
        <div>
          <h3 className="pl-4 pt-2 pb-3"> {product.name}</h3>
        </div>
        <div className="button-contanier pl-2 pb-2 flex ">
          <Link to={url} className="info-button bg-azul-oscuro-granier p-1 rounded-lg w-fit hover:bg-beige-granier">
            Información
          </Link>
          <button
            className="add-button bg-azul-oscuro-granier  p-1 ml-2 rounded-lg w-fit hover:bg-beige-granier"
            onClick={() => {
              onAddToCart(product);
            }}
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
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.string.isRequired,
    foodPreference: PropTypes.string,
    kindProduct: PropTypes.string.isRequired,
    kindFood: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuCard;
