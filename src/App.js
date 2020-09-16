import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./page/home";
import Contact from "./page/contact";
import Briefcase from "./page/briefcase";
import Footer from "components/footer/index";
import "./App.css";
import Administrator from "./page/administrator";

class App extends Component {
  render() {
    const minHeight = window.innerHeight - 70;
    return (
      <div className="App">
        <Router>
          <div className="Stylebar">
            <Link style={{ color: "black", textDecoration: "none" }} to="/home">
              <button className="Stylebutton">Home</button>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/briefcase"
            >
              <button className="Stylebutton">Portafolio</button>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/contact"
            >
              <button className="Stylebutton">Contacto</button>
            </Link>
          </div>
          <div style={{ minHeight: minHeight }} className="containerScreen">
            <Switch>
              <Route path="/administrator">
                <Administrator />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/briefcase">
                <Briefcase />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
