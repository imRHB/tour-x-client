import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

const TestingPage = () => {
    const [reviews, setReviews] = useState([]);

    const handleStatus = (_id) => {
        console.log(_id);

        const status = 'Approved';

        fetch(`http://localhost:5000/reviews/${_id}`, {
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
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.reviews));
    }, [reviews]);

    return (
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
    );
};

export default TestingPage;