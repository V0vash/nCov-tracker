import React,{useState, useEffect} from 'react';
import { Card, CardContent} from '@material-ui/core';
import Header from './components/header/header';
import InfoBox from './components/info-box/infoBox';
import {getResource, getAllCountries} from './services/service';
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});

//first load = worldwide
  useEffect(() => {
    getResource('/all')
    .then(data =>{
      setCountryInfo(data);
     });
  },[]);

  useEffect(() =>{
    getAllCountries()
      .then((countries)=>{
        setCountries(countries);
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

          {/* map */}
        
      </div>

  
        <Card className="app__right">
          <CardContent>
            <h3>Cases by country</h3>
          </CardContent>
        </Card>
      

      {/* {Header} */}
    </div>
  );
}

export default App;
