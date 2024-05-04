import logoKasa from "../../assets/LogoKasa.svg";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <>
            <header>
                <a>
                    {" "}
                    <img src={logoKasa} alt="" />
                </a>
                <nav>
                    <a>Accueil</a>
                    <a>A propos</a>
                </nav>
            </header>
        </>
    );
}

export default Header;
