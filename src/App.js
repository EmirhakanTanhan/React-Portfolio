import Home from "./Home/Home";
import Navbar from "./Doc/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./Doc/Footer";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import PortfolioDetails from "./Portfolio/PortfolioDetails/PortfolioDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>

                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route exact path="/portfolio/:link">
                            <PortfolioDetails />
                        </Route>
                        <Route exact path="/get-in-touch">
                            <Contact />
                        </Route>

                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
