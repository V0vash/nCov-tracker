import React from 'react';
import {
    FormControl, Select, MenuItem
  } from '@material-ui/core';
import './header.css';

const Header = ({onCountryChange, country, countries}) => {

    return(
        <div className="app__header">
          <h1>Covid tracker</h1>
          <FormControl className='app__dropdown'>
            <Select
              variant='outlined'
              key={country}
              value={country}
              onChange={onCountryChange}>
                <MenuItem value='worldwide'>Worldwide</MenuItem>
                {countries.map((country) => {
                  return <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
                })}
              </Select>
          </FormControl>
          </div>
    )
}
export default Header;
