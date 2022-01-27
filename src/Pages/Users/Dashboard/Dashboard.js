import React from 'react';
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="md:flex">
            <div className="flex flex-col w-full md:w-1/4 lg:w-1/5 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600" >
                {/* <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Brand</h2> */}

                <div className="px-4 -mx-2" >
                    {/* <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" /> */}
                    <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200"> {user.displayName}</h4>
                    <p className="text-sm mx-2 font-light text-gray-800 dark:text-gray-200">{user.email}</p>
                </div >

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <>
                            <Link to="/home" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Home</Link>
                            {
                                user.email && <>
                                    {/* <Link to="/dashboard"><span className="me-3">{dashboardIcon}</span>Dashboard</Link> */}
                                    <Link to="add-blog" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Add Blog</Link>
                                    <Link to="my-blog" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">My Blog</Link>
                                </>
                            }

                            {
                                user.email && <>
                                    <Link to="manage-blogs" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Manage Blogs</Link>
                                    <Link to="make-admin" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Make Admin</Link>
                                    {/* <Link to="manage-order" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Manage Order</Link>
                                    <Link to="add-product" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Add Product</Link> */}
                                </>
                            }

                            <Link to='/login' onClick={logout} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Logout</Link>
                        </>
                    </nav>
                </div>
            </div >

            <div className="w-full md:w-3/4 lg:w-4/5 ml-2 mr-6 xl:mr-16">
                <Outlet />
            </div>
        </div >
    );
};

export default Dashboard;