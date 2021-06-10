import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Card1 from "../Components/Card-1";

const BlogArea = () => {
    const [blog, setBlog] = useState([
        {
            pills: ['Beginner', 'PHP', 'MySQL'],
            title: 'Figuring out a verification system via email link',
            date: 'May 31, 2021',
            link_blank: 'https://dev.to/emirhakantanhan/figuring-out-a-verification-system-via-email-link-59p1',
            img: 'email_2.svg'
        },
    ])

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