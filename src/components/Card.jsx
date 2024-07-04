import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.style.css';

const Card = ({ item }) => {
  return (
    <div className=" w-44 card font-robotoRegular rounded-lg">
      {item.image && <img src={item.image} alt={item.name} className="card-image" />}
      <p>{item.name}</p>
      <Link className="bordered-blue-background border-0 bg-azul-oscuro-granier hover:bg-azul-producto " to="/granier/menu">
      <h4 className=''>
      Conocer más
      </h4>
      </Link>  
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
