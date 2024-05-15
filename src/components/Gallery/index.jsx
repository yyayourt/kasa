import React from "react";
import { Link } from "react-router-dom"; // Importation de Link
import accommodations from "../../datas/logements.json"; // Ajustez le chemin d'accès selon votre structure de dossier
import "../../assets/SCSS/components/gallery.scss"; // Assurez-vous d'importer votre fichier CSS

const AccommodationsList = () => {
    return (
        <div className="accommodations-container">
            {accommodations.map((item) => (
                <Link key={item.id} to={`/logement/${item.id}`} className="accommodation-card">
                    <img src={item.pictures[0]} alt={item.title} />
                    <h3>{item.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default AccommodationsList;
