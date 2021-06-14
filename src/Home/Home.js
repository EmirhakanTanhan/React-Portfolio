import React from 'react';
import './Home.scss';
import {Helmet} from "react-helmet";
import BannerArea from "./Banner-area";
import ListArea from "./List-area";
import BlogArea from "./blog-area";
import {useSelector} from "react-redux";


const Home = () => {
    const metaTag = useSelector(state => state.metaTag.find(item => item.page === 'home'));

    return (
        <div className="home">
            <Helmet>
                <title>{metaTag.title}</title>
                <meta name="description" content={metaTag.description}/>
            </Helmet>

            <BannerArea />
            <ListArea />
            <BlogArea />
        </div>
    );
};

export default Home;