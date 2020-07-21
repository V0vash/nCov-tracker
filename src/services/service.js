const _apiBase = 'https://disease.sh/v3/covid-19';


const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }


       return await res.json();
}

const getAllCountries = async () => {
    const result = await getResource(`/countries`);
    return result.map(_transformCountries)
}

const _transformCountries = (country) => {
    return{
        name: country.country,
        value: country.countryInfo.iso2,
        id: country.countryInfo._id
    };
}

export {getResource,
        getAllCountries,}