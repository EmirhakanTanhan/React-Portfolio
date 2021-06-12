import './Navbar.css';
import brand from '../Assets/IMG/EmirIMG.jpg'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="brand" to="/">
                <div className="brand-image">
                    <img src={brand} alt="Emirhakan Tanhan (Such cool, Much handsome)"/>
                </div>
                <h1>Emirhakan Tanhan</h1>
            </Link>
            <div className="links">
                <NavLink activeClassName="top-nav-active" exact to="/about">About</NavLink>
                <NavLink activeClassName="top-nav-active" to="/portfolio">Portfolio</NavLink>
                <NavLink className="button-green" to="/get-in-touch">Get in touch</NavLink>
            </div>
            <div className="bottom-links">
                <NavLink activeClassName="bottom-nav-active" exact to="/"><i className="fas fa-home"></i>Home</NavLink>
                <NavLink activeClassName="bottom-nav-active" exact to="/about"><i className="fas fa-info-circle"></i>About</NavLink>
                <NavLink activeClassName="bottom-nav-active" to="/portfolio"><i className="fas fa-laptop-code"></i>Portfolio</NavLink>
                <NavLink activeClassName="bottom-nav-active" exact to="/get-in-touch"><i className="fas fa-envelope-open-text"></i>Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;