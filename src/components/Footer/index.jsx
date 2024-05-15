import React from "react";
import "../../assets/SCSS/components/footer.scss"; // Assurez-vous d'avoir un fichier SCSS pour les styles
import LogoKasaBlanc from "../../assets/LogoKasaBlanc.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={LogoKasaBlanc} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
