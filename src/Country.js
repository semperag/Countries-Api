import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Country = () => {
  const {id} = useParams();
  console.log(id);
  const {data: country, error, isPending} = useFetch('https://restcountries.com/v3.1/name/' + id);
  country && console.log("name = " + JSON.stringify(country[0].currencies));
    if (country && country[0]) {
     for (let curr of country[0].currencies) {
      console.log("name = " + curr.name);
     } 
    }
    return (
        <div className="country-details">
          {country && <img src={country[0].flags.png}></img> }
          <div className="country-info">
            {country && <div className="country-name title">{country[0].name.common}</div>}
            <div className="country-facts">
              <div className="facts-left">
                <div className="native-name">
                  <span className="title">Native Name: </span>
                  {country && <span>{country[0].population}</span>}
                </div>
                <div className="population">
                  <span className="title">Population: </span>
                  {country && <span>{country[0].population}</span>}
                </div>
                <div className="region">
                  <span className="title">Region: </span>
                  {country && <span>{country[0].region}</span>}
                </div>
                <div className="sub-region">
                  <span className="title">Sub Region: </span>
                  {country && <span>{country[0].subregion}</span>}
                </div>
                <div className="capital">
                  <span className="title">Capital: </span>
                  {country && <span>{country[0].capital}</span>}
                </div>
              </div>
              <div className="facts-right">
                <div className="domain">
                  <span className="title">Top Level Domain: </span>
                  {country && <span>{country[0].tld[0]}</span>}
                </div>
                <div className="currency">
                  <span className="title">Currency: </span>
                  {country && <span>{country[0].population}</span>}
                </div>
                <div className="Languages">
                  <span className="title">Languages: </span>
                  {country && <span>{country[0].capital}</span>}
                </div>
              </div>
            </div>
            <div>Border Countries:</div>
            <div>these are countries</div>
          </div>
        </div>
    );
}

export default Country;