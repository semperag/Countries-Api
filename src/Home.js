import { getByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import CountryList from './CountryList';
import useFetch from './useFetch';
import "./Home.css"

const Home = ({theme}) => {
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
        <div>
            <div className={`searchbar ${theme}`}>
                <input className={`${theme}`} placeholder="Search for a country" onChange={searchCountries}></input>
                <div className="filterbar">
                    <div className={`title`}>Filter by Region</div>
                    <select className={`${theme}`} defaultValue={"all"} onChange={selectRegion} title="Filter By Region">
                        <option value="all">All countries</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        
            {!isPending ? (
            <div className="home">
                {countries && <CountryList countries={countries} name={search} theme={theme}/>}
            </div>):(<div className={`${theme}`}><div className='loader down'></div></div>)}
        </div>
    );
}

export default Home;