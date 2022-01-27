import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating";
import useAuth from "../../../hooks/useAuth";

const BlogDetails = () => {
    const [loading, setLoading] = useState(false);

    const [blog, setBlog] = useState({});

    const navigate = useNavigate();

    const handleAddBlog = () => {
        navigate('/dashboard/add-blog');
    };

    const { title, location, address, description, category, cost, rating, img, name } = blog;
    const { blogId } = useParams();

    useEffect(() => {
        setLoading(true);

        fetch(`http://localhost:5000/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setLoading(false);
            });
    }, [blogId]);

    return (
        <>
            {
                loading ? <div>
                    <div class="flex justify-center items-center" style={{ minHeight: '80vh' }}>
                        <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
                        </div>
                    </div>
                </div>
                    :
                    <div className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <img src={img} alt="" className="lg:w-1/2 w-full object-cover object-center rounded" />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{address}, {location}</h2>
                                    <h2 className="text-base title-font text-gray-700 tracking-widest">{category}</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">
                                            <span className="title-font font-medium text-2xl text-gray-900">${cost}</span>
                                        </span>
                                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                            <Rating
                                                readonly
                                                initialRating={rating}
                                                emptySymbol="far fa-star text-yellow-500 ms-1 p-0"
                                                fullSymbol="fas fa-star text-yellow-500 ms-1 p-0"
                                            ></Rating>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed" style={{ textAlign: 'justify' }}>{description}</p>
                                    <p className="leading-relaxed" style={{ textAlign: 'justify' }}>{description}</p>
                                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                                    <div className="flex">
                                        <span className="title-font font-medium text-2xl text-gray-900"><span className="title-font text-gray-500">Author:</span> {name}</span>
                                        <button className="flex ml-auto text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded" onClick={handleAddBlog}>
                                            Add Blog
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default BlogDetails;