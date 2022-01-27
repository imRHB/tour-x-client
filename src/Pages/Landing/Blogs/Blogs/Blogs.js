import React, { useEffect, useState } from 'react';

import Blog from "../Blog/Blog";

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
                setBlogs(data.blogs);
                // setDisplayBlogs(data.blogs);
                // setPageCount(data.count);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    return (
        <div className="container mx-auto px-8">
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                        {/* <h2 className="text-2xl font-extrabold text-gray-900">BLOGS</h2> */}

                        <div className="my-6 space-y-12 lg:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
                            {
                                blogs.map(blog => <Blog
                                    blog={blog}
                                ></Blog>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-800">
                <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                    <div className="-mx-2">
                        {/*   
                        <a href="#" className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-200 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700">
                            1
                        </a>

                        <a href="#" className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-200 transform rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            2
                        </a>

                        <a href="#" className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-200 transform rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            3
                        </a>
 */}
                        {
                            [...Array(pageCount).keys()].map(number => <>
                                <button
                                    className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-200 transform hover:bg-gray-500 rounded dark:text-white dark:bg-gray-700"
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>
                            </>)
                        }
                    </div>

                    <div className="text-gray-500 dark:text-gray-400">
                        {/* <span className="font-medium text-gray-700 dark:text-gray-100">1 - 25</span> of {blogs.length} records */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;