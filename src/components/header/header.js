import React,{useState, useEffect} from 'react';
import {
    FormControl, Select, MenuItem
  } from '@material-ui/core';
// import {getAllCountries} from '../../services/service';
import './header.css';

const Header = ({onCountryChange, country, countries}) => {

//   const [countries, setCountries] = useState([]);
//   const [country, setCountry] = useState('worldwide');

//   useEffect(() =>{
//     getAllCountries()
//       .then((countries)=>{
//         console.log('>>>>',countries);
//         setCountries(countries);
//       });
      
//   },[])

//   const onCountryChange = (event) =>{
//     const countryCode = event.target.value;
//     setCountry(countryCode);
//   }

    return(
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
          </div>
    )
}
export default Header;
