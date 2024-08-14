









import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-8   md:py-12 sm:px-20 pl-2 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">FreshFeast</h2>
                        <p className="mb-4 text-sm">
                            FreshFeast offers a delightful selection of gourmet foods, prepared with the highest quality ingredients. 
                            Discover our variety of fresh and delicious options today!
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"  className=' border   rounded-full   px-1 py-1'>
                                <FaFacebookF size={24} className='text-white        hover:text-yellow-400' />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  className=' border   rounded-full   px-1 py-1'>
                                <FaTwitter size={24} className='text-white hover:text-yellow-400'/>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"  className=' border   rounded-full   px-1 py-1 '  >
                                <FaLinkedinIn size={24} className='text-white hover:text-yellow-400'/>
                            </a>
                        </div>
                    </div>

                    {/* Second Column: Company Links */}
                    <div className='lg:ml-32'>
                        <h2 className="md:text-3xl text-2xl font-bold mb-2">Company</h2>
                        <ul className="space-y-2 text-sm">
                            <li><NavLink to="/" className="hover:text-yellow-400">Home</NavLink></li>
                            <li><NavLink to="/delivery" className="hover:text-yellow-400">Delivery</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-yellow-400">About Us</NavLink></li>
                            <li><NavLink to="/privacy" className="hover:text-yellow-400">Privacy Policy</NavLink></li>
                        </ul>
                    </div>

                    {/* Third Column: Get in Touch */}
                    <div>
                        <h2 className="text-2xl  md:text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-2">
                            Phone: <a href="tel:+1234567890" className="hover:text-yellow-400">+1 (234) 567-890</a>
                        </p>
                        <p>
                            Email: <a href="mailto:contact@freshfeast.com" className="hover:text-yellow-400">contact@freshfeast.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
