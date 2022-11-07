const Language = ({languages}) => {

    var languagesCount = languages.length;

    return (
        <span>
            {languages && languages.map((language, i) => (
                <span key={language.name}>
                    {language.name}
                    {(languagesCount-1 !== i) && <span>, </span>}
                </span>
            ))}
        </span>
    );
}

export default Language;