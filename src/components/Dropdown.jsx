// src/components/Dropdown.js
import React, { useState } from "react";
import arrow from "../assets/chevron-up-solid.svg";

const Dropdown = ({ title, content, isList = false, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${className}`}>
            <h2 onClick={toggleDropdown} className="dropdown-header">
                {title}
                <img src={arrow} alt="arrow icon" className={`arrow ${isOpen ? "rotate" : ""}`} />
            </h2>
            <div className={`content ${isOpen ? "open" : ""}`}>
                {isList ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
