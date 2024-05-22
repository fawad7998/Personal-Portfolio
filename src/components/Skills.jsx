// import React from 'react';

// const Skills = () => {
//     return (
//         // <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-4 bg-[#081B29]" >
//         //     <section className="bg-gray-800 text-white p-6">
//         //         <div className="container mx-auto">
//         //             <h2 className="text-4xl font-bold mb-6 text-center">My Skills</h2>
//         //             <div className="grid grid-cols-2 gap-6">
//         //                 <div>
//         //                     <h3 className="text-2xl mb-4">Coding Skills</h3>
//         //                     <ul>
//         //                         <li className="mb-2">HTML <span className="text-blue-500">90%</span></li>
//         //                         <li className="mb-2">CSS <span className="text-blue-500">80%</span></li>
//         //                         <li className="mb-2">JavaScript <span className="text-blue-500">65%</span></li>
//         //                         <li className="mb-2">Python <span className="text-blue-500">75%</span></li>
//         //                     </ul>
//         //                 </div>
//         //                 <div>
//         //                     <h3 className="text-2xl mb-4">Professional Skills</h3>
//         //                     <ul>
//         //                         <li className="mb-2">Web Design <span className="text-blue-500">95%</span></li>
//         //                         <li className="mb-2">Web Development <span className="text-blue-500">67%</span></li>
//         //                         <li className="mb-2">Graphic Design <span className="text-blue-500">85%</span></li>
//         //                         <li className="mb-2">SEO Marketing <span className="text-blue-500">60%</span></li>
//         //                     </ul>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </section>
//         // </div>
//         <>

//         </>
//     )
// };

// export default Skills;



// src/components/Skills.js
import React from 'react';

const skills = [
    { name: 'Python', icon: 'path-to-python-icon.png' },
    { name: 'Flutter', icon: 'path-to-flutter-icon.png' },
    { name: 'Ubuntu', icon: 'path-to-ubuntu-icon.png' },
    { name: 'Git Source Control', icon: 'path-to-git-icon.png' },
    { name: 'ERPNext', icon: 'path-to-erpnext-icon.png' },
    { name: 'Mongodb', icon: 'path-to-mongodb-icon.png' },
    { name: 'Html & CSS', icon: 'path-to-html-css-icon.png' },
    { name: 'JavaScript', icon: 'path-to-javascript-icon.png' },
    { name: 'Frappe', icon: 'path-to-frappe-icon.png' },
    { name: '.Net', icon: 'path-to-dotnet-icon.png' },
    { name: 'Flask Microweb Framework', icon: 'path-to-flask-icon.png' },
    { name: 'MySql', icon: 'path-to-mysql-icon.png' },
    { name: 'AWS Server', icon: 'path-to-aws-icon.png' },
];

const Skills = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-4">
            <h1 className="text-4xl font-bold text-white mb-8">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-700 p-6 rounded-lg flex flex-col items-center hover:bg-gray-600 transition">
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                        <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
