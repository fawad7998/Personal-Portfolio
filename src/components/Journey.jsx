import React from 'react';

const Journey = () => {
    return (
        <section className="bg-gray-800 text-white p-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center">My Journey</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-2xl mb-4">Education</h3>
                        <ul>
                            <li className="mb-2">Master Degree - University <span className="text-blue-500">2017 - 2019</span></li>
                            <li className="mb-2">Bachelor Degree - University <span className="text-blue-500">2015 - 2017</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-4">Experience</h3>
                        <ul>
                            <li className="mb-2">Web Developer - Company <span className="text-blue-500">2019 - 2021</span></li>
                            <li className="mb-2">Frontend Developer - Company <span className="text-blue-500">2021 - Present</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
