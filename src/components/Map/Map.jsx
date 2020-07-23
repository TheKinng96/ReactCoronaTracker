import React from 'react';
import { Map as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet';
import numeral from 'numeral'
import { MapContainer, InfoFlag, CountryName, BasicInfoDiv} from './Map.styledcomponents'





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
