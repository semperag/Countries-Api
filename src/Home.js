import { getByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import CountryList from './CountryList';
import useFetch from './useFetch';

const Home = () => {
    const [countries, setCountries] = useState([
        {
            image: "https://flagcdn.com/w320/us.png",
            name: "US",
            population: "1",
            region: "Americas",
            capital: "D.C",
            id: 1 }
    ])

    return (
        <div className="home">

            {<CountryList countries={countries}/>}
        </div>
    );
}

export default Home;