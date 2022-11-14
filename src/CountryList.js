import { Link } from "react-router-dom";
import './CountryList.css';

function CountryList({countries, name, theme}) {

    const sort = [].concat(countries)
    .sort((a, b) => a.name > b.name ? 1 : -1);

    const myData = sort.filter(country => {
        return country.name.toLowerCase().includes(name.toLowerCase());
    });

    return (
        <div className={`country-list`}>
            {myData.map((country) => (
                <div className={`country-preview ${theme}`} key={country.alpha3Code}>
                    <Link to={`/details/${country.alpha3Code}`}>
                        <div className="country">
                            <img src={country.flags.png}></img>
                            <div className="country-container">
                                <div className="country-name title">{country.name}</div>
                                <div className="quick-facts">
                                    <div className="population">
                                        <span className="title">Population: </span>
                                        <span>{country.population.toLocaleString()}</span>
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