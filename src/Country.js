import useFetch from "./useFetch";

const Country = () => {
  const {id} = useParams();
  const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="country">
          <img src={image}></img>
          <div className="country-container">
            <div className="country-name">{name}</div>
            <div className="quick-facts">
                <div className="population">
                <span className="title">Population: </span>
                <span>{population}</span>
                </div>
                <div className="region">
                <span className="title">Region: </span>
                <span>{region}</span>
                </div>
                <div className="capital">
                <span className="title">Capital: </span>
                <span>{capital}</span>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Country;