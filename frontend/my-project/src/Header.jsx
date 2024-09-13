import React, { useState } from 'react';
import '/css/Header.css'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="logo">
                <img src="img/logo.png" alt="Logo de la marca" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Escultores</a></li>
                    <li><a href="#">Esculturas</a></li>
                    <li><a href="#">Eventos</a></li>
                </ul>
            </nav>
            <a className="btn" href="#"><button>Iniciar Sesion</button></a>
            <a onClick={openNav} className="menu" href="#"><button>Menu</button></a>

            {isOpen && (
                <div id="mobile-menu" className={`overlay ${isOpen ? 'open' : ''}`}>
                    <a onClick={closeNav} href="#" className="close">&times;</a>
                    <div className="overlay-content">
                        <a href="#">Escultores</a>
                        <a href="#">Esculturas</a>
                        <a href="#">Eventos</a>
                        <a href="#">Iniciar Sesion</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;