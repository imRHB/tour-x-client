import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="px-4 lg:py-12">
                <div className="lg:gap-4 lg:flex lg:mx-32 md:mx-8 mx-4">
                    <div
                        className="flex flex-col items-center justify-center lg:w-2/4 w-full mx-auto">
                        <h1 className="font-bold text-purple-800 text-9xl">404</h1>
                        <p
                            className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Oops!</span> Page not found
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you're looking for doesn't exist.
                        </p>

                        <Link to="/home" className="px-6 py-2 text-sm font-semibold rounded text-purple-800 bg-purple-100 hover:bg-purple-200">Go Home</Link>
                    </div>
                    <div className="mt-4 lg:w-2/4 w-full mx-auto">
                        <img
                            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="img"
                            className="object-cover h-auto rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;