import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-800 text-white p-6">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Hi, I'm Jacob Aiden</h1>
                <h2 className="text-3xl text-blue-500 mb-4">Frontend Developer</h2>
                <p className="mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                <div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4">Hire Me</button>
                    <button className="bg-transparent border border-blue-500 text-blue-500 py-2 px-4 rounded">Let's Talk</button>
                </div>
            </div>
        </section>
    );
};

export default About;
