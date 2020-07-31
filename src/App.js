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
          <div className='Stylebar'>
          <button className='Stylebutton'><Link style={{color:'black'}} to='/home'>Home</Link></button>
          <button className='Stylebutton'><Link style={{color:'black'}} to='/briefcase'>Portafolio</Link></button>
          <button className='Stylebutton'><Link style={{color:'black'}} to='/contact'>Contacto</Link></button>
          </div>
          <Switch>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/briefcase'>
              <Briefcase></Briefcase>
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
      
    )
  }
}

export default App;
