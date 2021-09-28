import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ListArea = () => {
    const [list, setList] = useState([
        {
            icon: 'fas fa-code',
            description: 'I\'m a software engineering student in Istanbul, Turkey. I usually deal with web development. If you have anything to say:',
            buttonTitle: 'Contact me',
            buttonLink: '/get-in-touch'
        },
        {
            icon: 'fab fa-react',
            description: '<a href="https://reactjs.org/" class="link" target="_blank">React.js</a> got me really interested, so for frontend work I\'m currently learning react.'
        },
        {
            icon: 'fab fa-node-js',
            description: 'For backend work, my go-to tool is <a href="https://nodejs.org/en/" class="link" target="_blank">Node.js</a>, but I also have experience in <a href="https://www.php.net/" class="link" target="_blank">PHP</a>.'
        }
    ]);

    return (
        <div className="list-area">
            {list.map((item) => (
                <div className="list">
                    <div className="icon">
                        <i className={item.icon}></i>
                    </div>
                    <div className="description">
                        <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                        <br/>
                        {item.buttonTitle && <Link to={item.buttonLink} className="button-green">{item.buttonTitle}</Link>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListArea;