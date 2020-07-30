import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'

import Home from './page/home';
import Contact from './page/contact';
import Briefcase from './page/briefcase';
import { Form } from 'react-bootstrap';
import './App.css'




class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <button><Link to='/home'>Home</Link></button>
          <button><Link to='/briefcase'>Portafolio</Link></button>
          <button><Link to='/contact'>Contacto</Link></button>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/briefcase'>
              <Briefcase></Briefcase>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
