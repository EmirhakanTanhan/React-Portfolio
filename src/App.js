import Home from "./Home/Home";
import Navbar from "./Doc/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./Doc/Footer";
import About from "./About/About";

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
                        <Route exact path="/About">
                            <About />
                        </Route>

                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
