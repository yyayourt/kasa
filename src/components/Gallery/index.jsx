import React from "react";
import { Link } from "react-router-dom";
import accommodations from "../../datas/logements.json";
import "../../assets/SCSS/components/gallery.scss";

const AccommodationsList = () => {
    return (
        <div className="accommodations-container">
            {accommodations.map((item) => (
                <Link key={item.id} to={`/logement/${item.id}`} className="accommodation-card">
                    <img src={item.cover} alt={item.title} />
                    <h3>{item.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default AccommodationsList;
