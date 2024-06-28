import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./ButtonImg.style.css";

const ButtomImg = ({ link, backgroundImage1, backgroundImage2 }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(link);
  };

  const buttonStyle = {
    backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})`,
    backgroundSize: "85%, cover",
    backgroundPosition: "center, center",
  };

  return <button className="rest" onClick={onClick} style={buttonStyle} />;
};

ButtomImg.propTypes = {
  link: PropTypes.string.isRequired,
  backgroundImage1: PropTypes.string.isRequired,
  backgroundImage2: PropTypes.string.isRequired,
};

export default ButtomImg;
