import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { LinkArrow } from '../assets/LinkArrow';
import { TypeAnimation } from "react-type-animation";
import About from './About';
import Skills from './Skills';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Project from './Projects/Projects';
import Contact from './Contact';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div id='/' className='scale-90'>
                <section className="text-white p-10 flex flex-col items-center justify-center min-h-screen bg-cover bg-left-top pt-20 md:pt-24 md:bg-[url('/upload.png')] md:flex-row md:justify-start">
                    <div className="container mx-auto text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Hi, I'm Fawad Ahmad</h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-blue-300 mb-4">
                            <TypeAnimation
                                sequence={[
                                    "NextJs Developer",
                                    1000,
                                    "UI,UX Developer",
                                    1000,
                                    "MERN Stack Developer",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                className="font-bold italic"
                            />
                        </h2>
                        <p className="mb-8 text-xl sm:text-2xl md:text-3xl max-w-full md:max-w-lg">with 2 years of experience</p>
                        <div className='flex flex-wrap justify-center md:justify-start'>
                            <a href="/FawadCV.pdf">
                                <button className="bg-blue-500 flex items-center text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                    Resume <LinkArrow className={'w-5 ml-1'} />
                                </button>
                            </a>
                            <Link to="/contact">
                                <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">
                                    Let's Talk
                                </button>
                            </Link>
                        </div>
                        <div className="flex space-x-2 md:space-x-4 mt-6 justify-center md:justify-start">
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
            </div>
            <About />
            <Skills />
            <Experience />
            <Education />
            <Project />
            <Contact />
        </>
    );
};

export default Home;
