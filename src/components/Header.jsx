import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

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
                    <div className="contact-items">
                        <a href="tel:+593987676761"><i className="fas fa-phone-alt"></i> 098 767 6761</a>
                        <a href="mailto:arkiconsec@gmail.com"><i className="fas fa-envelope"></i> arkiconsec@gmail.com</a>
                    </div>
                    <div className="social-items">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav">
                <div className="container nav-content">
                    {/* Logo */}
                    <Link to="/" className="brand-logo">
                        <img src="/images/logo.png" alt="Arkicons" className="logo-img" />
                    </Link>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    {/* Nav Links */}
                    <nav className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">
                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link></li>
                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Nosotros</Link></li>
                            <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Productos</Link></li>
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
