import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../../datas/logements.json";
import "../../assets/SCSS/pages/logement.scss";
import arrow from "../../assets/chevron-up-solid.svg";
import fullStar from "../../assets/star-solid-pink.svg";
import emptyStar from "../../assets/star-solid-gray.svg";
import leftArrow from "../../assets/chevron-left-solid.svg";
import rightArrow from "../../assets/chevron-right-solid.svg";

const HousingDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentsOpen, setEquipmentsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const logementTrouvé = data.find((h) => h.id === id);
        setLogement(logementTrouvé);
        setLoading(false);

        return;
    }, [id]);

    if (loading) return;
    if (!logement) return <Navigate to="/notfound" />;

    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen);
    };

    const toggleEquipments = () => {
        setEquipmentsOpen(!equipmentsOpen);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<img key={i} src={i < rating ? fullStar : emptyStar} alt={`${i < rating ? "Full" : "Empty"} Star`} className="star" />);
        }
        return stars;
    };

    return (
        <div className="detail-logement">
            <div className="galerie-images">
                {logement.pictures.map((pic, index) => (
                    <img
                        key={index}
                        src={pic}
                        alt={`visuel d'appartement ${index + 1}`}
                        className={`image ${currentImageIndex === index ? "active" : ""}`}
                        style={{ zIndex: currentImageIndex === index ? 1 : 0 }}
                    />
                ))}
                <button className="left-arrow" onClick={previousImage}>
                    <img src={leftArrow} alt="Previous" />
                </button>
                <button className="right-arrow" onClick={nextImage}>
                    <img src={rightArrow} alt="Next" />
                </button>
            </div>
            <div className="entête">
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="hoteEvalation">
                    <div className="hote">
                        <img src={logement.host.picture} alt={logement.host.name} />
                        <p>{logement.host.name}</p>
                    </div>
                    <div className="evaluation">{renderStars(parseInt(logement.rating))}</div>
                </div>
            </div>
            <div className="menu">
                <div className="menu-item-container">
                    <div className="menu-item">
                        <h2 onClick={toggleDescription} className="dropdown-header">
                            Description
                            <img src={arrow} alt="" className={`arrow ${descriptionOpen ? "rotate" : ""}`} />
                        </h2>
                        <div className={`content ${descriptionOpen ? "open" : ""}`}>
                            <p>{logement.description}</p>
                        </div>
                    </div>
                </div>
                <div className="menu-item-container">
                    <div className="menu-item">
                        <h2 onClick={toggleEquipments} className="dropdown-header">
                            Équipements
                            <img src={arrow} alt="" className={`arrow ${equipmentsOpen ? "rotate" : ""}`} />
                        </h2>
                        <div className={`content ${equipmentsOpen ? "open" : ""}`}>
                            <ul>
                                {logement.equipments.map((equip, index) => (
                                    <li key={index}>{equip}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HousingDetail;
