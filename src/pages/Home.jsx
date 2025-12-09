import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollList from '../components/ScrollList';
import StatCounter from '../components/StatCounter';

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

    const [collectionType, setCollectionType] = React.useState('trending');

    const classicItems = [
        { text: "Teja Española Clásica - Arcilla Natural", selected: true },
        { text: "Cumbreras y Remates - Terracota", selected: false },
        { text: "Teja Mixta - Estilo Mediterráneo", selected: false },
        { text: "Impermeabilizante Premium", selected: false },
        { text: "Ladrillo Visto Artesanal", selected: false },
    ];

    const trendingItems = [
        { text: "Panel WPC - Acabado Madera Tecnológica", selected: true },
        { text: "Teja Plana - Negro Pizarra (Minimalista)", selected: false },
        { text: "Revestimiento 3D para Interiores", selected: false },
        { text: "Fachadas Ventiladas - Estilo Industrial", selected: false },
        { text: "Cubiertas Solares Integradas", selected: false },
    ];

    const currentItems = collectionType === 'classic' ? classicItems : trendingItems;
    const currentTitle = collectionType === 'classic' ? "Clásicos Atemporales" : "Tendencias 2026";

    const projects = [
        { title: "Residencia los Ceibos", img: "/images/project-1.jpg", category: "Cubiertas Residenciales" },
        { title: "Complejo Turístico Manta", img: "/images/project-2.jpg", category: "Acabados Exteriores" },
        { title: "Edificio Vista Hermosa", img: "/images/project-3.jpg", category: "Tejados Premium" },
    ];

    return (
        <>
            <header id="inicio" className="hero">
                <video autoPlay loop muted playsInline className="hero-video" poster="/images/hero-poster.jpg">
                    <source src="/images/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
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



            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid animate-on-scroll">
                        <div className="stat-item">
                            <StatCounter end={15} suffix="+" />
                            <p>Años de Experiencia</p>
                        </div>
                        <div className="stat-item">
                            <StatCounter end={500} suffix="+" />
                            <p>Proyectos Ejecutados</p>
                        </div>
                        <div className="stat-item">
                            <StatCounter end={100} suffix="%" />
                            <p>Material Garantizado</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
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

            {/* Dynamic Product Showcase */}
            <div className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div className="section-header text-center animate-on-scroll">
                        <span className="subtitle">Catálogo Destacado</span>
                        <h2>Materiales de Vanguardia</h2>
                        <div className="separator"></div>
                    </div>

                    {/* Collection Toggle Buttons */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                        <button
                            onClick={() => setCollectionType('classic')}
                            className={collectionType === 'classic' ? 'btn-primary' : 'btn-outline-dark'}
                            style={{
                                padding: '10px 25px',
                                borderRadius: '50px',
                                background: collectionType === 'classic' ? 'var(--primary)' : 'transparent',
                                color: collectionType === 'classic' ? '#fff' : '#333',
                                border: collectionType === 'classic' ? 'none' : '1px solid #ddd',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Clásicos
                        </button>
                        <button
                            onClick={() => setCollectionType('trending')}
                            className={collectionType === 'trending' ? 'btn-primary' : 'btn-outline-dark'}
                            style={{
                                padding: '10px 25px',
                                borderRadius: '50px',
                                background: collectionType === 'trending' ? 'var(--primary)' : 'transparent',
                                color: collectionType === 'trending' ? '#fff' : '#333',
                                border: collectionType === 'trending' ? 'none' : '1px solid #ddd',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Tendencias 2026
                        </button>
                    </div>

                    <ScrollList items={currentItems} title={currentTitle} />
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link to="/products" className="btn-primary">Ver Todos los Productos</Link>
                    </div>
                </div>
            </div>

            {/* Featured Projects */}
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

            {/* Testimonials */}
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
