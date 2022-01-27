import React, { useEffect, useState } from 'react';
import Rating from "react-rating";

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const handleApprove = (_id) => {
        const status = 'Approved';

        fetch(`http://localhost:5000/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(result => {

            })
    };

    const handleDelete = blogId => {
        const deleteConfirmation = window.confirm('Do you want to delete the blog?');

        if (deleteConfirmation) {
            fetch(`http://localhost:5000/blogs/${blogId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    alert('Blog deleted successfully');
                })
        }
        else {
            return;
        }
    };

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [blogs]);

    return (
        <div className="container mx-auto min-h-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            #
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Cost
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Rating
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((blog, index) => (
                                        <tr key={blog._id}>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{index + 1}</div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-auto w-full rounded" src={blog.img} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">{blog.name}</div>
                                                        <div className="text-sm text-gray-500">{blog.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{blog.title}</div>
                                                <div className="text-sm text-gray-500">{blog.location}, {blog.address}</div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{blog.category}</div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">${blog.cost}</div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    <Rating
                                                        readonly
                                                        initialRating={blog.rating}
                                                        emptySymbol="far fa-star text-yellow-500 ms-1 p-0"
                                                        fullSymbol="fas fa-star text-yellow-500 ms-1 p-0"
                                                    ></Rating>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {blog?.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="inline-flex" role="group" aria-label="Button group">
                                                    <button onClick={() => handleApprove(blog._id)} title="APPROVE" className="h-8 px-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l focus:shadow-outline hover:bg-indigo-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </button>
                                                    <button onClick={() => handleDelete(blog._id)} title="DELETE" className="h-8 px-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r focus:shadow-outline hover:bg-indigo-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ManageBlogs;