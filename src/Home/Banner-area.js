import React from 'react';
import svg_proud from '../Assets/SVG/feeling_proud.svg';
import svg_wandering from '../Assets/SVG/wandering.svg';
import svg_personalization from '../Assets/SVG/personalization.svg';
import svg_in_office from '../Assets/SVG/on_the_office.svg';
import svg_quitting_time from '../Assets/SVG/quitting_time.svg';
import svg_work_from_anywhere from '../Assets/SVG/working_from_anywhere.svg';


const BannerArea = () => {
    return (
        <div className="banner-area">
            <h1>Hello, I'm Emir
                <span role="img">👋</span>
                <br/>
                and I <span className="heart-symbol"><i className="fas fa-heart"></i></span> web development
            </h1>

            <div className="banner-img">
                <img draggable="false" src={svg_work_from_anywhere} alt="Emirhakan Tanhan (Casually sitting)"/>
            </div>

        </div>
    );
};

export default BannerArea;