import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../../assets/images/logo.png';

const Footer = () => {
    return (
        <div className="bg-slate-50">
            <div className="container mx-auto 2xl:px-36 xl:px-8 md:px-6 px-6 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-6">
                    <div>
                        <img src={logo} alt="" className="w-100 pb-6" />
                        <p>H#00 (o<sup>th</sup> Floor), Road #00.
                            <br />
                            New DOHS, Dhanmondi,
                            Dhaka, Bangaldesh
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-700">Explore</h4>
                        <nav className="flex flex-col text-blue-600 hover:text-blue-800">
                            <Link to="/home" className="hover:bg-slate-200">Home</Link>
                            <Link to="/blogs" className="hover:bg-slate-200">Blogs</Link>
                        </nav>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-700">Social</h4>
                        <nav className="flex flex-col text-blue-600 hover:text-blue-800">
                            <a href="https://www.facebook.com/" target="_blank" className="hover:bg-slate-200" rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.instagram.com/" target="_blank" className="hover:bg-slate-200" rel="noopener noreferrer">Instagram</a>
                            <a href="https://twitter.com/" target="_blank" className="hover:bg-slate-200" rel="noopener noreferrer">Twitter</a>
                            <a href="https://www.youtube.com/" target="_blank" className="hover:bg-slate-200" rel="noopener noreferrer">YouTube</a>
                            <a href="https://www.linkedin.com/" target="_blank" className="hover:bg-slate-200" rel="noopener noreferrer">LinkedIn</a>
                        </nav>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-700">About Us</h4>
                        <p>
                            We are amongst the largest travel company in the world. We are the planning, implementation and operations management arm of the TourX Group, Asia’s largest integrated tour and travel services provider. We are the trusted advisor of investors, Governments and other entities.
                        </p>
                    </div>
                </div>
                <div className="my-6">
                    <hr />
                </div>
                <div className="text-center my-6">
                    Copyright 2020 | <span className="font-bold">Tour<span className="text-red-700">X</span></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;