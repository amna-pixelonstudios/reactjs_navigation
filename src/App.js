import React from 'react';
import './App.css'; 
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Career from './components/Career';

// component in file
function Navigation() {
  return (
    <BrowserRouter>
      <div className="header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route path='/career' component={Career} />
    </BrowserRouter>
  );
}
 
export default Navigation; 

 
 