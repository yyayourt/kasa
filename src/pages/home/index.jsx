import "./style.css";

import imgHome from "../../assets/imgHome.jpeg";

const Home = () => {
    return (
        <>
            <div className="banner">
                <img src={imgHome} alt="" />
                <h1>Chez vous, partout ailleurs</h1>
            </div>
        </>
    );
};

export default Home;
