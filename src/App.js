import React,{useState, useEffect} from 'react';
import {
  FormControl, Select, MenuItem, Card
} from '@material-ui/core';
import {getAllCountries} from './services/service';
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() =>{
    getAllCountries()
      .then((countries)=>{
        console.log('>>>>',countries);
        setCountries(countries);
      });
      
  },[])

  const onCountryChange = (event) =>{
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid tracker</h1>
          <FormControl className='app__dropdown'>
            <Select
              variant='outlined'
              value={country}
              onChange={onCountryChange}>
                <MenuItem value='worldwide'>Worldwide</MenuItem>
                {countries.map((country) => {
                  return <MenuItem key={country.id} value={country.value}>{country.name}</MenuItem>
                })}
              </Select>
          </FormControl>
          {/* info boxes */}
          {/* map */}
        </div>
      </div>

        <div className="app__right">
        <Card>
          <h3>Cases by country</h3>
          {/* cases */}
          {/* graph */}
        </Card>
        </div>
      

      {/* {Header} */}
    </div>
  );
}

export default App;
