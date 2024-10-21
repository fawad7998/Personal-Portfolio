import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DataContext } from '../../ContextApi/Context';
import { LinkArrow } from '../../assets/LinkArrow';
import { Link } from 'react-router-dom';

const Project = () => {
    const projects = useContext(DataContext)
    return (
        <>
            <div id='projects' className='scale-90 '>
                <h1 className="text-4xl font-bold text-center mb-8 pb-6">
                    <span className="text-white text-6xl">My</span> <span className="text-blue-300 text-6xl">Projects</span>
                </h1>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="container mx-auto pt-10"
                >
                    {projects.slice(0, 4).map((project, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-20 ${index % 2 !== 0 ? 'mt-20' : ''}`}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <div className="flex flex-col items-center justify-center ">
                                        <motion.h2
                                            initial={{ y: -50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            className="text-4xl text-blue-300 font-bold mb-5"
                                        >
                                            {project.ProjectTitle}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ y: -50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            className="text-lg text-justify text-white"
                                        >
                                            {project.Projectdescription}
                                        </motion.p>
                                        <motion.div
                                            initial={{ y: -50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            className="flex mt-10 text-lg text-gray-500"
                                        >
                                            <a href={project.GithubLink} target="_blank"> <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                                Github <LinkArrow className={'w-5 ml-1'} />
                                            </button></a>
                                            <a href={project.VercelLink} target="_blank"> <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                                Website <LinkArrow className={'w-5 ml-1'} />
                                            </button></a>
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-center">
                                        <motion.img
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            src={project.ImageUrl}
                                            alt="Project"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center ">
                                        <motion.img
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            src={project.ImageUrl}
                                            alt="Project"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <motion.h2
                                            initial={{ y: 50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            className="text-4xl text-blue-300 font-bold mb-5"
                                        >
                                            {project.ProjectTitle}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ y: 50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            className="text-lg text-justify text-white"
                                        >
                                            {project.Projectdescription}
                                        </motion.p>
                                        <motion.div
                                            initial={{ y: -50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                            className="flex mt-10 text-lg text-gray-500"
                                        >
                                            <a href={project.GithubLink} target="_blank"> <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                                Github <LinkArrow className={'w-5 ml-1'} />
                                            </button></a>
                                            <a href={project.VercelLink} target="_blank"> <button className="bg-blue-500 flex text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                                                Website <LinkArrow className={'w-5 ml-1'} />
                                            </button></a>
                                        </motion.div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </motion.div>
                <center className='mt-20'>
                    <Link to="/allprojects">
                        <button className="bg-blue-500 flex items-center justify-center h-16 w-48 text-[18px] text-white py-2 px-4 rounded mr-2 md:mr-4 mb-2 md:mb-0">
                            See All Projects
                        </button>
                    </Link>
                </center>
            </div>
        </>

    );
};

export default Project;
