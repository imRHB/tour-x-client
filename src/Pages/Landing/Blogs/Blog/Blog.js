import React from 'react';
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Blog = ({ blog }) => {
    const { _id, title, img, description, rating, address } = blog;

    return (
        <>
            <div key={title} className="group relative">
                <div className="relative w-full h-100 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                        src={img}
                        alt=""
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="flex flex-wrap my-4 align-middle justify-between">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        {address}
                    </div>
                    <div className="text-sm text-gray-900">
                        <Rating
                            readonly
                            initialRating={rating}
                            emptySymbol="far fa-star text-yellow-500 ms-1 p-0"
                            fullSymbol="fas fa-star text-yellow-500 ms-1 p-0"
                        ></Rating>
                    </div>
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                    <Link to={`/blogs/${_id}`}>
                        <span className="absolute inset-0" />
                        {title}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">{description.slice(0, 120)}...</p>
            </div>
        </>
    );
};

export default Blog;