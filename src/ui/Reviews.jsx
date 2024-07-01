import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import './styles/Reviews.style.css';

const Reseñas = (props) => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reseñas">
      <div className="reseñas-content">
      <h2>Sección de Reseñas</h2>
        <ReviewCard
          review={props.reviews[currentReview]}
          onNext={handleNext}
          onPrev={handlePrev}
        />
        </div>
        <div className="reseña-form">
          <div className="avatar">
            <img src="/Logoperfilusuarioengranier.png" alt="" />
            <p>Nombre de usuario</p>
          </div>
          Deja tu reseña:
          <textarea
            placeholder="Deja tu reseña:"
            className="form-textarea"
          ></textarea>
          <button className="form-button">Enviar Reseña</button>
        </div>
    </div>
  );
};

export default Reseñas;
