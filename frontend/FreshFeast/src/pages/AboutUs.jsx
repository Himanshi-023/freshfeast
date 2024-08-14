// src/pages/AboutUs.js

import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                <p className="text-lg text-gray-600 mt-2">Learn more about FreshFeast</p>
            </header>

            <section className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        At FreshFeast, our mission is to provide you with the freshest and most delicious meals,
                        crafted with care and love. We believe in using locally-sourced ingredients to support our
                        community and ensure top-notch quality.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800">Himanshi</h3>
                                <p className="text-gray-600">Founder & CEO</p>
                                <p className="mt-2 text-gray-700">
                                    hey I am  passionate about healthy eating and believes in the power of fresh, high-quality ingredients.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                                <p className="text-gray-600">Head Chef</p>
                                <p className="mt-2 text-gray-700">
                                    John brings years of culinary experience and creativity to the kitchen, crafting exceptional dishes.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions or just want to say hello, feel free to reach out to us:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Email: <a href="mailto:info@freshfeast.com" className="text-blue-500">info@freshfeast.com</a></li>
                        <li>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></li>
                        <li>Address: 123 Fresh Feast Lane, Food City, FC 12345</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
