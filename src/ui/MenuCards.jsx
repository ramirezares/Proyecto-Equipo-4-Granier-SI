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
            No se encontraron productos que tengan los parámetros de búsqueda.
          </p>
        </div>
      )}
    </>
  );
};

MenuCards.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      images: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      foodPreference: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      kindProduct: PropTypes.string,
      kindFood: PropTypes.string,
    })
  ),
  onAddToCart: PropTypes.func,
};

export default MenuCards;
