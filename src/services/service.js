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
    return result;
}

const _transformCountries = (country) => {
    return{
        name: country.country,
        value: country.countryInfo.iso2,
        id: country.countryInfo.iso2 + country.countryInfo._id
    };
}

const _sortData = (data) =>{
    const sortedData = [...data];
    return sortedData.sort((a,b) => a.cases > b.cases ? -1 : 1)
}

const _buildChartData = (data, casesType = 'cases') =>{
    const chartData = [];
    let lastDataPoint ;

    for(let date in data[casesType]){
        if(lastDataPoint){
            const newDataPoint ={
                x: date,
                y: data[casesType][date] -lastDataPoint  //cases
            }
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
}

export {getResource,
        getAllCountries,
    _transformCountries,
    _sortData,
    _buildChartData}