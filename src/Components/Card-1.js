import React from 'react';

import './Components.scss';
import {Link} from "react-router-dom";

//{         ----props----
//  pills: ['Beginner', 'PHP', 'MySQL'],
//  title: 'Figuring out a...',
//  date: 'May 31, 2020',
//  link: '/figuring-out...',
//  link_blank: 'https://dev.to/emirhakan...',
//  img: 'email_2.svg'
//}

const Card1 = ({props, url}) => {
    return (
        <div className="card-1">
            {props.map((prop) => (
                <div className="card">
                    {prop.link_blank && <a target="_blank" href={prop.link_blank}>
                        <div className="card-img">
                            <img src={require(`../Assets/SVG/${prop.img}`).default} alt={prop.title}/>
                        </div>
                        <div className="chin">
                            <div className="pills">
                                {prop.pills.map((pill) => (
                                    <span>{pill}</span>
                                ))}
                            </div>
                            <div className="title">
                                <p>{prop.title}</p>
                            </div>
                            <div className="date">
                                <span>{prop.date}</span>
                            </div>
                        </div>
                    </a>}

                    {prop.link && <Link to={url + prop.link}>
                        <div className="card-img">
                            <img src={require(`../Assets/SVG/${prop.img}`).default} alt={prop.title}/>
                        </div>
                        <div className="chin">
                            <div className="pills">
                                {prop.pills.map((pill) => (
                                    <span>{pill}</span>
                                ))}
                            </div>
                            <div className="title">
                                <p>{prop.title}</p>
                            </div>
                            <div className="date">
                                <span>{prop.date}</span>
                            </div>
                        </div>
                    </Link>}
                </div>
            ))}
        </div>
    );
};

export default Card1;