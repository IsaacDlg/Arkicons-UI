import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const images = [
    {
        src: "/images/project-1.jpg",
        title: "Innovación en Construcción",
        subtitle: "Transformamos espacios con materiales importados de primera línea."
    },
    {
        src: "/images/project-2.jpg",
        title: "Acabados Exclusivos",
        subtitle: "Calidad europea para tus proyectos arquitectónicos."
    },
    {
        src: "/images/project-3.jpg",
        title: "Diseño y Funcionalidad",
        subtitle: "Soluciones estéticas y duraderas para cada ambiente."
    },
    {
        type: 'split',
        items: [
            {
                src: "/images/wpc/wpc-10.PNG",
                title: "Paneles WPC",
                link: "/products"
            },
            {
                src: "/images/tejas/tejas-3.JPG",
                title: "Teja Española",
                link: "/products"
            },
            {
                src: "/images/tumbado/tumbado-1.JPG",
                title: "Tumbado PVC",
                link: "/products"
            }
        ]
    }
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);
    const [direction, setDirection] = useState('next'); // 'next' or 'prev'
    const timeoutRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            const next = (currentIndex + 1) % images.length;
            changeSlide(next, 'next');
        }, 5000); // 5 seconds

        return () => {
            resetTimeout();
        };
    }, [currentIndex]); // Dependency on currentIndex ensures loop

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const changeSlide = (newIndex, newDirection) => {
        setPreviousIndex(currentIndex);
        setDirection(newDirection);
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const next = (currentIndex + 1) % images.length;
        changeSlide(next, 'next');
    };

    const prevSlide = () => {
        const prev = (currentIndex - 1 + images.length) % images.length;
        changeSlide(prev, 'prev');
    };

    const goToSlide = (index) => {
        if (index === currentIndex) return;
        const newDirection = index > currentIndex ? 'next' : 'prev';
        changeSlide(index, newDirection);
    };

    const getSlideClass = (index) => {
        if (index === currentIndex) return `active ${direction}`;
        if (index === previousIndex) return `leaving ${direction}`;
        return 'hidden';
    };

    return (
        <div className="hero-carousel">
            {images.map((slide, index) => {
                if (slide.type === 'split') {
                    return (
                        <div key={index} className={`carousel-slide split-slide ${getSlideClass(index)}`}>
                            {slide.items.map((item, idx) => (
                                <div key={idx} className="split-column" style={{ backgroundImage: `url(${item.src})` }}>
                                    <div className="split-overlay"></div>
                                    <div className="split-content">
                                        <h3>{item.title}</h3>
                                        <Link to={item.link} className="btn-secondary btn-small">Ver Producto</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                }

                return (
                    <div
                        key={index}
                        className={`carousel-slide ${getSlideClass(index)}`}
                        style={{ backgroundImage: `url(${slide.src})` }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="container hero-content">
                            <h1 className={index === currentIndex ? 'fade-in' : ''}>{slide.title}</h1>
                            <p className={index === currentIndex ? 'fade-in delay-1' : ''}>{slide.subtitle}</p>
                            <div className={`hero-btns ${index === currentIndex ? 'fade-in delay-2' : ''}`}>
                                <Link to="/products" className="btn-primary">Explorar Catálogo</Link>
                                <Link to="/contact" className="btn-secondary">Cotizar Proyecto</Link>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Manual Navigation Controls */}
            <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-control next" onClick={nextSlide} aria-label="Next Slide">
                <i className="fas fa-chevron-right"></i>
            </button>

            {/* Indicators */}
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
