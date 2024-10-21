import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');
        try {
            const response = await fetch('https://personal-portfolio-rust-iota.vercel.app/api/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    subject,
                    message,
                    name,
                    number,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Email sent successfully!');
                setName('');
                setEmail('');
                setNumber('');
                setSubject('');
                setMessage('');
            } else {
                setStatus(data.message);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('An error occurred while sending the email.');
        }
    };

    return (
        <div id='contact' className=" flex items-center justify-center pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-center mb-8 pb-6">
                        <span className="text-white text-6xl">Contact</span> <span className="text-blue-300 text-6xl">Me!</span>
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                id='name'
                                type="text"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                id='email'
                                type="email"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                id='number'
                                type="tel"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Mobile Number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id='subject'
                                type="text"
                                className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                                placeholder="Email Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            id='message'
                            className="bg-transparent text-gray-200 border border-blue-300 rounded-md p-2 w-full focus:outline-none"
                            placeholder="Your Message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
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
                {status && <p className="text-center text-white">{status}</p>}
            </div>
        </div>
    );
};

export default ContactForm;
