import React from 'react';

const About = () => {
    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1>Sobre Nosotros</h1>
                    <p>Excelencia y calidad europea en Ecuador</p>
                </div>
            </header>

            <section className="section about-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">Nuestra Historia</span>
                        <h2>Pasión por la Construcción</h2>
                        <div className="separator"></div>
                    </div>

                    <div className="about-content-grid">
                        <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
                            <p style={{ marginBottom: '20px' }}>En Arkicons, nos dedicamos a transformar la arquitectura ecuatoriana mediante la importación de materiales de construcción de la más alta calidad. Nos especializamos en tejas españolas, accesorios de cubierta y acabados que aportan distinción y durabilidad a cada proyecto.</p>
                            <p>Nuestra misión es ser el puente directo entre los mejores fabricantes de Europa y su obra en Ecuador, eliminando intermediarios para garantizar precios competitivos y una logística impecable.</p>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <i className="fas fa-ship"></i>
                                </div>
                                <h3>Importación Directa</h3>
                                <p>Sin intermediarios. Traemos los mejores materiales directamente desde España.</p>
                            </div>
                            <div className="feature-card">
                                <div className="icon-box">
                                    <i className="fas fa-certificate"></i>
                                </div>
                                <h3>Calidad Garantizada</h3>
                                <p>Productos certificados con estándares europeos.</p>
                            </div>
                            <div className="feature-card">
                                <div className="icon-box">
                                    <i className="fas fa-hand-holding-heart"></i>
                                </div>
                                <h3>Asesoría Experta</h3>
                                <p>Acompañamiento integral en su proyecto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
