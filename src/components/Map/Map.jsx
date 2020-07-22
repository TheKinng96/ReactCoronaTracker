import React from 'react';
import { Map as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet';
import styled from 'styled-components'
import numeral from 'numeral'



const MapContainer = styled.div`
  height: 500px;
  background-color: white;
  padding: 1rem;
  border-radius: 1.2rem;
  margin-top: 1rem;
  box-shadow: 0 0 8px -4px rgba(0,0,0,0.5);

  &> .leaflet-container {
    height: 100%
  }
`
const InfoFlag = styled.div`
  height: 80px;
  width: 100%100px;
  background-size: cover;
  border-radius: 8px;

  & img {
    width: 100px;
    border-radius:5px;
  }
`

const CountryName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
  margin-top: 0.5rem;
`

const BasicInfoDiv = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`

const casesTypeColor = {
  cases: {
    hex: "red",
    multiplier: 800,
  },
  recovered: {
    hex: "green",
    multiplier: 1200,
  },
  deaths: {
    hex: "blue",
    multiplier: 2000,
  }
}

function Map({ countries, casesType, center, zoom }) {

  console.log(countries)
  return (
    <MapContainer>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {countries.map(country => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColor[casesType].hex}
            fillColor={casesTypeColor[casesType].hex}
            radius={Math.sqrt(country[casesType])*casesTypeColor[casesType].multiplier}
            key={country.countryInfo.iso2}
          >
            <Popup>
              <div className="info-container">
                <InfoFlag style={{backgroundImage:`url(${country.countryInfo.flag})`}}></InfoFlag>
                <CountryName>{country.country}</CountryName>
                <BasicInfoDiv>Cases: {numeral(country.cases).format("0,0")}</BasicInfoDiv>
                <BasicInfoDiv>recovered: {numeral(country.recovered).format("0,0")} </BasicInfoDiv>
                <BasicInfoDiv>Deaths: {numeral(country.deaths).format("0,0")}</BasicInfoDiv>
              </div>
            </Popup>
          </Circle>
        ))}
        
        
      </LeafletMap>
    </MapContainer>
  )
}

export default Map
