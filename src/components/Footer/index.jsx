import "./style.css";
import LogoKasaBlanc from "../../assets/LogoKasaBlanc.svg";

function Footer() {
    return (
        <>
            <footer>
                <img src={LogoKasaBlanc} alt="logo" />
                <span>
                    <p>© 2020 Kasa. All rights reserved</p>
                </span>
            </footer>
        </>
    );
}

export default Footer;
