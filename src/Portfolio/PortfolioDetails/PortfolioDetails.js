import React from 'react';
import './PortfolioDetails.scss';
import {useParams, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import brand from "../../Assets/IMG/EmirIMG.jpg";

const PortfolioDetails = () => {
    let {link} = useParams();
    link = '/' + link;

    const work = useSelector(state => state.work.find(item => item.link === link));

    return (
        <div className="portfolio-details">
            <div className="banner">
                <div className="banner-img">
                    <img src={require(`../../Assets/SVG/${work.img}`).default} alt={work.title}/>
                </div>
                <div className="banner-description">
                    <h1>{work.title}</h1>
                    <p>
                        {work.date} · by Emirhakan Tanhan
                        <div className="brand-image">
                            <img src={brand} alt="Emirhakan Tanhan (Such cool, Much handsome)"/>
                        </div>
                    </p>
                </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html: work.details}}>
            </div>
        </div>
    );
};

export default PortfolioDetails;