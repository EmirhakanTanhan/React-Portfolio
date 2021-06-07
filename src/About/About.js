import './About.scss';
import React from 'react';
import BannerArea from "./Banner-area";
import ListArea from "./List-area";

const About = () => {
    return (
        <div className="about">
            <BannerArea />
            <ListArea />
        </div>
    );
};

export default About;