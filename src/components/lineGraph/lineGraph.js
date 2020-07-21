import React,{useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import {getResource,_buildChartData} from '../../services/service';
import options from './lineGraphOptions';


function LineGraph() {

    const [data, setData] = useState({});

    useEffect(()=>{
        getResource('/historical/all?lastdays=120')
        .then(data =>{
            setData(_buildChartData(data));
        })
    }, []);

    console.log(data);

    return (
        <div>
            {/* check if data exist && not empty => render graph */}
            {data?.length > 0 && (
                <Line
                data={{
                    datasets:[
                        {
                         backgroundColor: 'rgba(204, 16, 52, 0.5)',
                         borderColor: '#CC1034',
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
