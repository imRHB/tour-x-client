import React from 'react';
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const { user, admin, logout } = useAuth();

    return (
        <div className="md:flex">
            <div className="flex flex-col w-full md:w-1/4 lg:w-1/5 px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600" style={{ minHeight: '80vh' }}>
                <div className="px-4 -mx-2">
                    <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200"> {user.displayName}</h4>
                    <p className="text-sm mx-2 font-light text-gray-800 dark:text-gray-200">{user.email}</p>
                </div>

                <div className="flex flex-col justify-between flex-1 my-10">
                    <nav>
                        <>
                            <Link to="/home" className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Home</Link>
                            {
                                user.email && !admin.admin && <>
                                    {/* <Link to="/dashboard"><span className="me-3">{dashboardIcon}</span>Dashboard</Link> */}
                                    <Link to="add-blog" className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Add Blog</Link>
                                    {/* <Link to="my-blog" className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">My Blog</Link> */}
                                </>
                            }

                            {
                                admin.admin && <>
                                    <Link to="manage-blogs" className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Manage Blogs</Link>
                                    <Link to="make-admin" className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Make Admin</Link>
                                    {/* <Link to="manage-order" className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Manage Order</Link>
                                    <Link to="add-product" className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Add Product</Link> */}
                                </>
                            }

                            <Link to='/login' onClick={logout} className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">Logout</Link>
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