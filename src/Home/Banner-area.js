import React from 'react';
import svg_proud from '../Assets/SVG/feeling_proud.svg';
import svg_wandering from '../Assets/SVG/wandering.svg';


const BannerArea = () => {
    return (
        <div className="banner-area">
            <h1>Hello, I'm Emir
                <span role="img">👋</span>
                <br/>
                and I <span className="heart-symbol"><i className="fas fa-heart"></i></span> web development
            </h1>

            <div className="banner-img">
                <img draggable="false" src={svg_proud} alt="Emirhakan Tanhan (Casually sitting)"/>
            </div>

        </div>
    );
};

export default BannerArea;