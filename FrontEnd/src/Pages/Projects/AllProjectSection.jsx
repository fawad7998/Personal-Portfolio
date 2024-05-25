import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DataContext } from '../../ContextApi/Context';

const Allprojects = () => {
    const projects = useContext(DataContext)
    return (
        <div className='scale-90 pt-[100px]'>
            <h1 className="text-4xl font-bold text-center mb-8 pb-6">
                <span className="text-white text-6xl">My</span> <span className="text-blue-300 text-6xl">Projects</span>
            </h1>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="container mx-auto pt-10"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 !== 0 ? 'mt-20' : ''}`}
                    >
                        {index % 2 === 0 ? (
                            <>
                                <div className="flex flex-col items-center justify-center">
                                    <motion.h2
                                        initial={{ y: -50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="text-4xl font-bold mb-5"
                                    >
                                        {project.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ y: -50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="text-lg text-gray-500"
                                    >
                                        {project.description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="flex mt-10 text-lg text-gray-500"
                                    >
                                        <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                            Github
                                        </button>
                                        <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                            Website
                                        </button>
                                    </motion.div>
                                </div>
                                <div className="flex justify-center">
                                    <motion.img
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        src={project.imageUrl}
                                        alt="Project"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center">
                                    <motion.img
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        src={project.imageUrl}
                                        alt="Project"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <motion.h2
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="text-4xl font-bold mb-5"
                                    >
                                        {project.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="text-lg text-gray-500"
                                    >
                                        {project.description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ y: -50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="flex mt-10 text-lg text-gray-500"
                                    >
                                        <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                            Github
                                        </button>
                                        <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                            Website
                                        </button>
                                    </motion.div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Allprojects;
