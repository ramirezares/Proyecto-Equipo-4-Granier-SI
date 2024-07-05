import Card from "../components/Card";
import "./styles/Promotions.style.css";

const Promotions = ({ promotions }) => {
  return (
    <div className="promos">
      <div className="flex justify-center">
        <h1 className="text-white font-robotoBold md:text-5xl text-3xl p-8">
          Promos Destacadas
        </h1>
      </div>
      <div className="promotions-grid">
        {promotions.map((promo, index) => (
          <Card key={index} item={promo} />
        ))}
      </div>
    </div>
  );
};

export default Promotions;
