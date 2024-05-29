import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/SCSS/components/header.scss";
import logoKasa from "../../assets/LogoKasa.svg";

const Header = () => {
    const location = useLocation();

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
                        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
