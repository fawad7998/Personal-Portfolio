import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="text-white p-10 md:p-6 flex flex-col items-start justify-center h-screen bg-cover bg-center pt-20 md:pt-24" style={{ backgroundImage: `url("/home.jpg")` }}>
                <div className="container mx-auto mt-6 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Fawad Ahmad</h1>
                    <h2 className="text-2xl md:text-3xl text-blue-500 mb-4">Frontend Developer</h2>
                    <p className="mb-8 max-w-full md:max-w-lg">Passionate and detail-oriented Software Developer with expertise in various programming languages and frameworks. Skilled in creating efficient software solutions and committed to delivering top-notch work. Thrives in dynamic environments, leveraging technical know-how to solve complex problems. Experienced in front-end development, adept at integrating diverse technologies for user-friendly applications. Excels in teamwork, understanding project needs, and delivering innovative solutions that surpass expectations.</p>
                    <div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">Hire Me</button>
                        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">Let's Talk</button>
                    </div>
                    <div className="flex space-x-2 md:space-x-4 mt-6 justify-start">
                        <a href="#" className="text-blue-500 hover:text-white rounded-full border-2 border-blue-500 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-white rounded-full border-2 border-blue-500 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-white rounded-full border-2 border-blue-500 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
