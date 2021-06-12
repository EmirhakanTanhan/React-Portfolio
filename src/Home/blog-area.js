import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Card1 from "../Components/Card-1";
import {useSelector} from "react-redux";

const BlogArea = () => {
    const blog = useSelector((state) => state.blog);

    return (
        <div className="blog-area">
            <div className="title">
                <h2>Articles <i className="fas fa-feather"></i></h2>
                <p>Once in a while, I write blog articles . Here are the most recent onces:</p>
            </div>

            <div className="blogs">
                <Card1 props={blog} />
            </div>
        </div>
    );
};

export default BlogArea;