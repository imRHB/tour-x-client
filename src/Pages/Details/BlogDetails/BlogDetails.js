import React from 'react';
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { blogId } = useParams();

    return (
        <div>
            <h3>{blogId}</h3>
        </div>
    );
};

export default BlogDetails;