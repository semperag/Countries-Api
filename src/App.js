import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Country from './Country';

function App() {

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
        <Country />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
