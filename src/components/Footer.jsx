import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <span className="brand-text">ARKICONS</span>
                        </div>
                        <p className="footer-desc">
                            Expertos en importación y distribución de acabados de construcción de alta calidad.
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1BbufgS9nH/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/arkicons.ec?igsh=czc0amdqcTc0MnB2" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.tiktok.com/@arkicons.ec?_r=1&_t=ZM-927Eou6akqe" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Enlaces Rápidos</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/about">Nosotros</Link></li>
                            <li><Link to="/products">Productos</Link></li>
                            <li><Link to="/contact">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div className="footer-col">
                        <h4>Productos</h4>
                        <ul className="footer-links">
                            <li><Link to="/products">Porcelanatos</Link></li>
                            <li><Link to="/products">Cerámicas</Link></li>
                            <li><Link to="/products">Pisos Flotantes</Link></li>
                            <li><Link to="/products">Granito</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col contact-col">
                        <h4>Contacto</h4>
                        <ul className="contact-list">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Av. de los Shyris y Calle Florida, Sangolquí</span>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <span>098 767 6761</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>arkiconsec@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Arkicons. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
