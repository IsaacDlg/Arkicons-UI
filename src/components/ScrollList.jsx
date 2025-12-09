import React from 'react';
import './ScrollList.css';

const ScrollList = ({ items, title }) => {
    return (
        <div className="scroll-list-wrapper">
            {title && <h3 className="scroll-list-title">{title}</h3>}
            <div className="scroll-list-container">
                <div className="top-gradient"></div>
                <div className="scroll-list no-scrollbar">
                    {items.map((item, index) => (
                        <div key={index} className={`item ${item.selected ? 'selected' : ''}`}>
                            <p className="item-text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="bottom-gradient"></div>
            </div>
        </div>
    );
};

export default ScrollList;
