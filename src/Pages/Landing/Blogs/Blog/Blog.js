import React from 'react';
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    const { _id, title, img, description, blogExtUri } = blog;
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
                <h3 className="mt-6 text-sm text-gray-500">
                    {/* <a href={blogExtUri}>
                        <span className="absolute inset-0" />
                        {title}
                    </a> */}
                    <Link to={`/blogs/${_id}`}>
                        {/* <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-md text-gray-100 font-semibold uppercase tracking-wide">Details</button> */}
                        <span className="absolute inset-0" />
                        {title}
                    </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{description.slice(0, 120)}...</p>
            </div>
        </>
    );
};

export default Blog;