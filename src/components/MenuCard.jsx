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
    <div className="product-card">
      <img src={product.images} alt={product.name} className="product-image" />
      <div className="product-info">
        <div>
          <h3> {product.name}</h3>
        </div>
        <div className="button-contanier">
          <Link to={url} className="info-button">
            Información
          </Link>
          <button
            className="add-button"
            onClick={() => {
              onAddToCart(product);
            }}
          >
            +
          </button>
          <p className="product-price">${product.price}</p>
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
