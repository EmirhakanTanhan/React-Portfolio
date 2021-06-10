import React from 'react';
import './Portfolio.scss';
import BannerArea from "./Banner-area";
import ListArea from "./List-area";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <BannerArea />
            <ListArea />
        </div>
    );
};

export default Portfolio;