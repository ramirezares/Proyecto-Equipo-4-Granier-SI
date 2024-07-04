import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./styles/Products.style.css";

const Products = (props) => {
  return (
      <div className="products">
        <div className="flex justify-center  ">
        <h2 className="text-white font-robotoBold md:text-5xl text-3xl p-8">Productos Principales</h2>
        </div>
        <div className="products-grid">
          {props.products.map((product, index) => (
            <Card key={index} item={product} />
          ))}
        </div>
        <div className="flex justify-center mt-4 font-robotoBold">
        <Link className="bordered-brown-background border-8 rounded-full sm:px-12 sm:py-4 hover:bg-azul-producto" to="/granier/menu">
          <h1 className="sm:text-5xl text-3xl">Ir al Menú</h1>
        </Link>
        </div>
      </div>
  );
};

export default Products;
