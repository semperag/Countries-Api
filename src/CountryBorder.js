import { Link } from "react-router-dom";

function CountryBorder({countries, name}) {
    return (
        <div className="country-list">
            {countries && countries.map((country) => (
                <div key={country}>
                    <Link to={`/details/${country}`}>
                        <div className="country-preview">
                            {country}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CountryBorder;