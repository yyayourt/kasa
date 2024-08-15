// src/pages/HousingDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../../datas/logements.json";
import "../../assets/SCSS/pages/logement.scss";
import fullStar from "../../assets/star-solid-pink.svg";
import emptyStar from "../../assets/star-solid-gray.svg";
import ImageGallery from "../../components/ImageGallery";
import Dropdown from "../../components/Dropdown";

const HousingDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const logementTrouvé = data.find((h) => h.id === id);
        setLogement(logementTrouvé);
        setLoading(false);
    }, [id]);

    if (loading) return;
    if (!logement) return <Navigate to="/notfound" />;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<img key={i} src={i < rating ? fullStar : emptyStar} alt={`${i < rating ? "Full" : "Empty"} Star`} className="star" />);
        }
        return stars;
    };

    return (
        <div className="detail-logement">
            <ImageGallery pictures={logement.pictures} />
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
                        <Dropdown title="Description" content={logement.description} />
                    </div>
                </div>
                <div className="menu-item-container">
                    <div className="menu-item">
                        <Dropdown title="Équipements" content={logement.equipments} isList={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HousingDetail;
