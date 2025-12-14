import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>

            <Footer />

            <a href="https://wa.me/593987676761" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
};

export default Layout;
