import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import Main from './components/Main';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact strict component={Main}/>
          <Route path="/gallery" exact component={Gallery}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Footer/>
        </div>
      </Router>
      
    );
  }
}

export default App;
