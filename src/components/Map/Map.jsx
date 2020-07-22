import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import styled from 'styled-components'
import { showDataOnMap } from '../../helper/CircleLoop';

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

function Map({ countries, casesType, center, zoom }) {
  return (
    <MapContainer>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
        
      </LeafletMap>
    </MapContainer>
  )
}

export default Map
