import React from 'react';
import {HashRouter as Router, Switch, route} from 'react-router-dom'
import Home from './components/home.js'
import Portfolio from './components/projects'
import Resume from './components/resume'
import Contact from './components/contact'

import './App.css';

function App() {
  return ( 
      <Router>
        <div className="App">
         <Switch>
            <route exact path="/"><Home /></route>
            <route path="/projects"><Portfolio /></route>
            <route path="/contact"><Contact /></route>
            <route path="/resume"><Resume /></route>
         </Switch>
        </div>
      </Router>
     
    
  );

  

}

export default App;
