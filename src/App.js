import React,{useState, useEffect} from 'react';
import { Card, CardContent} from '@material-ui/core';
import {getResource, getAllCountries, _transformCountries, _sortData} from './services/service';
import Header from './components/header/header';
import InfoBox from './components/info-box/infoBox';
import Table from './components/table/table';
import Map from './components/map/map';
import LineGraph from'./components/lineGraph/lineGraph';

import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);


//first load = worldwide
  useEffect(() => {
    getResource('/all')
    .then(data =>{
      setCountryInfo(data);
     });
  },[]);

  useEffect(() =>{
    getAllCountries()
      .then((data)=>{
        const countries = data.map(_transformCountries);
        setCountries(countries);
        setTableData(_sortData(data));
      });
  },[]);

  const onCountryChange = (event) =>{
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === 'worldwide' ? '/all' : `/countries/${countryCode}`;
    getResource(url)
     .then(data =>{
      setCountry(countryCode);
      setCountryInfo(data);
     });
  };

  return (
    <div className="app">
      <div className="app__left">
        <Header 
        country={country}
        countries={countries}
        onCountryChange={onCountryChange}/>

        <div className="app__stats">
          <InfoBox title="Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>

        <Map/>

      </div>

  
        <Card className="app__right">
          <CardContent>
            <h3>Cases by country</h3>
            <Table countries={tableData}/>
            <h3>graph</h3>
            <LineGraph/>
          </CardContent>
        </Card>
      

      {/* {Header} */}
    </div>
  );
}

export default App;
