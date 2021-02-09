import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Login from "./components/Login";
import firebase from './components/Firebase';
import ContactMe from './components/pages/ContactMe';

function App() {
  const [signedIn, setSignedIn] = useState(false)
  useEffect( ()=> {
    firebase.auth().onAuthStateChanged(
        user => {
            if(user){
                setSignedIn(true)
                //remove local storage variable
                localStorage.removeItem("Logging in")
            }else{
                setSignedIn(false)
            }
        }
    )
})

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact-me' component={ContactMe} />
          <Login path='/login' signedIn={signedIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
