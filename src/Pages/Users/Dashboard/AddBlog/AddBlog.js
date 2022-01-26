import React, { useState } from 'react';

const AddBlog = () => {
    const [blog, setBlog] = useState({});
    console.log(blog);

    const handleOnBlur = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;
        const newBlog = { ...blog };
        newBlog[field] = value;
        setBlog(newBlog);
    };

    const handleBlogPost = (e) => {
        e.preventDefault();
        console.log(blog);

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <form onSubmit={handleBlogPost} class="space-y-4 text-gray-700">
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <label class="block mb-1" for="formGridCode_card">Image</label>
                            <input onBlur={handleOnBlur} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="img" id="formGridCode_card" placeholder="Insert direct image URL" />
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <label class="block mb-1" for="formGridCode_card">Blog Title</label>
                            <input onBlur={handleOnBlur} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="title" id="formGridCode_card" placeholder="Blog title" />
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <label class="block mb-1" for="formGridCode_card">Description</label>
                            <textarea onBlur={handleOnBlur} class="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" name="description" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div class="relative inline-block w-full text-gray-700">
                        <label class="block mb-1" for="formGridCode_card">Category</label>
                        <select onBlur={handleOnBlur} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" name="category" placeholder="Choose category">
                            <option>One Day</option>
                            <option>Weekend Tour</option>
                            <option>Group Tour</option>
                            <option>Package Holiday</option>
                            <option>Business Travel</option>
                            <option>Others</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <label class="block mb-1" for="formGridCode_card">Total Cost</label>
                            <input onBlur={handleOnBlur} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" name="cost" id="formGridCode_card" placeholder="Tour cost ($)" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div class="relative w-full px-2 md:w-1/2">
                            <label class="block mb-1" for="formGridCode_card">Location</label>
                            <select onBlur={handleOnBlur} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" name="location" placeholder="Choose category">
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
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <div class="w-full px-2 md:w-1/2">
                            <label class="block mb-1" for="formGridCode_last">Address</label>
                            <input onBlur={handleOnBlur} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="address" id="formGridCode_last" />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;