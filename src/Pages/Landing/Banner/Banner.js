import React from 'react';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)" }}>
                <div className="md:w-1/2">
                    <p className="text-3xl font-bold">Are You A Traveller?</p>
                    <p className="text-2xl mb-10 leading-none">Share your tour experience with us and explore others!</p>

                    <span className="flex flex-wrap gap-4">
                        <Link to="/dashboard/add-blog" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Share Experience</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;