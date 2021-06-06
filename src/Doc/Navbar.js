import './Navbar.css';
import brand from '../Assets/IMG/EmirIMG.jpg'
import {Link} from "react-router-dom";

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
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link className="green-button" to="/get-in-touch">Get in touch</Link>
            </div>
        </nav>
    );
};

export default Navbar;