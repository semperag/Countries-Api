import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import Back from './Back';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import Country from './Country';


function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }
  
  useEffect(() => {
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  },[])
  
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {}, [theme]);

  return !isLoading ? (
    <div className={`body ${theme}`}>
    <Router>
      <Navbar theme={theme} setTheme={setTheme}/>
        <div className="App">
            <div className='content'>
              <Switch>
                <Route exact path="/">
                  <Home theme={theme}/>
                </Route>
                <Route path="/details/:id">
                  <div className='single-country'>
                    <Back theme={theme}/>
                    <Country theme={theme}/>
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
  ):(<div className={`${theme}`}><div className='loader'></div></div>)
}

export default App;
