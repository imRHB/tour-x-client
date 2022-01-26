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

            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                        <h2 className="text-2xl font-extrabold text-gray-900">BLOGS</h2>

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10">
                            {
                                blogs.map(blog => <Blog
                                    blog={blog}
                                ></Blog>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;