import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import Home from "./page/home";
import Contact from "./page/contact";
import Briefcase from "./page/briefcase";
import { Form } from "react-bootstrap";

import "./App.css";
import Administrator from "./page/administrator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Stylebar">
            <Link style={{ color: "black", textDecoration: "none" }} to="/home">
              {" "}
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
          <Switch>
            <Route path="/administrator">
              <Administrator />
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/briefcase">
              <Briefcase></Briefcase>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
