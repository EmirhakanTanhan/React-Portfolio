import React from 'react';
import './Portfolio.scss';
import BannerArea from "./Banner-area";
import ListArea from "./List-area";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";

const Portfolio = () => {
    const metaTag = useSelector(state => state.metaTag.find(item => item.page === 'portfolio'));

    return (
        <div className="portfolio">
            <Helmet>
                <title>{metaTag.title}</title>
                <meta name="description" content={metaTag.description}/>
            </Helmet>

            <BannerArea />
            <ListArea />
        </div>
    );
};

export default Portfolio;