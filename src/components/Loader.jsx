import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Small delay to ensure smooth exit after load
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };

        // Check if page already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className={`page-loader ${!isLoading ? 'hidden' : ''}`} aria-label="Cargando...">
            <svg className="ark-loader" viewBox="0 0 100 100" role="img" aria-hidden="true">
                {/* 
                    Placeholder 'A' Path for Arkicons.
                    This mimics a stylized mountain/A shape.
                    Replace this 'd' with your actual SVG logo path if you have it.
                */}
                <path
                    className="ark-loader-stroke"
                    d="M 20 90 L 50 20 L 80 90 M 35 60 L 65 60"
                />
            </svg>
        </div>
    );
};

export default Loader;
