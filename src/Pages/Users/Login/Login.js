import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import logo from '../../../assets/images/logo.png';

const Login = () => {
    const [userData, setUserData] = useState({});

    const { isLoading, loginWithGoogle, loginWithEmailAndPassword } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
    };

    const handleEmailAndPasswordLogin = e => {
        e.preventDefault();

        loginWithEmailAndPassword(userData.email, userData.password, location, navigate);
    };

    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };

    return (
        <>
            {
                isLoading ? <div>
                    <div class="flex justify-center items-center" style={{ minHeight: '80vh' }}>
                        <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
                        </div>
                    </div>
                </div>
                    :
                    <div className="min-h-full flex items-center justify-center my-12 py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                            <div>
                                <img
                                    className="mx-auto h-auto w-48"
                                    src={logo}
                                    alt="Workflow"
                                />
                                <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
                            </div>

                            <form onSubmit={handleEmailAndPasswordLogin} className="mt-8 space-y-6">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            onBlur={handleOnBlur}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            onBlur={handleOnBlur}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>
                                        Login
                                    </button>
                                </div>
                            </form>
                            <div className="flex align-middle justify-center">
                                <span className="text-gray-500 text-xl">- or -</span>
                            </div>
                            <div>
                                <button
                                    onClick={handleGoogleLogin}
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Continue with Google
                                </button>
                            </div>
                            <div className="">
                                <p>New user?
                                    <Link to="/register" className="text-blue-500 underline hover:no-underline hover:text-blue-700 hover:bg-blue-200 mx-1">Registration</Link>
                                    is very easy
                                </p>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Login;