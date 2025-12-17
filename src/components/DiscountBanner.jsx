import React from 'react';
import './DiscountBanner.css';

const DiscountBanner = () => {
    return (
        <div className="discount-banner-container">
            <div className="discount-marquee">
                <div className="marquee-content">
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="marquee-content" aria-hidden="true">
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                    <span>🎉 15% DE DESCUENTO EN TU PRIMER PEDIDO • COTIZA HOY MISMO 🎉</span>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
