import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000); // Minimum visibility time
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            setTimeout(handleLoad, 3000); // Fallback
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div id="page-loader" className={`page-loader ${!loading ? 'hidden' : ''}`} aria-label="Cargando...">
            <div className="loader-wrap" aria-hidden="true">
                <img
                    src="/images/logos/logo_pestana.png"
                    alt="Arkicons Logo"
                    className="loader-logo"
                />
            </div>
        </div>
    );
};

export default Loader;
