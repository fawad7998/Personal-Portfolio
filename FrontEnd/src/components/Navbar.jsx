import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes icon

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const cancelMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-white p-4 md:p-6 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold cursor-pointer">
                    <ScrollLink to="/" smooth={true} duration={500}>FA.</ScrollLink>
                </div>
                <div className="md:hidden flex items-center">
                    {/* Conditional rendering of menu button and cross button */}
                    {isOpen ? (
                        <button onClick={cancelMenu}>
                            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                        </button>
                    ) : (
                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} className="text-2xl" />
                        </button>
                    )}
                </div>
                <ul className={`fixed inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-xl md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:bg-opacity-0 ${isOpen ? 'flex' : 'hidden md:flex'}`} style={{ top: isOpen ? '0' : '-100vh', transition: 'top 0.5s' }}>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="/" smooth={true} duration={500} onClick={cancelMenu}>Home</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="about" smooth={true} duration={500} onClick={cancelMenu}>About</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="skills" smooth={true} duration={500} onClick={cancelMenu}>Skills</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="experience" smooth={true} duration={500} onClick={cancelMenu}>Experience</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="projects" smooth={true} duration={500} onClick={cancelMenu}>Projects</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="contact" smooth={true} duration={500} onClick={cancelMenu}>Contact</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
