import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../../hooks/useAuth";

const AddBlog = () => {
    const [blog, setBlog] = useState({});
    const [rating, setRating] = useState('');

    const { user } = useAuth();

    const handleRating = rating => {
        setRating(rating);
    };

    const handleOnBlur = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;
        const newBlog = { ...blog, rating, name: user.displayName, email: user.email, role: 'user' };
        newBlog[field] = value;
        setBlog(newBlog);
    };

    const handleBlogPost = (e) => {
        e.preventDefault();
        const newBlog = { ...blog, status: 'Pending' };

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(result => {
                alert('New blog added successfully')
            });

        e.target.reset();
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <label className="block mb-1" for="formGridCode_card">Rate Your Tour</label>
                        <ReactStars
                            className=""
                            name="rating"
                            onChange={handleRating}
                            size={40}
                            isHalf={true}
                            required
                        />
                    </div>
                </div>
                <form onSubmit={handleBlogPost} className="space-y-4 text-gray-700">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block mb-1" for="formGridCode_card">Image</label>
                            <input onBlur={handleOnBlur} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="img" id="formGridCode_card" placeholder="Insert direct image URL" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block mb-1" for="formGridCode_card">Blog Title</label>
                            <input onBlur={handleOnBlur} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="title" id="formGridCode_card" placeholder="Blog title" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block mb-1" for="formGridCode_card">Description</label>
                            <textarea onBlur={handleOnBlur} className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" name="description" placeholder="Description" required />
                        </div>
                    </div>
                    <div className="relative inline-block w-full text-gray-700">
                        <label className="block mb-1" for="formGridCode_card">Category</label>
                        <select onBlur={handleOnBlur} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" name="category" placeholder="Choose category" required>
                            <option>One Day</option>
                            <option>Weekend Tour</option>
                            <option>Group Tour</option>
                            <option>Package Holiday</option>
                            <option>Business Travel</option>
                            <option>Others</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 top-8 flex items-center px-2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block mb-1" for="formGridCode_card">Total Cost</label>
                            <input onBlur={handleOnBlur} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" name="cost" id="formGridCode_card" placeholder="Tour cost ($)" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="relative w-full px-2 md:w-1/2">
                            <label className="block mb-1" for="formGridCode_card">Location</label>
                            <select onBlur={handleOnBlur} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" name="location" placeholder="Choose category" required>
                                <option>Dhaka</option>
                                <option>Mymensingh</option>
                                <option>Rajshahi</option>
                                <option>Sylhet</option>
                                <option>Barisal</option>
                                <option>Chittagong</option>
                                <option>Rangpur</option>
                                <option>Khulna</option>
                                <option>Abroad/Foreign</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 top-8 flex items-center px-2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full px-2 md:w-1/2">
                            <label className="block mb-1" for="formGridCode_last">Address</label>
                            <input onBlur={handleOnBlur} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="address" id="formGridCode_last" required />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;