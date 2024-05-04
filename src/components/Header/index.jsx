function Header() {
    return (
        <>
            <ul>
                <li to="/">Accueil</li>
                <li to="/freelances">Profils</li>
                <li to="/survey/1" $isFullLink>
                    Faire le test
                </li>
            </ul>
        </>
    );
}

export default Header;
