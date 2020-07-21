import numeral from 'numeral';

const options ={
    legend:{
        display: false,
    },
    elements:{
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips:{
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format('+0,0');
            },
        },
    },
    scales:{
        xAxes:[
            {
                type: 'time',
                time: {
                    format: 'MM/DD/YY',
                    tooltipFormat:'ll',
                },
            },
        ],
        yAxes:[
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function(value, index, values) {
                        return numeral(value).format('0a');
                    },
                },
            },
        ],
    },
}

export default options;