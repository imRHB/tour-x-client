import React from 'react';
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    const { _id, title, img, description, blogExtUri } = blog;
    return (
        <>
            <div key={title} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
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
                <p className="text-base font-semibold text-gray-900">{description}</p>
            </div>



            {/* <div className="shadow h-100 m-4">
                <img src={img} className="w-100" alt="" />
                <h3 className="text-2xl font-bold">{blog.index + 1}</h3>
                <div className="m-6">
                    <p className="text-xl text-blue-800 font-bold">
                        <a href={blogExtUri}>{title}</a>
                    </p>
                    <p>{description.slice(0, 150)}...</p>
                </div>
                <div>
                    <Link to={`/blogs/${_id}`}>
                        <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-md text-gray-100 font-semibold uppercase tracking-wide">Details</button>
                    </Link>
                </div>
            </div> */}

            {/* <div class="flex items-center justify-center h-100">
            <div class="bg-white font-semibold text-center rounded border shadow px-8 py-12">
                <img class="mb-3 h-auto w-100 shadow-lg mx-auto" src={img} alt="" />
                <h1 class="text-lg text-gray-700">{title}</h1>
                <p class="text-xs text-gray-400 mt-4">{description}</p>
                <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-md text-gray-100 font-semibold uppercase tracking-wide">Details</button>
            </div>
        </div> */}
        </>
    );
};

export default Blog;