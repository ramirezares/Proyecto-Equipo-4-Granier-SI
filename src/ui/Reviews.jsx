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
      <div className="font-robotoRegular bg-azul-producto">
        <div className="bg-azul-producto font-robotoBold  text-white text-xl pt-4 pl-6">
        <h2 className="">Sección de Reseñas</h2>
        </div>
        
        <div className="mx-auto reseñas md:flex-row w-80 md:w-full flex-col ">
          <div className="reseñas-content  md:w-full">
            <ReviewCard
              review={props.reviews[currentReview]}
              onNext={handleNext}
              onPrev={handlePrev}
            />
            </div>
            <div className="reseña-form sm:ml-12 w-full">
              <div className="flex w-full ">
               <div className="avatar w-14">
                  <img src="/Logoperfilusuarioengranier.png" alt="" />
               </div>
               <div className="pt-4 pl-4">
                <p>Nombre de usuario</p>
               </div>
              </div>
              <div className=" flex w-full mb-1 ml-12">
                Deja tu reseña:
              </div>
              <textarea
                placeholder="Deja tu reseña:"
                className="form-textarea"
              ></textarea>
              <button className="form-button rounded-full">Enviar Reseña</button>
            </div>
        </div>
      </div>
    );
};

export default Reseñas;
