import React from 'react';
// import numeral from 'numeral';
import { Circle, Popup } from 'leaflet';

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
  if (data && data.length > 0) {
    data.map(country => (
    <Circle 
      center={{lat: country.countryInfo.lat, lng:country.countryInfo.long}}
      fillOpacity={0.4}
      color={casesTypeColor[casesType].hex}
      fillColor={casesTypeColor[casesType].hex}
      radius= {Math.sqrt(country[casesType])*casesTypeColor[casesType].multiplier}
      >
          {console.log(casesTypeColor[casesType].hex)}
      <Popup>
          <h1>I am a pop up</h1>
      </Popup>
    </Circle>
  ))
  } else {
    console.log('lol')
  }
  
}