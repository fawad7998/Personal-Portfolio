import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";
import { AiFillProduct, AiOutlineMonitor } from "react-icons/ai";

const Slider = ({ session, signIn, signOut }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    };

    const closeProductDropdown = () => {
        setIsProductDropdownOpen(false);
    };

    return (
        <div className="bg-black text-white sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <img src="/icons/logo.png" alt="Logo" className="hidden md:flex w-[200px]" />
                    </Link>
                    <Link to="/">
                        <img src="/icons/logo.png" alt="Monogram" className="flex md:hidden w-[150px]" />
                    </Link>
                </div>
                <nav
                    className={`gap-x-6 flex text-md lg:flex ${isMobileMenuOpen ? "flex-col" : "hidden"
                        } lg:flex-row md:items-center absolute lg:static top-[72px] pt-4 pb-4 left-0 w-full lg:w-auto bg-secondary-blue lg:bg-transparent`}
                >
                    <div
                        className="relative"
                        onMouseLeave={closeProductDropdown}
                    >
                        <button
                            onClick={toggleProductDropdown}
                            className="p-2 hover:underline hover:animate-pulse flex items-center"
                        >
                            Products
                            <span className="ml-2">
                                <FaAngleDown />
                            </span>
                        </button>
                        {isProductDropdownOpen && (
                            <div
                                className="absolute left-0 text-md top-full w-[450px] flex-wrap p-1 flex items-center bg-white text-black rounded shadow-lg"
                                onClick={closeProductDropdown}
                            >
                                <h1 className="p-4">PRODUCT</h1>
                                <div className="flex items-center justify-between">
                                    <Link to="/product-intelligence" className="flex items-center gap-2 px-4 py-2 hover:bg-ternary-blue rounded-lg hover:text-white">
                                        <AiFillProduct className="text-primary-blue text-lg" />
                                        Product&nbsp;Intelligence
                                    </Link>
                                    <Link to="/products/listing-quality" className="flex items-center gap-2 px-4 py-2 hover:bg-ternary-blue rounded-lg hover:text-white">
                                        <AiOutlineMonitor className="text-primary-blue text-lg" />
                                        Keyword&nbsp;Research
                                    </Link>
                                </div>
                                <div className="flex items-center w-[380px] justify-between">
                                    <Link to="/products/advertising" className="flex items-center gap-2 px-4 py-2 hover:bg-ternary-blue rounded-lg hover:text-white">
                                        <FcAdvertising />
                                        Advertising
                                    </Link>
                                    <Link to="/products/listing-quality" className="flex items-center gap-2 px-4 py-2 hover:bg-ternary-blue rounded-lg hover:text-white">
                                        <MdVerified className="text-primary-blue text-lg" />
                                        Listing&nbsp;Quality
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="/solutions" className="p-2 hover:underline hover:animate-pulse">Solutions</Link>
                    <Link to="/customers" className="p-2 hover:underline hover:animate-pulse">Customers</Link>
                    <Link to="/blogs" className="p-2 hover:underline hover:animate-pulse">Blogs</Link>
                    <Link to="/pricing" className="p-2 hover:underline hover:animate-pulse">Pricing</Link>
                    <Link to="/why-salezpeak" className="p-2 hover:underline hover:animate-pulse">Why Salezpeak</Link>
                    {session ? (
                        <div className="p-2 hover:underline hover:animate-pulse">
                            <h1>Hello, {session.user.name.split(" ")[0]}</h1>
                            <button onClick={signOut}>Logout</button>
                        </div>
                    ) : (
                        <button onClick={signIn}>Log In</button>
                    )}
                </nav>
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white text-2xl mb-4"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
