import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <header className="scale-90 fixed top-0 left-0 w-full bg-transparent text-white p-4 md:p-6 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold">FA.</div>
                <ul className="hidden md:flex space-x-4 md:space-x-6">
                    <li className="hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="/" smooth={true} duration={500}>Home</ScrollLink>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="experience" smooth={true} duration={500}>Skills</ScrollLink>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
