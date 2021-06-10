import React, {useState} from 'react';

const ListArea = () => {
    const [workExp, setWorkExp] = useState([
        {
            date: 'Nov 2020 - Feb 2021 · Istanbul, Turkey',
            title: 'Internship as a full-stack developer',
            firm: '<a target="_blank" class="link-grey" href="https://www.frelens.com/">Frelens A.Ş.</a>'
        }
    ])

    const [education, setEdcuation] = useState([
        {
            date: '2018 - Current · Manisa, Turkey',
            title: 'Software Engineer\'s degree',
            school: 'Manisa Celal Bayar University'
        },
    ])

    const [techSkill, setTechSkill] = useState([
        {title: 'Learning', tech: '<a href="https://reactjs.org/" class="link-green" target="_blank">React.js</a>'},
        {title: 'Learning', tech: '<a href="https://nodejs.org/en/" class="link-green" target="_blank">Node.js</a>'},
        {title: 'Experienced', tech: '<a href="https://www.php.net/" class="link-green" target="_blank">PHP</a>'},
        {
            title: 'Experienced',
            tech: '<a href="https://www.javascript.com/" class="link-green" target="_blank">Javascript</a>'
        },
        {title: 'Experienced', tech: '<a href="https://jquery.com/" class="link-green" target="_blank">Jquery</a>'},
        {title: 'Experienced', tech: '<a href="https://www.mysql.com/" class="link-green" target="_blank">MySQL</a>'},
    ])

    const [language, setLanguage] = useState([
        {language: 'English 󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧', level: 'Fluent'},
        {language: 'Turkish 🇹🇷', level: 'Mothertongue'},
    ])

    return (
        <div className="over-list-area">

            <div className="list-area_1">{/*Work Experience*/}
                <h1>Work Experience <i className="fas fa-briefcase"></i></h1>

                {workExp.map((workExp) => (
                    <div className="list">
                        <div style={{"width": "auto"}}>
                            <div style={{"width": "1rem", "height": "1rem"}} className="dot"></div>
                        </div>
                        <div>
                            <span className="date">{workExp.date}</span>
                            <h1 className="title">{workExp.title}</h1>
                            <h2 className="firm" dangerouslySetInnerHTML={{__html: workExp.firm}}></h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-grey"></div>

            <div className="list-area_2">{/*Tech Skills*/}
                <h1>Tech Skills <i className="fas fa-wrench"></i></h1>

                <ul className="list">
                    {techSkill.map((tech) => (
                        <li className="item">
                            <span className="title">{tech.title}</span> · <span className="tech"
                                                                                dangerouslySetInnerHTML={{__html: tech.tech}}></span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-grey"></div>

            <div className="list-area_1">{/*Education*/}
                <h1>Education <i className="fas fa-graduation-cap"></i></h1>

                {education.map((edu) => (
                    <div className="list">
                        <div style={{"width": "auto"}}>
                            <div style={{"width": "1rem", "height": "1rem"}} className="dot"></div>
                        </div>
                        <div>
                            <span className="date">{edu.date}</span>
                            <h1 className="title">{edu.title}</h1>
                            <h2 className="firm">{edu.school}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-grey"></div>

            <div className="list-area_3">
                <h1>Language Skills <i className="fas fa-language"></i></h1>

                {language.map((lang) => (
                    <div className="list">
                        <span className="language">{lang.language}</span>
                        <span className="level">{lang.level}</span>
                    </div>
                ))}

            </div>

        </div>

    );
};

export default ListArea;