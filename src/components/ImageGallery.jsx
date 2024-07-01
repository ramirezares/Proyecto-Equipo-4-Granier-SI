// ImageGallery.jsx
import React, { useState } from 'react';
import "./ImageGallery.style.css"

const ImageGallery = ({ images }) => {
  const [largeImage, setLargeImage] = useState(images[0]); // Inicializa con la primera imagen

  const handleImageClick = (image) => {
    setLargeImage(image); // Actualiza la imagen grande cuando se hace clic en una imagen pequeña
  };

  return (
    <div className="image-gallery">
      <div className="large-image-container">
        <img src={largeImage} alt="Imagen grande" />
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-grid-item">
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              onClick={() => handleImageClick(image)} // Actualiza la imagen grande cuando se hace clic
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;