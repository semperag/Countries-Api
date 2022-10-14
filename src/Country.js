const Country = () => {
    const name = "United States of America";
    const population = 329484123;

    return (
        <div className="country">
          <img src="https://flagcdn.com/w320/us.png"></img>
          <div className="country-name">{name}</div>
          <div className="quick-facts">
            <div className="population">
              <span className="title">Population: </span>
              <span>(population)</span>
            </div>
            <div className="region">
              <span className="title">Region: </span>
              <span>Americas</span>
            </div>
            <div className="capital">
              <span className="title">Capital: </span>
              <span>Washington, D.C.</span>
            </div>
          </div>
        </div>
    );
}

export default Country;