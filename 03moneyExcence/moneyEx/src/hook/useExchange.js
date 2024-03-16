import { useState, useEffect } from 'react';

function useExchange(currency = 'USD') {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/a37927af7d4e14cf2cfc254a/latest/${currency}`)
            .then((response) => response.json())
            .then((response) => setData(response["conversion_rates"]))
            .catch((err) => {
                console.log(err);
            });
    }, [currency]);
    
    return data;
}

export default useExchange;
