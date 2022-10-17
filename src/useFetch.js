import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPendings] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPendings(false)
            })
            .catch(err => {
                setIsPendings(false)
                setError(err.message);
            })
        }, 1000)
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;