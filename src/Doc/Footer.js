import React, {useState} from 'react';
import './Footer.css';

const Footer = () => {
    const [list, setList] = useState([
        {id:1, link: 'https://github.com/EmirhakanTanhan', icon: 'fab fa-github'},
        {id:2, link: 'https://dev.to/emirhakantanhan', icon: 'fab fa-linkedin'},
        {id:3, link: 'https://www.linkedin.com/in/emirtanhan-/', icon: 'fab fa-dev'},
        {id:4, link: 'https://www.instagram.com/emirhakn/?hl=tr', icon: 'fab fa-instagram'},
    ])

    return (
        <div className="footer">
            <span><i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by Emir © 2021</span>
            <br/>
            <div className="links">
                {list.map((item) => (
                    <a href={item.link} target="_blank"><i className={item.icon}></i></a>
                ))}
            </div>
        </div>
    );
};

export default Footer;