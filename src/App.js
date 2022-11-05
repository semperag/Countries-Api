import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import Country from './Country';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="App">
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/details/:id">
                <Country />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
    </div>
    </Router>
  );
}

export default App;
