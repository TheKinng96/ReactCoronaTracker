import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import numeral from 'numeral'
import styled from 'styled-components';

const GraphContainer = styled.div`
  flex-grow: 1;
`

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0.0")
      }
    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat:"ll",
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a")
          }
        }
      }
    ]
  }
}

const buildChartData = (data, casesType) => {
  const chartData = [];
  let previousPoint;

  for (let date in data.cases) {
    if (previousPoint) {
      let newPoint = {
        x: date,
        y: data[casesType][date] - previousPoint,
      };
      chartData.push(newPoint);
    }
    previousPoint = data[casesType][date]
  }
  return chartData;
}

function LineGraph({casesType}) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fecthData = async () => {
      await fetch('http://disease.sh/v3/covid-19/historical/all?lastdays=120')
      .then((response) => {return response.json()})
      .then((data) => {
          console.log(data)

        const chartData = buildChartData(data, casesType);
        setData(chartData)
      }).catch(err => {
        console.log(err)
      })
    }

    fecthData()
    
  }, [casesType])

  return (
    <GraphContainer>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [{
              data: data,
              backgroundColor: "rgba(204,16,52,0.5",
              borderColor: "#CC1034"
            }]
          }}
          options={options}
          />
      )}
      
    </GraphContainer>
  )
}

export default LineGraph;
