import React from 'react';
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiMongodb,
    DiGithubBadge,
} from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui, SiExpress, SiTypescript, SiWebpack } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";


const skills = [
    { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-500 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'React', icon: <DiReact className="text-blue-600 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'NodeJS', icon: <DiNodejsSmall className="text-green-600 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'HTML5', icon: <DiHtml5 className="text-blue-600 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Css3', icon: <DiCss3 className="text-orange-600 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Sass', icon: <DiSass className="text-pink-600 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Bootstrap', icon: <DiBootstrap className="text-purple-600 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'MongoDB', icon: <DiMongodb className="text-green-600 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-900 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Nextjs', icon: <RiNextjsFill className="text-black text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'MUI', icon: <SiMui className="text-blue-500 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Firebase', icon: <IoLogoFirebase className="text-yellow-500 text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Express', icon: <SiExpress className="text-black text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Github', icon: <DiGithubBadge className="text-black text-5xl sm:text-6xl md:text-7xl" /> },
    { name: 'Webpack', icon: <SiWebpack className="text-blue-700 text-5xl sm:text-6xl md:text-7xl" /> },
];

const Skills = () => {
    return (
        <>
            <div id='skills' className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 lg:p-20">
                <h1 className="text-4xl font-bold text-center mb-8 pb-6">
                    <span className="text-white text-5xl sm:text-6xl">My</span> <span className="text-blue-300 text-5xl sm:text-6xl">Skills</span>
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {skills.map((skill, index) => (
                        <div key={index} className="relative w-[120px] sm:w-[150px] md:w-[170px] h-[180px] sm:h-[200px] md:h-[234px] text-white transition-transform duration-500 cursor-pointer hover:-translate-y-5">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-400 rounded-xl"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-400 blur-[14px]"></div>
                            <span className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 bg-black bg-opacity-60 z-20 rounded-lg">
                                <span className="absolute top-0 left-0 w-1/2 h-full bg-white bg-opacity-10"></span>
                            </span>
                            <div className="relative p-2 z-30 w-full h-full flex flex-col items-center justify-center font-extrabold text-lg sm:text-xl">
                                <div className="m-8 sm:m-10">{skill.icon}</div>
                                <h2 className="text-sm sm:text-md md:text-lg font-semibold text-white">{skill.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
