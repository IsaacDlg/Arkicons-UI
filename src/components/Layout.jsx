import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-brand">
                        <h3>Arkicons<span className="dot">.</span></h3>
                        <p>Importadores de calidad.</p>
                    </div>
                    <div className="footer-links">
                        <a href="https://www.facebook.com/share/1BbufgS9nH/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/arkicons.ec?igsh=czc0amdqcTc0MnB2" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@arkicons.ec?_r=1&_t=ZM-927Eou6akqe" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; 2025 Arkicons. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>

            <a href="https://wa.me/593987676761" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
};

export default Layout;
