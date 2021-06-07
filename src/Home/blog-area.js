import React, {useState} from 'react';
import img_1 from '../Assets/IMG/verification_via_email.jpg';
import {Link} from "react-router-dom";

const BlogArea = () => {
    const [blog, setBlog] = useState([
        {
            pills: ['Beginner', 'PHP', 'MySQL'],
            title: 'Figuring out a verification system via email link',
            date: 'May 31, 2020',
            link: 'https://dev.to/emirhakantanhan/figuring-out-a-verification-system-via-email-link-59p1'
        }
    ])

    return (
        <div className="blog-area">
            <div className="title">
                <h2>Articles <i className="fas fa-feather"></i></h2>
                <p>Once in a while, I write blog articles . Here are the most recent onces:</p>
            </div>

            <div className="blogs">

                {blog.map((blog) => (
                    <div className="blog">
                        <a target="_blank"
                           href={blog.link}>
                            <div className="img">
                                <img src={img_1} alt="verification_via_email"/>
                            </div>
                            <div className="chin">
                                <div className="pills">
                                    {blog.pills.map((pill) => (
                                        <span>{ pill }</span>
                                    ))}
                                </div>
                                <div className="title">
                                    <p>{ blog.title }</p>
                                </div>
                                <div className="date">
                                    <span>{ blog.date }</span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default BlogArea;