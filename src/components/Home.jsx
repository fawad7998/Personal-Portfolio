import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { LinkArrow } from '../assets/LinkArrow';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: `url("/latest.png")` }}>
            <section className=" scale-90 text-white p-10 md:p-6 flex flex-col items-start justify-center h-screen bg-cover bg-center pt-20 md:pt-24" >
                <div className="container mx-auto mt-6 text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">Hi, I'm Fawad Ahmad</h1>
                    <h2 className="text-2xl md:text-6xl text-blue-300 mb-4">
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
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
                    <p className="mb-8 max-w-full md:max-w-lg">With 1+ Year of Experience</p>
                    <div className='flex'>
                        <a href="/CV.pdf"><button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">Resume <LinkArrow className={'w-5 ml-1'} /></button></a>
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
        </div>
    );
};

export default Home;
