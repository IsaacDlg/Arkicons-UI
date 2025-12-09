import React from 'react';

const Contact = () => {
    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1>Contáctanos</h1>
                    <p>Estamos listos para asesorar su proyecto</p>
                </div>
            </header>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <span className="subtitle">Información</span>
                            <h2>Visítenos en Ecuador</h2>
                            <p>Nuestro equipo de expertos está disponible para atender todas sus consultas sobre nuestros productos importados.</p>

                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Ubicación</h4>
                                    <p>Quito, Ecuador (Dirección Exacta Pendiente)</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone"></i>
                                <div>
                                    <h4>Teléfono</h4>
                                    <p>+593 99 999 9999</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@arkicons.com</p>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" placeholder="Su nombre completo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="su@email.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarle?"></textarea>
                            </div>
                            <button type="submit" className="btn-primary full-width">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
