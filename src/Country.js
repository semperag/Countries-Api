import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Country = () => {
  const {id} = useParams();
  const {data: blog, error, isPending} = useFetch('http://localhost:8000/countries/' + id);

    return (
        <div className="country">
          <img ></img>
          <div className="country-container">
            <div className="country-name"></div>
            <div className="quick-facts">
                <div className="population">
                <span className="title">Population: </span>
                <span></span>
                </div>
                <div className="region">
                <span className="title">Region: </span>
                <span></span>
                </div>
                <div className="capital">
                <span className="title">Capital: </span>
                <span></span>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Country;