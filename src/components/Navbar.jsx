import React from 'react';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-white p-6 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">FA.</div>
                <ul className="flex space-x-6">
                    <li className="hover:text-blue-500"><a href="#">Home</a></li>
                    <li className="hover:text-blue-500"><a href="#">About</a></li>
                    <li className="hover:text-blue-500"><a href="#">Education</a></li>
                    <li className="hover:text-blue-500"><a href="#">Skills</a></li>
                    <li className="hover:text-blue-500"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
