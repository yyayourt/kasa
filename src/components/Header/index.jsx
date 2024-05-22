// src/components/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/SCSS/components/header.scss";
import logoKasa from "../../assets/LogoKasa.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logoKasa} alt="Kasa Logo" />
                </Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
