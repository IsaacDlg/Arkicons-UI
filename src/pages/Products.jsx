import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    // Data Structure maping folders to files
    const categories = [
        {
            id: 'wpc',
            title: 'Paneles WPC',
            subtitle: 'Elegancia y Durabilidad',
            cover: '/images/tumbado/tumbado-1.JPG',
            images: [
                '/images/tumbado/tumbado-1.JPG',
                '/images/tumbado/tumbado-2.JPG',
                '/images/tumbado/tumbado-3.JPG',
                '/images/tumbado/tumbado-4.JPG'
            ]
        },
        {
            id: 'tejas',
            title: 'Teja Española PVC',
            subtitle: 'Clásica y Resistente',
            cover: '/images/wpc/wpc-1.JPG',
            images: [
                '/images/wpc/wpc-1.JPG',
                '/images/wpc/wpc-2.JPG',
                '/images/wpc/wpc-5.JPG',
                '/images/wpc/wpc-10.PNG',
                '/images/wpc/wpc-11.PNG'
            ]
        },
        {
            id: 'tumbado',
            title: 'Tumbado PVC',
            subtitle: 'Acabados Interiores',
            cover: '/images/laminas/laminas-3.JPG',
            images: [
                '/images/laminas/laminas-3.JPG',
                '/images/laminas/laminas-4.JPG',
                '/images/laminas/laminas-5.JPG',
                '/images/laminas/laminas-6.JPG',
                '/images/laminas/laminas-7.JPG',
                '/images/laminas/laminas-8.JPG',
                '/images/laminas/laminas-9.JPG'
            ]
        },
        {
            id: 'laminas',
            title: 'Láminas Adhesivas',
            subtitle: 'Decoración Versátil',
            cover: '/images/tejas/tejas-1.JPG',
            images: [
                '/images/tejas/tejas-1.JPG',
                '/images/tejas/tejas-2.JPG',
                '/images/tejas/tejas-3.JPG'
            ]
        }
    ];

    const handleQuote = (imageSrc) => {
        const message = `Hola, estoy interesado en cotizar el producto que vi en su galería: ${window.location.origin}${imageSrc}`;
        window.open(`https://wa.me/593999999999?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1>Nuestros Productos</h1>
                    <p>Calidad superior para cubiertas y acabados</p>
                </div>
            </header>

            <section className="section products-section">
                <div className="container">

                    {/* BREADCRUMB / NAVIGATION */}
                    {selectedCategory && (
                        <div style={{ marginBottom: '30px' }}>
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="btn-secondary"
                                style={{ color: 'var(--primary)', borderColor: 'var(--primary)', padding: '10px 20px' }}
                            >
                                <i className="fas fa-arrow-left"></i> Volver a Categorías
                            </button>
                        </div>
                    )}

                    {/* MAIN GALLERY VIEW */}
                    {!selectedCategory ? (
                        <div className="products-grid">
                            {categories.map((cat) => (
                                <article
                                    key={cat.id}
                                    className="product-card animate-on-scroll"
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="product-image">
                                        <img src={cat.cover} alt={cat.title} />
                                        <div className="product-overlay">
                                            <h3>Ver Galería</h3>
                                        </div>
                                    </div>
                                    <div className="product-info text-center">
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{cat.title}</h3>
                                        <p style={{ color: '#666' }}>{cat.subtitle}</p>
                                        <span className="btn-primary" style={{ marginTop: '15px', fontSize: '0.8rem', padding: '10px 20px' }}>
                                            Ver {cat.images.length} Fotos
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        /* DETAIL VIEW (THE GRID) */
                        <div style={{ animation: 'fadeIn 0.5s ease' }}>
                            <div className="section-header text-center">
                                <span className="subtitle">Galería de Productos</span>
                                <h2>{selectedCategory.title}</h2>
                                <div className="separator"></div>
                            </div>

                            <div className="gallery-grid">
                                {selectedCategory.images.map((img, index) => (
                                    <div key={index} className="gallery-item">
                                        <div
                                            className="gallery-image-wrapper"
                                            onClick={() => setLightboxImage(img)}
                                        >
                                            <img src={img} alt={`${selectedCategory.title} ${index + 1}`} loading="lazy" />
                                            <div className="gallery-overlay">
                                                <i className="fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                        <div className="gallery-actions">
                                            <button
                                                className="btn-details"
                                                onClick={(e) => { e.stopPropagation(); setLightboxImage(img); }}
                                            >
                                                <i className="fas fa-eye"></i> Ver Detalles
                                            </button>
                                            <button
                                                className="btn-cotizar"
                                                onClick={(e) => { e.stopPropagation(); handleQuote(img); }}
                                            >
                                                <i className="fab fa-whatsapp"></i> Cotizar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            {lightboxImage && (
                <div className="lightbox-modal" onClick={() => setLightboxImage(null)}>
                    <span className="lightbox-close">&times;</span>
                    <img src={lightboxImage} alt="Zoom" className="lightbox-content" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
};

export default Products;
