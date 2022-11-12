import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './SearchBar.css';
import Back from './Back';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import Country from './Country';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="Body">
      <Router>
        <Navbar theme={theme} setTheme={setTheme}/>
        <div className="App">
            <div className='content'>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/details/:id">
                  <div className='single-country'>
                    <Back />
                    <Country />
                  </div>
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
