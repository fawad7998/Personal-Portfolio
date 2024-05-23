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
    { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-500 text-7xl" /> },
    { name: 'React', icon: <DiReact className="text-blue-600 text-7xl" /> },
    { name: 'NodeJS', icon: <DiNodejsSmall className="text-green-600 text-7xl" /> },
    { name: 'HTML5', icon: <DiHtml5 className="text-blue-600 text-7xl" /> },
    { name: 'Css3', icon: <DiCss3 className="text-orange-600 text-7xl" /> },
    { name: 'Sass', icon: <DiSass className="text-pink-600 text-7xl" /> },
    { name: 'Bootstrap', icon: <DiBootstrap className="text-purple-600 text-7xl" /> },
    { name: 'MongoDB', icon: <DiMongodb className="text-green-600 text-7xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-900 text-7xl" /> },
    { name: 'Nextjs', icon: <RiNextjsFill className="text-black text-7xl" /> },
    { name: 'MUI', icon: <SiMui className="text-blue-500 text-7xl" /> },
    { name: 'Firebase', icon: <IoLogoFirebase className="text-yellow-500 text-7xl" /> },
    { name: 'Express', icon: <SiExpress className="text-black text-7xl" /> },
    { name: 'Github', icon: <DiGithubBadge className="text-black text-7xl" /> },

    { name: 'Webpack', icon: <SiWebpack className="text-blue-700 text-7xl" /> },
];

const Skills = () => {
    return (


        <div className="min-h-screen flex flex-col items-center justify-center p-16">
            <h1 className="text-6xl font-bold text-white mb-8">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-11">
                {skills.map((skill, index) => (
                    <>

                        {/* <div key={index} className="bg-gray-700 p-6 rounded-lg flex flex-col items-center hover:bg-gray-600 transition">
                            <div className="m-10" >{skill.icon} </div>
                            <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
                        </div> */}
                        {/*  */}
                        <div className="relative w-[190px] h-[254px] text-white transition-transform duration-500 cursor-pointer hover:-translate-y-5">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-400 rounded-xl"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-400 blur-[14px]"></div>
                            <span className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 bg-black bg-opacity-60 z-20 rounded-lg">
                                <span className="absolute top-0 left-0 w-1/2 h-full bg-white bg-opacity-10"></span>
                            </span>
                            <div className="relative p-2 z-30 w-full h-full flex flex-col items-center justify-center font-extrabold text-xl">
                                <div className="m-10">{skill.icon}</div>
                                <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div >

    );
};

export default Skills;
