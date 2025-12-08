import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollList from '../components/ScrollList';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }, []);

    const scrollItems = [
        { text: "Teja Española Clásica - Arcilla Natural", selected: true },
        { text: "Teja Plana Pizarra - Acabado Mate", selected: false },
        { text: "Cumbreras y Remates - Terracota", selected: false },
        { text: "Aislante Térmico para Cubiertas", selected: false },
        { text: "Impermeabilizante Premium", selected: false },
        { text: "Teja Mixta - Estilo Mediterráneo", selected: false },
        { text: "Canaletas de Cobre", selected: false },
    ];

    const projects = [
        { title: "Residencia los Ceibos", img: "/pvc-tile.png", category: "Cubiertas Residenciales" },
        { title: "Complejo Turístico Manta", img: "/wpc-panel.png", category: "Acabados Exteriores" },
        { title: "Edificio Vista Hermosa", img: "/ridge-cap.png", category: "Tejados Premium" },
    ];

    return (
        <>
            <header id="header" className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="fade-in">Innovación en Construcción,<br />Tradición en Calidad</h1>
                    <p className="fade-in delay-1">Transformamos espacios con materiales importados de primera línea. Especialistas en cubiertas y acabados arquitectónicos.</p>
                    <div className="hero-btns fade-in delay-2">
                        <Link to="/products" className="btn-primary">Explorar Catálogo</Link>
                        <Link to="/contact" className="btn-secondary">Cotizar Proyecto</Link>
                    </div>
                </div>
            </header>

            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid animate-on-scroll">
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Años de Experiencia</p>
                        </div>
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Proyectos Ejecutados</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Material Garantizado</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-section">
                <div className="container">
                    <div className="section-header text-center animate-on-scroll">
                        <span className="subtitle">Nuestra Diferencia</span>
                        <h2>Más que Materiales, Soluciones</h2>
                        <div className="separator"></div>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card animate-on-scroll">
                            <div className="icon-box">
                                <i className="fas fa-globe-europe"></i>
                            </div>
                            <h3>Calidad Europea</h3>
                            <p>Importamos directamente desde las mejores canteras y fábricas de España, asegurando durabilidad y estilo inigualable.</p>
                        </div>
                        <div className="feature-card animate-on-scroll delay-1">
                            <div className="icon-box">
                                <i className="fas fa-drafting-compass"></i>
                            </div>
                            <h3>Asesoría Técnica</h3>
                            <p>Nuestro equipo de arquitectos e ingenieros le guía para elegir la mejor solución para su clima y diseño.</p>
                        </div>
                        <div className="feature-card animate-on-scroll delay-2">
                            <div className="icon-box">
                                <i className="fas fa-truck-loading"></i>
                            </div>
                            <h3>Logística Eficiente</h3>
                            <p>Entregas puntuales en todo el Ecuador. Manejamos su material con el cuidado que merece.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div className="section-header text-center animate-on-scroll">
                        <span className="subtitle">Catálogo Destacado</span>
                        <h2>Materiales de Vanguardia</h2>
                        <div className="separator"></div>
                    </div>
                    <ScrollList items={scrollItems} title="Tendencias 2024" />
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link to="/products" className="btn-primary">Ver Todos los Productos</Link>
                    </div>
                </div>
            </div>

            <section className="section projects-section">
                <div className="container">
                    <div className="section-header text-center animate-on-scroll">
                        <span className="subtitle">Portafolio</span>
                        <h2>Obras Emblemáticas</h2>
                        <div className="separator"></div>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div className="project-card animate-on-scroll" key={index}>
                                <img src={project.img} alt={project.title} />
                                <div className="project-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header text-center animate-on-scroll">
                        <span className="subtitle">Testimonios</span>
                        <h2>Lo que dicen nuestros clientes</h2>
                        <div className="separator"></div>
                    </div>
                    <div className="features-grid">
                        <div className="testimonial-card animate-on-scroll">
                            <i className="fas fa-quote-left"></i>
                            <p className="testimonial-text">"La teja española que instalamos en nuestra casa de campo no solo es hermosa, sino que ha resistido perfectamente el invierno. Excelente servicio."</p>
                            <p className="client-name">- Arq. Roberto Silva</p>
                        </div>
                        <div className="testimonial-card animate-on-scroll delay-1">
                            <i className="fas fa-quote-left"></i>
                            <p className="testimonial-text">"Buscábamos un acabado único para la fachada del edificio y Arkicons nos trajo la solución exacta. 100% recomendados."</p>
                            <p className="client-name">- Constructora Moderna</p>
                        </div>
                        <div className="testimonial-card animate-on-scroll delay-2">
                            <i className="fas fa-quote-left"></i>
                            <p className="testimonial-text">"Profesionalismo y calidad. Los recomiendo a todos mis colegas."</p>
                            <p className="client-name">- Ing. María José Vélez</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container animate-on-scroll">
                    <h2>Construya con los mejores</h2>
                    <p style={{ marginBottom: '30px', fontSize: '1.2rem', opacity: '0.9' }}>Solicite su cotización gratuita y descubra por qué somos líderes en acabados.</p>
                    <Link to="/contact" className="btn-secondary">Contáctenos Hoy</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
