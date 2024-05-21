import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="text-white p-6 flex flex-col items-start justify-center h-screen bg-cover bg-center pt-24" style={{ backgroundImage: `url("/home.jpg")` }}>
                <div className="container mx-auto text-left">
                    <h1 className="text-5xl font-bold mb-4">Hi, I'm Jacob Aiden</h1>
                    <h2 className="text-3xl text-blue-500 mb-4">Frontend Developer</h2>
                    <p className="mb-8 max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet laborum, autem architecto esse in eaque eius reprehenderit atque sed maxime ex nobis dolorem nemo velit accusantium voluptatibus.</p>
                    <div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4">Hire Me</button>
                        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">Let's Talk</button>
                    </div>
                    <div className="flex space-x-4 mt-16 justify-start">
                        <a href="#" className="text-blue-500 hover:text-white rounded-full border-2 border-blue-500 w-12 h-12 flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-white rounded-full border-2 border-blue-500 w-12 h-12 flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-white rounded-full border-2 border-blue-500 w-12 h-12 flex items-center justify-center transition-colors duration-300">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
