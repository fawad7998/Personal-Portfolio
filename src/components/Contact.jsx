import React from 'react';

const Contact = () => {
    return (
        <section className="bg-gray-800 text-white p-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <input type="text" className="w-full p-3 bg-gray-700 rounded" placeholder="Full Name" />
                    </div>
                    <div className="mb-4">
                        <input type="email" className="w-full p-3 bg-gray-700 rounded" placeholder="Email Address" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="w-full p-3 bg-gray-700 rounded" placeholder="Mobile Number" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="w-full p-3 bg-gray-700 rounded" placeholder="Email Subject" />
                    </div>
                    <div className="mb-4">
                        <textarea className="w-full p-3 bg-gray-700 rounded" placeholder="Your Message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
