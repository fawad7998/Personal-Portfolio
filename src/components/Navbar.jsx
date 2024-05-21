import React from 'react';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-white p-4 md:p-6 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold">FA.</div>
                <ul className="hidden md:flex space-x-4 md:space-x-6">
                    <li className="hover:text-blue-500"><a href="#">Home</a></li>
                    <li className="hover:text-blue-500"><a href="#">About</a></li>
                    <li className="hover:text-blue-500"><a href="#">Education</a></li>
                    <li className="hover:text-blue-500"><a href="#">Skills</a></li>
                    <li className="hover:text-blue-500"><a href="#">Contact</a></li>
                </ul>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
