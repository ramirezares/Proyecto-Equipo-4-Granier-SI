import Card from "../components/Card";
import "./styles/Promotions.style.css";

const Promotions = (props) => {

  return (
    <div className="promos">
      <h1>Promos Destacadas</h1>
      <div className="promotions">
        {props.promotions.map((promo, index) => (
          <Card key={index} item={promo} />
        ))}
      </div>
    </div>
  );
};

export default Promotions;
