
import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const AppDownload = () => {
    return (
        <section className="mt-10 py-12 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-6">
                    For a Better Experience, Download the FreshFeast App
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.freshfeast"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-300 shadow-lg rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-yellow-400 transition"
                    >
                        <FaGooglePlay size={20} className="text-gray-800 sm:text-24" />
                        <span className="text-sm sm:text-base font-semibold text-center">Get it on Google Play</span>
                    </a>
                    <a 
                        href="https://apps.apple.com/app/id1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-300 shadow-lg rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-yellow-400 transition"
                    >
                        <FaApple size={20} className="text-gray-800 sm:text-24" />
                        <span className="text-sm sm:text-base font-semibold text-center">Download on the App Store</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
