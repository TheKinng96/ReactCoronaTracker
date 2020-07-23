import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core';

import InfoBox from './components/Header.InfoBox/InfoBox.components';
import Map from './components/Map/Map';
import Table from './components/Side.Table/Table.components'
import LineGraph from './components/Side.LineGraph/LineGraph.component'
import { sortData, beautifyStat } from './helper/RankSorting';

import "./App.css"
import { AppContainer, HeaderCard, HeaderCardContent, InfoContainer } from './App.styledComponent'
import 'leaflet/dist/leaflet.css'

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
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

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
    <AppContainer id="App">
      <div className="left">
        <HeaderCard>
          <HeaderCardContent>
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
          </HeaderCardContent>
        </HeaderCard>

        <InfoContainer>
          <InfoBox
            isRed
            active={casesType === 'cases'}
            onClick={e => setCasesType('cases')}
            title='Infected'
            cases={beautifyStat(countryInfo.todayCases)}
            total={beautifyStat(countryInfo.cases)} />
          <InfoBox
            active={casesType === 'recovered'}
            onClick={e => setCasesType('recovered')}
            title='Recovery'
            cases={beautifyStat(countryInfo.todayRecovered)}
            total={beautifyStat(countryInfo.recovered)} />
          <InfoBox
            isBlue
            active={casesType === 'deaths'}
            title='Deaths'
            onClick={e => setCasesType('deaths')}
            cases={beautifyStat(countryInfo.todayDeaths)}
            total={beautifyStat(countryInfo.deaths)} />
        </InfoContainer>
        
        <Map 
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
          casesType={casesType}
          />
      </div>

      <Card className="right">
        <CardContent>
          <h3>List of countries</h3>
          <Table countries={tableData} />
          <h3 className="graphName">Graph of {casesType.toUpperCase()}</h3>
          <LineGraph casesType={casesType}/>
        </CardContent>
      </Card>
    </AppContainer>
  )
}

export default App;
