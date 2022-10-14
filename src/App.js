import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  /*
  const [data, setData] = useState({})
  
  
  const url = "https://restcountries.com/v3.1/all";

  axios.get(url).then((response) => {
    setData(response.data)
  })
*/
const url = 'https://restcountries.com/v3.1/name/japan';
const [countries, setCountries] = useState([])

  const fetchCountryData = async() => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    console.log(countries);
  }

  useEffect(() => {
    fetchCountryData()
}, [])

const Countries = () => {
  const [countries, setCountries] = useState([])

  const fetchCountryData = async() => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    console.log(countries);
  }

  useEffect(() => {
    fetchCountryData()
}, [])
}

  return (
    <div className="App">

      <Navbar />
      <header>

        <div id="navbar">
          <span>Where in the World?</span>
          <span>Light Mode</span>
        </div>
        <Home />
        <div id="filter">
          <div id="search">search</div>
          <div id="region-filter">filter by region</div>
        </div>
      </header>

      <main id="all-countries">
        <div id="pharse">In the world we have 250 countries</div>
        <div className="country">
          <img src="https://flagcdn.com/w320/us.png"></img>
          <div className="country-name">United States of America</div>
          <div className="quick-facts">
            <div className="population">
              <span className="title">Population: </span>
              <span>329484123</span>
            </div>
            <div className="region">
              <span className="title">Region: </span>
              <span>Americas</span>
            </div>
            <div className="capital">
              <span className="title">Capital: </span>
              <span>Washington, D.C.</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>{/*scountries.map(country) => {
          const { id } = country

          return (
            <article 
          )
        })*/}
        </div>
      </footer>
    </div>
  );
}

export default App;
