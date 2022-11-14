import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import CountryBorder from './CountryBorder';
import Language from "./Language";
import "./Country.css"

const Country = ({theme}) => {
  const {id} = useParams();
  const {data: country, error, isPending} = useFetch('https://restcountries.com/v2/alpha?codes=' + id);
  
    return !isPending ? (
      <div className={`country-details ${theme}`}>
          {country && <img src={country[0].flags.png}></img> }
          <div className="country-info">
            {country && <div className="country-name title">{country[0].name}</div>}
            <div className="country-facts">
              <div className="facts-left">
                <div className="native-name">
                  <span className="title">Native Name: </span>
                  {country && <span>{country[0].nativeName}</span>}
                </div>
                <div className="population">
                  <span className="title">Population: </span>
                  {country && <span>{country[0].population.toLocaleString()}</span>}
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
                  {country && <span>{country[0].topLevelDomain[0]}</span>}
                </div>
                <div className="currency">
                  <span className="title">Currency: </span>
                  {country && country[0].currencies[0].name}
                </div>
                <div className="Languages">
                  <span className="title">Languages: </span>
                  {country && <Language languages={country[0].languages}/>}
                </div>
              </div>
            </div>
            <div className="border-countries">
              <div className="title">Border Countries:</div>
              {country && <CountryBorder countries={country[0].borders} theme={theme}/>}
            </div>
          </div>
        </div>
    ):(<div className='loader'></div>)
}

export default Country;