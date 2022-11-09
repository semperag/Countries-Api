import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className="searchbar">
            <input placeholder="search for a country"></input>
            <div className="filterbar">
                <div>Filter by Region</div>
                <select defaultValue={"All counties"}>
                    <option value="All countries">All countries</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
}

export default SearchBar;