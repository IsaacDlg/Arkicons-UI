import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardNav.css';

const CardNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="card-nav-container">
            <nav className={`card-nav ${isOpen ? 'open' : ''}`}>
                <div className="card-nav-top">
                    {/* Logo */}
                    <Link to="/" className="logo-container" onClick={closeMenu}>
                        <img src="/images/logo-v2.jpg" alt="Arkicons" className="nav-logo" />
                    </Link>

                    {/* Hamburger */}
                    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>

                    {/* CTA Button (Desktop) */}
                    <Link to="/contact" className="card-nav-cta-button" onClick={closeMenu}>
                        Cotizar
                    </Link>
                </div>

                {/* Expandable Content */}
                <div className="card-nav-content">
                    {/* Card 1: Main Links */}
                    <div className="nav-card">
                        <span className="nav-card-label">Explorar</span>
                        <div className="nav-card-links">
                            <Link to="/" className="nav-card-link" onClick={closeMenu}>
                                Inicio <i className="fas fa-arrow-right" style={{ fontSize: '0.8em' }}></i>
                            </Link>
                            <Link to="/about" className="nav-card-link" onClick={closeMenu}>
                                Nosotros <i className="fas fa-arrow-right" style={{ fontSize: '0.8em' }}></i>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Products */}
                    <div className="nav-card">
                        <span className="nav-card-label">Catálogo</span>
                        <div className="nav-card-links">
                            <Link to="/products" className="nav-card-link" onClick={closeMenu}>
                                Ver Productos <i className="fas fa-th-large" style={{ fontSize: '0.8em' }}></i>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3: Contact */}
                    <div className="nav-card">
                        <span className="nav-card-label">Contacto</span>
                        <div className="nav-card-links">
                            <Link to="/contact" className="nav-card-link" onClick={closeMenu}>
                                Contáctanos <i className="fas fa-envelope" style={{ fontSize: '0.8em' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
