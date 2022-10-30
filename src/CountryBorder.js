function CountryBorder({countries, name}) {
    return (
        <span>border</span>
        {countries.map((country) => (
            <div>{country}</div>
        ))}
    )
}

export default CountryBorder;