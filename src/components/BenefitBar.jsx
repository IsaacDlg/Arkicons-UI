import React from 'react';
import './BenefitBar.css';

const BenefitBar = () => {
    return (
        <section className="benefit-bar">
            <div className="container">
                <div className="benefit-grid">
                    <div className="benefit-item">
                        <i className="fas fa-layer-group benefit-icon"></i>
                        <div className="benefit-text">
                            <h4>Diseños Exclusivos</h4>
                            <p>Para Pisos y Paredes</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <i className="fas fa-boxes benefit-icon"></i>
                        <div className="benefit-text">
                            <h4>Gran Stock</h4>
                            <p>Variedad Inmediata</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <i className="fas fa-laptop benefit-icon"></i>
                        <div className="benefit-text">
                            <h4>Cotiza Online</h4>
                            <p>Atención Rápida</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <i className="fas fa-ruler-combined benefit-icon"></i>
                        <div className="benefit-text">
                            <h4>Cortes a Medida</h4>
                            <p>Servicio Personalizado</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitBar;
