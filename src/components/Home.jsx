import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="text-white p-6 flex flex-col items-start justify-center h-screen bg-cover bg-center pt-24" style={{ backgroundImage: `url("/home.jpg")` }}>
                <div className="container mx-auto text-left">
                    <h1 className="text-5xl font-bold mb-4">Hi, I'm Jacob Aiden</h1>
                    <h2 className="text-3xl text-blue-500 mb-4">Frontend Developer</h2>
                    <p className="mb-8 max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet laborum, autem architecto esse in eaque eius reprehenderit atque sed maxime ex nobis dolorem nemo velit accusantium voluptatibus.</p>
                    <div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4">Hire Me</button>
                        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">Let's Talk</button>
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    <a href="#" className="text-blue-500 hover:text-white">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-white">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-white">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
