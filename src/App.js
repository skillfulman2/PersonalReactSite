import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Posts';
import About from './components/pages/About';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/contact-me' component={ContactMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
