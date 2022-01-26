import React from 'react';
import Header from "../Shared/Header/Header";
import AddBlog from "../Users/AddBlog/AddBlog";
import MakeAdmin from "../Users/Dashboard/MakeAdmin/MakeAdmin";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs/Blogs";

const Landing = () => {
    return (
        <div>
            {/* <Banner /> */}
            {/* <Blogs /> */}
            {/* <Header /> */}
            <AddBlog />
            {/* <MakeAdmin /> */}
        </div>
    );
};

export default Landing;