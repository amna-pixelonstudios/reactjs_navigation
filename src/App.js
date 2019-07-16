import React from 'react';
import './App.css'; 
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// component in file
function Navigation() {
  return (
    <BrowserRouter>
      <div className="header">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>
  );
}

export default Navigation; 
 