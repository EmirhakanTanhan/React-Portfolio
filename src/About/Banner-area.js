import React from 'react';
import img_1 from '../Assets/IMG/EmirIMG.jpg';

const BannerArea = () => {
    return (
        <div className="banner-area">
            <div className="img">
                <img src={img_1} alt="Emirhakan Tanhan (Killing it)"/>
            </div>
            <div className="description">
                <h1>Greetings <span className="wave">👋</span></h1>
                <p>I'm a software engineering student in Istanbul, Turkey. I'm new, yet confident in web design and 💻 building. If you watch closely, you can find me playing games, writing codes or watching that '70s show. If not any of those, I may be shopping ties 👔 online.</p>
            </div>
        </div>
    );
};

export default BannerArea;