import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <header className="scale-90 fixed top-0 left-0 w-full bg-transparent text-white p-4 md:p-6 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold cursor-pointer">
                    <ScrollLink to="/" smooth={true} duration={500}> FA.</ScrollLink>
                </div>
                <ul className="hidden font-bold md:flex space-x-4 md:space-x-6">
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="/" smooth={true} duration={500}>Home</ScrollLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>

                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>

                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="experience" smooth={true} duration={500}>Experience</ScrollLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>

                    </li>
                    <li className="relative group hover:text-blue-500 cursor-pointer">
                        <ScrollLink to="project" smooth={true} duration={500}>Project</ScrollLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>

                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
