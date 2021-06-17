import React, {useState} from 'react';
import './Footer.css';
import {useSelector} from "react-redux";

const Footer = () => {
    const link = useSelector(state => state.link);

    return (
        <div className="footer">
            <span><i className="fas fa-code"></i> with <div className="heart" style={{"width" : ".7rem", "height" : ".7rem"}}></div> by Emir © 2021</span>
            <br/>
            <div className="links">
                {link.map((item) => (
                    <a href={item.link} target="_blank"><i className={item.icon}></i></a>
                ))}
            </div>
        </div>
    );
};

export default Footer;