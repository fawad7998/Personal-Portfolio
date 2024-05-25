import React, { useState } from "react";

const NewProjectAdd = () => {
    const [formData, setFormData] = useState({
        ProjectTitle: '',
        Projectdescription: '',
        GithubLink: '',
        VercelLink: '',
        ImageUrl: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:6969/api/createProjects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Post created successfully');
                setFormData({ title: '', description: '' });
            } else {
                console.error('Failed to create post');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-0 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-center  mb-8 pb-6">
                        <span className="text-white text-6xl">Add</span> <span className="text-blue-300 text-6xl">Projects</span>
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="https://getform.io/f/jawxmxgb" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="ProjectTitle"
                                name='ProjectTitle'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="description"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="GithubLink"
                                name='GithubLink'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="VercelLink"
                                name='VercelLink'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="ImageUrl"
                                name='ImageUrl'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="Projectdescription"
                            onChange={handleChange}
                            className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                            placeholder="Project Description"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProjectAdd;
