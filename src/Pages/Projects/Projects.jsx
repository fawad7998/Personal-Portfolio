import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
    return (
        <div id='project' className='scale-90'>
            <h1 className="text-4xl font-bold text-center mb-5 pb-5">
                <span className="text-white text-6xl">My</span> <span className="text-blue-300 text-6xl">Projects</span>
            </h1>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="container mx-auto pt-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center justify-center">
                        <motion.h2
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="text-4xl font-bold mb-5"
                        >
                            Relentless performance
                        </motion.h2>
                        <motion.p
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="text-lg text-gray-500"
                        >
                            Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.
                        </motion.p>
                    </div>
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
                            alt="Car"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                            alt="Car"
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
                            Designed for efficiency
                        </motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="text-lg text-gray-500"
                        >
                            With a drag coefficient of just .212 Cd, Honda e is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance.
                        </motion.p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    <div className="flex flex-col items-center justify-center">
                        <motion.h2
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="text-4xl font-bold mb-5"
                        >
                            Relentless performance
                        </motion.h2>
                        <motion.p
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="text-lg text-gray-500"
                        >
                            Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.
                        </motion.p>
                    </div>
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
                            alt="Car"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                            alt="Car"
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
                            Designed for efficiency
                        </motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="text-lg text-gray-500"
                        >
                            With a drag coefficient of just .212 Cd, Honda e is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
