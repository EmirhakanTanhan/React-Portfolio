import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ListArea = () => {
    const [list, setList] = useState([
        {
            id: 1,
            icon: 'fas fa-code',
            description: 'I\'m a software engineering student in Istanbul, Turkey. If you have anything to say:',
            buttonTitle: 'Contact me',
            buttonLink: '/get-in-touch'
        },
        {
            id: 2,
            icon: 'fab fa-react',
            description: '<a href="https://reactjs.org/" class="link" target="_blank">React.js</a> got me really interested, so for frontend work i\'m currently learning react</a>.'
        },
        {
            id: 3,
            icon: 'fab fa-php',
            description: 'For backend work, my go-to tool is <a href="https://www.php.net/" class="link" target="_blank">PHP</a>, but i\'m also learning <a href="https://nodejs.org/en/" class="link" target="_blank">Node.js</a> to blend with react more smoothly.'
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