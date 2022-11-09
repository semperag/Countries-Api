import { Link } from "react-router-dom";
import styles from './CountryBorder.css';

function CountryBorder({countries, name}) {
    return (
        <div className="border-list">
            {countries && countries.map((country) => (
                <Link to={`/details/${country}`} key={country}>
                    {country}
                </Link>
            ))}
        </div>
    );
}

export default CountryBorder;