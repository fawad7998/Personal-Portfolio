import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className=" scale-90 fixed  top-0 left-0 w-full bg-transparent text-white p-4 md:p-6 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold cursor-pointer">
                    <ScrollLink to="/" smooth={true} duration={500}>FA.</ScrollLink>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
                    </button>
                </div>
                <ul className={`fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 text-xl md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:bg-opacity-0 ${isOpen ? 'flex' : 'hidden md:flex'}`}>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="/" smooth={true} duration={500} onClick={toggleMenu}>Home</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLink>
                        <span className="absolute top-6 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
