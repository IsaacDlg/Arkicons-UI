import React from 'react';
import './Loader.css';

const AnimatedLogo = () => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
            aria-label="Arkicons Logo"
        >
            {/* 
                Recreating the Arkicons "A" / House Shape 
                Path 1: The Roof/A (Starting from Top/Tip)
            */}
            <path
                d="M50 10 L90 90 L75 90 L50 40 L25 90 L10 90 L50 10 Z"
                stroke="#FF9F1C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="logo-path"
                fill="none"
            />

            {/* Inner details if needed, but the main loop above creates the A shape */}
        </svg>
    );
};

export default AnimatedLogo;
