import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

// import blogs from '../../../../assets/data/blogs.json';
import Blog from "../Blog/Blog";

// const blogExtUri = 'blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    // const [displayBlogs, setDisplayBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const size = 4;

    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.blogs, data.count);
                setBlogs(data.blogs);
                // setDisplayBlogs(data.blogs);
                // setPageCount(data.count);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    return (
        <div className="container mx-auto p-8">
            <div>
                {
                    [...Array(pageCount).keys()].map(number => <>
                        <button
                            style={{ margin: '8px', padding: '8px', border: '1px solid' }}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number}</button>
                    </>)
                }
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                    ></Blog>)
                }
            </div>


            {/* <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <a
                        herf={blogs[0].blogExtUri}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        herf={blogs[0].blogExtUri}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                            <span className="font-medium">97</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <a
                                herf={blogs[0].blogExtUri}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                            Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                            <a
                                herf={blogs[0].blogExtUri}
                                aria-current="page"
                                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                1
                            </a>
                            <a
                                herf={blogs[0].blogExtUri}
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                2
                            </a>
                            <a
                                herf={blogs[0].blogExtUri}
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                            >
                                3
                            </a>
                            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                ...
                            </span>
                            <a
                                herf={blogs[0].blogExtUri}
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                            >
                                8
                            </a>
                            <a
                                herf={blogs[0].blogExtUri}
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                9
                            </a>
                            <a
                                herf={blogs[0].blogExtUri}
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                10
                            </a>
                            <a
                                herf={blogs[0].blogExtUri}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </nav>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Blogs;