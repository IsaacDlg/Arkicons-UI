import React from 'react';
import './InstallationBanner.css';
import { Link } from 'react-router-dom';

const InstallationBanner = () => {
    return (
        <section className="installation-banner">
            {/* Left Side: Speech Bubble & Worker */}
            <div className="banner-side banner-left">
                {/* Speech Bubble Container */}
                <div className="speech-bubble">
                    <h1>¿Necesitas<br />instalación?</h1>
                    <div className="bubble-tail"></div>
                </div>

                {/* Subtext below bubble */}
                <div className="worker-subtext">
                    <h2>Si <span className="subtext-light">También instalamos en toda la RM</span></h2>
                    <i className="fas fa-thumbs-up thumbs-icon"></i>
                </div>

                {/* Worker Image */}
                <img src="/worker_transparent.png" alt="Instalador" className="banner-worker-img" />
            </div>

            {/* Right Side: Quote Call to Action */}
            <div className="banner-side banner-right">
                <div className="banner-content">
                    <h2 className="banner-title white-text">
                        Cotiza <br />
                        y haz tu pedido <br />
                        <span className="scary-big">100% Online</span>
                    </h2>

                    <Link to="/contact" className="btn-banner">
                        COTIZAR AHORA <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
                {/* Optional Graphic/Icon for right side */}
                <i className="fas fa-calculator banner-icon-bg"></i>
            </div>
        </section>
    );
};

export default InstallationBanner;
