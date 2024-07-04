import PropTypes from "prop-types";
import MenuCard from "../components/MenuCard.jsx";
import "./styles/MenuCards.style.css";

const MenuCards = ({ products, onAddToCart }) => {
  return (
    <>
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product, index) => (
            <MenuCard key={index} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <div>
          <p>
            No se encontraron productos que tengan los parametros de búsqueda.
          </p>
        </div>
      )}
    </>
  );
};

MenuCards.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
      foodPreference: PropTypes.string,
      kindProduct: PropTypes.string.isRequired,
      kindFood: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuCards;
