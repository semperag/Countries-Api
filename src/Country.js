import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Country = () => {
  const {id} = useParams();
  const {data: country, error, isPending} = useFetch('http://localhost:8000/countries/' + id);

    return (
        <div className="country">
          {country && <img src={country.image}></img> }
          <div className="country-container">
              {country && <div className="country-name title">{country.name}</div>}
              <div className="quick-facts">
                <div className="population">
                {country && <span className="title">Population: {country.population}</span>}
                <span></span>
                </div>
                <div className="region">
                {country && <span className="title">Region: {country.region}</span>}
                <span></span>
                </div>
                <div className="capital">
                {country && <span className="title">Capital: {country.captial}</span>}
                <span></span>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Country;