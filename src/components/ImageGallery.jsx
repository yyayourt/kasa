// src/components/ImageGallery.js
import React, { useState } from "react";
import leftArrow from "../assets/chevron-left-solid.svg";
import rightArrow from "../assets/chevron-right-solid.svg";

const ImageGallery = ({ pictures }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="galerie-images">
            {pictures.map((pic, index) => (
                <img
                    key={index}
                    src={pic}
                    alt={`visuel d'appartement ${index + 1}`}
                    className={`image ${currentImageIndex === index ? "active" : ""}`}
                    style={{ zIndex: currentImageIndex === index ? 1 : 0 }}
                />
            ))}
            {pictures.length > 1 && (
                <>
                    <button className="left-arrow" onClick={previousImage}>
                        <img src={leftArrow} alt="Previous" />
                    </button>
                    <button className="right-arrow" onClick={nextImage}>
                        <img src={rightArrow} alt="Next" />
                    </button>
                </>
            )}
            {pictures.length > 1 && (
                <div className="image-counter">
                    {currentImageIndex + 1} / {pictures.length}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
