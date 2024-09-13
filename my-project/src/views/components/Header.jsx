
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '/public/css/Header.css'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><img src="img/logo.png" alt="Logo de la marca" /></Link>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/escultores">Escultores</Link></li>
                    <li><Link to="/esculturas">Esculturas</Link></li>
                    <li><Link to="/eventos">Eventos</Link></li>
                </ul>
            </nav>
            <a className="btn" href="#"><button>Iniciar Sesion</button></a>
            <a onClick={openNav} className="menu" href="#"><button>Menu</button></a>

            {isOpen && (
                <div id="mobile-menu" className={`overlay ${isOpen ? 'open' : ''}`}>
                    <a onClick={closeNav} href="#" className="close">&times;</a>
                    <div className="overlay-content">
                        <Link to="/escultores">Escultores</Link>
                        <Link to="/esculturas">Esculturas</Link>
                        <Link to="/eventos">Eventos</Link>
                        <Link to="#">Iniciar Sesion</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
