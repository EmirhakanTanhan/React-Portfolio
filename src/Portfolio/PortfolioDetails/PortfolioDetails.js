import React from 'react';
import './PortfolioDetails.scss';
import {useParams} from "react-router-dom";

const PortfolioDetails = () => {
    const {link} = useParams();

    return (
        <div className="portfolio-details">
            <div className="banner">

            </div>
            <div className="content">

            </div>
        </div>
    );
};

export default PortfolioDetails;