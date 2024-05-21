import React from 'react';

const Skills = () => {
    return (
        <section className="bg-gray-800 text-white p-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center">My Skills</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-2xl mb-4">Coding Skills</h3>
                        <ul>
                            <li className="mb-2">HTML <span className="text-blue-500">90%</span></li>
                            <li className="mb-2">CSS <span className="text-blue-500">80%</span></li>
                            <li className="mb-2">JavaScript <span className="text-blue-500">65%</span></li>
                            <li className="mb-2">Python <span className="text-blue-500">75%</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-4">Professional Skills</h3>
                        <ul>
                            <li className="mb-2">Web Design <span className="text-blue-500">95%</span></li>
                            <li className="mb-2">Web Development <span className="text-blue-500">67%</span></li>
                            <li className="mb-2">Graphic Design <span className="text-blue-500">85%</span></li>
                            <li className="mb-2">SEO Marketing <span className="text-blue-500">60%</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
