import React from 'react';
import Header from "../Shared/Header/Header";
import AddBlog from "../Users/Dashboard/AddBlog/AddBlog";
import MakeAdmin from "../Users/Dashboard/MakeAdmin/MakeAdmin";
import ManageBlogs from "../Users/Dashboard/ManageBlogs/ManageBlogs";
import MyBlog from "../Users/Dashboard/MyBlog/MyBlog";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs/Blogs";

const Landing = () => {
    return (
        <div>
            <Banner />
            {/* <Blogs /> */}
            {/* <Header /> */}
            {/* <AddBlog /> */}
            {/* <ManageBlogs /> */}
            {/* <MyBlog /> */}
            {/* <MakeAdmin /> */}
        </div>
    );
};

export default Landing;