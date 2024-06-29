import Card from "../components/Card";
import "./styles/Promotions.style.css";

const promos = [
    { name: "Promo #1", image: "promo1.jpg" },
    { name: "Promo #2", image: "promo2.jpg" },
    { name: "Promo #3", image: "promo3.jpg" },
    { name: "Promo #4", image: "promo4.jpg" },
    { name: "Promo #5", image: "promo5.jpg" },
  ];


const Promos = () => {

  return (
    <div className="promos">
      <h1>Promos Destacadas</h1>
      <div className="promotions">
        {promos.map((promo, index) => (
          <Card key={index} item={promo} />
        ))}
      </div>
    </div>
  );
};

export default Promos;
