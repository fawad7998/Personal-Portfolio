import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-[#081B29] py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">About</h1>
                <h2 className="text-3xl text-blue-500 mb-4">Frontend Developer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Education</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li className="mb-1">2017-2018: Master Degree - University</li>
                            <li className="mb-1">2018-2019: Master Degree - University</li>
                            <li className="mb-1">3019-3000: Master Degree - University</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Experience</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-1 text-gray-700">2017-2018: Web Developer - Company</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-1 text-gray-700">2018-2019: Web Developer - Company</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-gray-700">2019-2020: Web Developer - Company</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;