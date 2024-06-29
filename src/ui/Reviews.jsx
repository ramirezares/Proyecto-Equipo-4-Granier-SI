import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import './styles/Reviews.style.css';

const reviews = [
  { user: "Usuario 1", text: "Reseña del Usuario 1" },
  { user: "Usuario 2", text: "Reseña del Usuario 2" },
  { user: "Usuario 3", text: "Reseña del Usuario 3" },
];

const Reseñas = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reseñas">
      <h2>Sección de Reseñas</h2>
      <div className="reseñas-content">
        <ReviewCard
          review={reviews[currentReview]}
          onNext={handleNext}
          onPrev={handlePrev}
        />
        <div className="reseña-form">
          <div className="form-avatar"></div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="form-input"
          />
          <textarea
            placeholder="Deja tu reseña:"
            className="form-textarea"
          ></textarea>
          <button className="form-button">Enviar Reseña</button>
        </div>
      </div>
    </div>
  );
};

export default Reseñas;
