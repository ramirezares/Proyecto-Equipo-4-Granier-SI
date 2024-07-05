import Card from "../components/Card";
import "./styles/Products.style.css";

const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="flex justify-center">
        <h1 className="text-white font-robotoBold md:text-5xl text-3xl p-8">
          Productos Destacados
        </h1>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <Card key={index} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
