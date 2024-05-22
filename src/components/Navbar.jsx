import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="scale-90 fixed top-0 left-0 w-full bg-transparent text-white p-4 md:p-6 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold">FA.</div>
                <ul className="hidden md:flex space-x-4 md:space-x-6">
                    <li className="hover:text-blue-500"><Link to="/">Home</Link></li>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    <li className="hover:text-blue-500"><Link to="/about">About</Link></li>
                    <li className="hover:text-blue-500"><Link to="#">Experience</Link></li>
                    <li className="hover:text-blue-500"><Link to="#">Projects</Link></li>
                    <li className="hover:text-blue-500"><Link to="#">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
