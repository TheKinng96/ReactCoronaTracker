import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import numeral from 'numeral'

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

function LineGraph(casesType = "cases") {
  const [data, setData] = useState({});

    const buildChartData = (data, casesType = 'cases') => {
    const chartData = [];
    let previousPoint;

      for (let date in data.cases ) {
        if (previousPoint) {
          const newPoint = {
            x: date,
            y: data[casesType][date] - previousPoint,
          };
          chartData.push(newPoint);
        }
        previousPoint = data[casesType][date]
      }
      return chartData;
  }

  useEffect(() => {
    const fecthData = (async () => {
      await fetch('http://disease.sh/v3/covid-19/historical/all?lastdays=120')
      .then((response) => response.json())
      .then((data) => {
        const chartData = buildChartData(data, "cases");
        setData(chartData)
      })
    })

    fecthData()
    
  }, [casesType])

  return (
    <div>
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
      
    </div>
  )
}

export default LineGraph;
