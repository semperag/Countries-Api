import { Link } from "react-router-dom";
import styles from './App.css';

function CountryList({countries, name, population}) {
    return (
        <div className="country-list">
            {countries.map((country) => (
                <div className="country-preview" key={country.name.common}>
                    <Link to={`/details/${country.name.common}`}>
                        <div className="country">
                            <img src={country.flags.png}></img>
                            <div className="country-container">
                                <div className="country-name title">{country.name.common}</div>
                                <div className="quick-facts">
                                    <div className="population">
                                        <span className="title">Population: </span>
                                        <span>{country.population}</span>
                                    </div>
                                    <div className="region">
                                        <span className="title">Region: </span>
                                        <span>{country.region}</span>
                                    </div>
                                    <div className="capital">
                                        <span className="title">Capital: </span>
                                        <span>{country["capital"]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CountryList;