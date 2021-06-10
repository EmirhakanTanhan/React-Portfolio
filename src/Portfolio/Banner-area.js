import React from 'react';
import wandering from '../Assets/SVG/wandering.svg';
import {Link} from "react-router-dom";

const BannerArea = () => {
    return (
        <div className="banner-area">
            <div className="banner-img">
                <img src={wandering} alt="Emirhakan Tanhan (Casually sitting)"/>
            </div>
            <div className="content">
                <p>I must warn you, I'm a beginner, a rookie 👶. My code and logic might not be so correct, and by the
                    manuel. Also, you might come across to some work that is undone. But aside that, feel free to play
                    with demos.</p>
                <p>If you have anything to say:</p>
                <Link to="/get-in-touch" className="button-green">Contact me</Link>
            </div>
        </div>
    );
};

export default BannerArea;