import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.style.css';

const Card = ({ item }) => {
  return (
    <div className="card">
      {item.image && <img src={item.image} alt={item.name} className="card-image" />}
      <p>{item.name}</p>
      <Link className="bordered-blue-background" to="/granier/menu">
      Conocer más
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
