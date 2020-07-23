import React,{useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import {getResource,_buildChartData} from '../../services/service';
import options from './lineGraphOptions';

import './lineGraph.css';

function LineGraph({casesType = 'cases'}) {

    const [data, setData] = useState({});

    useEffect(()=>{
        getResource('/historical/all?lastdays=120')
        .then(data =>{
            setData(_buildChartData(data, casesType));
        })
    },[casesType]);


    let bgc, bc;

    switch(casesType) {
        case 'cases':
            bgc='rgba(204, 16, 52, 0.5)';
            bc='#CC1024';
                break;
        case 'recovered':
            bgc='rgba(125, 215, 29, 0.5)';
            bc='#7dd71d';
                break;
        case 'deaths':
            bgc='rgba(251, 68, 67, 0.5)';
            bc='#fb4443';
                break;
        default:
            break;
      }

    return (
        <div className='graph__block'>
            <h3>Worldwide {casesType}</h3>
            {/* check if data exist && not empty => render graph */}
            {data?.length > 0 && (
                <Line
                data={{
                    datasets:[
                        {
                         backgroundColor: bgc,
                         borderColor: bc,
                         data: data,
                    },
                 ],
                }}
                options = {options}
                /> 
            )}
           
        </div>
    )
}

export default LineGraph
