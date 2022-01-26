import React, { useEffect, useState } from 'react';

const MyBlog = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);

    const handleApprove = blogId => {
        console.log('approved', blogId);
    };

    const handleDelete = blogId => {
        console.log('deleted', blogId);
    };

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs));
    }, []);

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
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Cost
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((blog, index) => (
                                        <tr key={blog._id}>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{index + 1}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-auto w-full rounded" src={blog.img} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">name</div>
                                                        <div className="text-sm text-gray-500">email@email.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{blog.title}</div>
                                                <div className="text-sm text-gray-500">{blog.location}, {blog.address}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{blog.category}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">${blog.cost}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {/* <div className="text-sm text-gray-900">APPROVE</div>
                                                <div className="text-sm text-gray-500">DELETE</div> */}
                                                <div class="inline-flex" role="group" aria-label="Button group">
                                                    <button onClick={() => handleApprove(blog._id)} className="h-8 px-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l focus:shadow-outline hover:bg-indigo-800">APPROVE</button>
                                                    <button onClick={() => handleDelete(blog._id)} className="h-8 px-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r focus:shadow-outline hover:bg-indigo-800">DELETE</button>
                                                </div>
                                            </td>
                                            {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="edit" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td> */}
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

export default MyBlog;