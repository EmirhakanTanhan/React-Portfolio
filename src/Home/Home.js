import React from 'react';
import './Home.css';
import BannerArea from "./Banner-area";
import ListArea from "./List-area";
import BlogArea from "./blog-area";


const Home = () => {
    return (
        <div className="home">
            <BannerArea />
            <ListArea />
            <BlogArea />
        </div>
    );
};

export default Home;