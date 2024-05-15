import React from "react";
import { Link } from "react-router-dom";
import "../../assets/SCSS/pages/NotFound.scss"; // Assurez-vous d'importer les styles CSS

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="home-link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
};

export default NotFoundPage;
