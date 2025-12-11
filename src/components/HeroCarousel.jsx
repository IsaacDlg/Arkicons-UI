import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const images = [
    {
        src: "/images/laminas/laminas-3.JPG",
        title: "TRANSFORMA TU HOGAR",
        subtitle: "Descubre nuestra línea exclusiva de acabados arquitectónicos.",
        link: "/products"
    },
    {
        src: "/images/tejas/tejas-1.JPG",
        title: "TEJA ESPAÑOLA PVC",
        subtitle: "Durabilidad y estética clásica sin mantenimiento.",
        link: "/products"
    },
    {
        src: "/images/wpc/wpc-1.JPG",
        title: "PANELES WPC",
        subtitle: "Elegancia y calidez para tus espacios interiores.",
        link: "/products"
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

const HeroCarousel = ({ slides = images, height = '85vh' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);
    const [direction, setDirection] = useState('next'); // 'next' or 'prev'
    const timeoutRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            const next = (currentIndex + 1) % slides.length;
            changeSlide(next, 'next');
        }, 5000); // 5 seconds

        return () => {
            resetTimeout();
        };
    }, [currentIndex, slides.length]); // Dependency on slides needed?

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
        const next = (currentIndex + 1) % slides.length;
        changeSlide(next, 'next');
    };

    const prevSlide = () => {
        const prev = (currentIndex - 1 + slides.length) % slides.length;
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
        <div className="hero-carousel" style={{ height: height }}>
            {slides.map((slide, index) => {
                if (slide.type === 'custom') {
                    return (
                        <div key={index} className={`carousel-slide custom-slide ${getSlideClass(index)}`}>
                            {slide.content}
                        </div>
                    );
                }

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
                                <Link to={slide.link || '/products'} className="btn-primary">{slide.cta || 'Explorar Catálogo'}</Link>
                                {slide.cta2 && <Link to="/contact" className="btn-secondary">{slide.cta2}</Link>}
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Manual Navigation Controls - Only show if > 1 slide */}
            {slides.length > 1 && (
                <>
                    <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="carousel-control next" onClick={nextSlide} aria-label="Next Slide">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </>
            )}

            {/* Indicators - Only show if > 1 slide */}
            {slides.length > 1 && (
                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeroCarousel;
