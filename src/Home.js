import { getByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import CountryList from './CountryList';
import useFetch from './useFetch';

const Home = () => {
    const [region, setRegion] = useState('all');
    const [search, setSearch] = useState('');

    const {data: countries, isPending, error} =  useFetch('https://restcountries.com/v2/' + region);

    const selectRegion = (e) => {
        if (e.target.value === "all") {
            setRegion('all');
        }
        else {
            setRegion('region/' + e.target.value);
        }
    }

    const searchCountries = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    return (
        <><div className="searchbar">
            <input placeholder="Search for a country" onChange={searchCountries}></input>
            <div className="filterbar">
                <div className="title">Filter by Region</div>
                <select defaultValue={"all"} onChange={selectRegion}>
                    <option value="all">All countries</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
        
        <div className="home">

                {countries && <CountryList countries={countries} name={search}/>}
            </div></>
    );
}

export default Home;