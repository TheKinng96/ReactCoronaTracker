import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Card, CardContent } from '@material-ui/core';

import InfoBox from './components/Header.InfoBox/InfoBox.components';
import Map from './components/Map/Map'

import "./App.css"

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {

          const countries = data.map(country => ({
            name: country.country,
            shortName: country.countryInfo.iso2
          }))
          setCountries(countries)
      }) 
    }
    getCountriesData();
  }, [])
  
  const onCountryChange = (event) => {
    const selectedCountry = event.target.value;

    setCountry(selectedCountry)
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
                  <MenuItem value={country.shortName}>{country.name}</MenuItem>
                ))}

              </Select>
            </FormControl>
          </CardContent>
        </Card>

        <div className="card-container">
          <InfoBox title='Infected' cases={1234} total={1234} />
          <InfoBox title='Recovery' cases={1234} total={1234} />
          <InfoBox title='Death' cases={1234} total={1234} />
        </div>
        
          <Map />
      </div>

      <Card className="right">

      </Card>
    </div>
  )
}

export default App;
