import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

const TestingPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    // console.log(reviews);

    const handleStatus = (_id) => {
        const status = 'Approved';

        fetch(`https://ph-tour-x.herokuapp.com/reviews/${_id}`, {
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

    useEffect(() => {
        setLoading(true);

        fetch(`https://ph-tour-x.herokuapp.com/reviews?status=Approved`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {
                loading ? <div>
                    <div className="flex justify-center items-center" style={{ minHeight: '80vh' }}>
                        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
                        </div>
                    </div>
                </div>
                    :
                    <div className="m-48">
                        <div>
                            {
                                reviews.map(review => <li
                                    key={review._id}
                                    className="my-4"
                                >
                                    {review?.name}
                                    <span className="mx-16 bg-gray-300 rounded p-2">
                                        {review?.status}
                                    </span>
                                    <span>
                                        <button
                                            onClick={() => handleStatus(review._id)}
                                            className="border p-1 rounded bg-gray-100 hover:bg-gray-200">Approve</button>
                                    </span>
                                </li>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default TestingPage;