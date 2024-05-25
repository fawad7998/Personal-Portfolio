import React from 'react';

const ContactForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-0 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-center  mb-8 pb-6">
                        <span className="text-white text-6xl">Contact</span> <span className="text-blue-300 text-6xl">Me!</span>
                    </h1>
                </div>
                <form className="mt-8 space-y-6" action="https://getform.io/f/jawxmxgb" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Full Name"
                                name='Name'
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Email Address"
                                name='Email'
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Mobile Number"
                                name='Number'
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Email Subject"
                                name='Subject'
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="Message"
                            className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                            placeholder="Your Message"
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
}

export default ContactForm;
