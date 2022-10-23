import { getByPlaceholderText } from '@testing-library/react';
import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import CountryList from './CountryList';
import useFetch from './useFetch';

const Home = () => {
    const {data: countries, isPending, error} =  useFetch('https://restcountries.com/v3.1/all');

    return (
        <div className="home">

            {countries && <CountryList countries={countries}/>}
            {console.log('after')}
        </div>
    );
}

export default Home;