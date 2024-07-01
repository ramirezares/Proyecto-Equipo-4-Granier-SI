import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./styles/Products.style.css";

const Products = (props) => {
  return (
      <div className="products">
        <h2>Productos Principales</h2>
        <div className="product-cards">
          {props.products.map((product, index) => (
            <Card key={index} item={product} />
          ))}
        </div>
        <Link className="bordered-brown-background" to="/granier/menu">
          Ir al Menú
        </Link>
      </div>
  );
};

export default Products;
