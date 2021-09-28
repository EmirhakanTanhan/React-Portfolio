import React from 'react';
import svg_work_from_anywhere from '../Assets/SVG/working_from_anywhere.svg';


const BannerArea = () => {
    return (
        <div className="banner-area">
            <h1>Hello, I'm Emir
                <span className="wave">👋</span>
                <br/>
                and I <div className="heart" style={{"width" : "1.1rem", "height" : "1.1rem"}}></div> web development
            </h1>

            <div className="banner-img">
                <img draggable="false" src={svg_work_from_anywhere} alt="Emirhakan Tanhan (Casually sitting)"/>
            </div>

        </div>
    );
};

export default BannerArea;