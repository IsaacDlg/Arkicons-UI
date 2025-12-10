import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import MegaMenu from './MegaMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar - Contact Info */}
            <div className="top-bar">
                <div className="container top-bar-content">

                    <div className="social-items">
                        <a href="https://www.facebook.com/share/1BbufgS9nH/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/arkicons.ec?igsh=czc0amdqcTc0MnB2" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@arkicons.ec?_r=1&_t=ZM-927Eou6akqe" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav">
                <div className="container nav-content">
                    {/* Logo */}
                    <Link to="/" className="brand-logo">
                        <img src="/images/logos/logo_pestana.png" alt="Arkicons" className="brand-icon" />
                        <span className="brand-text">ARKICONS</span>
                    </Link>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    {/* Nav Links */}
                    <nav className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">

                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Nosotros</Link></li>
                            <li className="nav-item-products" style={{ position: 'relative' }}>
                                <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
                                    Productos <i className="fas fa-chevron-down" style={{ fontSize: '0.7em', marginLeft: '5px' }}></i>
                                </Link>
                                <MegaMenu />
                            </li>
                            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contacto</Link></li>
                        </ul>
                        <div className="nav-cta">
                            <Link to="/contact" className="btn-primary">Cotizar</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
