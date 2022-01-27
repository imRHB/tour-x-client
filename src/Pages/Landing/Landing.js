import React from 'react';
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs/Blogs";
import CallToAction from "./CallToAction/CallToAction";

const Landing = () => {
    return (
        <div>
            <Banner />
            <Blogs />
            <CallToAction />
        </div>
    );
};

export default Landing;