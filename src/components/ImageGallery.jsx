import React, { useState } from "react";
import "./ImageGallery.style.css";

const ImageGallery = ({ images }) => {
  // Verifica que images sea un arreglo, si no lo es, inicializa como un arreglo vacío
  const validImages = Array.isArray(images) ? images : [];
  const [largeImage, setLargeImage] = useState(
    validImages[0] || "defaultImage.jpg"
  ); // Inicializa con la primera imagen o una imagen por defecto

  const handleImageClick = (image) => {
    setLargeImage(image); // Actualiza la imagen grande cuando se hace clic en una imagen pequeña
  };

  return (
    <div className="image-gallery">
      <div className="large-image-container">
        <img src={largeImage} alt="Imagen grande" />
      </div>
      <div className="image-grid">
        {validImages.length > 0 ? (
          validImages.map((image, index) => (
            <div key={index} className="image-grid-item">
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                onClick={() => handleImageClick(image)} // Actualiza la imagen grande cuando se hace clic
              />
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
