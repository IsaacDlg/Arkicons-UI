import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

const MegaMenu = () => {
    const [activeCategory, setActiveCategory] = useState('interior');

    const menuData = {
        interior: {
            title: "Interior",
            items: [
                { id: 'wpc-int', title: "Paneles WPC", desc: "Elegancia natural", img: "/images/wpc/wpc-1.JPG", link: "/products" },
                { id: 'tumbado', title: "Tumbado PVC", desc: "Acabados limpios", img: "/images/tumbado/tumbado-1.JPG", link: "/products" },
                { id: 'laminas', title: "Láminas UV", desc: "Mármol ligero", img: "/images/laminas/laminas-3.JPG", link: "/products" },
            ]
        },
        exterior: {
            title: "Exterior",
            items: [
                { id: 'tejas', title: "Teja Española", desc: "Cubiertas durables", img: "/images/tejas/tejas-1.JPG", link: "/products" },
                { id: 'deck', title: "Piso Deck WPC", desc: "Terrazas modernas", img: "/images/wpc/wpc-10.PNG", link: "/products" },
            ]
        },
        accesorios: {
            title: "Accesorios",
            items: [
                { id: 'cornisas', title: "Cornisas", desc: "Detalles finales", img: "/images/tumbado/tumbado-2.JPG", link: "/products" },
                { id: 'pegamento', title: "Adhesivos", desc: "Instalación prof.", img: "/images/laminas/laminas-4.JPG", link: "/products" },
            ]
        }
    };

    return (
        <div className="mega-menu-container">
            {/* Sidebar with Categories */}
            <div className="mega-menu-sidebar">
                <div
                    className={`menu-category ${activeCategory === 'interior' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCategory('interior')}
                >
                    <i className="fas fa-couch category-icon"></i>
                    <span>Interior</span>
                </div>
                <div
                    className={`menu-category ${activeCategory === 'exterior' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCategory('exterior')}
                >
                    <i className="fas fa-home category-icon"></i>
                    <span>Exterior</span>
                </div>
                <div
                    className={`menu-category ${activeCategory === 'accesorios' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCategory('accesorios')}
                >
                    <i className="fas fa-tools category-icon"></i>
                    <span>Accesorios</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="mega-menu-content">
                <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>{menuData[activeCategory].title}</h3>
                <div className="subcategory-grid">
                    {menuData[activeCategory].items.map((item) => (
                        <Link to={item.link} key={item.id} className="subcategory-item">
                            <img src={item.img} alt={item.title} className="subcategory-img" />
                            <div className="subcategory-info">
                                <h4>{item.title}</h4>
                                <span>{item.desc}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
