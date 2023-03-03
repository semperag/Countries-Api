import { Link } from "react-router-dom";
import styles from './CountryBorder.css';

function CountryBorder({countries, theme}) {
    return (
        <div className={`border-list ${theme}`}>
            {countries && countries.map((country) => (
                <Link to={`/Countries-Api/details/${country}`} key={country}>
                    {country}
                </Link>
            ))}
        </div>
    );
}

export default CountryBorder;