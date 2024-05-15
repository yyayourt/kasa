import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../datas/logements.json"; // Ajustez le chemin d'importation selon le besoin
import "../../assets/SCSS/pages/logement.scss"; // Assumer que vous avez un SCSS correspondant pour le style

const HousingDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const logementTrouvé = data.find((h) => h.id === id);
        setLogement(logementTrouvé);
    }, [id]);

    if (!logement) return <div>Chargement...</div>;

    return (
        <div className="detail-logement">
            <div className="galerie-images">
                {/* Implémenter un carrousel ici */}
                {logement.pictures.map((pic, index) => (
                    <img key={index} src={pic} alt={`Vue ${index + 1}`} />
                ))}
            </div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="tags">
                {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="hote">
                <img src={logement.host.picture} alt={logement.host.name} />
                <p>{logement.host.name}</p>
            </div>
            <div className="evaluation">
                {/* Convertir l'évaluation numérique en étoiles */}
                {[...Array(parseInt(logement.rating)).keys()].map((etoile) => (
                    <span key={etoile}>★</span>
                ))}
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>{logement.description}</p>
            </div>
            <div className="equipements">
                <h2>Équipements</h2>
                <ul>
                    {logement.equipments.map((equip, index) => (
                        <li key={index}>{equip}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HousingDetail;
