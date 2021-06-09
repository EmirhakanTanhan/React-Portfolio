import React, {useState} from 'react';
import './Contact.scss';
import svg_personalization from '../Assets/SVG/personalization.svg';

const Contact = () => {
    const [contact, setContact] = useState([
        {title: 'email', content: 'mailto:me@emirhakan.com'}
    ])

    const [link, setLink] = useState([
        {id: 1, link: 'https://github.com/EmirhakanTanhan', icon: 'fab fa-github'},
        {id: 2, link: 'https://dev.to/emirhakantanhan', icon: 'fab fa-linkedin'},
        {id: 3, link: 'https://www.linkedin.com/in/emirtanhan-/', icon: 'fab fa-dev'},
        {id: 4, link: 'https://www.instagram.com/emirhakn/?hl=tr', icon: 'fab fa-instagram'},
    ])

    console.log();

    return (
        <div className="contact">
            <div className="contact-img">
                <img draggable="false" src={svg_personalization}
                     alt="Emirhakan Tanhan (Crushing with this tie)"/>
            </div>
            <div className="content">
                <p>Whether you are interested to do business 💼 with me, want to chat ✋ about some of my content, or just
                    want to hang out 🍻, I am happy to talk to you.</p>
                <p>My <strong>preferred way</strong> of contact is via <a href={contact[0]['content']} className="link-green"
                                                         target="_blank">Email <i
                    className="fas fa-envelope-open-text"></i></a> .</p>
                <p>Feel free to check out my social media presence below to get to know me better.</p>
                <div className="links">
                    {link.map((item) => (
                        <a href={item.link} target="_blank"><i className={item.icon}></i></a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;