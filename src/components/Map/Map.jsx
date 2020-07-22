import React from 'react';
import { Map as LeafletMap, TileLayer, Circle } from 'react-leaflet';
import styled from 'styled-components'
import { showDataOnMap } from '../../helper/DrawingCircle';



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
  return (
    <MapContainer>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {/* {showDataOnMap(countries, casesType)} */}
        {countries.map(country => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColor[casesType].hex}
            fillColor={casesTypeColor[casesType].hex}
            radius={Math.sqrt(country[casesType])*casesTypeColor[casesType].multiplier}
            key={country.countryInfo.iso2}
          >
            {console.log(Math.sqrt(country.cases))}
          </Circle>
        ))}
        
        
      </LeafletMap>
    </MapContainer>
  )
}

export default Map
