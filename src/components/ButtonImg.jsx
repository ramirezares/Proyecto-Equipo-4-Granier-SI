import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ButtonImg.style.css";

const ButtonImg = ({ link, backgroundImage1, backgroundImage2, className }) => {
  const buttonStyle = {
    backgroundImage: `url(${backgroundImage2})`, // Usamos la segunda imagen como fondo principal
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    backgroundImage: `url(${backgroundImage1})`, // Usamos la primera imagen como overlay
    backgroundSize: "85%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link to={link} className={`button-img ${className}`} style={buttonStyle}>
      <div className="overlay" style={overlayStyle}></div>
    </Link>
  );
};

ButtonImg.propTypes = {
  link: PropTypes.string.isRequired,
  backgroundImage1: PropTypes.string.isRequired,
  backgroundImage2: PropTypes.string.isRequired,
  className: PropTypes.string
};

ButtonImg.defaultProps = {
  className: ''
};

export default ButtonImg;
