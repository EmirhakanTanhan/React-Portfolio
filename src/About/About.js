import './About.scss';
import React from 'react';
import BannerArea from "./Banner-area";
import ListArea from "./List-area";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";

const About = () => {
    const metaTag = useSelector(state => state.metaTag.find(item => item.page === 'about'));

    return (
        <div className="about">
            <Helmet>
                <title>{metaTag.title}</title>
                <meta name="description" content={metaTag.description}/>
            </Helmet>

            <BannerArea />
            <ListArea />
        </div>
    );
};

export default About;