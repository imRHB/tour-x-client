import React from 'react';

const Blog = ({ blog }) => {
    const { title, img, description, blogExtUri } = blog;
    return (
        <div>
            <img src={img} className="w-100" alt="" />
            {/* <h3 className="text-2xl font-bold">{blog.index + 1}</h3> */}
            <p>{description.slice(0, 150)}</p>
            <p className="text-xl text-blue-800 font-bold">
                <a href={blogExtUri}>{title}</a>
            </p>
        </div>
    );
};

export default Blog;