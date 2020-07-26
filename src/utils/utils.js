import React from 'react';
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

const casesTypeColors = {
    cases: {
        hex: '#CC1024',
        rgb: 'rgb(204, 16, 52)',
        half_op: 'rgba(204, 16, 52, 05)',
        multiplier: 800
    },
    recovered: {
        hex: '#7dd71d',
        rgb: 'rgb(125, 215, 29)',
        half_op: 'rgba(125, 215, 29, 05)',
        multiplier: 1200
    },
    deaths: {
        hex: '#fb4443',
        rgb: 'rgb(251, 68, 67)',
        half_op: 'rgba(251, 68, 67, 05)',
        multiplier: 2000
    }
}


//draw circle on map with tooltips
export const showDataOnMap = (data, casesType='cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
        >
        
            <Popup>
                {console.log('circle data',country)}
                <h2>{country.country}</h2>
                <img src={country.countryInfo.flag} alt={country.country}></img>
                <h3>Total cases: {numeral(country.cases).format(0,0)}</h3>
                <h3>Total recovered: {numeral(country.recovered).format(0,0)}</h3>
                <h3>Total deaths: {numeral(country.deaths).format(0,0)}</h3>
            </Popup>

        </Circle>
    ))
);