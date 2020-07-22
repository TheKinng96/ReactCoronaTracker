import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core';

import InfoBox from './components/Header.InfoBox/InfoBox.components';
import Map from './components/Map/Map';
import Table from './components/Side.Table/Table.components'
import LineGraph from './components/Side.LineGraph/LineGraph.component'

import "./App.css"
import 'leaflet/dist/leaflet.css'
import { sortData } from './helper/RankSorting';

const baseURL = 'https://disease.sh/v3/covid-19/all';
const countryURL = 'https://disease.sh/v3/covid-19/countries/';

//diamond princess
//ms zaandam

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 2.5, lng: 112.5 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([])

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
    })
  },[])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(countryURL)
        .then((response) => response.json())
        .then((data) => {

          let filteredData = [];

          data.filter(country => {
            if (country.countryInfo._id == null) {
              return false
            } else {
              return filteredData.push(country)
            }
          })
          // console.log(filteredData)

          const countries = filteredData.map(country => ({
            name: country.country,
            shortName: country.countryInfo.iso2
          }))

          // console.log(data)
          const sortedData = sortData(filteredData);
          setCountries(countries)
          setTableData(sortedData)
          setMapCountries(filteredData)
      }) 
    }
    getCountriesData();
  }, [])
  
  const onCountryChange = async (event) => {
    const selectedCountry = event.target.value;

    setCountry(selectedCountry)

    const url = selectedCountry === 'worldwide' ? baseURL : countryURL + selectedCountry;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(selectedCountry);
        setCountryInfo(data)
        console.log(data)
        setMapCenter([data.countryInfo.lat, data.countryInfo.long])
        setMapZoom(4)
      }).catch(error => {
        console.log(error);
        alert("No data from that selected country.")
    })
  }

  return (
    <div id="App">
      <div className="left">
        <Card >
          <CardContent className="header">
            <h1>Corona Tracker V2</h1>
            <FormControl className="country-list">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value='worldwide'>WorldWide</MenuItem>
                {countries.map(country => (
                  <MenuItem value={country.shortName} key={country.shortName}>{country.name}</MenuItem>
                ))}

              </Select>
            </FormControl>
          </CardContent>
        </Card>

        <div className="card-container">
          <InfoBox
            title='Infected'
            cases={countryInfo.todayCases}
            total={countryInfo.cases} />
          <InfoBox
            title='Recovery'
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered} />
          <InfoBox title='Deaths'
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths} />
        </div>
        
        <Map 
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
          />
      </div>

      <Card className="right">
        <CardContent>
          <h3>List of countries</h3>
          <Table countries={tableData} />
          <h3>Graph of cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  )
}

export default App;
