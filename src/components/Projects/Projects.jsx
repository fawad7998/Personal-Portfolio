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


    // ${
    // index === scrollIndex ? '' : 'hidden'
    // }`}



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
                            <div className="relative w-700 h-96 overflow-hidden rounded-lg shadow-lg">
                                <img
                                    className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500"
                                    src="https://via.placeholder.com/700x400"
                                    alt="Card background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-700 bg-opacity-80 backdrop-blur-lg transition-opacity duration-500 opacity-0 hover:opacity-100 flex justify-center items-center text-white">
                                    <p className="text-4xl font-bold">
                                        <div>
                                            {name}
                                        </div>
                                    </p>
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
