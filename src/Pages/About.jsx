import React from 'react';

const About = () => {
    return (
        <div id='about' className=" flex flex-col items-center justify-center min-h-screen p-8 space-y-4 ">
            <h1 className="text-4xl font-bold text-center pb-6">
                <span className="text-white text-6xl">About</span> <span className="text-blue-300 text-6xl">Me</span>
            </h1>
            <div className="flex justify-center mb-4">
                <div className="relative">
                    <img
                        src="/fo.png"
                        alt="Profile Picture"
                        className="w-48 h-48 rounded-full object-cover border-4 border-blue-300"
                    />
                </div>
            </div>
            <p className="text-xl text-center text-white font-bold">
                Frontend Developer!  </p>
            <p className="w-full max-w-full md:max-w-2xl lg:max-w-5xl text-white text-justify">
                Passionate and detail-oriented Software Developer with expertise in various programming languages and frameworks. Skilled in creating efficient software solutions and committed to delivering top-notch work. Thrives in dynamic environments, leveraging technical know-how to solve complex problems. Experienced in front-end development, adept at integrating diverse technologies for user-friendly applications. Excels in teamwork, understanding project needs, and delivering innovative solutions that surpass expectations.
            </p>

            {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Read More
            </button> */}
        </div>
    );
};

export default About;