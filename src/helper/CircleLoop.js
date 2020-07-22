import React from 'react';
// import numeral from 'numeral';
import { CircleMarker, Popup } from 'react-leaflet';

const casesTypeColor = {
  cases: {
    hex: "red",
    multiplier: 800,
  },
  recovered: {
    hex: "#7DD71D",
    multiplier: 1200,
  },
  deaths: {
    hex: "#FB4443",
    multiplier: 2000,
  }
}

export const showDataOnMap = (data, casesType = "cases") => {

  console.log(data)

  data.map(country => (
    <CircleMarker 
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColor[casesType].hex}
      fillColor={casesTypeColor[casesType].hex}
      radius= {Math.sqrt(country[casesType])*casesTypeColor[casesType].multiplier}
      >
          {console.log(casesTypeColor[casesType].hex)}
      <Popup>
          <h1>I am a pop up</h1>
      </Popup>
    </CircleMarker>
  ))
}