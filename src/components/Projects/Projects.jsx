import React, { useEffect, useState } from 'react';
import { projects } from './ProjectData';

function Project() {

    const [scrollIndex, setScrollIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setScrollIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 3000); // Change the interval time as needed

        return () => clearInterval(intervalId);
    }, []);






    return (
        <div id="projects" className="my-12 p-20">
            <h2 className="font-bold text-6xl mb-12 w-full text-center md:text-6xl xs:text-4xl text-white">
                Projects
            </h2>
            <div className="relative flex justify-center items-center">
                <div className="flex space-x-8 overflow-x-auto no-scrollbar">
                    {projects.map((data, index) => {
                        const { name, description, githubLink, vercelLink } = data;
                        return (
                            <div key={index} className={`relative overflow-hidden w-[600px] h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white flex-shrink-0 transition-transform duration-500  ${index === scrollIndex ? '' : 'hidden'}`}>
                                <div className="z-10 absolute w-full h-full peer"></div>
                                <div
                                    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-500 transition-all duration-500"
                                ></div>
                                <div
                                    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-blue-500 transition-all duration-500"
                                >
                                    <a href={githubLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href={vercelLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Live</a>
                                </div>
                                <div className="w-full h-full flex flex-col  items-center justify-center uppercase">
                                    <h3 className="text-2xl mb-4 text-white">{name}</h3>
                                    <p className="text-sm text-gray-700 mb-4 px-4 text-center">{description}</p>
                                    <div className="flex space-x-4">
                                        hover
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Project;
