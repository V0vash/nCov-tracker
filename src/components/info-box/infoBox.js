import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import numeral from 'numeral';
import './infoBox.css';

function InfoBox({title, cases, total, activeCases, activeRecovered, activeDeath, onClick}) {
    return (
        <Card 
        onClick={onClick}
        className={`infoBox ${activeCases && 'infoBox--selected-cases'}
        ${activeRecovered && 'infoBox--selected-recovered'} ${activeDeath && 'infoBox--selected-deaths'}`}> 
            <CardContent>
                <Typography className="infoBox__title" color='textSecondary'>
                    {title}
                </Typography>
                <h2 className="infoBox__cases" >+{numeral(cases).format(0,0)}</h2>
                <Typography className="infoBox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
