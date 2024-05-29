import React from "react";
import "../../assets/SCSS/pages/home.scss";
import imgHome from "../../assets/imgHome.jpeg";
import Gallery from "../../components/Gallery";

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={imgHome} alt="Bannière" />
                <h1 className="desktop-title">Chez vous, partout et ailleurs</h1>
                <h1 className="mobile-title">
                    Chez vous,
                    <br /> partout et ailleurs
                </h1>
            </div>
            <Gallery />
        </div>
    );
};

export default Home;
