import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./styles/Products.style.css";

const productos = [
  { name: "Producto #1", image: "producto1.jpg" },
  { name: "Producto #2", image: "producto2.jpg" },
  { name: "Producto #3", image: "producto3.jpg" },
  { name: "Producto #4", image: "producto4.jpg" },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Productos Principales</h2>
      <div className="product-cards">
        {productos.map((producto, index) => (
          <Card key={index} item={producto} />
        ))}
      </div>

      <Link className="borderless" to="/inprogress">
        Ir al Menú
      </Link>
    </div>
  );
};

export default Products;
